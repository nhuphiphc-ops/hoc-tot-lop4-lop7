import React, { createContext, useContext, useState, useEffect } from 'react';
import sounds from '../utils/soundEffects';

// Grade 4 Data
import { STAGES, TOPIC_CATEGORIES, WEEKS_METADATA, QUESTION_BANK, getQuestionsByWeek, getFilteredQuestions } from '../data/questionBank.js';
import { STAGES_TV, TOPIC_CATEGORIES_TV, WEEKS_METADATA_TV, QUESTION_BANK_TV, getQuestionsByWeekTV, getFilteredQuestionsTV } from '../data/tiengviet/questionBankTV.js';

// Grade 5 Data
import { STAGES_MATH5, TOPIC_CATEGORIES_MATH5, WEEKS_METADATA_MATH5, QUESTION_BANK_MATH5, getQuestionsByWeekMath5, getFilteredQuestionsMath5 } from '../data/grade5/math/questionBankMath5.js';
import { STAGES_TV5, TOPIC_CATEGORIES_TV5, WEEKS_METADATA_TV5, QUESTION_BANK_TV5, getQuestionsByWeekTV5, getFilteredQuestionsTV5 } from '../data/grade5/vietnamese/questionBankTV5.js';

// Grade 6 Data
import { STAGES_MATH6, TOPIC_CATEGORIES_MATH6, WEEKS_METADATA_MATH6, QUESTION_BANK_MATH6, getQuestionsByWeekMath6, getFilteredQuestionsMath6 } from '../data/grade6/math/questionBankMath6.js';
import { STAGES_LIT6, TOPIC_CATEGORIES_LIT6, WEEKS_METADATA_LIT6, QUESTION_BANK_LIT6, getQuestionsByWeekLit6, getFilteredQuestionsLit6 } from '../data/grade6/literature/questionBankLit6.js';

// Grade 7 Data
import { STAGES_MATH7, TOPIC_CATEGORIES_MATH7, WEEKS_METADATA_MATH7, QUESTION_BANK_MATH7, getQuestionsByWeekMath7, getFilteredQuestionsMath7 } from '../data/grade7/math/questionBankMath7.js';
import { STAGES_LIT7, TOPIC_CATEGORIES_LIT7, WEEKS_METADATA_LIT7, QUESTION_BANK_LIT7, getQuestionsByWeekLit7, getFilteredQuestionsLit7 } from '../data/grade7/literature/questionBankLit7.js';

const LearningContext = createContext();

export const SHOP_MASCOTS = [
  { id: 'elephant', name: 'Voi Thông Thái', emoji: '🐘', desc: 'Kiên trì và ghi nhớ siêu đẳng', price: 0 },
  { id: 'tiger', name: 'Hổ Dũng Mãnh', emoji: '🐯', desc: 'Quyết đoán và chinh phục bài khó', price: 0 },
  { id: 'cat', name: 'Mèo Nhanh Nhẹn', emoji: '🐱', desc: 'Tính toán nhanh như chớp', price: 0 },
  { id: 'owl', name: 'Cú Trí Tuệ', emoji: '🦉', desc: 'Bậc thầy tư duy logic', price: 0 },
  { id: 'dragon', name: 'Rồng Vàng Thần Thoại', emoji: '🐉', desc: 'Thần tài toán học đỉnh cao', price: 100 },
  { id: 'phoenix', name: 'Phượng Hoàng Lửa', emoji: '🔥', desc: 'Bất khả chiến bại mọi đề thi', price: 150 },
  { id: 'unicorn', name: 'Kỳ Lân Phép Thuật', emoji: '🦄', desc: 'Sáng tạo và cảm thụ văn học', price: 120 },
  { id: 'eagle', name: 'Đại Bàng Tinh Anh', emoji: '🦅', desc: 'Tầm nhìn chiến lược điểm 10', price: 120 },
  { id: 'lion', name: 'Sư Tử Đầu Đàn', emoji: '🦁', desc: 'Thủ khoa mọi kỳ thi', price: 100 },
  { id: 'dolphin', name: 'Cá Heo Thông Minh', emoji: '🐬', desc: 'Nhanh nhẹn và chuẩn xác', price: 80 }
];

