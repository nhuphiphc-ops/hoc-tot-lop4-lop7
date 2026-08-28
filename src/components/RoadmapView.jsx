import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Star, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  Rocket, 
  Target, 
  ChevronRight, 
  Filter, 
  Flame, 
  Award, 
  BookOpen, 
  Feather, 
  Calculator,
  GraduationCap
} from 'lucide-react';
import { useLearning, GRADE_7_SUBJECTS, GRADE_12_SUBJECTS } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const RoadmapView = ({ onStartQuiz }) => {
  const { 
    progress, 
    totalStars, 
    isFreeMode,
    isMath,
    currentGrade,
    switchGrade,
    currentSubject,
    switchSubject,
    isGrade4,
    isGrade5,
    isGrade6,
    isGrade7,
    isGrade12,
    isSecondary,
    isHighSchool,
    stages: currentStages,
    categories: currentCategories,
    weeksMetadata: currentMetadata,
    getQuestionsByWeek
  } = useLearning();

  const [selectedStage, setSelectedStage] = useState('all'); // 'all' | 1 | 2 | 3 | 4
  const [activeWeekModal, setActiveWeekModal] = useState(null);

  const isWeekUnlocked = (weekNum) => {
    if (isFreeMode) return true;
    if (Number(weekNum) === 1) return true;
    const prevWeek = Number(weekNum) - 1;
    return (progress[prevWeek]?.bestScore || 0) >= 50;
  };

  const getStageIcon = (iconName) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Feather': return <Feather className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getCategoryBadge = (catId) => {
    const cat = (currentCategories || []).find(c => c.id === catId);
    if (!cat) return null;
    return (
      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${cat.color}`}>
        {cat.name}
      </span>
    );
  };

  // Filter stages based on tab
  const displayStages = selectedStage === 'all' 
    ? (currentStages || []) 
    : (currentStages || []).filter(s => s.id === Number(selectedStage));

  const handleOpenWeek = (weekNum) => {
    const unlocked = isWeekUnlocked(weekNum);
    if (!unlocked) {
      sounds.playWrong();
      return;
    }
    sounds.playClick();
    setActiveWeekModal(weekNum);
  };

  const handleStartWeekQuiz = (weekNum, difficulty = 'all') => {
    sounds.playStart();
    setActiveWeekModal(null);
    let questions = getQuestionsByWeek(weekNum);
    if (difficulty && difficulty !== 'all') {
      const filtered = questions.filter(q => q.difficulty === difficulty);
      if (filtered.length > 0) {
        questions = filtered;
      }
    }
    onStartQuiz({
      title: `Tuần ${weekNum}: ${currentMetadata?.[weekNum]?.title || 'Luyện Tập Tuần'}`,
      week: Number(weekNum),
      questions: questions,
      type: 'week',
      difficulty: difficulty
    });
  };

  // Calculate overall completion
  const completedWeeksCount = Object.keys(progress).filter(w => (progress[w]?.bestScore || 0) >= 70).length;
  const progressPercent = Math.round((completedWeeksCount / 35) * 100);

  const getBannerTitle = () => {
    if (isGrade12) {
      const subj = GRADE_12_SUBJECTS.find(s => s.id === currentSubject)?.label || 'Toán 12';
      return `Chinh Phục ${subj} (Tốt Nghiệp THPT 2026) 🎓`;
    }
    if (isGrade7) {
      const subj = GRADE_7_SUBJECTS.find(s => s.id === currentSubject)?.label || 'Toán 7';
      return `Chinh Phục ${subj} (GDPT Mới 2026) 🚀`;
    }
    const subjName = isMath ? `Toán Lớp ${currentGrade}` : (isSecondary ? `Ngữ Văn Lớp ${currentGrade}` : `Tiếng Việt Lớp ${currentGrade}`);
    return `Chinh Phục ${subjName} (GDPT Mới 2026) 🚀`;
  };

  const getBannerDesc = () => {
    if (isGrade12) {
      return 'Luyện thi toàn diện chuẩn ma trận đề thi Tốt nghiệp THPT 2026 với 35 tuần học tập chuyên sâu, giải thích cặn kẽ và tối ưu điểm số!';
    }
    if (isGrade4) {
      return isMath
        ? 'Làm chủ số tự nhiên, phân số, hình học và giải toán có lời văn cùng hơn 350 bài tập phân cấp độ khó chuẩn GDPT 2026!'
        : 'Rèn luyện đọc hiểu cảm thụ, thành thạo từ loại và câu cùng 350+ bài tập đặc sắc chuẩn GDPT 2026!';
    }
    if (isGrade5) {
      return isMath
        ? 'Chinh phục số thập phân, tỉ số phần trăm, diện tích thể tích và toán chuyển động đều cùng 350 bài tập chuẩn bị chuyển cấp Lớp 6!'
        : 'Khám phá từ đồng nghĩa, từ trái nghĩa, câu ghép, các biện pháp tu từ và cảm thụ văn học đỉnh cao Lớp 5!';
    }
    if (isGrade6) {
      return isMath
        ? 'Làm chủ tập hợp số nguyên Z, phân số âm, hình học trực quan và xác suất thực nghiệm cùng 350 bài tập chuẩn GDPT 2026!'
        : 'Khám phá truyện dân gian, truyện đồng thoại, thơ lục bát, văn nghị luận và các biện pháp tu từ nghệ thuật Ngữ Văn 6!';
    }
    return isMath
      ? 'Làm chủ số hữu tỉ, số thực, đại số và hình học tam giác cùng hơn 350 bài tập phân cấp độ khó chuẩn chương trình GDPT 2026!'
      : 'Rèn luyện đọc hiểu thơ văn, làm chủ tiếng Việt và phân tích văn bản cùng 350+ câu hỏi và đề thi chuẩn GDPT mới nhất 2026!';
  };

  const getBannerGradient = () => {
    if (isGrade12) {
      if (currentSubject === 'math') return 'bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600';
      if (currentSubject === 'vietnamese') return 'bg-gradient-to-r from-rose-700 via-purple-700 to-indigo-700';
      if (currentSubject === 'english') return 'bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700';
      if (currentSubject === 'physics') return 'bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700';
      if (currentSubject === 'chemistry') return 'bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-700';
      if (currentSubject === 'biology') return 'bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700';
      if (currentSubject === 'history') return 'bg-gradient-to-r from-amber-700 via-orange-700 to-red-700';
      if (currentSubject === 'geography') return 'bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700';
      if (currentSubject === 'econ_law') return 'bg-gradient-to-r from-pink-700 via-rose-700 to-purple-700';
      if (currentSubject === 'informatics') return 'bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700';
      if (currentSubject === 'technology') return 'bg-gradient-to-r from-lime-700 via-emerald-700 to-teal-700';
      return 'bg-gradient-to-r from-red-600 via-rose-600 to-purple-700';
    }
    if (isGrade4) {
      return isMath
        ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400'
        : 'bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500';
    }
    if (isGrade5) {
      return isMath
        ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500'
        : 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600';
    }
    if (isGrade6) {
      return isMath
        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600'
        : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600';
    }
    // Grade 7
    if (currentSubject === 'math') return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600';
    if (currentSubject === 'vietnamese') return 'bg-gradient-to-r from-purple-600 via-rose-600 to-indigo-600';
    if (currentSubject === 'english') return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600';
    if (currentSubject === 'science') return 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600';
    if (currentSubject === 'history_geo') return 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600';
    if (currentSubject === 'informatics') return 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600';
    if (currentSubject === 'civics') return 'bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600';
    if (currentSubject === 'technology') return 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600';
    return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Prominent Grade & Subject Fast Switcher Hub */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-amber-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Grade Selection Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-center w-full md:w-auto">
          <span className="font-black text-xs uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">Khối Lớp:</span>
          {[
            { id: '4', label: 'Lớp 4', emoji: '🎒', color: 'from-amber-400 to-orange-400 text-amber-950 border-amber-300' },
            { id: '5', label: 'Lớp 5', emoji: '⭐', color: 'from-emerald-400 to-teal-500 text-white border-emerald-400' },
            { id: '6', label: 'Lớp 6', emoji: '📘', color: 'from-indigo-500 to-blue-600 text-white border-indigo-400' },
            { id: '7', label: 'Lớp 7', emoji: '🚀', color: 'from-purple-500 to-pink-600 text-white border-purple-400' },
            { id: '12', label: 'Lớp 12', emoji: '🎓', color: 'from-red-500 to-rose-600 text-white border-red-400' },
          ].map((g) => {
            const isSelected = currentGrade === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => switchGrade(g.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-base transition-all cursor-pointer border-2 ${
                  isSelected
                    ? `bg-gradient-to-r ${g.color} shadow-lg scale-105 ring-4 ring-amber-200`
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span className="text-base sm:text-lg">{g.emoji}</span>
                <span>{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subject Selection Buttons */}
        {isGrade12 ? (
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto justify-start md:justify-center py-1 max-w-full">
            {GRADE_12_SUBJECTS.map(subj => {
              const isSelected = currentSubject === subj.id;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => switchSubject(subj.id)}
                  className={`px-3 py-1.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap flex-shrink-0 transition-all cursor-pointer border-2 ${
                    isSelected
                      ? `bg-gradient-to-r ${subj.color} text-white shadow-md ring-2 ring-amber-300 scale-105`
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{subj.label}</span>
                </button>
              );
            })}
          </div>
        ) : isGrade7 ? (
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto justify-start md:justify-center py-1 max-w-full">
            {GRADE_7_SUBJECTS.map(subj => {
              const isSelected = currentSubject === subj.id;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => switchSubject(subj.id)}
                  className={`px-3 py-1.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap flex-shrink-0 transition-all cursor-pointer border-2 ${
                    isSelected
                      ? `bg-gradient-to-r ${subj.color} text-white shadow-md ring-2 ring-amber-300 scale-105`
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{subj.label}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 w-full md:w-auto justify-center">
            <button
              type="button"
              onClick={() => switchSubject('math')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-2xl font-black text-sm sm:text-base transition-all cursor-pointer border-2 ${
                isMath
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 border-amber-300 shadow-md ring-2 ring-amber-300 scale-105'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Toán {currentGrade}</span>
            </button>

            <button
              type="button"
              onClick={() => switchSubject('vietnamese')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-2xl font-black text-sm sm:text-base transition-all cursor-pointer border-2 ${
                currentSubject === 'vietnamese'
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white border-rose-400 shadow-md ring-2 ring-rose-300 scale-105'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{isSecondary ? `Ngữ Văn ${currentGrade}` : `Tiếng Việt ${currentGrade}`}</span>
            </button>
          </div>
        )}
      </div>

      {/* Hero Banner with Stats & Progress */}
      <div className={`rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden transition-all duration-500 ${getBannerGradient()}`}>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-40 h-40 bg-black/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lộ Trình Học Tập 35 Tuần Chuẩn GDPT 2026</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight font-nunito">
              {getBannerTitle()}
            </h1>
            <p className="text-sm sm:text-base text-white/90 font-semibold leading-relaxed">
              {getBannerDesc()}
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-white/25 flex flex-col gap-3 min-w-[240px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">Tiến độ hoàn thành</span>
              <span className="text-lg font-black">{progressPercent}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-white/90 pt-1 border-t border-white/10">
              <span>Đã xong: <strong>{completedWeeksCount}/35</strong> tuần</span>
              <span className="flex items-center gap-1 text-yellow-300">
                <Star className="w-3.5 h-3.5 fill-yellow-300" />
                {totalStars} Sao
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Selector Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => { sounds.playClick(); setSelectedStage('all'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
            selectedStage === 'all'
              ? 'bg-slate-800 text-white shadow-md scale-105'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span>Tất Cả 4 Chặng</span>
        </button>

        {(currentStages || []).map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => { sounds.playClick(); setSelectedStage(stage.id); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer border ${
                isSelected
                  ? 'bg-amber-400 text-amber-950 border-amber-400 shadow-md scale-105'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{stage.title.split(':')[0]}</span>
              <span className="text-[10px] font-bold opacity-75 hidden sm:inline">({stage.range})</span>
            </button>
          );
        })}
      </div>

      {/* Stages & Weeks Grid */}
      <div className="space-y-8">
        {displayStages.map((stage) => {
          // Extract week range (e.g. "Tuần 1 - Tuần 9" -> [1, 2, ..., 9])
          const parts = stage.range.replace(/[^0-9-]/g, '').split('-');
          const startWeek = parseInt(parts[0], 10);
          const endWeek = parseInt(parts[1], 10);
          const stageWeeks = [];
          for (let w = startWeek; w <= endWeek; w++) {
            stageWeeks.push(w);
          }

          return (
            <div key={stage.id} className="space-y-4">
              {/* Stage Header Card */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-md flex-shrink-0`}>
                    {getStageIcon(stage.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                        {stage.range}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-800 font-nunito">
                      {stage.title}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500">
                      {stage.desc}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-extrabold text-slate-500 self-end sm:self-center bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  {stageWeeks.filter(w => (progress[w]?.bestScore || 0) >= 70).length}/{stageWeeks.length} Bài Đã Đạt
                </div>
              </div>

              {/* Weeks Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {stageWeeks.map((weekNum) => {
                  const meta = currentMetadata?.[weekNum] || { title: `Bài Học Tuần ${weekNum}`, desc: '' };
                  const weekProg = progress[weekNum] || { bestScore: 0, stars: 0, attempts: 0 };
                  const unlocked = isWeekUnlocked(weekNum);
                  const isCompleted = (weekProg.bestScore || 0) >= 70;

                  return (
                    <div
                      key={weekNum}
                      onClick={() => handleOpenWeek(weekNum)}
                      className={`rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between gap-3 relative cursor-pointer group ${
                        !unlocked
                          ? 'bg-slate-100/80 border-2 border-slate-200 opacity-60 hover:opacity-80'
                          : isCompleted
                          ? 'bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-300 shadow-sm hover:shadow-md hover:border-amber-400'
                          : 'bg-white border-2 border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300'
                      }`}
                    >
                      {/* Top status & Week tag */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center ${
                            !unlocked
                              ? 'bg-slate-200 text-slate-500'
                              : isCompleted
                              ? 'bg-amber-400 text-amber-950 shadow-xs'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {weekNum}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            Tuần {weekNum}
                          </span>
                        </div>

                        {/* Lock / Completed / Stars */}
                        <div className="flex items-center gap-1">
                          {!unlocked ? (
                            <div className="p-1 rounded-lg bg-slate-200 text-slate-500" title="Chưa mở khóa">
                              <Lock className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3].map((starIndex) => (
                                <Star
                                  key={starIndex}
                                  className={`w-3.5 h-3.5 ${
                                    (weekProg.stars || 0) >= starIndex
                                      ? 'text-amber-500 fill-amber-400'
                                      : 'text-slate-200'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content Title */}
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-800 line-clamp-2 group-hover:text-amber-900 transition-colors">
                          {meta.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {meta.desc}
                        </p>
                      </div>

                      {/* Bottom Footer: Category & Action */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100/80">
                        <div>
                          {getCategoryBadge(meta.category)}
                        </div>

                        <div className="flex items-center gap-1">
                          {weekProg.bestScore > 0 && (
                            <span className={`text-xs font-black px-2 py-0.5 rounded-lg ${
                              weekProg.bestScore >= 80 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : weekProg.bestScore >= 50 
                                ? 'bg-amber-100 text-amber-800' 
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {Math.round(weekProg.bestScore / 10)}/10đ
                            </span>
                          )}
                          <span className="p-1.5 rounded-xl bg-amber-100 group-hover:bg-amber-400 text-amber-950 transition-colors">
                            <Play className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Week Detail & Start Dialog Modal */}
      {activeWeekModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-4 border-amber-300 shadow-2xl space-y-5 animate-scale-in text-center">
            {/* Mascot / Week Header */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl shadow-bouncy mx-auto">
              🎯
            </div>

            <div>
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                {isGrade12 ? 'Lớp 12 - Tốt Nghiệp THPT' : `Lớp ${currentGrade} - GDPT 2026`} • Tuần {activeWeekModal}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-nunito">
                {currentMetadata?.[activeWeekModal]?.title || `Bài Học Tuần ${activeWeekModal}`}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 max-w-md mx-auto">
                {currentMetadata?.[activeWeekModal]?.desc}
              </p>
            </div>

            {/* Quick Stats of Week */}
            <div className="grid grid-cols-3 gap-2 bg-amber-50/70 p-3 rounded-2xl border border-amber-200 text-xs font-bold text-slate-700">
              <div>
                <span className="text-slate-400 text-[10px] block font-bold">Số câu hỏi</span>
                <span className="text-amber-950 font-black text-sm">10 Câu</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block font-bold">Thời gian</span>
                <span className="text-amber-950 font-black text-sm">12 Phút</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block font-bold">Điểm cao nhất</span>
                <span className="text-emerald-700 font-black text-sm">
                  {progress[activeWeekModal]?.bestScore ? `${Math.round(progress[activeWeekModal].bestScore / 10)}/10đ` : 'Chưa thi'}
                </span>
              </div>
            </div>

            {/* Difficulty Level Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => handleStartWeekQuiz(activeWeekModal, 'all')}
                className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black text-base rounded-2xl shadow-bouncy btn-bouncy flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                Bắt Đầu Làm Bài Ngay (10 Câu Tổng Hợp)
              </button>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleStartWeekQuiz(activeWeekModal, 'easy')}
                  className="py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold text-xs rounded-xl transition-all cursor-pointer"
                >
                  🟢 Nhận biết
                </button>
                <button
                  onClick={() => handleStartWeekQuiz(activeWeekModal, 'medium')}
                  className="py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 font-extrabold text-xs rounded-xl transition-all cursor-pointer"
                >
                  🟡 Thông hiểu
                </button>
                <button
                  onClick={() => handleStartWeekQuiz(activeWeekModal, 'hard')}
                  className="py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-300 font-extrabold text-xs rounded-xl transition-all cursor-pointer"
                >
                  🔴 Vận dụng cao
                </button>
              </div>
            </div>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={() => setActiveWeekModal(null)}
              className="text-xs font-extrabold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapView;
