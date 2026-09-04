// TIẾNG VIỆT LỚP 5 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_TV5_QUESTIONS } from './stages/stage1_tv5.js';
import { STAGE_2_TV5_QUESTIONS } from './stages/stage2_tv5.js';
import { STAGE_3_TV5_QUESTIONS } from './stages/stage3_tv5.js';
import { STAGE_4_TV5_QUESTIONS } from './stages/stage4_tv5.js';

export const QUESTION_BANK_TV5 = [
  ...STAGE_1_TV5_QUESTIONS,
  ...STAGE_2_TV5_QUESTIONS,
  ...STAGE_3_TV5_QUESTIONS,
  ...STAGE_4_TV5_QUESTIONS
];

export const STAGES_TV5 = [
  {
    id: 1,
    title: "Chặng 1: Nghĩa Của Từ & Vốn Từ Tổ Quốc",
    subtitle: "Tuần 1 - Tuần 9",
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    semester: 1,
    icon: "Rocket",
    badge: "Bậc Thầy Nghĩa Của Từ",
    color: "from-rose-400 to-pink-500",
    description: "Từ đồng nghĩa, từ trái nghĩa, từ đồng âm, từ nhiều nghĩa, vốn từ Tổ quốc và Nhân dân."
  },
  {
    id: 2,
    title: "Chặng 2: Đại Từ, Quan Hệ Từ & Cảm Thụ Văn Học",
    subtitle: "Tuần 10 - Tuần 18 (Ôn thi HK1)",
    weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    semester: 1,
    icon: "Target",
    badge: "Nhà Ngôn Ngữ Học Trẻ Tuổi",
    color: "from-pink-400 to-purple-500",
    description: "Đại từ, các cặp quan hệ từ, biện pháp tu từ so sánh, nhân hóa, điệp ngữ, đọc hiểu cảm thụ."
  },
  {
    id: 3,
    title: "Chặng 3: Câu Ghép & Kỹ Năng Liên Kết Câu",
    subtitle: "Tuần 19 - Tuần 27",
    weeks: [19, 20, 21, 22, 23, 24, 25, 26, 27],
    semester: 2,
    icon: "Sparkles",
    badge: "Kiến Trúc Sư Câu Ghép",
    color: "from-purple-400 to-indigo-500",
    description: "Khái niệm câu ghép, nối vế câu ghép bằng từ hô ứng, liên kết câu bằng lặp từ, thay thế từ, từ nối."
  },
  {
    id: 4,
    title: "Chặng 4: Dấu Câu, Tổng Hợp Từ Loại & Về Đích",
    subtitle: "Tuần 28 - Tuần 35 (Ôn thi HK2)",
    weeks: [28, 29, 30, 31, 32, 33, 34, 35],
    semester: 2,
    icon: "Trophy",
    badge: "Trạng Nguyên Tiếng Việt 5",
    color: "from-indigo-400 to-blue-500",
    description: "Quy tắc dấu câu, tổng hợp từ loại, biện pháp nghệ thuật, đề khảo sát chuyển cấp Lớp 6."
  }
];

export const TOPIC_CATEGORIES_TV5 = [
  { id: 'vocab', name: 'Nghĩa Của Từ & Mở Rộng Vốn Từ', icon: 'BookMarked', color: 'bg-rose-100 text-rose-800' },
  { id: 'grammar', name: 'Từ Loại, Đại Từ & Quan Hệ Từ', icon: 'Sparkles', color: 'bg-purple-100 text-purple-800' },
  { id: 'sentences', name: 'Câu Ghép & Vế Câu', icon: 'Layers', color: 'bg-blue-100 text-blue-800' },
  { id: 'linking', name: 'Liên Kết Câu & Đoạn Văn', icon: 'Zap', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'punctuation', name: 'Quy Tắc Dấu Câu', icon: 'Edit3', color: 'bg-amber-100 text-amber-800' },
  { id: 'reading', name: 'Đọc Hiểu & Cảm Thụ Văn Học', icon: 'BookOpen', color: 'bg-pink-100 text-pink-800' }
];

