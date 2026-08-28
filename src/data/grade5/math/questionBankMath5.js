// TOÁN LỚP 5 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_MATH5_QUESTIONS } from './stages/stage1_math5.js';
import { STAGE_2_MATH5_QUESTIONS } from './stages/stage2_math5.js';
import { STAGE_3_MATH5_QUESTIONS } from './stages/stage3_math5.js';
import { STAGE_4_MATH5_QUESTIONS } from './stages/stage4_math5.js';

export const QUESTION_BANK_MATH5 = [
  ...STAGE_1_MATH5_QUESTIONS,
  ...STAGE_2_MATH5_QUESTIONS,
  ...STAGE_3_MATH5_QUESTIONS,
  ...STAGE_4_MATH5_QUESTIONS
];

export const STAGES_MATH5 = [
  {
    id: 1,
    title: "Chặng 1: Ôn Tập Phân Số & Bảng Đơn Vị Đo",
    subtitle: "Tuần 1 - Tuần 9",
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    semester: 1,
    icon: "Rocket",
    badge: "Bậc Thầy Đo Lường & Phân Số",
    color: "from-amber-400 to-orange-500",
    description: "Phân số thập phân, bảng đơn vị đo độ dài, khối lượng, diện tích, khái niệm số thập phân."
  },
  {
    id: 2,
    title: "Chặng 2: Số Thập Phân & Tỉ Số Phần Trăm",
    subtitle: "Tuần 10 - Tuần 18 (Ôn thi HK1)",
    weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    semester: 1,
    icon: "Target",
    badge: "Kỳ Thủ Số Thập Phân",
    color: "from-emerald-400 to-teal-500",
    description: "4 phép tính số thập phân, nhân chia nhẩm, tỉ số phần trăm và giải toán thực tế."
  },
  {
    id: 3,
    title: "Chặng 3: Hình Học & Đo Thể Tích Khối Hộp",
    subtitle: "Tuần 19 - Tuần 27",
    weeks: [19, 20, 21, 22, 23, 24, 25, 26, 27],
    semester: 2,
    icon: "Sparkles",
    badge: "Kiến Trúc Sư Không Gian",
    color: "from-blue-400 to-indigo-500",
    description: "Hình tam giác, hình thang, hình tròn, diện tích & thể tích hình hộp chữ nhật, lập phương."
  },
  {
    id: 4,
    title: "Chặng 4: Toán Chuyển Động & Chinh Phục Lớp 6",
    subtitle: "Tuần 28 - Tuần 35 (Ôn thi HK2)",
    weeks: [28, 29, 30, 31, 32, 33, 34, 35],
    semester: 2,
    icon: "Trophy",
    badge: "Thần Tốc Chinh Phục Lớp 6",
    color: "from-purple-400 to-pink-500",
    description: "Vận tốc, quãng đường, thời gian, chuyển động cùng chiều/ngược chiều/dòng nước, ôn tập cuối cấp."
  }
];

export const TOPIC_CATEGORIES_MATH5 = [
  { id: 'fractions', name: 'Phân Số & Hỗn Số', icon: 'Calculator', color: 'bg-amber-100 text-amber-800' },
  { id: 'measurement', name: 'Bảng Đơn Vị Đo', icon: 'Layers', color: 'bg-orange-100 text-orange-800' },
  { id: 'decimals', name: 'Số Thập Phân', icon: 'Sparkles', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'percentage', name: 'Tỉ Số Phần Trăm', icon: 'TrendingUp', color: 'bg-teal-100 text-teal-800' },
  { id: 'geometry', name: 'Hình Học & Mặt Phẳng', icon: 'Shapes', color: 'bg-blue-100 text-blue-800' },
  { id: 'volume', name: 'Thể Tích Khối Hộp', icon: 'Box', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'motion', name: 'Toán Chuyển Động Đều', icon: 'Zap', color: 'bg-purple-100 text-purple-800' }
];

