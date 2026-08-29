// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH TIN HỌC 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

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

export const WEEKS_METADATA_CS12 = {};

export const QUESTION_BANK_CS12 = [
  {
    "id": "CS12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 1] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 2] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 3] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 4] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 5] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 6] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 7] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 8] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 9] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 1 - Bài tập 10] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 1] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 2] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 3] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 4] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 5] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 6] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 7] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 8] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 9] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 2 - Bài tập 10] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 1] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 2] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 3] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 4] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 5] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 6] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 7] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 8] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 9] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 3 - Bài tập 10] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 1] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 2] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 3] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 4] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 5] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 6] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 7] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 8] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 9] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 4 - Bài tập 10] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 1] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 2] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 3] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 4] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 5] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 6] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 7] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 8] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 9] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 5 - Bài tập 10] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 1] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 2] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 3] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 4] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 5] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 6] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 7] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 8] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 9] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 6 - Bài tập 10] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 1] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 2] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 3] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 4] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 5] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 6] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 7] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 8] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 9] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 7 - Bài tập 10] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 1] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 2] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 3] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 4] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 5] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 6] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 7] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 8] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 9] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 8 - Bài tập 10] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 1] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 2] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 3] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 4] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 5] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 6] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 7] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 8] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 9] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tin Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 9 - Bài tập 10] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 1] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 2] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 3] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 4] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 5] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 6] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 7] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 8] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 9] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 10 - Bài tập 10] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 1] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 2] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 3] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 4] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 5] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 6] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 7] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 8] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 9] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 11 - Bài tập 10] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 1] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 2] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 3] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 4] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 5] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 6] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 7] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 8] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 9] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 12 - Bài tập 10] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 1] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 2] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 3] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 4] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 5] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 6] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 7] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 8] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 9] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 13 - Bài tập 10] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 1] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 2] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 3] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 4] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 5] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 6] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 7] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 8] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 9] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 14 - Bài tập 10] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 1] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 2] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 3] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 4] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 5] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 6] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 7] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 8] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 9] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 15 - Bài tập 10] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 1] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 2] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 3] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 4] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 5] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 6] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 7] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 8] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 9] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 16 - Bài tập 10] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 1] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 2] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 3] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 4] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 5] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 6] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 7] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 8] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 9] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 17 - Bài tập 10] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 1] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 2] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 3] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 4] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 5] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 6] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 7] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 8] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 9] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tin Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 18 - Bài tập 10] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 1] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 2] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 3] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 4] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 5] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 6] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 7] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 8] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 9] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 19 - Bài tập 10] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 1] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 2] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 3] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 4] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 5] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 6] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 7] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 8] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 9] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 20 - Bài tập 10] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 1] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 2] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 3] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 4] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 5] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 6] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 7] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 8] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 9] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 21 - Bài tập 10] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 1] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 2] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 3] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 4] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 5] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 6] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 7] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 8] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 9] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 22 - Bài tập 10] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 1] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 2] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 3] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 4] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 5] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 6] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 7] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 8] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 9] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 23 - Bài tập 10] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 1] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 2] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 3] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 4] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 5] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 6] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 7] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 8] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 9] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 24 - Bài tập 10] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 1] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 2] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 3] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 4] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 5] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 6] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 7] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 8] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 9] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 25 - Bài tập 10] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 1] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 2] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 3] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 4] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 5] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 6] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 7] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 8] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 9] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 26 - Bài tập 10] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 1] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 2] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 3] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 4] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 5] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 6] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 7] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 8] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 9] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tin Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 27 - Bài tập 10] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 1] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 2] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 3] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 4] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 5] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 6] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 7] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 8] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 9] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 28 - Bài tập 10] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 1] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 2] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 3] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 4] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 5] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 6] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 7] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 8] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 9] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 29 - Bài tập 10] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 1] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 2] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 3] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 4] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 5] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 6] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 7] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 8] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 9] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 30 - Bài tập 10] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 1] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 2] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 3] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 4] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 5] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 6] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 7] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 8] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 9] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 31 - Bài tập 10] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 1] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 2] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 3] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 4] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 5] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 6] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 7] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 8] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 9] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 32 - Bài tập 10] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 1] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 2] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 3] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 4] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 5] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 6] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 7] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 8] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 9] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 33 - Bài tập 10] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 1] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 2] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 3] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
  },
  {
    "id": "CS12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 4] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 5] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 6] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 7] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 8] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 9] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 34 - Bài tập 10] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 1] Thuật toán học máy nào sau đây thuộc nhóm 'Học có giám sát' (Supervised Learning)?",
    "options": [
      "Hồi quy tuyến tính (Linear Regression)",
      "K-Means Clustering",
      "PCA (Giảm chiều dữ liệu)",
      "Q-Learning"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Linear Regression học dựa trên tập dữ liệu đã có nhãn đầu ra (labels), thuộc nhóm học có giám sát."
  },
  {
    "id": "CS12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 2] Cú pháp HTML nào dùng để tạo một siêu liên kết đến trang web khác?",
    "options": [
      "<a href='url'>Link text</a>",
      "<link src='url'>Link text</link>",
      "<href='url'>Link</href>",
      "<anchor url='url'>Link</anchor>"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thẻ <a> với thuộc tính href dùng để tạo siêu liên kết (Hyperlink) trong HTML."
  },
  {
    "id": "CS12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 3] Trong cơ sở dữ liệu quan hệ, phép nối INNER JOIN giữa hai bảng A và B sẽ trả về:",
    "options": [
      "Các bản ghi có giá trị khóa trùng khớp ở cả 2 bảng",
      "Toàn bộ bản ghi của bảng A",
      "Toàn bộ bản ghi của bảng B",
      "Tích Descartes của hai bảng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: INNER JOIN chỉ trả về các dòng dữ liệu thỏa mãn điều kiện kết nối ở cả hai bảng."
  },
  {
    "id": "CS12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 4] Để đếm tổng số học sinh trong bảng 'HocSinh', câu lệnh SQL chính xác là:",
    "options": [
      "SELECT COUNT(*) FROM HocSinh;",
      "SELECT SUM(*) FROM HocSinh;",
      "SELECT TOTAL(HocSinh);",
      "SELECT NUMBER FROM HocSinh;"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Hàm tổng hợp COUNT(*) trong SQL dùng để đếm tổng số dòng (bản ghi) trong bảng."
  },
  {
    "id": "CS12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 5] Mô hình OSI có bao nhiêu tầng (layers)?",
    "options": [
      "7 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mô hình tham chiếu OSI gồm đúng 7 tầng: Vật lí, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn, Ứng dụng."
  },
  {
    "id": "CS12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 6] Câu lệnh SQL nào dùng để truy xuất dữ liệu từ một bảng cơ sở dữ liệu?",
    "options": [
      "SELECT",
      "INSERT INTO",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Lệnh SELECT dùng để truy vấn và lấy các bản ghi dữ liệu từ bảng."
  },
  {
    "id": "CS12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 7] Trong bảng CSDL 'HocSinh', trường 'MaHS' mang giá trị duy nhất cho mỗi học sinh được gọi là:",
    "options": [
      "Khóa chính (Primary Key)",
      "Khóa ngoại (Foreign Key)",
      "Trường chỉ mục phụ",
      "Ràng buộc kiểm tra"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khóa chính (Primary Key) là thuộc tính hoặc tập thuộc tính dùng để phân biệt duy nhất từng bản ghi."
  },
  {
    "id": "CS12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 8] Địa chỉ IPv4 được biểu diễn dưới dạng bao nhiêu bit nhị phân?",
    "options": [
      "32 bit (4 byte)",
      "64 bit",
      "128 bit (IPv6)",
      "16 bit"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Địa chỉ IPv4 gồm 32 bit, chia thành 4 octet (mỗi octet 8 bit, ví dụ 192.168.1.1)."
  },
  {
    "id": "CS12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 9] Để sắp xếp kết quả truy vấn SQL theo thứ tự điểm thi giảm dần, ta sử dụng mệnh đề:",
    "options": [
      "ORDER BY DiemThi DESC",
      "ORDER BY DiemThi ASC",
      "GROUP BY DiemThi",
      "SORT BY DiemThi DOWN"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: Mệnh đề ORDER BY ... DESC sắp xếp giảm dần (Descending); ASC là tăng dần (Ascending)."
  },
  {
    "id": "CS12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tin Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Tin Học 12 - Tuần 35 - Bài tập 10] Giao thức nào được sử dụng để truyền tải an toàn các trang Web qua Internet có mã hóa SSL/TLS?",
    "options": [
      "HTTPS (cổng 443)",
      "HTTP (cổng 80)",
      "FTP (cổng 21)",
      "SMTP (cổng 25)"
    ],
    "correctIndex": 0,
    "hint": "Xem lại kiến thức mô hình mạng TCP/IP, hệ quản trị CSDL quan hệ và lệnh SQL lớp 12.",
    "explanation": "Hướng dẫn giải chi tiết: HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ mã hóa TLS/SSL trên cổng 443 để bảo vệ dữ liệu."
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
