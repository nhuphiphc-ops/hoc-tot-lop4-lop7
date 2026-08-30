import React, { createContext, useContext, useState, useEffect } from 'react';
import sounds from '../utils/soundEffects';


// Grade 1 Data (8 Subjects for Be Chuot)
import { STAGES_MATH1, TOPIC_CATEGORIES_MATH1, WEEKS_METADATA_MATH1, QUESTION_BANK_MATH1, getQuestionsByWeekMath1, getFilteredQuestionsMath1 } from '../data/grade1/math/questionBankMath1.js';
import { STAGES_TV1, TOPIC_CATEGORIES_TV1, WEEKS_METADATA_TV1, QUESTION_BANK_TV1, getQuestionsByWeekTV1, getFilteredQuestionsTV1 } from '../data/grade1/vietnamese/questionBankTV1.js';
import { STAGES_ENG1, TOPIC_CATEGORIES_ENG1, WEEKS_METADATA_ENG1, QUESTION_BANK_ENG1, getQuestionsByWeekEng1, getFilteredQuestionsEng1 } from '../data/grade1/english/questionBankEng1.js';
import { STAGES_SCI1, TOPIC_CATEGORIES_SCI1, WEEKS_METADATA_SCI1, QUESTION_BANK_SCI1, getQuestionsByWeekSci1, getFilteredQuestionsSci1 } from '../data/grade1/science/questionBankSci1.js';
import { STAGES_HISGEO1, TOPIC_CATEGORIES_HISGEO1, WEEKS_METADATA_HISGEO1, QUESTION_BANK_HISGEO1, getQuestionsByWeekHisGeo1, getFilteredQuestionsHisGeo1 } from '../data/grade1/history_geo/questionBankHisGeo1.js';
import { STAGES_INFO1, TOPIC_CATEGORIES_INFO1, WEEKS_METADATA_INFO1, QUESTION_BANK_INFO1, getQuestionsByWeekInfo1, getFilteredQuestionsInfo1 } from '../data/grade1/informatics/questionBankInfo1.js';
import { STAGES_CIV1, TOPIC_CATEGORIES_CIV1, WEEKS_METADATA_CIV1, QUESTION_BANK_CIV1, getQuestionsByWeekCiv1, getFilteredQuestionsCiv1 } from '../data/grade1/civics/questionBankCiv1.js';
import { STAGES_TECH1, TOPIC_CATEGORIES_TECH1, WEEKS_METADATA_TECH1, QUESTION_BANK_TECH1, getQuestionsByWeekTech1, getFilteredQuestionsTech1 } from '../data/grade1/technology/questionBankTech1.js';

// Grade 2 Data (8 Subjects for Be Chuot)
import { STAGES_MATH2, TOPIC_CATEGORIES_MATH2, WEEKS_METADATA_MATH2, QUESTION_BANK_MATH2, getQuestionsByWeekMath2, getFilteredQuestionsMath2 } from '../data/grade2/math/questionBankMath2.js';
import { STAGES_TV2, TOPIC_CATEGORIES_TV2, WEEKS_METADATA_TV2, QUESTION_BANK_TV2, getQuestionsByWeekTV2, getFilteredQuestionsTV2 } from '../data/grade2/vietnamese/questionBankTV2.js';
import { STAGES_ENG2, TOPIC_CATEGORIES_ENG2, WEEKS_METADATA_ENG2, QUESTION_BANK_ENG2, getQuestionsByWeekEng2, getFilteredQuestionsEng2 } from '../data/grade2/english/questionBankEng2.js';
import { STAGES_SCI2, TOPIC_CATEGORIES_SCI2, WEEKS_METADATA_SCI2, QUESTION_BANK_SCI2, getQuestionsByWeekSci2, getFilteredQuestionsSci2 } from '../data/grade2/science/questionBankSci2.js';
import { STAGES_HISGEO2, TOPIC_CATEGORIES_HISGEO2, WEEKS_METADATA_HISGEO2, QUESTION_BANK_HISGEO2, getQuestionsByWeekHisGeo2, getFilteredQuestionsHisGeo2 } from '../data/grade2/history_geo/questionBankHisGeo2.js';
import { STAGES_INFO2, TOPIC_CATEGORIES_INFO2, WEEKS_METADATA_INFO2, QUESTION_BANK_INFO2, getQuestionsByWeekInfo2, getFilteredQuestionsInfo2 } from '../data/grade2/informatics/questionBankInfo2.js';
import { STAGES_CIV2, TOPIC_CATEGORIES_CIV2, WEEKS_METADATA_CIV2, QUESTION_BANK_CIV2, getQuestionsByWeekCiv2, getFilteredQuestionsCiv2 } from '../data/grade2/civics/questionBankCiv2.js';
import { STAGES_TECH2, TOPIC_CATEGORIES_TECH2, WEEKS_METADATA_TECH2, QUESTION_BANK_TECH2, getQuestionsByWeekTech2, getFilteredQuestionsTech2 } from '../data/grade2/technology/questionBankTech2.js';

// Grade 3 Data (8 Subjects for Be Chuot)
import { STAGES_MATH3, TOPIC_CATEGORIES_MATH3, WEEKS_METADATA_MATH3, QUESTION_BANK_MATH3, getQuestionsByWeekMath3, getFilteredQuestionsMath3 } from '../data/grade3/math/questionBankMath3.js';
import { STAGES_TV3, TOPIC_CATEGORIES_TV3, WEEKS_METADATA_TV3, QUESTION_BANK_TV3, getQuestionsByWeekTV3, getFilteredQuestionsTV3 } from '../data/grade3/vietnamese/questionBankTV3.js';
import { STAGES_ENG3, TOPIC_CATEGORIES_ENG3, WEEKS_METADATA_ENG3, QUESTION_BANK_ENG3, getQuestionsByWeekEng3, getFilteredQuestionsEng3 } from '../data/grade3/english/questionBankEng3.js';
import { STAGES_SCI3, TOPIC_CATEGORIES_SCI3, WEEKS_METADATA_SCI3, QUESTION_BANK_SCI3, getQuestionsByWeekSci3, getFilteredQuestionsSci3 } from '../data/grade3/science/questionBankSci3.js';
import { STAGES_HISGEO3, TOPIC_CATEGORIES_HISGEO3, WEEKS_METADATA_HISGEO3, QUESTION_BANK_HISGEO3, getQuestionsByWeekHisGeo3, getFilteredQuestionsHisGeo3 } from '../data/grade3/history_geo/questionBankHisGeo3.js';
import { STAGES_INFO3, TOPIC_CATEGORIES_INFO3, WEEKS_METADATA_INFO3, QUESTION_BANK_INFO3, getQuestionsByWeekInfo3, getFilteredQuestionsInfo3 } from '../data/grade3/informatics/questionBankInfo3.js';
import { STAGES_CIV3, TOPIC_CATEGORIES_CIV3, WEEKS_METADATA_CIV3, QUESTION_BANK_CIV3, getQuestionsByWeekCiv3, getFilteredQuestionsCiv3 } from '../data/grade3/civics/questionBankCiv3.js';
import { STAGES_TECH3, TOPIC_CATEGORIES_TECH3, WEEKS_METADATA_TECH3, QUESTION_BANK_TECH3, getQuestionsByWeekTech3, getFilteredQuestionsTech3 } from '../data/grade3/technology/questionBankTech3.js';

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
// Grade 8 Data
import { STAGES_MATH8, TOPIC_CATEGORIES_MATH8, WEEKS_METADATA_MATH8, QUESTION_BANK_MATH8, getQuestionsByWeekMath8, getFilteredQuestionsMath8 } from '../data/grade8/math/questionBankMath8.js';
import { STAGES_LIT8, TOPIC_CATEGORIES_LIT8, WEEKS_METADATA_LIT8, QUESTION_BANK_LIT8, getQuestionsByWeekLit8, getFilteredQuestionsLit8 } from '../data/grade8/literature/questionBankLit8.js';