const STORAGE_KEYS = {
  GRADE: 'toan_current_grade',
  SUBJECT: 'toan_current_subject',
  PROFILE: 'toan_user_profile',
  PROGRESS_G4_MATH: 'toan4_week_progress',
  PROGRESS_G4_TV: 'toan4_week_progress_tv',
  PROGRESS_G5_MATH: 'toan5_week_progress_math',
  PROGRESS_G5_TV: 'toan5_week_progress_tv',
  PROGRESS_G6_MATH: 'toan6_week_progress_math',
  PROGRESS_G6_LIT: 'toan6_week_progress_lit',
  PROGRESS_G7_MATH: 'toan7_week_progress_math',
  PROGRESS_G7_LIT: 'toan7_week_progress_lit',
  HISTORY: 'toan_quiz_history',
  WRONG_G4_MATH: 'toan4_wrong_questions',
  WRONG_G4_TV: 'toan4_wrong_questions_tv',
  WRONG_G5_MATH: 'toan5_wrong_questions_math',
  WRONG_G5_TV: 'toan5_wrong_questions_tv',
  WRONG_G6_MATH: 'toan6_wrong_questions_math',
  WRONG_G6_LIT: 'toan6_wrong_questions_lit',
  WRONG_G7_MATH: 'toan7_wrong_questions_math',
  WRONG_G7_LIT: 'toan7_wrong_questions_lit',
  BADGES: 'toan_badges',
  STREAK: 'toan_streak_data',
  FREE_MODE: 'toan_free_mode',
  COINS: 'toan_coins',
  UNLOCKED_MASCOTS: 'toan_unlocked_mascots',
  PARENT_PIN: 'toan_parent_pin',
  ACTIVE_DRAFT: 'toan_active_quiz_draft'
};

const DEFAULT_PROFILE = {
  name: 'Nguyễn Công Nguyên',
  school: 'Trường PTCS - Phú La',
  mascot: 'elephant',
  avatarColor: '#FFD166',
};

export const BADGE_DEFINITIONS = [
  { id: 'first_quiz', name: 'Bước Chân Đầu Tiên', desc: 'Hoàn thành bài luyện tập đầu tiên', icon: 'Footprints', req: (h) => h.length >= 1 },
  { id: 'perfect_10', name: 'Điểm 10 Hoàn Hảo', desc: 'Đạt điểm tối đa 100% trong 1 bài thi', icon: 'Award', req: (h) => h.some(q => q.score === 100) },
  { id: 'g4_math_master', name: 'Hiệp Sĩ Toán Lớp 4', desc: 'Hoàn thành trên 15 tuần Toán 4', icon: 'ShieldCheck', req: (h, p) => Object.keys(p.g4Math || {}).filter(w => p.g4Math[w]?.bestScore >= 70).length >= 15 },
  { id: 'g4_tv_master', name: 'Trạng Nguyên Tiếng Việt 4', desc: 'Hoàn thành trên 15 tuần Tiếng Việt 4', icon: 'BookOpen', req: (h, p) => Object.keys(p.g4Tv || {}).filter(w => p.g4Tv[w]?.bestScore >= 70).length >= 15 },
  { id: 'g5_math_master', name: 'Thần Đồng Toán Lớp 5', desc: 'Hoàn thành trên 15 tuần Toán 5', icon: 'Calculator', req: (h, p) => Object.keys(p.g5Math || {}).filter(w => p.g5Math[w]?.bestScore >= 70).length >= 15 },
  { id: 'g5_tv_master', name: 'Trạng Nguyên Tiếng Việt 5', desc: 'Hoàn thành trên 15 tuần Tiếng Việt 5', icon: 'BookMarked', req: (h, p) => Object.keys(p.g5Tv || {}).filter(w => p.g5Tv[w]?.bestScore >= 70).length >= 15 },
  { id: 'g6_math_master', name: 'Thủ Khoa Toán Lớp 6', desc: 'Hoàn thành trên 15 tuần Toán 6', icon: 'Zap', req: (h, p) => Object.keys(p.g6Math || {}).filter(w => p.g6Math[w]?.bestScore >= 70).length >= 15 },
  { id: 'g6_lit_master', name: 'Cây Bút Trẻ Lớp 6', desc: 'Hoàn thành trên 15 tuần Ngữ Văn 6', icon: 'Feather', req: (h, p) => Object.keys(p.g6Lit || {}).filter(w => p.g6Lit[w]?.bestScore >= 70).length >= 15 },
  { id: 'g7_math_master', name: 'Thần Đồng Toán Lớp 7', desc: 'Hoàn thành trên 15 tuần Toán 7', icon: 'Zap', req: (h, p) => Object.keys(p.g7Math || {}).filter(w => p.g7Math[w]?.bestScore >= 70).length >= 15 },
  { id: 'g7_lit_master', name: 'Nhà Văn Nhí Lớp 7', desc: 'Hoàn thành trên 15 tuần Ngữ Văn 7', icon: 'Feather', req: (h, p) => Object.keys(p.g7Lit || {}).filter(w => p.g7Lit[w]?.bestScore >= 70).length >= 15 },
  { id: 'streak_3', name: 'Chăm Chỉ Chuyên Cần', desc: 'Học liên tục trong 3 ngày', icon: 'Flame', req: (h, p, s) => (s?.currentStreak || 1) >= 3 },
  { id: 'star_hunter_30', name: 'Thợ Săn Ngôi Sao', desc: 'Tích lũy được trên 30 ngôi sao', icon: 'Star', req: (h, p, s, stars) => stars >= 30 }
];

