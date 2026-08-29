// NGÂN HÀNG CÂU HỎI NGỮ VĂN 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_LIT12 = [
  {
    "id": 1,
    "title": "Chặng 1: Văn Bản Thông Tin & Văn Nghị Luận Xã Hội",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Phương pháp đọc hiểu và kỹ năng viết đoạn văn nghị luận 200 chữ",
    "icon": "BookOpen",
    "color": "from-rose-600 to-purple-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Kiệt Tác Văn Xuôi Hiện Đại Việt Nam",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Vợ nhặt, Vợ chồng A Phủ, Chiếc thuyền ngoài xa, Hồn Trương Ba",
    "icon": "Feather",
    "color": "from-purple-600 to-pink-600"
  },
  {
    "id": 3,
    "title": "Chặng 3: Thơ Ca Kháng Chiến & Tiếng Việt Thực Hành",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Đất Nước, Tây Tiến, Việt Bắc, Sóng và phong cách ngôn ngữ",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Tổng Ôn Kỹ Năng & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_LIT12 = [
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

export const WEEKS_METADATA_LIT12 = {
  "1": {
    "title": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Ngữ Văn 12."
  },
  "2": {
    "title": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Ngữ Văn 12."
  },
  "3": {
    "title": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Ngữ Văn 12."
  },
  "4": {
    "title": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Ngữ Văn 12."
  },
  "5": {
    "title": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Ngữ Văn 12."
  },
  "6": {
    "title": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Ngữ Văn 12."
  },
  "7": {
    "title": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Ngữ Văn 12."
  },
  "8": {
    "title": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Ngữ Văn 12."
  },
  "9": {
    "title": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Ngữ Văn 12."
  },
  "10": {
    "title": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Ngữ Văn 12."
  },
  "11": {
    "title": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Ngữ Văn 12."
  },
  "12": {
    "title": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Ngữ Văn 12."
  },
  "13": {
    "title": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Ngữ Văn 12."
  },
  "14": {
    "title": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Ngữ Văn 12."
  },
  "15": {
    "title": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Ngữ Văn 12."
  },
  "16": {
    "title": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Ngữ Văn 12."
  },
  "17": {
    "title": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Ngữ Văn 12."
  },
  "18": {
    "title": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Ngữ Văn 12."
  },
  "19": {
    "title": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Ngữ Văn 12."
  },
  "20": {
    "title": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Ngữ Văn 12."
  },
  "21": {
    "title": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Ngữ Văn 12."
  },
  "22": {
    "title": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Ngữ Văn 12."
  },
  "23": {
    "title": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Ngữ Văn 12."
  },
  "24": {
    "title": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Ngữ Văn 12."
  },
  "25": {
    "title": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Ngữ Văn 12."
  },
  "26": {
    "title": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Ngữ Văn 12."
  },
  "27": {
    "title": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Ngữ Văn 12."
  },
  "28": {
    "title": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Ngữ Văn 12."
  },
  "29": {
    "title": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Ngữ Văn 12."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Ngữ Văn 12."
  },
  "31": {
    "title": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Ngữ Văn 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Ngữ Văn 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Ngữ Văn 12."
  },
  "34": {
    "title": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Ngữ Văn 12."
  },
  "35": {
    "title": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Ngữ Văn 12."
  }
};

export const QUESTION_BANK_LIT12 = [
  {
    "id": "LIT12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 1] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 2] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 3] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 4] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 5] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 6] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 7] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 8] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 9] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản thông tin và nghệ thuật lập luận hiện đại",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 1 - Câu 10] Về văn bản và kiến thức bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản thông tin và nghệ thuật lập luận hiện đại\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản thông tin và nghệ thuật lập luận hiện đại\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản thông tin và nghệ thuật lập luận hiện đại\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 1] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 2] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 3] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 4] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 5] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 6] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 7] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 8] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 9] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 2 - Câu 10] Về văn bản và kiến thức bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Văn bản nghị luận: Cách xây dựng luận điểm và dẫn chứng thuyết phục\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 1] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 2] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 3] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 4] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 5] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 6] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 7] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 8] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 9] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 3 - Câu 10] Về văn bản và kiến thức bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ chuẩn barem điểm\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 4 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Bối cảnh nạn đói 1945 và vẻ đẹp tình người\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 5 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Nhân vật Tràng và sự đổi thay tâm lý\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 6 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ nhặt\" (Kim Lân): Hình tượng người vợ nhặt và bà cụ Tứ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 1] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 2] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 3] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 4] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 5] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 6] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 7] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 8] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 9] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 7 - Câu 10] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ, hoán dụ và chêm xen\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 8 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Bức tranh Tây Bắc và số phận Mị\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 9 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Sức sống tiềm tàng đêm tình mùa xuân\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 10 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Vợ chồng A Phủ\" (Tô Hoài): Hành động cởi trói cứu A Phủ và tự giải phóng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 11 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Hai phát hiện của người nghệ sĩ nhiếp ảnh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 1] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 2] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 3] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 4] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 5] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 6] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 7] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 8] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 9] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 12 - Câu 10] Về văn bản và kiến thức bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tác phẩm \"Chiếc thuyền ngoài xa\" (Nguyễn Minh Châu): Câu chuyện của người đàn bà hàng chài ở tòa án\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 1] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 2] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 3] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 4] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 5] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 6] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 7] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 8] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 9] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 13 - Câu 10] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Mâu thuẫn giữa thể xác và linh hồn\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 1] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 2] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 3] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 4] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 5] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 6] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 7] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 8] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 9] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 14 - Câu 10] Về văn bản và kiến thức bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kịch \"Hồn Trương Ba, da hàng thịt\" (Lưu Quang Vũ): Khát vọng sống là chính mình và bài học nhân sinh\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 1] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 2] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 3] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 4] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 5] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 6] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 7] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 8] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 9] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 15 - Câu 10] Về văn bản và kiến thức bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Ôn tập tổng hợp & Kiểm tra Học kỳ I môn Ngữ Văn 12\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 1] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 2] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 3] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 4] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 5] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 6] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 7] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 8] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 9] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 16 - Câu 10] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Cội nguồn Đất Nước trong văn hóa dân gian\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 1] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 2] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 3] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 4] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 5] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 6] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 7] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 8] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 9] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 17 - Câu 10] Về văn bản và kiến thức bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đoạn trích \"Đất Nước\" (Nguyễn Khoa Điềm): Tư tưởng \"Đất Nước của Nhân Dân\"\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 1] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 2] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 3] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 4] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 5] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 6] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 7] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 8] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 9] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 18 - Câu 10] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Bức tranh thiên nhiên miền Tây hùng vĩ và dữ dội\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 1] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 2] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 3] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 4] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 5] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 6] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 7] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 8] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 9] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 19 - Câu 10] Về văn bản và kiến thức bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Tây Tiến\" (Quang Dũng): Hình tượng người lính Tây Tiến hào hoa, bi tráng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 1] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 2] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 3] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 4] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 5] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 6] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 7] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 8] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 9] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 20 - Câu 10] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Nghệ thuật đối đáp và khúc ca ân tình cách mạng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 1] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 2] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 3] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 4] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 5] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 6] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 7] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 8] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 9] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 21 - Câu 10] Về văn bản và kiến thức bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Việt Bắc\" (Tố Hữu): Bức tranh tứ bình thiên nhiên và con người Việt Bắc\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 1] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 2] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 3] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 4] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 5] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 6] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 7] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 8] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 9] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 22 - Câu 10] Về văn bản và kiến thức bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bài thơ \"Sóng\" (Xuân Quỳnh): Hình tượng sóng và vẻ đẹp tâm hồn người phụ nữ trong tình yêu\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 1] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 2] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 3] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 4] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 5] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 6] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 7] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 8] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 9] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 23 - Câu 10] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp hung bạo của dòng sông Đà\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 1] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 2] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 3] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 4] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 5] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 6] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 7] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 8] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 9] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 24 - Câu 10] Về văn bản và kiến thức bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tùy bút \"Người lái đò Sông Đà\" (Nguyễn Tuân): Vẻ đẹp trữ tình và chất vàng mười nơi ông lái đò\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 1] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 2] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 3] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 4] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 5] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 6] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 7] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 8] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 9] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 25 - Câu 10] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương nơi thượng nguồn và đồng bằng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 1] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 2] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 3] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 4] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 5] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 6] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 7] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 8] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 9] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 26 - Câu 10] Về văn bản và kiến thức bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Bút ký \"Ai đã đặt tên cho dòng sông?\" (Hoàng Phủ Ngọc Tường): Sông Hương trong lòng thành phố Huế cổ kính\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 1] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 2] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 3] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 4] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 5] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 6] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 7] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 8] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 9] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 27 - Câu 10] Về văn bản và kiến thức bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Thực hành Tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt và lỗi ngữ pháp thường gặp\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 1] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 2] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 3] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 4] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 5] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 6] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 7] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 8] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 9] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 28 - Câu 10] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Kỹ năng đọc hiểu văn bản ngoài SGK\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 1] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 2] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 3] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 4] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 5] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 6] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 7] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 8] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 9] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 29 - Câu 10] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết đoạn văn nghị luận xã hội 200 chữ\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 1] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 2] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 3] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 4] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 5] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 6] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 7] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 8] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 9] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 30 - Câu 10] Về văn bản và kiến thức bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Luyện đề Tốt nghiệp THPT: Viết bài văn nghị luận văn học so sánh, mở rộng\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 1] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 2] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 3] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 4] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 5] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 6] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 7] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 8] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 9] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 31 - Câu 10] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 1\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 1] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 2] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 3] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 4] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 5] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 6] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 7] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 8] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 9] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 32 - Câu 10] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 2\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 1] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 2] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 3] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 4] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 5] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 6] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 7] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 8] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 9] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 33 - Câu 10] Về văn bản và kiến thức bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Đề thi thử Tốt nghiệp THPT Ngữ Văn 2026 - Đề số 3\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 1] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 2] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 3] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 4] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 5] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 6] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 7] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 8] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 9] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 34 - Câu 10] Về văn bản và kiến thức bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Kỹ năng lập dàn ý nhanh và cách mở bài, kết bài ấn tượng 8.5+\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 1] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 2] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 3] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 4] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 5] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 6] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 7] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 0,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "application",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 8] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\"."
    ],
    "correctIndex": 3,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 9] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 2,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  },
  {
    "id": "LIT12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Ngữ Văn 12 - Tuần 35 - Câu 10] Về văn bản và kiến thức bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\", nhận định nào sau đây thể hiện đúng giá trị nội dung và nghệ thuật?",
    "options": [
      "Nhận định mang tính chủ quan, chưa bám sát mạch cảm xúc và bối cảnh lịch sử của tác phẩm.",
      "Thể hiện sâu sắc tư tưởng chủ đề, nghệ thuật lập luận chặt chẽ và cảm xúc nhân văn tiêu biểu của tác phẩm trong \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
      "Đánh giá sai lệch về phong cách ngôn ngữ nghệ thuật hoặc biện pháp tu từ được tác giả sử dụng.",
      "Phân tích chưa làm nổi bật được giá trị hiện thực và giá trị nhân đạo cốt lõi của tác phẩm."
    ],
    "correctIndex": 1,
    "hint": "Đọc kỹ văn bản, chú ý đặc trưng thể loại và biện pháp nghệ thuật trong bài \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\".",
    "explanation": "Phân tích chi tiết: Tác phẩm/Văn bản trong bài học \"Tổng kết chương trình Ngữ Văn 12 & Bí quyết bứt phá điểm thi Quốc gia\" mang giá trị tư tưởng sâu sắc, ngôn ngữ hàm súc và nghệ thuật biểu đạt độc đáo chuẩn chương trình Ngữ Văn 12."
  }
];

export const getQuestionsByWeekLit12 = (weekNum) => {
  const num = parseInt(weekNum, 10);
  return QUESTION_BANK_LIT12.filter(q => q.week === num);
};

export const getFilteredQuestionsLit12 = ({ semester, stage, category, difficulty, count = 10 } = {}) => {
  let list = [...QUESTION_BANK_LIT12];
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