// Grade 9 Data
import { STAGES_MATH9, TOPIC_CATEGORIES_MATH9, WEEKS_METADATA_MATH9, QUESTION_BANK_MATH9, getQuestionsByWeekMath9, getFilteredQuestionsMath9 } from '../data/grade9/math/questionBankMath9.js';
import { STAGES_LIT9, TOPIC_CATEGORIES_LIT9, WEEKS_METADATA_LIT9, QUESTION_BANK_LIT9, getQuestionsByWeekLit9, getFilteredQuestionsLit9 } from '../data/grade9/literature/questionBankLit9.js';

// Grade 10 Data
import { STAGES_MATH10, TOPIC_CATEGORIES_MATH10, WEEKS_METADATA_MATH10, QUESTION_BANK_MATH10, getQuestionsByWeekMath10, getFilteredQuestionsMath10 } from '../data/grade10/math/questionBankMath10.js';
import { STAGES_LIT10, TOPIC_CATEGORIES_LIT10, WEEKS_METADATA_LIT10, QUESTION_BANK_LIT10, getQuestionsByWeekLit10, getFilteredQuestionsLit10 } from '../data/grade10/literature/questionBankLit10.js';

// Grade 11 Data
import { STAGES_MATH11, TOPIC_CATEGORIES_MATH11, WEEKS_METADATA_MATH11, QUESTION_BANK_MATH11, getQuestionsByWeekMath11, getFilteredQuestionsMath11 } from '../data/grade11/math/questionBankMath11.js';
import { STAGES_LIT11, TOPIC_CATEGORIES_LIT11, WEEKS_METADATA_LIT11, QUESTION_BANK_LIT11, getQuestionsByWeekLit11, getFilteredQuestionsLit11 } from '../data/grade11/literature/questionBankLit11.js';


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


export const GRADE_PRIMARY_SUBJECTS = [
  { id: 'math', label: 'Toán Học', icon: 'Calculator', color: 'from-amber-400 to-orange-500', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'vietnamese', label: 'Tiếng Việt', icon: 'BookOpen', color: 'from-rose-400 to-pink-500', badgeColor: 'bg-rose-100 text-rose-800' },
  { id: 'english', label: 'Tiếng Anh', icon: 'Globe', color: 'from-emerald-400 to-teal-500', badgeColor: 'bg-emerald-100 text-emerald-800' },
  { id: 'science', label: 'Tự Nhiên & Xã Hội', icon: 'Atom', color: 'from-purple-400 to-indigo-500', badgeColor: 'bg-purple-100 text-purple-800' },
  { id: 'history_geo', label: 'Khám Phá Xã Hội', icon: 'Compass', color: 'from-blue-400 to-cyan-500', badgeColor: 'bg-blue-100 text-blue-800' },
  { id: 'informatics', label: 'Tin Học', icon: 'Laptop', color: 'from-cyan-400 to-blue-500', badgeColor: 'bg-cyan-100 text-cyan-800' },
  { id: 'civics', label: 'Đạo Đức & Kỹ Năng', icon: 'HeartHandshake', color: 'from-pink-400 to-rose-500', badgeColor: 'bg-pink-100 text-pink-800' },
  { id: 'technology', label: 'Công Nghệ & STEM', icon: 'Wrench', color: 'from-lime-400 to-emerald-500', badgeColor: 'bg-lime-100 text-lime-800' },
];

