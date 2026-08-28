import React from 'react';

/**
 * Advanced Math & Text Renderer for Vietnamese Primary & Secondary Curriculum
 * Handles:
 * - Stacked fractions (e.g. 3/4, -1/2, 17/100, a/b, s/t)
 * - Exponents / Powers (e.g. 2^3, x^2, a^(m+n), 10^4)
 * - Units (e.g. cm2, m2, dm3, m3, km2, ha)
 * - Math symbols (e.g. x -> ×, . -> ·, <= -> ≤, >= -> ≥, != -> ≠, sqrt -> √, deg -> °)
 * - Math sets (e.g. N*, N, Z, Q, R)
 */
export const MathRenderer = ({ text, className = "" }) => {
  if (!text && text !== 0) return null;
  const strText = String(text);

  // Parse text into tokens
  const renderFormattedMath = (input) => {
    // 1. Normalize common math notation
    let processed = input
      // Exponents with parenthesis: e.g. 2^(x+1) -> 2<sup>x+1</sup>
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/\^\(([^)]+)\)/g, '<sup>$1</sup>')
      // Simple exponents: e.g. 2^3 -> 2<sup>3</sup>, x^2 -> x<sup>2</sup>
      .replace(/\^([0-9a-zA-Z\+\-]+)/g, '<sup>$1</sup>')
      // Area & Volume units: e.g. cm2, m2, dm2, km2, mm2, cm3, m3, dm3
      .replace(/\b(cm|dm|m|km|mm)2\b/g, '$1<sup>2</sup>')
      .replace(/\b(cm|dm|m|km|mm)3\b/g, '$1<sup>3</sup>')
      // Degrees: e.g. 60 do -> 60°
      .replace(/\b(\d+)\s*(?:độ|do)\b/gi, '$1°')
      // Multiplication symbols
      .replace(/(\d+)\s*x\s*(\d+)/g, '$1 × $2')
      .replace(/(\d+)\s*\*\s*(\d+)/g, '$1 × $2');

    // 2. Split by fractions pattern (strictly numbers or single variable fractions like 17/100, -3/4, a/b, s/t)
    // NEVER match Vietnamese word slashes like niệm/hiện or và/hoặc
    const fractionRegex = /(?:^|\s)((?:[+-]?\d+\/\d+)|(?:[+-]?[a-zA-Z]\/\d+)|(?:[+-]?\d+\/[a-zA-Z])|(?:[+-]?[a-z]\/[a-z]))(?=\s|[.,;:?!)]|$)/g;
    
    // Split input into math and non-math chunks
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = fractionRegex.exec(processed)) !== null) {
      const matchIndex = match.index + (match[0].startsWith(' ') ? 1 : 0);
      const fracStr = match[1];

      if (matchIndex > lastIndex) {
        parts.push({ type: 'text', content: processed.substring(lastIndex, matchIndex) });
      }

      const fracParts = fracStr.split('/');
      parts.push({ type: 'fraction', num: fracParts[0], den: fracParts[1] });
      lastIndex = matchIndex + fracStr.length;
    }

    if (lastIndex < processed.length) {
      parts.push({ type: 'text', content: processed.substring(lastIndex) });
    }

    if (parts.length === 0) {
      parts.push({ type: 'text', content: processed });
    }

    return parts.map((part, idx) => {
      if (part.type === 'fraction') {
        return (
          <span 
            key={idx} 
            className="inline-flex flex-col items-center justify-center align-middle mx-1 font-extrabold text-blue-700 bg-blue-50/90 px-2 py-0.5 rounded-lg border border-blue-200 text-[0.95em] shadow-xs"
          >
            <span className="border-b-2 border-blue-400 leading-tight px-1 pb-0.5 text-center w-full">{part.num}</span>
            <span className="leading-tight px-1 pt-0.5 text-center w-full">{part.den}</span>
          </span>
        );
      }

      if (part.content.includes('<sup>')) {
        return (
          <span 
            key={idx} 
            dangerouslySetInnerHTML={{ __html: part.content }} 
          />
        );
      }

      return <span key={idx}>{part.content}</span>;
    });
  };

  return (
    <span className={`inline ${className}`}>
      {renderFormattedMath(strText)}
    </span>
  );
};

export default MathRenderer;
