// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH VẬT LÍ 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_PHYSICS12 = [
  {
    "id": 1,
    "title": "Chặng 1: Vật Lí Nhiệt & Thuyết Động Học Phân Tử",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Nhiệt độ, nhiệt dung riêng, nhiệt nóng chảy, hóa hơi và định luật 1 NĐLH",
    "icon": "BookOpen",
    "color": "from-sky-600 to-blue-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Khí Lí Tưởng & Các Đẳng Quá Trình",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Định luật Boyle, Charles, phương trình Clapeyron - Mendeleev",
    "icon": "Compass",
    "color": "from-indigo-600 to-purple-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Từ Trường & Cảm Ứng Điện Từ",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Lực từ, cảm ứng từ, từ thông và suất điện động cảm ứng Faraday",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Vật Lí Hạt Nhân & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Năng lượng liên kết, chu kỳ bán rã, phân hạch, nhiệt hạch",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_PHYSICS12 = [
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

export const WEEKS_METADATA_PHYSICS12 = {
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

export const QUESTION_BANK_PHYSICS12 = [
  {
    "id": "P12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ và thang đo Kelvin",
    "category": "theory",
    "difficulty": "easy",
    "question": "Nhiệt độ của một phòng học là 27 °C. Giá trị nhiệt độ này trong thang nhiệt độ Kelvin là:",
    "options": [
      "300.15 K",
      "246.15 K",
      "327.15 K",
      "273.15 K"
    ],
    "correctIndex": 0,
    "hint": "Công thức chuyển đổi: T (K) = t (°C) + 273.15.",
    "explanation": "T = 27 + 273.15 = 300.15 K."
  },
  {
    "id": "P12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng",
    "category": "application",
    "difficulty": "easy",
    "question": "Tính nhiệt lượng cần thiết để đun nóng 2 kg nước từ 20 °C đến 100 °C. Biết nhiệt dung riêng của nước c = 4200 J/(kg.K).",
    "options": [
      "672 000 J",
      "336 000 J",
      "840 000 J",
      "168 000 J"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức Q = m.c.Δt.",
    "explanation": "Q = m.c.(t₂ - t₁) = 2 . 4200 . (100 - 20) = 2 . 4200 . 80 = 672 000 J = 672 kJ."
  },
  {
    "id": "P12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật 1 NĐLH",
    "category": "application",
    "difficulty": "medium",
    "question": "Người ta truyền cho khí trong xilanh nhiệt lượng 100 J. Khí nở ra thực hiện công 70 J đẩy pittông lên. Độ biến thiên nội năng ΔU của khí là:",
    "options": [
      "30 J",
      "170 J",
      "-30 J",
      "-170 J"
    ],
    "correctIndex": 0,
    "hint": "ΔU = Q + A. Khí nhận nhiệt: Q > 0; khí thực hiện công: A < 0.",
    "explanation": "Q = +100 J; A = -70 J. ΔU = Q + A = 100 - 70 = +30 J."
  },
  {
    "id": "P12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "Tính nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 500 g nước đá ở 0 °C. Biết nhiệt nóng chảy riêng của nước đá λ = 3.34 × 10⁵ J/kg.",
    "options": [
      "1.67 × 10⁵ J",
      "3.34 × 10⁵ J",
      "6.68 × 10⁵ J",
      "1.67 × 10⁴ J"
    ],
    "correctIndex": 0,
    "hint": "Công thức Q = m.λ (chú ý đổi m = 0.5 kg).",
    "explanation": "Q = m.λ = 0.5 . 3.34 × 10⁵ = 1.67 × 10⁵ J = 167 kJ."
  },
  {
    "id": "P12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài tập 5 Tuần 1] Cung cấp nhiệt lượng Q = 2500 J cho một khối chất có khối lượng m = 0.7 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 12.5 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 6.0 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 24.0 K (áp dụng nhầm công thức khí)",
      "Δt = 4.5 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 12.5 K."
  },
  {
    "id": "P12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài tập 6 Tuần 1] Cung cấp nhiệt lượng Q = 3000 J cho một khối chất có khối lượng m = 0.8 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 15.0 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 7.2 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 28.8 K (áp dụng nhầm công thức khí)",
      "Δt = 5.4 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 15.0 K."
  },
  {
    "id": "P12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài tập 7 Tuần 1] Cung cấp nhiệt lượng Q = 3500 J cho một khối chất có khối lượng m = 0.9 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 17.5 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 8.4 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 33.6 K (áp dụng nhầm công thức khí)",
      "Δt = 6.3 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 17.5 K."
  },
  {
    "id": "P12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài tập 8 Tuần 1] Cung cấp nhiệt lượng Q = 4000 J cho một khối chất có khối lượng m = 0.10 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 20.0 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 9.6 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 38.4 K (áp dụng nhầm công thức khí)",
      "Δt = 7.2 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 20.0 K."
  },
  {
    "id": "P12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài tập 9 Tuần 1] Cung cấp nhiệt lượng Q = 4500 J cho một khối chất có khối lượng m = 0.11 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 22.5 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 10.8 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 43.2 K (áp dụng nhầm công thức khí)",
      "Δt = 8.1 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 22.5 K."
  },
  {
    "id": "P12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài tập 10 Tuần 1] Cung cấp nhiệt lượng Q = 5000 J cho một khối chất có khối lượng m = 0.12 kg. Độ tăng nhiệt độ Δt của khối chất là:",
    "options": [
      "Δt = 25.0 K (tính đúng theo Q = m.c.Δt)",
      "Δt = 12.0 K (sai do quên đổi đơn vị khối lượng)",
      "Δt = 48.0 K (áp dụng nhầm công thức khí)",
      "Δt = 9.0 K (sai số ở hệ số dẫn nhiệt)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật truyền nhiệt Q = m.c.Δt và cân bằng nhiệt lượng.",
    "explanation": "Lời giải: Biến đổi Δt = Q / (m.c) với các thông số đề bài, thu được độ tăng nhiệt độ Δt = 25.0 K."
  },
  {
    "id": "P12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 2] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 3] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 4] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 5] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 6] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 7] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một khối khí lí tưởng có thể tích 11 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 5 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "2.20 atm",
      "1.10 atm",
      "3.30 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (11 . 1.0) / 5 = 2.20 atm."
  },
  {
    "id": "P12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một khối khí lí tưởng có thể tích 12 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 6 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "2.00 atm",
      "1.00 atm",
      "3.00 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (12 . 1.0) / 6 = 2.00 atm."
  },
  {
    "id": "P12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một khối khí lí tưởng có thể tích 13 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 4 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "3.25 atm",
      "1.63 atm",
      "4.88 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (13 . 1.0) / 4 = 3.25 atm."
  },
  {
    "id": "P12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "theory",
    "difficulty": "medium",
    "question": "Một khối khí lí tưởng có thể tích 14 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 5 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "2.80 atm",
      "1.40 atm",
      "4.20 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (14 . 1.0) / 5 = 2.80 atm."
  },
  {
    "id": "P12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "application",
    "difficulty": "medium",
    "question": "Một khối khí lí tưởng có thể tích 15 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 6 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "2.50 atm",
      "1.25 atm",
      "3.75 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (15 . 1.0) / 6 = 2.50 atm."
  },
  {
    "id": "P12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "application",
    "difficulty": "medium",
    "question": "Một khối khí lí tưởng có thể tích 16 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 4 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "4.00 atm",
      "2.00 atm",
      "6.00 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (16 . 1.0) / 4 = 4.00 atm."
  },
  {
    "id": "P12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "application",
    "difficulty": "medium",
    "question": "Một khối khí lí tưởng có thể tích 17 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 5 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "3.40 atm",
      "1.70 atm",
      "5.10 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (17 . 1.0) / 5 = 3.40 atm."
  },
  {
    "id": "P12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "application",
    "difficulty": "hard",
    "question": "Một khối khí lí tưởng có thể tích 18 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 6 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "3.00 atm",
      "1.50 atm",
      "4.50 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (18 . 1.0) / 6 = 3.00 atm."
  },
  {
    "id": "P12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Một khối khí lí tưởng có thể tích 19 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 4 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "4.75 atm",
      "2.38 atm",
      "7.13 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (19 . 1.0) / 4 = 4.75 atm."
  },
  {
    "id": "P12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle (Đẳng nhiệt)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Một khối khí lí tưởng có thể tích 20 lít ở áp suất 1.0 atm. Nén đẳng nhiệt khối khí đến thể tích 5 lít. Áp suất khối khí sau khi nén là:",
    "options": [
      "4.00 atm",
      "2.00 atm",
      "6.00 atm",
      "1.00 atm"
    ],
    "correctIndex": 0,
    "hint": "Định luật Boyle: p₁.V₁ = p₂.V₂ => p₂ = p₁.V₁ / V₂.",
    "explanation": "Theo định luật Boyle: p₂ = (20 . 1.0) / 5 = 4.00 atm."
  },
  {
    "id": "P12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 9] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 10] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 11] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 12] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 13] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 14] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 15] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 16] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 17] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 18] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 19] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 20] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 21] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 22] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 23] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 24] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 25] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 26] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 32 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "6.25 %",
      "12.50 %",
      "25.00 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-4) = 6.25 %."
  },
  {
    "id": "P12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 40 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "3.13 %",
      "6.25 %",
      "16.67 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-5) = 3.13 %."
  },
  {
    "id": "P12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "theory",
    "difficulty": "easy",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 48 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "1.56 %",
      "3.13 %",
      "12.50 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-6) = 1.56 %."
  },
  {
    "id": "P12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "theory",
    "difficulty": "medium",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 56 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.78 %",
      "1.56 %",
      "10.00 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-7) = 0.78 %."
  },
  {
    "id": "P12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "application",
    "difficulty": "medium",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 64 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.39 %",
      "0.78 %",
      "8.33 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-8) = 0.39 %."
  },
  {
    "id": "P12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "application",
    "difficulty": "medium",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 72 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.20 %",
      "0.39 %",
      "7.14 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-9) = 0.20 %."
  },
  {
    "id": "P12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "application",
    "difficulty": "medium",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 80 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.10 %",
      "0.20 %",
      "6.25 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-10) = 0.10 %."
  },
  {
    "id": "P12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "application",
    "difficulty": "hard",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 88 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.05 %",
      "0.10 %",
      "5.56 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-11) = 0.05 %."
  },
  {
    "id": "P12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 96 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.02 %",
      "0.05 %",
      "5.00 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-12) = 0.02 %."
  },
  {
    "id": "P12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ & Chu kỳ bán rã",
    "category": "advanced",
    "difficulty": "hard",
    "question": "Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau thời gian t = 104 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với ban đầu là:",
    "options": [
      "0.01 %",
      "0.02 %",
      "4.55 %",
      "0.00 %"
    ],
    "correctIndex": 0,
    "hint": "Số hạt nhân còn lại: N(t) = N₀ . 2^(-t/T).",
    "explanation": "Áp dụng công thức N/N₀ = 2^(-t/T) = 2^(-13) = 0.01 %."
  },
  {
    "id": "P12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 28] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 29] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 30] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 31] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 32] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 33] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 34] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 1 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 1.5 A, B = 0.3 T, l = 0.5 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.203 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 2 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 2 A, B = 0.4 T, l = 0.6 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.400 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Bài toán tính toán 3 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 2.5 A, B = 0.5 T, l = 0.7 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 0.688 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 4 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 3 A, B = 0.6 T, l = 0.8 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.080 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 5 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 3.5 A, B = 0.7 T, l = 0.9 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 1.592 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 6 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 4 A, B = 0.8 T, l = 0.10 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 2.240 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Bài toán tính toán 7 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 4.5 A, B = 0.9 T, l = 0.11 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 3.038 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 8 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 5 A, B = 0.10 T, l = 0.12 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 4.000 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 9 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 5.5 A, B = 0.11 T, l = 0.13 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 5.143 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  },
  {
    "id": "P12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyên đề Vật Lí 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Bài toán tính toán 10 Tuần 35] Cho mạch điện/quá trình vật lí với thông số I = 6 A, B = 0.12 T, l = 0.14 m. Tính giá trị đại lượng đặc trưng:",
    "options": [
      "Kết quả tính toán chuẩn SI: 6.480 đơn vị chuẩn",
      "Kết quả sai số do quên nhân hệ số góc sin(alpha)",
      "Kết quả sai thứ nguyên do nhầm lẫn giữa mili- và micro-",
      "Giá trị không thỏa mãn định luật bảo toàn năng lượng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí tương ứng và đổi toàn bộ đơn vị về hệ chuẩn SI.",
    "explanation": "Giải thích chi tiết: Thay các giá trị vào hệ thức chuẩn ta thu được kết quả chính xác."
  }
];

export const getQuestionsByWeekPhysics12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_PHYSICS12.filter(q => q.week === num);
};

export const getFilteredQuestionsPhysics12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_PHYSICS12];
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
