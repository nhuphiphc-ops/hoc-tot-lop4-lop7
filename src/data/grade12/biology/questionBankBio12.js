// NGÂN HÀNG BÀI TẬP VÀ CÂU HỎI THỰC HÀNH SINH HỌC 12 LỚP 12
// CHUẨN ĐỀ THI TỐT NGHIỆP THPT 2026 (GDPT MỚI)
// DÀNH CHO HỌC SINH NGUYỄN NHẬT MINH (TRƯỜNG PTTH NGÔ GIA TỰ)
// 35 TUẦN - 350 BÀI TẬP CỤ THỂ, BÀI TOÁN TÍNH TOÁN, CÔNG THỨC & LỜI GIẢI CHI TIẾT

export const STAGES_BIO12 = [
  {
    "id": 1,
    "title": "Chặng 1: Di Truyền Phân Tử & Đột Biến Gen",
    "range": "Tuần 1 - Tuần 9",
    "desc": "DNA, RNA, nhân đôi, phiên mã, dịch mã, Operon Lac",
    "icon": "BookOpen",
    "color": "from-green-600 to-emerald-700"
  },
  {
    "id": 2,
    "title": "Chặng 2: Quy Luật Di Truyền & Phả Hệ",
    "range": "Tuần 10 - Tuần 18",
    "desc": "Men-đen, tương tác gen, hoán vị gen, di truyền giới tính",
    "icon": "Compass",
    "color": "from-teal-600 to-cyan-700"
  },
  {
    "id": 3,
    "title": "Chặng 3: Di Truyền Quần Thể & Tiến Hóa",
    "range": "Tuần 19 - Tuần 27",
    "desc": "Hardy-Weinberg, CLTN, hình thành loài mới",
    "icon": "Award",
    "color": "from-amber-600 to-orange-600"
  },
  {
    "id": 4,
    "title": "Chặng 4: Sinh Thái Học & Luyện Đề Tốt Nghiệp 2026",
    "range": "Tuần 28 - Tuần 35",
    "desc": "Quần xã, hệ sinh thái, chuỗi thức ăn và luyện đề",
    "icon": "GraduationCap",
    "color": "from-purple-600 to-pink-600"
  }
];

