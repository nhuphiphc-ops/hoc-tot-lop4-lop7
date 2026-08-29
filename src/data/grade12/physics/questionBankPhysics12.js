// NGÂN HÀNG CÂU HỎI VẬT LÍ 12 LỚP 12 - CHUẨN TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN HỌC - 350 CÂU HỎI ĐẶC SẮC CÓ ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

export const STAGES_PHYSICS12 = [
  {
    "id": 1,
    "title": "Chặng 1: Vật Lí Nhiệt & Thuyết Động Học Phân Tử",
    "range": "Tuần 1 - Tuần 9",
    "desc": "Nội năng, thang nhiệt độ, nhiệt dung riêng, nhiệt nóng chảy và hóa hơi",
    "icon": "BookOpen",
    "color": "from-sky-600 to-blue-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Khí Lí Tưởng & Các Đẳng Quá Trình",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Định luật Boyle, Charles và phương trình trạng thái khí lí tưởng",
    "icon": "Compass",
    "color": "from-indigo-600 to-purple-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Từ Trường & Cảm Ứng Điện Từ",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Lực từ, cảm ứng từ, từ thông và định luật Faraday/Lenz",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Vật Lí Hạt Nhân & Luyện Đề Tốt Nghiệp THPT 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Năng lượng liên kết, phóng xạ, phân hạch, nhiệt hạch và luyện đề",
    "icon": "GraduationCap",
    "color": "from-emerald-600 to-teal-700"
  }
];

