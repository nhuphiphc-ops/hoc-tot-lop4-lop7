// NGỮ VĂN LỚP 6 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_LIT6_QUESTIONS } from './stages/stage1_lit6.js';
import { STAGE_2_LIT6_QUESTIONS } from './stages/stage2_lit6.js';
import { STAGE_3_LIT6_QUESTIONS } from './stages/stage3_lit6.js';
import { STAGE_4_LIT6_QUESTIONS } from './stages/stage4_lit6.js';

export const QUESTION_BANK_LIT6 = [
  ...STAGE_1_LIT6_QUESTIONS,
  ...STAGE_2_LIT6_QUESTIONS,
  ...STAGE_3_LIT6_QUESTIONS,
  ...STAGE_4_LIT6_QUESTIONS
];

export const STAGES_LIT6 = [
  {
    id: 1,
    title: "Chặng 1: Truyện Dân Gian & Truyện Đồng Thoại",
    weeks: "Tuần 1 - Tuần 9",
    desc: "Truyền thuyết, cổ tích, truyện đồng thoại, từ đơn/từ phức, biện pháp so sánh và nhân hóa",
    badge: "Nhà Kể Chuyện Dân Gian",
    color: "from-rose-500 to-red-600",
    theme: "rose"
  },
  {
    id: 2,
    title: "Chặng 2: Thơ Lục Bát, Tu Từ & Nghị Luận",
    weeks: "Tuần 10 - Tuần 18",
    desc: "Thơ lục bát, ẩn dụ, hoán dụ, văn bản nghị luận, thành ngữ và mở rộng cụm từ trong câu",
    badge: "Kỳ Thủ Cảm Thụ Lục Bát",
    color: "from-pink-500 to-rose-600",
    theme: "pink"
  },
  {
    id: 3,
    title: "Chặng 3: Thể Loại Ký, Thơ Tự Do & Thông Tin",
    weeks: "Tuần 19 - Tuần 27",
    desc: "Ký du ký, thơ tự do, điệp từ, dấu chấm phẩy, văn bản thông tin về môi trường và lịch sử",
    badge: "Cây Bút Du Ký Nhí",
    color: "from-purple-500 to-indigo-600",
    theme: "purple"
  },
  {
    id: 4,
    title: "Chặng 4: Trải Nghiệm, Viết Văn & Về Đích",
    weeks: "Tuần 28 - Tuần 35",
    desc: "Giữ gìn sự trong sáng tiếng Việt, viết văn tự sự, biểu cảm, tổng ôn tập và chinh phục Lớp 7",
    badge: "Nhà Văn Trẻ Triển Vọng",
    color: "from-indigo-500 to-blue-600",
    theme: "indigo"
  }
];

export const TOPIC_CATEGORIES_LIT6 = [
  { id: 'story', name: 'Truyện Dân Gian & Đồng Thoại', icon: 'BookOpen', color: 'bg-rose-100 text-rose-800' },
  { id: 'poetry', name: 'Thơ Lục Bát & Thơ Tự Do', icon: 'Feather', color: 'bg-pink-100 text-pink-800' },
  { id: 'vietnamese', name: 'Thực Hành Tiếng Việt & Tu Từ', icon: 'Sparkles', color: 'bg-purple-100 text-purple-800' },
  { id: 'argument', name: 'Văn Bản Nghị Luận', icon: 'Layers', color: 'bg-blue-100 text-blue-800' },
  { id: 'reading6', name: 'Ký & Văn Bản Thông Tin', icon: 'BookMarked', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'writing', name: 'Kỹ Năng Viết & Thuyết Trình', icon: 'Edit3', color: 'bg-amber-100 text-amber-800' }
];

