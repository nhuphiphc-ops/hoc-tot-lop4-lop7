// NGÂN HÀNG CÂU HỎI LỊCH SỬ 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_HIST12 = [
  {
    "id": 1,
    "title": "Chặng 1: Quan Hệ Quốc Tế & Cách Mạng Việt Nam 1919-1945",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Trật tự 2 cực Ianta, Liên Hợp Quốc, Nguyễn Ái Quốc và CMT8 1945",
    "icon": "BookOpen",
    "color": "from-amber-600 to-orange-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Kháng Chiến Chống Thực Dân Pháp (1945 - 1954)",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Việt Bắc 1947, Biên Giới 1950 và Chiến thắng Điện Biên Phủ 1954",
    "icon": "Compass",
    "color": "from-red-600 to-rose-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Kháng Chiến Chống Mỹ & Thống Nhất Đất Nước (1954 - 1975)",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Đồng khởi, Mậu Thân 1968, Điện Biên Phủ trên không và 1975",
    "icon": "Award",
    "color": "from-purple-600 to-indigo-700"
  },
  {
    "id": 4,
    "title": "Chặng 4: Công Cuộc Đổi Mới 1986 & Luyện Đề Tốt Nghiệp THPT",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Đổi mới đất nước, hội nhập quốc tế và luyện đề Quốc gia 2026",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_HIST12 = [
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

export const WEEKS_METADATA_HIST12 = {
  "1": {
    "title": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Lịch Sử 12."
  },
  "2": {
    "title": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Lịch Sử 12."
  },
  "3": {
    "title": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Lịch Sử 12."
  },
  "4": {
    "title": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Lịch Sử 12."
  },
  "5": {
    "title": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Lịch Sử 12."
  },
  "6": {
    "title": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Lịch Sử 12."
  },
  "7": {
    "title": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Lịch Sử 12."
  },
  "8": {
    "title": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Lịch Sử 12."
  },
  "9": {
    "title": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Lịch Sử 12."
  },
  "10": {
    "title": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Lịch Sử 12."
  },
  "11": {
    "title": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Lịch Sử 12."
  },
  "12": {
    "title": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Lịch Sử 12."
  },
  "13": {
    "title": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Lịch Sử 12."
  },
  "14": {
    "title": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Lịch Sử 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Lịch Sử 12."
  },
  "16": {
    "title": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Lịch Sử 12."
  },
  "17": {
    "title": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Lịch Sử 12."
  },
  "18": {
    "title": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Lịch Sử 12."
  },
  "19": {
    "title": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Lịch Sử 12."
  },
  "20": {
    "title": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Lịch Sử 12."
  },
  "21": {
    "title": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Lịch Sử 12."
  },
  "22": {
    "title": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Lịch Sử 12."
  },
  "23": {
    "title": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Lịch Sử 12."
  },
  "24": {
    "title": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Lịch Sử 12."
  },
  "25": {
    "title": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Lịch Sử 12."
  },
  "26": {
    "title": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Lịch Sử 12."
  },
  "27": {
    "title": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Lịch Sử 12."
  },
  "28": {
    "title": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Lịch Sử 12."
  },
  "29": {
    "title": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Lịch Sử 12."
  },
  "30": {
    "title": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Lịch Sử 12."
  },
  "31": {
    "title": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Lịch Sử 12."
  },
  "32": {
    "title": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Lịch Sử 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Lịch Sử 12."
  },
  "34": {
    "title": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Lịch Sử 12."
  },
  "35": {
    "title": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Lịch Sử 12."
  }
};

export const QUESTION_BANK_HIST12 = [
  {
    "id": "HIST12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 1 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Trật tự thế giới hai cực Ianta và sự thành lập Liên Hợp Quốc\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 2 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 3 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc ở châu Á, châu Phi và khu vực Mỹ Latinh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 4 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Sự thành lập và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 5 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Mỹ, Tây Âu và Nhật Bản từ năm 1945 đến năm 2000\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 6 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Quan hệ quốc tế trong và sau thời kỳ Chiến tranh Lạnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 7 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc cách mạng khoa học - công nghệ và xu thế toàn cầu hóa nửa sau thế kỷ XX\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 8 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân tộc dân chủ ở Việt Nam từ năm 1919 đến năm 1925\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 9 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hoạt động của Nguyễn Ái Quốc và các tổ chức cách mạng (1925 - 1929)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 10 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đảng Cộng sản Việt Nam ra đời: Hội nghị thành lập Đảng và Cương lĩnh chính trị\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 11 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào cách mạng 1930 - 1931 với đỉnh cao Xô viết Nghệ - Tĩnh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 12 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào dân chủ 1936 - 1939: Đấu tranh công khai và tập hợp quần chúng\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 13 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Phong trào giải phóng dân tộc 1939 - 1945 và thành lập Mặt trận Việt Minh\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 14 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 15 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Ôn tập & Kiểm tra Học kỳ I môn Lịch Sử 12\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 16 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Nước Việt Nam Dân chủ Cộng hòa trong năm đầu sau CMT8 (1945 - 1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 17 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Toàn quốc kháng chiến chống thực dân Pháp bùng nổ (19-12-1946)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 18 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Việt Bắc thu - đông 1947: Đánh bại chiến lược \"đánh nhanh thắng nhanh\"\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 19 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch Biên giới thu - đông 1950: Giành thế chủ động trên chiến trường chính\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 20 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đại hội đại biểu lần thứ II của Đảng (1951) và củng cố hậu phương kháng chiến\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 21 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tiến công chiến lược Đông - Xuân 1953 - 1954 và Kế hoạch Nava\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 22 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Chiến dịch lịch sử Điện Biên Phủ năm 1954 và Hiệp định Giơnevơ\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 23 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Xây dựng CNXH ở miền Bắc và phong trào \"Đồng khởi\" ở miền Nam (1954 - 1960)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 24 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh đặc biệt\" của Mỹ ở miền Nam (1961 - 1965)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 25 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Chiến tranh cục bộ\" và Cuộc Tổng tiến công Mậu Thân 1968\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 26 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đánh bại chiến lược \"Việt Nam hóa chiến tranh\" và trận \"Điện Biên Phủ trên không\" 1972\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 27 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Hiệp định Pari năm 1973 về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 28 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Cuộc Tổng tiến công và nổi dậy Xuân 1975: Chiến dịch Hồ Chí Minh lịch sử\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 29 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Việt Nam trong những năm đầu sau thống nhất đất nước (1975 - 1985)\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 30 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đường lối Đổi mới của Đảng (từ Đại hội VI năm 1986) và thành tựu kinh tế - xã hội\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 31 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử thế giới\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 32 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Luyện đề Tốt nghiệp THPT Lịch Sử: Chuyên đề Lịch sử Việt Nam\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 33 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 1\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 34 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Đề thi thử Tốt nghiệp THPT Lịch Sử 2026 - Đề số 2\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 1] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 2] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 3] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 4] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 5] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 6] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 7] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 0,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 8] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\"."
    ],
    "correctIndex": 3,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 9] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 2,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  },
  {
    "id": "HIST12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Lịch Sử 12 - Tuần 35 - Câu 10] Sự kiện lịch sử tiêu biểu trong giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\" có ý nghĩa và đặc điểm nào sau đây?",
    "options": [
      "Nhầm lẫn mốc thời gian diễn ra sự kiện hoặc ý nghĩa chiến lược của các chiến dịch lớn.",
      "Đánh dấu bước ngoặt quyết định, khẳng định đường lối lãnh đạo đúng đắn và tinh thần yêu nước trong \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
      "Đánh giá chưa toàn diện tác động của bối cảnh quốc tế và phong tràu giải phóng dân tộc thế giới.",
      "Phân tích sai lực lượng nòng cốt và mục tiêu chính trị của phong trào cách mạng."
    ],
    "correctIndex": 1,
    "hint": "Xác định mốc thời gian, nguyên nhân thắng lợi và ý nghĩa lịch sử của giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\".",
    "explanation": "Lời giải: Căn cứ vào diễn biến lịch sử Việt Nam và thế giới giai đoạn \"Bản đồ tư duy toàn bộ mốc thời gian lịch sử & Bí quyết đạt điểm 10\", sự kiện này thể hiện sự sáng tạo trong đường lối lãnh đạo và sức mạnh khối đại đoàn kết dân tộc."
  }
];

export const getQuestionsByWeekHist12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_HIST12.filter(q => q.week === num);
};

export const getFilteredQuestionsHist12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_HIST12];
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