export const TOPIC_CATEGORIES_BIO12 = [
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

export const WEEKS_METADATA_BIO12 = {};

export const QUESTION_BANK_BIO12 = [
  {
    "id": "B12_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 1] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 2] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 3] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 4] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 5] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 6] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 7] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 8] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 9] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 1",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 1 - Câu 10] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 1] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 2] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 3] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 4] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 5] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 6] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 7] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 8] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 9] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 2",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 2 - Câu 10] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 1] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 2] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 3] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 4] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 5] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 6] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 7] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 8] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 9] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 3",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 3 - Câu 10] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 1] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 2] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 3] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 4] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 5] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 6] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 7] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 8] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 9] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 4",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 4 - Câu 10] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 1] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 2] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 3] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 4] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 5] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 6] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 7] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 8] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 9] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 5",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 5 - Câu 10] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 1] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 2] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 3] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 4] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 5] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 6] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 7] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 8] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 9] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 6",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 6 - Câu 10] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 1] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 2] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 3] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 4] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 5] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 6] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 7] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 8] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 9] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 7",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 7 - Câu 10] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 1] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 2] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 3] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 4] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 5] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 6] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 7] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 8] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 9] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 8",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 8 - Câu 10] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 1] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 2] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 3] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 4] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 5] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 6] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 7] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 8] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 9] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Sinh Học 12 - Tuần 9",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 9 - Câu 10] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 1] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 2] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 3] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 4] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 5] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 6] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 7] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 8] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 9] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 10",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 10 - Câu 10] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 1] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 2] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 3] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 4] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 5] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 6] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 7] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 8] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 9] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 11",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 11 - Câu 10] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 1] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 2] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 3] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 4] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 5] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 6] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 7] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 8] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 9] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 12",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 12 - Câu 10] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 1] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 2] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 3] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 4] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 5] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 6] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 7] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 8] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 9] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 13",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 13 - Câu 10] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 1] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 2] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 3] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 4] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 5] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 6] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 7] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 8] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 9] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 14",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 14 - Câu 10] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 1] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 2] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 3] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 4] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 5] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 6] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 7] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 8] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 9] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 15",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 15 - Câu 10] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 1] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 2] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 3] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 4] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 5] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 6] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 7] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 8] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 9] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 16",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 16 - Câu 10] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 1] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 2] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 3] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 4] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 5] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 6] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 7] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 8] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 9] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 17",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 17 - Câu 10] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 1] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 2] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 3] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 4] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 5] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 6] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 7] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 8] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 9] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Sinh Học 12 - Tuần 18",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 18 - Câu 10] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 1] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 2] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 3] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 4] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 5] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 6] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 7] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 8] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 9] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 19",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 19 - Câu 10] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 1] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 2] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 3] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 4] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 5] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 6] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 7] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 8] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 9] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 20",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 20 - Câu 10] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 1] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 2] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 3] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 4] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 5] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 6] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 7] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 8] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 9] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 21",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 21 - Câu 10] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 1] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 2] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 3] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 4] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 5] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 6] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 7] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 8] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 9] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 22",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 22 - Câu 10] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 1] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 2] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 3] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 4] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 5] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 6] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 7] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 8] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 9] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 23",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 23 - Câu 10] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 1] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 2] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 3] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 4] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 5] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 6] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 7] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 8] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 9] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 24",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 24 - Câu 10] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 1] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 2] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 3] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 4] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 5] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 6] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 7] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 8] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 9] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 25",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 25 - Câu 10] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 1] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 2] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 3] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 4] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 5] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 6] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 7] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 8] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 9] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 26",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 26 - Câu 10] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 1] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 2] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 3] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 4] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 5] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 6] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 7] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 8] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 9] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Sinh Học 12 - Tuần 27",
    "category": "advanced",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 27 - Câu 10] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 1] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 2] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 3] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 4] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 5] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 6] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 7] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 8] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 9] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 28",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 28 - Câu 10] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 1] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 2] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 3] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 4] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 5] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 6] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 7] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 8] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 9] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 29",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 29 - Câu 10] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 1] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 2] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 3] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 4] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 5] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 6] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 7] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 8] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 9] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 30",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 30 - Câu 10] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 1] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 2] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 3] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 4] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 5] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 6] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 7] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 8] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 9] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 31",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 31 - Câu 10] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 1] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 2] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 3] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 4] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 5] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 6] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 7] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 8] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 9] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 32",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 32 - Câu 10] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 1] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 2] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 3] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 4] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 5] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 6] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 7] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 8] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 9] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 33",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 33 - Câu 10] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 1] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 2] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 3] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
  },
  {
    "id": "B12_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 4] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 5] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 6] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 7] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 8] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 9] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 34",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 34 - Câu 10] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 1] Mã mở đầu trên phân tử mRNA mã hóa cho amino acid Methionine ở sinh vật nhân thực có bộ ba là:",
    "options": [
      "5'-AUG-3'",
      "5'-UAA-3'",
      "5'-UAG-3'",
      "5'-UGA-3'"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Bộ ba 5'-AUG-3' là mã mở đầu quy định Methionine (Met) ở sinh vật nhân thực (hoặc Formyl-Met ở nhân sơ)."
  },
  {
    "id": "B12_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 2] Trong một chuỗi thức ăn: Cỏ -> Châu chấu -> Ếch -> Rắn -> Đại bàng. Sinh vật tiêu thụ bậc 2 là:",
    "options": [
      "Ếch",
      "Châu chấu",
      "Rắn",
      "Cỏ"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Cỏ (SV sản xuất) -> Châu chấu (SV tiêu thụ bậc 1) -> Ếch (SV tiêu thụ bậc 2) -> Rắn (SV tiêu thụ bậc 3)."
  },
  {
    "id": "B12_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "easy",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 3] Một phân tử mRNA có 300 codon (bộ ba). Quá trình dịch mã tổng hợp nên 1 chuỗi polypeptide hoàn chỉnh gồm bao nhiêu amino acid?",
    "options": [
      "298 amino acid",
      "299 amino acid",
      "300 amino acid",
      "301 amino acid"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: 300 codon gồm 1 codon mở đầu, 298 codon mã hóa và 1 codon kết thúc (không mã hóa). Khi hoàn chỉnh, acid amin mở đầu bị cắt bỏ nên chuỗi polypeptide còn 298 aa."
  },
  {
    "id": "B12_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "theory",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 4] Hiện tượng một gen chi phối sự biểu hiện của nhiều tính trạng khác nhau được gọi là:",
    "options": [
      "Tác động đa hiệu của gen",
      "Tương tác bổ sung",
      "Tương tác cộng gộp",
      "Liên kết gen hoàn toàn"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Tác động đa hiệu (Pleiotropy) là hiện tượng một gen chi phối và ảnh hưởng đến sự hình thành nhiều tính trạng khác nhau."
  },
  {
    "id": "B12_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 5] Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine là A = 600. Số nucleotide loại Guanine (G) của phân tử DNA này là:",
    "options": [
      "900",
      "600",
      "1200",
      "1500"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo nguyên tắc bổ sung A + G = 50% tổng số Nu = 1500. Suy ra G = 1500 - 600 = 900 Nu."
  },
  {
    "id": "B12_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 6] Một gen có chiều dài L = 4080 Å. Tổng số nucleotide của gen này là:",
    "options": [
      "2400 Nu",
      "1200 Nu",
      "3000 Nu",
      "4080 Nu"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: N = (2 * L) / 3.4 = (2 * 4080) / 3.4 = 2400 nucleotide."
  },
  {
    "id": "B12_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "medium",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 7] Trong mô hình Operon Lac ở E.coli, vùng nào là nơi protein ức chế gắn vào để ngăn cản quá trình phiên mã?",
    "options": [
      "Vùng vận hành (Operator - O)",
      "Vùng khởi động (Promoter - P)",
      "Gen điều hòa (R)",
      "Nhóm gen cấu trúc (Z, Y, A)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Protein ức chế do gen điều hòa R tổng hợp sẽ gắn vào vùng vận hành (Operator - O) để ngăn cản RNA polymerase phiên mã."
  },
  {
    "id": "B12_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "application",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 8] Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với a quy định hạt xanh. Cho cây hạt vàng dị hợp Aa tự thụ phấn, tỉ lệ kiểu hình ở đời F1 là:",
    "options": [
      "3 hạt vàng : 1 hạt xanh",
      "1 hạt vàng : 1 hạt xanh",
      "100% hạt vàng",
      "1 vàng : 2 đốm : 1 xanh"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Phép lai Aa x Aa cho tỉ lệ kiểu gen 1 AA : 2 Aa : 1 aa -> Tỉ lệ kiểu hình 3 hạt vàng : 1 hạt xanh."
  },
  {
    "id": "B12_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 9] Một quần thể ngẫu phối ở trạng thái cân bằng di truyền có tần số alen A = 0.6 và a = 0.4. Tỉ lệ cá thể có kiểu gen dị hợp Aa trong quần thể là:",
    "options": [
      "0.48 (48%)",
      "0.36 (36%)",
      "0.16 (16%)",
      "0.24 (24%)"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Theo định luật Hardy - Weinberg, tỉ lệ kiểu gen dị hợp là 2pq = 2 * 0.6 * 0.4 = 0.48 (48%)."
  },
  {
    "id": "B12_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Sinh Học 12 - Tuần 35",
    "category": "exam",
    "difficulty": "hard",
    "question": "[Sinh Học 12 - Tuần 35 - Câu 10] Bộ nhiễm sắc thể lưỡng bội của loài là 2n = 24. Số lượng NST trong tế bào thể ba (2n + 1) của loài này là:",
    "options": [
      "25 NST",
      "23 NST",
      "36 NST",
      "48 NST"
    ],
    "correctIndex": 0,
    "hint": "Áp dụng nguyên tắc bổ sung, công thức di truyền học phân tử và định luật di truyền 12.",
    "explanation": "Hướng dẫn giải chi tiết: Thể ba nhiễm có dạng (2n + 1) = 24 + 1 = 25 nhiễm sắc thể."
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