export const DEFAULT_PROFILE_CHUOT = {
  name: 'Bé Chuột',
  school: 'Trường Tiểu Học Phú La',
  grade: '1',
  avatar: '🐭',
  mascot: 'cat'
};

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

  PROFILE_CHUOT: 'toan_user_profile_chuot',
  // Grade 1 Progress
  PROGRESS_G1_MATH: 'toan1_week_progress_math',
  PROGRESS_G1_TV: 'toan1_week_progress_tv',
  PROGRESS_G1_ENG: 'toan1_week_progress_eng',
  PROGRESS_G1_SCI: 'toan1_week_progress_sci',
  PROGRESS_G1_HISGEO: 'toan1_week_progress_hisgeo',
  PROGRESS_G1_INFO: 'toan1_week_progress_info',
  PROGRESS_G1_CIV: 'toan1_week_progress_civ',
  PROGRESS_G1_TECH: 'toan1_week_progress_tech',
  // Grade 2 Progress
  PROGRESS_G2_MATH: 'toan2_week_progress_math',
  PROGRESS_G2_TV: 'toan2_week_progress_tv',
  PROGRESS_G2_ENG: 'toan2_week_progress_eng',
  PROGRESS_G2_SCI: 'toan2_week_progress_sci',
  PROGRESS_G2_HISGEO: 'toan2_week_progress_hisgeo',
  PROGRESS_G2_INFO: 'toan2_week_progress_info',
  PROGRESS_G2_CIV: 'toan2_week_progress_civ',
  PROGRESS_G2_TECH: 'toan2_week_progress_tech',
  // Grade 3 Progress
  PROGRESS_G3_MATH: 'toan3_week_progress_math',
  PROGRESS_G3_TV: 'toan3_week_progress_tv',
  PROGRESS_G3_ENG: 'toan3_week_progress_eng',
  PROGRESS_G3_SCI: 'toan3_week_progress_sci',
  PROGRESS_G3_HISGEO: 'toan3_week_progress_hisgeo',
  PROGRESS_G3_INFO: 'toan3_week_progress_info',
  PROGRESS_G3_CIV: 'toan3_week_progress_civ',
  PROGRESS_G3_TECH: 'toan3_week_progress_tech',

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
  // Grade 8 Progress
  PROGRESS_G8_MATH: 'toan8_week_progress_math',
  PROGRESS_G8_LIT: 'toan8_week_progress_lit',
  // Grade 9 Progress
  PROGRESS_G9_MATH: 'toan9_week_progress_math',
  PROGRESS_G9_LIT: 'toan9_week_progress_lit',
  // Grade 10 Progress
  PROGRESS_G10_MATH: 'toan10_week_progress_math',
  PROGRESS_G10_LIT: 'toan10_week_progress_lit',
  // Grade 11 Progress
  PROGRESS_G11_MATH: 'toan11_week_progress_math',
  PROGRESS_G11_LIT: 'toan11_week_progress_lit',

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
  
  // Grade 1 Wrongs
  WRONG_G1_MATH: 'toan1_wrong_questions_math',
  WRONG_G1_TV: 'toan1_wrong_questions_tv',
  WRONG_G1_ENG: 'toan1_wrong_questions_eng',
  WRONG_G1_SCI: 'toan1_wrong_questions_sci',
  WRONG_G1_HISGEO: 'toan1_wrong_questions_hisgeo',
  WRONG_G1_INFO: 'toan1_wrong_questions_info',
  WRONG_G1_CIV: 'toan1_wrong_questions_civ',
  WRONG_G1_TECH: 'toan1_wrong_questions_tech',
  // Grade 2 Wrongs
  WRONG_G2_MATH: 'toan2_wrong_questions_math',
  WRONG_G2_TV: 'toan2_wrong_questions_tv',
  WRONG_G2_ENG: 'toan2_wrong_questions_eng',
  WRONG_G2_SCI: 'toan2_wrong_questions_sci',
  WRONG_G2_HISGEO: 'toan2_wrong_questions_hisgeo',
  WRONG_G2_INFO: 'toan2_wrong_questions_info',
  WRONG_G2_CIV: 'toan2_wrong_questions_civ',
  WRONG_G2_TECH: 'toan2_wrong_questions_tech',
  // Grade 3 Wrongs
  WRONG_G3_MATH: 'toan3_wrong_questions_math',
  WRONG_G3_TV: 'toan3_wrong_questions_tv',
  WRONG_G3_ENG: 'toan3_wrong_questions_eng',
  WRONG_G3_SCI: 'toan3_wrong_questions_sci',
  WRONG_G3_HISGEO: 'toan3_wrong_questions_hisgeo',
  WRONG_G3_INFO: 'toan3_wrong_questions_info',
  WRONG_G3_CIV: 'toan3_wrong_questions_civ',
  WRONG_G3_TECH: 'toan3_wrong_questions_tech',

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
  WRONG_G8_MATH: 'toan8_wrong_questions_math',
  WRONG_G8_LIT: 'toan8_wrong_questions_lit',
  WRONG_G9_MATH: 'toan9_wrong_questions_math',
  WRONG_G9_LIT: 'toan9_wrong_questions_lit',
  WRONG_G10_MATH: 'toan10_wrong_questions_math',
  WRONG_G10_LIT: 'toan10_wrong_questions_lit',
  WRONG_G11_MATH: 'toan11_wrong_questions_math',
  WRONG_G11_LIT: 'toan11_wrong_questions_lit',

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

