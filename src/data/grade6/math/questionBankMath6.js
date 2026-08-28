// TOÁN LỚP 6 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_MATH6_QUESTIONS } from './stages/stage1_math6.js';
import { STAGE_2_MATH6_QUESTIONS } from './stages/stage2_math6.js';
import { STAGE_3_MATH6_QUESTIONS } from './stages/stage3_math6.js';
import { STAGE_4_MATH6_QUESTIONS } from './stages/stage4_math6.js';

export const QUESTION_BANK_MATH6 = [
  ...STAGE_1_MATH6_QUESTIONS,
  ...STAGE_2_MATH6_QUESTIONS,
  ...STAGE_3_MATH6_QUESTIONS,
  ...STAGE_4_MATH6_QUESTIONS
];

export const STAGES_MATH6 = [
  {
    id: 1,
    title: "Chặng 1: Số Tự Nhiên & Tính Chia Hết",
    weeks: "Tuần 1 - Tuần 9",
    desc: "Tập hợp N, lũy thừa, thứ tự phép tính, dấu hiệu chia hết, số nguyên tố, ƯCLN & BCNN",
    badge: "Bậc Thầy Số Tự Nhiên",
    color: "from-blue-500 to-indigo-600",
    theme: "blue"
  },
  {
    id: 2,
    title: "Chặng 2: Số Nguyên Z & Hình Học Trực Quan",
    weeks: "Tuần 10 - Tuần 18",
    desc: "Tập hợp Z, cộng trừ nhân chia số nguyên, quy tắc dấu ngoặc, hình tam giác đều, hình vuông, lục giác đều",
    badge: "Chinh Phục Số Nguyên Z",
    color: "from-indigo-500 to-purple-600",
    theme: "indigo"
  },
  {
    id: 3,
    title: "Chặng 3: Phân Số, Số Thập Phân & Tính Đối Xứng",
    weeks: "Tuần 19 - Tuần 27",
    desc: "Phân số âm, phép tính phân số, số thập phân, tỉ số phần trăm, trục đối xứng và tâm đối xứng",
    badge: "Kỳ Thủ Phân Số & Hình Phẳng",
    color: "from-teal-500 to-emerald-600",
    theme: "teal"
  },
  {
    id: 4,
    title: "Chặng 4: Điểm, Đoạn Thẳng, Góc & Xác Suất",
    weeks: "Tuần 28 - Tuần 35",
    desc: "Điểm, đường thẳng, tia, góc, bảng thống kê dữ liệu, xác suất thực nghiệm, ôn thi cuối năm",
    badge: "Thần Đồng Toán Lớp 6",
    color: "from-orange-500 to-amber-600",
    theme: "orange"
  }
];

export const TOPIC_CATEGORIES_MATH6 = [
  { id: 'natural_numbers', name: 'Số Tự Nhiên & Lũy Thừa', icon: 'Calculator', color: 'bg-blue-100 text-blue-800' },
  { id: 'divisibility', name: 'Tính Chia Hết & Số Nguyên Tố', icon: 'Sparkles', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'integers', name: 'Tập Hợp Số Nguyên Z', icon: 'Layers', color: 'bg-purple-100 text-purple-800' },
  { id: 'fractions6', name: 'Phân Số & Số Thập Phân', icon: 'TrendingUp', color: 'bg-teal-100 text-teal-800' },
  { id: 'geometry6', name: 'Hình Học Trực Quan & Điểm, Đoạn', icon: 'Shapes', color: 'bg-amber-100 text-amber-800' },
  { id: 'statistics6', name: 'Thống Kê & Xác Suất Thực Nghiệm', icon: 'BarChart3', color: 'bg-emerald-100 text-emerald-800' }
];

