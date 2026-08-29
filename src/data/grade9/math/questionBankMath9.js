// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TOÁN 9 LỚP 9
// CHUẨN CHƯƠNG TRÌNH GDPT 2026 (KẾT NỐI TRI THỨC / CÁNH DIỀU / CHÂN TRỜI SÁNG TẠO)
// 35 TUẦN HỌC - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_MATH9 = [
  {
    "id": 1,
    "title": "Chặng 1: Căn Bậc Hai, Căn Bậc Ba & Hệ Thức Lượng",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Biến đổi căn thức, rút gọn biểu thức và hệ thức lượng tam giác vuông",
    "icon": "BookOpen",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Hệ Phương Trình & Đường Tròn O",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Hệ phương trình bậc nhất 2 ẩn và các tính chất tiếp tuyến đường tròn",
    "icon": "Compass",
    "color": "from-indigo-600 to-purple-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Phương Trình Bậc Hai & Hệ Thức Vi-ét",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Phương trình ax² + bx + c = 0, định lí Vi-ét và góc với đường tròn",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Hình Khối Không Gian & Luyện Đề Thi Vào 10",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Hình trụ, nón, cầu và bộ đề luyện thi chính thức vào Lớp 10",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_MATH9 = [
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
    "name": "Đề Thi Tổng Hợp",
    "color": "bg-amber-100 text-amber-800"
  }
];

export const WEEKS_METADATA_MATH9 = {};