export const WEEKS_METADATA_LIT6 = {
  "1": {
    "title": "Truyện truyền thuyết & Cổ tích (Thánh Gióng, Thạch Sanh)",
    "topic": "Truyện dân gian",
    "cat": "story",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Cốt truyện, nhân vật & Chi tiết kỳ ảo trong truyện cổ",
    "topic": "Yếu tố truyện dân gian",
    "cat": "story",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Từ đơn & Từ phức (Từ ghép đẳng lập, chính phụ, Từ láy)",
    "topic": "Từ đơn và từ phức",
    "cat": "vietnamese",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Nghĩa của từ trong ngữ cảnh & Biện pháp tu từ So sánh",
    "topic": "So sánh & Nghĩa từ",
    "cat": "vietnamese",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Truyện đồng thoại (Bài học đường đời đầu tiên - Dế Mèn)",
    "topic": "Truyện đồng thoại",
    "cat": "story",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Người kể chuyện ngôi thứ nhất & Ngôi thứ ba",
    "topic": "Ngôi kể truyện",
    "cat": "story",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Biện pháp tu từ Nhân hóa & Tác dụng gợi cảm",
    "topic": "Biện pháp nhân hóa",
    "cat": "vietnamese",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "Viết đoạn văn ghi lại cảm xúc về bài thơ, câu chuyện",
    "topic": "Viết đoạn biểu cảm",
    "cat": "writing",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1 (Ngữ Văn 6)",
    "topic": "Tổng hợp Chặng 1",
    "cat": "story",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Thơ lục bát: Cấu trúc vần, nhịp & Thanh điệu",
    "topic": "Thể thơ lục bát",
    "cat": "poetry",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "Đọc hiểu thơ lục bát về Tình cảm gia đình & Quê hương",
    "topic": "Thơ quê hương gia đình",
    "cat": "poetry",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Biện pháp tu từ Ẩn dụ (Khái niệm & Các kiểu ẩn dụ)",
    "topic": "Biện pháp ẩn dụ",
    "cat": "vietnamese",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Biện pháp tu từ Hoán dụ & Phân biệt Ẩn dụ - Hoán dụ",
    "topic": "Biện pháp hoán dụ",
    "cat": "vietnamese",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Văn bản nghị luận: Ý kiến, Lý lẽ & Dẫn chứng thuyết phục",
    "topic": "Văn bản nghị luận",
    "cat": "argument",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Đọc hiểu văn bản nghị luận (Xem người ta kìa, Học thầy học bạn)",
    "topic": "Đọc hiểu nghị luận",
    "cat": "argument",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Thành ngữ & Điển tích điển cố trong Tiếng Việt",
    "topic": "Thành ngữ tiếng Việt",
    "cat": "vietnamese",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Mở rộng thành phần chính của câu bằng cụm từ (Cụm danh/động/tính)",
    "topic": "Mở rộng câu",
    "cat": "vietnamese",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Ngữ Văn 6)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "poetry",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Thể loại Ký và Du ký (Đồng Tháp Mười mùa nước nổi)",
    "topic": "Thể loại ký du ký",
    "cat": "reading6",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Ngôi kể & Cái tôi của người viết trong tác phẩm Ký",
    "topic": "Cái tôi trong ký",
    "cat": "reading6",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Lựa chọn từ ngữ & Cấu trúc câu phù hợp ngữ cảnh",
    "topic": "Lựa chọn từ ngữ",
    "cat": "vietnamese",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Thơ tự do có yếu tố tự sự & Miêu tả (Lượm, Gấu con chân vòng kiềng)",
    "topic": "Thơ tự sự miêu tả",
    "cat": "poetry",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Biện pháp tu từ Điệp từ, Điệp ngữ & Chơi chữ",
    "topic": "Điệp từ & Chơi chữ",
    "cat": "vietnamese",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Dấu câu trong văn bản: Dấu chấm phẩy & Dấu ngoặc đơn",
    "topic": "Dấu chấm phẩy & ngoặc đơn",
    "cat": "vietnamese",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Văn bản thông tin: Tóm tắt thông tin chính & Cấu trúc văn bản",
    "topic": "Văn bản thông tin",
    "cat": "reading6",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Đọc hiểu văn bản thông tin về Môi trường & Lịch sử văn hóa",
    "topic": "Đọc hiểu thông tin",
    "cat": "reading6",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Ôn tập Chặng 3 & Kiểm tra giữa Học kỳ 2",
    "topic": "Tổng hợp Chặng 3",
    "cat": "reading6",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Trải nghiệm cuộc sống & Đọc hiểu văn bản hiện đại",
    "topic": "Văn bản trải nghiệm",
    "cat": "reading6",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng & Từ mượn",
    "topic": "Từ mượn tiếng Việt",
    "cat": "vietnamese",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Thực hành Tiếng Việt: Nghĩa bóng của từ & Biểu tượng nghệ thuật",
    "topic": "Nghĩa bóng & Biểu tượng",
    "cat": "vietnamese",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Kỹ năng tóm tắt văn bản & Thuyết trình tự tin",
    "topic": "Tóm tắt & Thuyết trình",
    "cat": "writing",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Kỹ năng viết bài văn tự sự & Bài văn biểu cảm",
    "topic": "Viết văn tự sự biểu cảm",
    "cat": "writing",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Ôn tập tổng hợp Tiếng Việt Lớp 6 (Từ loại, Cụm từ, Tu từ, Dấu câu)",
    "topic": "Tổng hợp Tiếng Việt",
    "cat": "vietnamese",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Văn bản nghệ thuật, Nghị luận & Thông tin",
    "topic": "Tổng hợp văn bản",
    "cat": "reading6",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Khảo sát Đánh giá Năng lực Cuối năm & Chinh phục Ngữ Văn 7",
    "topic": "Đề thi Chuyển cấp",
    "cat": "poetry",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekLit6 = (weekNum) => {
  return QUESTION_BANK_LIT6.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsLit6 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_LIT6];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
