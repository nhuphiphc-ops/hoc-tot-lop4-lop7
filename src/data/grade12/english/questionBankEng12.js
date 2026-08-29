// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TIẾNG ANH 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_ENG12 = [
  {
    "id": 1,
    "title": "Stage 1: Famous People & Urbanisation & Green Movement",
    "range": "Week 1 - Week 9",
    "desc": "Past tenses, subjunctive mood, gerunds and participles",
    "icon": "BookOpen",
    "color": "from-emerald-600 to-teal-700"
  },
  {
    "id": 2,
    "title": "Stage 2: Career Paths & ASEAN & Artificial Intelligence",
    "range": "Week 10 - Week 18",
    "desc": "Cleft sentences, passives with modals, causatives",
    "icon": "Compass",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 3,
    "title": "Stage 3: Lifelong Learning & Cultural Diversity",
    "range": "Week 19 - Week 27",
    "desc": "Conditionals, inversion, relative clauses with prepositions",
    "icon": "Award",
    "color": "from-purple-600 to-pink-600"
  },
  {
    "id": 4,
    "title": "Stage 4: National Graduation Mock Tests 2026",
    "range": "Week 28 - Week 35",
    "desc": "Full length mock tests and high-frequency exam drill",
    "icon": "GraduationCap",
    "color": "from-amber-600 to-orange-600"
  }
];

export const TOPIC_CATEGORIES_ENG12 = [
  {
    "id": "theory",
    "name": "Nhận Biết & Định Lí",
    "color": "bg-blue-100 text-blue-800"
  },
  {
    "id": "application",
    "name": "Thông Hiểu & Tính Toán",
    "color": "bg-emerald-100 text-emerald-800"
  },
  {
    "id": "advanced",
    "name": "Vận Dụng Nâng Cao",
    "color": "bg-purple-100 text-purple-800"
  },
  {
    "id": "exam",
    "name": "Đề Thi Tốt Nghiệp THPT",
    "color": "bg-amber-100 text-amber-800"
  }
];

