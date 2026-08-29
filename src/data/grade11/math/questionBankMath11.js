// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TOÁN 11 LỚP 11
// CHUẨN CHƯƠNG TRÌNH GDPT 2026 (KẾT NỐI TRI THỨC / CÁNH DIỀU / CHÂN TRỜI SÁNG TẠO)
// 35 TUẦN HỌC - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_MATH11 = [
  {
    "id": 1,
    "title": "Chặng 1: Hàm Số Lượng Giác, Cấp Số Cộng & Cấp Số Nhân",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Phương trình lượng giác cơ bản, quy luật dãy số và cấp số",
    "icon": "BookOpen",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Giới Hạn, Hàm Số Liên Tục & Hình Học Không Gian",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Giới hạn dãy số/hàm số và quan hệ song song trong không gian",
    "icon": "Compass",
    "color": "from-purple-600 to-pink-600"
  },
  {
    "id": 3,
    "title": "Chặng 3: Hàm Số Mũ, Logarit & Quan Hệ Vuông Góc Không Gian",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Đồ thị mũ - logarit, góc và khoảng cách trong không gian",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Đạo Hàm, Xác Suất Cổ Điển & Ôn Tập Tổng Hợp 11",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Quy tắc tính đạo hàm, tiếp tuyến đồ thị và biến cố hợp/giao",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_MATH11 = [
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

export const WEEKS_METADATA_MATH11 = {};

export const QUESTION_BANK_MATH11 = [
  {
    "id": "M11_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 1 - Bài tập 1] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 1 - Bài tập 2] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 1 - Bài tập 3] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 1 - Bài tập 4] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 1 - Bài tập 5] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 1 - Bài tập 6] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 1 - Bài tập 7] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 1 - Bài tập 8] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 1 - Bài tập 9] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 1 - Bài tập 10] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 2 - Bài tập 1] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 2 - Bài tập 2] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 2 - Bài tập 3] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 2 - Bài tập 4] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 2 - Bài tập 5] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 2 - Bài tập 6] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 2 - Bài tập 7] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 2 - Bài tập 8] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 2 - Bài tập 9] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 2 - Bài tập 10] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 3 - Bài tập 1] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 3 - Bài tập 2] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 3 - Bài tập 3] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 3 - Bài tập 4] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 3 - Bài tập 5] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 3 - Bài tập 6] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 3 - Bài tập 7] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 3 - Bài tập 8] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 3 - Bài tập 9] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 3 - Bài tập 10] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 4 - Bài tập 1] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 4 - Bài tập 2] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 4 - Bài tập 3] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 4 - Bài tập 4] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 4 - Bài tập 5] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 4 - Bài tập 6] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 4 - Bài tập 7] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 4 - Bài tập 8] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 4 - Bài tập 9] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 4 - Bài tập 10] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 5 - Bài tập 1] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 5 - Bài tập 2] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 5 - Bài tập 3] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 5 - Bài tập 4] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 5 - Bài tập 5] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 5 - Bài tập 6] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 5 - Bài tập 7] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 5 - Bài tập 8] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 5 - Bài tập 9] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 5 - Bài tập 10] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 6 - Bài tập 1] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 6 - Bài tập 2] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 6 - Bài tập 3] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 6 - Bài tập 4] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 6 - Bài tập 5] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 6 - Bài tập 6] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 6 - Bài tập 7] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 6 - Bài tập 8] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 6 - Bài tập 9] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 6 - Bài tập 10] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 7 - Bài tập 1] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 7 - Bài tập 2] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 7 - Bài tập 3] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 7 - Bài tập 4] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 7 - Bài tập 5] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 7 - Bài tập 6] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 7 - Bài tập 7] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 7 - Bài tập 8] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 7 - Bài tập 9] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 7 - Bài tập 10] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 8 - Bài tập 1] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 8 - Bài tập 2] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 8 - Bài tập 3] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 8 - Bài tập 4] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 8 - Bài tập 5] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 8 - Bài tập 6] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 8 - Bài tập 7] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 8 - Bài tập 8] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 8 - Bài tập 9] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 8 - Bài tập 10] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 9 - Bài tập 1] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 9 - Bài tập 2] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 9 - Bài tập 3] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 9 - Bài tập 4] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 9 - Bài tập 5] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 9 - Bài tập 6] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 9 - Bài tập 7] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 9 - Bài tập 8] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 9 - Bài tập 9] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Toán 11 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 9 - Bài tập 10] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 10 - Bài tập 1] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 10 - Bài tập 2] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 10 - Bài tập 3] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 10 - Bài tập 4] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 10 - Bài tập 5] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 10 - Bài tập 6] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 10 - Bài tập 7] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 10 - Bài tập 8] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 10 - Bài tập 9] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 10 - Bài tập 10] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 11 - Bài tập 1] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 11 - Bài tập 2] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 11 - Bài tập 3] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 11 - Bài tập 4] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 11 - Bài tập 5] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 11 - Bài tập 6] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 11 - Bài tập 7] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 11 - Bài tập 8] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 11 - Bài tập 9] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 11 - Bài tập 10] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 12 - Bài tập 1] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 12 - Bài tập 2] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 12 - Bài tập 3] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 12 - Bài tập 4] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 12 - Bài tập 5] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 12 - Bài tập 6] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 12 - Bài tập 7] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 12 - Bài tập 8] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 12 - Bài tập 9] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 12 - Bài tập 10] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 13 - Bài tập 1] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 13 - Bài tập 2] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 13 - Bài tập 3] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 13 - Bài tập 4] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 13 - Bài tập 5] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 13 - Bài tập 6] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 13 - Bài tập 7] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 13 - Bài tập 8] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 13 - Bài tập 9] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 13 - Bài tập 10] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 14 - Bài tập 1] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 14 - Bài tập 2] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 14 - Bài tập 3] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 14 - Bài tập 4] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 14 - Bài tập 5] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 14 - Bài tập 6] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 14 - Bài tập 7] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 14 - Bài tập 8] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 14 - Bài tập 9] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 14 - Bài tập 10] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 15 - Bài tập 1] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 15 - Bài tập 2] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 15 - Bài tập 3] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 15 - Bài tập 4] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 15 - Bài tập 5] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 15 - Bài tập 6] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 15 - Bài tập 7] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 15 - Bài tập 8] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 15 - Bài tập 9] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 15 - Bài tập 10] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 16 - Bài tập 1] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 16 - Bài tập 2] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 16 - Bài tập 3] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 16 - Bài tập 4] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 16 - Bài tập 5] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 16 - Bài tập 6] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 16 - Bài tập 7] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 16 - Bài tập 8] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 16 - Bài tập 9] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 16 - Bài tập 10] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 17 - Bài tập 1] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 17 - Bài tập 2] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 17 - Bài tập 3] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 17 - Bài tập 4] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 17 - Bài tập 5] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 17 - Bài tập 6] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 17 - Bài tập 7] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 17 - Bài tập 8] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 17 - Bài tập 9] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 17 - Bài tập 10] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 18 - Bài tập 1] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 18 - Bài tập 2] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 18 - Bài tập 3] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 18 - Bài tập 4] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 18 - Bài tập 5] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 18 - Bài tập 6] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 18 - Bài tập 7] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 18 - Bài tập 8] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 18 - Bài tập 9] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Toán 11 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 18 - Bài tập 10] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 19 - Bài tập 1] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 19 - Bài tập 2] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 19 - Bài tập 3] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 19 - Bài tập 4] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 19 - Bài tập 5] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 19 - Bài tập 6] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 19 - Bài tập 7] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 19 - Bài tập 8] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 19 - Bài tập 9] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 19 - Bài tập 10] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 20 - Bài tập 1] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 20 - Bài tập 2] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 20 - Bài tập 3] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 20 - Bài tập 4] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 20 - Bài tập 5] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 20 - Bài tập 6] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 20 - Bài tập 7] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 20 - Bài tập 8] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 20 - Bài tập 9] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 20 - Bài tập 10] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 21 - Bài tập 1] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 21 - Bài tập 2] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 21 - Bài tập 3] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 21 - Bài tập 4] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 21 - Bài tập 5] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 21 - Bài tập 6] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 21 - Bài tập 7] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 21 - Bài tập 8] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 21 - Bài tập 9] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 21 - Bài tập 10] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 22 - Bài tập 1] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 22 - Bài tập 2] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 22 - Bài tập 3] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 22 - Bài tập 4] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 22 - Bài tập 5] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 22 - Bài tập 6] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 22 - Bài tập 7] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 22 - Bài tập 8] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 22 - Bài tập 9] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 22 - Bài tập 10] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 23 - Bài tập 1] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 23 - Bài tập 2] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 23 - Bài tập 3] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 23 - Bài tập 4] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 23 - Bài tập 5] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 23 - Bài tập 6] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 23 - Bài tập 7] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 23 - Bài tập 8] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 23 - Bài tập 9] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 23 - Bài tập 10] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 24 - Bài tập 1] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 24 - Bài tập 2] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 24 - Bài tập 3] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 24 - Bài tập 4] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 24 - Bài tập 5] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 24 - Bài tập 6] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 24 - Bài tập 7] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 24 - Bài tập 8] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 24 - Bài tập 9] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 24 - Bài tập 10] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 25 - Bài tập 1] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 25 - Bài tập 2] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 25 - Bài tập 3] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 25 - Bài tập 4] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 25 - Bài tập 5] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 25 - Bài tập 6] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 25 - Bài tập 7] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 25 - Bài tập 8] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 25 - Bài tập 9] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 25 - Bài tập 10] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 26 - Bài tập 1] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 26 - Bài tập 2] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 26 - Bài tập 3] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 26 - Bài tập 4] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 26 - Bài tập 5] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 26 - Bài tập 6] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 26 - Bài tập 7] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 26 - Bài tập 8] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 26 - Bài tập 9] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 26 - Bài tập 10] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 27 - Bài tập 1] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 27 - Bài tập 2] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 27 - Bài tập 3] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 27 - Bài tập 4] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 27 - Bài tập 5] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 27 - Bài tập 6] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 27 - Bài tập 7] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 27 - Bài tập 8] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 27 - Bài tập 9] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Toán 11 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 27 - Bài tập 10] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 28 - Bài tập 1] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 28 - Bài tập 2] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 28 - Bài tập 3] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 28 - Bài tập 4] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 28 - Bài tập 5] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 28 - Bài tập 6] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 28 - Bài tập 7] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 28 - Bài tập 8] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 28 - Bài tập 9] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 28 - Bài tập 10] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 29 - Bài tập 1] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 29 - Bài tập 2] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 29 - Bài tập 3] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 29 - Bài tập 4] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 29 - Bài tập 5] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 29 - Bài tập 6] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 29 - Bài tập 7] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 29 - Bài tập 8] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 29 - Bài tập 9] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 29 - Bài tập 10] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 30 - Bài tập 1] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 30 - Bài tập 2] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 30 - Bài tập 3] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 30 - Bài tập 4] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 30 - Bài tập 5] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 30 - Bài tập 6] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 30 - Bài tập 7] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 30 - Bài tập 8] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 30 - Bài tập 9] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 30 - Bài tập 10] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 31 - Bài tập 1] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 31 - Bài tập 2] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 31 - Bài tập 3] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 31 - Bài tập 4] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 31 - Bài tập 5] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 31 - Bài tập 6] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 31 - Bài tập 7] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 31 - Bài tập 8] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 31 - Bài tập 9] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 31 - Bài tập 10] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 32 - Bài tập 1] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 32 - Bài tập 2] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 32 - Bài tập 3] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 32 - Bài tập 4] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 32 - Bài tập 5] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 32 - Bài tập 6] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 32 - Bài tập 7] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 32 - Bài tập 8] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 32 - Bài tập 9] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 32 - Bài tập 10] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 33 - Bài tập 1] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 33 - Bài tập 2] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 33 - Bài tập 3] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 33 - Bài tập 4] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 33 - Bài tập 5] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 33 - Bài tập 6] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 33 - Bài tập 7] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 33 - Bài tập 8] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 33 - Bài tập 9] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 33 - Bài tập 10] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 34 - Bài tập 1] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 34 - Bài tập 2] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 34 - Bài tập 3] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  },
  {
    "id": "M11_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 34 - Bài tập 4] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 34 - Bài tập 5] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 34 - Bài tập 6] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 34 - Bài tập 7] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 34 - Bài tập 8] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 34 - Bài tập 9] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 34 - Bài tập 10] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 35 - Bài tập 1] Giá trị của biểu thức log₂ 32 bằng:",
    "options": [
      "5",
      "4",
      "6",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Vì 32 = 2⁵ nên log₂ (2⁵) = 5."
  },
  {
    "id": "M11_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 35 - Bài tập 2] Tập nghiệm của phương trình 2^(x + 1) = 16 là:",
    "options": [
      "x = 3",
      "x = 4",
      "x = 2",
      "x = 5"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: 2^(x + 1) = 2⁴ <=> x + 1 = 4 <=> x = 3."
  },
  {
    "id": "M11_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 11 - Tuần 35 - Bài tập 3] Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì:",
    "options": [
      "Song song với nhau",
      "Cắt nhau",
      "Trùng nhau",
      "Chéo nhau"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Định lí 1 về quan hệ song song trong không gian: a // c và b // c (a ≠ b) => a // b."
  },
  {
    "id": "M11_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 35 - Bài tập 4] Gieo một con súc sắc cân đối đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm là số chẵn là:",
    "options": [
      "1/2",
      "1/3",
      "1/6",
      "2/3"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Các mặt chẵn gồm {2, 4, 6} (3 mặt). Không gian mẫu có 6 mặt. P = 3/6 = 1/2."
  },
  {
    "id": "M11_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 35 - Bài tập 5] Tập xác định của hàm số lượng giác y = tan x là:",
    "options": [
      "D = ℝ \\ {π/2 + kπ, k ∈ ℤ}",
      "D = ℝ \\ {kπ, k ∈ ℤ}",
      "D = ℝ",
      "D = [-1; 1]"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: tan x = sin x / cos x xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ)."
  },
  {
    "id": "M11_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 35 - Bài tập 6] Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng thứ 5 là:",
    "options": [
      "u₅ = 19",
      "u₅ = 23",
      "u₅ = 15",
      "u₅ = 20"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: u_n = u₁ + (n - 1)d => u₅ = 3 + 4(4) = 3 + 16 = 19."
  },
  {
    "id": "M11_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 11 - Tuần 35 - Bài tập 7] Cho cấp số nhân (v_n) có v₁ = 2 và công bội q = 3. Số hạng thứ 4 là:",
    "options": [
      "v₄ = 54",
      "v₄ = 162",
      "v₄ = 24",
      "v₄ = 18"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: v_n = v₁ . q^(n-1) => v₄ = 2 . 3³ = 2 . 27 = 54."
  },
  {
    "id": "M11_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 35 - Bài tập 8] Tính giới hạn L = lim ( (2n + 1)/(n - 3) ) khi n -> +∞:",
    "options": [
      "L = 2",
      "L = 1",
      "L = -1/3",
      "L = +∞"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: Chia cả tử và mẫu cho n: L = lim (2 + 1/n)/(1 - 3/n) = 2/1 = 2."
  },
  {
    "id": "M11_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 35 - Bài tập 9] Tính đạo hàm của hàm số y = x⁴ - 3x² + 2 tại điểm x = 1:",
    "options": [
      "y'(1) = -2",
      "y'(1) = 2",
      "y'(1) = 0",
      "y'(1) = 4"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 4x³ - 6x. Tại x = 1: y'(1) = 4(1) - 6(1) = -2."
  },
  {
    "id": "M11_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Toán 11 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 11 - Tuần 35 - Bài tập 10] Hệ số góc k của tiếp tuyến của đồ thị y = x³ - 3x tại điểm có hoành độ x₀ = 2 là:",
    "options": [
      "k = 9",
      "k = 3",
      "k = 12",
      "k = 6"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức lượng giác, cấp số cộng/nhân, đạo hàm và mũ - logarit Toán 11 GDPT 2026.",
    "explanation": "Hướng dẫn giải chi tiết: y' = 3x² - 3. Hệ số góc k = y'(2) = 3(4) - 3 = 9."
  }
];

export const getQuestionsByWeekMath11 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_MATH11.filter(q => q.week === num);
};

export const getFilteredQuestionsMath11 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_MATH11];
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