export const WEEKS_METADATA_MATH6 = {
  "1": {
    "title": "Tập hợp các số tự nhiên N & Phần tử của tập hợp",
    "topic": "Tập hợp N",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Phép tính cộng, trừ, nhân, chia trong tập N",
    "topic": "Phép tính số tự nhiên",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Lũy thừa với số mũ tự nhiên & Nhân chia lũy thừa",
    "topic": "Lũy thừa",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Thứ tự thực hiện các phép tính trong biểu thức",
    "topic": "Thứ tự phép tính",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "topic": "Tính chất chia hết",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "topic": "Dấu hiệu chia hết",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "topic": "Số nguyên tố",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "Ước chung, ƯCLN & Bội chung, BCNN",
    "topic": "ƯCLN và BCNN",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1 (Toán 6)",
    "topic": "Tổng hợp Chặng 1",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Tập hợp số nguyên Z & Biểu diễn trên trục số, Số đối",
    "topic": "Tập hợp số nguyên Z",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "So sánh các số nguyên & Thứ tự trong tập hợp Z",
    "topic": "So sánh số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Phép cộng hai số nguyên (cùng dấu và khác dấu)",
    "topic": "Cộng số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Phép trừ số nguyên & Quy tắc dấu ngoặc",
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Phép nhân số nguyên & Tính chất phép nhân",
    "topic": "Nhân số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Phép chia hết, Ước và Bội của một số nguyên",
    "topic": "Ước và bội trong Z",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Hình học trực quan: Tam giác đều, Hình vuông, Lục giác đều",
    "topic": "Hình học trực quan 1",
    "cat": "geometry6",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Hình học trực quan: Hình chữ nhật, Hình thoi, Hình bình hành, Hình thang cân",
    "topic": "Hình học trực quan 2",
    "cat": "geometry6",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Toán 6)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Phân số với tử và mẫu số nguyên & Phân số bằng nhau",
    "topic": "Khái niệm phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Tính chất cơ bản của phân số & Rút gọn phân số tối giản",
    "topic": "Tính chất phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Quy đồng mẫu nhiều phân số & So sánh phân số",
    "topic": "So sánh phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Phép cộng và phép trừ phân số (Số đối của phân số)",
    "topic": "Cộng trừ phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Phép nhân và phép chia phân số (Số nghịch đảo)",
    "topic": "Nhân chia phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Hỗn số & Hai bài toán thực tế về phân số",
    "topic": "Bài toán phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Số thập phân, Các phép tính với số thập phân & Làm tròn",
    "topic": "Số thập phân",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Tỉ số và Tỉ số phần trăm trong thực tiễn",
    "topic": "Tỉ số phần trăm",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Tính đối xứng: Hình có trục đối xứng & Tâm đối xứng",
    "topic": "Tính đối xứng",
    "cat": "geometry6",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Điểm, Đường thẳng, Điểm thuộc đường thẳng & Ba điểm thẳng hàng",
    "topic": "Điểm và đường thẳng",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Hai đường thẳng cắt nhau, song song & Khái niệm Tia",
    "topic": "Đường thẳng và Tia",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Đoạn thẳng, Độ dài đoạn thẳng & Trung điểm của đoạn thẳng",
    "topic": "Đoạn thẳng & Trung điểm",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Góc, Các góc đặc biệt (Nhọn, Vuông, Tù, Bẹt) & Số đo góc",
    "topic": "Góc và số đo góc",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, Biểu đồ cột kép",
    "topic": "Thống kê dữ liệu",
    "cat": "statistics6",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Kết quả có thể, Sự kiện & Xác suất thực nghiệm",
    "topic": "Xác suất thực nghiệm",
    "cat": "statistics6",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Số học, Đại số, Hình học & Thống kê Lớp 6",
    "topic": "Tổng hợp cuối năm",
    "cat": "natural_numbers",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Khảo sát Đánh giá Năng lực Cuối năm & Chinh phục Toán 7",
    "topic": "Đề thi Chuyển cấp",
    "cat": "integers",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekMath6 = (weekNum) => {
  return QUESTION_BANK_MATH6.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsMath6 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_MATH6];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
