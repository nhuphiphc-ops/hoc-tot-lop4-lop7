// NGÂN HÀNG CÂU HỎI SINH HỌC 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_BIO12 = [
  {
    "id": 1,
    "title": "Chặng 1: Di Truyền Học Phân Tử & Tế Bào",
    "range": "Tuần 1 - Tuần 9",
    "desc": "DNA, RNA, nhân đôi, phiên mã, dịch mã, điều hòa gen và đột biến",
    "icon": "BookOpen",
    "color": "from-green-600 to-emerald-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Quy Luật Di Truyền Men-đen & Tương Tác Gen",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Phân li, phân li độc lập, tương tác gen, liên kết gen và hoán vị gen",
    "icon": "Compass",
    "color": "from-teal-600 to-cyan-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Di Truyền Quần Thể, Công Nghệ Gen & Tiến Hóa",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Hardy-Weinberg, phả hệ, chọn lọc tự nhiên và loài mới",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Sinh Thái Học & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Quần xã, hệ sinh thái, chuỗi thức ăn và luyện đề chuẩn Quốc gia",
    "icon": "GraduationCap",
    "color": "from-purple-600 to-pink-600"
  }
];

export const TOPIC_CATEGORIES_BIO12 = [
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

export const WEEKS_METADATA_BIO12 = {
  "1": {
    "title": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Sinh Học 12."
  },
  "2": {
    "title": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Sinh Học 12."
  },
  "3": {
    "title": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Sinh Học 12."
  },
  "4": {
    "title": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Sinh Học 12."
  },
  "5": {
    "title": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Sinh Học 12."
  },
  "6": {
    "title": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Sinh Học 12."
  },
  "7": {
    "title": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Sinh Học 12."
  },
  "8": {
    "title": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Sinh Học 12."
  },
  "9": {
    "title": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Sinh Học 12."
  },
  "10": {
    "title": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Sinh Học 12."
  },
  "11": {
    "title": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Sinh Học 12."
  },
  "12": {
    "title": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Sinh Học 12."
  },
  "13": {
    "title": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Sinh Học 12."
  },
  "14": {
    "title": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Sinh Học 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Sinh Học 12."
  },
  "16": {
    "title": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Sinh Học 12."
  },
  "17": {
    "title": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Sinh Học 12."
  },
  "18": {
    "title": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Sinh Học 12."
  },
  "19": {
    "title": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Sinh Học 12."
  },
  "20": {
    "title": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Sinh Học 12."
  },
  "21": {
    "title": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Sinh Học 12."
  },
  "22": {
    "title": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Sinh Học 12."
  },
  "23": {
    "title": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Sinh Học 12."
  },
  "24": {
    "title": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Sinh Học 12."
  },
  "25": {
    "title": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Sinh Học 12."
  },
  "26": {
    "title": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Sinh Học 12."
  },
  "27": {
    "title": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Sinh Học 12."
  },
  "28": {
    "title": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Sinh Học 12."
  },
  "29": {
    "title": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Sinh Học 12."
  },
  "30": {
    "title": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Sinh Học 12."
  },
  "31": {
    "title": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Sinh Học 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Sinh Học 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Sinh Học 12."
  },
  "34": {
    "title": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Sinh Học 12."
  },
  "35": {
    "title": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Sinh Học 12."
  }
};

export const QUESTION_BANK_BIO12 = [
  {
    "id": "BIO12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Gen, mã di truyền và cấu trúc không gian của phân tử DNA",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Gen, mã di truyền và cấu trúc không gian của phân tử DNA\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình nhân đôi DNA (Tái bản DNA) theo nguyên tắc bán bảo tồn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Phiên mã tạo mRNA, tRNA, rRNA và cơ chế xử lý bản phiên mã\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Dịch mã (Tổng hợp protein) trên ribosome trong tế bào chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Điều hòa hoạt động của gen: Mô hình Operon Lac ở vi khuẩn E.coli\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến gen: Đột biến thay thế, thêm và mất cặp nucleotide\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc nhiễm sắc thể (NST) ở sinh vật nhân thực: Nucleosome\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến cấu trúc NST: Mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đột biến số lượng NST: Thể lệch bội và thể đa bội (tự đa bội, dị đa bội)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li và thí nghiệm lai một cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quy luật phân li độc lập và lai hai cặp tính trạng của Men-đen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Tương tác gen (Tương tác bổ sung, cộng gộp) và tác động đa hiệu của gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Liên kết gen hoàn toàn và hoán vị gen (Morgan): Tần số hoán vị gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền liên kết với giới tính (NST X, Y) và di truyền ngoài nhân\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ôn tập & Kiểm tra Học kỳ I môn Sinh Học 12\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Ảnh hưởng của môi trường lên sự biểu hiện của gen: Mức phản ứng\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Cấu trúc di truyền của quần thể tự phối và ngẫu phối\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Trạng thái cân bằng di truyền của quần thể (Định luật Hardy - Weinberg)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chọn giống bằng nguồn biến dị tổ hợp và phương pháp gây đột biến\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ tế bào thực vật và động vật (Nuôi cấy mô, cấy truyền phôi)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Công nghệ gen: Tạo DNA tái tổ hợp, thể truyền plasmid và sinh vật biến đổi gen\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Di truyền y học: Phương pháp nghiên cứu phả hệ và bệnh di truyền phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bằng chứng tiến hóa: Bằng chứng giải phẫu so sánh, phôi sinh học và phân tử\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Thuyết tiến hóa hiện đại: Các nhân tố tiến hóa (Đột biến, CLTN, di - nhập gen)\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quá trình hình thành loài mới: Cách li địa lí, cách li sinh thái, cách li tập tính\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Nguồn gốc sự sống và sự phát triển của sinh giới qua các đại địa chất\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Môi trường sống và các nhân tố sinh thái: Giới hạn sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần thể sinh vật: Các đặc trưng cơ bản và biến động số lượng cá thể\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Quần xã sinh vật: Cấu trúc, mối quan hệ sinh thái và diễn thế sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Hệ sinh thái: Chuỗi thức ăn, lưới thức ăn, bậc dinh dưỡng và tháp sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Chu trình sinh địa hóa và dòng năng lượng trong hệ sinh thái\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 1\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 2\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Đề thi thử Tốt nghiệp THPT Sinh Học 2026 - Đề số 3\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 1] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 2] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 3] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 4] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 5] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 6] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 7] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 8] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\"."
    ],
    "correctIndex": 3,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 9] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 2,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  },
  {
    "id": "BIO12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 10] Về cơ chế di truyền và tiến hóa trong bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\", nhận định nào sau đây là CHÍNH XÁC?",
    "options": [
      "Nhầm lẫn giữa vai trò của enzyme DNA polymerase, RNA polymerase và ligase trong tế bào.",
      "Nhận định mô tả đúng bản chất quá trình nhân đôi/phiên mã/dịch mã/quy luật di truyền trong \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
      "Tỉ lệ kiểu hình và kiểu gen tính toán sai lệch so với định luật Men-đen hoặc liên kết gen.",
      "Giải thích sai cơ chế cách li sinh sản và tác động của các nhân tố tiến hóa trong quần thể."
    ],
    "correctIndex": 1,
    "hint": "Nhớ lại nguyên tắc bổ sung, chiều tổng hợp mạch mới và quy luật di truyền của bài \"Bí quyết phân tích bài toán phả hệ và quy luật di truyền nâng cao\".",
    "explanation": "Phân tích: Áp dụng cơ chế sinh học phân tử và quy luật di truyền học hiện đại trong chương trình Sinh học 12 để xác định kết luận đúng nhất."
  }
];

export const getQuestionsByWeekBio12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_BIO12.filter(q => q.week === num);
};

export const getFilteredQuestionsBio12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_BIO12];
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
