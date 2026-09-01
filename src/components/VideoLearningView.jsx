import React, { useState, useMemo } from 'react';
import { 
  Video, 
  Play, 
  Search, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Filter, 
  Layers, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useLearning, GRADE_PRIMARY_SUBJECTS, GRADE_7_SUBJECTS, GRADE_12_SUBJECTS } from '../context/LearningContext';
import { VIDEO_LESSONS, getVideoLessons } from '../data/videos/videoLessonsData';
import sounds from '../utils/soundEffects';

export const VideoLearningView = ({ onSelectVideo, onStartQuiz }) => {
  const { 
    currentGrade, 
    switchGrade, 
    currentSubject, 
    switchSubject, 
    isPrimaryChuot, 
    isGrade7, 
    isGrade12, 
    isSecondary,
    watchedVideos 
  } = useLearning();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all'); // 'all' | 1 | 2

  const gradeList = [
    { id: '1', label: 'Lớp 1', emoji: '🐭', color: 'from-pink-400 to-rose-500 text-white' },
    { id: '2', label: 'Lớp 2', emoji: '🐹', color: 'from-amber-400 to-orange-500 text-white' },
    { id: '3', label: 'Lớp 3', emoji: '🐰', color: 'from-emerald-400 to-teal-500 text-white' },
    { id: '4', label: 'Lớp 4', emoji: '🎒', color: 'from-amber-400 to-orange-400 text-amber-950' },
    { id: '5', label: 'Lớp 5', emoji: '⭐', color: 'from-emerald-400 to-teal-500 text-white' },
    { id: '6', label: 'Lớp 6', emoji: '📘', color: 'from-indigo-500 to-blue-600 text-white' },
    { id: '7', label: 'Lớp 7', emoji: '🚀', color: 'from-purple-500 to-pink-600 text-white' },
    { id: '8', label: 'Lớp 8', emoji: '📐', color: 'from-blue-500 to-cyan-600 text-white' },
    { id: '9', label: 'Lớp 9', emoji: '🏆', color: 'from-orange-500 to-amber-600 text-white' },
    { id: '10', label: 'Lớp 10', emoji: '⚡', color: 'from-teal-500 to-emerald-600 text-white' },
    { id: '11', label: 'Lớp 11', emoji: '🔮', color: 'from-violet-500 to-purple-600 text-white' },
    { id: '12', label: 'Lớp 12', emoji: '🎓', color: 'from-red-500 to-rose-600 text-white' },
  ];

  // Get active subjects based on grade
  const activeSubjectList = useMemo(() => {
    if (isPrimaryChuot) {
      return GRADE_PRIMARY_SUBJECTS;
    }
    if (isGrade7) {
      return GRADE_7_SUBJECTS;
    }
    if (isGrade12) {
      return GRADE_12_SUBJECTS;
    }
    return [
      { id: 'math', label: `Toán ${currentGrade}` },
      { id: 'vietnamese', label: isSecondary ? `Ngữ Văn ${currentGrade}` : `Tiếng Việt ${currentGrade}` }
    ];
  }, [currentGrade, isPrimaryChuot, isGrade7, isGrade12, isSecondary]);

  // Filter video lessons
  const filteredVideos = useMemo(() => {
    return getVideoLessons({
      grade: currentGrade,
      subject: currentSubject,
      semester: selectedSemester,
      searchQuery: searchQuery
    });
  }, [currentGrade, currentSubject, selectedSemester, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Banner Hub */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-3 border-amber-400 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Góc Video Bài Giảng 2026</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              📺 Thư Viện Video Dạy Học & Ôn Tập
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Khám phá các bài giảng chất lượng cao, tóm tắt công thức trọng tâm và hướng dẫn giải bài tập chi tiết từ Lớp 1 đến Lớp 12 chuẩn GDPT 2026.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col gap-2 min-w-[220px]">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Tiến Độ Xem Video</span>
            <div className="text-2xl font-black text-white">
              {watchedVideos.length} <span className="text-sm font-semibold text-slate-300">bài đã học</span>
            </div>
            <span className="text-xs text-slate-300">🎁 Nhận +5 Xu mỗi video hoàn thành!</span>
          </div>
        </div>
      </div>

      {/* Grade Selector Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-black text-xs uppercase tracking-wider text-slate-500">Chọn Khối Lớp Học Tập:</span>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
            Đang chọn: Lớp {currentGrade}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {gradeList.map((g) => {
            const isSelected = currentGrade === g.id;
            return (
              <button
                key={g.id}
                onClick={() => { sounds.playClick(); switchGrade(g.id); }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer border-2 ${
                  isSelected
                    ? `bg-gradient-to-r ${g.color} shadow-md scale-105 ring-3 ring-amber-300 border-transparent`
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{g.emoji}</span>
                <span>{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subject Selector Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {activeSubjectList.map((subj) => {
            const isSelected = currentSubject === subj.id;
            return (
              <button
                key={subj.id}
                onClick={() => { sounds.playClick(); switchSubject(subj.id); }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-400 text-amber-950 border-amber-400 shadow-sm scale-105'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{subj.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Semester Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm bài giảng, chủ đề..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none text-xs sm:text-sm font-semibold transition-all shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-bold text-slate-500 hidden sm:inline">Học kỳ:</span>
          {[
            { id: 'all', label: 'Tất Cả Học Kỳ' },
            { id: 1, label: 'Học Kỳ 1' },
            { id: 2, label: 'Học Kỳ 2' },
          ].map((sem) => {
            const isSelected = selectedSemester === sem.id;
            return (
              <button
                key={sem.id}
                onClick={() => { sounds.playClick(); setSelectedSemester(sem.id); }}
                className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {sem.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Cards Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video) => {
            const isWatched = watchedVideos.includes(video.id);
            return (
              <div
                key={video.id}
                onClick={() => { sounds.playClick(); onSelectVideo(video); }}
                className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-sm text-white font-mono text-[11px] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{video.duration}</span>
                    </div>

                    {/* Watched Badge */}
                    {isWatched && (
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-emerald-600 text-white text-[11px] font-black flex items-center gap-1 shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đã Học</span>
                      </div>
                    )}

                    {/* Week Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-slate-900/80 backdrop-blur-sm text-amber-300 text-[11px] font-black border border-white/20">
                      Tuần {video.week}
                    </div>
                  </div>

                  {/* Video Content Info */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span className="truncate">{video.teacher}</span>
                    </div>

                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800 line-clamp-2 group-hover:text-amber-900 transition-colors leading-snug">
                      {video.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {video.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-600 group-hover:text-amber-700 flex items-center gap-1">
                      <span>Xem Bài Giảng</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sounds.playClick();
                        if (onStartQuiz) onStartQuiz({ week: video.week });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-400 text-amber-950 text-xs font-bold transition-all cursor-pointer"
                      title={`Luyện tập tuần ${video.week}`}
                    >
                      Luyện Tập
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-10 border-2 border-slate-200 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center text-2xl">
            📺
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-black text-slate-800">
              Đang hoàn thiện video bài giảng cho phân môn này
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Hệ thống đang tiếp tục cập nhật thêm các bài giảng video chuyên sâu. Bạn có thể chọn khối Lớp hoặc môn học khác để xem bài giảng nhé!
            </p>
          </div>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSemester('all'); }}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-black cursor-pointer hover:bg-slate-800 transition-all"
          >
            Xem Tất Cả Video Hiện Có
          </button>
        </div>
      )}
    </div>
  );
};
