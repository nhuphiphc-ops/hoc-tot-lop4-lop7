// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TOÁN 3 LỚP 3
// DÀNH CHO BÉ CHUỘT - CHUẨN CHƯƠNG TRÌNH TIỂU HỌC GDPT 2026
// 35 TUẦN HỌC - 350 BÀI TẬP TRỰC QUAN, TƯ DUY SINH ĐỘNG & LỜI GIẢI CHI TIẾT

export const STAGES_MATH3 = [
  {
    "id": 1,
    "title": "Chặng 1: Bảng Nhân Chia & Phép Tính Trong Phạm Vi 1000",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Bảng nhân chia từ 1 đến 9 và tìm thành phần chưa biết",
    "icon": "BookOpen",
    "color": "from-amber-600 to-orange-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Hình Học Phẳng & Đại Lượng Đo",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Góc vuông, góc không vuông, chu vi hình chữ nhật, hình vuông, gam, ml",
    "icon": "Compass",
    "color": "from-emerald-600 to-teal-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Các Số Trong Phạm Vi 10.000 & 100.000",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Cộng trừ nhân chia số có 4 và 5 chữ số, diện tích hình chữ nhật",
    "icon": "Award",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 4,
    "title": "Chặng 4: Thống Kê Xác Suất & Chuẩn Bị Lên Lớp 4",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Bảng số liệu, khả năng xảy ra của sự kiện và đề thi khảo sát",
    "icon": "GraduationCap",
    "color": "from-purple-600 to-pink-700"
  }
];

export const TOPIC_CATEGORIES_MATH3 = [
  {
    "id": "theory",
    "name": "Nhận Biết & Trực Quan",
    "color": "bg-blue-100 text-blue-800"
  },
  {
    "id": "application",
    "name": "Thông Hiểu & Làm Quen",
    "color": "bg-emerald-100 text-emerald-800"
  },
  {
    "id": "advanced",
    "name": "Tư Duy & Sáng Tạo",
    "color": "bg-purple-100 text-purple-800"
  },
  {
    "id": "exam",
    "name": "Đố Vui & Ôn Tập",
    "color": "bg-amber-100 text-amber-800"
  }
];

export const WEEKS_METADATA_MATH3 = {};

