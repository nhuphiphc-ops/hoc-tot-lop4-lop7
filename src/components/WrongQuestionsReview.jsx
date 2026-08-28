import React from 'react';
import { 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Play, 
  BookOpen, 
  Lightbulb,
  Heart,
  Trash2,
  HelpCircle
} from 'lucide-react';
import { MathRenderer } from './MathRenderer';
import { useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const WrongQuestionsReview = ({ onStartQuiz }) => {
  const { wrongQuestions, removeWrongQuestion, isMath, currentGrade, isSecondary } = useLearning();

  const handleStartReviewQuiz = () => {
    sounds.playClick();
    if (wrongQuestions.length === 0) return;
    onStartQuiz({
      type: 'wrong_review',
      title: `Luyện Lại Tất Cả Câu Sai (${wrongQuestions.length} câu)`,
      questions: [...wrongQuestions],
      timeLimitSec: Math.max(180, wrongQuestions.length * 90)
    });
  };

  const handlePracticeSingle = (q) => {
    sounds.playClick();
    onStartQuiz({
      type: 'single_wrong',
      title: `Khắc Phục Lỗi Sai: Tuần ${q.week} - ${q.topic}`,
      questions: [q],
      timeLimitSec: 180
    });
  };

  const subjectLabel = isMath 
    ? `Toán Lớp ${currentGrade}` 
    : (isSecondary ? `Ngữ Văn ${currentGrade}` : `Tiếng Việt ${currentGrade}`);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 rounded-3xl p-6 sm:p-8 text-white shadow-bouncy">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider mb-2 inline-block">
              Sổ Tay Khắc Phục Lỗ Hổng Kiến Thức • {subjectLabel}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mb-1">
              Phòng Sửa Câu Sai & Ôn Lại Trọng Tâm 🔄
            </h1>
            <p className="text-xs sm:text-sm font-bold text-rose-50">
              Làm lại các câu hỏi bé đã từng chọn chưa đúng để hiểu sâu bản chất và không bị lặp lại lỗi sai nhé!
            </p>
          </div>

          {wrongQuestions.length > 0 && (
            <button
              onClick={handleStartReviewQuiz}
              className="px-6 py-3.5 bg-white text-rose-600 hover:bg-rose-50 font-black text-sm sm:text-base rounded-2xl shadow-bouncy btn-bouncy flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-rose-600" />
              Luyện Lại Tất Cả ({wrongQuestions.length} câu)
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {wrongQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl border-3 border-emerald-200 p-10 text-center shadow-sm max-w-md mx-auto space-y-4 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto shadow-inner">
            🎉
          </div>
          <h2 className="text-2xl font-black text-slate-800">
            Không Có Câu Sai Nào!
          </h2>
          <p className="text-sm font-semibold text-slate-500">
            Bé học rất giỏi và đã làm chủ tất cả các câu hỏi {subjectLabel}! Hãy tiếp tục phát huy ở các chặng tiếp theo nhé!
          </p>
        </div>
      ) : (
        /* List of Wrong Questions */
        <div className="space-y-4">
          <div className="flex items-center justify-between font-bold text-xs text-slate-500 px-2">
            <span>Danh sách {wrongQuestions.length} câu cần củng cố:</span>
            <span>Tự động gỡ bỏ khi bé làm đúng hoặc bấm "Đã thành thạo"</span>
          </div>

          {wrongQuestions.map((q, idx) => (
            <div
              key={q.id || idx}
              className="bg-white rounded-3xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm space-y-3.5 hover:border-rose-300 transition-all"
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 font-black text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Tuần {q.week} • {q.topic}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePracticeSingle(q)}
                    className="px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-amber-950" /> Luyện câu này
                  </button>

                  <button
                    onClick={() => removeWrongQuestion(q.id)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-500 font-bold text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
                    title="Đã thành thạo - Gỡ bỏ khỏi sổ tay"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="hidden sm:inline">Đã hiểu</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-base sm:text-lg font-extrabold text-slate-800">
                <MathRenderer text={q.question} />
              </div>

              {/* Options Overview */}
              {q.options && Array.isArray(q.options) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
                  {q.options.map((opt, oIdx) => (
                    <div 
                      key={oIdx}
                      className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                        oIdx === q.correctIndex
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md text-xs font-black flex items-center justify-center ${
                        oIdx === q.correctIndex ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <MathRenderer text={opt} />
                      {oIdx === q.correctIndex && (
                        <span className="ml-auto text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-black">
                          Đáp án đúng
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Hint & Explanation */}
              {(q.explanation || q.hint) && (
                <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-3.5 text-xs sm:text-sm font-semibold text-amber-900 flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-amber-800">Phương pháp & Giải thích: </span>
                    <MathRenderer text={q.explanation || q.hint} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
