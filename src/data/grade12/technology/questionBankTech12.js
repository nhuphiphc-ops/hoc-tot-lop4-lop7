// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH CÔNG NGHỆ 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_TECH12 = [
  {
    "id": 1,
    "title": "Chặng 1: Hệ Thống Điện Ba Pha & Máy Biến Áp",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Mạch điện 3 pha, nối sao/tam giác, máy biến áp và động cơ không đồng bộ",
    "icon": "BookOpen",
    "color": "from-lime-600 to-emerald-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Mạng Điện Hạ Áp & An Toàn Sử Dụng Điện",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Thiết bị đóng cắt (Aptomat, rơle), chống giật và tiết kiệm điện năng",
    "icon": "Compass",
    "color": "from-amber-600 to-orange-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Kĩ Thuật Điện Tử & Vi Điều Khiển Ứng Dụng",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Linh kiện bán dẫn, mạch chỉnh lưu, khuếch đại và cảm biến IoT",
    "icon": "Award",
    "color": "from-blue-600 to-indigo-700"
  },
  {
    "id": 4,
    "title": "Chặng 4: Năng Lượng Tái Tạo & Luyện Đề Tốt Nghiệp 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Điện mặt trời, điện gió và luyện đề thi Công nghệ Quốc gia",
    "icon": "GraduationCap",
    "color": "from-purple-600 to-pink-600"
  }
];

