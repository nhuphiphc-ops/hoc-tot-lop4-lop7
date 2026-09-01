import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Award, 
  ChevronRight,
  ExternalLink,
  Coins
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const VideoPlayerModal = ({ video, onClose, onStartQuiz }) => {
  const { watchedVideos, markVideoWatched, currentGrade } = useLearning();
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  if (!video) return null;

  const isWatched = watchedVideos.includes(video.id);

  const handleMarkWatched = () => {
    sounds.playSuccess();
    markVideoWatched(video.id);
  };

  const handleStartPractice = () => {
    sounds.playClick();
    onClose();
    if (onStartQuiz) {
      onStartQuiz({ week: video.week });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/80 border-b border-slate-700/80">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <span className="text-xs font-black tracking-wider uppercase text-amber-400">
                Bài Giảng Tuần {video.week} • Lớp {video.grade}
              </span>
              <h2 className="text-base sm:text-lg font-black text-white truncate">
                {video.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => { sounds.playPop(); onClose(); }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-700"
            title="Đóng bài giảng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl group">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Video Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-1.5 text-amber-400">
                <GraduationCap className="w-4 h-4" />
                <span>{video.teacher}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Mark as Watched & Rewards Button */}
            <div className="flex items-center gap-2">
              {isWatched ? (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-black">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã Hoàn Thành Bài Giảng</span>
                </div>
              ) : (
                <button
                  onClick={handleMarkWatched}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <Coins className="w-4 h-4" />
                  <span>Đánh Dấu Đã Xem (+5 Xu)</span>
                </button>
              )}
            </div>
          </div>

          {/* Two-Column Details: Chapters & Key Takeaways */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chapters / Timeline */}
            <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Nội Dung Bài Giảng (Chương Mục)</span>
                </h3>
                <span className="text-[11px] font-bold text-slate-400">
                  {video.chapters?.length || 0} phần
                </span>
              </div>

              <div className="space-y-2">
                {(video.chapters || []).map((ch, idx) => {
                  const isActive = activeChapterIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => { sounds.playClick(); setActiveChapterIndex(idx); }}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer border text-xs font-bold ${
                        isActive
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 shadow-sm'
                          : 'bg-slate-800/60 border-slate-700/40 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="px-2 py-0.5 rounded-lg bg-slate-900/80 text-amber-400 font-mono text-[11px] border border-slate-700/80">
                          {ch.time}
                        </span>
                        <span className="truncate">{ch.title}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Takeaways / Cheat Sheet */}
            <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/60 space-y-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Ghi Nhớ Trọng Tâm (Cheat Sheet)</span>
              </h3>

              <div className="space-y-2">
                {(video.keyTakeaways || []).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/40 text-xs font-semibold text-slate-200 leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-slate-800/80 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 font-medium text-center sm:text-left">
            💡 Xem xong bài giảng? Hãy thực hành ngay với 10 bài tập trắc nghiệm chuẩn của Tuần {video.week}!
          </p>

          <button
            onClick={handleStartPractice}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm transition-all shadow-lg cursor-pointer hover:scale-105"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Luyện Tập Tuần {video.week} Ngay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
