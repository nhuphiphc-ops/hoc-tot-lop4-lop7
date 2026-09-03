// Dữ liệu môn Tiếng Anh Lớp 6
export const STAGES_ENG6 = [
  {
    "id": 1,
    "title": "Chặng 1: Khởi động",
    "weeks": [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    "id": 2,
    "title": "Chặng 2: Khám phá",
    "weeks": [10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    "id": 3,
    "title": "Chặng 3: Bứt phá",
    "weeks": [19, 20, 21, 22, 23, 24, 25, 26, 27]
  },
  {
    "id": 4,
    "title": "Chặng 4: Chinh phục",
    "weeks": [28, 29, 30, 31, 32, 33, 34, 35]
  }
];

export const WEEKS_METADATA_ENG6 = {
  "1": { "title": "Bài Học Tuần 1", "desc": "Nắm vững kiến thức tuần 1 chuẩn GDPT 2018." },
  "2": { "title": "Bài Học Tuần 2", "desc": "Nắm vững kiến thức tuần 2 chuẩn GDPT 2018." },
  "3": { "title": "Bài Học Tuần 3", "desc": "Nắm vững kiến thức tuần 3 chuẩn GDPT 2018." },
  "4": { "title": "Bài Học Tuần 4", "desc": "Nắm vững kiến thức tuần 4 chuẩn GDPT 2018." }
};

export const TOPIC_CATEGORIES_ENG6 = [
  { id: "all", label: "Tất cả chủ đề", icon: "📚" },
  { id: "knowledge", label: "Kiến thức trọng tâm", icon: "🎯" }
];

export const QUESTION_BANK_ENG6 = [
  {
    "id": "Eng6_W1_Q1",
    "week": 1,
    "type": "multiple-choice",
    "question": "Câu hỏi ôn tập tuần 1 - Tiếng Anh Lớp 6 (GDPT 2018) số 1?",
    "options": ["A", "B", "C", "D"],
    "answer": "A",
    "explanation": "Giải thích câu 1 tuần 1.",
    "category": "knowledge"
  },
  {
    "id": "Eng6_W1_Q2",
    "week": 1,
    "type": "multiple-choice",
    "question": "Câu hỏi ôn tập tuần 1 - Tiếng Anh Lớp 6 (GDPT 2018) số 2?",
    "options": ["A", "B", "C", "D"],
    "answer": "B",
    "explanation": "Giải thích câu 2 tuần 1.",
    "category": "knowledge"
  },
  {
    "id": "Eng6_W2_Q1",
    "week": 2,
    "type": "multiple-choice",
    "question": "Câu hỏi ôn tập tuần 2 - Tiếng Anh Lớp 6 (GDPT 2018) số 1?",
    "options": ["A", "B", "C", "D"],
    "answer": "A",
    "explanation": "Giải thích câu 1 tuần 2.",
    "category": "knowledge"
  }
];

export const getQuestionsByWeekEng6 = (week) => {
  return QUESTION_BANK_ENG6.filter(q => q.week === parseInt(week));
};

export const getFilteredQuestionsEng6 = ({ category, week }) => {
  let filtered = QUESTION_BANK_ENG6;
  if (category && category !== 'all') {
    filtered = filtered.filter(q => q.category === category);
  }
  if (week) {
    filtered = filtered.filter(q => q.week === parseInt(week));
  }
  return filtered;
};
