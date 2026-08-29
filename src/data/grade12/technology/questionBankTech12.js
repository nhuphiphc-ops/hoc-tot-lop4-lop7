// NGÂN HÀNG CÂU HỎI CÔNG NGHỆ 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

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
    "name": "Nhận Biết & Lý Thuyết",
    "color": "bg-blue-100 text-blue-800"
  },
  {
    "id": "application",
    "name": "Thông Hiểu & Vận Dụng",
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

export const WEEKS_METADATA_TECH12 = {
  "1": {
    "title": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Công Nghệ 12."
  },
  "2": {
    "title": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Công Nghệ 12."
  },
  "3": {
    "title": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Công Nghệ 12."
  },
  "4": {
    "title": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Công Nghệ 12."
  },
  "5": {
    "title": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Công Nghệ 12."
  },
  "6": {
    "title": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Công Nghệ 12."
  },
  "7": {
    "title": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Công Nghệ 12."
  },
  "8": {
    "title": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Công Nghệ 12."
  },
  "9": {
    "title": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Công Nghệ 12."
  },
  "10": {
    "title": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Công Nghệ 12."
  },
  "11": {
    "title": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Công Nghệ 12."
  },
  "12": {
    "title": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Công Nghệ 12."
  },
  "13": {
    "title": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Công Nghệ 12."
  },
  "14": {
    "title": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Công Nghệ 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Công Nghệ 12."
  },
  "16": {
    "title": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Công Nghệ 12."
  },
  "17": {
    "title": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Công Nghệ 12."
  },
  "18": {
    "title": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Công Nghệ 12."
  },
  "19": {
    "title": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Công Nghệ 12."
  },
  "20": {
    "title": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Công Nghệ 12."
  },
  "21": {
    "title": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Công Nghệ 12."
  },
  "22": {
    "title": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Công Nghệ 12."
  },
  "23": {
    "title": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Công Nghệ 12."
  },
  "24": {
    "title": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Công Nghệ 12."
  },
  "25": {
    "title": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Công Nghệ 12."
  },
  "26": {
    "title": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Công Nghệ 12."
  },
  "27": {
    "title": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Công Nghệ 12."
  },
  "28": {
    "title": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Công Nghệ 12."
  },
  "29": {
    "title": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Công Nghệ 12."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Công Nghệ 12."
  },
  "31": {
    "title": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Công Nghệ 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Công Nghệ 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Công Nghệ 12."
  },
  "34": {
    "title": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Công Nghệ 12."
  },
  "35": {
    "title": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Công Nghệ 12."
  }
};

export const QUESTION_BANK_TECH12 = [
  {
    "id": "TECH12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm và đặc điểm của hệ thống điện ba pha",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 1 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Khái niệm và đặc điểm của hệ thống điện ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Khái niệm và đặc điểm của hệ thống điện ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 2 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cách nối nguồn và tải ba pha hình sao (Y) và tam giác (Δ)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 3 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mối quan hệ giữa đại lượng dây và đại lượng pha (Ud, Up, Id, Ip)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 4 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Công suất trong mạch điện xoay chiều ba pha: P = √3.Ud.Id.cosφ\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 5 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Máy biến áp ba pha: Cấu tạo, nguyên lí hoạt động và tỉ số biến áp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 6 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Động cơ không đồng bộ ba pha: Cấu tạo roto lồng sóc và nguyên tắc hoạt động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 7 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp khởi động và đảo chiều quay động cơ không đồng bộ ba pha\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 8 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện sản xuất quy mô nhỏ: Sơ đồ nguyên lí và phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 9 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập chuyên đề: Kĩ thuật điện ba pha và máy điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 10 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Mạng điện hạ áp trong gia đình: Cấu tạo và các phần tử cơ bản\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 11 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị đóng cắt và bảo vệ: Cầu chì, Aptomat (CB), Rơle nhiệt\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 12 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Thiết bị chống dòng rò (ELCB/RCCB) và an toàn sử dụng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 13 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tính toán và lựa chọn dây dẫn, thiết bị bảo vệ theo công suất phụ tải\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 14 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Quy trình lắp đặt mạch điện chiếu sáng và bảng điện an toàn\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 15 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Ôn tập & Kiểm tra Học kỳ I môn Công Nghệ 12\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 16 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử thụ động: Điện trở, tụ điện, cuộn cảm và thông số\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 17 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Linh kiện điện tử bán dẫn: Diode bán dẫn và mạch chỉnh lưu dòng điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 18 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Transistor (BJT, MOSFET): Nguyên lí khuếch đại và khóa điện tử\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 19 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiristo (SCR) và Triac: Điều khiển công suất dòng điện xoay chiều\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 20 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi mạch tích hợp (IC) và mạch khuếch đại thuật toán (Op-Amp)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 21 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Cảm biến (Sensor) đo nhiệt độ, ánh sáng, độ ẩm và cảm biến chuyển động\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 22 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Vi điều khiển cơ bản (Arduino/ESP32) và ứng dụng trong tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 23 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống nhà thông minh (Smart Home) và ứng dụng Internet vạn vật (IoT)\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 24 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Năng lượng tái tạo: Hệ thống điện năng lượng mặt trời nối lưới và độc lập\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 25 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Hệ thống phát điện bằng năng lượng gió và lưu trữ năng lượng pin lithium\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 26 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tiết kiệm điện năng và sử dụng năng lượng hiệu quả trong công nghiệp\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 27 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Bảo dưỡng, sửa chữa và xử lí sự cố mạng điện gia đình\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 28 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Kĩ thuật điện\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 29 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Chuyên đề Điện tử & Tự động hóa\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 30 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Luyện đề Tốt nghiệp THPT Công Nghệ: Bài toán tính toán mạch điện thực tế\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 31 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 1\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 32 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 2\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 33 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Đề thi thử Tốt nghiệp THPT Công Nghệ 2026 - Đề số 3\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 34 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Phương pháp đọc sơ đồ mạch điện và xử lí nhanh câu hỏi trắc nghiệm\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 1] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 2] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 3] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 4] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 5] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 6] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 7] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "application",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 8] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 9] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
  },
  {
    "id": "TECH12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Công Nghệ 12 - Tuần 35 - Câu 10] Về công nghệ điện - điện tử trong bài học \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\", kết luận kĩ thuật nào sau đây là ĐÚNG?",
    "options": [
      "Công thức tính dòng điện dây, điện áp dây khi nối hình sao hoặc tam giác bị áp dụng sai hệ số căn 3.",
      "Kết luận phản ánh đúng nguyên lí mạch điện ba pha / máy điện / linh kiện điện tử trong bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
      "Nhầm lẫn cực tính và chức năng của Diode, Transistor hoặc vi điều khiển trong mạch điện tử.",
      "Quy trình lắp đặt và an toàn điện trong mạng điện gia đình/sản xuất chưa bảo đảm tiêu chuẩn kĩ thuật."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng công thức dòng điện/điện áp 3 pha và sơ đồ nguyên lí mạch điện bài \"Tổng kết Công Nghệ 12 & Định hướng ngành kĩ thuật điện - điện tử tương lai\".",
    "explanation": "Hướng dẫn kĩ thuật: Vận dụng đúng quy chuẩn kĩ thuật điện và nguyên lí hoạt động của các thiết bị điện - điện tử trong chương trình Công nghệ 12 GDPT Mới."
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
