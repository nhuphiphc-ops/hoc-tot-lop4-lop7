// NGÂN HÀNG CÂU HỎI TIN HỌC 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_CS12 = [
  {
    "id": 1,
    "title": "Chặng 1: Mạng Máy Tính & Giao Thức Internet",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Mô hình OSI, TCP/IP, địa chỉ IPv4/IPv6 và an toàn bảo mật mạng",
    "icon": "BookOpen",
    "color": "from-cyan-600 to-blue-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Hệ Cơ Sở Dữ Liệu Quan Hệ & Truy Vấn SQL",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Thiết kế bảng, khóa chính, khóa ngoại và câu lệnh SQL",
    "icon": "Compass",
    "color": "from-indigo-600 to-purple-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Lập Trình Ứng Dụng Web & Trí Tuệ Nhân Tạo (AI)",
    "range": "Tuần 19 - Tuần 27",
    "desc": "HTML/CSS/JS, API và ứng dụng Machine Learning thực tiễn",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Dự Án Phần Mềm & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Xây dựng giải pháp số hóa và luyện đề thi Tin học Quốc gia",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_CS12 = [
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

export const WEEKS_METADATA_CS12 = {
  "1": {
    "title": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Tin Học 12."
  },
  "2": {
    "title": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Tin Học 12."
  },
  "3": {
    "title": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Tin Học 12."
  },
  "4": {
    "title": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Tin Học 12."
  },
  "5": {
    "title": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Tin Học 12."
  },
  "6": {
    "title": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Tin Học 12."
  },
  "7": {
    "title": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Tin Học 12."
  },
  "8": {
    "title": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Tin Học 12."
  },
  "9": {
    "title": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Tin Học 12."
  },
  "10": {
    "title": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Tin Học 12."
  },
  "11": {
    "title": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Tin Học 12."
  },
  "12": {
    "title": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Tin Học 12."
  },
  "13": {
    "title": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Tin Học 12."
  },
  "14": {
    "title": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Tin Học 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Tin Học 12."
  },
  "16": {
    "title": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Tin Học 12."
  },
  "17": {
    "title": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Tin Học 12."
  },
  "18": {
    "title": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Tin Học 12."
  },
  "19": {
    "title": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Tin Học 12."
  },
  "20": {
    "title": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Tin Học 12."
  },
  "21": {
    "title": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Tin Học 12."
  },
  "22": {
    "title": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Tin Học 12."
  },
  "23": {
    "title": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Tin Học 12."
  },
  "24": {
    "title": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Tin Học 12."
  },
  "25": {
    "title": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Tin Học 12."
  },
  "26": {
    "title": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Tin Học 12."
  },
  "27": {
    "title": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Tin Học 12."
  },
  "28": {
    "title": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Tin Học 12."
  },
  "29": {
    "title": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Tin Học 12."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Tin Học 12."
  },
  "31": {
    "title": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Tin Học 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Tin Học 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Tin Học 12."
  },
  "34": {
    "title": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Tin Học 12."
  },
  "35": {
    "title": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Tin Học 12."
  }
};

export const QUESTION_BANK_CS12 = [
  {
    "id": "CS12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Câu 1] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Câu 2] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Câu 3] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Câu 4] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Câu 5] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Câu 6] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Câu 7] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Câu 8] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Câu 9] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Kiến trúc mạng máy tính và mô hình OSI 7 tầng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Câu 10] Trong bài học \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Kiến trúc mạng máy tính và mô hình OSI 7 tầng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Câu 1] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Câu 2] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Câu 3] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Câu 4] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Câu 5] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Câu 6] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Câu 7] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Câu 8] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Câu 9] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Câu 10] Trong bài học \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bộ giao thức TCP/IP và cơ chế truyền nhận gói tin trên Internet\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Câu 1] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Câu 2] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Câu 3] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Câu 4] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Câu 5] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Câu 6] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Câu 7] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Câu 8] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Câu 9] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Câu 10] Trong bài học \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Địa chỉ IP (IPv4, IPv6), Subnet Mask và hệ thống phân giải tên miền (DNS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Câu 1] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Câu 2] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Câu 3] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Câu 4] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Câu 5] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Câu 6] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Câu 7] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Câu 8] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Câu 9] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Câu 10] Trong bài học \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Các thiết bị mạng: Router, Switch, Modem, Access Point và cấu hình mạng LAN\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Câu 1] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Câu 2] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Câu 3] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Câu 4] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Câu 5] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Câu 6] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Câu 7] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Câu 8] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Câu 9] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Câu 10] Trong bài học \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"An toàn thông tin mạng: Mã hóa dữ liệu, tường lửa (Firewall) và phòng chống Virus/Malware\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Câu 1] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Câu 2] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Câu 3] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Câu 4] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Câu 5] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Câu 6] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Câu 7] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Câu 8] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Câu 9] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Câu 10] Trong bài học \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức, pháp luật và văn hóa ứng xử trong kỉ nguyên số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Câu 1] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Câu 2] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Câu 3] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Câu 4] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Câu 5] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Câu 6] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Câu 7] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Câu 8] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Câu 9] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Câu 10] Trong bài học \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL (DBMS)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Câu 1] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Câu 2] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Câu 3] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Câu 4] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Câu 5] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Câu 6] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Câu 7] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Câu 8] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Câu 9] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Câu 10] Trong bài học \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Mô hình dữ liệu quan hệ (Relational Model): Bảng, trường, bản ghi\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Câu 1] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Câu 2] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Câu 3] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Câu 4] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Câu 5] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Câu 6] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Câu 7] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Câu 8] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Câu 9] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Câu 10] Trong bài học \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khóa chính (Primary Key), khóa ngoại (Foreign Key) và liên kết giữa các bảng\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Câu 1] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Câu 2] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Câu 3] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Câu 4] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Câu 5] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Câu 6] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Câu 7] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Câu 8] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Câu 9] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Câu 10] Trong bài học \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh tạo bảng CREATE TABLE và ràng buộc dữ liệu\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Câu 1] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Câu 2] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Câu 3] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Câu 4] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Câu 5] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Câu 6] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Câu 7] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Câu 8] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Câu 9] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Câu 10] Trong bài học \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Lệnh truy vấn dữ liệu SELECT với WHERE, ORDER BY\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Câu 1] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Câu 2] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Câu 3] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Câu 4] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Câu 5] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Câu 6] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Câu 7] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Câu 8] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Câu 9] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Câu 10] Trong bài học \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Các hàm tổng hợp COUNT, SUM, AVG và mệnh đề GROUP BY, HAVING\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Câu 1] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Câu 2] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Câu 3] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Câu 4] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Câu 5] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Câu 6] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Câu 7] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Câu 8] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Câu 9] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Câu 10] Trong bài học \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Truy vấn kết hợp nhiều bảng (INNER JOIN, LEFT JOIN)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Câu 1] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Câu 2] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Câu 3] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Câu 4] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Câu 5] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Câu 6] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Câu 7] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Câu 8] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Câu 9] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Câu 10] Trong bài học \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ngôn ngữ SQL: Thao tác dữ liệu INSERT INTO, UPDATE và DELETE\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Câu 1] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Câu 2] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Câu 3] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Câu 4] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Câu 5] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Câu 6] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Câu 7] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Câu 8] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Câu 9] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Câu 10] Trong bài học \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Tin Học 12\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Câu 1] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Câu 2] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Câu 3] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Câu 4] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Câu 5] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Câu 6] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Câu 7] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Câu 8] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Câu 9] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Nguyên lí thiết kế giao diện Web với HTML5 và CSS3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Câu 10] Trong bài học \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Nguyên lí thiết kế giao diện Web với HTML5 và CSS3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Câu 1] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Câu 2] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Câu 3] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Câu 4] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Câu 5] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Câu 6] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Câu 7] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Câu 8] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Câu 9] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lập trình tương tác trên Web với JavaScript cơ bản",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Câu 10] Trong bài học \"Lập trình tương tác trên Web với JavaScript cơ bản\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Lập trình tương tác trên Web với JavaScript cơ bản\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Lập trình tương tác trên Web với JavaScript cơ bản\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Câu 1] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Câu 2] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Câu 3] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Câu 4] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Câu 5] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Câu 6] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Câu 7] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Câu 8] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Câu 9] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Câu 10] Trong bài học \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khái niệm về API (Application Programming Interface) và trao đổi dữ liệu JSON\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Câu 1] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Câu 2] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Câu 3] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Câu 4] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Câu 5] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Câu 6] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Câu 7] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Câu 8] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Câu 9] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Câu 10] Trong bài học \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Cơ sở dữ liệu NoSQL và xu hướng lưu trữ đám mây (Cloud Database)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Câu 1] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Câu 2] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Câu 3] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Câu 4] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Câu 5] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Câu 6] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Câu 7] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Câu 8] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Câu 9] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Câu 10] Trong bài học \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng quan về Trí tuệ nhân tạo (AI): Lịch sử phát triển và phân loại AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Câu 1] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Câu 2] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Câu 3] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Câu 4] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Câu 5] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Câu 6] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Câu 7] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Câu 8] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Câu 9] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Câu 10] Trong bài học \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Học máy (Machine Learning): Học có giám sát, học không giám sát và học tăng cường\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Câu 1] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Câu 2] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Câu 3] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Câu 4] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Câu 5] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Câu 6] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Câu 7] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Câu 8] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Câu 9] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Câu 10] Trong bài học \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Xử lí ngôn ngữ tự nhiên (NLP) và mô hình ngôn ngữ lớn (LLM/ChatGPT)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Câu 1] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Câu 2] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Câu 3] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Câu 4] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Câu 5] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Câu 6] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Câu 7] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Câu 8] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Câu 9] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Câu 10] Trong bài học \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Thị giác máy tính (Computer Vision) và nhận diện khuôn mặt, vật thể\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Câu 1] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Câu 2] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Câu 3] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Câu 4] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Câu 5] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Câu 6] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Câu 7] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Câu 8] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Câu 9] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Câu 10] Trong bài học \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đạo đức AI và trách nhiệm xã hội khi phát triển công nghệ trí tuệ nhân tạo\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Câu 1] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Câu 2] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Câu 3] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Câu 4] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Câu 5] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Câu 6] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Câu 7] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Câu 8] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Câu 9] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Câu 10] Trong bài học \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Khoa học dữ liệu (Data Science) và quy trình khai phá dữ liệu lớn (Big Data)\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Câu 1] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Câu 2] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Câu 3] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Câu 4] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Câu 5] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Câu 6] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Câu 7] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Câu 8] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Câu 9] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Câu 10] Trong bài học \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bảo mật ứng dụng Web: Phòng chống SQL Injection và XSS\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Câu 1] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Câu 2] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Câu 3] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Câu 4] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Câu 5] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Câu 6] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Câu 7] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Câu 8] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Câu 9] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Quy trình phát triển phần mềm theo mô hình Agile/Scrum",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Câu 10] Trong bài học \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Quy trình phát triển phần mềm theo mô hình Agile/Scrum\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Câu 1] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Câu 2] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Câu 3] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Câu 4] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Câu 5] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Câu 6] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Câu 7] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Câu 8] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Câu 9] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Câu 10] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Mạng và An toàn số\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Câu 1] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Câu 2] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Câu 3] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Câu 4] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Câu 5] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Câu 6] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Câu 7] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Câu 8] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Câu 9] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Câu 10] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề CSDL & SQL\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Câu 1] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Câu 2] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Câu 3] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Câu 4] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Câu 5] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Câu 6] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Câu 7] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Câu 8] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Câu 9] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Câu 10] Trong bài học \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Luyện đề Tốt nghiệp THPT Tin Học: Chuyên đề Công nghệ Web & AI\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Câu 1] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Câu 2] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Câu 3] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Câu 4] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Câu 5] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Câu 6] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Câu 7] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Câu 8] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Câu 9] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Câu 10] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 1\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Câu 1] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Câu 2] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Câu 3] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Câu 4] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Câu 5] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Câu 6] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Câu 7] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Câu 8] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Câu 9] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Câu 10] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 2\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Câu 1] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Câu 2] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Câu 3] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Câu 4] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Câu 5] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Câu 6] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Câu 7] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Câu 8] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Câu 9] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Câu 10] Trong bài học \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Đề thi thử Tốt nghiệp THPT Tin Học 2026 - Đề số 3\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Câu 1] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Câu 2] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Câu 3] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Câu 4] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Câu 5] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Câu 6] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Câu 7] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Câu 8] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Câu 9] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Câu 10] Trong bài học \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Bí quyết giải nhanh câu hỏi trắc nghiệm SQL và mạng máy tính\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Câu 1] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Câu 2] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Câu 3] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Câu 4] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Câu 5] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Câu 6] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Câu 7] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Câu 8] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Câu 9] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  },
  {
    "id": "CS12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Câu 10] Trong bài học \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\", phát biểu hoặc cú pháp kỹ thuật nào sau đây là CHÍNH XÁC?",
    "options": [
      "Cú pháp câu lệnh SQL bị lỗi cú pháp ở mệnh đề SELECT, WHERE, GROUP BY hoặc JOIN.",
      "Mô tả chuẩn xác giao thức mạng / cấu trúc bảng CSDL / cú pháp truy vấn SQL / thuật toán trong \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
      "Nhầm lẫn chức năng giữa các tầng trong mô hình OSI hoặc giữa địa chỉ IP và địa chỉ MAC.",
      "Thiết kế khóa chính, khóa ngoại trong bảng cơ sở dữ liệu quan hệ vi phạm tính toàn vẹn dữ liệu."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên lí mạng máy tính, mô hình CSDL quan hệ và lệnh SQL trong bài \"Tổng kết Tin Học 12 & Định hướng nghề nghiệp công nghệ thông tin tương lai\".",
    "explanation": "Giải thích kỹ thuật: Lựa chọn đúng tuân thủ các chuẩn quốc tế về mạng máy tính (TCP/IP) và hệ quản trị cơ sở dữ liệu quan hệ trong chương trình Tin học 12."
  }
];

export const getQuestionsByWeekCS12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_CS12.filter(q => q.week === num);
};

export const getFilteredQuestionsCS12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_CS12];
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
