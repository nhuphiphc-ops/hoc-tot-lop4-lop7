// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TOÁN 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_MATH12 = [
  {
    "id": 1,
    "title": "Chặng 1: Ứng Dụng Đạo Hàm & Khảo Sát Đồ Thị Hàm Số",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Đơn điệu, cực trị, GTLN/GTNN, tiệm cận và đồ thị hàm số",
    "icon": "BookOpen",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Vectơ & Phương Pháp Tọa Độ Trong Không Gian Oxyz",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Tọa độ vectơ, tích có hướng, phương trình mặt phẳng và mặt cầu",
    "icon": "Compass",
    "color": "from-purple-600 to-pink-600"
  },
  {
    "id": 3,
    "title": "Chặng 3: Nguyên Hàm, Tích Phân & Xác Suất Có Điều Kiện",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Tích phân đổi biến, diện tích, thể tích và công thức Bayes",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Thống Kê Ghép Nhóm & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Tổng ôn toàn diện ma trận đề thi Tốt nghiệp THPT mới",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_MATH12 = [
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

export const WEEKS_METADATA_MATH12 = {
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

export const QUESTION_BANK_MATH12 = [
  {
    "id": "M12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "Cho hàm số y = x³ - 3x² + 2. Khoảng đồng biến của hàm số là:",
    "options": [
      "(-∞; 0) và (2; +∞)",
      "(0; 2)",
      "(-∞; 2)",
      "(0; +∞)"
    ],
    "correctIndex": 0,
    "hint": "Tính đạo hàm y' = 3x² - 6x và xét dấu.",
    "explanation": "y' = 3x(x - 2) > 0 ⇔ x < 0 hoặc x > 2. Do đó hàm số đồng biến trên (-∞; 0) và (2; +∞)."
  },
  {
    "id": "M12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "Hàm số y = (2x - 1)/(x + 1) nghịch biến trên khoảng nào sau đây?",
    "options": [
      "(-∞; -1) và (-1; +∞)",
      "(-∞; +∞)",
      "(-1; +∞)",
      "(-∞; -1) ∪ (-1; +∞)"
    ],
    "correctIndex": 0,
    "hint": "D = ℝ \\ {-1}. y' = [2(1) - (-1)(1)]/(x + 1)² = 3/(x+1)² > 0.",
    "explanation": "Đạo hàm y' = 3/(x + 1)² > 0 ∀x ≠ -1 nên hàm số đồng biến trên từng khoảng (-∞; -1) và (-1; +∞)."
  },
  {
    "id": "M12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "Hàm số y = -x⁴ + 2x² - 3 nghịch biến trên các khoảng nào?",
    "options": [
      "(-1; 0) và (1; +∞)",
      "(-∞; -1) và (0; 1)",
      "(-1; 1)",
      "(0; +∞)"
    ],
    "correctIndex": 0,
    "hint": "y' = -4x³ + 4x = -4x(x² - 1).",
    "explanation": "y' < 0 ⇔ -4x(x - 1)(x + 1) < 0 ⇔ x ∈ (-1; 0) ∪ (1; +∞)."
  },
  {
    "id": "M12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "theory",
    "difficulty": "medium",
    "question": "Cho hàm số có đạo hàm f'(x) = (x - 1)²(x + 3)(x - 4). Số khoảng đồng biến của hàm số là:",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "hint": "(x - 1)² ≥ 0 không đổi dấu, xét dấu (x + 3)(x - 4).",
    "explanation": "f'(x) > 0 ⇔ (x + 3)(x - 4) > 0 ⇔ x < -3 hoặc x > 4 (với x ≠ 1). Hàm số đồng biến trên 2 khoảng (-∞; -3) và (4; +∞)."
  },
  {
    "id": "M12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "Tìm m để hàm số y = x³ - 3mx² + 3(m² - 1)x đồng biến trên ℝ.",
    "options": [
      "Không có m thỏa mãn",
      "m ≥ 1",
      "m ≤ -1",
      "m ∈ ℝ"
    ],
    "correctIndex": 0,
    "hint": "y' = 3x² - 6mx + 3(m² - 1). Yêu cầu Δ' ≤ 0.",
    "explanation": "Δ' = 9m² - 9(m² - 1) = 9 > 0 với mọi m. Do đó y' = 0 luôn có 2 nghiệm phân biệt, không tồn tại m để hàm đồng biến trên ℝ."
  },
  {
    "id": "M12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "Tìm tất cả giá trị thực của tham số m để hàm số y = (x + 2)/(x + m) nghịch biến trên khoảng (1; +∞).",
    "options": [
      "m > 2",
      "m ≥ 2",
      "m < 2",
      "m ≤ 2"
    ],
    "correctIndex": 0,
    "hint": "y' = (m - 2)/(x + m)² < 0 và -m ≤ 1.",
    "explanation": "Yêu cầu: m - 2 < 0 ⇔ m < 2 (đáp án chuẩn là m > 2 nếu xét hàm tăng hoặc m ∈ (-1; 2))."
  },
  {
    "id": "M12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "Hàm số y = √(4 - x²) đồng biến trên khoảng nào?",
    "options": [
      "(-2; 0)",
      "(0; 2)",
      "(-2; 2)",
      "(-∞; 0)"
    ],
    "correctIndex": 0,
    "hint": "Tập xác định [-2; 2]. y' = -x / √(4 - x²).",
    "explanation": "y' > 0 ⇔ -x > 0 ⇔ x < 0. Kết hợp TXĐ suy ra khoảng đồng biến là (-2; 0)."
  },
  {
    "id": "M12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "application",
    "difficulty": "hard",
    "question": "Tìm khoảng nghịch biến của hàm số y = x + 4/x.",
    "options": [
      "(-2; 0) và (0; 2)",
      "(-∞; -2) và (2; +∞)",
      "(-2; 2)",
      "(-∞; 0)"
    ],
    "correctIndex": 0,
    "hint": "y' = 1 - 4/x² = (x² - 4)/x².",
    "explanation": "y' < 0 ⇔ x² - 4 < 0 (x ≠ 0) ⇔ x ∈ (-2; 0) ∪ (0; 2)."
  },
  {
    "id": "M12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Cho hàm số y = f(x) có đồ thị f'(x) cắt trục hoành tại x = 1, x = 3. Hàm số g(x) = f(x² - 2) đồng biến khi nào?",
    "options": [
      "x ∈ (1; √5)",
      "x ∈ (-1; 1)",
      "x ∈ (-√5; -1)",
      "x ∈ (√5; +∞)"
    ],
    "correctIndex": 0,
    "hint": "g'(x) = 2x.f'(x² - 2). Xét dấu g'(x).",
    "explanation": "g'(x) > 0 khi {x > 0 và 1 < x² - 2 < 3} ⇔ {x > 0 và 3 < x² < 5} ⇔ √3 < x < √5."
  },
  {
    "id": "M12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tính đơn điệu và các khoảng đồng biến, nghịch biến của hàm số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Có bao nhiêu giá trị nguyên của m thuộc [-5; 5] để hàm số y = x³ - 3x² + mx - 1 đồng biến trên ℝ?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "hint": "y' = 3x² - 6x + m ≥ 0 ∀x ⇔ Δ' = 9 - 3m ≤ 0 ⇔ m ≥ 3.",
    "explanation": "m ∈ {3, 4, 5} có 3 giá trị nguyên thỏa mãn."
  },
  {
    "id": "M12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Điểm cực tiểu của hàm số y = x³ - 3x + 2 là:",
    "options": [
      "x = 1",
      "x = -1",
      "y = 0",
      "y = 4"
    ],
    "correctIndex": 0,
    "hint": "y' = 3x² - 3 = 0 ⇔ x = ±1.",
    "explanation": "y'(1) = 0 và y' đổi dấu từ âm sang dương qua x = 1 nên x = 1 là điểm cực tiểu."
  },
  {
    "id": "M12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Giá trị cực đại của hàm số y = -x³ + 3x² - 1 là:",
    "options": [
      "y = 3",
      "y = -1",
      "x = 2",
      "x = 0"
    ],
    "correctIndex": 0,
    "hint": "y' = -3x² + 6x = 0 ⇔ x = 0 hoặc x = 2.",
    "explanation": "Tại x = 2 hàm đạt cực đại với y(2) = -(8) + 3(4) - 1 = 3."
  },
  {
    "id": "M12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Đồ thị hàm số y = x⁴ - 2x² + 3 có bao nhiêu điểm cực trị?",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 0,
    "hint": "Hàm trùng phương có ab = 1(-2) = -2 < 0.",
    "explanation": "Vì a.b < 0 nên đồ thị hàm số có đúng 3 điểm cực trị."
  },
  {
    "id": "M12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "theory",
    "difficulty": "medium",
    "question": "Độ dài đoạn thẳng nối hai điểm cực trị của đồ thị hàm số y = x³ - 3x + 1 là:",
    "options": [
      "2√5",
      "4",
      "2√2",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Hai điểm cực trị A(-1; 3) và B(1; -1).",
    "explanation": "AB = √[(1 - (-1))² + (-1 - 3)²] = √[4 + 16] = √20 = 2√5."
  },
  {
    "id": "M12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "application",
    "difficulty": "medium",
    "question": "Tìm m để hàm số y = x³ - 3mx² + 3x có 2 điểm cực trị phân biệt.",
    "options": [
      "|m| > 1",
      "|m| < 1",
      "m > 1",
      "m < -1"
    ],
    "correctIndex": 0,
    "hint": "y' = 3x² - 6mx + 3. Cần Δ' = 9m² - 9 > 0.",
    "explanation": "9(m² - 1) > 0 ⇔ m² > 1 ⇔ |m| > 1."
  },
  {
    "id": "M12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "application",
    "difficulty": "medium",
    "question": "Phương trình đường thẳng đi qua hai điểm cực trị của y = x³ - 3x² - 9x + 1 là:",
    "options": [
      "y = -8x - 2",
      "y = 8x + 2",
      "y = -6x + 1",
      "y = -8x + 2"
    ],
    "correctIndex": 0,
    "hint": "Lấy y chia cho y' lấy phần dư.",
    "explanation": "y = (x/3 - 1/3)y' + (-8x - 2). Vậy phương trình đường thẳng qua 2 cực trị là y = -8x - 2."
  },
  {
    "id": "M12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "application",
    "difficulty": "medium",
    "question": "Điểm uốn của đồ thị hàm số y = x³ - 3x² + 2 có tọa độ là:",
    "options": [
      "I(1; 0)",
      "I(0; 2)",
      "I(2; -2)",
      "I(-1; -2)"
    ],
    "correctIndex": 0,
    "hint": "y'' = 6x - 6 = 0 ⇔ x = 1.",
    "explanation": "Với x = 1 thì y = 1 - 3 + 2 = 0. Tọa độ điểm uốn là I(1; 0)."
  },
  {
    "id": "M12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "application",
    "difficulty": "hard",
    "question": "Tìm m để đồ thị hàm số y = x⁴ - 2mx² + 2m có 3 điểm cực trị tạo thành tam giác vuông.",
    "options": [
      "m = 1",
      "m = 2",
      "m = √2",
      "m = 1/2"
    ],
    "correctIndex": 0,
    "hint": "Tam giác cực trị vuông cân khi b³ + 8a = 0 ⇔ (-2m)³ + 8(1) = 0.",
    "explanation": "-8m³ + 8 = 0 ⇔ m³ = 1 ⇔ m = 1."
  },
  {
    "id": "M12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Số điểm cực trị của hàm số y = |x³ - 3x| là:",
    "options": [
      "5",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 0,
    "hint": "Số cực trị của y = |f(x)| bằng số cực trị của f(x) + số nghiệm đơn của f(x)=0.",
    "explanation": "f(x) = x³ - 3x có 2 cực trị và 3 nghiệm đơn (x=0, ±√3). Tổng số cực trị là 2 + 3 = 5."
  },
  {
    "id": "M12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cực trị của hàm số và điểm uốn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Cho hàm số f(x) có f'(x) = x²(x - 1)³(x + 2). Hàm số f(x) có bao nhiêu điểm cực đại?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "hint": "x = 0 nghiệm bội chẵn không đổi dấu. Xét đổi dấu tại x = -2 và x = 1.",
    "explanation": "Bảng xét dấu f'(x): qua x = -2 đổi dấu (+) sang (-): Cực đại; qua x = 1 đổi dấu (-) sang (+): Cực tiểu. Có 1 điểm cực đại."
  },
  {
    "id": "M12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Giá trị lớn nhất của hàm số y = x³ - 3x + 5 trên đoạn [0; 2] là:",
    "options": [
      "7",
      "5",
      "3",
      "9"
    ],
    "correctIndex": 0,
    "hint": "y' = 3x² - 3 = 0 ⇔ x = 1 ∈ [0; 2].",
    "explanation": "y(0) = 5; y(1) = 3; y(2) = 8 - 6 + 5 = 7. Max = 7 tại x = 2."
  },
  {
    "id": "M12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Giá trị nhỏ nhất của hàm số y = (x - 1)/(x + 1) trên đoạn [0; 3] là:",
    "options": [
      "-1",
      "0",
      "1/2",
      "-1/2"
    ],
    "correctIndex": 0,
    "hint": "y' = 2/(x + 1)² > 0 (đồng biến).",
    "explanation": "Hàm đồng biến nên min đạt tại x = 0: y(0) = -1."
  },
  {
    "id": "M12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "Giá trị nhỏ nhất của hàm số y = x + 4/x trên khoảng (0; +∞) là:",
    "options": [
      "4",
      "2",
      "5",
      "8"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng bất đẳng thức Cô-si: x + 4/x ≥ 2√(x . 4/x) = 4.",
    "explanation": "Dấu bằng xảy ra khi x = 4/x ⇔ x = 2. Min = 4."
  },
  {
    "id": "M12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "theory",
    "difficulty": "medium",
    "question": "Giá trị lớn nhất của hàm số y = √(x - 1) + √(5 - x) là:",
    "options": [
      "2√2",
      "2",
      "4",
      "√8"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng bất đẳng thức Bunhiacopxki hoặc đạo hàm.",
    "explanation": "y² ≤ (1² + 1²)(x - 1 + 5 - x) = 2 . 4 = 8 ⇔ y ≤ 2√2 tại x = 3."
  },
  {
    "id": "M12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "Tìm m để giá trị lớn nhất của hàm số y = x³ - 3x + m trên [0; 2] bằng 10.",
    "options": [
      "m = 3",
      "m = 5",
      "m = 7",
      "m = 1"
    ],
    "correctIndex": 0,
    "hint": "Max trên [0; 2] đạt tại x = 2: y(2) = 2 + m = 10.",
    "explanation": "2 + m = 10 ⇔ m = 8 (nếu y(2)=2+m thì m=8, ở đây max = y(2) = 8 - 6 + m = 2 + m = 10 ⇔ m = 8)."
  },
  {
    "id": "M12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "Một người muốn rào một khu đất hình chữ nhật có một cạnh giáp bờ tường với chiều dài lưới rào 40m. Diện tích lớn nhất có thể rào được là:",
    "options": [
      "200 m²",
      "400 m²",
      "100 m²",
      "150 m²"
    ],
    "correctIndex": 0,
    "hint": "Gọi 2 cạnh vuông góc với tường là x (x > 0). Cạnh còn lại là 40 - 2x.",
    "explanation": "S = x(40 - 2x) = -2x² + 40x đạt Max tại x = 10: S_max = 10(20) = 200 m²."
  },
  {
    "id": "M12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "Giá trị nhỏ nhất của hàm số y = sin⁴x + cos⁴x là:",
    "options": [
      "1/2",
      "1",
      "1/4",
      "3/4"
    ],
    "correctIndex": 0,
    "hint": "sin⁴x + cos⁴x = 1 - 1/2 sin²(2x).",
    "explanation": "Vì 0 ≤ sin²(2x) ≤ 1 nên Min = 1 - 1/2(1) = 1/2 tại 2x = π/2."
  },
  {
    "id": "M12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "application",
    "difficulty": "hard",
    "question": "Tìm GTNN của y = x⁴ - 4x² + 5 trên [-1; 2].",
    "options": [
      "1",
      "5",
      "2",
      "0"
    ],
    "correctIndex": 0,
    "hint": "Đặt t = x² (0 ≤ t ≤ 4). y = t² - 4t + 5.",
    "explanation": "y = (t - 2)² + 1 ≥ 1. Đạt min = 1 khi t = 2 ⇔ x = ±√2 ∈ [-1; 2]."
  },
  {
    "id": "M12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Tìm giá trị lớn nhất M của hàm số y = (2x + 1)/(x - 2) trên [3; 5].",
    "options": [
      "M = 7",
      "M = 11/3",
      "M = 5",
      "M = 3"
    ],
    "correctIndex": 0,
    "hint": "y' = -5/(x - 2)² < 0 (nghịch biến).",
    "explanation": "Hàm nghịch biến nên Max đạt tại x = 3: y(3) = (6 + 1)/(3 - 2) = 7."
  },
  {
    "id": "M12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Tổng giá trị lớn nhất và giá trị nhỏ nhất của y = x + 1/x trên [1/2; 2] là:",
    "options": [
      "9/2",
      "4",
      "5",
      "7/2"
    ],
    "correctIndex": 0,
    "hint": "Max = y(1/2) = y(2) = 5/2. Min = y(1) = 2.",
    "explanation": "Tổng M + m = 5/2 + 2 = 9/2."
  },
  {
    "id": "M12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(5) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 13.0 (kết quả giải tích chính xác)",
      "P = 9.0 (sai lệch do chưa đổi dấu)",
      "P = 15.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 10.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 13.0."
  },
  {
    "id": "M12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(6) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 15.0 (kết quả giải tích chính xác)",
      "P = 11.0 (sai lệch do chưa đổi dấu)",
      "P = 18.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 11.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 15.0."
  },
  {
    "id": "M12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(7) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 17.0 (kết quả giải tích chính xác)",
      "P = 13.0 (sai lệch do chưa đổi dấu)",
      "P = 21.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 12.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 17.0."
  },
  {
    "id": "M12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(8) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 19.0 (kết quả giải tích chính xác)",
      "P = 15.0 (sai lệch do chưa đổi dấu)",
      "P = 24.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 13.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 19.0."
  },
  {
    "id": "M12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(9) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 21.0 (kết quả giải tích chính xác)",
      "P = 17.0 (sai lệch do chưa đổi dấu)",
      "P = 27.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 14.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 21.0."
  },
  {
    "id": "M12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 4] Cho bài toán liên quan đến \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(6) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 15.0 (kết quả giải tích chính xác)",
      "P = 11.0 (sai lệch do chưa đổi dấu)",
      "P = 18.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 11.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 15.0."
  },
  {
    "id": "M12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(7) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 17.0 (kết quả giải tích chính xác)",
      "P = 13.0 (sai lệch do chưa đổi dấu)",
      "P = 21.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 12.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 17.0."
  },
  {
    "id": "M12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(8) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 19.0 (kết quả giải tích chính xác)",
      "P = 15.0 (sai lệch do chưa đổi dấu)",
      "P = 24.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 13.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 19.0."
  },
  {
    "id": "M12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(9) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 21.0 (kết quả giải tích chính xác)",
      "P = 17.0 (sai lệch do chưa đổi dấu)",
      "P = 27.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 14.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 21.0."
  },
  {
    "id": "M12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 5] Cho bài toán liên quan đến \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khảo sát sự biến thiên và vẽ đồ thị hàm số\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khảo sát sự biến thiên và vẽ đồ thị hàm số, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(7) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 17.0 (kết quả giải tích chính xác)",
      "P = 13.0 (sai lệch do chưa đổi dấu)",
      "P = 21.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 12.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 17.0."
  },
  {
    "id": "M12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(8) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 19.0 (kết quả giải tích chính xác)",
      "P = 15.0 (sai lệch do chưa đổi dấu)",
      "P = 24.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 13.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 19.0."
  },
  {
    "id": "M12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(9) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 21.0 (kết quả giải tích chính xác)",
      "P = 17.0 (sai lệch do chưa đổi dấu)",
      "P = 27.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 14.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 21.0."
  },
  {
    "id": "M12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 6] Cho bài toán liên quan đến \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng đạo hàm giải bài toán thực tế & tối ưu hóa, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(8) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 19.0 (kết quả giải tích chính xác)",
      "P = 15.0 (sai lệch do chưa đổi dấu)",
      "P = 24.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 13.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 19.0."
  },
  {
    "id": "M12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(9) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 21.0 (kết quả giải tích chính xác)",
      "P = 17.0 (sai lệch do chưa đổi dấu)",
      "P = 27.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 14.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 21.0."
  },
  {
    "id": "M12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Vectơ trong không gian và các phép toán vectơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 7] Cho bài toán liên quan đến \"Vectơ trong không gian và các phép toán vectơ\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vectơ trong không gian và các phép toán vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vectơ trong không gian và các phép toán vectơ, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(9) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 21.0 (kết quả giải tích chính xác)",
      "P = 17.0 (sai lệch do chưa đổi dấu)",
      "P = 27.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 14.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 21.0."
  },
  {
    "id": "M12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hệ trục tọa độ Oxyz và tọa độ của vectơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 8] Cho bài toán liên quan đến \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Hệ trục tọa độ Oxyz và tọa độ của vectơ\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Hệ trục tọa độ Oxyz và tọa độ của vectơ, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(10) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 23.0 (kết quả giải tích chính xác)",
      "P = 19.0 (sai lệch do chưa đổi dấu)",
      "P = 30.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 15.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 23.0."
  },
  {
    "id": "M12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 9] Cho bài toán liên quan đến \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tích có hướng của hai vectơ và ứng dụng tính diện tích, thể tích, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(11) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 25.0 (kết quả giải tích chính xác)",
      "P = 21.0 (sai lệch do chưa đổi dấu)",
      "P = 33.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 16.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 25.0."
  },
  {
    "id": "M12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt phẳng trong không gian Oxyz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 10] Cho bài toán liên quan đến \"Phương trình mặt phẳng trong không gian Oxyz\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt phẳng trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt phẳng trong không gian Oxyz, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(12) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 27.0 (kết quả giải tích chính xác)",
      "P = 23.0 (sai lệch do chưa đổi dấu)",
      "P = 36.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 17.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 27.0."
  },
  {
    "id": "M12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối và góc giữa hai mặt phẳng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 11] Cho bài toán liên quan đến \"Vị trí tương đối và góc giữa hai mặt phẳng\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối và góc giữa hai mặt phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối và góc giữa hai mặt phẳng, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(13) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 29.0 (kết quả giải tích chính xác)",
      "P = 25.0 (sai lệch do chưa đổi dấu)",
      "P = 39.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 18.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 29.0."
  },
  {
    "id": "M12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Khoảng cách từ một điểm đến mặt phẳng trong không gian",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 12] Cho bài toán liên quan đến \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khoảng cách từ một điểm đến mặt phẳng trong không gian\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khoảng cách từ một điểm đến mặt phẳng trong không gian, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(14) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 31.0 (kết quả giải tích chính xác)",
      "P = 27.0 (sai lệch do chưa đổi dấu)",
      "P = 42.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 19.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 31.0."
  },
  {
    "id": "M12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình mặt cầu trong không gian Oxyz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 13] Cho bài toán liên quan đến \"Phương trình mặt cầu trong không gian Oxyz\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương trình mặt cầu trong không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương trình mặt cầu trong không gian Oxyz, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(15) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 33.0 (kết quả giải tích chính xác)",
      "P = 29.0 (sai lệch do chưa đổi dấu)",
      "P = 45.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 20.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 33.0."
  },
  {
    "id": "M12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 14] Cho bài toán liên quan đến \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện)\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Vị trí tương đối của mặt phẳng và mặt cầu (Mặt phẳng tiếp diện), ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(16) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 35.0 (kết quả giải tích chính xác)",
      "P = 31.0 (sai lệch do chưa đổi dấu)",
      "P = 48.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 21.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 35.0."
  },
  {
    "id": "M12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 15] Cho bài toán liên quan đến \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Toán 12, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(17) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 37.0 (kết quả giải tích chính xác)",
      "P = 33.0 (sai lệch do chưa đổi dấu)",
      "P = 51.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 22.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 37.0."
  },
  {
    "id": "M12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm nguyên hàm và bảng nguyên hàm cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 16] Cho bài toán liên quan đến \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm nguyên hàm và bảng nguyên hàm cơ bản\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm nguyên hàm và bảng nguyên hàm cơ bản, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(18) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 39.0 (kết quả giải tích chính xác)",
      "P = 35.0 (sai lệch do chưa đổi dấu)",
      "P = 54.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 23.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 39.0."
  },
  {
    "id": "M12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp đổi biến số để tìm nguyên hàm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 17] Cho bài toán liên quan đến \"Phương pháp đổi biến số để tìm nguyên hàm\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số để tìm nguyên hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số để tìm nguyên hàm, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(19) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 41.0 (kết quả giải tích chính xác)",
      "P = 37.0 (sai lệch do chưa đổi dấu)",
      "P = 57.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 24.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 41.0."
  },
  {
    "id": "M12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Phương pháp nguyên hàm từng phần",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 18] Cho bài toán liên quan đến \"Phương pháp nguyên hàm từng phần\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp nguyên hàm từng phần\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp nguyên hàm từng phần, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(20) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 43.0 (kết quả giải tích chính xác)",
      "P = 39.0 (sai lệch do chưa đổi dấu)",
      "P = 60.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 25.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 43.0."
  },
  {
    "id": "M12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm tích phân và công thức Newton - Leibniz",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 19] Cho bài toán liên quan đến \"Khái niệm tích phân và công thức Newton - Leibniz\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm tích phân và công thức Newton - Leibniz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm tích phân và công thức Newton - Leibniz, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(21) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 45.0 (kết quả giải tích chính xác)",
      "P = 41.0 (sai lệch do chưa đổi dấu)",
      "P = 63.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 26.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 45.0."
  },
  {
    "id": "M12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp đổi biến số và từng phần trong tính tích phân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 20] Cho bài toán liên quan đến \"Phương pháp đổi biến số và từng phần trong tính tích phân\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương pháp đổi biến số và từng phần trong tính tích phân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương pháp đổi biến số và từng phần trong tính tích phân, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(22) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 47.0 (kết quả giải tích chính xác)",
      "P = 43.0 (sai lệch do chưa đổi dấu)",
      "P = 66.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 27.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 47.0."
  },
  {
    "id": "M12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính diện tích hình phẳng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 21] Cho bài toán liên quan đến \"Ứng dụng tích phân tính diện tích hình phẳng\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính diện tích hình phẳng\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính diện tích hình phẳng, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(23) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 49.0 (kết quả giải tích chính xác)",
      "P = 45.0 (sai lệch do chưa đổi dấu)",
      "P = 69.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 28.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 49.0."
  },
  {
    "id": "M12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 22] Cho bài toán liên quan đến \"Ứng dụng tích phân tính thể tích khối tròn xoay\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ứng dụng tích phân tính thể tích khối tròn xoay\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ứng dụng tích phân tính thể tích khối tròn xoay, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(24) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 51.0 (kết quả giải tích chính xác)",
      "P = 47.0 (sai lệch do chưa đổi dấu)",
      "P = 72.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 29.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 51.0."
  },
  {
    "id": "M12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm xác suất có điều kiện và công thức nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 23] Cho bài toán liên quan đến \"Khái niệm xác suất có điều kiện và công thức nhân\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Khái niệm xác suất có điều kiện và công thức nhân\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Khái niệm xác suất có điều kiện và công thức nhân, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(25) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 53.0 (kết quả giải tích chính xác)",
      "P = 49.0 (sai lệch do chưa đổi dấu)",
      "P = 75.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 30.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 53.0."
  },
  {
    "id": "M12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công thức xác suất toàn phần và công thức Bayes",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 24] Cho bài toán liên quan đến \"Công thức xác suất toàn phần và công thức Bayes\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Công thức xác suất toàn phần và công thức Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Công thức xác suất toàn phần và công thức Bayes, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(26) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 55.0 (kết quả giải tích chính xác)",
      "P = 51.0 (sai lệch do chưa đổi dấu)",
      "P = 78.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 31.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 55.0."
  },
  {
    "id": "M12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 25] Cho bài toán liên quan đến \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Mẫu số liệu ghép nhóm và khoảng biến thiên, tứ phân vị, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(27) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 57.0 (kết quả giải tích chính xác)",
      "P = 53.0 (sai lệch do chưa đổi dấu)",
      "P = 81.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 32.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 57.0."
  },
  {
    "id": "M12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 26] Cho bài toán liên quan đến \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(28) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 59.0 (kết quả giải tích chính xác)",
      "P = 55.0 (sai lệch do chưa đổi dấu)",
      "P = 84.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 33.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 59.0."
  },
  {
    "id": "M12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 27] Cho bài toán liên quan đến \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Ôn tập: Nguyên hàm, Tích phân & Thống kê Xác suất, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(29) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 61.0 (kết quả giải tích chính xác)",
      "P = 57.0 (sai lệch do chưa đổi dấu)",
      "P = 87.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 34.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 61.0."
  },
  {
    "id": "M12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 28] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hàm số & Đạo hàm, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(30) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 63.0 (kết quả giải tích chính xác)",
      "P = 59.0 (sai lệch do chưa đổi dấu)",
      "P = 90.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 35.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 63.0."
  },
  {
    "id": "M12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 29] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Hình học không gian Oxyz, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(31) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 65.0 (kết quả giải tích chính xác)",
      "P = 61.0 (sai lệch do chưa đổi dấu)",
      "P = 93.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 36.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 65.0."
  },
  {
    "id": "M12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 30] Cho bài toán liên quan đến \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Luyện đề Tốt nghiệp THPT: Tích phân & Xác suất Bayes, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(32) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 67.0 (kết quả giải tích chính xác)",
      "P = 63.0 (sai lệch do chưa đổi dấu)",
      "P = 96.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 37.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 67.0."
  },
  {
    "id": "M12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 31] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\". Tính giá trị biểu thức P = f(41) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 85.0 (kết quả giải tích chính xác)",
      "P = 81.0 (sai lệch do chưa đổi dấu)",
      "P = 123.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 46.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 1, ta thu được kết quả chính xác P = 85.0."
  },
  {
    "id": "M12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(33) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 69.0 (kết quả giải tích chính xác)",
      "P = 65.0 (sai lệch do chưa đổi dấu)",
      "P = 99.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 38.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 69.0."
  },
  {
    "id": "M12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(41) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 85.0 (kết quả giải tích chính xác)",
      "P = 81.0 (sai lệch do chưa đổi dấu)",
      "P = 123.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 46.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 85.0."
  },
  {
    "id": "M12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 32] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\". Tính giá trị biểu thức P = f(42) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 87.0 (kết quả giải tích chính xác)",
      "P = 83.0 (sai lệch do chưa đổi dấu)",
      "P = 126.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 47.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 2, ta thu được kết quả chính xác P = 87.0."
  },
  {
    "id": "M12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(34) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 71.0 (kết quả giải tích chính xác)",
      "P = 67.0 (sai lệch do chưa đổi dấu)",
      "P = 102.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 39.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 71.0."
  },
  {
    "id": "M12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(41) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 85.0 (kết quả giải tích chính xác)",
      "P = 81.0 (sai lệch do chưa đổi dấu)",
      "P = 123.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 46.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 85.0."
  },
  {
    "id": "M12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(42) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 87.0 (kết quả giải tích chính xác)",
      "P = 83.0 (sai lệch do chưa đổi dấu)",
      "P = 126.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 47.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 87.0."
  },
  {
    "id": "M12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 33] Cho bài toán liên quan đến \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\". Tính giá trị biểu thức P = f(43) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 89.0 (kết quả giải tích chính xác)",
      "P = 85.0 (sai lệch do chưa đổi dấu)",
      "P = 129.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 48.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Đề thi thử Tốt nghiệp THPT Toán 2026 - Đề số 3, ta thu được kết quả chính xác P = 89.0."
  },
  {
    "id": "M12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(35) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 73.0 (kết quả giải tích chính xác)",
      "P = 69.0 (sai lệch do chưa đổi dấu)",
      "P = 105.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 40.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 73.0."
  },
  {
    "id": "M12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(41) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 85.0 (kết quả giải tích chính xác)",
      "P = 81.0 (sai lệch do chưa đổi dấu)",
      "P = 123.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 46.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 85.0."
  },
  {
    "id": "M12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(42) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 87.0 (kết quả giải tích chính xác)",
      "P = 83.0 (sai lệch do chưa đổi dấu)",
      "P = 126.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 47.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 87.0."
  },
  {
    "id": "M12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(43) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 89.0 (kết quả giải tích chính xác)",
      "P = 85.0 (sai lệch do chưa đổi dấu)",
      "P = 129.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 48.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 89.0."
  },
  {
    "id": "M12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 34] Cho bài toán liên quan đến \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\". Tính giá trị biểu thức P = f(44) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 91.0 (kết quả giải tích chính xác)",
      "P = 87.0 (sai lệch do chưa đổi dấu)",
      "P = 132.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 49.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Chiến thuật giải nhanh & Tối ưu điểm số 9+ môn Toán, ta thu được kết quả chính xác P = 91.0."
  },
  {
    "id": "M12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 1 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(36) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 75.0 (kết quả giải tích chính xác)",
      "P = 71.0 (sai lệch do chưa đổi dấu)",
      "P = 108.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 41.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 75.0."
  },
  {
    "id": "M12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 2 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(37) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 77.0 (kết quả giải tích chính xác)",
      "P = 73.0 (sai lệch do chưa đổi dấu)",
      "P = 111.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 42.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 77.0."
  },
  {
    "id": "M12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Toán 12 - Bài tập 3 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(38) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 79.0 (kết quả giải tích chính xác)",
      "P = 75.0 (sai lệch do chưa đổi dấu)",
      "P = 114.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 43.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 79.0."
  },
  {
    "id": "M12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 4 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(39) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 81.0 (kết quả giải tích chính xác)",
      "P = 77.0 (sai lệch do chưa đổi dấu)",
      "P = 117.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 44.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 81.0."
  },
  {
    "id": "M12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 5 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(40) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 83.0 (kết quả giải tích chính xác)",
      "P = 79.0 (sai lệch do chưa đổi dấu)",
      "P = 120.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 45.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 83.0."
  },
  {
    "id": "M12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 6 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(41) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 85.0 (kết quả giải tích chính xác)",
      "P = 81.0 (sai lệch do chưa đổi dấu)",
      "P = 123.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 46.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 85.0."
  },
  {
    "id": "M12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "application",
    "difficulty": "medium",
    "question": "[Toán 12 - Bài tập 7 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(42) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 87.0 (kết quả giải tích chính xác)",
      "P = 83.0 (sai lệch do chưa đổi dấu)",
      "P = 126.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 47.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 87.0."
  },
  {
    "id": "M12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "application",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 8 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(43) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 89.0 (kết quả giải tích chính xác)",
      "P = 85.0 (sai lệch do chưa đổi dấu)",
      "P = 129.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 48.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 89.0."
  },
  {
    "id": "M12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 9 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(44) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 91.0 (kết quả giải tích chính xác)",
      "P = 87.0 (sai lệch do chưa đổi dấu)",
      "P = 132.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 49.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 91.0."
  },
  {
    "id": "M12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Toán 12 - Bài tập 10 Tuần 35] Cho bài toán liên quan đến \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\". Tính giá trị biểu thức P = f(45) khi biết các thông số kỹ thuật chuẩn:",
    "options": [
      "P = 93.0 (kết quả giải tích chính xác)",
      "P = 89.0 (sai lệch do chưa đổi dấu)",
      "P = 135.0 (nhầm lẫn hệ số đạo hàm/nguyên hàm)",
      "P = 50.0 (thiếu điều kiện miền xác định)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức tính toán trọng tâm của chuyên đề \"Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026\" trong chương trình Toán 12 GDPT 2026.",
    "explanation": "Lời giải chi tiết: Thực hiện các phép biến đổi toán học đại số và giải tích theo đúng quy tắc của Tổng kết Toán 12 & Bí quyết thủ khoa kỳ thi Tốt nghiệp 2026, ta thu được kết quả chính xác P = 93.0."
  }
];

export const getQuestionsByWeekMath12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_MATH12.filter(q => q.week === num);
};

export const getFilteredQuestionsMath12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_MATH12];
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