export const SYSTEM_ROLES = [
  { id: 'truong_bks', label: 'Trưởng BKS', desc: 'Toàn quyền giám sát & kiểm tra chuyên đề', color: 'border-purple-500/50 bg-purple-500/10 text-purple-300', badgeColor: 'bg-purple-600', icon: 'Crown' },
  { id: 'thanh_vien_bks', label: 'Thành viên BKS', desc: 'Kiểm tra chất lượng & xem báo cáo theo lớp', color: 'border-sky-500/50 bg-sky-500/10 text-sky-300', badgeColor: 'bg-sky-600', icon: 'Shield' },
  { id: 'giang_vien', label: 'Giảng viên / GV Bộ môn', desc: 'Quản lý đề thi, ngân hàng câu hỏi & chấm điểm', color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300', badgeColor: 'bg-emerald-600', icon: 'GraduationCap' },
  { id: 'chu_nhiem', label: 'GV Chủ nhiệm', desc: 'Theo dõi tiến độ học sinh theo danh sách lớp', color: 'border-amber-500/50 bg-amber-500/10 text-amber-300', badgeColor: 'bg-amber-600', icon: 'BookOpen' },
  { id: 'khach', label: 'Khách / Quan sát', desc: 'Chỉ xem thống kê tổng quan (Read-only)', color: 'border-slate-500/50 bg-slate-500/10 text-slate-300', badgeColor: 'bg-slate-600', icon: 'User' },
  { id: 'admin', label: 'Quản trị viên (Admin)', desc: 'Toàn quyền hệ thống & phân quyền thành viên', color: 'border-rose-500/50 bg-rose-500/10 text-rose-300', badgeColor: 'bg-rose-600', icon: 'Zap' }
];

export const AVAILABLE_CLASSES = [
  { id: 'lop_1a', label: 'Lớp 1A (Bé Chuột)', grade: 1, group: 'Tiểu học' },
  { id: 'lop_1b', label: 'Lớp 1B', grade: 1, group: 'Tiểu học' },
  { id: 'lop_2a', label: 'Lớp 2A', grade: 2, group: 'Tiểu học' },
  { id: 'lop_2b', label: 'Lớp 2B', grade: 2, group: 'Tiểu học' },
  { id: 'lop_3a', label: 'Lớp 3A', grade: 3, group: 'Tiểu học' },
  { id: 'lop_3b', label: 'Lớp 3B', grade: 3, group: 'Tiểu học' },

  { id: 'lop_4a', label: 'Lớp 4A', grade: 4, group: 'Tiểu học' },
  { id: 'lop_4b', label: 'Lớp 4B', grade: 4, group: 'Tiểu học' },
  { id: 'lop_5a', label: 'Lớp 5A', grade: 5, group: 'Tiểu học' },
  { id: 'lop_5b', label: 'Lớp 5B', grade: 5, group: 'Tiểu học' },
  { id: 'lop_6a', label: 'Lớp 6A', grade: 6, group: 'THCS' },
  { id: 'lop_6b', label: 'Lớp 6B', grade: 6, group: 'THCS' },
  { id: 'lop_7a', label: 'Lớp 7A', grade: 7, group: 'THCS' },
  { id: 'lop_7b', label: 'Lớp 7B', grade: 7, group: 'THCS' },
  { id: 'lop_8a', label: 'Lớp 8A', grade: 8, group: 'THCS' },
  { id: 'lop_8b', label: 'Lớp 8B', grade: 8, group: 'THCS' },
  { id: 'lop_9a', label: 'Lớp 9A', grade: 9, group: 'THCS' },
  { id: 'lop_10a', label: 'Lớp 10A', grade: 10, group: 'THPT' },
  { id: 'lop_10b', label: 'Lớp 10B', grade: 10, group: 'THPT' },
  { id: 'lop_11a', label: 'Lớp 11A', grade: 11, group: 'THPT' },
  { id: 'lop_11b', label: 'Lớp 11B', grade: 11, group: 'THPT' },
  { id: 'lop_12a1', label: 'Lớp 12A1', grade: 12, group: 'THPT' },
  { id: 'lop_12a2', label: 'Lớp 12A2', grade: 12, group: 'THPT' },
  { id: 'lop_12b1', label: 'Lớp 12B1', grade: 12, group: 'THPT' },
  { id: 'lop_12d1', label: 'Lớp 12D1', grade: 12, group: 'THPT' }
];

export const DEFAULT_MEMBERS = [
  {
    id: 'usr_admin_01',
    email: 'admin.phula@school.edu.vn',
    fullName: 'Ban Giám Hiệu - Quản Trị Hệ Thống',
    role: 'admin',
    assignedClasses: ['all'],
    status: 'active',
    createdAt: '2026-08-01T08:00:00.000Z',
    lastLogin: '2026-08-29T00:30:00.000Z'
  },
  {
    id: 'usr_bks_01',
    email: 'truongbks.tran@bks.edu.vn',
    fullName: 'Trần Minh Tuấn (Trưởng Ban Kiểm Soát)',
    role: 'truong_bks',
    assignedClasses: ['lop_6a', 'lop_7a', 'lop_7b', 'lop_12a1', 'lop_12a2'],
    status: 'active',
    createdAt: '2026-08-10T09:15:00.000Z',
    lastLogin: '2026-08-28T21:45:00.000Z'
  },
  {
    id: 'usr_bks_02',
    email: 'thanhvienbks.le@bks.edu.vn',
    fullName: 'Lê Hoàng Hải (Thành Viên BKS)',
    role: 'thanh_vien_bks',
    assignedClasses: ['lop_7a', 'lop_7b', 'lop_12a1'],
    status: 'active',
    createdAt: '2026-08-15T14:20:00.000Z',
    lastLogin: '2026-08-27T18:10:00.000Z'
  },
  {
    id: 'usr_gv_01',
    email: 'gvtoan.nguyen@phula.edu.vn',
    fullName: 'Nguyễn Thị Mai (Giáo Viên Toán)',
    role: 'giang_vien',
    assignedClasses: ['lop_4a', 'lop_5a', 'lop_6a', 'lop_7b'],
    status: 'active',
    createdAt: '2026-08-18T10:00:00.000Z',
    lastLogin: '2026-08-29T01:10:00.000Z'
  },
  {
    id: 'usr_gv_02',
    email: 'gv12.ngogiatu@ngogiatu.edu.vn',
    fullName: 'Phạm Đức Dũng (Giáo Viên Ôn Thi 12)',
    role: 'giang_vien',
    assignedClasses: ['lop_12a1', 'lop_12a2', 'lop_12b1', 'lop_12d1'],
    status: 'active',
    createdAt: '2026-08-20T16:45:00.000Z',
    lastLogin: '2026-08-28T22:30:00.000Z'
  },
  {
    id: 'usr_guest_01',
    email: 'observer.phuhuynh@gmail.com',
    fullName: 'Đoàn Giám Sát Phụ Huynh',
    role: 'khach',
    assignedClasses: ['lop_4a', 'lop_7b', 'lop_12a1'],
    status: 'active',
    createdAt: '2026-08-25T11:00:00.000Z',
    lastLogin: '2026-08-28T19:00:00.000Z'
  }
];

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
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].includes(saved) ? saved : '4';
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

  
  // Profile for Be Chuot (Grades 1-3)
  const [profileChuot, setProfileChuot] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE_CHUOT);
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE_CHUOT;
    } catch {
      return DEFAULT_PROFILE_CHUOT;
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

  const isGrade1 = currentGrade === '1';
  const isGrade2 = currentGrade === '2';
  const isGrade3 = currentGrade === '3';
  const isPrimaryChuot = ['1', '2', '3'].includes(currentGrade);
  const isGrade4 = currentGrade === '4';
  const isGrade5 = currentGrade === '5';
  const isGrade6 = currentGrade === '6';
  const isGrade7 = currentGrade === '7';
  const isGrade8 = currentGrade === '8';
  const isGrade9 = currentGrade === '9';
  const isGrade10 = currentGrade === '10';
  const isGrade11 = currentGrade === '11';
  const isGrade12 = currentGrade === '12';
  const isSecondary = ['6', '7', '8', '9'].includes(currentGrade);
  const isHighSchool = ['10', '11', '12'].includes(currentGrade);
  const profile = isHighSchool ? profileMinh : (isPrimaryChuot ? profileChuot : profileNguyen);

  
  // Progress Stores - Grade 1 (8 Subjects)
  const [g1MathProgress, setG1MathProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_MATH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1TvProgress, setG1TvProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_TV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1EngProgress, setG1EngProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_ENG); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1SciProgress, setG1SciProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_SCI); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1HisGeoProgress, setG1HisGeoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_HISGEO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1InfoProgress, setG1InfoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_INFO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1CivProgress, setG1CivProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_CIV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g1TechProgress, setG1TechProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G1_TECH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });

  // Progress Stores - Grade 2 (8 Subjects)
  const [g2MathProgress, setG2MathProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_MATH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2TvProgress, setG2TvProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_TV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2EngProgress, setG2EngProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_ENG); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2SciProgress, setG2SciProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_SCI); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2HisGeoProgress, setG2HisGeoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_HISGEO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2InfoProgress, setG2InfoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_INFO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2CivProgress, setG2CivProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_CIV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g2TechProgress, setG2TechProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G2_TECH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });

  // Progress Stores - Grade 3 (8 Subjects)
  const [g3MathProgress, setG3MathProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_MATH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3TvProgress, setG3TvProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_TV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3EngProgress, setG3EngProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_ENG); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3SciProgress, setG3SciProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_SCI); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3HisGeoProgress, setG3HisGeoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_HISGEO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3InfoProgress, setG3InfoProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_INFO); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3CivProgress, setG3CivProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_CIV); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });
  const [g3TechProgress, setG3TechProgress] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.PROGRESS_G3_TECH); return s ? JSON.parse(s) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } });

  // Wrong Questions Stores - Grade 1
  const [g1MathWrong, setG1MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1TvWrong, setG1TvWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_TV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1EngWrong, setG1EngWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_ENG); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1SciWrong, setG1SciWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_SCI); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1HisGeoWrong, setG1HisGeoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_HISGEO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1InfoWrong, setG1InfoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_INFO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1CivWrong, setG1CivWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_CIV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g1TechWrong, setG1TechWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G1_TECH); return s ? JSON.parse(s) : []; } catch { return []; } });

  // Wrong Questions Stores - Grade 2
  const [g2MathWrong, setG2MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2TvWrong, setG2TvWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_TV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2EngWrong, setG2EngWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_ENG); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2SciWrong, setG2SciWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_SCI); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2HisGeoWrong, setG2HisGeoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_HISGEO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2InfoWrong, setG2InfoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_INFO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2CivWrong, setG2CivWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_CIV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g2TechWrong, setG2TechWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G2_TECH); return s ? JSON.parse(s) : []; } catch { return []; } });

  // Wrong Questions Stores - Grade 3
  const [g3MathWrong, setG3MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3TvWrong, setG3TvWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_TV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3EngWrong, setG3EngWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_ENG); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3SciWrong, setG3SciWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_SCI); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3HisGeoWrong, setG3HisGeoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_HISGEO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3InfoWrong, setG3InfoWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_INFO); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3CivWrong, setG3CivWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_CIV); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g3TechWrong, setG3TechWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G3_TECH); return s ? JSON.parse(s) : []; } catch { return []; } });

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
  
  // Progress Stores - Grade 8
  const [g8MathProgress, setG8MathProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G8_MATH); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g8LitProgress, setG8LitProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G8_LIT); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 9
  const [g9MathProgress, setG9MathProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G9_MATH); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g9LitProgress, setG9LitProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G9_LIT); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 10
  const [g10MathProgress, setG10MathProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G10_MATH); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g10LitProgress, setG10LitProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G10_LIT); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Progress Stores - Grade 11
  const [g11MathProgress, setG11MathProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G11_MATH); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });
  const [g11LitProgress, setG11LitProgress] = useState(() => {
    try { const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS_G11_LIT); return saved ? JSON.parse(saved) : { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; } catch { return { 1: { bestScore: 0, stars: 0, attempts: 0, unlocked: true } }; }
  });

  // Wrong Questions Stores - Grade 8, 9, 10, 11
  const [g8MathWrong, setG8MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G8_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g8LitWrong, setG8LitWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G8_LIT); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g9MathWrong, setG9MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G9_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g9LitWrong, setG9LitWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G9_LIT); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g10MathWrong, setG10MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G10_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g10LitWrong, setG10LitWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G10_LIT); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g11MathWrong, setG11MathWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G11_MATH); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [g11LitWrong, setG11LitWrong] = useState(() => { try { const s = localStorage.getItem(STORAGE_KEYS.WRONG_G11_LIT); return s ? JSON.parse(s) : []; } catch { return []; } });

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

  // Member Management & Access Control (RBAC)
  const [membersList, setMembersList] = useState(() => {
    try {
      const saved = localStorage.getItem('toan_system_members');
      return saved ? JSON.parse(saved) : DEFAULT_MEMBERS;
    } catch {
      return DEFAULT_MEMBERS;
    }
  });

  const [activeAdminUser, setActiveAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem('toan_active_admin_user');
      return saved ? JSON.parse(saved) : DEFAULT_MEMBERS[0];
    } catch {
      return DEFAULT_MEMBERS[0];
    }
  });

  // Sync Members to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('toan_system_members', JSON.stringify(membersList));
    } catch { /* ignore */ }
  }, [membersList]);

  useEffect(() => {
    try {
      localStorage.setItem('toan_active_admin_user', JSON.stringify(activeAdminUser));
    } catch { /* ignore */ }
  }, [activeAdminUser]);

  const addMember = (newMemberData) => {
    const newId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const createdMember = {
      id: newId,
      email: newMemberData.email?.trim(),
      fullName: newMemberData.fullName?.trim(),
      password: newMemberData.password || '123456',
      role: newMemberData.role || 'thanh_vien_bks',
      assignedClasses: newMemberData.assignedClasses && newMemberData.assignedClasses.length > 0 
        ? newMemberData.assignedClasses 
        : ['lop_6a'],
      status: 'active',
      createdAt: new Date().toISOString(),
      lastLogin: null
    };

    setMembersList(prev => [createdMember, ...prev]);
    return createdMember;
  };

  const updateMemberPermissions = (id, { role, assignedClasses, fullName }) => {
    setMembersList(prev => prev.map(m => {
      if (m.id === id) {
        return {
          ...m,
          ...(role ? { role } : {}),
          ...(assignedClasses ? { assignedClasses } : {}),
          ...(fullName ? { fullName } : {})
        };
      }
      return m;
    }));
  };

  const updateMemberPassword = (id, newPassword) => {
    setMembersList(prev => prev.map(m => {
      if (m.id === id) {
        return {
          ...m,
          password: newPassword
        };
      }
      return m;
    }));
  };

  const toggleMemberStatus = (id) => {
    setMembersList(prev => prev.map(m => {
      if (m.id === id) {
        return {
          ...m,
          status: m.status === 'active' ? 'suspended' : 'active'
        };
      }
      return m;
    }));
  };

  const deleteMember = (id) => {
    setMembersList(prev => prev.filter(m => m.id !== id));
  };

  const switchActiveUser = (user) => {
    setActiveAdminUser(user);
  };

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
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G8_MATH, JSON.stringify(g8MathProgress)); }, [g8MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G8_LIT, JSON.stringify(g8LitProgress)); }, [g8LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G9_MATH, JSON.stringify(g9MathProgress)); }, [g9MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G9_LIT, JSON.stringify(g9LitProgress)); }, [g9LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G10_MATH, JSON.stringify(g10MathProgress)); }, [g10MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G10_LIT, JSON.stringify(g10LitProgress)); }, [g10LitProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G11_MATH, JSON.stringify(g11MathProgress)); }, [g11MathProgress]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PROGRESS_G11_LIT, JSON.stringify(g11LitProgress)); }, [g11LitProgress]);

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G8_MATH, JSON.stringify(g8MathWrong)); }, [g8MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G8_LIT, JSON.stringify(g8LitWrong)); }, [g8LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G9_MATH, JSON.stringify(g9MathWrong)); }, [g9MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G9_LIT, JSON.stringify(g9LitWrong)); }, [g9LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G10_MATH, JSON.stringify(g10MathWrong)); }, [g10MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G10_LIT, JSON.stringify(g10LitWrong)); }, [g10LitWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G11_MATH, JSON.stringify(g11MathWrong)); }, [g11MathWrong]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.WRONG_G11_LIT, JSON.stringify(g11LitWrong)); }, [g11LitWrong]);


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
    // Reset subject to supported subjects for target grade
    
    if (['1', '2', '3'].includes(gradeId)) {
      const validPrimary = ['math', 'vietnamese', 'english', 'science', 'history_geo', 'informatics', 'civics', 'technology'];
      if (!validPrimary.includes(currentSubject)) {
        setCurrentSubject('math');
        localStorage.setItem(STORAGE_KEYS.SUBJECT, 'math');
      }
    } else if (['4', '5', '6', '8', '9', '10', '11'].includes(gradeId)) {

      if (!['math', 'vietnamese'].includes(currentSubject)) {
        setCurrentSubject('math');
      }
    } else if (gradeId === '7') {
      const g7Valid = ['math', 'vietnamese', 'english', 'science', 'history_geo', 'informatics', 'civics', 'technology'];
      if (!g7Valid.includes(currentSubject)) {
        setCurrentSubject('math');
      }
    } else if (gradeId === '12') {
      const g12Valid = ['math', 'vietnamese', 'english', 'physics', 'chemistry', 'biology', 'history', 'geography', 'econ_law', 'informatics', 'technology'];
      if (!g12Valid.includes(currentSubject)) {
        setCurrentSubject('math');
      }
    }
  };

  const switchSubject = (subjId) => {
    sounds.playClick();
    setCurrentSubject(subjId);
  };

  const updateProfile = (newProfile) => {
    if (isHighSchool) {
      setProfileMinh(prev => ({ ...prev, ...newProfile }));
    } else if (isPrimaryChuot) {
      setProfileChuot(prev => ({ ...prev, ...newProfile }));
    } else {
      setProfileNguyen(prev => ({ ...prev, ...newProfile }));
    }
  };

  // Helper getters
  const isMath = currentSubject === 'math';

  // Active Progress Map
  const getActiveProgress = () => {
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return g1TvProgress;
      if (currentSubject === 'english') return g1EngProgress;
      if (currentSubject === 'science') return g1SciProgress;
      if (currentSubject === 'history_geo') return g1HisGeoProgress;
      if (currentSubject === 'informatics') return g1InfoProgress;
      if (currentSubject === 'civics') return g1CivProgress;
      if (currentSubject === 'technology') return g1TechProgress;
      return g1MathProgress;
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return g2TvProgress;
      if (currentSubject === 'english') return g2EngProgress;
      if (currentSubject === 'science') return g2SciProgress;
      if (currentSubject === 'history_geo') return g2HisGeoProgress;
      if (currentSubject === 'informatics') return g2InfoProgress;
      if (currentSubject === 'civics') return g2CivProgress;
      if (currentSubject === 'technology') return g2TechProgress;
      return g2MathProgress;
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return g3TvProgress;
      if (currentSubject === 'english') return g3EngProgress;
      if (currentSubject === 'science') return g3SciProgress;
      if (currentSubject === 'history_geo') return g3HisGeoProgress;
      if (currentSubject === 'informatics') return g3InfoProgress;
      if (currentSubject === 'civics') return g3CivProgress;
      if (currentSubject === 'technology') return g3TechProgress;
      return g3MathProgress;
    }

    if (isGrade4) return isMath ? g4MathProgress : g4TvProgress;
    if (isGrade5) return isMath ? g5MathProgress : g5TvProgress;
    if (isGrade6) return isMath ? g6MathProgress : g6LitProgress;
    
    if (isGrade8) return isMath ? g8MathProgress : g8LitProgress;
    if (isGrade9) return isMath ? g9MathProgress : g9LitProgress;
    if (isGrade10) return isMath ? g10MathProgress : g10LitProgress;
    if (isGrade11) return isMath ? g11MathProgress : g11LitProgress;

    
    if (isGrade8) return isMath ? g8MathWrong : g8LitWrong;
    if (isGrade9) return isMath ? g9MathWrong : g9LitWrong;
    if (isGrade10) return isMath ? g10MathWrong : g10LitWrong;
    if (isGrade11) return isMath ? g11MathWrong : g11LitWrong;

    
    
    if (isGrade1) {
      if (currentSubject === 'vietnamese') setG1TvProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'english') setG1EngProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'science') setG1SciProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'history_geo') setG1HisGeoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'informatics') setG1InfoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'civics') setG1CivProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'technology') setG1TechProgress(prev => updateProgressRecord(prev));
      else setG1MathProgress(prev => updateProgressRecord(prev));
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') setG2TvProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'english') setG2EngProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'science') setG2SciProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'history_geo') setG2HisGeoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'informatics') setG2InfoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'civics') setG2CivProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'technology') setG2TechProgress(prev => updateProgressRecord(prev));
      else setG2MathProgress(prev => updateProgressRecord(prev));
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') setG3TvProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'english') setG3EngProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'science') setG3SciProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'history_geo') setG3HisGeoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'informatics') setG3InfoProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'civics') setG3CivProgress(prev => updateProgressRecord(prev));
      else if (currentSubject === 'technology') setG3TechProgress(prev => updateProgressRecord(prev));
      else setG3MathProgress(prev => updateProgressRecord(prev));
    }

    if (isGrade8) {
      if (isMath) setG8MathProgress(prev => updateProgressRecord(prev));
      else setG8LitProgress(prev => updateProgressRecord(prev));
    }
    if (isGrade9) {
      if (isMath) setG9MathProgress(prev => updateProgressRecord(prev));
      else setG9LitProgress(prev => updateProgressRecord(prev));
    }
    if (isGrade10) {
      if (isMath) setG10MathProgress(prev => updateProgressRecord(prev));
      else setG10LitProgress(prev => updateProgressRecord(prev));
    }
    if (isGrade11) {
      if (isMath) setG11MathProgress(prev => updateProgressRecord(prev));
      else setG11LitProgress(prev => updateProgressRecord(prev));
    }

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return g1TvWrong;
      if (currentSubject === 'english') return g1EngWrong;
      if (currentSubject === 'science') return g1SciWrong;
      if (currentSubject === 'history_geo') return g1HisGeoWrong;
      if (currentSubject === 'informatics') return g1InfoWrong;
      if (currentSubject === 'civics') return g1CivWrong;
      if (currentSubject === 'technology') return g1TechWrong;
      return g1MathWrong;
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return g2TvWrong;
      if (currentSubject === 'english') return g2EngWrong;
      if (currentSubject === 'science') return g2SciWrong;
      if (currentSubject === 'history_geo') return g2HisGeoWrong;
      if (currentSubject === 'informatics') return g2InfoWrong;
      if (currentSubject === 'civics') return g2CivWrong;
      if (currentSubject === 'technology') return g2TechWrong;
      return g2MathWrong;
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return g3TvWrong;
      if (currentSubject === 'english') return g3EngWrong;
      if (currentSubject === 'science') return g3SciWrong;
      if (currentSubject === 'history_geo') return g3HisGeoWrong;
      if (currentSubject === 'informatics') return g3InfoWrong;
      if (currentSubject === 'civics') return g3CivWrong;
      if (currentSubject === 'technology') return g3TechWrong;
      return g3MathWrong;
    }

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return STAGES_TV1;
      if (currentSubject === 'english') return STAGES_ENG1;
      if (currentSubject === 'science') return STAGES_SCI1;
      if (currentSubject === 'history_geo') return STAGES_HISGEO1;
      if (currentSubject === 'informatics') return STAGES_INFO1;
      if (currentSubject === 'civics') return STAGES_CIV1;
      if (currentSubject === 'technology') return STAGES_TECH1;
      return STAGES_MATH1;
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return STAGES_TV2;
      if (currentSubject === 'english') return STAGES_ENG2;
      if (currentSubject === 'science') return STAGES_SCI2;
      if (currentSubject === 'history_geo') return STAGES_HISGEO2;
      if (currentSubject === 'informatics') return STAGES_INFO2;
      if (currentSubject === 'civics') return STAGES_CIV2;
      if (currentSubject === 'technology') return STAGES_TECH2;
      return STAGES_MATH2;
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return STAGES_TV3;
      if (currentSubject === 'english') return STAGES_ENG3;
      if (currentSubject === 'science') return STAGES_SCI3;
      if (currentSubject === 'history_geo') return STAGES_HISGEO3;
      if (currentSubject === 'informatics') return STAGES_INFO3;
      if (currentSubject === 'civics') return STAGES_CIV3;
      if (currentSubject === 'technology') return STAGES_TECH3;
      return STAGES_MATH3;
    }

    if (isGrade8) return isMath ? STAGES_MATH8 : STAGES_LIT8;
    if (isGrade9) return isMath ? STAGES_MATH9 : STAGES_LIT9;
    if (isGrade10) return isMath ? STAGES_MATH10 : STAGES_LIT10;
    if (isGrade11) return isMath ? STAGES_MATH11 : STAGES_LIT11;

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return TOPIC_CATEGORIES_TV1;
      if (currentSubject === 'english') return TOPIC_CATEGORIES_ENG1;
      if (currentSubject === 'science') return TOPIC_CATEGORIES_SCI1;
      if (currentSubject === 'history_geo') return TOPIC_CATEGORIES_HISGEO1;
      if (currentSubject === 'informatics') return TOPIC_CATEGORIES_INFO1;
      if (currentSubject === 'civics') return TOPIC_CATEGORIES_CIV1;
      if (currentSubject === 'technology') return TOPIC_CATEGORIES_TECH1;
      return TOPIC_CATEGORIES_MATH1;
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return TOPIC_CATEGORIES_TV2;
      if (currentSubject === 'english') return TOPIC_CATEGORIES_ENG2;
      if (currentSubject === 'science') return TOPIC_CATEGORIES_SCI2;
      if (currentSubject === 'history_geo') return TOPIC_CATEGORIES_HISGEO2;
      if (currentSubject === 'informatics') return TOPIC_CATEGORIES_INFO2;
      if (currentSubject === 'civics') return TOPIC_CATEGORIES_CIV2;
      if (currentSubject === 'technology') return TOPIC_CATEGORIES_TECH2;
      return TOPIC_CATEGORIES_MATH2;
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return TOPIC_CATEGORIES_TV3;
      if (currentSubject === 'english') return TOPIC_CATEGORIES_ENG3;
      if (currentSubject === 'science') return TOPIC_CATEGORIES_SCI3;
      if (currentSubject === 'history_geo') return TOPIC_CATEGORIES_HISGEO3;
      if (currentSubject === 'informatics') return TOPIC_CATEGORIES_INFO3;
      if (currentSubject === 'civics') return TOPIC_CATEGORIES_CIV3;
      if (currentSubject === 'technology') return TOPIC_CATEGORIES_TECH3;
      return TOPIC_CATEGORIES_MATH3;
    }

    if (isGrade8) return isMath ? TOPIC_CATEGORIES_MATH8 : TOPIC_CATEGORIES_LIT8;
    if (isGrade9) return isMath ? TOPIC_CATEGORIES_MATH9 : TOPIC_CATEGORIES_LIT9;
    if (isGrade10) return isMath ? TOPIC_CATEGORIES_MATH10 : TOPIC_CATEGORIES_LIT10;
    if (isGrade11) return isMath ? TOPIC_CATEGORIES_MATH11 : TOPIC_CATEGORIES_LIT11;

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return WEEKS_METADATA_TV1;
      if (currentSubject === 'english') return WEEKS_METADATA_ENG1;
      if (currentSubject === 'science') return WEEKS_METADATA_SCI1;
      if (currentSubject === 'history_geo') return WEEKS_METADATA_HISGEO1;
      if (currentSubject === 'informatics') return WEEKS_METADATA_INFO1;
      if (currentSubject === 'civics') return WEEKS_METADATA_CIV1;
      if (currentSubject === 'technology') return WEEKS_METADATA_TECH1;
      return WEEKS_METADATA_MATH1;
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return WEEKS_METADATA_TV2;
      if (currentSubject === 'english') return WEEKS_METADATA_ENG2;
      if (currentSubject === 'science') return WEEKS_METADATA_SCI2;
      if (currentSubject === 'history_geo') return WEEKS_METADATA_HISGEO2;
      if (currentSubject === 'informatics') return WEEKS_METADATA_INFO2;
      if (currentSubject === 'civics') return WEEKS_METADATA_CIV2;
      if (currentSubject === 'technology') return WEEKS_METADATA_TECH2;
      return WEEKS_METADATA_MATH2;
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return WEEKS_METADATA_TV3;
      if (currentSubject === 'english') return WEEKS_METADATA_ENG3;
      if (currentSubject === 'science') return WEEKS_METADATA_SCI3;
      if (currentSubject === 'history_geo') return WEEKS_METADATA_HISGEO3;
      if (currentSubject === 'informatics') return WEEKS_METADATA_INFO3;
      if (currentSubject === 'civics') return WEEKS_METADATA_CIV3;
      if (currentSubject === 'technology') return WEEKS_METADATA_TECH3;
      return WEEKS_METADATA_MATH3;
    }

    if (isGrade8) return isMath ? WEEKS_METADATA_MATH8 : WEEKS_METADATA_LIT8;
    if (isGrade9) return isMath ? WEEKS_METADATA_MATH9 : WEEKS_METADATA_LIT9;
    if (isGrade10) return isMath ? WEEKS_METADATA_MATH10 : WEEKS_METADATA_LIT10;
    if (isGrade11) return isMath ? WEEKS_METADATA_MATH11 : WEEKS_METADATA_LIT11;

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return getQuestionsByWeekTV1(weekNum);
      if (currentSubject === 'english') return getQuestionsByWeekEng1(weekNum);
      if (currentSubject === 'science') return getQuestionsByWeekSci1(weekNum);
      if (currentSubject === 'history_geo') return getQuestionsByWeekHisGeo1(weekNum);
      if (currentSubject === 'informatics') return getQuestionsByWeekInfo1(weekNum);
      if (currentSubject === 'civics') return getQuestionsByWeekCiv1(weekNum);
      if (currentSubject === 'technology') return getQuestionsByWeekTech1(weekNum);
      return getQuestionsByWeekMath1(weekNum);
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return getQuestionsByWeekTV2(weekNum);
      if (currentSubject === 'english') return getQuestionsByWeekEng2(weekNum);
      if (currentSubject === 'science') return getQuestionsByWeekSci2(weekNum);
      if (currentSubject === 'history_geo') return getQuestionsByWeekHisGeo2(weekNum);
      if (currentSubject === 'informatics') return getQuestionsByWeekInfo2(weekNum);
      if (currentSubject === 'civics') return getQuestionsByWeekCiv2(weekNum);
      if (currentSubject === 'technology') return getQuestionsByWeekTech2(weekNum);
      return getQuestionsByWeekMath2(weekNum);
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return getQuestionsByWeekTV3(weekNum);
      if (currentSubject === 'english') return getQuestionsByWeekEng3(weekNum);
      if (currentSubject === 'science') return getQuestionsByWeekSci3(weekNum);
      if (currentSubject === 'history_geo') return getQuestionsByWeekHisGeo3(weekNum);
      if (currentSubject === 'informatics') return getQuestionsByWeekInfo3(weekNum);
      if (currentSubject === 'civics') return getQuestionsByWeekCiv3(weekNum);
      if (currentSubject === 'technology') return getQuestionsByWeekTech3(weekNum);
      return getQuestionsByWeekMath3(weekNum);
    }

    if (isGrade8) return isMath ? getQuestionsByWeekMath8(weekNum) : getQuestionsByWeekLit8(weekNum);
    if (isGrade9) return isMath ? getQuestionsByWeekMath9(weekNum) : getQuestionsByWeekLit9(weekNum);
    if (isGrade10) return isMath ? getQuestionsByWeekMath10(weekNum) : getQuestionsByWeekLit10(weekNum);
    if (isGrade11) return isMath ? getQuestionsByWeekMath11(weekNum) : getQuestionsByWeekLit11(weekNum);

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
    if (isGrade1) {
      if (currentSubject === 'vietnamese') return getFilteredQuestionsTV1(params);
      if (currentSubject === 'english') return getFilteredQuestionsEng1(params);
      if (currentSubject === 'science') return getFilteredQuestionsSci1(params);
      if (currentSubject === 'history_geo') return getFilteredQuestionsHisGeo1(params);
      if (currentSubject === 'informatics') return getFilteredQuestionsInfo1(params);
      if (currentSubject === 'civics') return getFilteredQuestionsCiv1(params);
      if (currentSubject === 'technology') return getFilteredQuestionsTech1(params);
      return getFilteredQuestionsMath1(params);
    }
    if (isGrade2) {
      if (currentSubject === 'vietnamese') return getFilteredQuestionsTV2(params);
      if (currentSubject === 'english') return getFilteredQuestionsEng2(params);
      if (currentSubject === 'science') return getFilteredQuestionsSci2(params);
      if (currentSubject === 'history_geo') return getFilteredQuestionsHisGeo2(params);
      if (currentSubject === 'informatics') return getFilteredQuestionsInfo2(params);
      if (currentSubject === 'civics') return getFilteredQuestionsCiv2(params);
      if (currentSubject === 'technology') return getFilteredQuestionsTech2(params);
      return getFilteredQuestionsMath2(params);
    }
    if (isGrade3) {
      if (currentSubject === 'vietnamese') return getFilteredQuestionsTV3(params);
      if (currentSubject === 'english') return getFilteredQuestionsEng3(params);
      if (currentSubject === 'science') return getFilteredQuestionsSci3(params);
      if (currentSubject === 'history_geo') return getFilteredQuestionsHisGeo3(params);
      if (currentSubject === 'informatics') return getFilteredQuestionsInfo3(params);
      if (currentSubject === 'civics') return getFilteredQuestionsCiv3(params);
      if (currentSubject === 'technology') return getFilteredQuestionsTech3(params);
      return getFilteredQuestionsMath3(params);
    }

    if (isGrade8) return isMath ? getFilteredQuestionsMath8(params) : getFilteredQuestionsLit8(params);
    if (isGrade9) return isMath ? getFilteredQuestionsMath9(params) : getFilteredQuestionsLit9(params);
    if (isGrade10) return isMath ? getFilteredQuestionsMath10(params) : getFilteredQuestionsLit10(params);
    if (isGrade11) return isMath ? getFilteredQuestionsMath11(params) : getFilteredQuestionsLit11(params);

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
        isGrade1,
    isGrade2,
    isGrade3,
    isPrimaryChuot,
    GRADE_PRIMARY_SUBJECTS,
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
        verifyParentPin,
        // Member Management & RBAC
        membersList,
        activeAdminUser,
        addMember,
        updateMemberPermissions,
        updateMemberPassword,
        toggleMemberStatus,
        deleteMember,
        switchActiveUser,
        availableClasses: AVAILABLE_CLASSES,
        systemRoles: SYSTEM_ROLES
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
