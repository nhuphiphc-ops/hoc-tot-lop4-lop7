// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH HÓA HỌC 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

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

export const WEEKS_METADATA_CHEM12 = {};

export const QUESTION_BANK_CHEM12 = [
  {
    "id": "C12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 1] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 2] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 3] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 4] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 5] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 6] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 7] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 8] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 9] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 1 - Bài tập 10] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 1] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 2] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 3] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 4] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 5] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 6] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 7] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 8] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 9] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 2 - Bài tập 10] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 1] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 2] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 3] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 4] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 5] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 6] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 7] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 8] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 9] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 3 - Bài tập 10] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 1] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 2] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 3] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 4] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 5] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 6] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 7] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 8] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 9] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 4 - Bài tập 10] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 1] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 2] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 3] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 4] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 5] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 6] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 7] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 8] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 9] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 5 - Bài tập 10] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 1] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 2] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 3] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 4] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 5] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 6] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 7] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 8] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 9] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 6 - Bài tập 10] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 1] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 2] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 3] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 4] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 5] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 6] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 7] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 8] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 9] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 7 - Bài tập 10] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 1] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 2] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 3] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 4] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 5] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 6] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 7] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 8] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 9] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 8 - Bài tập 10] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 1] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 2] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 3] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 4] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 5] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 6] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 7] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 8] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 9] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Hóa Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 9 - Bài tập 10] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 1] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 2] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 3] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 4] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 5] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 6] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 7] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 8] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 9] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 10 - Bài tập 10] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 1] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 2] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 3] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 4] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 5] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 6] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 7] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 8] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 9] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 11 - Bài tập 10] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 1] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 2] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 3] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 4] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 5] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 6] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 7] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 8] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 9] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 12 - Bài tập 10] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 1] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 2] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 3] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 4] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 5] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 6] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 7] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 8] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 9] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 13 - Bài tập 10] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 1] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 2] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 3] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 4] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 5] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 6] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 7] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 8] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 9] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 14 - Bài tập 10] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 1] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 2] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 3] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 4] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 5] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 6] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 7] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 8] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 9] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 15 - Bài tập 10] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 1] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 2] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 3] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 4] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 5] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 6] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 7] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 8] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 9] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 16 - Bài tập 10] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 1] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 2] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 3] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 4] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 5] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 6] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 7] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 8] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 9] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 17 - Bài tập 10] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 1] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 2] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 3] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 4] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 5] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 6] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 7] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 8] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 9] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Hóa Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 18 - Bài tập 10] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 1] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 2] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 3] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 4] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 5] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 6] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 7] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 8] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 9] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 19 - Bài tập 10] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 1] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 2] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 3] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 4] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 5] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 6] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 7] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 8] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 9] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 20 - Bài tập 10] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 1] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 2] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 3] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 4] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 5] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 6] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 7] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 8] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 9] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 21 - Bài tập 10] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 1] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 2] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 3] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 4] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 5] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 6] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 7] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 8] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 9] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 22 - Bài tập 10] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 1] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 2] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 3] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 4] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 5] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 6] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 7] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 8] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 9] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 23 - Bài tập 10] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 1] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 2] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 3] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 4] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 5] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 6] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 7] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 8] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 9] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 24 - Bài tập 10] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 1] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 2] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 3] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 4] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 5] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 6] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 7] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 8] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 9] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 25 - Bài tập 10] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 1] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 2] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 3] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 4] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 5] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 6] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 7] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 8] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 9] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 26 - Bài tập 10] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 1] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 2] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 3] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 4] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 5] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 6] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 7] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 8] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 9] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Hóa Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 27 - Bài tập 10] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 1] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 2] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 3] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 4] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 5] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 6] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 7] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 8] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 9] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 28 - Bài tập 10] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 1] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 2] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 3] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 4] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 5] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 6] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 7] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 8] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 9] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 29 - Bài tập 10] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 1] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 2] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 3] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 4] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 5] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 6] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 7] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 8] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 9] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 30 - Bài tập 10] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 1] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 2] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 3] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 4] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 5] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 6] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 7] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 8] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 9] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 31 - Bài tập 10] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 1] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 2] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 3] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 4] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 5] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 6] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 7] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 8] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 9] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 32 - Bài tập 10] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 1] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 2] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 3] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 4] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 5] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 6] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 7] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 8] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 9] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 33 - Bài tập 10] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 1] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 2] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 3] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
  },
  {
    "id": "C12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 4] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 5] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 6] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 7] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 8] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 9] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 34 - Bài tập 10] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 1] Trùng hợp 5.6 kg ethylene (CH2=CH2) với hiệu suất 90%. Khối lượng polymer polyethylene (PE) thu được là:",
    "options": [
      "5.04 kg",
      "5.60 kg",
      "4.80 kg",
      "6.20 kg"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Khối lượng PE thu được = 5.6 * 90% = 5.04 kg."
  },
  {
    "id": "C12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 2] Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
    "options": [
      "2 liên kết",
      "3 liên kết",
      "1 liên kết",
      "4 liên kết"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-)."
  },
  {
    "id": "C12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 3] Chất nào sau đây làm đổi màu quỳ tím sang xanh?",
    "options": [
      "CH3NH2 (Methylamine)",
      "Aniline (C6H5NH2)",
      "Glycine",
      "Ethanol"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Methylamine có tính base mạnh hơn amoniac nên làm quỳ tím ẩm chuyển sang màu xanh."
  },
  {
    "id": "C12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 4] Phức chất [Cu(NH3)4]SO4 có nguyên tử trung tâm là:",
    "options": [
      "Cu²⁺",
      "NH3",
      "SO4²⁻",
      "Cu⁺"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Nguyên tử/ion kim loại trung tâm tạo liên kết cho nhận với 4 phối tử NH3 là ion Cu²⁺."
  },
  {
    "id": "C12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 5] Thủy phân hoàn toàn 8.8 g ethyl acetate (CH3COOC2H5, M = 88) bằng dung dịch NaOH vừa đủ. Khối lượng muối CH3COONa thu được là:",
    "options": [
      "8.2 g",
      "6.8 g",
      "9.6 g",
      "7.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(ester) = 8.8/88 = 0.1 mol -> n(muối CH3COONa) = 0.1 mol. Khối lượng m = 0.1 * 82 = 8.2 g."
  },
  {
    "id": "C12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 6] Cho 18 g glucose (C6H12O6, M = 180) phản ứng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng. Khối lượng kết tủa bạc Ag thu được là:",
    "options": [
      "21.6 g",
      "10.8 g",
      "43.2 g",
      "32.4 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: 1 mol Glucose tráng bạc tạo 2 mol Ag. n(Glucose) = 0.1 mol -> n(Ag) = 0.2 mol. m(Ag) = 0.2 * 108 = 21.6 g."
  },
  {
    "id": "C12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 7] Đun nóng 30 g acetic acid với 23 g ethanol (xúc tác H2SO4 đặc), hiệu suất phản ứng đạt 60%. Khối lượng ester ethyl acetate thu được là:",
    "options": [
      "26.4 g",
      "44.0 g",
      "35.2 g",
      "17.6 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(CH3COOH) = 30/60 = 0.5 mol; n(C2H5OH) = 23/46 = 0.5 mol. Khối lượng ester lí thuyết = 0.5 * 88 = 44 g. Do H = 60% nên thực tế m = 44 * 0.6 = 26.4 g."
  },
  {
    "id": "C12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 8] Chất nào sau đây là amin bậc hai?",
    "options": [
      "CH3-NH-CH3",
      "CH3-CH2-NH2",
      "(CH3)3N",
      "C6H5-NH2"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: Dimethylamine (CH3-NH-CH3) có 2 gốc hydrocarbon liên kết với nguyên tử N, là amin bậc 2."
  },
  {
    "id": "C12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 9] Cho 7.5 g glycine (H2N-CH2-COOH, M = 75) tác dụng vừa đủ với dung dịch HCl. Khối lượng muối clorua thu được là:",
    "options": [
      "11.15 g",
      "10.50 g",
      "8.25 g",
      "12.35 g"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: n(Gly) = 7.5/75 = 0.1 mol. Muối là ClH3N-CH2-COOH (M = 111.5). Khối lượng m = 0.1 * 111.5 = 11.15 g."
  },
  {
    "id": "C12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Hóa Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Hóa Học 12 - Tuần 35 - Bài tập 10] Cho pin điện hóa Zn - Cu. Biết E°(Zn²⁺/Zn) = -0.76 V và E°(Cu²⁺/Cu) = +0.34 V. Suất điện động chuẩn của pin là:",
    "options": [
      "1.10 V",
      "0.42 V",
      "-1.10 V",
      "0.85 V"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng định luật bảo toàn khối lượng, công thức mol và tính chất hóa học hữu cơ/vô cơ 12.",
    "explanation": "Hướng dẫn giải chi tiết: E°(pin) = E°(catot) - E°(anot) = 0.34 - (-0.76) = 1.10 V."
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
