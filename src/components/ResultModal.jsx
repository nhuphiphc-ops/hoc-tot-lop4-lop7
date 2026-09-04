import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Star, 
  Trophy, 
  RotateCcw, 
  BookOpen, 
  Home, 
  Coins, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const ResultModal = ({
  resultData,
  earnedRewards,
  onOpenExplanations,
  onViewExplanation,
  onReview,
  onRetryQuiz,
  onRetry,
  onRetryWrongOnly,
  onRetryWrong,
  onBackToRoadmap,
  onExit,
  onClose
}) => {
  const { currentGrade, profile } = useLearning();
  const isGrade12 = currentGrade === '12';
  const studentName = profile?.name ? profile.name.split(' của ')[0] : (isGrade12 ? 'Nhật Minh' : 'Công Nguyên');

  const { score, correctCount, totalCount, timeSpent, details } = resultData || { score: 0, correctCount: 0, totalCount: 0, timeSpent: 0, details: [] };
  const { earnedStars, earnedCoins } = earnedRewards || { earnedStars: 0, earnedCoins: 0 };

  const openExplanationsHandler = onOpenExplanations || onViewExplanation || onReview || (() => {});
  const retryQuizHandler = onRetryQuiz || onRetry || (() => {});
  const retryWrongHandler = onRetryWrongOnly || onRetryWrong || (() => {});
  const backHandler = onBackToRoadmap || onExit || onClose || (() => {});

  useEffect(() => {
    if (score >= 80) {
      sounds.playVictory();
      // Multi-stage confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
          });
        }, 300);
      } catch (e) {
        console.error(e);
      }
    } else {
      sounds.playCorrect();
    }

    // Voice narration in Vietnamese
    sounds.speakSubmissionFeedback(score, currentGrade);
  }, [score, currentGrade]);

  // Format time spent (MM:SS)
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins} phút ${s} giây`;
  };

  // Praise title & mascot message
  let title = `${studentName} Cố Gắng Hơn Tí Nữa Nhé! 💪`;
  let message = "Hãy xem lại lời giải chi tiết để hiểu bài hơn và thử lại nhé!";
  let badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
  let emoji = isGrade12 ? "🐉" : "🌱";

  if (score === 100) {
    title = ['1','2','3','4','5','6'].includes(currentGrade) ? `${studentName} Giỏi Quá! 🌟` : `${studentName} Của Bố Quá Tuyệt Vời! 🌟`;
    message = "Con đã xuất sắc trả lời đúng tất cả các câu hỏi!";
    badgeColor = "bg-yellow-100 text-yellow-900 border-yellow-400";
    emoji = "👑";
  } else if (score >= 80) {
    title = "Thành Tích Xuất Sắc! 🚀";
    message = `${studentName} đã nắm vững các kiến thức trọng tâm!`;
    badgeColor = "bg-emerald-100 text-emerald-900 border-emerald-400";
    emoji = "🎖️";
  } else if (score >= 50) {
    title = `${studentName} Cố Gắng Hơn Tí Nữa Nhé! 👏`;
    message = "Con đã hoàn thành bài thi! Hãy luyện tập thêm một chút nữa nhé!";
    badgeColor = "bg-blue-100 text-blue-900 border-blue-400";
    emoji = "⭐";
  }

  const wrongCount = totalCount - correctCount;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border-4 border-amber-300 shadow-2xl max-w-lg w-full p-6 sm:p-8 text-center my-auto animate-scale-in">
        {/* Mascot / Trophy Icon */}
        <div className="relative inline-block mb-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 flex items-center justify-center text-4xl sm:text-5xl shadow-bouncy mx-auto">
            {emoji}
          </div>
          {score >= 80 && (
            <div className="absolute -top-2 -right-2 p-1.5 bg-yellow-300 rounded-full border-2 border-white shadow-sm animate-spin-slow">
              <Sparkles className="w-5 h-5 text-amber-900" />
            </div>
          )}
        </div>

        {/* Title & Feedback */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-1 font-nunito">
          {title}
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-3 max-w-sm mx-auto">
          {message}
        </p>

        {/* Voice replay button */}
        <button
          type="button"
          onClick={() => sounds.speakSubmissionFeedback(score, currentGrade)}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold text-xs rounded-full shadow-xs mb-4 transition-all cursor-pointer"
        >
          <span className="text-sm">🔊</span>
          <span>Bấm để nghe lời dặn dò</span>
        </button>

        {/* Score Card Card */}
        <div className="bg-amber-50/80 rounded-2xl border-2 border-amber-200 p-5 mb-5 space-y-4 shadow-sm">
          {/* Star Rating Display */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((starIndex) => {
              const isFilled = (earnedStars >= starIndex) || (score >= (starIndex === 1 ? 50 : starIndex === 2 ? 75 : 90));
              return (
                <div 
                  key={starIndex}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isFilled 
                      ? 'bg-amber-400 text-amber-950 shadow-md scale-110' 
                      : 'bg-white/80 text-slate-300 border-2 border-dashed border-slate-300'
                  }`}
                >
                  <Star className={`w-7 h-7 ${isFilled ? 'fill-amber-950' : ''}`} />
                </div>
              );
            })}
          </div>

          {/* Main Score Display */}
          <div>
            <div className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight font-nunito">
              {Math.round((score / 100) * 10)} <span className="text-lg sm:text-2xl font-bold text-slate-400">/ 10 Điểm</span>
            </div>
            <div className="text-xs font-bold text-amber-800 mt-0.5">
              Tỉ lệ chính xác: {score}%
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-amber-200/70">
            <div className="bg-white/80 p-2 rounded-xl border border-amber-200">
              <div className="text-slate-400 font-bold text-[10px]">Đúng</div>
              <div className="text-emerald-600 text-sm font-black flex items-center justify-center gap-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {correctCount}/{totalCount}
              </div>
            </div>
            <div className="bg-white/80 p-2 rounded-xl border border-amber-200">
              <div className="text-slate-400 font-bold text-[10px]">Thưởng Xu</div>
              <div className="text-yellow-600 text-sm font-black flex items-center justify-center gap-0.5">
                <Coins className="w-3.5 h-3.5" /> +{earnedCoins}
              </div>
            </div>
            <div className="bg-white/80 p-2 rounded-xl border border-amber-200">
              <div className="text-slate-400 font-bold text-[10px]">Thời gian</div>
              <div className="text-blue-600 text-sm font-black flex items-center justify-center gap-0.5">
                <Clock className="w-3.5 h-3.5" /> {timeSpent}s
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Stack */}
        <div className="space-y-2.5">
          {/* View Detailed Solutions */}
          <button
            onClick={() => { sounds.playClick(); openExplanationsHandler(); }}
            className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-base rounded-2xl shadow-bouncy-sm btn-bouncy flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-5 h-5" />
            Xem Lời Giải Chi Tiết & Sửa Lỗi
          </button>

          {/* Retry Wrong Questions (if any) */}
          {wrongCount > 0 && (
            <button
              onClick={() => { sounds.playClick(); retryWrongHandler(); }}
              className="w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border-2 border-rose-300 font-extrabold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Luyện Tập Lại {wrongCount} Câu Làm Sai
            </button>
          )}

          {/* Re-do Entire Quiz & Back to Roadmap */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => { sounds.playClick(); retryQuizHandler(); }}
              className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại bài
            </button>
            <button
              onClick={() => { sounds.playClick(); backHandler(); }}
              className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Về Lộ Trình
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