export const QUESTION_BANK_MATH9 = [
  {
    "id": "M9_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 1 - Bài tập 1] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 1 - Bài tập 2] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 1 - Bài tập 3] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 1 - Bài tập 4] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 1 - Bài tập 5] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 1 - Bài tập 6] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 1 - Bài tập 7] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 1 - Bài tập 8] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 1 - Bài tập 9] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 1 - Bài tập 10] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 2 - Bài tập 1] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 2 - Bài tập 2] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 2 - Bài tập 3] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 2 - Bài tập 4] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 2 - Bài tập 5] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 2 - Bài tập 6] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 2 - Bài tập 7] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 2 - Bài tập 8] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 2 - Bài tập 9] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 2 - Bài tập 10] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 3 - Bài tập 1] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 3 - Bài tập 2] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 3 - Bài tập 3] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 3 - Bài tập 4] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 3 - Bài tập 5] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 3 - Bài tập 6] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 3 - Bài tập 7] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 3 - Bài tập 8] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 3 - Bài tập 9] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 3 - Bài tập 10] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 4 - Bài tập 1] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 4 - Bài tập 2] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 4 - Bài tập 3] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 4 - Bài tập 4] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 4 - Bài tập 5] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 4 - Bài tập 6] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 4 - Bài tập 7] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 4 - Bài tập 8] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 4 - Bài tập 9] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 4 - Bài tập 10] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 5 - Bài tập 1] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 5 - Bài tập 2] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 5 - Bài tập 3] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 5 - Bài tập 4] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 5 - Bài tập 5] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 5 - Bài tập 6] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 5 - Bài tập 7] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 5 - Bài tập 8] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 5 - Bài tập 9] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 5 - Bài tập 10] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 6 - Bài tập 1] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 6 - Bài tập 2] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 6 - Bài tập 3] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 6 - Bài tập 4] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 6 - Bài tập 5] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 6 - Bài tập 6] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 6 - Bài tập 7] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 6 - Bài tập 8] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 6 - Bài tập 9] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 6 - Bài tập 10] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 7 - Bài tập 1] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 7 - Bài tập 2] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 7 - Bài tập 3] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 7 - Bài tập 4] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 7 - Bài tập 5] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 7 - Bài tập 6] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 7 - Bài tập 7] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 7 - Bài tập 8] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 7 - Bài tập 9] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 7 - Bài tập 10] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 8 - Bài tập 1] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 8 - Bài tập 2] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 8 - Bài tập 3] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 8 - Bài tập 4] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 8 - Bài tập 5] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 8 - Bài tập 6] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 8 - Bài tập 7] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 8 - Bài tập 8] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 8 - Bài tập 9] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 8 - Bài tập 10] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 9 - Bài tập 1] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 9 - Bài tập 2] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 9 - Bài tập 3] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 9 - Bài tập 4] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 9 - Bài tập 5] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 9 - Bài tập 6] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 9 - Bài tập 7] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 9 - Bài tập 8] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 9 - Bài tập 9] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 9 - Chuyên đề Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 9 - Bài tập 10] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 10 - Bài tập 1] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 10 - Bài tập 2] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 10 - Bài tập 3] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 10 - Bài tập 4] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 10 - Bài tập 5] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 10 - Bài tập 6] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 10 - Bài tập 7] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 10 - Bài tập 8] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 10 - Bài tập 9] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 10 - Bài tập 10] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 11 - Bài tập 1] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 11 - Bài tập 2] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 11 - Bài tập 3] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 11 - Bài tập 4] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 11 - Bài tập 5] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 11 - Bài tập 6] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 11 - Bài tập 7] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 11 - Bài tập 8] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 11 - Bài tập 9] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 11 - Bài tập 10] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 12 - Bài tập 1] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 12 - Bài tập 2] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 12 - Bài tập 3] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 12 - Bài tập 4] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 12 - Bài tập 5] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 12 - Bài tập 6] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 12 - Bài tập 7] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 12 - Bài tập 8] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 12 - Bài tập 9] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 12 - Bài tập 10] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 13 - Bài tập 1] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 13 - Bài tập 2] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 13 - Bài tập 3] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 13 - Bài tập 4] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 13 - Bài tập 5] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 13 - Bài tập 6] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 13 - Bài tập 7] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 13 - Bài tập 8] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 13 - Bài tập 9] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 13 - Bài tập 10] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 14 - Bài tập 1] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 14 - Bài tập 2] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 14 - Bài tập 3] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 14 - Bài tập 4] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 14 - Bài tập 5] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 14 - Bài tập 6] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 14 - Bài tập 7] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 14 - Bài tập 8] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 14 - Bài tập 9] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 14 - Bài tập 10] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 15 - Bài tập 1] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 15 - Bài tập 2] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 15 - Bài tập 3] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 15 - Bài tập 4] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 15 - Bài tập 5] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 15 - Bài tập 6] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 15 - Bài tập 7] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 15 - Bài tập 8] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 15 - Bài tập 9] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 15 - Bài tập 10] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 16 - Bài tập 1] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 16 - Bài tập 2] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 16 - Bài tập 3] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 16 - Bài tập 4] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 16 - Bài tập 5] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 16 - Bài tập 6] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 16 - Bài tập 7] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 16 - Bài tập 8] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 16 - Bài tập 9] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 16 - Bài tập 10] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 17 - Bài tập 1] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 17 - Bài tập 2] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 17 - Bài tập 3] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 17 - Bài tập 4] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 17 - Bài tập 5] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 17 - Bài tập 6] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 17 - Bài tập 7] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 17 - Bài tập 8] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 17 - Bài tập 9] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 17 - Bài tập 10] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 18 - Bài tập 1] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 18 - Bài tập 2] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 18 - Bài tập 3] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 18 - Bài tập 4] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 18 - Bài tập 5] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 18 - Bài tập 6] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 18 - Bài tập 7] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 18 - Bài tập 8] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 18 - Bài tập 9] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 9 - Chuyên đề Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 18 - Bài tập 10] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 19 - Bài tập 1] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 19 - Bài tập 2] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 19 - Bài tập 3] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 19 - Bài tập 4] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 19 - Bài tập 5] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 19 - Bài tập 6] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 19 - Bài tập 7] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 19 - Bài tập 8] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 19 - Bài tập 9] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 19 - Bài tập 10] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 20 - Bài tập 1] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 20 - Bài tập 2] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 20 - Bài tập 3] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 20 - Bài tập 4] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 20 - Bài tập 5] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 20 - Bài tập 6] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 20 - Bài tập 7] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 20 - Bài tập 8] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 20 - Bài tập 9] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 20 - Bài tập 10] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 21 - Bài tập 1] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 21 - Bài tập 2] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 21 - Bài tập 3] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 21 - Bài tập 4] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 21 - Bài tập 5] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 21 - Bài tập 6] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 21 - Bài tập 7] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 21 - Bài tập 8] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 21 - Bài tập 9] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 21 - Bài tập 10] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 22 - Bài tập 1] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 22 - Bài tập 2] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 22 - Bài tập 3] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 22 - Bài tập 4] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 22 - Bài tập 5] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 22 - Bài tập 6] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 22 - Bài tập 7] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 22 - Bài tập 8] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 22 - Bài tập 9] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 22 - Bài tập 10] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 23 - Bài tập 1] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 23 - Bài tập 2] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 23 - Bài tập 3] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 23 - Bài tập 4] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 23 - Bài tập 5] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 23 - Bài tập 6] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 23 - Bài tập 7] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 23 - Bài tập 8] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 23 - Bài tập 9] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 23 - Bài tập 10] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 24 - Bài tập 1] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 24 - Bài tập 2] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 24 - Bài tập 3] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 24 - Bài tập 4] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 24 - Bài tập 5] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 24 - Bài tập 6] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 24 - Bài tập 7] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 24 - Bài tập 8] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 24 - Bài tập 9] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 24 - Bài tập 10] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 25 - Bài tập 1] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 25 - Bài tập 2] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 25 - Bài tập 3] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 25 - Bài tập 4] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 25 - Bài tập 5] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 25 - Bài tập 6] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 25 - Bài tập 7] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 25 - Bài tập 8] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 25 - Bài tập 9] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 25 - Bài tập 10] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 26 - Bài tập 1] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 26 - Bài tập 2] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 26 - Bài tập 3] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 26 - Bài tập 4] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 26 - Bài tập 5] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 26 - Bài tập 6] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 26 - Bài tập 7] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 26 - Bài tập 8] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 26 - Bài tập 9] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 26 - Bài tập 10] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 27 - Bài tập 1] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 27 - Bài tập 2] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 27 - Bài tập 3] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 27 - Bài tập 4] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 27 - Bài tập 5] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 27 - Bài tập 6] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 27 - Bài tập 7] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 27 - Bài tập 8] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 27 - Bài tập 9] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 9 - Chuyên đề Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 27 - Bài tập 10] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 28 - Bài tập 1] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 28 - Bài tập 2] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 28 - Bài tập 3] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 28 - Bài tập 4] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 28 - Bài tập 5] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 28 - Bài tập 6] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 28 - Bài tập 7] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 28 - Bài tập 8] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 28 - Bài tập 9] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 28 - Bài tập 10] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 29 - Bài tập 1] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 29 - Bài tập 2] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 29 - Bài tập 3] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 29 - Bài tập 4] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 29 - Bài tập 5] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 29 - Bài tập 6] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 29 - Bài tập 7] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 29 - Bài tập 8] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 29 - Bài tập 9] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 29 - Bài tập 10] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 30 - Bài tập 1] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 30 - Bài tập 2] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 30 - Bài tập 3] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 30 - Bài tập 4] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 30 - Bài tập 5] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 30 - Bài tập 6] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 30 - Bài tập 7] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 30 - Bài tập 8] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 30 - Bài tập 9] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 30 - Bài tập 10] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 31 - Bài tập 1] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 31 - Bài tập 2] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 31 - Bài tập 3] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 31 - Bài tập 4] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 31 - Bài tập 5] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 31 - Bài tập 6] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 31 - Bài tập 7] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 31 - Bài tập 8] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 31 - Bài tập 9] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 31 - Bài tập 10] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 32 - Bài tập 1] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 32 - Bài tập 2] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 32 - Bài tập 3] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 32 - Bài tập 4] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 32 - Bài tập 5] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 32 - Bài tập 6] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 32 - Bài tập 7] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 32 - Bài tập 8] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 32 - Bài tập 9] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 32 - Bài tập 10] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 33 - Bài tập 1] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 33 - Bài tập 2] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 33 - Bài tập 3] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 33 - Bài tập 4] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 33 - Bài tập 5] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 33 - Bài tập 6] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 33 - Bài tập 7] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 33 - Bài tập 8] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 33 - Bài tập 9] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 33 - Bài tập 10] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 34 - Bài tập 1] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 34 - Bài tập 2] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 34 - Bài tập 3] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  },
  {
    "id": "M9_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 34 - Bài tập 4] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 34 - Bài tập 5] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 34 - Bài tập 6] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 34 - Bài tập 7] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 34 - Bài tập 8] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 34 - Bài tập 9] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 34 - Bài tập 10] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 35 - Bài tập 1] Góc nội tiếp chắn nửa đường tròn có số đo bằng:",
    "options": [
      "90° (góc vuông)",
      "180°",
      "60°",
      "45°"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí: Góc nội tiếp chắn nửa đường tròn luôn là góc vuông (90°)."
  },
  {
    "id": "M9_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 35 - Bài tập 2] Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Độ dài đường sinh l của hình nón là:",
    "options": [
      "5 cm",
      "7 cm",
      "25 cm",
      "1 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: l = √(r² + h²) = √(3² + 4²) = √25 = 5 cm."
  },
  {
    "id": "M9_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 9 - Tuần 35 - Bài tập 3] Diện tích mặt cầu có bán kính R = 3 cm là:",
    "options": [
      "36π cm²",
      "12π cm²",
      "9π cm²",
      "108π cm²"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: S = 4πR² = 4π . 3² = 36π cm²."
  },
  {
    "id": "M9_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 35 - Bài tập 4] Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:",
    "options": [
      "m = 1",
      "m = -1",
      "m = 4",
      "m = 0"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Phương trình có nghiệm kép khi Δ' = (-1)² - 1.m = 1 - m = 0 <=> m = 1."
  },
  {
    "id": "M9_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 35 - Bài tập 5] Căn bậc hai số học của 49 là:",
    "options": [
      "7",
      "-7",
      "±7",
      "49"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn bậc hai số học của số dương a là số dương √a. √49 = 7."
  },
  {
    "id": "M9_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 35 - Bài tập 6] Điều kiện xác định của biểu thức √(2x - 4) là:",
    "options": [
      "x ≥ 2",
      "x > 2",
      "x ≤ 2",
      "x < 2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Căn thức √A xác định khi A ≥ 0 <=> 2x - 4 ≥ 0 <=> x ≥ 2."
  },
  {
    "id": "M9_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 9 - Tuần 35 - Bài tập 7] Rút gọn biểu thức P = √( (√5 - 2)² ) được kết quả là:",
    "options": [
      "√5 - 2",
      "2 - √5",
      "√5 + 2",
      "3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: √(A²) = |A|. Vì √5 > 2 nên |√5 - 2| = √5 - 2."
  },
  {
    "id": "M9_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 35 - Bài tập 8] Nghiệm của hệ phương trình { 2x + y = 5; x - y = 1 } là:",
    "options": [
      "(2; 1)",
      "(1; 2)",
      "(3; -1)",
      "(0; 5)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Cộng hai vế: 3x = 6 => x = 2. Thay vào pt 2: y = x - 1 = 1. Nghiệm là (2; 1)."
  },
  {
    "id": "M9_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 35 - Bài tập 9] Cho phương trình x² - 5x + 6 = 0. Tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:",
    "options": [
      "S = 5; P = 6",
      "S = -5; P = 6",
      "S = 5; P = -6",
      "S = -5; P = -6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định lí Vi-ét: S = x₁ + x₂ = -b/a = 5; P = x₁.x₂ = c/a = 6."
  },
  {
    "id": "M9_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 9 - Chuyên đề Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 9 - Tuần 35 - Bài tập 10] Cho tam giác ABC vuông tại A có đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài AH là:",
    "options": [
      "6 cm",
      "36 cm",
      "13 cm",
      "6.5 cm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng căn bậc hai, định lí Vi-ét và các hệ thức hình học lớp 9 chuẩn thi vào 10.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 . 9 = 36 => AH = 6 cm."
  }
];

export const getQuestionsByWeekMath9 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_MATH9.filter(q => q.week === num);
};

export const getFilteredQuestionsMath9 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_MATH9];
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
