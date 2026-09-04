import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  Sparkles, 
  RotateCcw, 
  Download,
  Calendar,
  Layers,
  ChevronRight,
  BookOpen,
  Calculator,
  Shield,
  KeyRound,
  FileSpreadsheet,
  Trash2,
  Lock,
  Unlock
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import sounds from '../utils/soundEffects';

export const ParentDashboard = ({ onSelectTab }) => {
  const { 
    profile, 
    progress, 
    history, 
    totalStars, 
    coins, 
    streakData,
    isMath,
    currentGrade,
    currentSubject,
    categories: currentCategories,
    parentPin,
    setParentPin,
    verifyParentPin,
  } = useLearning();

  const [pinInput, setPinInput] = useState('');
  const [isUnlockedByPin, setIsUnlockedByPin] = useState(!parentPin);
  const [pinError, setPinError] = useState('');
  const [showPinSetup, setShowPinSetup] = useState(false);
  const [newPinVal, setNewPinVal] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Filter history by current grade & subject
  const subjectHistory = history.filter(h => {
    const matchGrade = !h.grade || h.grade === currentGrade;
    const matchSubject = !h.subject || h.subject === currentSubject;
    return matchGrade && matchSubject;
  });

  const getSubjectLabel = () => {
    if (currentGrade === '12') {
      if (currentSubject === 'math') return 'Toán 12';
      if (currentSubject === 'vietnamese') return 'Ngữ Văn 12';
      if (currentSubject === 'english') return 'Tiếng Anh 12';
      if (currentSubject === 'physics') return 'Vật Lí 12';
      if (currentSubject === 'chemistry') return 'Hóa Học 12';
      if (currentSubject === 'biology') return 'Sinh Học 12';
      if (currentSubject === 'history') return 'Lịch Sử 12';
      if (currentSubject === 'geography') return 'Địa Lí 12';
      if (currentSubject === 'econ_law') return 'GDKT & PL 12';
      if (currentSubject === 'informatics') return 'Tin Học 12';
      if (currentSubject === 'technology') return 'Công Nghệ 12';
      return 'Toán 12';
    }
    if (currentGrade === '7') {
      if (currentSubject === 'math') return 'Toán Lớp 7';
      if (currentSubject === 'vietnamese') return 'Ngữ Văn 7';
      if (currentSubject === 'english') return 'Tiếng Anh 7';
      if (currentSubject === 'science') return 'KHTN 7';
      if (currentSubject === 'history_geo') return 'Lịch Sử & Địa Lí 7';
      if (currentSubject === 'informatics') return 'Tin Học 7';
      if (currentSubject === 'civics') return 'GDCD 7';
      if (currentSubject === 'technology') return 'Công Nghệ 7';
      return 'Toán Lớp 7';
    }
    return isMath
      ? `Toán Lớp ${currentGrade}`
      : (Number(currentGrade) >= 6 ? `Ngữ Văn ${currentGrade}` : `Tiếng Việt ${currentGrade}`);
  };

  const subjectLabel = getSubjectLabel();

  // Overall Statistics for current subject
  const totalQuizzes = subjectHistory.length;
  const averageScore = totalQuizzes > 0 
    ? Math.round(subjectHistory.reduce((sum, h) => sum + h.score, 0) / totalQuizzes)
    : 0;
  const perfectQuizzesCount = subjectHistory.filter(h => h.score === 100).length;
  const totalTimeSec = subjectHistory.reduce((sum, h) => sum + (h.timeSpent || 0), 0);
  const totalMinutes = Math.round(totalTimeSec / 60);

  // Topic Performance Analysis
  const topicStats = {};
  (currentCategories || []).forEach(cat => {
    topicStats[cat.id] = { total: 0, correct: 0 };
  });

  subjectHistory.forEach(h => {
    if (h.details && Array.isArray(h.details)) {
      h.details.forEach(d => {
        if (d.category && topicStats[d.category]) {
          topicStats[d.category].total += 1;
          if (d.isCorrect) topicStats[d.category].correct += 1;
        }
      });
    }
  });

  // Calculate percentage and status for each topic
  const topicBreakdown = currentCategories.map(cat => {
    const stat = topicStats[cat.id] || { total: 0, correct: 0 };
    const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : null;
    
    let status = "Chưa làm bài";
    let statusColor = "text-slate-400 bg-slate-100";
    if (accuracy !== null) {
      if (accuracy >= 85) {
        status = "🌟 Xuất sắc";
        statusColor = "text-emerald-700 bg-emerald-50 border-emerald-300";
      } else if (accuracy >= 70) {
        status = "👍 Nắm vững";
        statusColor = "text-blue-700 bg-blue-50 border-blue-300";
      } else {
        status = "⚠️ Cần củng cố";
        statusColor = "text-amber-700 bg-amber-50 border-amber-300";
      }
    }

    return {
      ...cat,
      total: stat.total,
      correct: stat.correct,
      accuracy,
      status,
      statusColor
    };
  });

  // Strongest and Weakest topics
  const testedTopics = topicBreakdown.filter(t => t.accuracy !== null);
  const strongestTopic = testedTopics.length > 0 
    ? [...testedTopics].sort((a, b) => b.accuracy - a.accuracy)[0] 
    : null;
  const weakestTopic = testedTopics.length > 0 
    ? [...testedTopics].sort((a, b) => a.accuracy - b.accuracy)[0] 
    : null;

  // Handle PIN verification
  const handleVerifyPin = (e) => {
    e.preventDefault();
    if (verifyParentPin(pinInput)) {
      sounds.playVictory();
      setIsUnlockedByPin(true);
      setPinError('');
    } else {
      sounds.playWrong();
      setPinError('Mã PIN không chính xác! Vui lòng thử lại.');
    }
  };

  // Handle Save New PIN
  const handleSaveNewPin = (e) => {
    e.preventDefault();
    setParentPin(newPinVal);
    setShowPinSetup(false);
    setIsUnlockedByPin(true);
  };

  // Handle Export CSV
  const handleExportCSV = () => {
    sounds.playClick();
    const rows = [
      ['BÁO CÁO HỌC TẬP - HỌC TỐT LỚP 4 - LỚP 7'],
      ['Học sinh:', profile.name || 'Bé Chuột của Mẹ Loan'],
      ['Trường:', profile.school || ''],
      ['Môn học:', subjectLabel],
      ['Ngày xuất:', new Date().toLocaleDateString('vi-VN')],
      ['Tổng số bài đã làm:', totalQuizzes],
      ['Điểm trung bình:', `${averageScore}%`],
      ['Thời gian học:', `${totalMinutes} phút`],
      ['Tổng số sao:', totalStars],
      [''],
      ['LỊCH SỬ CHI TIẾT BÀI LÀM'],
      ['Thời gian', 'Tuần', 'Điểm', 'Số câu đúng', 'Tổng số câu', 'Thời gian làm (giây)', 'Sao đạt']
    ];

    subjectHistory.forEach(item => {
      rows.push([
        new Date(item.date).toLocaleString('vi-VN'),
        item.week ? `Tuần ${item.week}` : 'Tự luyện',
        `${item.score}%`,
        item.correctCount,
        item.totalCount,
        item.timeSpent || 0,
        item.earnedStars
      ]);
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + rows.map(e => e.map(cell => `"${cell}"`).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bao_Cao_Hoc_Tap_${profile.name || 'HocSinh'}_${subjectLabel.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If Parent PIN is active and not unlocked yet
  if (parentPin && !isUnlockedByPin) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-3xl border-3 border-amber-300 shadow-bouncy text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
          <KeyRound className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-black text-slate-800">
          Xác Thực Mã PIN Phụ Huynh 🔒
        </h2>
        <p className="text-xs font-semibold text-slate-500">
          Khu vực này được bảo vệ bởi mã PIN phụ huynh để theo dõi báo cáo học tập và cài đặt dữ liệu.
        </p>

        <form onSubmit={handleVerifyPin} className="space-y-3 pt-2">
          <input
            type="password"
            maxLength={6}
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            placeholder="Nhập mã PIN (4-6 số)"
            className="w-full text-center tracking-widest text-2xl font-black px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none"
            autoFocus
          />

          {pinError && (
            <p className="text-xs font-black text-rose-600 animate-pulse">{pinError}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm rounded-2xl shadow-bouncy-sm btn-bouncy"
          >
            Mở Khóa Báo Cáo
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8 print:p-0">
      {/* Top Banner */}
      <div className={`rounded-3xl p-6 sm:p-8 text-white shadow-bouncy flex flex-wrap items-center justify-between gap-4 ${
        isMath
          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
          : 'bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600'
      }`}>
        <div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider mb-2 inline-block">
            Góc Phụ Huynh & Phân Tích Năng Lực ({subjectLabel} - GDPT Mới 2026)
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mb-1">
            Báo Cáo Học Tập Của {profile.name || 'Nguyễn Công Nguyên'} 📊
          </h1>
          <p className="text-xs sm:text-sm font-bold text-blue-100">
            Học sinh: <span className="underline">{profile.name || 'Bé Chuột của Mẹ Loan'}</span> {profile.school ? <>• <span className="underline">{profile.school}</span></> : null} • Dữ liệu trực quan giúp phụ huynh nắm bắt chính xác tiến độ rèn luyện của con.
          </p>
        </div>

        <div className="flex items-center gap-2 print:hidden flex-wrap">
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-bouncy-sm btn-bouncy flex items-center gap-1.5 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Xuất Excel (CSV)
          </button>

          <button
            onClick={() => { sounds.playClick(); window.print(); }}
            className="px-3.5 py-2.5 bg-white text-slate-800 font-extrabold text-xs sm:text-sm rounded-xl shadow-bouncy-sm btn-bouncy flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            In Báo Cáo
          </button>

          <button
            onClick={() => { sounds.playClick(); setShowPinSetup(!showPinSetup); }}
            className="px-3.5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm rounded-xl border border-white/30 flex items-center gap-1.5 cursor-pointer"
          >
            <Shield className="w-4 h-4" />
            {parentPin ? 'Đổi PIN' : 'Đặt Mã PIN'}
          </button>

          {onSelectTab && (
            <button
              onClick={() => { sounds.playClick(); onSelectTab('members'); }}
              className="px-3.5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-bouncy-sm btn-bouncy flex items-center gap-1.5 cursor-pointer"
            >
              <Shield className="w-4 h-4 text-purple-200" />
              Phân Quyền Thành Viên
            </button>
          )}
        </div>
      </div>

      {/* PIN Setup Modal / Form */}
      {showPinSetup && (
        <div className="bg-amber-50 rounded-2xl border-2 border-amber-300 p-4 sm:p-6 space-y-3 animate-scale-in">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-amber-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-600" />
              Cài Đặt Mã PIN Bảo Vệ Góc Phụ Huynh
            </h3>
            <button
              onClick={() => setShowPinSetup(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-700"
            >
              Đóng
            </button>
          </div>
          <p className="text-xs font-semibold text-slate-600">
            Đặt mã PIN 4-6 số để bảo vệ trang phân tích này và tránh việc học sinh vô tình đặt lại dữ liệu. Để trống và lưu nếu muốn tắt mã PIN.
          </p>
          <form onSubmit={handleSaveNewPin} className="flex gap-2 max-w-sm">
            <input
              type="password"
              maxLength={6}
              value={newPinVal}
              onChange={(e) => setNewPinVal(e.target.value)}
              placeholder="Nhập PIN mới..."
              className="px-3 py-2 bg-white rounded-xl border-2 border-slate-200 text-sm font-bold flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Lưu PIN
            </button>
          </form>
        </div>
      )}

      {/* Key Metrics Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Tổng bài đã làm</span>
            <Layers className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-800">
            {totalQuizzes} <span className="text-xs font-semibold text-slate-400">bài</span>
          </div>
          <div className="text-[11px] font-extrabold text-emerald-600 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> {perfectQuizzesCount} bài đạt điểm 10
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Điểm trung bình</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-800">
            {averageScore}%
          </div>
          <div className="text-[11px] font-extrabold text-slate-500 mt-1">
            {averageScore >= 80 ? '🌟 Học lực Giỏi' : averageScore >= 65 ? '👍 Học lực Khá' : '🌱 Cần cố gắng'}
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Thời gian học tập</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-800">
            {totalMinutes} <span className="text-xs font-semibold text-slate-400">phút</span>
          </div>
          <div className="text-[11px] font-extrabold text-amber-600 mt-1">
            Chuyên cần {streakData.currentStreak} ngày
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold">Ngôi sao tích lũy</span>
            <Award className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-800">
            {totalStars} <span className="text-xs font-semibold text-slate-400">sao</span>
          </div>
          <div className="text-[11px] font-extrabold text-yellow-600 mt-1">
            {coins} Xu đổi thưởng
          </div>
        </div>
      </div>

      {/* AI Teacher Advice & Pedagogical Insights */}
      <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-3xl border-2 border-amber-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-amber-900 font-black text-base">
          <Sparkles className="w-5 h-5 text-amber-600" />
          Nhận Xét & Lời Khuyên Sư Phạm Của Giáo Viên {subjectLabel}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Strength */}
          <div className="bg-white/80 rounded-2xl p-4 border border-amber-200/60 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs mb-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Điểm mạnh nổi trội của bé:
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              {strongestTopic ? (
                <>Bé làm rất tốt chủ đề <span className="text-emerald-700 underline font-black">{strongestTopic.name}</span> với độ chính xác đạt {strongestTopic.accuracy}%.</>
              ) : (
                <>Bé đang trong giai đoạn làm quen ban đầu. Hãy khuyến khích bé hoàn thành các bài trắc nghiệm Tuần 1 để hệ thống phân tích chi tiết!</>
              )}
            </p>
          </div>

          {/* Area to improve */}
          <div className="bg-white/80 rounded-2xl p-4 border border-amber-200/60 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs mb-1.5">
              <AlertTriangle className="w-4 h-4" />
              Chủ đề cần ưu tiên rèn luyện thêm:
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              {weakestTopic && weakestTopic.accuracy < 75 ? (
                <>Bé cần lưu ý thêm về <span className="text-amber-800 underline font-black">{weakestTopic.name}</span> (đạt {weakestTopic.accuracy}%). Phụ huynh nên hướng dẫn bé xem lại phần 'Sửa Câu Sai' để nắm vững phương pháp.</>
              ) : (
                <>Năng lực học tập của bé đang tiến bộ rất đồng đều ở mọi mảng kiến thức. Hãy duy trì thói quen học 15 phút mỗi ngày!</>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Competency Breakdown */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-bouncy space-y-6">
        <div className="flex items-center justify-between pb-4 border-b-2 border-slate-100">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-800">
              Đánh Giá Năng Lực Theo Chuẩn Kiến Thức & Kỹ Năng
            </h2>
            <p className="text-xs font-bold text-slate-500 mt-0.5">
              Tỷ lệ chính xác dựa trên lịch sử toàn bộ các câu hỏi trắc nghiệm đã làm
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {topicBreakdown.map((topic) => (
            <div key={topic.id} className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-slate-800">{topic.name}</span>
                  <span className={`text-[11px] font-black px-2 py-0.5 rounded-full border ${topic.statusColor}`}>
                    {topic.status}
                  </span>
                </div>
                <div className="text-xs font-extrabold text-slate-600">
                  {topic.total > 0 ? (
                    <span>Đúng <strong className="text-slate-900">{topic.correct}</strong>/{topic.total} câu ({topic.accuracy}%)</span>
                  ) : (
                    <span className="text-slate-400">Chưa có dữ liệu</span>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    (topic.accuracy || 0) >= 80 
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500' 
                      : (topic.accuracy || 0) >= 60 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-500' 
                      : 'bg-gradient-to-r from-amber-400 to-orange-500'
                  }`}
                  style={{ width: `${topic.accuracy || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent History Table */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-bouncy space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-500" />
          Lịch Sử Bài Luyện Tập Gần Nhất
        </h2>

        {subjectHistory.length === 0 ? (
          <div className="py-8 text-center text-slate-400 font-bold text-sm">
            Chưa có bài luyện tập nào được ghi nhận. Hãy bắt đầu từ Tuần 1 nhé!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-bold">
              <thead>
                <tr className="border-b-2 border-slate-100 text-slate-400">
                  <th className="py-2.5 px-3">Thời Gian</th>
                  <th className="py-2.5 px-3">Tên Bài Thi / Tuần</th>
                  <th className="py-2.5 px-3">Điểm Số</th>
                  <th className="py-2.5 px-3">Kết Quả</th>
                  <th className="py-2.5 px-3">Sao Tích Lũy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {subjectHistory.slice(0, 10).map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-3 text-slate-500">
                      {new Date(item.date).toLocaleDateString('vi-VN')} {new Date(item.date).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-3 px-3 font-extrabold text-slate-800">
                      {item.week ? `Tuần ${item.week}` : 'Luyện tập tùy chọn'}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full font-black text-xs ${
                        item.score >= 90 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : item.score >= 70 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {item.score}%
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      Đúng {item.correctCount}/{item.totalCount} câu
                    </td>
                    <td className="py-3 px-3 text-amber-500 font-black flex items-center gap-1">
                      +{item.earnedStars} ⭐
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Danger Zone: Data Reset */}
      <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div>
          <h4 className="font-black text-slate-700 text-sm flex items-center gap-1.5">
            <Trash2 className="w-4 h-4 text-rose-500" />
            Đặt Lại Dữ Liệu Học Tập (Reset All)
          </h4>
          <p className="text-xs font-semibold text-slate-400">
            Xóa toàn bộ điểm số, tiến trình sao và lịch sử làm bài để bắt đầu khóa học lại từ đầu.
          </p>
        </div>

        {showResetConfirm ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-3 py-1.5 bg-slate-200 text-slate-700 font-black text-xs rounded-xl"
            >
              Hủy
            </button>
            <button
              onClick={clearAllData}
              className="px-3 py-1.5 bg-rose-600 text-white font-black text-xs rounded-xl shadow-xs"
            >
              Xác nhận xóa sạch
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 bg-slate-200 hover:bg-rose-100 hover:text-rose-700 text-slate-600 font-black text-xs rounded-xl transition-all cursor-pointer"
          >
            Đặt lại dữ liệu
          </button>
        )}
      </div>
    </div>
  );
};
