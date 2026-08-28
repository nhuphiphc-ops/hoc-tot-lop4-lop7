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

// Grade 7 Core Data (Toán & Ngữ Văn)
import { STAGES_MATH7, TOPIC_CATEGORIES_MATH7, WEEKS_METADATA_MATH7, QUESTION_BANK_MATH7, getQuestionsByWeekMath7, getFilteredQuestionsMath7 } from '../data/grade7/math/questionBankMath7.js';
import { STAGES_LIT7, TOPIC_CATEGORIES_LIT7, WEEKS_METADATA_LIT7, QUESTION_BANK_LIT7, getQuestionsByWeekLit7, getFilteredQuestionsLit7 } from '../data/grade7/literature/questionBankLit7.js';

// Grade 7 Extended Subjects (Tiếng Anh, KHTN, Sử Địa, Tin Học, GDCD, Công Nghệ)
import { STAGES_ENG7, TOPIC_CATEGORIES_ENG7, WEEKS_METADATA_ENG7, QUESTION_BANK_ENG7, getQuestionsByWeekENG7, getFilteredQuestionsENG7 } from '../data/grade7/english/questionBankEng7.js';
import { STAGES_SCI7, TOPIC_CATEGORIES_SCI7, WEEKS_METADATA_SCI7, QUESTION_BANK_SCI7, getQuestionsByWeekSCI7, getFilteredQuestionsSCI7 } from '../data/grade7/science/questionBankScience7.js';
import { STAGES_HISGEO7, TOPIC_CATEGORIES_HISGEO7, WEEKS_METADATA_HISGEO7, QUESTION_BANK_HISGEO7, getQuestionsByWeekHISGEO7, getFilteredQuestionsHISGEO7 } from '../data/grade7/history_geo/questionBankHistoryGeo7.js';
import { STAGES_INFO7, TOPIC_CATEGORIES_INFO7, WEEKS_METADATA_INFO7, QUESTION_BANK_INFO7, getQuestionsByWeekINFO7, getFilteredQuestionsINFO7 } from '../data/grade7/informatics/questionBankInformatics7.js';
import { STAGES_CIV7, TOPIC_CATEGORIES_CIV7, WEEKS_METADATA_CIV7, QUESTION_BANK_CIV7, getQuestionsByWeekCIV7, getFilteredQuestionsCIV7 } from '../data/grade7/civics/questionBankCivics7.js';
import { STAGES_TECH7, TOPIC_CATEGORIES_TECH7, WEEKS_METADATA_TECH7, QUESTION_BANK_TECH7, getQuestionsByWeekTECH7, getFilteredQuestionsTECH7 } from '../data/grade7/technology/questionBankTech7.js';

// Grade 12 (THPT 2026) Data - 11 Subjects for Nguyen Nhat Minh
import { STAGES_MATH12, TOPIC_CATEGORIES_MATH12, WEEKS_METADATA_MATH12, QUESTION_BANK_MATH12, getQuestionsByWeekMath12, getFilteredQuestionsMath12 } from '../data/grade12/math/questionBankMath12.js';
import { STAGES_LIT12, TOPIC_CATEGORIES_LIT12, WEEKS_METADATA_LIT12, QUESTION_BANK_LIT12, getQuestionsByWeekLit12, getFilteredQuestionsLit12 } from '../data/grade12/literature/questionBankLit12.js';
import { STAGES_ENG12, TOPIC_CATEGORIES_ENG12, WEEKS_METADATA_ENG12, QUESTION_BANK_ENG12, getQuestionsByWeekEng12, getFilteredQuestionsEng12 } from '../data/grade12/english/questionBankEng12.js';
import { STAGES_PHYSICS12, TOPIC_CATEGORIES_PHYSICS12, WEEKS_METADATA_PHYSICS12, QUESTION_BANK_PHYSICS12, getQuestionsByWeekPhysics12, getFilteredQuestionsPhysics12 } from '../data/grade12/physics/questionBankPhysics12.js';
import { STAGES_CHEM12, TOPIC_CATEGORIES_CHEM12, WEEKS_METADATA_CHEM12, QUESTION_BANK_CHEM12, getQuestionsByWeekChem12, getFilteredQuestionsChem12 } from '../data/grade12/chemistry/questionBankChem12.js';
import { STAGES_BIO12, TOPIC_CATEGORIES_BIO12, WEEKS_METADATA_BIO12, QUESTION_BANK_BIO12, getQuestionsByWeekBio12, getFilteredQuestionsBio12 } from '../data/grade12/biology/questionBankBio12.js';
import { STAGES_HIST12, TOPIC_CATEGORIES_HIST12, WEEKS_METADATA_HIST12, QUESTION_BANK_HIST12, getQuestionsByWeekHist12, getFilteredQuestionsHist12 } from '../data/grade12/history/questionBankHist12.js';
import { STAGES_GEO12, TOPIC_CATEGORIES_GEO12, WEEKS_METADATA_GEO12, QUESTION_BANK_GEO12, getQuestionsByWeekGeo12, getFilteredQuestionsGeo12 } from '../data/grade12/geography/questionBankGeo12.js';
import { STAGES_ECONLAW12, TOPIC_CATEGORIES_ECONLAW12, WEEKS_METADATA_ECONLAW12, QUESTION_BANK_ECONLAW12, getQuestionsByWeekEconLaw12, getFilteredQuestionsEconLaw12 } from '../data/grade12/econ_law/questionBankEconLaw12.js';
import { STAGES_CS12, TOPIC_CATEGORIES_CS12, WEEKS_METADATA_CS12, QUESTION_BANK_CS12, getQuestionsByWeekCS12, getFilteredQuestionsCS12 } from '../data/grade12/informatics/questionBankCS12.js';
import { STAGES_TECH12, TOPIC_CATEGORIES_TECH12, WEEKS_METADATA_TECH12, QUESTION_BANK_TECH12, getQuestionsByWeekTech12, getFilteredQuestionsTech12 } from '../data/grade12/technology/questionBankTech12.js';

const LearningContext = createContext();