export const WEEKS_METADATA_ENG12 = {
  "1": {
    "title": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "stageId": 1,
    "category": "theory",
    "desc": "Xét dấu đạo hàm y' để tìm khoảng tăng, giảm của hàm số."
  },
  "2": {
    "title": "Cực trị của hàm số và điểm uốn",
    "stageId": 1,
    "category": "theory",
    "desc": "Tìm cực đại, cực tiểu và các bài toán chứa tham số m."
  },
  "3": {
    "title": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "stageId": 1,
    "category": "application",
    "desc": "Tìm Max/Min trên đoạn [a; b] và bài toán tối ưu thực tế."
  },
  "4": {
    "title": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "stageId": 1,
    "category": "theory",
    "desc": "Xác định tiệm cận của hàm phân thức bậc 1/bậc 1 và bậc 2/bậc 1 theo GDPT 2026."
  },
  "5": {
    "title": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "stageId": 1,
    "category": "application",
    "desc": "Nhận dạng đồ thị, bảng biến thiên và tương giao đồ thị."
  },
  "6": {
    "title": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "stageId": 1,
    "category": "advanced",
    "desc": "Bài toán chi phí tối thiểu, thể tích cực đại trong đời sống."
  },
  "7": {
    "title": "Vectơ trong không gian và các phép toán vectơ",
    "stageId": 1,
    "category": "theory",
    "desc": "Quy tắc hình hộp, tích vô hướng của hai vectơ trong không gian."
  },
  "8": {
    "title": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "stageId": 1,
    "category": "application",
    "desc": "Tìm tọa độ điểm, trung điểm, trọng tâm tam giác, độ dài đoạn thẳng."
  },
  "9": {
    "title": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "stageId": 1,
    "category": "advanced",
    "desc": "Công thức tích có hướng, diện tích tam giác và thể tích tứ diện."
  },
  "10": {
    "title": "Phương trình mặt phẳng trong không gian Oxyz",
    "stageId": 2,
    "category": "theory",
    "desc": "Vectơ pháp tuyến, viết phương trình mặt phẳng đi qua điểm hoặc 3 điểm."
  },
  "11": {
    "title": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "stageId": 2,
    "category": "application",
    "desc": "Điều kiện song song, vuông góc và tính góc giữa 2 mặt phẳng."
  },
  "12": {
    "title": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "stageId": 2,
    "category": "application",
    "desc": "Công thức tính khoảng cách d(M, (P)) và khoảng cách 2 mp song song."
  },
  "13": {
    "title": "Phương trình mặt cầu trong không gian Oxyz",
    "stageId": 2,
    "category": "theory",
    "desc": "Xác định tâm I(a; b; c) và bán kính R, lập phương trình mặt cầu."
  },
  "14": {
    "title": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "stageId": 2,
    "category": "advanced",
    "desc": "Điều kiện tiếp xúc d = R, cắt nhau theo đường tròn d < R."
  },
  "15": {
    "title": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "stageId": 2,
    "category": "exam",
    "desc": "Ma trận đề thi tổng hợp Học kỳ I chuẩn GDPT 2026."
  },
  "16": {
    "title": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "stageId": 2,
    "category": "theory",
    "desc": "Bảng nguyên hàm của đa thức, lượng giác, mũ, logarit."
  },
  "17": {
    "title": "Phương pháp đổi biến số để tìm nguyên hàm",
    "stageId": 2,
    "category": "application",
    "desc": "Đặt ẩn phụ u = u(x) để tìm nguyên hàm phức tạp."
  },
  "18": {
    "title": "Phương pháp nguyên hàm từng phần",
    "stageId": 2,
    "category": "advanced",
    "desc": "Công thức ∫u dv = uv - ∫v du và thứ tự chọn u."
  },
  "19": {
    "title": "Khái niệm tích phân và công thức Newton - Leibniz",
    "stageId": 3,
    "category": "theory",
    "desc": "Tính chất tích phân và tính tích phân cơ bản."
  },
  "20": {
    "title": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "stageId": 3,
    "category": "application",
    "desc": "Kỹ thuật đổi cận và tính tích phân hàm ẩn."
  },
  "21": {
    "title": "Ứng dụng tích phân tính diện tích hình phẳng",
    "stageId": 3,
    "category": "application",
    "desc": "Diện tích giới hạn bởi các đường cong và trục tọa độ."
  },
  "22": {
    "title": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "stageId": 3,
    "category": "advanced",
    "desc": "Công thức V = π ∫[f(x)]² dx khi quay quanh trục Ox."
  },
  "23": {
    "title": "Khái niệm xác suất có điều kiện và công thức nhân",
    "stageId": 3,
    "category": "theory",
    "desc": "Công thức P(A|B) = P(AB)/P(B) trong bài toán thực tế."
  },
  "24": {
    "title": "Công thức xác suất toàn phần và công thức Bayes",
    "stageId": 3,
    "category": "advanced",
    "desc": "Tính xác suất biến cố và suy diễn xác suất hậu nghiệm (Bayes)."
  },
  "25": {
    "title": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "stageId": 3,
    "category": "theory",
    "desc": "Xác định nhóm, tần số, khoảng biến thiên R và khoảng tứ phân vị ΔQ."
  },
  "26": {
    "title": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "stageId": 3,
    "category": "application",
    "desc": "Tính giá trị đại diện, số trung bình, phương sai s² và độ lệch chuẩn s."
  },
  "27": {
    "title": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "stageId": 3,
    "category": "advanced",
    "desc": "Tổng hợp các bài toán kết hợp giải tích và thống kê ghép nhóm."
  },
  "28": {
    "title": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "stageId": 4,
    "category": "exam",
    "desc": "10 câu trắc nghiệm chuẩn cấu trúc đề thi Quốc gia phân môn Giải tích."
  },
  "29": {
    "title": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "stageId": 4,
    "category": "exam",
    "desc": "10 câu trắc nghiệm chuẩn cấu trúc đề thi Quốc gia phân môn Hình học Oxyz."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "stageId": 4,
    "category": "exam",
    "desc": "10 câu trắc nghiệm Tích phân ứng dụng và Xác suất hiện đại."
  },
  "31": {
    "title": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "stageId": 4,
    "category": "exam",
    "desc": "Đề thi thử tổng hợp số 1 bao quát 4 chuyên đề trọng tâm."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "stageId": 4,
    "category": "exam",
    "desc": "Đề thi thử tổng hợp số 2 rèn kỹ năng phân bổ thời gian và chống bẫy."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "stageId": 4,
    "category": "exam",
    "desc": "Đề thi thử tổng hợp số 3 nâng cao tư duy vận dụng thực tiễn."
  },
  "34": {
    "title": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "stageId": 4,
    "category": "exam",
    "desc": "Phương pháp loại trừ, bấm máy tính Casio và kiểm tra ngược."
  },
  "35": {
    "title": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "stageId": 4,
    "category": "exam",
    "desc": "Bản đồ tư duy toàn bộ kiến thức 12 dành cho Nguyễn Nhật Minh."
  }
};