export const WEEKS_METADATA_TV5 = {
  "1": {
    "title": "Từ đồng nghĩa & Phân loại từ đồng nghĩa",
    "topic": "Từ đồng nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Luyện tập về từ đồng nghĩa & Đặt câu diễn đạt",
    "topic": "Luyện tập từ đồng nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Từ trái nghĩa & Tác dụng trong diễn đạt tương phản",
    "topic": "Từ trái nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Luyện tập về từ trái nghĩa & Thành ngữ, tục ngữ",
    "topic": "Thành ngữ tục ngữ trái nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Từ đồng âm & Phân biệt từ đồng âm với từ nhiều nghĩa",
    "topic": "Từ đồng âm",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Từ nhiều nghĩa (Nghĩa gốc và các nét nghĩa chuyển)",
    "topic": "Từ nhiều nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Luyện tập về từ nhiều nghĩa & Cảm thụ ngôn từ",
    "topic": "Cảm thụ từ nhiều nghĩa",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "Mở rộng vốn từ: Tổ quốc, Nhân dân & Quê hương",
    "topic": "Chủ điểm Tổ quốc",
    "cat": "reading",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1",
    "topic": "Tổng hợp Chặng 1",
    "cat": "vocab",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Đại từ & Các loại đại từ (Đại từ xưng hô, thay thế)",
    "topic": "Đại từ",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "Quan hệ từ & Cặp từ chỉ Nguyên nhân - Kết quả",
    "topic": "Quan hệ từ nguyên nhân",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Cặp quan hệ từ chỉ Điều kiện - Kết quả, Giả thiết",
    "topic": "Quan hệ từ điều kiện",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Cặp quan hệ từ chỉ Sự tương phản & Nhượng bộ",
    "topic": "Quan hệ từ tương phản",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Cặp quan hệ từ chỉ Quan hệ tăng tiến (Không những... mà...)",
    "topic": "Quan hệ từ tăng tiến",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Mở rộng vốn từ: Bảo vệ môi trường & Giữ gìn thiên nhiên",
    "topic": "Môi trường",
    "cat": "reading",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Biện pháp tu từ: So sánh, Nhân hóa & Điệp ngữ",
    "topic": "Biện pháp tu từ",
    "cat": "reading",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Đọc hiểu văn bản & Rèn luyện kỹ năng cảm thụ thơ văn",
    "topic": "Cảm thụ văn học",
    "cat": "reading",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Tiếng Việt 5)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "grammar",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Khái niệm Câu ghép & Phân biệt câu đơn, câu ghép",
    "topic": "Câu ghép",
    "cat": "sentences",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Cách nối các vế câu ghép bằng quan hệ từ",
    "topic": "Nối vế câu ghép",
    "cat": "sentences",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Nối các vế câu ghép bằng cặp từ hô ứng (vừa... đã, càng... càng)",
    "topic": "Cặp từ hô ứng",
    "cat": "sentences",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Mở rộng vốn từ: Công dân & Ý thức trách nhiệm",
    "topic": "Chủ điểm Công dân",
    "cat": "reading",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Liên kết câu trong đoạn văn bằng cách Lặp từ ngữ",
    "topic": "Liên kết lặp từ",
    "cat": "linking",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Liên kết câu trong đoạn văn bằng cách Thay thế từ ngữ",
    "topic": "Liên kết thay thế",
    "cat": "linking",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Liên kết câu trong đoạn văn bằng Từ ngữ nối",
    "topic": "Liên kết từ nối",
    "cat": "linking",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Mở rộng vốn từ: Trật tự - An ninh & Truyền thống dân tộc",
    "topic": "Truyền thống",
    "cat": "reading",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Ôn tập Chặng 3 & Kiểm tra giữa Học kỳ 2",
    "topic": "Tổng hợp Câu ghép & Liên kết",
    "cat": "sentences",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Ôn tập Dấu câu: Dấu chấm, Dấu hỏi, Dấu chấm than",
    "topic": "Dấu kết thúc câu",
    "cat": "punctuation",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Ôn tập Dấu câu: Dấu phẩy & Các tác dụng ngăn cách",
    "topic": "Dấu phẩy",
    "cat": "punctuation",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Ôn tập Dấu câu: Dấu hai chấm & Dấu ngoặc kép",
    "topic": "Dấu hai chấm & ngoặc kép",
    "cat": "punctuation",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Mở rộng vốn từ: Nam và Nữ & Bình đẳng giới",
    "topic": "Nam và Nữ",
    "cat": "reading",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Mở rộng vốn từ: Trẻ em & Quyền và bổn phận của trẻ em",
    "topic": "Trẻ em",
    "cat": "reading",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Ôn tập tổng hợp Từ loại (Danh, Động, Tính, Đại từ, Quan hệ từ)",
    "topic": "Tổng hợp từ loại",
    "cat": "grammar",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Câu, Biện pháp tu từ & Cảm thụ văn học",
    "topic": "Tổng hợp câu & tu từ",
    "cat": "reading",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Khảo sát Đánh giá Năng lực Cuối năm & Chinh phục Lớp 6",
    "topic": "Đề thi Chuyển cấp",
    "cat": "reading",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekTV5 = (weekNum) => {
  return QUESTION_BANK_TV5.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsTV5 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_TV5];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
