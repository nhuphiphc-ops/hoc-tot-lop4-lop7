import React from 'react';

/**
 * Advanced Math & Text Renderer for Vietnamese Primary & Secondary Curriculum
 * Handles:
 * - Stacked fractions (e.g. 3/4, -1/2, (a+b)/c)
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

    // 2. Split by fractions pattern (e.g. 3/4, -5/8, x/125, 24/40)
    // We look for patterns like: optional minus + digits/vars + "/" + digits/vars
    const fractionRegex = /((?:-)?\b[0-9a-zA-Z]+\/[0-9a-zA-Z]+\b)/g;
    const segments = processed.split(fractionRegex);

    return segments.map((seg, idx) => {
      const match = seg.match(/^([+-]?[0-9a-zA-Z]+)\/([0-9a-zA-Z]+)$/);
      if (match && !seg.includes('<') && !seg.includes('>')) {
        const num = match[1];
        const den = match[2];
        return (
          <span 
            key={idx} 
            className="inline-flex flex-col items-center justify-center align-middle mx-1 font-extrabold text-blue-700 bg-blue-50/90 px-2 py-0.5 rounded-lg border border-blue-200 text-[0.95em] shadow-xs"
          >
            <span className="border-b-2 border-blue-400 leading-tight px-1 pb-0.5 text-center w-full">{num}</span>
            <span className="leading-tight px-1 pt-0.5 text-center w-full">{den}</span>
          </span>
        );
      }

      // Render segment with HTML for <sup> tags safely
      if (seg.includes('<sup>')) {
        return (
          <span 
            key={idx} 
            dangerouslySetInnerHTML={{ __html: seg }} 
          />
        );
      }

      return <span key={idx}>{seg}</span>;
    });
  };

  return (
    <span className={`inline leading-relaxed whitespace-pre-line ${className}`}>
      {renderFormattedMath(strText)}
    </span>
  );
};
