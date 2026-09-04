import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  RotateCcw, 
  BarChart3, 
  Award, 
  Volume2, 
  VolumeX, 
  Flame, 
  Star, 
  Coins, 
  Unlock, 
  Lock, 
  User, 
  Sparkles, 
  Check, 
  Calculator, 
  BookMarked,
  Shield,
  Video
} from 'lucide-react';
import { useLearning, SHOP_MASCOTS } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const Navbar = ({ currentTab, onSelectTab }) => {
  const { 
    currentGrade,
    switchGrade,
    isGrade1,
    isGrade2,
    isGrade3,
    isPrimaryChuot,
    isGrade4,
    isGrade5,
    isGrade6,
    isGrade7,
    isGrade12,
    isSecondary,
    isHighSchool,
    currentSubject,
    switchSubject,
    isMath,
    profile, 
    updateProfile,
    totalStars, 
    coins, 
    streakData, 
    wrongQuestions, 
    soundEnabled, 
    toggleSound, 
    isFreeMode, 
    toggleFreeMode,
    unlockedMascots 
  } = useLearning();

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [tempName, setTempName] = useState(profile.name || (isGrade12 ? 'Nguyễn Nhật Minh' : 'Bé Chuột của Mẹ Loan'));
  const [tempSchool, setTempSchool] = useState(profile.school || (isGrade12 ? 'Trường PTTH Ngô Gia Tự' : ''));
  const [tempMascot, setTempMascot] = useState(profile.mascot || (isGrade12 ? 'dragon' : 'elephant'));

  const currentMascotObj = SHOP_MASCOTS.find(m => m.id === profile.mascot) || SHOP_MASCOTS[0];

  const handleSaveProfile = () => {
    sounds.playClick();
    updateProfile({
      name: tempName.trim() || (isGrade12 ? 'Nguyễn Nhật Minh' : 'Bé Chuột của Mẹ Loan'),
      school: tempSchool.trim() || (isGrade12 ? 'Trường PTTH Ngô Gia Tự' : ''),
      mascot: tempMascot
    });
    setShowProfileModal(false);
  };

  const navItems = [
    { id: 'roadmap', label: 'Lộ Trình 35 Tuần', icon: Compass, badge: null },
    { id: 'videos', label: 'Bài Giảng Video', icon: Video, badge: 'Mới' },
    { id: 'practice', label: 'Phòng Luyện Thi', icon: BookOpen, badge: null },
    { id: 'wrong', label: 'Sửa Câu Sai', icon: RotateCcw, badge: wrongQuestions.length > 0 ? wrongQuestions.length : null },
    { id: 'dashboard', label: 'Góc Phụ Huynh', icon: BarChart3, badge: null },
    { id: 'badges', label: 'Bộ Sưu Tập', icon: Award, badge: null },
    { id: 'members', label: 'Quản Trị & Phân Quyền', icon: Shield, badge: 'Mới' },
  ];

  // Dynamic titles
  const getSubjectTitle = () => {
    let list = primarySubjectsList;
    // Handle both naming conventions just in case
    const highSchoolList = typeof highSchoolSubjectsList !== 'undefined' ? highSchoolSubjectsList : (typeof grade12SubjectsList !== 'undefined' ? grade12SubjectsList : []);
    const secondaryList = typeof secondarySubjectsList !== 'undefined' ? secondarySubjectsList : (typeof grade7SubjectsList !== 'undefined' ? grade7SubjectsList : []);

    if (isHighSchool) list = highSchoolList;
    else if (isSecondary) list = secondaryList;
    
    const subj = list.find(s => s.id === currentSubject);
    if (subj) return subj.label;
    
    return `Lớp ${currentGrade}`;
  };

  const gradeList = [
    { id: '1', label: 'Lớp 1', icon: '🐭', color: 'from-pink-400 to-rose-500 text-white' },
    { id: '2', label: 'Lớp 2', icon: '🐹', color: 'from-amber-400 to-orange-500 text-white' },
    { id: '3', label: 'Lớp 3', icon: '🐰', color: 'from-emerald-400 to-teal-500 text-white' },
    { id: '4', label: 'Lớp 4', icon: '🎒', color: 'from-amber-400 to-orange-400 text-amber-950' },
    { id: '5', label: 'Lớp 5', icon: '⭐', color: 'from-emerald-400 to-teal-500 text-white' },
    { id: '6', label: 'Lớp 6', icon: '📘', color: 'from-indigo-500 to-blue-600 text-white' },
    { id: '7', label: 'Lớp 7', icon: '🚀', color: 'from-purple-500 to-pink-600 text-white' },
    { id: '8', label: 'Lớp 8', icon: '📐', color: 'from-blue-500 to-cyan-600 text-white' },
    { id: '9', label: 'Lớp 9', icon: '🏆', color: 'from-orange-500 to-amber-600 text-white' },
    { id: '10', label: 'Lớp 10', icon: '⚡', color: 'from-teal-500 to-emerald-600 text-white' },
    { id: '11', label: 'Lớp 11', icon: '🔮', color: 'from-violet-500 to-purple-600 text-white' },
    { id: '12', label: 'Lớp 12', icon: '🎓', color: 'from-red-500 to-rose-600 text-white' },
  ];

  const primarySubjectsList = [
    { id: 'math', label: `Toán ${currentGrade}`, color: 'from-amber-400 to-orange-500' },
    { id: 'vietnamese', label: `Tiếng Việt ${currentGrade}`, color: 'from-rose-400 to-pink-500' },
    { id: 'english', label: `Tiếng Anh ${currentGrade}`, color: 'from-emerald-400 to-teal-500' },
    { id: 'science', label: `TNXH ${currentGrade}`, color: 'from-purple-400 to-indigo-500' },
    { id: 'history_geo', label: `Xã Hội ${currentGrade}`, color: 'from-blue-400 to-cyan-500' },
    { id: 'informatics', label: `Tin Học ${currentGrade}`, color: 'from-cyan-400 to-blue-500' },
    { id: 'civics', label: `Đạo Đức ${currentGrade}`, color: 'from-pink-400 to-rose-500' },
    { id: 'technology', label: `Công Nghệ ${currentGrade}`, color: 'from-lime-400 to-emerald-500' },
  ];

  const grade7SubjectsList = [
    { id: 'math', label: `Toán ${currentGrade}`, color: 'from-blue-500 to-indigo-600' },
    { id: 'vietnamese', label: `Ngữ Văn ${currentGrade}`, color: 'from-rose-500 to-purple-600' },
    { id: 'english', label: `Tiếng Anh ${currentGrade}`, color: 'from-emerald-500 to-teal-600' },
    { id: 'science', label: `KHTN ${currentGrade}`, color: 'from-purple-500 to-indigo-700' },
    { id: 'history_geo', label: `Sử & Địa Lí ${currentGrade}`, color: 'from-amber-500 to-orange-600' },
    { id: 'informatics', label: `Tin Học ${currentGrade}`, color: 'from-cyan-500 to-blue-600' },
    { id: 'civics', label: `GDCD ${currentGrade}`, color: 'from-pink-500 to-rose-600' },
    { id: 'technology', label: `Công Nghệ ${currentGrade}`, color: 'from-green-500 to-emerald-600' },
  ];

  const grade12SubjectsList = [
    { id: 'math', label: `Toán ${currentGrade}`, color: 'from-blue-600 to-indigo-700' },
    { id: 'vietnamese', label: `Ngữ Văn ${currentGrade}`, color: 'from-rose-600 to-purple-700' },
    { id: 'english', label: `Tiếng Anh ${currentGrade}`, color: 'from-emerald-600 to-teal-700' },
    { id: 'physics', label: `Vật Lí ${currentGrade}`, color: 'from-sky-600 to-blue-700' },
    { id: 'chemistry', label: `Hóa Học ${currentGrade}`, color: 'from-purple-600 to-indigo-800' },
    { id: 'biology', label: `Sinh Học ${currentGrade}`, color: 'from-green-600 to-emerald-700' },
    { id: 'history', label: `Lịch Sử ${currentGrade}`, color: 'from-amber-600 to-orange-700' },
    { id: 'geography', label: `Địa Lí ${currentGrade}`, color: 'from-teal-600 to-cyan-700' },
    { id: 'econ_law', label: `GDKT & PL ${currentGrade}`, color: 'from-pink-600 to-rose-700' },
    { id: 'informatics', label: `Tin Học ${currentGrade}`, color: 'from-cyan-600 to-blue-700' },
    { id: 'technology', label: `Công Nghệ ${currentGrade}`, color: 'from-lime-600 to-emerald-700' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm w-full max-w-full overflow-hidden">
      {/* ==================== DESKTOP HEADER (MD & UP) ==================== */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Brand / Logo & Student Info */}
          <div 
            onClick={() => { sounds.playClick(); onSelectTab('roadmap'); }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-bouncy-sm group-hover:scale-105 transition-transform ${
              isHighSchool
                ? 'bg-gradient-to-br from-red-500 to-rose-600'
                : isMath 
                ? (isSecondary ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-amber-400 to-orange-500') 
                : (isSecondary ? 'bg-gradient-to-br from-rose-500 to-purple-600' : 'bg-gradient-to-br from-rose-400 to-pink-500')
            }`}>
              {currentMascotObj.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-lg sm:text-2xl text-slate-800 tracking-tight font-nunito">
                  {getSubjectTitle()}
                </span>
                <span className={`text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm ${
                  isHighSchool
                    ? 'bg-gradient-to-r from-red-600 to-rose-600'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600'
                }`}>
                  {isHighSchool ? 'THPT • GDPT 2026' : 'GDPT MỚI 2026'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap mt-1">
                <span className="text-[14px] sm:text-[16px] font-bold text-slate-800 bg-amber-50/90 px-3 py-0.5 rounded-xl border border-amber-300 shadow-xs flex items-center gap-1.5 flex-wrap">
                  {profile.school ? (<>🏫 <span className="font-extrabold text-blue-700">{profile.school}</span> <span className="text-slate-400 font-bold">-</span> <span className="font-black text-emerald-800">Học sinh: {profile.name}</span></>) : (<span className="font-black text-emerald-800 text-lg">❤️ {profile.name}</span>)}
                </span>
              </div>
            </div>
          </div>

          {/* Grade & Subject Switchers */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Grade Switcher */}
            <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-inner">
              {gradeList.map((g) => {
                const isActive = currentGrade === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => switchGrade(g.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-black text-xs transition-all cursor-pointer ${
                      isActive
                        ? `bg-gradient-to-r ${g.color} shadow-sm scale-105`
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <span>{g.icon}</span>
                    <span>{g.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Subject Switcher */}
            {isHighSchool ? (
              <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-inner max-w-full overflow-x-auto scrollbar-none py-1">
                {grade12SubjectsList.map(subj => {
                  const isSubjActive = currentSubject === subj.id;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => switchSubject(subj.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                        isSubjActive
                          ? `bg-gradient-to-r ${subj.color} text-white shadow-sm scale-105`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <span>{subj.label}</span>
                    </button>
                  );
                })}
              </div>
            ) : (!isSecondary && !isHighSchool) ? (
              <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-inner max-w-full overflow-x-auto scrollbar-none py-1">
                {primarySubjectsList.map(subj => {
                  const isSubjActive = currentSubject === subj.id;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => switchSubject(subj.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                        isSubjActive
                          ? `bg-gradient-to-r ${subj.color} text-white shadow-sm scale-105`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <span>{subj.label}</span>
                    </button>
                  );
                })}
              </div>
            ) : isSecondary ? (
              <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-inner max-w-full overflow-x-auto scrollbar-none py-1">
                {grade7SubjectsList.map(subj => {
                  const isSubjActive = currentSubject === subj.id;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => switchSubject(subj.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                        isSubjActive
                          ? `bg-gradient-to-r ${subj.color} text-white shadow-sm scale-105`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <span>{subj.label}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1 shadow-inner">
                <button
                  onClick={() => switchSubject('math')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                    isMath
                      ? isSecondary
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm scale-105'
                        : 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 shadow-sm scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>🧮 Toán {currentGrade}</span>
                </button>

                <button
                  onClick={() => switchSubject('vietnamese')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                    currentSubject === 'vietnamese'
                      ? isSecondary
                        ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-sm scale-105'
                        : 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-sm scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>{isSecondary ? `📖 Ngữ Văn ${currentGrade}` : `📖 Tiếng Việt ${currentGrade}`}</span>
                </button>
              </div>
            )}
          </div>

          {/* Stats Pill Badges */}
          <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-extrabold">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border-2 border-amber-300 rounded-xl text-amber-900 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse-subtle" />
              <span>{totalStars} <span className="text-amber-700 text-xs hidden sm:inline">Sao</span></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 border-2 border-yellow-300 rounded-xl text-yellow-900 shadow-sm">
              <Coins className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              <span>{coins} <span className="text-yellow-700 text-xs hidden sm:inline">Xu</span></span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border-2 border-orange-300 rounded-xl text-orange-900 shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-400" />
              <span>{streakData.currentStreak} <span className="text-orange-700 text-xs hidden sm:inline">Ngày</span></span>
            </div>

            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border-2 transition-all cursor-pointer ${
                soundEnabled 
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100' 
                  : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
              }`}
              title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleFreeMode}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border-2 font-bold text-xs transition-all cursor-pointer ${
                isFreeMode
                  ? 'bg-purple-100 border-purple-300 text-purple-800 shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Bật/Tắt chế độ mở khóa tự do tất cả tuần"
            >
              {isFreeMode ? <Unlock className="w-3.5 h-3.5 text-purple-600" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{isFreeMode ? 'Đã Mở Tất Cả' : 'Mở Khóa Tự Do'}</span>
            </button>

            {/* Profile Avatar */}
            <button
              onClick={() => {
                sounds.playPop();
                setTempName(profile.name);
                setTempSchool(profile.school);
                setTempMascot(profile.mascot || 'dragon');
                setShowProfileModal(true);
              }}
              className="flex items-center gap-2 pl-2 pr-3 py-1 bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-200 text-indigo-900 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span className="text-lg">{currentMascotObj.emoji}</span>
              <span className="max-w-[140px] truncate text-xs font-bold">{profile.name}</span>
            </button>
          </div>
        </div>

        {/* Desktop Tab Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 border-t border-amber-100/80">
          <nav className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playClick();
                    onSelectTab(item.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-950' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 bg-rose-500 text-white font-black text-[10px] rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ==================== MOBILE PHONE HEADER (< MD) ==================== */}
      <div className="block md:hidden px-3 py-2 space-y-2 w-full max-w-full overflow-hidden">
        {/* Mobile Row 1: Brand & Profile */}
        <div className="flex items-center justify-between gap-2">
          <div 
            onClick={() => { sounds.playClick(); onSelectTab('roadmap'); }}
            className="flex items-center gap-2 cursor-pointer flex-1 min-w-0"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xl shadow-xs flex-shrink-0 ${
              isHighSchool ? 'bg-gradient-to-br from-red-500 to-rose-600' : 'bg-gradient-to-br from-amber-400 to-orange-500'
            }`}>
              {currentMascotObj.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base text-slate-800 tracking-tight truncate font-nunito">
                  {getSubjectTitle()}
                </span>
                <span className={`text-white text-[9px] font-black px-1.5 py-0.2 rounded-md flex-shrink-0 ${
                  isHighSchool ? 'bg-red-600' : 'bg-purple-600'
                }`}>
                  {isHighSchool ? 'THPT 2026' : 'GDPT 2026'}
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-600 truncate">
                {profile.school ? (<>🏫 <span className="text-blue-700 font-extrabold">{profile.school}</span> • <span className="text-emerald-700 font-black">{profile.name}</span></>) : (<span className="text-emerald-700 font-black">❤️ {profile.name}</span>)}
              </div>
            </div>
          </div>

          {/* Profile Trigger */}
          <button
            onClick={() => {
              sounds.playPop();
              setTempName(profile.name);
              setTempSchool(profile.school);
              setTempMascot(profile.mascot || 'dragon');
              setShowProfileModal(true);
            }}
            className="p-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-lg flex-shrink-0 shadow-xs cursor-pointer"
            title="Hồ sơ học sinh"
          >
            {currentMascotObj.emoji}
          </button>
        </div>

        {/* Mobile Row 2: Stats & Controls */}
        <div className="flex items-center justify-between gap-1 text-[11px] font-black bg-amber-50/70 p-1.5 rounded-xl border border-amber-200 w-full overflow-hidden">
          <div className="flex items-center gap-1 text-amber-900">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{totalStars}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-900">
            <Coins className="w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
            <span>{coins}</span>
          </div>
          <div className="flex items-center gap-1 text-orange-900">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
            <span>{streakData.currentStreak}d</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleSound}
              className={`p-1 rounded-lg border transition-all cursor-pointer ${
                soundEnabled ? 'bg-emerald-100 border-emerald-300 text-emerald-700' : 'bg-slate-100 border-slate-300 text-slate-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
            </button>

            <button
              onClick={toggleFreeMode}
              className={`px-1.5 py-0.5 rounded-lg border text-[10px] font-bold transition-all cursor-pointer ${
                isFreeMode ? 'bg-purple-100 border-purple-300 text-purple-800' : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}
            >
              {isFreeMode ? '🔓 Mở' : '🔒 Khóa'}
            </button>
          </div>
        </div>

        {/* Mobile Row 3: Grade Selector (5-Column Horizontal Scroll / Grid) */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none bg-slate-100 p-1 rounded-xl border border-slate-200 w-full">
          {gradeList.map((g) => {
            const isActive = currentGrade === g.id;
            return (
              <button
                key={g.id}
                onClick={() => switchGrade(g.id)}
                className={`py-1 px-2.5 rounded-lg font-black text-xs whitespace-nowrap flex-1 flex items-center justify-center gap-1 transition-all cursor-pointer ${
                  isActive
                    ? `bg-gradient-to-r ${g.color} shadow-xs scale-102`
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                <span>{g.icon}</span>
                <span>{g.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Row 4: Subject Selector */}
        <div className="w-full min-w-0 max-w-full overflow-hidden">
          {isHighSchool ? (
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 px-0.5 w-full">
              {grade12SubjectsList.map(subj => {
                const isSubjActive = currentSubject === subj.id;
                return (
                  <button
                    key={subj.id}
                    onClick={() => switchSubject(subj.id)}
                    className={`px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap flex-shrink-0 transition-all cursor-pointer border ${
                      isSubjActive
                        ? `bg-gradient-to-r ${subj.color} text-white shadow-xs border-transparent scale-102`
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {subj.label}
                  </button>
                );
              })}
            </div>
          ) : (!isSecondary && !isHighSchool) ? (
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 px-0.5 w-full">
              {primarySubjectsList.map(subj => {
                const isSubjActive = currentSubject === subj.id;
                return (
                  <button
                    key={subj.id}
                    onClick={() => switchSubject(subj.id)}
                    className={`px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap flex-shrink-0 transition-all cursor-pointer border ${
                      isSubjActive
                        ? `bg-gradient-to-r ${subj.color} text-white shadow-xs border-transparent scale-102`
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {subj.label}
                  </button>
                );
              })}
            </div>
          ) : isSecondary ? (
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 px-0.5 w-full">
              {grade7SubjectsList.map(subj => {
                const isSubjActive = currentSubject === subj.id;
                return (
                  <button
                    key={subj.id}
                    onClick={() => switchSubject(subj.id)}
                    className={`px-2.5 py-1 rounded-xl font-black text-xs whitespace-nowrap flex-shrink-0 transition-all cursor-pointer border ${
                      isSubjActive
                        ? `bg-gradient-to-r ${subj.color} text-white shadow-xs border-transparent scale-102`
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {subj.label}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-1.5 w-full">
              <button
                onClick={() => switchSubject('math')}
                className={`py-1 px-2 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all cursor-pointer border ${
                  isMath
                    ? isSecondary
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent'
                      : 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 border-amber-300'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Toán {currentGrade}</span>
              </button>

              <button
                onClick={() => switchSubject('vietnamese')}
                className={`py-1 px-2 rounded-xl font-black text-xs flex items-center justify-center gap-1 transition-all cursor-pointer border ${
                  currentSubject === 'vietnamese'
                    ? isSecondary
                      ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white border-transparent'
                      : 'bg-gradient-to-r from-rose-400 to-pink-500 text-white border-rose-300'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>{isSecondary ? `Ngữ Văn ${currentGrade}` : `Tiếng Việt ${currentGrade}`}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ==================== PROFILE MODAL ==================== */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border-3 border-amber-300 shadow-2xl space-y-4 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <User className="w-5 h-5 text-amber-500" />
                Hồ Sơ Học Sinh {isHighSchool ? '(Lớp 12 - THPT)' : '(Lớp 4 - 7)'}
              </h3>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* School Input */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Tên trường học:
              </label>
              <input
                type="text"
                value={tempSchool}
                maxLength={40}
                onChange={(e) => setTempSchool(e.target.value)}
                placeholder="VD: Trường PTCS - Phú La..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-amber-400 focus:outline-none font-bold text-slate-800 text-sm"
              />
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Họ và tên học sinh:
              </label>
              <input
                type="text"
                value={tempName}
                maxLength={30}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="VD: Nguyễn Công Nguyên..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-amber-400 focus:outline-none font-bold text-slate-800 text-sm"
              />
            </div>

            {/* Mascot Grid */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Chọn linh vật đồng hành:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {SHOP_MASCOTS.map((m) => {
                  const isUnlocked = (unlockedMascots || []).includes(m.id);
                  const isSelected = tempMascot === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      disabled={!isUnlocked}
                      onClick={() => isUnlocked && setTempMascot(m.id)}
                      className={`p-2 rounded-xl border-2 flex flex-col items-center gap-0.5 transition-all ${
                        !isUnlocked
                          ? 'opacity-40 grayscale border-slate-200 bg-slate-50 cursor-not-allowed'
                          : isSelected
                          ? 'border-amber-400 bg-amber-50 scale-105 shadow-xs cursor-pointer'
                          : 'border-slate-200 hover:border-slate-300 bg-white cursor-pointer'
                      }`}
                    >
                      <span className="text-2xl">{m.emoji}</span>
                      <span className="text-[10px] font-bold text-slate-700 truncate w-full text-center">{m.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setShowProfileModal(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-sm rounded-xl"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm rounded-xl shadow-xs"
              >
                Lưu Thay Đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