export const LearningProvider = ({ children }) => {
  // Current active Grade: '4' | '5' | '6' | '7'
  const [currentGrade, setCurrentGrade] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GRADE);
      return ['4', '5', '6', '7'].includes(saved) ? saved : '4';
    } catch {
      return '4';
    }
  });

  // Current active Subject: 'math' | 'vietnamese'
  const [currentSubject, setCurrentSubject] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SUBJECT);
      return saved === 'vietnamese' ? 'vietnamese' : 'math';
    } catch {
      return 'math';
    }
  });

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.name || parsed.name === 'Học Sinh Chăm Chỉ' || parsed.name === 'Bé Chăm Chỉ') {
          parsed.name = 'Nguyễn Công Nguyên';
        }
        if (!parsed.school || parsed.school === 'Trường PTCS') {
          parsed.school = 'Trường PTCS - Phú La';
        }
        return parsed;
      }
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  // Progress Stores
  const [g4MathProgress, setG4MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G4_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g4TvProgress, setG4TvProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G4_TV);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g5MathProgress, setG5MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G5_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g5TvProgress, setG5TvProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G5_TV);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g6MathProgress, setG6MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G6_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g6LitProgress, setG6LitProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G6_LIT);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g7MathProgress, setG7MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  const [g7LitProgress, setG7LitProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_LIT);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch {
      return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    }
  });

  // Quiz History
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wrong Questions Stores
  const [g4MathWrong, setG4MathWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G4_MATH);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g4TvWrong, setG4TvWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G4_TV);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g5MathWrong, setG5MathWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G5_MATH);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g5TvWrong, setG5TvWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G5_TV);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g6MathWrong, setG6MathWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G6_MATH);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g6LitWrong, setG6LitWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G6_LIT);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g7MathWrong, setG7MathWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G7_MATH);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [g7LitWrong, setG7LitWrong] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WRONG_G7_LIT);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [unlockedBadges, setUnlockedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BADGES);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [streakData, setStreakData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STREAK);
      return saved ? JSON.parse(saved) : { currentStreak: 1, lastDate: new Date().toISOString().split('T')[0] };
    } catch {
      return { currentStreak: 1, lastDate: new Date().toISOString().split('T')[0] };
    }
  });

  const [isFreeMode, setIsFreeMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FREE_MODE);
      return saved ? JSON.parse(saved) : false;
    } catch { return false; }
  });

  const [coins, setCoins] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COINS);
      return saved ? JSON.parse(saved) : 50;
    } catch { return 50; }
  });

  const [unlockedMascots, setUnlockedMascots] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.UNLOCKED_MASCOTS);
      return saved ? JSON.parse(saved) : ['elephant', 'tiger', 'cat', 'owl'];
    } catch {
      return ['elephant', 'tiger', 'cat', 'owl'];
    }
  });

  const [parentPin, setParentPinState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.PARENT_PIN) || '';
    } catch {
      return '';
    }
  });

  const [soundEnabled, setSoundEnabled] = useState(sounds.isSoundEnabled());

  // Save to LocalStorage
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.GRADE, currentGrade); }, [currentGrade]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.SUBJECT, currentSubject); }, [currentSubject]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G4_MATH, JSON.stringify(g4MathProgress)); }, [g4MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G4_TV, JSON.stringify(g4TvProgress)); }, [g4TvProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G5_MATH, JSON.stringify(g5MathProgress)); }, [g5MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G5_TV, JSON.stringify(g5TvProgress)); }, [g5TvProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G6_MATH, JSON.stringify(g6MathProgress)); }, [g6MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G6_LIT, JSON.stringify(g6LitProgress)); }, [g6LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_MATH, JSON.stringify(g7MathProgress)); }, [g7MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_LIT, JSON.stringify(g7LitProgress)); }, [g7LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history)); }, [history]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G4_MATH, JSON.stringify(g4MathWrong)); }, [g4MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G4_TV, JSON.stringify(g4TvWrong)); }, [g4TvWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G5_MATH, JSON.stringify(g5MathWrong)); }, [g5MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G5_TV, JSON.stringify(g5TvWrong)); }, [g5TvWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G6_MATH, JSON.stringify(g6MathWrong)); }, [g6MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G6_LIT, JSON.stringify(g6LitWrong)); }, [g6LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_MATH, JSON.stringify(g7MathWrong)); }, [g7MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_LIT, JSON.stringify(g7LitWrong)); }, [g7LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(unlockedBadges)); }, [unlockedBadges]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streakData)); }, [streakData]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.FREE_MODE, JSON.stringify(isFreeMode)); }, [isFreeMode]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COINS, JSON.stringify(coins)); }, [coins]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.UNLOCKED_MASCOTS, JSON.stringify(unlockedMascots)); }, [unlockedMascots]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PARENT_PIN, parentPin); }, [parentPin]);

  // Derived active state
  const isMath = currentSubject === 'math';
  const isGrade4 = currentGrade === '4';
  const isGrade5 = currentGrade === '5';
  const isGrade6 = currentGrade === '6';
  const isGrade7 = currentGrade === '7';
  const isSecondary = isGrade6 || isGrade7; // THCS uses "Ngữ Văn"

  // Dynamic progress selector
  const progress = isGrade4
    ? (isMath ? g4MathProgress : g4TvProgress)
    : isGrade5
    ? (isMath ? g5MathProgress : g5TvProgress)
    : isGrade6
    ? (isMath ? g6MathProgress : g6LitProgress)
    : (isMath ? g7MathProgress : g7LitProgress);

  const wrongQuestions = isGrade4
    ? (isMath ? g4MathWrong : g4TvWrong)
    : isGrade5
    ? (isMath ? g5MathWrong : g5TvWrong)
    : isGrade6
    ? (isMath ? g6MathWrong : g6LitWrong)
    : (isMath ? g7MathWrong : g7LitWrong);

  const currentBank = isGrade4
    ? (isMath ? QUESTION_BANK : QUESTION_BANK_TV)
    : isGrade5
    ? (isMath ? QUESTION_BANK_MATH5 : QUESTION_BANK_TV5)
    : isGrade6
    ? (isMath ? QUESTION_BANK_MATH6 : QUESTION_BANK_LIT6)
    : (isMath ? QUESTION_BANK_MATH7 : QUESTION_BANK_LIT7);

  const currentStages = isGrade4
    ? (isMath ? STAGES : STAGES_TV)
    : isGrade5
    ? (isMath ? STAGES_MATH5 : STAGES_TV5)
    : isGrade6
    ? (isMath ? STAGES_MATH6 : STAGES_LIT6)
    : (isMath ? STAGES_MATH7 : STAGES_LIT7);

  const currentCategories = isGrade4
    ? (isMath ? TOPIC_CATEGORIES : TOPIC_CATEGORIES_TV)
    : isGrade5
    ? (isMath ? TOPIC_CATEGORIES_MATH5 : TOPIC_CATEGORIES_TV5)
    : isGrade6
    ? (isMath ? TOPIC_CATEGORIES_MATH6 : TOPIC_CATEGORIES_LIT6)
    : (isMath ? TOPIC_CATEGORIES_MATH7 : TOPIC_CATEGORIES_LIT7);

  const currentMetadata = isGrade4
    ? (isMath ? WEEKS_METADATA : WEEKS_METADATA_TV)
    : isGrade5
    ? (isMath ? WEEKS_METADATA_MATH5 : WEEKS_METADATA_TV5)
    : isGrade6
    ? (isMath ? WEEKS_METADATA_MATH6 : WEEKS_METADATA_LIT6)
    : (isMath ? WEEKS_METADATA_MATH7 : WEEKS_METADATA_LIT7);

  const getQuestionsByWeekDynamic = isGrade4
    ? (isMath ? getQuestionsByWeek : getQuestionsByWeekTV)
    : isGrade5
    ? (isMath ? getQuestionsByWeekMath5 : getQuestionsByWeekTV5)
    : isGrade6
    ? (isMath ? getQuestionsByWeekMath6 : getQuestionsByWeekLit6)
    : (isMath ? getQuestionsByWeekMath7 : getQuestionsByWeekLit7);

  const getFilteredQuestionsDynamic = isGrade4
    ? (isMath ? getFilteredQuestions : getFilteredQuestionsTV)
    : isGrade5
    ? (isMath ? getFilteredQuestionsMath5 : getFilteredQuestionsTV5)
    : isGrade6
    ? (isMath ? getFilteredQuestionsMath6 : getFilteredQuestionsLit6)
    : (isMath ? getFilteredQuestionsMath7 : getFilteredQuestionsLit7);

  // Calculate stars
  const totalStars = Object.values(progress).reduce((sum, item) => sum + (item.stars || 0), 0);

  // Check streak
  const checkStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    if (streakData.lastDate === today) return;

    const last = new Date(streakData.lastDate);
    const curr = new Date(today);
    const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      setStreakData(prev => ({ currentStreak: prev.currentStreak + 1, lastDate: today }));
    } else if (diffDays > 1) {
      setStreakData({ currentStreak: 1, lastDate: today });
    }
  };

  // Check badges
  const checkBadges = (newHistory, currentStars) => {
    const newlyUnlocked = [];
    const fullProgress = {
      g4Math: g4MathProgress,
      g4Tv: g4TvProgress,
      g5Math: g5MathProgress,
      g5Tv: g5TvProgress,
      g6Math: g6MathProgress,
      g6Lit: g6LitProgress,
      g7Math: g7MathProgress,
      g7Lit: g7LitProgress
    };
    BADGE_DEFINITIONS.forEach(b => {
      if (!unlockedBadges.includes(b.id)) {
        if (b.req(newHistory, fullProgress, streakData, currentStars)) {
          newlyUnlocked.push(b.id);
        }
      }
    });
    if (newlyUnlocked.length > 0) {
      setUnlockedBadges(prev => [...prev, ...newlyUnlocked]);
      sounds.playUnlock();
    }
  };

  // Remove single wrong question when student mastered it
  const removeWrongQuestion = (questionId) => {
    const filterFn = prev => prev.filter(q => q.id !== questionId);
    if (isGrade4) {
      if (isMath) setG4MathWrong(filterFn);
      else setG4TvWrong(filterFn);
    } else if (isGrade5) {
      if (isMath) setG5MathWrong(filterFn);
      else setG5TvWrong(filterFn);
    } else if (isGrade6) {
      if (isMath) setG6MathWrong(filterFn);
      else setG6LitWrong(filterFn);
    } else if (isGrade7) {
      if (isMath) setG7MathWrong(filterFn);
      else setG7LitWrong(filterFn);
    }
    sounds.playClick();
  };

  // Buy Mascot in Shop using coins (Safe transaction)
  const buyShopMascot = (mascotId, price) => {
    if (unlockedMascots.includes(mascotId)) {
      // Already owned, just equip
      setProfile(prev => ({ ...prev, mascot: mascotId }));
      sounds.playClick();
      return { success: true, message: 'Đã chọn linh vật!' };
    }
    if (coins < price) {
      sounds.playWrong();
      return { success: false, message: `Bé cần thêm ${price - coins} Xu để mở khóa linh vật này!` };
    }

    // Deduct coins & unlock
    setCoins(prev => prev - price);
    setUnlockedMascots(prev => [...prev, mascotId]);
    setProfile(prev => ({ ...prev, mascot: mascotId }));
    sounds.playVictory();
    return { success: true, message: 'Chúc mừng bé đã mở khóa linh vật mới thành công!' };
  };

  // Parent PIN handlers
  const setParentPin = (newPin) => {
    setParentPinState(newPin.trim());
    sounds.playClick();
  };

  const verifyParentPin = (inputPin) => {
    if (!parentPin) return true; // No PIN set
    return String(inputPin).trim() === parentPin;
  };

  // Save Quiz Result
  const saveQuizResult = (resultData) => {
    checkStreak();

    const { week, score, correctCount, totalCount, details, type, timeSpent, grade, subject } = resultData;
    const activeGrade = grade || currentGrade;
    const activeSubj = subject || currentSubject;
    const isActMath = activeSubj === 'math';

    // Calculate stars
    let earnedStars = 0;
    if (score >= 90) earnedStars = 3;
    else if (score >= 70) earnedStars = 2;
    else if (score >= 50) earnedStars = 1;

    // Coins
    const earnedCoins = correctCount * 5 + (score === 100 ? 30 : 10);
    setCoins(prev => prev + earnedCoins);

    // Update wrong list
    const updateWrongList = (prevList) => {
      const updated = [...prevList];
      details.forEach(item => {
        if (!item.isCorrect) {
          if (!updated.some(w => w.id === item.question.id)) {
            updated.push(item.question);
          }
        } else {
          const idx = updated.findIndex(w => w.id === item.question.id);
          if (idx !== -1) updated.splice(idx, 1);
        }
      });
      return updated;
    };

    if (activeGrade === '4') {
      if (isActMath) setG4MathWrong(updateWrongList);
      else setG4TvWrong(updateWrongList);
    } else if (activeGrade === '5') {
      if (isActMath) setG5MathWrong(updateWrongList);
      else setG5TvWrong(updateWrongList);
    } else if (activeGrade === '6') {
      if (isActMath) setG6MathWrong(updateWrongList);
      else setG6LitWrong(updateWrongList);
    } else if (activeGrade === '7') {
      if (isActMath) setG7MathWrong(updateWrongList);
      else setG7LitWrong(updateWrongList);
    }

    // Update week progress
    const updateProgressObj = (prev) => {
      const currentWeekData = prev[week] || { bestScore: 0, stars: 0, attempts: 0 };
      const newBestScore = Math.max(currentWeekData.bestScore || 0, score);
      const newStars = Math.max(currentWeekData.stars || 0, earnedStars);

      const updated = {
        ...prev,
        [week]: {
          bestScore: newBestScore,
          stars: newStars,
          attempts: (currentWeekData.attempts || 0) + 1,
          lastCompletedAt: new Date().toISOString()
        }
      };

      if (score >= 75 && week < 35) {
        const nextWeek = Number(week) + 1;
        if (!updated[nextWeek]) {
          updated[nextWeek] = { bestScore: 0, stars: 0, attempts: 0, unlocked: true };
        } else {
          updated[nextWeek].unlocked = true;
        }
      }
      return updated;
    };

    if (week) {
      if (activeGrade === '4') {
        if (isActMath) setG4MathProgress(updateProgressObj);
        else setG4TvProgress(updateProgressObj);
      } else if (activeGrade === '5') {
        if (isActMath) setG5MathProgress(updateProgressObj);
        else setG5TvProgress(updateProgressObj);
      } else if (activeGrade === '6') {
        if (isActMath) setG6MathProgress(updateProgressObj);
        else setG6LitProgress(updateProgressObj);
      } else if (activeGrade === '7') {
        if (isActMath) setG7MathProgress(updateProgressObj);
        else setG7LitProgress(updateProgressObj);
      }
    }

    // Record History
    const historyItem = {
      id: Date.now(),
      date: new Date().toISOString(),
      grade: activeGrade,
      subject: activeSubj,
      week: week || null,
      type: type || 'practice',
      score,
      correctCount,
      totalCount,
      timeSpent: timeSpent || 0,
      earnedStars,
      earnedCoins,
      details: details.map(d => ({
        questionId: d.question.id,
        category: d.question.category,
        isCorrect: d.isCorrect,
        userAnswer: d.userAnswer,
        correctAnswer: d.question.correctIndex
      }))
    };

    const newHistory = [historyItem, ...history];
    setHistory(newHistory);

    // Check Badges
    checkBadges(newHistory, totalStars + earnedStars);

    // Clear active draft if any
    try {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_DRAFT);
    } catch { /* ignore */ }

    return { earnedStars, earnedCoins };
  };

  // Toggle Free Mode
  const toggleFreeMode = () => {
    setIsFreeMode(prev => !prev);
    sounds.playClick();
  };

  // Toggle Sound FX
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setSoundEnabled(next);
  };

  // Switch Grade (Lớp 4, Lớp 5, Lớp 6, Lớp 7)
  const switchGrade = (grade) => {
    const gStr = String(grade);
    if (['4', '5', '6', '7'].includes(gStr)) {
      setCurrentGrade(gStr);
      try {
        localStorage.setItem(STORAGE_KEYS.GRADE, gStr);
      } catch (e) {
        console.error(e);
      }
      sounds.playClick();
    }
  };

  // Switch Subject (Toán <-> Tiếng Việt / Ngữ Văn)
  const switchSubject = (subj) => {
    if (subj === 'math' || subj === 'vietnamese') {
      setCurrentSubject(subj);
      try {
        localStorage.setItem(STORAGE_KEYS.SUBJECT, subj);
      } catch (e) {
        console.error(e);
      }
      sounds.playClick();
    }
  };

  // Check if week is unlocked
  const isWeekUnlocked = (weekNum) => {
    if (isFreeMode) return true;
    if (Number(weekNum) === 1) return true;
    if (progress[weekNum]?.unlocked) return true;
    const prevWeek = Number(weekNum) - 1;
    return (progress[prevWeek]?.bestScore || 0) >= 75;
  };

  const updateProfile = (newProfile) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
    sounds.playClick();
  };

  const clearAllData = () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  return (
    <LearningContext.Provider value={{
      currentGrade,
      switchGrade,
      isGrade4,
      isGrade5,
      isGrade6,
      isGrade7,
      isSecondary,
      currentSubject,
      switchSubject,
      isMath,
      profile,
      updateProfile,
      progress,
      totalStars,
      coins,
      streakData,
      isFreeMode,
      toggleFreeMode,
      soundEnabled,
      toggleSound,
      history,
      wrongQuestions,
      removeWrongQuestion,
      unlockedBadges,
      unlockedMascots,
      buyShopMascot,
      parentPin,
      setParentPin,
      verifyParentPin,
      clearAllData,
      saveQuizResult,
      isWeekUnlocked,
      currentBank,
      currentStages,
      currentCategories,
      currentMetadata,
      getQuestionsByWeek: getQuestionsByWeekDynamic,
      getFilteredQuestions: getFilteredQuestionsDynamic
    }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