export const WEEKS_METADATA_MATH5 = {
  "1": {
    "title": "Ôn tập & Khái niệm Phân số thập phân",
    "topic": "Phân số thập phân",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Phép cộng & trừ phân số nâng cao",
    "topic": "Cộng trừ phân số",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Phép nhân, chia phân số & Hỗn số",
    "topic": "Nhân chia phân số & Hỗn số",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Bảng đơn vị đo độ dài & Ứng dụng",
    "topic": "Đơn vị đo độ dài",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Bảng đơn vị đo khối lượng (tấn, tạ, yến, kg)",
    "topic": "Đơn vị đo khối lượng",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Bảng đơn vị đo diện tích & Héc-ta (ha)",
    "topic": "Đơn vị đo diện tích",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Khái niệm & Hàng của số thập phân",
    "topic": "Số thập phân",
    "cat": "decimals",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "So sánh & Làm tròn số thập phân",
    "topic": "So sánh số thập phân",
    "cat": "decimals",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1",
    "topic": "Tổng hợp Chặng 1",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Phép cộng & phép trừ số thập phân",
    "topic": "Cộng trừ số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "Phép nhân số thập phân (với số tự nhiên & số thập phân)",
    "topic": "Nhân số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Nhân nhẩm số thập phân với 10, 100, 0.1, 0.01",
    "topic": "Nhân nhẩm số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Phép chia số thập phân cho số tự nhiên",
    "topic": "Chia số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Chia số tự nhiên cho số tự nhiên thương là số thập phân",
    "topic": "Chia số tự nhiên ra số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Phép chia một số cho số thập phân",
    "topic": "Chia cho số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Khái niệm & Tìm tỉ số phần trăm của hai số",
    "topic": "Tỉ số phần trăm",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Giải toán về tỉ số phần trăm (Dạng 2 & Dạng 3)",
    "topic": "Giải toán tỉ số phần trăm",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Toán 5)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Hình tam giác & Diện tích hình tam giác",
    "topic": "Hình tam giác",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Hình thang & Diện tích hình thang",
    "topic": "Hình thang",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Hình tròn, Chu vi & Diện tích hình tròn",
    "topic": "Hình tròn",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Biểu đồ hình quạt tròn & Bảng số liệu thống kê",
    "topic": "Biểu đồ quạt tròn",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Diện tích xung quanh & Toàn phần Hình hộp chữ nhật",
    "topic": "Hình hộp chữ nhật",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Diện tích xung quanh & Toàn phần Hình lập phương",
    "topic": "Hình lập phương",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Thể tích một hình & Đơn vị đo thể tích (cm3, dm3, m3)",
    "topic": "Đơn vị đo thể tích",
    "cat": "volume",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Thể tích hình hộp chữ nhật & Hình lập phương",
    "topic": "Tính thể tích khối hộp",
    "cat": "volume",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Ôn tập Chặng 3 & Kiểm tra giữa Học kỳ 2",
    "topic": "Tổng hợp Hình học & Thể tích",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "topic": "Số đo thời gian",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Toán Chuyển động đều - Tính Vận tốc (v = s : t)",
    "topic": "Vận tốc",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Toán Chuyển động đều - Tính Quãng đường (s) & Thời gian (t)",
    "topic": "Quãng đường và Thời gian",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Chuyển động cùng chiều (Đuổi kịp) & Ngược chiều (Gặp nhau)",
    "topic": "Chuyển động hai vật",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Chuyển động trên dòng nước (Vận tốc xuôi/ngược dòng)",
    "topic": "Chuyển động dòng nước",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Ôn tập tổng hợp Số học, Phân số, Số thập phân & Đo lường",
    "topic": "Ôn tập số học cuối cấp",
    "cat": "decimals",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Hình học, Thể tích & Toán chuyển động",
    "topic": "Ôn tập hình học & chuyển động",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Đánh giá Năng lực Cuối năm & Chinh phục Lớp 6",
    "topic": "Đề thi Chuyển cấp",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekMath5 = (weekNum) => {
  return QUESTION_BANK_MATH5.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsMath5 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_MATH5];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