export const TOPIC_CATEGORIES_PHYSICS12 = [
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

export const WEEKS_METADATA_PHYSICS12 = {
  "1": {
    "title": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 1 môn Vật Lí 12."
  },
  "2": {
    "title": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 2 môn Vật Lí 12."
  },
  "3": {
    "title": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 3 môn Vật Lí 12."
  },
  "4": {
    "title": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 4 môn Vật Lí 12."
  },
  "5": {
    "title": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 5 môn Vật Lí 12."
  },
  "6": {
    "title": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 6 môn Vật Lí 12."
  },
  "7": {
    "title": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 7 môn Vật Lí 12."
  },
  "8": {
    "title": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 8 môn Vật Lí 12."
  },
  "9": {
    "title": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "stageId": 1,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 9 môn Vật Lí 12."
  },
  "10": {
    "title": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 10 môn Vật Lí 12."
  },
  "11": {
    "title": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 11 môn Vật Lí 12."
  },
  "12": {
    "title": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 12 môn Vật Lí 12."
  },
  "13": {
    "title": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 13 môn Vật Lí 12."
  },
  "14": {
    "title": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 14 môn Vật Lí 12."
  },
  "15": {
    "title": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 15 môn Vật Lí 12."
  },
  "16": {
    "title": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 16 môn Vật Lí 12."
  },
  "17": {
    "title": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 17 môn Vật Lí 12."
  },
  "18": {
    "title": "Cảm ứng từ B và đơn vị Tesla (T)",
    "stageId": 2,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 18 môn Vật Lí 12."
  },
  "19": {
    "title": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 19 môn Vật Lí 12."
  },
  "20": {
    "title": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 20 môn Vật Lí 12."
  },
  "21": {
    "title": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 21 môn Vật Lí 12."
  },
  "22": {
    "title": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 22 môn Vật Lí 12."
  },
  "23": {
    "title": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 23 môn Vật Lí 12."
  },
  "24": {
    "title": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 24 môn Vật Lí 12."
  },
  "25": {
    "title": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 25 môn Vật Lí 12."
  },
  "26": {
    "title": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 26 môn Vật Lí 12."
  },
  "27": {
    "title": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "stageId": 3,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 27 môn Vật Lí 12."
  },
  "28": {
    "title": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 28 môn Vật Lí 12."
  },
  "29": {
    "title": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 29 môn Vật Lí 12."
  },
  "30": {
    "title": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 30 môn Vật Lí 12."
  },
  "31": {
    "title": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 31 môn Vật Lí 12."
  },
  "32": {
    "title": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 32 môn Vật Lí 12."
  },
  "33": {
    "title": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 33 môn Vật Lí 12."
  },
  "34": {
    "title": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 34 môn Vật Lí 12."
  },
  "35": {
    "title": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "stageId": 4,
    "category": "theory",
    "desc": "Luyện tập chuyên sâu bài học Tuần 35 môn Vật Lí 12."
  }
};

export const QUESTION_BANK_PHYSICS12 = [
  {
    "id": "PHYSICS12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 1] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 2] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 3] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 4] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 5] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 6] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 7] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 8] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 9] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình động học phân tử về cấu tạo chất và chuyển động Brown",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 1 - Câu 10] Về kiến thức chuyên đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình động học phân tử về cấu tạo chất và chuyển động Brown\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 1] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 2] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 3] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 4] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 5] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 6] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 7] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 8] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 9] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 2 - Câu 10] Về kiến thức chuyên đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt độ, thang nhiệt độ Celsius và thang nhiệt độ Kelvin\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 1] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 2] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 3] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 4] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 5] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 6] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 7] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 8] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 9] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 3 - Câu 10] Về kiến thức chuyên đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nội năng và định luật 1 của nhiệt động lực học (ΔU = A + Q)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 1] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 2] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 3] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 4] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 5] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 6] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 7] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 8] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 9] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 4 - Câu 10] Về kiến thức chuyên đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt dung riêng của chất và phương pháp đo nhiệt dung riêng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 1] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 2] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 3] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 4] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 5] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 6] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 7] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 8] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 9] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt nóng chảy riêng của chất rắn kết tinh",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 5 - Câu 10] Về kiến thức chuyên đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt nóng chảy riêng của chất rắn kết tinh\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt nóng chảy riêng của chất rắn kết tinh\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt nóng chảy riêng của chất rắn kết tinh\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 1] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 2] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 3] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 4] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 5] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 6] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 7] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 8] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 9] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 6 - Câu 10] Về kiến thức chuyên đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Nhiệt hóa hơi riêng và quá trình sôi của chất lỏng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 1] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 2] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 3] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 4] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 5] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 6] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 7] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 8] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 9] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Mô hình khí lí tưởng và các giả thuyết động học chất khí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 7 - Câu 10] Về kiến thức chuyên đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Mô hình khí lí tưởng và các giả thuyết động học chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 1] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 2] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 3] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 4] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 5] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 6] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 7] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 8] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 9] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 8 - Câu 10] Về kiến thức chuyên đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Boyle về quá trình đẳng nhiệt của chất khí (p.V = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 1] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 2] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 3] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 4] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 5] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 6] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 7] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 8] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 9] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 9 - Câu 10] Về kiến thức chuyên đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Charles về quá trình đẳng áp của chất khí (V/T = const)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 1] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 2] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 3] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 4] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 5] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 6] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 7] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 8] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 9] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 10 - Câu 10] Về kiến thức chuyên đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phương trình trạng thái khí lí tưởng (p.V/T = const; pV = nRT)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 1] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 2] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 3] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 4] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 5] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 6] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 7] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 8] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 9] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Áp suất khí theo mô hình động học phân tử và động năng phân tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 11 - Câu 10] Về kiến thức chuyên đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Áp suất khí theo mô hình động học phân tử và động năng phân tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 1] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 2] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 3] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 4] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 5] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 6] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 7] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 8] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 9] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 12 - Câu 10] Về kiến thức chuyên đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng các định luật chất khí trong đời sống và kỹ thuật\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 1] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 2] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 3] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 4] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 5] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 6] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 7] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 8] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 9] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 13 - Câu 10] Về kiến thức chuyên đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập chuyên đề: Vật lí nhiệt & Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 1] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 2] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 3] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 4] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 5] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 6] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 7] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 8] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 9] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Luyện giải bài toán đồ thị biến đổi trạng thái chất khí",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 14 - Câu 10] Về kiến thức chuyên đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện giải bài toán đồ thị biến đổi trạng thái chất khí\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 1] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 2] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 3] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 4] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 5] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 6] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 7] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 8] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 9] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 15 - Câu 10] Về kiến thức chuyên đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ôn tập & Kiểm tra Học kỳ I môn Vật Lí 12\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 1] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 2] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 3] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 4] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 5] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 6] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 7] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 8] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 9] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Từ trường, đường sức từ và từ trường của Trái Đất",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 16 - Câu 10] Về kiến thức chuyên đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ trường, đường sức từ và từ trường của Trái Đất\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ trường, đường sức từ và từ trường của Trái Đất\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ trường, đường sức từ và từ trường của Trái Đất\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 1] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 2] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 3] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 4] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 5] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 6] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 7] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 8] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 9] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 17 - Câu 10] Về kiến thức chuyên đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Định luật Ampère)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 1] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 2] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 3] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 4] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 5] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 6] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 7] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 8] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 9] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Cảm ứng từ B và đơn vị Tesla (T)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 18 - Câu 10] Về kiến thức chuyên đề \"Cảm ứng từ B và đơn vị Tesla (T)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cảm ứng từ B và đơn vị Tesla (T)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cảm ứng từ B và đơn vị Tesla (T)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cảm ứng từ B và đơn vị Tesla (T)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 1] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 2] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 3] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 4] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 5] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 6] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 7] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 8] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 9] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Từ thông qua diện tích S và đơn vị Weber (Wb)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 19 - Câu 10] Về kiến thức chuyên đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Từ thông qua diện tích S và đơn vị Weber (Wb)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Từ thông qua diện tích S và đơn vị Weber (Wb)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Từ thông qua diện tích S và đơn vị Weber (Wb)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 1] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 2] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 3] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 4] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 5] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 6] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 7] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 8] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 9] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 20 - Câu 10] Về kiến thức chuyên đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng cảm ứng điện từ và định luật Lenz xác định chiều dòng điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 1] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 2] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 3] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 4] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 5] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 6] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 7] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 8] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 9] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 21 - Câu 10] Về kiến thức chuyên đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật Faraday về suất điện động cảm ứng (ec = -ΔΦ/Δt)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 1] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 2] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 3] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 4] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 5] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 6] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 7] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 8] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 9] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng tự cảm và hệ số tự cảm L của ống dây",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 22 - Câu 10] Về kiến thức chuyên đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng tự cảm và hệ số tự cảm L của ống dây\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 1] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 2] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 3] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 4] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 5] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 6] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 7] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 8] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 9] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 23 - Câu 10] Về kiến thức chuyên đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Cấu trúc hạt nhân: Proton, Neutron và ký hiệu nguyên tử\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 1] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 2] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 3] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 4] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 5] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 6] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 7] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 8] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 9] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 24 - Câu 10] Về kiến thức chuyên đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Độ hụt khối Δm và năng lượng liên kết hạt nhân (E = mc²)\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 1] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 2] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 3] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 4] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 5] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 6] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 7] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 8] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 9] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Năng lượng liên kết riêng và tính bền vững của hạt nhân",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 25 - Câu 10] Về kiến thức chuyên đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Năng lượng liên kết riêng và tính bền vững của hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 1] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 2] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 3] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 4] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 5] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 6] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 7] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 8] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 9] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 26 - Câu 10] Về kiến thức chuyên đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Hiện tượng phóng xạ: Phóng xạ alpha, beta và gamma\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 1] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 2] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 3] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 4] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 5] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 6] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 7] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 8] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 9] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 27 - Câu 10] Về kiến thức chuyên đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Định luật phóng xạ, chu kỳ bán rã T và hằng số phóng xạ λ\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 1] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 2] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 3] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 4] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 5] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 6] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 7] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 8] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 9] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 28 - Câu 10] Về kiến thức chuyên đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Phản ứng phân hạch và phản ứng nhiệt hạch trong vũ trụ và nhà máy điện\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 1] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 2] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 3] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 4] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 5] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 6] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 7] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 8] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 9] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 29 - Câu 10] Về kiến thức chuyên đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Ứng dụng y học hạt nhân và an toàn bức xạ ion hóa\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 1] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 2] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 3] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 4] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 5] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 6] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 7] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 8] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 9] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 30 - Câu 10] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Nhiệt học và Khí lí tưởng\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 1] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 2] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 3] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 4] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 5] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 6] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 7] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 8] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 9] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 31 - Câu 10] Về kiến thức chuyên đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Luyện đề Tốt nghiệp THPT: Chuyên đề Từ trường và Hạt nhân\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 1] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 2] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 3] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 4] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 5] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 6] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 7] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 8] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 9] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 32 - Câu 10] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 1\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 1] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 2] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 3] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 4] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 5] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 6] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 7] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 8] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 9] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 33 - Câu 10] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 2\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 1] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 2] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 3] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 4] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 5] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 6] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 7] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 8] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 9] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 34 - Câu 10] Về kiến thức chuyên đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Đề thi thử Tốt nghiệp THPT Vật Lí 2026 - Đề số 3\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 1] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 2] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 3] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 4] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 5] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 6] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "application",
    "difficulty": "medium",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 7] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "application",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 8] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\"."
    ],
    "correctIndex": 3,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 9] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 2,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
  },
  {
    "id": "PHYSICS12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Vật Lí 12 - Tuần 35 - Câu 10] Về kiến thức chuyên đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", kết luận hoặc hệ thức vật lí nào sau đây là ĐÚNG?",
    "options": [
      "Đơn vị đo lường của các đại lượng vật lí trong công thức chưa được đổi về hệ chuẩn SI (J, K, Pa, T, Bq).",
      "Hệ thức phản ánh chính xác quy luật nhiệt động lực học / khí lí tưởng / từ trường / hạt nhân của \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\".",
      "Nhầm lẫn giữa quá trình đẳng nhiệt, đẳng tích và đẳng áp của lượng khí lí tưởng xác định.",
      "Bỏ qua lực cản môi trường hoặc áp dụng sai chiều của lực từ/suất điện động cảm ứng theo định luật Lenz."
    ],
    "correctIndex": 1,
    "hint": "Áp dụng định luật vật lí và công thức trọng tâm bài \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\" trong SGK Vật Lí 12 GDPT 2026.",
    "explanation": "Hướng dẫn giải: Vận dụng đúng định luật vật lí tương ứng với chủ đề \"Tổng kết Vật Lí 12 & Phương pháp đạt điểm tối đa kỳ thi Quốc gia\", biến đổi các đại lượng và kiểm tra thứ nguyên để đưa ra kết quả chuẩn xác."
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