export const QUESTION_BANK_ENG12 = [
  {
    "id": "E12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 1 - Q1] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 1 - Q2] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 1 - Q3] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 1 - Q4] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 1 - Q5] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 1 - Q6] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 1 - Q7] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 1 - Q8] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 1 - Q9] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 1 - Q10] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 2 - Q1] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 2 - Q2] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 2 - Q3] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 2 - Q4] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 2 - Q5] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 2 - Q6] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 2 - Q7] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 2 - Q8] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 2 - Q9] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 2 - Q10] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 3 - Q1] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 3 - Q2] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 3 - Q3] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 3 - Q4] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 3 - Q5] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 3 - Q6] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 3 - Q7] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 3 - Q8] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 3 - Q9] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 3 - Q10] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 4 - Q1] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 4 - Q2] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 4 - Q3] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 4 - Q4] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 4 - Q5] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 4 - Q6] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 4 - Q7] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 4 - Q8] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 4 - Q9] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 4 - Q10] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 5 - Q1] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 5 - Q2] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 5 - Q3] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 5 - Q4] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 5 - Q5] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 5 - Q6] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 5 - Q7] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 5 - Q8] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 5 - Q9] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 5 - Q10] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 6 - Q1] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 6 - Q2] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 6 - Q3] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 6 - Q4] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 6 - Q5] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 6 - Q6] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 6 - Q7] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 6 - Q8] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 6 - Q9] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 6 - Q10] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 7 - Q1] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 7 - Q2] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 7 - Q3] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 7 - Q4] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 7 - Q5] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 7 - Q6] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 7 - Q7] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 7 - Q8] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 7 - Q9] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 7 - Q10] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 8 - Q1] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 8 - Q2] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 8 - Q3] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 8 - Q4] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 8 - Q5] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 8 - Q6] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 8 - Q7] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 8 - Q8] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 8 - Q9] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 8 - Q10] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 9 - Q1] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 9 - Q2] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 9 - Q3] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 9 - Q4] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 9 - Q5] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 9 - Q6] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 9 - Q7] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 9 - Q8] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 9 - Q9] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "English 12 Unit / Week 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 9 - Q10] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 10 - Q1] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 10 - Q2] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 10 - Q3] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 10 - Q4] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 10 - Q5] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 10 - Q6] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 10 - Q7] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 10 - Q8] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 10 - Q9] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 10 - Q10] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 11 - Q1] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 11 - Q2] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 11 - Q3] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 11 - Q4] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 11 - Q5] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 11 - Q6] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 11 - Q7] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 11 - Q8] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 11 - Q9] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 11 - Q10] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 12 - Q1] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 12 - Q2] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 12 - Q3] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 12 - Q4] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 12 - Q5] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 12 - Q6] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 12 - Q7] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 12 - Q8] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 12 - Q9] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 12 - Q10] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 13 - Q1] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 13 - Q2] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 13 - Q3] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 13 - Q4] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 13 - Q5] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 13 - Q6] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 13 - Q7] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 13 - Q8] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 13 - Q9] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 13 - Q10] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 14 - Q1] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 14 - Q2] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 14 - Q3] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 14 - Q4] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 14 - Q5] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 14 - Q6] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 14 - Q7] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 14 - Q8] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 14 - Q9] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 14 - Q10] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 15 - Q1] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 15 - Q2] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 15 - Q3] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 15 - Q4] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 15 - Q5] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 15 - Q6] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 15 - Q7] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 15 - Q8] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 15 - Q9] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 15 - Q10] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 16 - Q1] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 16 - Q2] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 16 - Q3] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 16 - Q4] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 16 - Q5] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 16 - Q6] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 16 - Q7] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 16 - Q8] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 16 - Q9] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 16 - Q10] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 17 - Q1] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 17 - Q2] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 17 - Q3] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 17 - Q4] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 17 - Q5] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 17 - Q6] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 17 - Q7] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 17 - Q8] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 17 - Q9] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 17 - Q10] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 18 - Q1] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 18 - Q2] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 18 - Q3] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 18 - Q4] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 18 - Q5] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 18 - Q6] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 18 - Q7] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 18 - Q8] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 18 - Q9] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "English 12 Unit / Week 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 18 - Q10] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 19 - Q1] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 19 - Q2] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 19 - Q3] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 19 - Q4] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 19 - Q5] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 19 - Q6] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 19 - Q7] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 19 - Q8] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 19 - Q9] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 19 - Q10] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 20 - Q1] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 20 - Q2] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 20 - Q3] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 20 - Q4] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 20 - Q5] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 20 - Q6] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 20 - Q7] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 20 - Q8] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 20 - Q9] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 20 - Q10] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 21 - Q1] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 21 - Q2] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 21 - Q3] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 21 - Q4] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 21 - Q5] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 21 - Q6] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 21 - Q7] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 21 - Q8] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 21 - Q9] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 21 - Q10] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 22 - Q1] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 22 - Q2] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 22 - Q3] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 22 - Q4] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 22 - Q5] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 22 - Q6] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 22 - Q7] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 22 - Q8] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 22 - Q9] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 22 - Q10] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 23 - Q1] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 23 - Q2] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 23 - Q3] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 23 - Q4] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 23 - Q5] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 23 - Q6] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 23 - Q7] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 23 - Q8] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 23 - Q9] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 23 - Q10] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 24 - Q1] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 24 - Q2] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 24 - Q3] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 24 - Q4] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 24 - Q5] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 24 - Q6] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 24 - Q7] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 24 - Q8] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 24 - Q9] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 24 - Q10] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 25 - Q1] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 25 - Q2] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 25 - Q3] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 25 - Q4] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 25 - Q5] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 25 - Q6] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 25 - Q7] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 25 - Q8] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 25 - Q9] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 25 - Q10] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 26 - Q1] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 26 - Q2] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 26 - Q3] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 26 - Q4] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 26 - Q5] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 26 - Q6] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 26 - Q7] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 26 - Q8] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 26 - Q9] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 26 - Q10] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 27 - Q1] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 27 - Q2] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 27 - Q3] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 27 - Q4] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 27 - Q5] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 27 - Q6] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 27 - Q7] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 27 - Q8] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 27 - Q9] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "English 12 Unit / Week 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[English 12 - Week 27 - Q10] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 28 - Q1] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 28 - Q2] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 28 - Q3] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 28 - Q4] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 28 - Q5] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 28 - Q6] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 28 - Q7] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 28 - Q8] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 28 - Q9] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 28 - Q10] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 29 - Q1] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 29 - Q2] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 29 - Q3] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 29 - Q4] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 29 - Q5] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 29 - Q6] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 29 - Q7] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 29 - Q8] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 29 - Q9] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 29 - Q10] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 30 - Q1] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 30 - Q2] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 30 - Q3] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 30 - Q4] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 30 - Q5] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 30 - Q6] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 30 - Q7] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 30 - Q8] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 30 - Q9] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 30 - Q10] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 31 - Q1] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 31 - Q2] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 31 - Q3] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 31 - Q4] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 31 - Q5] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 31 - Q6] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 31 - Q7] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 31 - Q8] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 31 - Q9] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 31 - Q10] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 32 - Q1] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 32 - Q2] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 32 - Q3] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 32 - Q4] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 32 - Q5] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 32 - Q6] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 32 - Q7] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 32 - Q8] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 32 - Q9] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 32 - Q10] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 33 - Q1] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 33 - Q2] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 33 - Q3] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 33 - Q4] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 33 - Q5] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 33 - Q6] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 33 - Q7] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 33 - Q8] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 33 - Q9] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 33 - Q10] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 34 - Q1] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 34 - Q2] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 34 - Q3] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  },
  {
    "id": "E12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 34 - Q4] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 34 - Q5] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 34 - Q6] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 34 - Q7] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 34 - Q8] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 34 - Q9] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 34 - Q10] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 35 - Q1] Artificial Intelligence is playing an increasingly _______ role in diagnosing critical medical conditions.",
    "options": [
      "pivotal",
      "trivial",
      "doubtful",
      "hesitant"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm collocations: play a pivotal/vital role (đóng vai trò then chốt/quan trọng)."
  },
  {
    "id": "E12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 35 - Q2] Choose the word whose STRESS pattern is placed on the second syllable:",
    "options": [
      "con'tribute",
      "'character",
      "'applicant",
      "'conference"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: con'tribute nhấn trọng âm rơi vào âm tiết thứ 2, các từ còn lại nhấn âm 1."
  },
  {
    "id": "E12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[English 12 - Week 35 - Q3] The government has implemented strict policies to cut _______ on greenhouse gas emissions.",
    "options": [
      "down",
      "off",
      "up",
      "out"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cụm phrasal verb: cut down on (cắt giảm cái gì)."
  },
  {
    "id": "E12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[English 12 - Week 35 - Q4] \"Would you mind helping me with this mathematics assignment?\" - \"_______\"",
    "options": [
      "Not at all. Let's look at it together.",
      "Yes, I would.",
      "No problem, you're welcome.",
      "I mind very much."
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đáp lại lịch sự cho 'Would you mind...?': 'Not at all' (Không sao cả, mình sẵn sàng giúp)."
  },
  {
    "id": "E12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 35 - Q5] When I _______ (walk) into the classroom, the teacher _______ (already / explain) the grammar rules.",
    "options": [
      "walked / had already explained",
      "was walking / explained",
      "walked / has explained",
      "had walked / was explaining"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Hành động ngắn xen vào quá khứ (Past Simple) khi một hành động đã hoàn tất trước đó (Past Perfect)."
  },
  {
    "id": "E12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 35 - Q6] If he _______ (study) harder last semester, he _______ (pass) the national examination with flying colours.",
    "options": [
      "had studied / would have passed",
      "studied / would pass",
      "has studied / will pass",
      "had studied / will pass"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + had + P2, S + would have + P2."
  },
  {
    "id": "E12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[English 12 - Week 35 - Q7] It was in 1945 _______ President Ho Chi Minh read the Declaration of Independence at Ba Dinh Square.",
    "options": [
      "that",
      "which",
      "where",
      "when"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Cấu trúc câu chẻ nhấn mạnh thời gian: It is/was + Trạng ngữ + THAT + S + V."
  },
  {
    "id": "E12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[English 12 - Week 35 - Q8] The doctor recommended that the patient _______ (stop) smoking immediately to improve lung health.",
    "options": [
      "stop",
      "stops",
      "stopped",
      "to stop"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Thức giả định sau động từ recommend/suggest: S + recommend + that + S + (should) + V(nguyên thể)."
  },
  {
    "id": "E12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 35 - Q9] _______ from high school with excellent academic achievements, Minh was awarded a prestigious university scholarship.",
    "options": [
      "Having graduated",
      "Graduated",
      "Graduating",
      "To graduate"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Rút gọn mệnh đề trạng ngữ bằng phân từ hoàn thành (Having + P2) khi hành động tốt nghiệp xảy ra trước."
  },
  {
    "id": "E12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "English 12 Unit / Week 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[English 12 - Week 35 - Q10] Seldom _______ such an impressive and emotionally captivating speech about climate change.",
    "options": [
      "have I heard",
      "I have heard",
      "did I heard",
      "I had heard"
    ],
    "correctIndex": 0,
    "hint": "Focus on sentence structure, tense consistency and word choice for Grade 12 National Exam.",
    "explanation": "Detailed explanation: Đảo ngữ với trạng từ phủ định Seldom: Seldom + Trợ động từ + S + V."
  }
];

export const getQuestionsByWeekEng12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_ENG12.filter(q => q.week === num);
};

export const getFilteredQuestionsEng12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_ENG12];
  if (semester && semester !== 'all') {
    list = list.filter(q => q.semester === parseInt(semester, 10));
  }
  if (stage && stage !== 'all') {
    list = list.filter(q => q.stage === parseInt(stage, 10));
  }
  if (category && category !== 'all') {
    list = list.filter(q => q.category === category);
  }
  if (difficulty && difficulty !== 'all') {
    list = list.filter(q => q.difficulty === difficulty);
  }
  return list.slice(0, count);
};