export const GRADE_7_SUBJECTS = [
  { id: 'math', label: 'Toán 7', icon: 'Calculator', color: 'from-blue-500 to-indigo-600', badgeColor: 'bg-blue-100 text-blue-800' },
  { id: 'vietnamese', label: 'Ngữ Văn 7', icon: 'BookOpen', color: 'from-rose-500 to-purple-600', badgeColor: 'bg-rose-100 text-rose-800' },
  { id: 'english', label: 'Tiếng Anh 7', icon: 'Globe', color: 'from-emerald-500 to-teal-600', badgeColor: 'bg-emerald-100 text-emerald-800' },
  { id: 'science', label: 'KHTN 7', icon: 'Atom', color: 'from-purple-500 to-indigo-700', badgeColor: 'bg-purple-100 text-purple-800' },
  { id: 'history_geo', label: 'Lịch Sử & Địa Lí 7', icon: 'Compass', color: 'from-amber-500 to-orange-600', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'informatics', label: 'Tin Học 7', icon: 'Laptop', color: 'from-cyan-500 to-blue-600', badgeColor: 'bg-cyan-100 text-cyan-800' },
  { id: 'civics', label: 'GDCD 7', icon: 'HeartHandshake', color: 'from-pink-500 to-rose-600', badgeColor: 'bg-pink-100 text-pink-800' },
  { id: 'technology', label: 'Công Nghệ 7', icon: 'Wrench', color: 'from-green-500 to-emerald-600', badgeColor: 'bg-green-100 text-green-800' },
];

export const GRADE_12_SUBJECTS = [
  { id: 'math', label: 'Toán 12', icon: 'Calculator', color: 'from-blue-600 to-indigo-700', badgeColor: 'bg-blue-100 text-blue-800' },
  { id: 'vietnamese', label: 'Ngữ Văn 12', icon: 'BookOpen', color: 'from-rose-600 to-purple-700', badgeColor: 'bg-rose-100 text-rose-800' },
  { id: 'english', label: 'Tiếng Anh 12', icon: 'Globe', color: 'from-emerald-600 to-teal-700', badgeColor: 'bg-emerald-100 text-emerald-800' },
  { id: 'physics', label: 'Vật Lí 12', icon: 'Zap', color: 'from-sky-600 to-blue-700', badgeColor: 'bg-sky-100 text-sky-800' },
  { id: 'chemistry', label: 'Hóa Học 12', icon: 'FlaskConical', color: 'from-purple-600 to-indigo-800', badgeColor: 'bg-purple-100 text-purple-800' },
  { id: 'biology', label: 'Sinh Học 12', icon: 'Dna', color: 'from-green-600 to-emerald-700', badgeColor: 'bg-green-100 text-green-800' },
  { id: 'history', label: 'Lịch Sử 12', icon: 'Compass', color: 'from-amber-600 to-orange-700', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'geography', label: 'Địa Lí 12', icon: 'Map', color: 'from-teal-600 to-cyan-700', badgeColor: 'bg-teal-100 text-teal-800' },
  { id: 'econ_law', label: 'GDKT & PL 12', icon: 'Scale', color: 'from-pink-600 to-rose-700', badgeColor: 'bg-pink-100 text-pink-800' },
  { id: 'informatics', label: 'Tin Học 12', icon: 'Laptop', color: 'from-cyan-600 to-blue-700', badgeColor: 'bg-cyan-100 text-cyan-800' },
  { id: 'technology', label: 'Công Nghệ 12', icon: 'Cpu', color: 'from-lime-600 to-emerald-700', badgeColor: 'bg-lime-100 text-lime-800' },
];

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
  PROFILE_NGUYEN: 'toan_user_profile',
  PROFILE_MINH: 'g12_minh_user_profile',
  PROGRESS_G4_MATH: 'toan4_week_progress',
  PROGRESS_G4_TV: 'toan4_week_progress_tv',
  PROGRESS_G5_MATH: 'toan5_week_progress_math',
  PROGRESS_G5_TV: 'toan5_week_progress_tv',
  PROGRESS_G6_MATH: 'toan6_week_progress_math',
  PROGRESS_G6_LIT: 'toan6_week_progress_lit',
  PROGRESS_G7_MATH: 'toan7_week_progress_math',
  PROGRESS_G7_LIT: 'toan7_week_progress_lit',
  PROGRESS_G7_ENG: 'toan7_week_progress_eng',
  PROGRESS_G7_SCI: 'toan7_week_progress_sci',
  PROGRESS_G7_HISGEO: 'toan7_week_progress_hisgeo',
  PROGRESS_G7_INFO: 'toan7_week_progress_info',
  PROGRESS_G7_CIV: 'toan7_week_progress_civ',
  PROGRESS_G7_TECH: 'toan7_week_progress_tech',
  // Grade 12 Progress
  PROGRESS_G12_MATH: 'g12_minh_week_progress_math',
  PROGRESS_G12_LIT: 'g12_minh_week_progress_lit',
  PROGRESS_G12_ENG: 'g12_minh_week_progress_eng',
  PROGRESS_G12_PHY: 'g12_minh_week_progress_phy',
  PROGRESS_G12_CHEM: 'g12_minh_week_progress_chem',
  PROGRESS_G12_BIO: 'g12_minh_week_progress_bio',
  PROGRESS_G12_HIST: 'g12_minh_week_progress_hist',
  PROGRESS_G12_GEO: 'g12_minh_week_progress_geo',
  PROGRESS_G12_ECONLAW: 'g12_minh_week_progress_econlaw',
  PROGRESS_G12_CS: 'g12_minh_week_progress_cs',
  PROGRESS_G12_TECH: 'g12_minh_week_progress_tech',
  HISTORY: 'toan_quiz_history',
  WRONG_G4_MATH: 'toan4_wrong_questions',
  WRONG_G4_TV: 'toan4_wrong_questions_tv',
  WRONG_G5_MATH: 'toan5_wrong_questions_math',
  WRONG_G5_TV: 'toan5_wrong_questions_tv',
  WRONG_G6_MATH: 'toan6_wrong_questions_math',
  WRONG_G6_LIT: 'toan6_wrong_questions_lit',
  WRONG_G7_MATH: 'toan7_wrong_questions_math',
  WRONG_G7_LIT: 'toan7_wrong_questions_lit',
  WRONG_G7_ENG: 'toan7_wrong_questions_eng',
  WRONG_G7_SCI: 'toan7_wrong_questions_sci',
  WRONG_G7_HISGEO: 'toan7_wrong_questions_hisgeo',
  WRONG_G7_INFO: 'toan7_wrong_questions_info',
  WRONG_G7_CIV: 'toan7_wrong_questions_civ',
  WRONG_G7_TECH: 'toan7_wrong_questions_tech',
  // Grade 12 Wrongs
  WRONG_G12_MATH: 'g12_minh_wrong_math',
  WRONG_G12_LIT: 'g12_minh_wrong_lit',
  WRONG_G12_ENG: 'g12_minh_wrong_eng',
  WRONG_G12_PHY: 'g12_minh_wrong_phy',
  WRONG_G12_CHEM: 'g12_minh_wrong_chem',
  WRONG_G12_BIO: 'g12_minh_wrong_bio',
  WRONG_G12_HIST: 'g12_minh_wrong_hist',
  WRONG_G12_GEO: 'g12_minh_wrong_geo',
  WRONG_G12_ECONLAW: 'g12_minh_wrong_econlaw',
  WRONG_G12_CS: 'g12_minh_wrong_cs',
  WRONG_G12_TECH: 'g12_minh_wrong_tech',
  BADGES: 'toan_badges',
  STREAK: 'toan_streak_data',
  FREE_MODE: 'toan_free_mode',
  COINS: 'toan_coins',
  UNLOCKED_MASCOTS: 'toan_unlocked_mascots',
  PARENT_PIN: 'toan_parent_pin',
  ACTIVE_DRAFT: 'toan_active_quiz_draft'
};

