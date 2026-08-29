// NGÂN HÀNG CÂU HỎI HÓA HỌC 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_CHEM12 = [
  {
    "id": 1,
    "title": "Chặng 1: Ester, Lipid & Carbohydrate",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Xà phòng hóa, chất béo, glucose, fructose, saccharose và tinh bột",
    "icon": "BookOpen",
    "color": "from-purple-600 to-indigo-800"
  },
  {
    "id": 2,
    "title": "Chặng 2: Hợp Chất Chứa Nitrogen & Polymer",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Amine, amino acid, peptide, protein và vật liệu polymer",
    "icon": "Compass",
    "color": "from-blue-600 to-cyan-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Pin Điện Hóa, Điện Phân & Ăn Mòn Kim Loại",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Cặp oxi hóa khử, thế điện cực chuẩn, pin Galvani và mạ điện",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Kim Loại Chuyển Tiếp, Phức Chất & Luyện Đề 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Cấu trúc phức chất, hóa học môi trường và đề thi Tốt nghiệp THPT",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_CHEM12 = [
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

export const WEEKS_METADATA_CHEM12 = {
  "1": {
    "title": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Hóa Học 12."
  },
  "2": {
    "title": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Hóa Học 12."
  },
  "3": {
    "title": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Hóa Học 12."
  },
  "4": {
    "title": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Hóa Học 12."
  },
  "5": {
    "title": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Hóa Học 12."
  },
  "6": {
    "title": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Hóa Học 12."
  },
  "7": {
    "title": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Hóa Học 12."
  },
  "8": {
    "title": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Hóa Học 12."
  },
  "9": {
    "title": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Hóa Học 12."
  },
  "10": {
    "title": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Hóa Học 12."
  },
  "11": {
    "title": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Hóa Học 12."
  },
  "12": {
    "title": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Hóa Học 12."
  },
  "13": {
    "title": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Hóa Học 12."
  },
  "14": {
    "title": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Hóa Học 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Hóa Học 12."
  },
  "16": {
    "title": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Hóa Học 12."
  },
  "17": {
    "title": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Hóa Học 12."
  },
  "18": {
    "title": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Hóa Học 12."
  },
  "19": {
    "title": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Hóa Học 12."
  },
  "20": {
    "title": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Hóa Học 12."
  },
  "21": {
    "title": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Hóa Học 12."
  },
  "22": {
    "title": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Hóa Học 12."
  },
  "23": {
    "title": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Hóa Học 12."
  },
  "24": {
    "title": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Hóa Học 12."
  },
  "25": {
    "title": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Hóa Học 12."
  },
  "26": {
    "title": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Hóa Học 12."
  },
  "27": {
    "title": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Hóa Học 12."
  },
  "28": {
    "title": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Hóa Học 12."
  },
  "29": {
    "title": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Hóa Học 12."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Hóa Học 12."
  },
  "31": {
    "title": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Hóa Học 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Hóa Học 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Hóa Học 12."
  },
  "34": {
    "title": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Hóa Học 12."
  },
  "35": {
    "title": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Hóa Học 12."
  }
};

export const QUESTION_BANK_CHEM12 = [
  {
    "id": "CHEM12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 1] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 2] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 3] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 4] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 5] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 6] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 7] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 8] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 9] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Câu 10] Cho chuyên đề \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ester: Khái niệm, danh pháp, tính chất vật lí và phương pháp điều chế\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 1] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 2] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 3] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 4] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 5] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 6] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 7] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 8] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 9] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Câu 10] Cho chuyên đề \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Ester: Phản ứng thủy phân trong môi trường acid và kiềm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 1] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 2] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 3] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 4] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 5] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 6] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 7] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 8] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 9] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Câu 10] Cho chuyên đề \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Lipid, chất béo và phản ứng xà phòng hóa chất béo (Triglyceride)\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 1] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 2] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 3] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 4] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 5] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 6] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 7] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 8] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 9] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Xà phòng và chất giặt rửa tổng hợp trong đời sống",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Câu 10] Cho chuyên đề \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Xà phòng và chất giặt rửa tổng hợp trong đời sống\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 1] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 2] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 3] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 4] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 5] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 6] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 7] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 8] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 9] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Câu 10] Cho chuyên đề \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Glucose và Fructose: Cấu tạo phân tử, phản ứng tráng bạc và khử Cu(OH)₂\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 1] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 2] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 3] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 4] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 5] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 6] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 7] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 8] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 9] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Câu 10] Cho chuyên đề \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Saccharose và Maltose: Tính chất hóa học và phản ứng thủy phân\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 1] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 2] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 3] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 4] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 5] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 6] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 7] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 8] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 9] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Câu 10] Cho chuyên đề \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tinh bột và Cellulose: Cấu trúc không gian và phản ứng với Iot, HNO₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 1] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 2] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 3] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 4] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 5] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 6] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 7] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 8] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 9] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Câu 10] Cho chuyên đề \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ứng dụng thực tiễn của Carbohydrate trong dinh dưỡng và công nghiệp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 1] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 2] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 3] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 4] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 5] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 6] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 7] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 8] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 9] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Ôn tập chuyên đề: Ester - Lipid - Carbohydrate",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Câu 10] Cho chuyên đề \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập chuyên đề: Ester - Lipid - Carbohydrate\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 1] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 2] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 3] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 4] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 5] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 6] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 7] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 8] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 9] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Amine: Khái niệm, phân loại bậc amine và danh pháp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Câu 10] Cho chuyên đề \"Amine: Khái niệm, phân loại bậc amine và danh pháp\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amine: Khái niệm, phân loại bậc amine và danh pháp\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 1] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 2] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 3] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 4] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 5] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 6] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 7] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 8] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 9] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Câu 10] Cho chuyên đề \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tính chất hóa học của Amine: Tính base, phản ứng với acid và FeCl₃\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 1] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 2] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 3] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 4] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 5] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 6] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 7] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 8] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 9] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Câu 10] Cho chuyên đề \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Amino Acid: Cấu tạo lưỡng cực, tính lưỡng tính và điểm đẳng điện\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 1] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 2] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 3] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 4] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 5] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 6] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 7] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 8] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 9] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Câu 10] Cho chuyên đề \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Peptide và Protein: Liên kết peptide, phản ứng màu Biuret và đông tụ\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 1] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 2] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 3] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 4] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 5] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 6] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 7] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 8] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 9] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Enzyme và xúc tác sinh học trong chuyển hóa vật chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Câu 10] Cho chuyên đề \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Enzyme và xúc tác sinh học trong chuyển hóa vật chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 1] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 2] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 3] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 4] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 5] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 6] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 7] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 8] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 9] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Câu 10] Cho chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Hóa Học 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 1] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 2] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 3] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 4] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 5] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 6] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 7] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 8] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 9] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Câu 10] Cho chuyên đề \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Polymer: Khái niệm, danh pháp, phản ứng trùng hợp và trùng ngưng\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 1] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 2] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 3] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 4] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 5] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 6] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 7] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 8] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 9] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Câu 10] Cho chuyên đề \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Vật liệu Polymer: Chất dẻo (PE, PVC, PS), tơ (nilon-6,6), cao su và keo dán\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 1] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 2] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 3] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 4] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 5] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 6] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 7] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 8] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 9] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Câu 10] Cho chuyên đề \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Thế điện cực chuẩn của kim loại E°(Mn+/M) và dãy điện hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 1] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 2] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 3] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 4] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 5] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 6] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 7] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 8] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 9] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Câu 10] Cho chuyên đề \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Pin điện hóa Galvani: Cấu tạo, cơ chế phát sinh dòng điện và tính suất điện động\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 1] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 2] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 3] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 4] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 5] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 6] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 7] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 8] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 9] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Điện phân nóng chảy và điện phân dung dịch chất điện li",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Câu 10] Cho chuyên đề \"Điện phân nóng chảy và điện phân dung dịch chất điện li\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Điện phân nóng chảy và điện phân dung dịch chất điện li\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 1] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 2] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 3] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 4] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 5] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 6] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 7] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 8] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 9] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Câu 10] Cho chuyên đề \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Ăn mòn kim loại: Ăn mòn hóa học và ăn mòn điện hóa học\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 1] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 2] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 3] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 4] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 5] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 6] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 7] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 8] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 9] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Câu 10] Cho chuyên đề \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Phương pháp chống ăn mòn kim loại và bảo vệ ca-tốt\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 1] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 2] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 3] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 4] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 5] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 6] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 7] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 8] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 9] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Câu 10] Cho chuyên đề \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đại cương kim loại nhóm IA, IIA và nhôm: Tính khử mạnh và hợp chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 1] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 2] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 3] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 4] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 5] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 6] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 7] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 8] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 9] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Câu 10] Cho chuyên đề \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr): Cấu hình electron và số oxi hóa\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 1] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 2] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 3] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 4] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 5] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 6] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 7] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 8] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 9] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Câu 10] Cho chuyên đề \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hợp chất phức chất: Khái niệm nguyên tử trung tâm, phối tử và cầu phối trí\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 1] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 2] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 3] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 4] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 5] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 6] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 7] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 8] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 9] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Câu 10] Cho chuyên đề \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Danh pháp và ứng dụng của phức chất trong y học, hóa học phân tích\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 1] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 2] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 3] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 4] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 5] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 6] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 7] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 8] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 9] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Câu 10] Cho chuyên đề \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Hóa học và vấn đề bảo vệ môi trường, phát triển bền vững\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 1] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 2] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 3] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 4] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 5] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 6] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 7] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 8] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 9] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Câu 10] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Hóa hữu cơ 12\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 1] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 2] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 3] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 4] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 5] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 6] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 7] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 8] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 9] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Câu 10] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Điện hóa & Phức chất\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 1] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 2] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 3] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 4] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 5] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 6] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 7] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 8] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 9] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Câu 10] Cho chuyên đề \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Luyện đề Tốt nghiệp THPT: Bài toán thực tế & Bảng số liệu\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 1] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 2] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 3] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 4] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 5] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 6] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 7] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 8] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 9] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Câu 10] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 1\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 1] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 2] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 3] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 4] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 5] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 6] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 7] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 8] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 9] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Câu 10] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 2\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 1] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 2] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 3] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 4] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 5] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 6] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 7] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 8] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 9] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Câu 10] Cho chuyên đề \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Đề thi thử Tốt nghiệp THPT Hóa Học 2026 - Đề số 3\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 1] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 2] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 3] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 4] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 5] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 6] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 7] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 8] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 9] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Câu 10] Cho chuyên đề \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Chiến thuật xử lý câu hỏi đếm mệnh đề đúng sai và lý thuyết bẫy\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 1] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 2] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 3] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 4] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 5] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 6] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 7] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 0,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 8] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\"."
    ],
    "correctIndex": 3,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 9] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 2,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  },
  {
    "id": "CHEM12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Câu 10] Cho chuyên đề \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\". Phát biểu nào sau đây về tính chất hóa học và hiện tượng phản ứng là ĐÚNG?",
    "options": [
      "Sản phẩm phản ứng thủy phân hoặc phản ứng oxi hóa khử viết sai tỉ lệ mol và trạng thái các chất.",
      "Phát biểu phản ánh chính xác cấu tạo phân tử, cơ chế phản ứng và hiện tượng đặc trưng của hợp chất trong \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
      "Nhầm lẫn giữa tính chất của amine bậc 1, bậc 2, bậc 3 hoặc giữa đường khử và đường không khử.",
      "Hiện tượng phản ứng miêu tả sai màu sắc kết tủa, khí thoát ra hoặc chất chỉ thị màu tương ứng."
    ],
    "correctIndex": 1,
    "hint": "Xem lại phương trình hóa học và tính chất đặc trưng của nhóm chất trong bài \"Tổng kết Hóa Học 12 & Bí quyết đạt điểm tuyệt đối 10 điểm\".",
    "explanation": "Giải thích chi tiết: Dựa trên cấu trúc nhóm chức và quy tắc phản ứng hóa học hữu cơ/vô cơ lớp 12, phương án đã chọn mô tả chính xác bản chất hóa học của chất."
  }
];

export const getQuestionsByWeekChem12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_CHEM12.filter(q => q.week === num);
};

export const getFilteredQuestionsChem12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_CHEM12];
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