export const QUESTION_BANK_MATH3 = [
  {
    "id": "G3_MATH_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 1] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 2] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 3] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 4] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 5] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 6] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 7] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 8] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 9] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 1 - Bài 10] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 1] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 2] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 3] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 4] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 5] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 6] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 7] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 8] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 9] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 2 - Bài 10] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 1] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 2] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 3] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 4] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 5] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 6] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 7] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 8] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 9] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 3 - Bài 10] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 1] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 2] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 3] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 4] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 5] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 6] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 7] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 8] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 9] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 4 - Bài 10] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 1] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 2] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 3] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 4] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 5] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 6] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 7] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 8] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 9] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 5 - Bài 10] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 1] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 2] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 3] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 4] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 5] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 6] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 7] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 8] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 9] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 6 - Bài 10] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 1] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 2] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 3] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 4] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 5] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 6] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 7] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 8] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 9] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 7 - Bài 10] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 1] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 2] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 3] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 4] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 5] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 6] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 7] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 8] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 9] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 8 - Bài 10] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 1] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 2] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 3] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 4] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 5] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 6] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 7] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 8] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 9] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 3 Lớp 3 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 9 - Bài 10] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 1] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 2] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 3] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 4] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 5] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 6] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 7] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 8] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 9] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 10 - Bài 10] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 1] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 2] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 3] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 4] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 5] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 6] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 7] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 8] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 9] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 11 - Bài 10] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 1] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 2] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 3] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 4] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 5] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 6] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 7] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 8] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 9] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 12 - Bài 10] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 1] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 2] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 3] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 4] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 5] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 6] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 7] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 8] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 9] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 13 - Bài 10] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 1] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 2] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 3] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 4] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 5] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 6] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 7] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 8] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 9] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 14 - Bài 10] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 1] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 2] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 3] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 4] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 5] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 6] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 7] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 8] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 9] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 15 - Bài 10] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 1] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 2] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 3] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 4] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 5] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 6] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 7] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 8] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 9] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 16 - Bài 10] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 1] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 2] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 3] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 4] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 5] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 6] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 7] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 8] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 9] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 17 - Bài 10] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 1] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 2] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 3] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 4] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 5] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 6] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 7] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 8] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 9] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 3 Lớp 3 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 18 - Bài 10] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 1] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 2] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 3] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 4] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 5] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 6] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 7] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 8] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 9] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 19 - Bài 10] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 1] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 2] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 3] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 4] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 5] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 6] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 7] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 8] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 9] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 20 - Bài 10] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 1] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 2] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 3] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 4] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 5] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 6] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 7] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 8] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 9] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 21 - Bài 10] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 1] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 2] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 3] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 4] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 5] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 6] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 7] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 8] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 9] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 22 - Bài 10] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 1] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 2] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 3] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 4] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 5] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 6] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 7] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 8] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 9] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 23 - Bài 10] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 1] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 2] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 3] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 4] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 5] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 6] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 7] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 8] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 9] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 24 - Bài 10] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 1] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 2] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 3] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 4] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 5] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 6] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 7] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 8] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 9] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 25 - Bài 10] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 1] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 2] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 3] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 4] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 5] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 6] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 7] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 8] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 9] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 26 - Bài 10] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 1] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 2] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 3] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 4] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 5] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 6] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 7] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 8] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 9] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 3 Lớp 3 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 27 - Bài 10] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 1] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 2] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 3] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 4] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 5] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 6] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 7] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 8] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 9] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 28 - Bài 10] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 1] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 2] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 3] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 4] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 5] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 6] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 7] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 8] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 9] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 29 - Bài 10] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 1] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 2] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 3] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 4] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 5] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 6] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 7] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 8] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 9] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 30 - Bài 10] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 1] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 2] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 3] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 4] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 5] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 6] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 7] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 8] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 9] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 31 - Bài 10] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 1] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 2] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 3] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 4] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 5] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 6] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 7] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 8] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 9] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 32 - Bài 10] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 1] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 2] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 3] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 4] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 5] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 6] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 7] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 8] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 9] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 33 - Bài 10] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 1] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 2] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 3] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  },
  {
    "id": "G3_MATH_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 4] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 5] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 6] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 7] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 8] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 9] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 34 - Bài 10] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 1] Số 'Ba mươi hai nghìn bốn trăm linh năm' được viết là:",
    "options": [
      "32 405",
      "32 450",
      "32 045",
      "320 405"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 32 405."
  },
  {
    "id": "G3_MATH_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 2] Đổi đơn vị: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
    "options": [
      "1000 g",
      "100 g",
      "10 g",
      "10 000 g"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 1 kg = 1000 g."
  },
  {
    "id": "G3_MATH_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 3] Một cuộn dây dài 48 m, người ta cắt lấy 1/6 cuộn dây. Đoạn dây đã cắt dài bao nhiêu mét?",
    "options": [
      "8 m",
      "6 m",
      "7 m",
      "9 m"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 48 : 6 = 8 m."
  },
  {
    "id": "G3_MATH_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 4] Trong các tháng sau, tháng nào có 30 ngày?",
    "options": [
      "Tháng Tư (tháng 4)",
      "Tháng Một",
      "Tháng Ba",
      "Tháng Năm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Các tháng có 30 ngày gồm: Tháng 4, 6, 9, 11."
  },
  {
    "id": "G3_MATH_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 5] Kết quả của phép nhân trong bảng: 8 x 7 = ?",
    "options": [
      "56",
      "54",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 8 x 7 = 56."
  },
  {
    "id": "G3_MATH_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 6] Kết quả của phép chia: 72 : 9 = ?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: 72 : 9 = 8."
  },
  {
    "id": "G3_MATH_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 7] Tìm x biết: x : 6 = 14",
    "options": [
      "x = 84",
      "x = 20",
      "x = 74",
      "x = 80"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: x = 14 x 6 = 84."
  },
  {
    "id": "G3_MATH_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 8] Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông đó là:",
    "options": [
      "20 cm",
      "25 cm",
      "10 cm",
      "15 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Chu vi hình vuông = cạnh x 4 = 5 x 4 = 20 cm."
  },
  {
    "id": "G3_MATH_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 9] Diện tích hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
    "options": [
      "40 cm²",
      "26 cm²",
      "13 cm²",
      "40 cm"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Diện tích hình chữ nhật = dài x rộng = 8 x 5 = 40 cm²."
  },
  {
    "id": "G3_MATH_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 3 Lớp 3 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 3 Lớp 3 - Tuần 35 - Bài 10] Giá trị của biểu thức 120 + 80 x 2 là:",
    "options": [
      "280",
      "400",
      "200",
      "360"
    ],
    "correctIndex": 0,
    "hint": "Bé Chuột hãy quan sát thật kỹ và suy nghĩ thật vui để chọn đáp án đúng nhất nhé! 🐭✨",
    "explanation": "Hướng dẫn giải chi tiết cho Bé Chuột: Thực hiện nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
  }
];

export const getQuestionsByWeekMath3 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_MATH3.filter(q => q.week === num);
};

export const getFilteredQuestionsMath3 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_MATH3];
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