const DEFAULT_PROFILE_NGUYEN = {
  name: 'Nguyễn Công Nguyên',
  school: 'Trường PTCS - Phú La',
  mascot: 'elephant',
  avatarColor: '#FFD166',
};

const DEFAULT_PROFILE_MINH = {
  name: 'Nguyễn Nhật Minh',
  school: 'Trường PTTH Ngô Gia Tự',
  mascot: 'dragon',
  avatarColor: '#8B5CF6',
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
  { id: 'g12_master', name: 'Thủ Khoa Tốt Nghiệp 12', desc: 'Hoàn thành trên 15 tuần Lớp 12', icon: 'GraduationCap', req: (h, p) => Object.keys(p.g12Math || {}).filter(w => p.g12Math[w]?.bestScore >= 70).length >= 15 },
  { id: 'streak_3', name: 'Chăm Chỉ Chuyên Cần', desc: 'Học liên tục trong 3 ngày', icon: 'Flame', req: (h, p, s) => (s?.currentStreak || 1) >= 3 },
  { id: 'star_hunter_30', name: 'Thợ Săn Ngôi Sao', desc: 'Tích lũy được trên 30 ngôi sao', icon: 'Star', req: (h, p, s, stars) => stars >= 30 }
];

export const LearningProvider = ({ children }) => {
  // Current active Grade: '4' | '5' | '6' | '7' | '12'
  const [currentGrade, setCurrentGrade] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GRADE);
      return ['4', '5', '6', '7', '12'].includes(saved) ? saved : '4';
    } catch {
      return '4';
    }
  });

  // Current active Subject
  const [currentSubject, setCurrentSubject] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SUBJECT);
      return saved || 'math';
    } catch {
      return 'math';
    }
  });

  // Profile for Nguyen Cong Nguyen (Grades 4-7)
  const [profileNguyen, setProfileNguyen] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE_NGUYEN);
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
      return DEFAULT_PROFILE_NGUYEN;
    } catch {
      return DEFAULT_PROFILE_NGUYEN;
    }
  });

  // Profile for Nguyen Nhat Minh (Grade 12)
  const [profileMinh, setProfileMinh] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE_MINH);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.name) parsed.name = 'Nguyễn Nhật Minh';
        if (!parsed.school) parsed.school = 'Trường PTTH Ngô Gia Tự';
        return parsed;
      }
      return DEFAULT_PROFILE_MINH;
    } catch {
      return DEFAULT_PROFILE_MINH;
    }
  });

  const isGrade12 = currentGrade === '12';
  const profile = isGrade12 ? profileMinh : profileNguyen;

  // Progress Stores - Grade 4
  const [g4MathProgress, setG4MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G4_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g4TvProgress, setG4TvProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G4_TV);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 5
  const [g5MathProgress, setG5MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G5_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g5TvProgress, setG5TvProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G5_TV);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 6
  const [g6MathProgress, setG6MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G6_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g6LitProgress, setG6LitProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G6_LIT);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 7
  const [g7MathProgress, setG7MathProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_MATH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7LitProgress, setG7LitProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_LIT);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7EngProgress, setG7EngProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_ENG);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7SciProgress, setG7SciProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_SCI);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7HisGeoProgress, setG7HisGeoProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_HISGEO);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7InfoProgress, setG7InfoProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_INFO);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7CivProgress, setG7CivProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_CIV);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  const [g7TechProgress, setG7TechProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G7_TECH);
      return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } };
    } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 12 (11 Subjects)
  const [g12MathProgress, setG12MathProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_MATH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12LitProgress, setG12LitProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_LIT); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12EngProgress, setG12EngProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_ENG); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12PhyProgress, setG12PhyProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_PHY); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12ChemProgress, setG12ChemProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_CHEM); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12BioProgress, setG12BioProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_BIO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12HistProgress, setG12HistProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_HIST); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12GeoProgress, setG12GeoProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_GEO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12EconLawProgress, setG12EconLawProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_ECONLAW); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12CSProgress, setG12CSProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_CS); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g12TechProgress, setG12TechProgress] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G12_TECH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Quiz History
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Wrong Questions Stores - Grades 4-7
  const [g4MathWrong, setG4MathWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G4_MATH); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g4TvWrong, setG4TvWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G4_TV); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g5MathWrong, setG5MathWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G5_MATH); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g5TvWrong, setG5TvWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G5_TV); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g6MathWrong, setG6MathWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G6_MATH); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g6LitWrong, setG6LitWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G6_LIT); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7MathWrong, setG7MathWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_MATH); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7LitWrong, setG7LitWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_LIT); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7EngWrong, setG7EngWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_ENG); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7SciWrong, setG7SciWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_SCI); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7HisGeoWrong, setG7HisGeoWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_HISGEO); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7InfoWrong, setG7InfoWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_INFO); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7CivWrong, setG7CivWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_CIV); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g7TechWrong, setG7TechWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G7_TECH); return s ? JSON.parse(s) : []; } catch { return []; }
  });

  // Wrong Questions Stores - Grade 12
  const [g12MathWrong, setG12MathWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_MATH); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12LitWrong, setG12LitWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_LIT); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12EngWrong, setG12EngWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_ENG); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12PhyWrong, setG12PhyWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_PHY); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12ChemWrong, setG12ChemWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_CHEM); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12BioWrong, setG12BioWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_BIO); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12HistWrong, setG12HistWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_HIST); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12GeoWrong, setG12GeoWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_GEO); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12EconLawWrong, setG12EconLawWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_ECONLAW); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12CSWrong, setG12CSWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_CS); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [g12TechWrong, setG12TechWrong] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G12_TECH); return s ? JSON.parse(s) : []; } catch { return []; }
  });

  // Gamification states
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
      return saved !== null ? JSON.parse(saved) : true;
    } catch { return true; }
  });

  const [coins, setCoins] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COINS);
      return saved !== null ? Number(saved) : 70;
    } catch { return 70; }
  });

  const [unlockedMascots, setUnlockedMascots] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.UNLOCKED_MASCOTS);
      return saved ? JSON.parse(saved) : ['elephant', 'tiger', 'cat', 'owl', 'dragon'];
    } catch { return ['elephant', 'tiger', 'cat', 'owl', 'dragon']; }
  });

  const [soundEnabled, setSoundEnabledState] = useState(() => sounds.isSoundEnabled());
  const [parentPin, setParentPinState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.PARENT_PIN) || '1234';
    } catch { return '1234'; }
  });

  // Sync to LocalStorage
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.GRADE, currentGrade); }, [currentGrade]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.SUBJECT, currentSubject); }, [currentSubject]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROFILE_NGUYEN, JSON.stringify(profileNguyen)); }, [profileNguyen]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROFILE_MINH, JSON.stringify(profileMinh)); }, [profileMinh]);

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G4_MATH, JSON.stringify(g4MathProgress)); }, [g4MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G4_TV, JSON.stringify(g4TvProgress)); }, [g4TvProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G5_MATH, JSON.stringify(g5MathProgress)); }, [g5MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G5_TV, JSON.stringify(g5TvProgress)); }, [g5TvProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G6_MATH, JSON.stringify(g6MathProgress)); }, [g6MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G6_LIT, JSON.stringify(g6LitProgress)); }, [g6LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_MATH, JSON.stringify(g7MathProgress)); }, [g7MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_LIT, JSON.stringify(g7LitProgress)); }, [g7LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_ENG, JSON.stringify(g7EngProgress)); }, [g7EngProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_SCI, JSON.stringify(g7SciProgress)); }, [g7SciProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_HISGEO, JSON.stringify(g7HisGeoProgress)); }, [g7HisGeoProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_INFO, JSON.stringify(g7InfoProgress)); }, [g7InfoProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_CIV, JSON.stringify(g7CivProgress)); }, [g7CivProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G7_TECH, JSON.stringify(g7TechProgress)); }, [g7TechProgress]);

  // Grade 12 Sync
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_MATH, JSON.stringify(g12MathProgress)); }, [g12MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_LIT, JSON.stringify(g12LitProgress)); }, [g12LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_ENG, JSON.stringify(g12EngProgress)); }, [g12EngProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_PHY, JSON.stringify(g12PhyProgress)); }, [g12PhyProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_CHEM, JSON.stringify(g12ChemProgress)); }, [g12ChemProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_BIO, JSON.stringify(g12BioProgress)); }, [g12BioProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_HIST, JSON.stringify(g12HistProgress)); }, [g12HistProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_GEO, JSON.stringify(g12GeoProgress)); }, [g12GeoProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_ECONLAW, JSON.stringify(g12EconLawProgress)); }, [g12EconLawProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_CS, JSON.stringify(g12CSProgress)); }, [g12CSProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G12_TECH, JSON.stringify(g12TechProgress)); }, [g12TechProgress]);

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history)); }, [history]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(unlockedBadges)); }, [unlockedBadges]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streakData)); }, [streakData]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.FREE_MODE, JSON.stringify(isFreeMode)); }, [isFreeMode]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COINS, String(coins)); }, [coins]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.UNLOCKED_MASCOTS, JSON.stringify(unlockedMascots)); }, [unlockedMascots]);

  // Wrong Questions Sync
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G4_MATH, JSON.stringify(g4MathWrong)); }, [g4MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G4_TV, JSON.stringify(g4TvWrong)); }, [g4TvWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G5_MATH, JSON.stringify(g5MathWrong)); }, [g5MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G5_TV, JSON.stringify(g5TvWrong)); }, [g5TvWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G6_MATH, JSON.stringify(g6MathWrong)); }, [g6MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G6_LIT, JSON.stringify(g6LitWrong)); }, [g6LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_MATH, JSON.stringify(g7MathWrong)); }, [g7MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_LIT, JSON.stringify(g7LitWrong)); }, [g7LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_ENG, JSON.stringify(g7EngWrong)); }, [g7EngWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_SCI, JSON.stringify(g7SciWrong)); }, [g7SciWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_HISGEO, JSON.stringify(g7HisGeoWrong)); }, [g7HisGeoWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_INFO, JSON.stringify(g7InfoWrong)); }, [g7InfoWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_CIV, JSON.stringify(g7CivWrong)); }, [g7CivWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G7_TECH, JSON.stringify(g7TechWrong)); }, [g7TechWrong]);

  // Wrong Questions Sync - Grade 12
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_MATH, JSON.stringify(g12MathWrong)); }, [g12MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_LIT, JSON.stringify(g12LitWrong)); }, [g12LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_ENG, JSON.stringify(g12EngWrong)); }, [g12EngWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_PHY, JSON.stringify(g12PhyWrong)); }, [g12PhyWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_CHEM, JSON.stringify(g12ChemWrong)); }, [g12ChemWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_BIO, JSON.stringify(g12BioWrong)); }, [g12BioWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_HIST, JSON.stringify(g12HistWrong)); }, [g12HistWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_GEO, JSON.stringify(g12GeoWrong)); }, [g12GeoWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_ECONLAW, JSON.stringify(g12EconLawWrong)); }, [g12EconLawWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_CS, JSON.stringify(g12CSWrong)); }, [g12CSWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G12_TECH, JSON.stringify(g12TechWrong)); }, [g12TechWrong]);

  // Actions
  const toggleSound = () => {
    const nextVal = sounds.toggleSound();
    setSoundEnabledState(nextVal);
  };

  const toggleFreeMode = () => {
    sounds.playClick();
    setIsFreeMode(prev => !prev);
  };

  const switchGrade = (gradeId) => {
    sounds.playClick();
    setCurrentGrade(gradeId);
    // Reset subject to math if not supported
    if (['4', '5', '6'].includes(gradeId)) {
      if (!['math', 'vietnamese'].includes(currentSubject)) {
        setCurrentSubject('math');
      }
    }
  };

  const switchSubject = (subjId) => {
    sounds.playClick();
    setCurrentSubject(subjId);
  };

  const updateProfile = (newProfile) => {
    if (isGrade12) {
      setProfileMinh(prev => ({ ...prev, ...newProfile }));
    } else {
      setProfileNguyen(prev => ({ ...prev, ...newProfile }));
    }
  };

  // Helper getters
  const isGrade4 = currentGrade === '4';
  const isGrade5 = currentGrade === '5';
  const isGrade6 = currentGrade === '6';
  const isGrade7 = currentGrade === '7';
  const isSecondary = isGrade6 || isGrade7;
  const isHighSchool = isGrade12;
  const isMath = currentSubject === 'math';

  // Active Progress Map
  const getActiveProgress = () => {
    if (isGrade4) return isMath ? g4MathProgress : g4TvProgress;
    if (isGrade5) return isMath ? g5MathProgress : g5TvProgress;
    if (isGrade6) return isMath ? g6MathProgress : g6LitProgress;
    if (isGrade7) {
      if (currentSubject === 'math') return g7MathProgress;
      if (currentSubject === 'vietnamese') return g7LitProgress;
      if (currentSubject === 'english') return g7EngProgress;
      if (currentSubject === 'science') return g7SciProgress;
      if (currentSubject === 'history_geo') return g7HisGeoProgress;
      if (currentSubject === 'informatics') return g7InfoProgress;
      if (currentSubject === 'civics') return g7CivProgress;
      if (currentSubject === 'technology') return g7TechProgress;
    }
    if (isGrade12) {
      if (currentSubject === 'math') return g12MathProgress;
      if (currentSubject === 'vietnamese') return g12LitProgress;
      if (currentSubject === 'english') return g12EngProgress;
      if (currentSubject === 'physics') return g12PhyProgress;
      if (currentSubject === 'chemistry') return g12ChemProgress;
      if (currentSubject === 'biology') return g12BioProgress;
      if (currentSubject === 'history') return g12HistProgress;
      if (currentSubject === 'geography') return g12GeoProgress;
      if (currentSubject === 'econ_law') return g12EconLawProgress;
      if (currentSubject === 'informatics') return g12CSProgress;
      if (currentSubject === 'technology') return g12TechProgress;
    }
    return g4MathProgress;
  };
  const progress = getActiveProgress();

  // Active Wrong List
  const getActiveWrongs = () => {
    if (isGrade4) return isMath ? g4MathWrong : g4TvWrong;
    if (isGrade5) return isMath ? g5MathWrong : g5TvWrong;
    if (isGrade6) return isMath ? g6MathWrong : g6LitWrong;
    if (isGrade7) {
      if (currentSubject === 'math') return g7MathWrong;
      if (currentSubject === 'vietnamese') return g7LitWrong;
      if (currentSubject === 'english') return g7EngWrong;
      if (currentSubject === 'science') return g7SciWrong;
      if (currentSubject === 'history_geo') return g7HisGeoWrong;
      if (currentSubject === 'informatics') return g7InfoWrong;
      if (currentSubject === 'civics') return g7CivWrong;
      if (currentSubject === 'technology') return g7TechWrong;
    }
    if (isGrade12) {
      if (currentSubject === 'math') return g12MathWrong;
      if (currentSubject === 'vietnamese') return g12LitWrong;
      if (currentSubject === 'english') return g12EngWrong;
      if (currentSubject === 'physics') return g12PhyWrong;
      if (currentSubject === 'chemistry') return g12ChemWrong;
      if (currentSubject === 'biology') return g12BioWrong;
      if (currentSubject === 'history') return g12HistWrong;
      if (currentSubject === 'geography') return g12GeoWrong;
      if (currentSubject === 'econ_law') return g12EconLawWrong;
      if (currentSubject === 'informatics') return g12CSWrong;
      if (currentSubject === 'technology') return g12TechWrong;
    }
    return g4MathWrong;
  };
  const wrongQuestions = getActiveWrongs();

  // Active Stages
  const getActiveStages = () => {
    if (isGrade4) return isMath ? STAGES : STAGES_TV;
    if (isGrade5) return isMath ? STAGES_MATH5 : STAGES_TV5;
    if (isGrade6) return isMath ? STAGES_MATH6 : STAGES_LIT6;
    if (isGrade7) {
      if (currentSubject === 'math') return STAGES_MATH7;
      if (currentSubject === 'vietnamese') return STAGES_LIT7;
      if (currentSubject === 'english') return STAGES_ENG7;
      if (currentSubject === 'science') return STAGES_SCI7;
      if (currentSubject === 'history_geo') return STAGES_HISGEO7;
      if (currentSubject === 'informatics') return STAGES_INFO7;
      if (currentSubject === 'civics') return STAGES_CIV7;
      if (currentSubject === 'technology') return STAGES_TECH7;
    }
    if (isGrade12) {
      if (currentSubject === 'math') return STAGES_MATH12;
      if (currentSubject === 'vietnamese') return STAGES_LIT12;
      if (currentSubject === 'english') return STAGES_ENG12;
      if (currentSubject === 'physics') return STAGES_PHYSICS12;
      if (currentSubject === 'chemistry') return STAGES_CHEM12;
      if (currentSubject === 'biology') return STAGES_BIO12;
      if (currentSubject === 'history') return STAGES_HIST12;
      if (currentSubject === 'geography') return STAGES_GEO12;
      if (currentSubject === 'econ_law') return STAGES_ECONLAW12;
      if (currentSubject === 'informatics') return STAGES_CS12;
      if (currentSubject === 'technology') return STAGES_TECH12;
    }
    return STAGES;
  };
  const stages = getActiveStages();

  // Active Topic Categories
  const getActiveCategories = () => {
    if (isGrade4) return isMath ? TOPIC_CATEGORIES : TOPIC_CATEGORIES_TV;
    if (isGrade5) return isMath ? TOPIC_CATEGORIES_MATH5 : TOPIC_CATEGORIES_TV5;
    if (isGrade6) return isMath ? TOPIC_CATEGORIES_MATH6 : TOPIC_CATEGORIES_LIT6;
    if (isGrade7) {
      if (currentSubject === 'math') return TOPIC_CATEGORIES_MATH7;
      if (currentSubject === 'vietnamese') return TOPIC_CATEGORIES_LIT7;
      if (currentSubject === 'english') return TOPIC_CATEGORIES_ENG7;
      if (currentSubject === 'science') return TOPIC_CATEGORIES_SCI7;
      if (currentSubject === 'history_geo') return TOPIC_CATEGORIES_HISGEO7;
      if (currentSubject === 'informatics') return TOPIC_CATEGORIES_INFO7;
      if (currentSubject === 'civics') return TOPIC_CATEGORIES_CIV7;
      if (currentSubject === 'technology') return TOPIC_CATEGORIES_TECH7;
    }
    if (isGrade12) {
      if (currentSubject === 'math') return TOPIC_CATEGORIES_MATH12;
      if (currentSubject === 'vietnamese') return TOPIC_CATEGORIES_LIT12;
      if (currentSubject === 'english') return TOPIC_CATEGORIES_ENG12;
      if (currentSubject === 'physics') return TOPIC_CATEGORIES_PHYSICS12;
      if (currentSubject === 'chemistry') return TOPIC_CATEGORIES_CHEM12;
      if (currentSubject === 'biology') return TOPIC_CATEGORIES_BIO12;
      if (currentSubject === 'history') return TOPIC_CATEGORIES_HIST12;
      if (currentSubject === 'geography') return TOPIC_CATEGORIES_GEO12;
      if (currentSubject === 'econ_law') return TOPIC_CATEGORIES_ECONLAW12;
      if (currentSubject === 'informatics') return TOPIC_CATEGORIES_CS12;
      if (currentSubject === 'technology') return TOPIC_CATEGORIES_TECH12;
    }
    return TOPIC_CATEGORIES;
  };
  const categories = getActiveCategories();

  // Active Weeks Metadata
  const getActiveWeeksMetadata = () => {
    if (isGrade4) return isMath ? WEEKS_METADATA : WEEKS_METADATA_TV;
    if (isGrade5) return isMath ? WEEKS_METADATA_MATH5 : WEEKS_METADATA_TV5;
    if (isGrade6) return isMath ? WEEKS_METADATA_MATH6 : WEEKS_METADATA_LIT6;
    if (isGrade7) {
      if (currentSubject === 'math') return WEEKS_METADATA_MATH7;
      if (currentSubject === 'vietnamese') return WEEKS_METADATA_LIT7;
      if (currentSubject === 'english') return WEEKS_METADATA_ENG7;
      if (currentSubject === 'science') return WEEKS_METADATA_SCI7;
      if (currentSubject === 'history_geo') return WEEKS_METADATA_HISGEO7;
      if (currentSubject === 'informatics') return WEEKS_METADATA_INFO7;
      if (currentSubject === 'civics') return WEEKS_METADATA_CIV7;
      if (currentSubject === 'technology') return WEEKS_METADATA_TECH7;
    }
    if (isGrade12) {
      if (currentSubject === 'math') return WEEKS_METADATA_MATH12;
      if (currentSubject === 'vietnamese') return WEEKS_METADATA_LIT12;
      if (currentSubject === 'english') return WEEKS_METADATA_ENG12;
      if (currentSubject === 'physics') return WEEKS_METADATA_PHYSICS12;
      if (currentSubject === 'chemistry') return WEEKS_METADATA_CHEM12;
      if (currentSubject === 'biology') return WEEKS_METADATA_BIO12;
      if (currentSubject === 'history') return WEEKS_METADATA_HIST12;
      if (currentSubject === 'geography') return WEEKS_METADATA_GEO12;
      if (currentSubject === 'econ_law') return WEEKS_METADATA_ECONLAW12;
      if (currentSubject === 'informatics') return WEEKS_METADATA_CS12;
      if (currentSubject === 'technology') return WEEKS_METADATA_TECH12;
    }
    return WEEKS_METADATA;
  };
  const weeksMetadata = getActiveWeeksMetadata();

  // Active Questions by Week Selector
  const getActiveQuestionsByWeek = (weekNum) => {
    if (isGrade4) return isMath ? getQuestionsByWeek(weekNum) : getQuestionsByWeekTV(weekNum);
    if (isGrade5) return isMath ? getQuestionsByWeekMath5(weekNum) : getQuestionsByWeekTV5(weekNum);
    if (isGrade6) return isMath ? getQuestionsByWeekMath6(weekNum) : getQuestionsByWeekLit6(weekNum);
    if (isGrade7) {
      if (currentSubject === 'math') return getQuestionsByWeekMath7(weekNum);
      if (currentSubject === 'vietnamese') return getQuestionsByWeekLit7(weekNum);
      if (currentSubject === 'english') return getQuestionsByWeekENG7(weekNum);
      if (currentSubject === 'science') return getQuestionsByWeekSCI7(weekNum);
      if (currentSubject === 'history_geo') return getQuestionsByWeekHISGEO7(weekNum);
      if (currentSubject === 'informatics') return getQuestionsByWeekINFO7(weekNum);
      if (currentSubject === 'civics') return getQuestionsByWeekCIV7(weekNum);
      if (currentSubject === 'technology') return getQuestionsByWeekTECH7(weekNum);
    }
    if (isGrade12) {
      if (currentSubject === 'math') return getQuestionsByWeekMath12(weekNum);
      if (currentSubject === 'vietnamese') return getQuestionsByWeekLit12(weekNum);
      if (currentSubject === 'english') return getQuestionsByWeekEng12(weekNum);
      if (currentSubject === 'physics') return getQuestionsByWeekPhysics12(weekNum);
      if (currentSubject === 'chemistry') return getQuestionsByWeekChem12(weekNum);
      if (currentSubject === 'biology') return getQuestionsByWeekBio12(weekNum);
      if (currentSubject === 'history') return getQuestionsByWeekHist12(weekNum);
      if (currentSubject === 'geography') return getQuestionsByWeekGeo12(weekNum);
      if (currentSubject === 'econ_law') return getQuestionsByWeekEconLaw12(weekNum);
      if (currentSubject === 'informatics') return getQuestionsByWeekCS12(weekNum);
      if (currentSubject === 'technology') return getQuestionsByWeekTech12(weekNum);
    }
    return getQuestionsByWeek(weekNum);
  };

  // Active Filtered Questions Selector
  const getActiveFilteredQuestions = (params) => {
    if (isGrade4) return isMath ? getFilteredQuestions(params) : getFilteredQuestionsTV(params);
    if (isGrade5) return isMath ? getFilteredQuestionsMath5(params) : getFilteredQuestionsTV5(params);
    if (isGrade6) return isMath ? getFilteredQuestionsMath6(params) : getFilteredQuestionsLit6(params);
    if (isGrade7) {
      if (currentSubject === 'math') return getFilteredQuestionsMath7(params);
      if (currentSubject === 'vietnamese') return getFilteredQuestionsLit7(params);
      if (currentSubject === 'english') return getFilteredQuestionsENG7(params);
      if (currentSubject === 'science') return getFilteredQuestionsSCI7(params);
      if (currentSubject === 'history_geo') return getFilteredQuestionsHISGEO7(params);
      if (currentSubject === 'informatics') return getFilteredQuestionsINFO7(params);
      if (currentSubject === 'civics') return getFilteredQuestionsCIV7(params);
      if (currentSubject === 'technology') return getFilteredQuestionsTECH7(params);
    }
    if (isGrade12) {
      if (currentSubject === 'math') return getFilteredQuestionsMath12(params);
      if (currentSubject === 'vietnamese') return getFilteredQuestionsLit12(params);
      if (currentSubject === 'english') return getFilteredQuestionsEng12(params);
      if (currentSubject === 'physics') return getFilteredQuestionsPhysics12(params);
      if (currentSubject === 'chemistry') return getFilteredQuestionsChem12(params);
      if (currentSubject === 'biology') return getFilteredQuestionsBio12(params);
      if (currentSubject === 'history') return getFilteredQuestionsHist12(params);
      if (currentSubject === 'geography') return getFilteredQuestionsGeo12(params);
      if (currentSubject === 'econ_law') return getFilteredQuestionsEconLaw12(params);
      if (currentSubject === 'informatics') return getFilteredQuestionsCS12(params);
      if (currentSubject === 'technology') return getFilteredQuestionsTech12(params);
    }
    return getFilteredQuestions(params);
  };

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
      g7Lit: g7LitProgress,
      g12Math: g12MathProgress
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
      if (currentSubject === 'math') setG7MathWrong(filterFn);
      else if (currentSubject === 'vietnamese') setG7LitWrong(filterFn);
      else if (currentSubject === 'english') setG7EngWrong(filterFn);
      else if (currentSubject === 'science') setG7SciWrong(filterFn);
      else if (currentSubject === 'history_geo') setG7HisGeoWrong(filterFn);
      else if (currentSubject === 'informatics') setG7InfoWrong(filterFn);
      else if (currentSubject === 'civics') setG7CivWrong(filterFn);
      else if (currentSubject === 'technology') setG7TechWrong(filterFn);
    } else if (isGrade12) {
      if (currentSubject === 'math') setG12MathWrong(filterFn);
      else if (currentSubject === 'vietnamese') setG12LitWrong(filterFn);
      else if (currentSubject === 'english') setG12EngWrong(filterFn);
      else if (currentSubject === 'physics') setG12PhyWrong(filterFn);
      else if (currentSubject === 'chemistry') setG12ChemWrong(filterFn);
      else if (currentSubject === 'biology') setG12BioWrong(filterFn);
      else if (currentSubject === 'history') setG12HistWrong(filterFn);
      else if (currentSubject === 'geography') setG12GeoWrong(filterFn);
      else if (currentSubject === 'econ_law') setG12EconLawWrong(filterFn);
      else if (currentSubject === 'informatics') setG12CSWrong(filterFn);
      else if (currentSubject === 'technology') setG12TechWrong(filterFn);
    }
    sounds.playClick();
  };

  // Buy Mascot in Shop using coins
  const buyShopMascot = (mascotId, price) => {
    if (unlockedMascots.includes(mascotId)) {
      updateProfile({ mascot: mascotId });
      sounds.playClick();
      return { success: true, message: 'Đã chọn linh vật!' };
    }
    if (coins < price) {
      sounds.playWrong();
      return { success: false, message: `Bạn cần thêm ${price - coins} Xu để mở khóa linh vật này!` };
    }

    setCoins(prev => prev - price);
    setUnlockedMascots(prev => [...prev, mascotId]);
    updateProfile({ mascot: mascotId });
    sounds.playVictory();
    return { success: true, message: 'Chúc mừng bạn đã mở khóa linh vật mới thành công!' };
  };

  // Parent PIN handlers
  const setParentPin = (newPin) => {
    setParentPinState(newPin.trim());
    sounds.playClick();
  };

  const verifyParentPin = (inputPin) => {
    if (!parentPin) return true;
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
      if (activeSubj === 'math') setG7MathWrong(updateWrongList);
      else if (activeSubj === 'vietnamese') setG7LitWrong(updateWrongList);
      else if (activeSubj === 'english') setG7EngWrong(updateWrongList);
      else if (activeSubj === 'science') setG7SciWrong(updateWrongList);
      else if (activeSubj === 'history_geo') setG7HisGeoWrong(updateWrongList);
      else if (activeSubj === 'informatics') setG7InfoWrong(updateWrongList);
      else if (activeSubj === 'civics') setG7CivWrong(updateWrongList);
      else if (activeSubj === 'technology') setG7TechWrong(updateWrongList);
    } else if (activeGrade === '12') {
      if (activeSubj === 'math') setG12MathWrong(updateWrongList);
      else if (activeSubj === 'vietnamese') setG12LitWrong(updateWrongList);
      else if (activeSubj === 'english') setG12EngWrong(updateWrongList);
      else if (activeSubj === 'physics') setG12PhyWrong(updateWrongList);
      else if (activeSubj === 'chemistry') setG12ChemWrong(updateWrongList);
      else if (activeSubj === 'biology') setG12BioWrong(updateWrongList);
      else if (activeSubj === 'history') setG12HistWrong(updateWrongList);
      else if (activeSubj === 'geography') setG12GeoWrong(updateWrongList);
      else if (activeSubj === 'econ_law') setG12EconLawWrong(updateWrongList);
      else if (activeSubj === 'informatics') setG12CSWrong(updateWrongList);
      else if (activeSubj === 'technology') setG12TechWrong(updateWrongList);
    }

    // Update week progress
    if (week) {
      const updateProg = (prev) => {
        const currentProg = prev[week] || { bestScore: 0, stars: 0, attempts: 0, unlocked: true };
        const newBestScore = Math.max(currentProg.bestScore, score);
        const newStars = Math.max(currentProg.stars, earnedStars);
        const newAttempts = (currentProg.attempts || 0) + 1;

        const updated = {
          ...prev,
          [week]: {
            bestScore: newBestScore,
            stars: newStars,
            attempts: newAttempts,
            unlocked: true,
            lastCompleted: new Date().toISOString()
          }
        };

        // Unlock next week
        if (score >= 50 && week < 35) {
          const nextWeek = week + 1;
          if (!updated[nextWeek]) {
            updated[nextWeek] = { bestScore: 0, stars: 0, attempts: 0, unlocked: true };
          } else {
            updated[nextWeek].unlocked = true;
          }
        }
        return updated;
      };

      if (activeGrade === '4') {
        if (isActMath) setG4MathProgress(updateProg);
        else setG4TvProgress(updateProg);
      } else if (activeGrade === '5') {
        if (isActMath) setG5MathProgress(updateProg);
        else setG5TvProgress(updateProg);
      } else if (activeGrade === '6') {
        if (isActMath) setG6MathProgress(updateProg);
        else setG6LitProgress(updateProg);
      } else if (activeGrade === '7') {
        if (activeSubj === 'math') setG7MathProgress(updateProg);
        else if (activeSubj === 'vietnamese') setG7LitProgress(updateProg);
        else if (activeSubj === 'english') setG7EngProgress(updateProg);
        else if (activeSubj === 'science') setG7SciProgress(updateProg);
        else if (activeSubj === 'history_geo') setG7HisGeoProgress(updateProg);
        else if (activeSubj === 'informatics') setG7InfoProgress(updateProg);
        else if (activeSubj === 'civics') setG7CivProgress(updateProg);
        else if (activeSubj === 'technology') setG7TechProgress(updateProg);
      } else if (activeGrade === '12') {
        if (activeSubj === 'math') setG12MathProgress(updateProg);
        else if (activeSubj === 'vietnamese') setG12LitProgress(updateProg);
        else if (activeSubj === 'english') setG12EngProgress(updateProg);
        else if (activeSubj === 'physics') setG12PhyProgress(updateProg);
        else if (activeSubj === 'chemistry') setG12ChemProgress(updateProg);
        else if (activeSubj === 'biology') setG12BioProgress(updateProg);
        else if (activeSubj === 'history') setG12HistProgress(updateProg);
        else if (activeSubj === 'geography') setG12GeoProgress(updateProg);
        else if (activeSubj === 'econ_law') setG12EconLawProgress(updateProg);
        else if (activeSubj === 'informatics') setG12CSProgress(updateProg);
        else if (activeSubj === 'technology') setG12TechProgress(updateProg);
      }
    }

    // Add to history
    const newRecord = {
      id: `quiz_${Date.now()}`,
      date: new Date().toISOString(),
      grade: activeGrade,
      subject: activeSubj,
      week: week || null,
      title: resultData.title || (week ? `Tuần ${week}` : 'Luyện tập tự chọn'),
      score,
      correctCount,
      totalCount,
      timeSpent,
      earnedStars,
      earnedCoins
    };

    const newHistory = [newRecord, ...history];
    setHistory(newHistory);
    checkBadges(newHistory, totalStars + earnedStars);

    // Personalized voice feedback
    sounds.speakSubmissionFeedback(score, activeGrade === '12');

    return {
      earnedStars,
      earnedCoins,
      newTotalStars: totalStars + earnedStars,
      newTotalCoins: coins + earnedCoins
    };
  };

  const isWeekUnlocked = (weekNum) => {
    if (isFreeMode) return true;
    if (Number(weekNum) === 1) return true;
    const prevWeek = Number(weekNum) - 1;
    return (progress[prevWeek]?.bestScore || 0) >= 50;
  };

  return (
    <LearningContext.Provider
      value={{
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
        isMath,
        profile,
        updateProfile,
        progress,
        wrongQuestions,
        stages,
        categories,
        weeksMetadata,
        getQuestionsByWeek: getActiveQuestionsByWeek,
        getFilteredQuestions: getActiveFilteredQuestions,
        totalStars,
        coins,
        streakData,
        unlockedBadges,
        unlockedMascots,
        isFreeMode,
        toggleFreeMode,
        isWeekUnlocked,
        soundEnabled,
        toggleSound,
        buyShopMascot,
        removeWrongQuestion,
        saveQuizResult,
        history,
        parentPin,
        setParentPin,
        verifyParentPin
      }}
    >
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