export const TOPIC_CATEGORIES_TECH12 = [
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

export const WEEKS_METADATA_TECH12 = {};

export const QUESTION_BANK_TECH12 = [
  {
    "id": "T12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 1] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 2] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 3] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 4] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 5] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 6] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 7] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 8] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 9] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Bài tập 10] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 1] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 2] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 3] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 4] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 5] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 6] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 7] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 8] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 9] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Bài tập 10] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 1] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 2] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 3] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 4] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 5] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 6] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 7] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 8] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 9] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Bài tập 10] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 1] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 2] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 3] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 4] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 5] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 6] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 7] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 8] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 9] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Bài tập 10] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 1] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 2] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 3] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 4] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 5] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 6] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 7] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 8] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 9] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Bài tập 10] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 1] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 2] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 3] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 4] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 5] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 6] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 7] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 8] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 9] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Bài tập 10] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 1] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 2] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 3] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 4] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 5] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 6] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 7] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 8] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 9] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Bài tập 10] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 1] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 2] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 3] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 4] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 5] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 6] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 7] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 8] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 9] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Bài tập 10] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 1] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 2] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 3] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 4] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 5] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 6] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 7] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 8] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 9] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Công Nghệ 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Bài tập 10] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 1] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 2] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 3] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 4] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 5] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 6] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 7] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 8] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 9] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Bài tập 10] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 1] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 2] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 3] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 4] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 5] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 6] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 7] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 8] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 9] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Bài tập 10] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 1] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 2] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 3] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 4] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 5] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 6] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 7] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 8] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 9] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Bài tập 10] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 1] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 2] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 3] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 4] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 5] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 6] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 7] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 8] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 9] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Bài tập 10] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 1] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 2] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 3] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 4] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 5] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 6] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 7] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 8] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 9] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Bài tập 10] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 1] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 2] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 3] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 4] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 5] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 6] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 7] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 8] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 9] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Bài tập 10] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 1] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 2] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 3] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 4] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 5] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 6] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 7] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 8] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 9] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Bài tập 10] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 1] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 2] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 3] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 4] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 5] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 6] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 7] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 8] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 9] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Bài tập 10] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 1] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 2] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 3] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 4] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 5] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 6] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 7] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 8] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 9] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Công Nghệ 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Bài tập 10] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 1] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 2] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 3] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 4] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 5] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 6] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 7] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 8] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 9] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Bài tập 10] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 1] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 2] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 3] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 4] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 5] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 6] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 7] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 8] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 9] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Bài tập 10] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 1] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 2] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 3] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 4] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 5] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 6] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 7] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 8] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 9] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Bài tập 10] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 1] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 2] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 3] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 4] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 5] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 6] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 7] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 8] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 9] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Bài tập 10] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 1] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 2] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 3] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 4] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 5] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 6] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 7] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 8] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 9] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Bài tập 10] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 1] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 2] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 3] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 4] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 5] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 6] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 7] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 8] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 9] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Bài tập 10] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 1] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 2] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 3] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 4] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 5] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 6] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 7] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 8] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 9] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Bài tập 10] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 1] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 2] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 3] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 4] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 5] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 6] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 7] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 8] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 9] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Bài tập 10] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 1] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 2] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 3] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 4] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 5] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 6] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 7] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 8] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 9] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Công Nghệ 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Bài tập 10] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 1] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 2] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 3] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 4] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 5] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 6] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 7] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 8] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 9] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Bài tập 10] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 1] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 2] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 3] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 4] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 5] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 6] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 7] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 8] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 9] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Bài tập 10] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 1] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 2] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 3] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 4] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 5] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 6] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 7] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 8] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 9] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Bài tập 10] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 1] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 2] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 3] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 4] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 5] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 6] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 7] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 8] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 9] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Bài tập 10] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 1] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 2] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 3] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 4] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 5] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 6] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 7] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 8] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 9] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Bài tập 10] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 1] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 2] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 3] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 4] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 5] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 6] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 7] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 8] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 9] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Bài tập 10] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 1] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 2] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 3] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  },
  {
    "id": "T12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 4] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 5] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 6] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 7] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 8] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 9] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Bài tập 10] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 1] Công suất tiêu thụ của mạch điện ba pha đối xứng có tải nối hình sao với Ud = 380 V, Id = 10 A, hệ số công suất cosφ = 0.8 là:",
    "options": [
      "P ≈ 5265 W (5.265 kW)",
      "P ≈ 3040 W",
      "P ≈ 9120 W",
      "P ≈ 4200 W"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: P = √3 . Ud . Id . cosφ = √3 * 380 * 10 * 0.8 ≈ 1.732 * 380 * 8 ≈ 5265 W."
  },
  {
    "id": "T12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 2] Để chống điện giật do dòng điện rò ra vỏ kim loại của thiết bị, người ta lắp thêm thiết bị an toàn nào?",
    "options": [
      "Aptomat chống dòng rò (ELCB/RCCB)",
      "Điện trở xả",
      "Biến áp cách li",
      "Rơle nhiệt"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: ELCB (Earth Leakage Circuit Breaker) tự động phát hiện dòng rò xuống đất và ngắt điện trong vài mili-giây để bảo vệ tính mạng."
  },
  {
    "id": "T12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 3] Trong động cơ không đồng bộ ba pha, tốc độ quay của roto n luôn có quan hệ thế nào với tốc độ của từ trường quay n1?",
    "options": [
      "n < n1 (nhỏ hơn)",
      "n = n1 (bằng nhau)",
      "n > n1 (lớn hơn)",
      "n = 2 . n1"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Vì roto quay không đồng bộ nên tốc độ n của roto luôn nhỏ hơn tốc độ từ trường quay n1 (độ trượt s = (n1 - n)/n1 > 0)."
  },
  {
    "id": "T12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 4] Cảm biến quang (LDR / Quang điện trở) có đặc tính điện trở biến đổi như thế nào khi cường độ ánh sáng chiếu vào tăng lên?",
    "options": [
      "Điện trở giảm mạnh",
      "Điện trở tăng mạnh",
      "Điện trở không đổi",
      "Điện trở về vô cùng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Quang điện trở (LDR) làm từ chất bán dẫn, khi có ánh sáng chiếu vào giải phóng electron dẫn làm điện trở giảm mạnh."
  },
  {
    "id": "T12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 5] Trong nguồn điện ba pha đối xứng nối hình sao (Y), mối quan hệ giữa điện áp dây Ud và điện áp pha Up là:",
    "options": [
      "Ud = √3 . Up",
      "Ud = Up",
      "Ud = Up / √3",
      "Ud = 3 . Up"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Khi nối hình sao (Y), điện áp dây bằng căn 3 lần điện áp pha: Ud = √3 . Up; dòng điện dây bằng dòng điện pha Id = Ip."
  },
  {
    "id": "T12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 6] Một tải ba pha gồm 3 điện trở R = 22 Ω nối hình sao vào nguồn điện ba pha có điện áp pha Up = 220 V. Dòng điện pha Ip chạy qua mỗi tải là:",
    "options": [
      "10 A",
      "22 A",
      "5 A",
      "15 A"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Áp dụng định luật Ohm: Ip = Up / R = 220 / 22 = 10 A."
  },
  {
    "id": "T12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 7] Linh kiện điện tử bán dẫn nào dùng để biến đổi dòng điện xoay chiều (AC) thành dòng điện một chiều (DC)?",
    "options": [
      "Diode bán dẫn (Chỉnh lưu)",
      "Tụ điện",
      "Điện trở",
      "Cuộn cảm"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Diode có tính dẫn điện một chiều từ Anot sang Catot nên được dùng trong mạch chỉnh lưu AC thành DC."
  },
  {
    "id": "T12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 8] Một máy biến áp ba pha có điện áp sơ cấp Ud1 = 22 kV, điện áp thứ cấp Ud2 = 0.4 kV (400 V). Tỉ số biến áp k là:",
    "options": [
      "55",
      "22",
      "110",
      "44"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: k = Ud1 / Ud2 = 22 000 / 400 = 55."
  },
  {
    "id": "T12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 9] Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch khi xảy ra sự cố quá tải hoặc ngắn mạch?",
    "options": [
      "Aptomat (Cầu dao tự động - CB)",
      "Công tắc",
      "Ổ cắm điện",
      "Đồng hồ vạn năng"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Aptomat (Circuit Breaker - CB) tích hợp chức năng của cầu chì và cầu dao, tự động ngắt khi quá tải hoặc chập mạch."
  },
  {
    "id": "T12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Công Nghệ 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Bài tập 10] Transistor BJT có 3 cực kí hiệu là:",
    "options": [
      "B (Base), C (Collector), E (Emitter)",
      "A (Anot), K (Catot), G (Gate)",
      "D (Drain), S (Source), G (Gate)",
      "Vcc, GND, Out"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức mạch 3 pha (Ud, Up, P = √3.Ud.Id.cosφ) và nguyên lí linh kiện điện tử.",
    "explanation": "Hướng dẫn giải chi tiết: Transistor lưỡng cực BJT gồm 3 cực: Cực gốc (B - Base), Cực góp (C - Collector), Cực phát (E - Emitter)."
  }
];

export const getQuestionsByWeekTech12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_TECH12.filter(q => q.week === num);
};

export const getFilteredQuestionsTech12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_TECH12];
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
