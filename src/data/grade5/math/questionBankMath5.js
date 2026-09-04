// TOÁN LỚP 5 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_MATH5_QUESTIONS } from './stages/stage1_math5.js';
import { STAGE_2_MATH5_QUESTIONS } from './stages/stage2_math5.js';
import { STAGE_3_MATH5_QUESTIONS } from './stages/stage3_math5.js';
import { STAGE_4_MATH5_QUESTIONS } from './stages/stage4_math5.js';

export const QUESTION_BANK_MATH5 = [
  {
    "id": "M5_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "easy",
    "question": "Phân số thập phân là phân số có mẫu số là:",
    "options": [
      "10, 100, 1000, ...",
      "Các số chẵn",
      "Các số chia hết cho 5",
      "Bất kỳ số tự nhiên nào"
    ],
    "correctIndex": 0,
    "hint": "Phân số thập phân có mẫu số là lũy thừa của 10.",
    "explanation": "Phân số thập phân là phân số có mẫu số là 10, 100, 1000,..."
  },
  {
    "id": "M5_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "easy",
    "question": "Chuyển phân số 3/5 thành phân số thập phân có mẫu số 10:",
    "options": [
      "6/10",
      "3/10",
      "15/10",
      "30/10"
    ],
    "correctIndex": 0,
    "hint": "Nhân cả tử và mẫu với 2.",
    "explanation": "Ta có: 3/5 = (3 x 2) / (5 x 2) = 6/10."
  },
  {
    "id": "M5_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "medium",
    "question": "Phân số nào dưới đây là phân số thập phân?",
    "options": [
      "17/100",
      "15/20",
      "4/25",
      "7/50"
    ],
    "correctIndex": 0,
    "hint": "Tìm phân số có mẫu số là 10, 100, 1000...",
    "explanation": "17/100 có mẫu số là 100 nên là phân số thập phân."
  },
  {
    "id": "M5_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "medium",
    "question": "Chuyển phân số 7/25 thành phân số thập phân có mẫu số 100:",
    "options": [
      "28/100",
      "14/100",
      "70/100",
      "35/100"
    ],
    "correctIndex": 0,
    "hint": "Nhân cả tử và mẫu với 4.",
    "explanation": "7/25 = (7 x 4) / (25 x 4) = 28/100."
  },
  {
    "id": "M5_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Nâng cao] Chuyển hỗn số 3 và 4/5 thành phân số thập phân:",
    "options": [
      "38/10",
      "34/10",
      "19/10",
      "35/10"
    ],
    "correctIndex": 0,
    "hint": "3 và 4/5 = 19/5 = 38/10.",
    "explanation": "Đổi 3 và 4/5 = (3 x 5 + 4)/5 = 19/5 = 38/10."
  },
  {
    "id": "M5_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x/125 = 8/1000. Giá trị của x là:",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "hint": "8/1000 = 1/125.",
    "explanation": "Rút gọn 8/1000 = 1/125. Do x/125 = 1/125 nên x = 1."
  },
  {
    "id": "M5_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Nâng cao] Viết phân số 3/8 dưới dạng phân số thập phân có mẫu số 1000:",
    "options": [
      "375/1000",
      "125/1000",
      "250/1000",
      "300/1000"
    ],
    "correctIndex": 0,
    "hint": "Nhân cả tử và mẫu với 125.",
    "explanation": "3/8 = (3 x 125)/(8 x 125) = 375/1000."
  },
  {
    "id": "M5_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Phân số thập phân chỉ số học sinh nữ là:",
    "options": [
      "60/100",
      "24/10",
      "40/100",
      "6/100"
    ],
    "correctIndex": 0,
    "hint": "24/40 = 6/10 = 60/100.",
    "explanation": "Tỉ số là 24/40 = 3/5 = 6/10 = 60/100."
  },
  {
    "id": "M5_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Cho tổng S = 3/10 + 7/100 + 9/1000. Viết S dưới dạng phân số thập phân:",
    "options": [
      "379/1000",
      "19/1000",
      "379/100",
      "37/1000"
    ],
    "correctIndex": 0,
    "hint": "Quy đồng mẫu số chung 1000: 300/1000 + 70/1000 + 9/1000.",
    "explanation": "S = 300/1000 + 70/1000 + 9/1000 = 379/1000."
  },
  {
    "id": "M5_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Phân số thập phân",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số tự nhiên n nhỏ nhất sao cho n/16 có thể chuyển thành phân số thập phân lớn hơn 1:",
    "options": [
      "17",
      "16",
      "20",
      "25"
    ],
    "correctIndex": 0,
    "hint": "Để n/16 > 1 thì n > 16, số tự nhiên nhỏ nhất là 17.",
    "explanation": "Vì mẫu số 16 = 2^4 nên mọi phân số n/16 đều chuyển được thành phân số thập phân mẫu 10000. Để n/16 > 1 thì n ≥ 17."
  },
  {
    "id": "M5_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Cộng trừ phân số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 2 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Nhân chia phân số & Hỗn số",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 3 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "easy",
    "question": "1 km bằng bao nhiêu mét?",
    "options": [
      "1000 m",
      "100 m",
      "10 m",
      "10000 m"
    ],
    "correctIndex": 0,
    "hint": "1 km = 1000 m.",
    "explanation": "Theo bảng đơn vị đo độ dài: 1 km = 1000 m."
  },
  {
    "id": "M5_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "easy",
    "question": "5 m 6 dm bằng bao nhiêu đề-xi-mét?",
    "options": [
      "56 dm",
      "506 dm",
      "560 dm",
      "5.6 dm"
    ],
    "correctIndex": 0,
    "hint": "5 m = 50 dm, 50 + 6 = 56 dm.",
    "explanation": "5 m 6 dm = 50 dm + 6 dm = 56 dm."
  },
  {
    "id": "M5_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "medium",
    "question": "Đổi 6 m 9 cm thành xăng-ti-mét:",
    "options": [
      "609 cm",
      "69 cm",
      "6009 cm",
      "69 cm"
    ],
    "correctIndex": 0,
    "hint": "1 m = 100 cm.",
    "explanation": "6 m = 600 cm. Cộng 9 cm = 609 cm."
  },
  {
    "id": "M5_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "medium",
    "question": "Đổi 8 m 12 cm thành xăng-ti-mét:",
    "options": [
      "812 cm",
      "92 cm",
      "8012 cm",
      "92 cm"
    ],
    "correctIndex": 0,
    "hint": "1 m = 100 cm.",
    "explanation": "8 m = 800 cm. Cộng 12 cm = 812 cm."
  },
  {
    "id": "M5_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 5 m 25 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "420 cm",
      "105 cm",
      "410 cm",
      "525 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 525 cm. Cắt đi 1/5 còn lại: 525 x 4/5 = 420 cm."
  },
  {
    "id": "M5_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 6 m 30 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "504 cm",
      "126 cm",
      "494 cm",
      "630 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 630 cm. Cắt đi 1/5 còn lại: 630 x 4/5 = 504 cm."
  },
  {
    "id": "M5_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 7 m 35 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "588 cm",
      "147 cm",
      "578 cm",
      "735 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 735 cm. Cắt đi 1/5 còn lại: 735 x 4/5 = 588 cm."
  },
  {
    "id": "M5_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 8 m 40 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "672 cm",
      "168 cm",
      "662 cm",
      "840 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 840 cm. Cắt đi 1/5 còn lại: 840 x 4/5 = 672 cm."
  },
  {
    "id": "M5_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 9 m 45 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "756 cm",
      "189 cm",
      "746 cm",
      "945 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 945 cm. Cắt đi 1/5 còn lại: 945 x 4/5 = 756 cm."
  },
  {
    "id": "M5_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo độ dài",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[Nâng cao] Một sợi dây dài 10 m 50 cm. Người ta cắt đi 1/5 sợi dây. Đoạn dây còn lại dài bao nhiêu cm?",
    "options": [
      "840 cm",
      "210 cm",
      "830 cm",
      "1050 cm"
    ],
    "correctIndex": 0,
    "hint": "Đổi về cm rồi tính 4/5 độ dài.",
    "explanation": "Độ dài sợi dây = 1050 cm. Cắt đi 1/5 còn lại: 1050 x 4/5 = 840 cm."
  },
  {
    "id": "M5_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo khối lượng",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 5 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Đơn vị đo diện tích",
    "category": "measurement",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 6 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "So sánh số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "fractions",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 9 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng trừ số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân nhẩm số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Chia số tự nhiên ra số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Số thập phân 35,48 có phần nguyên là:",
    "options": [
      "35",
      "48",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "hint": "Phần nguyên đứng trước dấu phẩy.",
    "explanation": "Số 35,48 có phần nguyên là 35 và phần thập phân là 48 phần trăm."
  },
  {
    "id": "M5_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "easy",
    "question": "Chữ số 7 trong số thập phân 12,375 thuộc hàng nào?",
    "options": [
      "Hàng phần trăm",
      "Hàng phần mười",
      "Hàng phần nghìn",
      "Hàng đơn vị"
    ],
    "correctIndex": 0,
    "hint": "Đứng ở vị trí thứ hai sau dấu phẩy.",
    "explanation": "Chữ số 3 thuộc hàng phần mười, chữ số 7 thuộc hàng phần trăm, chữ số 5 thuộc hàng phần nghìn."
  },
  {
    "id": "M5_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 7.5 + 3.6 =",
    "options": [
      "11.1",
      "11.2",
      "10.9",
      "12.1"
    ],
    "correctIndex": 0,
    "hint": "Đặt tính thẳng cột các chữ số cùng hàng.",
    "explanation": "Thực hiện phép tính: 7.5 + 3.6 = 11.1."
  },
  {
    "id": "M5_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "medium",
    "question": "Tính: 10.0 x 10 =",
    "options": [
      "100.0",
      "1.0",
      "1000.0",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Dịch dấu phẩy sang phải 1 chữ số.",
    "explanation": "10.0 x 10 = 100.0."
  },
  {
    "id": "M5_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x biết: x - 6.0 = 12.5. Giá trị của x là:",
    "options": [
      "18.5",
      "6.5",
      "37.0",
      "12.5"
    ],
    "correctIndex": 0,
    "hint": "x = Hiệu + Số trừ.",
    "explanation": "x = 12.5 + 6.0 = 18.5."
  },
  {
    "id": "M5_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Nâng cao] Tính giá trị biểu thức: (15.0 + 7.2) x 2,5 =",
    "options": [
      "55.5",
      "58.0",
      "54.0",
      "61.05"
    ],
    "correctIndex": 0,
    "hint": "Thực hiện phép tính trong ngoặc trước rồi nhân 2,5.",
    "explanation": "(15.0 + 7.2) x 2,5 = 22.2 x 2,5 = 55.5."
  },
  {
    "id": "M5_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một mảnh đất hình chữ nhật có chiều dài 70.0 m, chiều rộng bằng 0,6 chiều dài. Diện tích mảnh đất là:",
    "options": [
      "2940.0 m2",
      "3528.0 m2",
      "112.0 m2",
      "1470.0 m2"
    ],
    "correctIndex": 0,
    "hint": "Tính chiều rộng = chiều dài x 0,6 rồi tính diện tích = dài x rộng.",
    "explanation": "Chiều rộng = 70.0 x 0,6 = 42.0 m. Diện tích = 70.0 x 42.0 = 2940.0 m2."
  },
  {
    "id": "M5_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Vận dụng cao] Một can chứa 40.0 lít dầu. Biết mỗi lít dầu nặng 0,8 kg và vỏ can nặng 1,2 kg. Cả can dầu nặng bao nhiêu kg?",
    "options": [
      "33.2 kg",
      "32.0 kg",
      "34.2 kg",
      "32.7 kg"
    ],
    "correctIndex": 0,
    "hint": "Khối lượng = Lượng dầu x 0,8 + Vỏ can (1,2 kg).",
    "explanation": "Khối lượng dầu = 40.0 x 0,8 = 32.0 kg. Cả can nặng: 32.0 + 1,2 = 33.2 kg."
  },
  {
    "id": "M5_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tìm số thập phân a,b biết a,b x 9,9 = aa,bb (với a, b khác 0):",
    "options": [
      "1,1",
      "2,2",
      "3,3",
      "4,4"
    ],
    "correctIndex": 0,
    "hint": "aa,bb = a,b x 11. Do đó a,b x 9,9 = a,b x 11 vô lí trừ khi phân tích cấu tạo số.",
    "explanation": "Ta có: a,b x 9,9 = a,b x (11 - 1,1) = aa,bb khi a=1, b=1 => số đó là 1,1."
  },
  {
    "id": "M5_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Chia cho số thập phân",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[Thử thách điểm 10] Tính nhanh: 0,25 x 4,5 x 4 + 0,125 x 7,8 x 8 =",
    "options": [
      "12,3",
      "14,5",
      "10,2",
      "15,6"
    ],
    "correctIndex": 0,
    "hint": "Nhóm (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8.",
    "explanation": "= (0,25 x 4) x 4,5 + (0,125 x 8) x 7,8 = 1 x 4,5 + 1 x 7,8 = 4,5 + 7,8 = 12,3."
  },
  {
    "id": "M5_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tỉ số phần trăm của 3 và 5 là:",
    "options": [
      "60%",
      "30%",
      "15%",
      "50%"
    ],
    "correctIndex": 0,
    "hint": "3 : 5 = 0,6 = 60%.",
    "explanation": "3 : 5 = 0,60 = 60%."
  },
  {
    "id": "M5_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tìm 25% của 200 kg:",
    "options": [
      "50.0 kg",
      "100.0 kg",
      "25.0 kg",
      "60.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Lấy 200 x p_val : 100.",
    "explanation": "200 x 25 : 100 = 50.0 kg."
  },
  {
    "id": "M5_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 150 kg gạo, đạt 30% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "500.0 kg",
      "600.0 kg",
      "400.0 kg",
      "550.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (150 x 100) : 30 = 500.0 kg."
  },
  {
    "id": "M5_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 200 kg gạo, đạt 35% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "571.43 kg",
      "685.72 kg",
      "457.14 kg",
      "621.43 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (200 x 100) : 35 = 571.43 kg."
  },
  {
    "id": "M5_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 10%. Giá xe sau khi giảm là:",
    "options": [
      "1,800,000 đ",
      "1,900,000 đ",
      "1,750,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 200,000 đ. Giá sau khi giảm = 1,800,000 đ."
  },
  {
    "id": "M5_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 12%. Giá xe sau khi giảm là:",
    "options": [
      "1,760,000 đ",
      "1,880,000 đ",
      "1,710,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 240,000 đ. Giá sau khi giảm = 1,760,000 đ."
  },
  {
    "id": "M5_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 14%. Giá xe sau khi giảm là:",
    "options": [
      "1,720,000 đ",
      "1,860,000 đ",
      "1,670,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 280,000 đ. Giá sau khi giảm = 1,720,000 đ."
  },
  {
    "id": "M5_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 16%. Giá xe sau khi giảm là:",
    "options": [
      "1,680,000 đ",
      "1,840,000 đ",
      "1,630,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 320,000 đ. Giá sau khi giảm = 1,680,000 đ."
  },
  {
    "id": "M5_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 18%. Giá xe sau khi giảm là:",
    "options": [
      "1,640,000 đ",
      "1,820,000 đ",
      "1,590,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 360,000 đ. Giá sau khi giảm = 1,640,000 đ."
  },
  {
    "id": "M5_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 20%. Giá xe sau khi giảm là:",
    "options": [
      "1,600,000 đ",
      "1,800,000 đ",
      "1,550,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 400,000 đ. Giá sau khi giảm = 1,600,000 đ."
  },
  {
    "id": "M5_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tỉ số phần trăm của 3 và 5 là:",
    "options": [
      "60%",
      "30%",
      "15%",
      "50%"
    ],
    "correctIndex": 0,
    "hint": "3 : 5 = 0,6 = 60%.",
    "explanation": "3 : 5 = 0,60 = 60%."
  },
  {
    "id": "M5_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tìm 25% của 200 kg:",
    "options": [
      "50.0 kg",
      "100.0 kg",
      "25.0 kg",
      "60.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Lấy 200 x p_val : 100.",
    "explanation": "200 x 25 : 100 = 50.0 kg."
  },
  {
    "id": "M5_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 150 kg gạo, đạt 30% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "500.0 kg",
      "600.0 kg",
      "400.0 kg",
      "550.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (150 x 100) : 30 = 500.0 kg."
  },
  {
    "id": "M5_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 200 kg gạo, đạt 35% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "571.43 kg",
      "685.72 kg",
      "457.14 kg",
      "621.43 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (200 x 100) : 35 = 571.43 kg."
  },
  {
    "id": "M5_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 10%. Giá xe sau khi giảm là:",
    "options": [
      "1,800,000 đ",
      "1,900,000 đ",
      "1,750,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 200,000 đ. Giá sau khi giảm = 1,800,000 đ."
  },
  {
    "id": "M5_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 12%. Giá xe sau khi giảm là:",
    "options": [
      "1,760,000 đ",
      "1,880,000 đ",
      "1,710,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 240,000 đ. Giá sau khi giảm = 1,760,000 đ."
  },
  {
    "id": "M5_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 14%. Giá xe sau khi giảm là:",
    "options": [
      "1,720,000 đ",
      "1,860,000 đ",
      "1,670,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 280,000 đ. Giá sau khi giảm = 1,720,000 đ."
  },
  {
    "id": "M5_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 16%. Giá xe sau khi giảm là:",
    "options": [
      "1,680,000 đ",
      "1,840,000 đ",
      "1,630,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 320,000 đ. Giá sau khi giảm = 1,680,000 đ."
  },
  {
    "id": "M5_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 18%. Giá xe sau khi giảm là:",
    "options": [
      "1,640,000 đ",
      "1,820,000 đ",
      "1,590,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 360,000 đ. Giá sau khi giảm = 1,640,000 đ."
  },
  {
    "id": "M5_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Giải toán tỉ số phần trăm",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 20%. Giá xe sau khi giảm là:",
    "options": [
      "1,600,000 đ",
      "1,800,000 đ",
      "1,550,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 400,000 đ. Giá sau khi giảm = 1,600,000 đ."
  },
  {
    "id": "M5_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tỉ số phần trăm của 3 và 5 là:",
    "options": [
      "60%",
      "30%",
      "15%",
      "50%"
    ],
    "correctIndex": 0,
    "hint": "3 : 5 = 0,6 = 60%.",
    "explanation": "3 : 5 = 0,60 = 60%."
  },
  {
    "id": "M5_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "easy",
    "question": "Tìm 25% của 200 kg:",
    "options": [
      "50.0 kg",
      "100.0 kg",
      "25.0 kg",
      "60.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Lấy 200 x p_val : 100.",
    "explanation": "200 x 25 : 100 = 50.0 kg."
  },
  {
    "id": "M5_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 150 kg gạo, đạt 30% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "500.0 kg",
      "600.0 kg",
      "400.0 kg",
      "550.0 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (150 x 100) : 30 = 500.0 kg."
  },
  {
    "id": "M5_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "medium",
    "question": "Một cửa hàng bán được 200 kg gạo, đạt 35% kế hoạch. Kế hoạch là bán bao nhiêu kg?",
    "options": [
      "571.43 kg",
      "685.72 kg",
      "457.14 kg",
      "621.43 kg"
    ],
    "correctIndex": 0,
    "hint": "Số cần tìm = (Số đã bán x 100) : Số phần trăm.",
    "explanation": "Kế hoạch = (200 x 100) : 35 = 571.43 kg."
  },
  {
    "id": "M5_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 10%. Giá xe sau khi giảm là:",
    "options": [
      "1,800,000 đ",
      "1,900,000 đ",
      "1,750,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 200,000 đ. Giá sau khi giảm = 1,800,000 đ."
  },
  {
    "id": "M5_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 12%. Giá xe sau khi giảm là:",
    "options": [
      "1,760,000 đ",
      "1,880,000 đ",
      "1,710,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 240,000 đ. Giá sau khi giảm = 1,760,000 đ."
  },
  {
    "id": "M5_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 14%. Giá xe sau khi giảm là:",
    "options": [
      "1,720,000 đ",
      "1,860,000 đ",
      "1,670,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 280,000 đ. Giá sau khi giảm = 1,720,000 đ."
  },
  {
    "id": "M5_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 16%. Giá xe sau khi giảm là:",
    "options": [
      "1,680,000 đ",
      "1,840,000 đ",
      "1,630,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 320,000 đ. Giá sau khi giảm = 1,680,000 đ."
  },
  {
    "id": "M5_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 18%. Giá xe sau khi giảm là:",
    "options": [
      "1,640,000 đ",
      "1,820,000 đ",
      "1,590,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 360,000 đ. Giá sau khi giảm = 1,640,000 đ."
  },
  {
    "id": "M5_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "percentage",
    "difficulty": "hard",
    "question": "[Nâng cao] Giá một chiếc xe đạp là 2.000.000 đồng. Nhân dịp khai giảng giảm giá 20%. Giá xe sau khi giảm là:",
    "options": [
      "1,600,000 đ",
      "1,800,000 đ",
      "1,550,000 đ",
      "2,000,000 đ"
    ],
    "correctIndex": 0,
    "hint": "Số tiền giảm = 2.000.000 x tỉ lệ giảm.",
    "explanation": "Số tiền giảm = 400,000 đ. Giá sau khi giảm = 1,600,000 đ."
  },
  {
    "id": "M5_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tam giác",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Hình thang",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "Hình tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Biểu đồ quạt tròn",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 22 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Hình hộp chữ nhật",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Hình lập phương",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Đơn vị đo thể tích",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tam giác có đáy a và chiều cao h là:",
    "options": [
      "S = (a x h) : 2",
      "S = a x h",
      "S = (a + h) : 2",
      "S = (a + h) x 2"
    ],
    "correctIndex": 0,
    "hint": "Đáy nhân chiều cao chia 2.",
    "explanation": "Diện tích hình tam giác S = (a x h) : 2."
  },
  {
    "id": "M5_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "easy",
    "question": "Công thức tính diện tích hình tròn bán kính r là:",
    "options": [
      "S = r x r x 3,14",
      "S = r x 2 x 3,14",
      "S = r x 3,14",
      "S = (r + r) x 3,14"
    ],
    "correctIndex": 0,
    "hint": "Bán kính nhân bán kính nhân 3,14.",
    "explanation": "S = r x r x 3,14."
  },
  {
    "id": "M5_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 12 cm và chiều cao 9 cm:",
    "options": [
      "54 cm2",
      "108 cm2",
      "59 cm2",
      "27 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (12 x 9) : 2 = 54 cm2."
  },
  {
    "id": "M5_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "medium",
    "question": "Tính diện tích hình tam giác có đáy 16 cm và chiều cao 12 cm:",
    "options": [
      "96 cm2",
      "192 cm2",
      "101 cm2",
      "48 cm2"
    ],
    "correctIndex": 0,
    "hint": "S = (a x h) : 2.",
    "explanation": "S = (16 x 12) : 2 = 96 cm2."
  },
  {
    "id": "M5_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 7 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 343 cm3, Stp = 294 cm2",
      "V = 686 cm3, Stp = 294 cm2",
      "V = 343 cm3, Stp = 284 cm2",
      "V = 294 cm3, Stp = 343 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 7^3 = 343 cm3. Diện tích toàn phần Stp = 7^2 x 6 = 294 cm2."
  },
  {
    "id": "M5_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 8 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 512 cm3, Stp = 384 cm2",
      "V = 1024 cm3, Stp = 384 cm2",
      "V = 512 cm3, Stp = 374 cm2",
      "V = 384 cm3, Stp = 512 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 8^3 = 512 cm3. Diện tích toàn phần Stp = 8^2 x 6 = 384 cm2."
  },
  {
    "id": "M5_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 9 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 729 cm3, Stp = 486 cm2",
      "V = 1458 cm3, Stp = 486 cm2",
      "V = 729 cm3, Stp = 476 cm2",
      "V = 486 cm3, Stp = 729 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 9^3 = 729 cm3. Diện tích toàn phần Stp = 9^2 x 6 = 486 cm2."
  },
  {
    "id": "M5_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 10 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1000 cm3, Stp = 600 cm2",
      "V = 2000 cm3, Stp = 600 cm2",
      "V = 1000 cm3, Stp = 590 cm2",
      "V = 600 cm3, Stp = 1000 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 10^3 = 1000 cm3. Diện tích toàn phần Stp = 10^2 x 6 = 600 cm2."
  },
  {
    "id": "M5_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 11 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1331 cm3, Stp = 726 cm2",
      "V = 2662 cm3, Stp = 726 cm2",
      "V = 1331 cm3, Stp = 716 cm2",
      "V = 726 cm3, Stp = 1331 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 11^3 = 1331 cm3. Diện tích toàn phần Stp = 11^2 x 6 = 726 cm2."
  },
  {
    "id": "M5_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tính thể tích khối hộp",
    "category": "volume",
    "difficulty": "hard",
    "question": "[Nâng cao] Một hình lập phương có cạnh 12 cm. Thể tích và diện tích toàn phần của hình là:",
    "options": [
      "V = 1728 cm3, Stp = 864 cm2",
      "V = 3456 cm3, Stp = 864 cm2",
      "V = 1728 cm3, Stp = 854 cm2",
      "V = 864 cm3, Stp = 1728 cm2"
    ],
    "correctIndex": 0,
    "hint": "V = a x a x a và Stp = a x a x 6.",
    "explanation": "Thể tích V = 12^3 = 1728 cm3. Diện tích toàn phần Stp = 12^2 x 6 = 864 cm2."
  },
  {
    "id": "M5_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tổng hợp Hình học & Thể tích",
    "category": "geometry",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 27 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "1 giờ bằng bao nhiêu phút?",
    "options": [
      "60 phút",
      "100 phút",
      "30 phút",
      "3600 phút"
    ],
    "correctIndex": 0,
    "hint": "Đơn vị cơ bản của đồng hồ.",
    "explanation": "1 giờ = 60 phút."
  },
  {
    "id": "M5_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "1 thế kỉ bằng bao nhiêu năm?",
    "options": [
      "100 năm",
      "10 năm",
      "1000 năm",
      "50 năm"
    ],
    "correctIndex": 0,
    "hint": "\"Thế kỉ\" gồm 100 năm.",
    "explanation": "1 thế kỉ = 100 năm."
  },
  {
    "id": "M5_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Đổi 2 giờ 30 phút thành phút.",
    "options": [
      "150 phút",
      "230 phút",
      "250 phút",
      "130 phút"
    ],
    "correctIndex": 0,
    "hint": "2 × 60 rồi cộng 30.",
    "explanation": "2 giờ 30 phút = 2 × 60 + 30 = 120 + 30 = 150 phút."
  },
  {
    "id": "M5_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một năm nhuận có bao nhiêu ngày?",
    "options": [
      "366 ngày",
      "365 ngày",
      "364 ngày",
      "360 ngày"
    ],
    "correctIndex": 0,
    "hint": "Tháng 2 năm nhuận có 29 ngày.",
    "explanation": "Năm nhuận có 366 ngày (tháng 2 có 29 ngày thay vì 28 ngày)."
  },
  {
    "id": "M5_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Tính: 3 giờ 45 phút + 2 giờ 30 phút.",
    "options": [
      "6 giờ 15 phút",
      "5 giờ 75 phút",
      "5 giờ 15 phút",
      "6 giờ 75 phút"
    ],
    "correctIndex": 0,
    "hint": "Cộng phút với phút, giờ với giờ rồi đổi 75 phút.",
    "explanation": "3 giờ 45 phút + 2 giờ 30 phút = 5 giờ 75 phút = 6 giờ 15 phút (vì 75 phút = 1 giờ 15 phút)."
  },
  {
    "id": "M5_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Tính: 5 giờ 20 phút − 2 giờ 45 phút.",
    "options": [
      "2 giờ 35 phút",
      "3 giờ 25 phút",
      "2 giờ 25 phút",
      "3 giờ 35 phút"
    ],
    "correctIndex": 0,
    "hint": "Mượn 1 giờ = 60 phút để trừ phút.",
    "explanation": "5 giờ 20 phút = 4 giờ 80 phút. Lấy 4 giờ 80 phút − 2 giờ 45 phút = 2 giờ 35 phút."
  },
  {
    "id": "M5_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Tính: 1 giờ 15 phút × 4.",
    "options": [
      "5 giờ",
      "4 giờ 60 phút",
      "4 giờ 15 phút",
      "5 giờ 15 phút"
    ],
    "correctIndex": 0,
    "hint": "Nhân riêng giờ và phút rồi đổi.",
    "explanation": "1 giờ 15 phút × 4 = 4 giờ 60 phút = 5 giờ (vì 60 phút = 1 giờ)."
  },
  {
    "id": "M5_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Đổi 0,75 giờ thành phút.",
    "options": [
      "45 phút",
      "75 phút",
      "7,5 phút",
      "30 phút"
    ],
    "correctIndex": 0,
    "hint": "0,75 × 60.",
    "explanation": "0,75 giờ = 0,75 × 60 = 45 phút."
  },
  {
    "id": "M5_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một bộ phim bắt đầu lúc 19 giờ 40 phút và kéo dài 1 giờ 50 phút. Bộ phim kết thúc lúc mấy giờ?",
    "options": [
      "21 giờ 30 phút",
      "20 giờ 90 phút",
      "21 giờ 10 phút",
      "20 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Cộng rồi đổi phút thừa thành giờ.",
    "explanation": "19 giờ 40 phút + 1 giờ 50 phút = 20 giờ 90 phút = 21 giờ 30 phút."
  },
  {
    "id": "M5_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một máy đóng gói làm việc từ 8 giờ 15 phút đến 11 giờ 45 phút, mỗi 15 phút đóng được 1 thùng. Máy đóng được bao nhiêu thùng?",
    "options": [
      "14 thùng",
      "13 thùng",
      "15 thùng",
      "12 thùng"
    ],
    "correctIndex": 0,
    "hint": "Tính tổng thời gian rồi chia cho 15 phút.",
    "explanation": "Thời gian làm việc: 11 giờ 45 phút − 8 giờ 15 phút = 3 giờ 30 phút = 210 phút. Số thùng: 210 : 15 = 14 thùng."
  },
  {
    "id": "M5_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "easy",
    "question": "Công thức tính vận tốc khi biết quãng đường s và thời gian t là gì?",
    "options": [
      "v = s : t",
      "v = s × t",
      "v = t : s",
      "v = s + t"
    ],
    "correctIndex": 0,
    "hint": "Vận tốc là quãng đường đi trong một đơn vị thời gian.",
    "explanation": "Vận tốc v = s : t (quãng đường chia thời gian)."
  },
  {
    "id": "M5_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một ô tô đi 120 km trong 2 giờ. Vận tốc của ô tô là bao nhiêu?",
    "options": [
      "60 km/h",
      "240 km/h",
      "122 km/h",
      "30 km/h"
    ],
    "correctIndex": 0,
    "hint": "Lấy 120 chia 2.",
    "explanation": "v = s : t = 120 : 2 = 60 km/h."
  },
  {
    "id": "M5_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một người đi bộ 6 km trong 2 giờ. Vận tốc của người đó là bao nhiêu?",
    "options": [
      "3 km/h",
      "12 km/h",
      "4 km/h",
      "8 km/h"
    ],
    "correctIndex": 0,
    "hint": "Lấy 6 chia 2.",
    "explanation": "v = 6 : 2 = 3 km/h."
  },
  {
    "id": "M5_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "easy",
    "question": "Đơn vị nào dưới đây là đơn vị của vận tốc?",
    "options": [
      "km/h",
      "km",
      "giờ",
      "kg"
    ],
    "correctIndex": 0,
    "hint": "Vận tốc gồm đơn vị quãng đường trên đơn vị thời gian.",
    "explanation": "km/h (kilômét trên giờ) là đơn vị của vận tốc; km là quãng đường, giờ là thời gian."
  },
  {
    "id": "M5_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một xe máy đi 90 km trong 1 giờ 30 phút. Vận tốc của xe máy là bao nhiêu?",
    "options": [
      "60 km/h",
      "45 km/h",
      "90 km/h",
      "135 km/h"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1 giờ 30 phút thành 1,5 giờ.",
    "explanation": "1 giờ 30 phút = 1,5 giờ. v = 90 : 1,5 = 60 km/h."
  },
  {
    "id": "M5_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một người chạy 400 m trong 50 giây. Vận tốc của người đó là bao nhiêu?",
    "options": [
      "8 m/giây",
      "450 m/giây",
      "20 000 m/giây",
      "0,125 m/giây"
    ],
    "correctIndex": 0,
    "hint": "Lấy 400 chia 50.",
    "explanation": "v = 400 : 50 = 8 m/giây."
  },
  {
    "id": "M5_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một tàu hoả đi được 210 km trong 3 giờ. Nếu giữ nguyên vận tốc, trong 5 giờ tàu đi được bao nhiêu km?",
    "options": [
      "350 km",
      "420 km",
      "630 km",
      "300 km"
    ],
    "correctIndex": 0,
    "hint": "Tìm vận tốc trước rồi nhân với 5.",
    "explanation": "v = 210 : 3 = 70 km/h. Trong 5 giờ: s = 70 × 5 = 350 km."
  },
  {
    "id": "M5_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "medium",
    "question": "Đổi vận tốc 36 km/h thành m/giây.",
    "options": [
      "10 m/giây",
      "36 m/giây",
      "3,6 m/giây",
      "600 m/giây"
    ],
    "correctIndex": 0,
    "hint": "36 km = 36000 m; 1 giờ = 3600 giây.",
    "explanation": "36 km/h = 36 000 m : 3 600 giây = 10 m/giây."
  },
  {
    "id": "M5_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một ô tô đi từ A đến B dài 135 km. Xe khởi hành lúc 7 giờ và đến B lúc 9 giờ 15 phút. Vận tốc của ô tô là bao nhiêu?",
    "options": [
      "60 km/h",
      "54 km/h",
      "67,5 km/h",
      "45 km/h"
    ],
    "correctIndex": 0,
    "hint": "Tính thời gian đi rồi lấy quãng đường chia thời gian.",
    "explanation": "Thời gian đi: 9 giờ 15 phút − 7 giờ = 2 giờ 15 phút = 2,25 giờ. v = 135 : 2,25 = 60 km/h."
  },
  {
    "id": "M5_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính vận tốc",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một người đi xe đạp 2 giờ đầu với vận tốc 12 km/h, 1 giờ sau với vận tốc 9 km/h. Vận tốc trung bình trên cả quãng đường là bao nhiêu?",
    "options": [
      "11 km/h",
      "10,5 km/h",
      "21 km/h",
      "12 km/h"
    ],
    "correctIndex": 0,
    "hint": "Vận tốc trung bình = tổng quãng đường : tổng thời gian.",
    "explanation": "Quãng đường: 12 × 2 + 9 × 1 = 24 + 9 = 33 km. Thời gian: 2 + 1 = 3 giờ. Vận tốc trung bình: 33 : 3 = 11 km/h."
  },
  {
    "id": "M5_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Công thức tính quãng đường khi biết vận tốc v và thời gian t là gì?",
    "options": [
      "s = v × t",
      "s = v : t",
      "s = t : v",
      "s = v + t"
    ],
    "correctIndex": 0,
    "hint": "Đi càng lâu, càng nhanh thì càng xa.",
    "explanation": "Quãng đường s = v × t (vận tốc nhân thời gian)."
  },
  {
    "id": "M5_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Công thức tính thời gian khi biết quãng đường s và vận tốc v là gì?",
    "options": [
      "t = s : v",
      "t = s × v",
      "t = v : s",
      "t = s − v"
    ],
    "correctIndex": 0,
    "hint": "Suy ra từ công thức s = v × t.",
    "explanation": "Thời gian t = s : v (quãng đường chia vận tốc)."
  },
  {
    "id": "M5_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một xe máy đi với vận tốc 40 km/h trong 3 giờ. Quãng đường xe đi được là bao nhiêu?",
    "options": [
      "120 km",
      "43 km",
      "13,3 km",
      "80 km"
    ],
    "correctIndex": 0,
    "hint": "Lấy 40 nhân 3.",
    "explanation": "s = v × t = 40 × 3 = 120 km."
  },
  {
    "id": "M5_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một người đi bộ với vận tốc 5 km/h, cần đi 15 km. Người đó cần bao nhiêu giờ?",
    "options": [
      "3 giờ",
      "75 giờ",
      "10 giờ",
      "20 giờ"
    ],
    "correctIndex": 0,
    "hint": "Lấy 15 chia 5.",
    "explanation": "t = s : v = 15 : 5 = 3 giờ."
  },
  {
    "id": "M5_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một ô tô đi với vận tốc 50 km/h trong 2 giờ 30 phút. Quãng đường ô tô đi được là bao nhiêu?",
    "options": [
      "125 km",
      "100 km",
      "150 km",
      "130 km"
    ],
    "correctIndex": 0,
    "hint": "Đổi 2 giờ 30 phút thành 2,5 giờ.",
    "explanation": "2 giờ 30 phút = 2,5 giờ. s = 50 × 2,5 = 125 km."
  },
  {
    "id": "M5_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một tàu thuỷ đi 180 km với vận tốc 24 km/h. Tàu đi hết bao nhiêu thời gian?",
    "options": [
      "7 giờ 30 phút",
      "7 giờ",
      "8 giờ",
      "6 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "180 : 24 rồi đổi phần thập phân thành phút.",
    "explanation": "t = 180 : 24 = 7,5 giờ = 7 giờ 30 phút."
  },
  {
    "id": "M5_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một người đi xe đạp với vận tốc 12 km/h, khởi hành lúc 6 giờ 30 phút và đi được 18 km. Người đó đến nơi lúc mấy giờ?",
    "options": [
      "8 giờ",
      "7 giờ 30 phút",
      "8 giờ 30 phút",
      "9 giờ"
    ],
    "correctIndex": 0,
    "hint": "Tính thời gian đi rồi cộng vào giờ khởi hành.",
    "explanation": "t = 18 : 12 = 1,5 giờ = 1 giờ 30 phút. Đến nơi lúc 6 giờ 30 phút + 1 giờ 30 phút = 8 giờ."
  },
  {
    "id": "M5_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một máy bay bay với vận tốc 800 km/h. Trong 45 phút máy bay bay được bao nhiêu km?",
    "options": [
      "600 km",
      "360 km",
      "800 km",
      "1067 km"
    ],
    "correctIndex": 0,
    "hint": "Đổi 45 phút thành 0,75 giờ.",
    "explanation": "45 phút = 0,75 giờ. s = 800 × 0,75 = 600 km."
  },
  {
    "id": "M5_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một ô tô dự định đi từ A đến B với vận tốc 50 km/h trong 3 giờ. Thực tế xe chỉ đi với vận tốc 40 km/h. Xe cần thêm bao nhiêu thời gian so với dự định?",
    "options": [
      "45 phút",
      "30 phút",
      "1 giờ",
      "15 phút"
    ],
    "correctIndex": 0,
    "hint": "Tính quãng đường AB rồi tính thời gian thực tế.",
    "explanation": "Quãng đường AB = 50 × 3 = 150 km. Thời gian thực tế = 150 : 40 = 3,75 giờ = 3 giờ 45 phút. Vậy cần thêm 45 phút."
  },
  {
    "id": "M5_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Toán chuyển động đều - Tính quãng đường và thời gian",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một người đi từ nhà đến trường dài 4,5 km. Nửa quãng đường đầu người đó đi bộ với vận tốc 4,5 km/h, nửa còn lại đi xe đạp với vận tốc 13,5 km/h. Người đó đi hết bao nhiêu thời gian?",
    "options": [
      "40 phút",
      "30 phút",
      "1 giờ",
      "45 phút"
    ],
    "correctIndex": 0,
    "hint": "Tính thời gian từng nửa quãng đường rồi cộng lại.",
    "explanation": "Mỗi nửa dài 2,25 km. Thời gian đi bộ: 2,25 : 4,5 = 0,5 giờ = 30 phút. Thời gian đi xe: 2,25 : 13,5 = 1/6 giờ = 10 phút. Tổng: 40 phút."
  },
  {
    "id": "M5_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "easy",
    "question": "Hai vật chuyển động NGƯỢC CHIỀU và gặp nhau. Tổng vận tốc của hai vật được tính thế nào?",
    "options": [
      "Cộng hai vận tốc",
      "Trừ hai vận tốc",
      "Nhân hai vận tốc",
      "Chia hai vận tốc"
    ],
    "correctIndex": 0,
    "hint": "Đi lại gặp nhau thì khoảng cách giảm nhanh hơn.",
    "explanation": "Khi hai vật đi ngược chiều để gặp nhau, khoảng cách giảm với tốc độ bằng tổng hai vận tốc."
  },
  {
    "id": "M5_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "easy",
    "question": "Hai vật chuyển động CÙNG CHIỀU và vật sau đuổi kịp vật trước. Hiệu vận tốc được tính thế nào?",
    "options": [
      "Vận tốc vật đi sau trừ vận tốc vật đi trước",
      "Cộng hai vận tốc",
      "Nhân hai vận tốc",
      "Chia hai vận tốc"
    ],
    "correctIndex": 0,
    "hint": "Muốn đuổi kịp thì vật sau phải nhanh hơn.",
    "explanation": "Khi đuổi kịp, khoảng cách giảm với tốc độ bằng hiệu hai vận tốc (vận tốc vật đi sau trừ vận tốc vật đi trước)."
  },
  {
    "id": "M5_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "easy",
    "question": "Công thức tính thời gian gặp nhau khi hai vật đi ngược chiều từ hai điểm cách nhau s là gì?",
    "options": [
      "t = s : (v₁ + v₂)",
      "t = s : (v₁ − v₂)",
      "t = s × (v₁ + v₂)",
      "t = (v₁ + v₂) : s"
    ],
    "correctIndex": 0,
    "hint": "Lấy khoảng cách chia tổng vận tốc.",
    "explanation": "Thời gian gặp nhau t = s : (v₁ + v₂), với s là khoảng cách ban đầu."
  },
  {
    "id": "M5_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "easy",
    "question": "Công thức tính thời gian đuổi kịp khi hai vật đi cùng chiều, cách nhau s là gì?",
    "options": [
      "t = s : (v₁ − v₂)",
      "t = s : (v₁ + v₂)",
      "t = s × (v₁ − v₂)",
      "t = (v₁ − v₂) : s"
    ],
    "correctIndex": 0,
    "hint": "Lấy khoảng cách chia hiệu vận tốc.",
    "explanation": "Thời gian đuổi kịp t = s : (v₁ − v₂), với v₁ là vận tốc vật đi sau (lớn hơn)."
  },
  {
    "id": "M5_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "medium",
    "question": "Hai ô tô khởi hành cùng lúc từ A và B cách nhau 180 km, đi ngược chiều nhau. Vận tốc lần lượt là 50 km/h và 40 km/h. Sau bao lâu hai xe gặp nhau?",
    "options": [
      "2 giờ",
      "1 giờ 30 phút",
      "3 giờ",
      "2 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Lấy 180 chia tổng vận tốc.",
    "explanation": "Tổng vận tốc: 50 + 40 = 90 km/h. Thời gian gặp nhau: 180 : 90 = 2 giờ."
  },
  {
    "id": "M5_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "medium",
    "question": "Hai người đi bộ khởi hành cùng lúc từ hai đầu quãng đường 12 km, đi ngược chiều với vận tốc 4 km/h và 5 km/h. Sau bao lâu họ gặp nhau?",
    "options": [
      "1 giờ 20 phút",
      "2 giờ",
      "1 giờ",
      "1 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Lấy 12 chia (4 + 5).",
    "explanation": "Tổng vận tốc: 4 + 5 = 9 km/h. Thời gian: 12 : 9 = 4/3 giờ = 1 giờ 20 phút."
  },
  {
    "id": "M5_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một xe máy đi với vận tốc 45 km/h đuổi theo một xe đạp đi trước cách 15 km với vận tốc 15 km/h (cùng chiều). Sau bao lâu xe máy đuổi kịp xe đạp?",
    "options": [
      "30 phút",
      "1 giờ",
      "20 phút",
      "45 phút"
    ],
    "correctIndex": 0,
    "hint": "Lấy 15 chia hiệu vận tốc.",
    "explanation": "Hiệu vận tốc: 45 − 15 = 30 km/h. Thời gian đuổi kịp: 15 : 30 = 0,5 giờ = 30 phút."
  },
  {
    "id": "M5_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "medium",
    "question": "Hai ô tô gặp nhau sau 3 giờ, đi ngược chiều từ hai điểm cách nhau 270 km. Nếu xe thứ nhất đi 50 km/h thì xe thứ hai đi bao nhiêu km/h?",
    "options": [
      "40 km/h",
      "45 km/h",
      "90 km/h",
      "30 km/h"
    ],
    "correctIndex": 0,
    "hint": "Tìm tổng vận tốc rồi trừ đi 50.",
    "explanation": "Tổng vận tốc = 270 : 3 = 90 km/h. Vận tốc xe thứ hai = 90 − 50 = 40 km/h."
  },
  {
    "id": "M5_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "hard",
    "question": "Hai xe khởi hành cùng lúc, đi ngược chiều từ A và B cách nhau 450 km. Xe đi từ A có vận tốc 60 km/h, xe đi từ B có vận tốc 40 km/h. Điểm gặp nhau cách A bao nhiêu km?",
    "options": [
      "270 km",
      "180 km",
      "225 km",
      "300 km"
    ],
    "correctIndex": 0,
    "hint": "Tính thời gian gặp nhau rồi tính quãng đường xe từ A đi được.",
    "explanation": "Thời gian gặp nhau: 450 : (60 + 40) = 4,5 giờ. Quãng đường xe từ A đi: 60 × 4,5 = 270 km. Vậy điểm gặp cách A 270 km."
  },
  {
    "id": "M5_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động cùng chiều và ngược chiều",
    "category": "motion",
    "difficulty": "hard",
    "question": "Lúc 6 giờ, một xe đạp đi từ A với vận tốc 12 km/h. Lúc 8 giờ, một xe máy cũng đi từ A cùng chiều với vận tốc 36 km/h. Xe máy đuổi kịp xe đạp lúc mấy giờ?",
    "options": [
      "9 giờ",
      "8 giờ 30 phút",
      "10 giờ",
      "9 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Tính khoảng cách xe đạp đã đi được trước rồi chia hiệu vận tốc.",
    "explanation": "Đến 8 giờ, xe đạp đã đi: 12 × 2 = 24 km. Hiệu vận tốc: 36 − 12 = 24 km/h. Thời gian đuổi kịp: 24 : 24 = 1 giờ. Vậy xe máy đuổi kịp lúc 8 + 1 = 9 giờ."
  },
  {
    "id": "M5_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "easy",
    "question": "Vận tốc XUÔI DÒNG của thuyền được tính thế nào?",
    "options": [
      "Vận tốc thực của thuyền + vận tốc dòng nước",
      "Vận tốc thực − vận tốc dòng nước",
      "Vận tốc thực × vận tốc dòng nước",
      "Vận tốc dòng nước − vận tốc thực"
    ],
    "correctIndex": 0,
    "hint": "Dòng nước đẩy thuyền đi nhanh hơn.",
    "explanation": "Xuôi dòng, dòng nước đẩy thuyền nên vận tốc xuôi dòng = vận tốc thực + vận tốc dòng nước."
  },
  {
    "id": "M5_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "easy",
    "question": "Vận tốc NGƯỢC DÒNG của thuyền được tính thế nào?",
    "options": [
      "Vận tốc thực của thuyền − vận tốc dòng nước",
      "Vận tốc thực + vận tốc dòng nước",
      "Vận tốc thực × vận tốc dòng nước",
      "Vận tốc dòng nước − vận tốc thực"
    ],
    "correctIndex": 0,
    "hint": "Dòng nước cản thuyền lại.",
    "explanation": "Ngược dòng, dòng nước cản thuyền nên vận tốc ngược dòng = vận tốc thực − vận tốc dòng nước."
  },
  {
    "id": "M5_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một ca nô có vận tốc thực 20 km/h, dòng nước chảy 4 km/h. Vận tốc xuôi dòng của ca nô là bao nhiêu?",
    "options": [
      "24 km/h",
      "16 km/h",
      "20 km/h",
      "80 km/h"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai vận tốc.",
    "explanation": "Vận tốc xuôi dòng = 20 + 4 = 24 km/h."
  },
  {
    "id": "M5_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "easy",
    "question": "Một ca nô có vận tốc thực 20 km/h, dòng nước chảy 4 km/h. Vận tốc ngược dòng của ca nô là bao nhiêu?",
    "options": [
      "16 km/h",
      "24 km/h",
      "20 km/h",
      "5 km/h"
    ],
    "correctIndex": 0,
    "hint": "Trừ hai vận tốc.",
    "explanation": "Vận tốc ngược dòng = 20 − 4 = 16 km/h."
  },
  {
    "id": "M5_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một thuyền xuôi dòng với vận tốc 18 km/h, dòng nước chảy 3 km/h. Vận tốc thực của thuyền là bao nhiêu?",
    "options": [
      "15 km/h",
      "21 km/h",
      "18 km/h",
      "6 km/h"
    ],
    "correctIndex": 0,
    "hint": "Vận tốc thực = vận tốc xuôi dòng − vận tốc nước.",
    "explanation": "Vận tốc thực = 18 − 3 = 15 km/h."
  },
  {
    "id": "M5_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một ca nô đi xuôi dòng 48 km hết 2 giờ. Nếu vận tốc dòng nước là 4 km/h thì vận tốc thực của ca nô là bao nhiêu?",
    "options": [
      "20 km/h",
      "24 km/h",
      "28 km/h",
      "16 km/h"
    ],
    "correctIndex": 0,
    "hint": "Tính vận tốc xuôi dòng rồi trừ vận tốc nước.",
    "explanation": "Vận tốc xuôi dòng = 48 : 2 = 24 km/h. Vận tốc thực = 24 − 4 = 20 km/h."
  },
  {
    "id": "M5_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "medium",
    "question": "Một thuyền có vận tốc thực 12 km/h, dòng nước chảy 2 km/h. Thuyền đi ngược dòng 30 km hết bao nhiêu thời gian?",
    "options": [
      "3 giờ",
      "2 giờ 30 phút",
      "2 giờ",
      "3 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Tính vận tốc ngược dòng rồi lấy 30 chia.",
    "explanation": "Vận tốc ngược dòng = 12 − 2 = 10 km/h. Thời gian = 30 : 10 = 3 giờ."
  },
  {
    "id": "M5_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "medium",
    "question": "Biết vận tốc xuôi dòng là 25 km/h và vận tốc ngược dòng là 15 km/h. Vận tốc dòng nước là bao nhiêu?",
    "options": [
      "5 km/h",
      "10 km/h",
      "20 km/h",
      "40 km/h"
    ],
    "correctIndex": 0,
    "hint": "Vận tốc nước = (xuôi dòng − ngược dòng) : 2.",
    "explanation": "Vận tốc dòng nước = (25 − 15) : 2 = 10 : 2 = 5 km/h."
  },
  {
    "id": "M5_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một ca nô có vận tốc thực 18 km/h, đi trên sông có dòng nước chảy 2 km/h. Ca nô đi xuôi dòng từ A đến B dài 40 km rồi ngược dòng trở về A. Tính tổng thời gian cả đi và về.",
    "options": [
      "4 giờ 30 phút",
      "4 giờ",
      "5 giờ",
      "3 giờ 30 phút"
    ],
    "correctIndex": 0,
    "hint": "Tính thời gian từng chiều rồi cộng lại.",
    "explanation": "Xuôi dòng: vận tốc 18 + 2 = 20 km/h, thời gian 40 : 20 = 2 giờ. Ngược dòng: vận tốc 18 − 2 = 16 km/h, thời gian 40 : 16 = 2,5 giờ = 2 giờ 30 phút. Tổng: 2 giờ + 2 giờ 30 phút = 4 giờ 30 phút."
  },
  {
    "id": "M5_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Chuyển động trên dòng nước",
    "category": "motion",
    "difficulty": "hard",
    "question": "Một thuyền đi xuôi dòng 36 km hết 2 giờ, đi ngược dòng cùng quãng đường đó hết 3 giờ. Tính vận tốc thực của thuyền và vận tốc dòng nước.",
    "options": [
      "Vận tốc thực 15 km/h, dòng nước 3 km/h",
      "Vận tốc thực 18 km/h, dòng nước 6 km/h",
      "Vận tốc thực 12 km/h, dòng nước 3 km/h",
      "Vận tốc thực 15 km/h, dòng nước 6 km/h"
    ],
    "correctIndex": 0,
    "hint": "Tính vận tốc mỗi chiều rồi lấy tổng chia 2 và hiệu chia 2.",
    "explanation": "Vận tốc xuôi dòng = 36 : 2 = 18 km/h; ngược dòng = 36 : 3 = 12 km/h. Vận tốc thực = (18 + 12) : 2 = 15 km/h; vận tốc dòng nước = (18 − 12) : 2 = 3 km/h."
  },
  {
    "id": "M5_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập số học cuối cấp",
    "category": "decimals",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 33 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Ôn tập hình học & chuyển động",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 34 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  },
  {
    "id": "M5_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 1): Giá trị của biểu thức 1/2 + 0,5 x 1 là:",
    "options": [
      "1.0",
      "1.5",
      "0.5",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 1 = 0,5 + 0.5 = 1.0."
  },
  {
    "id": "M5_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 2): Giá trị của biểu thức 1/2 + 0,5 x 2 là:",
    "options": [
      "1.5",
      "2.0",
      "1.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 2 = 0,5 + 1.0 = 1.5."
  },
  {
    "id": "M5_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 3): Giá trị của biểu thức 1/2 + 0,5 x 3 là:",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "4.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 3 = 0,5 + 1.5 = 2.0."
  },
  {
    "id": "M5_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 4): Giá trị của biểu thức 1/2 + 0,5 x 4 là:",
    "options": [
      "2.5",
      "3.0",
      "2.0",
      "5.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 4 = 0,5 + 2.0 = 2.5."
  },
  {
    "id": "M5_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 5): Giá trị của biểu thức 1/2 + 0,5 x 5 là:",
    "options": [
      "3.0",
      "3.5",
      "2.5",
      "6.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 5 = 0,5 + 2.5 = 3.0."
  },
  {
    "id": "M5_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 6): Giá trị của biểu thức 1/2 + 0,5 x 6 là:",
    "options": [
      "3.5",
      "4.0",
      "3.0",
      "7.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 6 = 0,5 + 3.0 = 3.5."
  },
  {
    "id": "M5_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 7): Giá trị của biểu thức 1/2 + 0,5 x 7 là:",
    "options": [
      "4.0",
      "4.5",
      "3.5",
      "8.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 7 = 0,5 + 3.5 = 4.0."
  },
  {
    "id": "M5_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 8): Giá trị của biểu thức 1/2 + 0,5 x 8 là:",
    "options": [
      "4.5",
      "5.0",
      "4.0",
      "9.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 8 = 0,5 + 4.0 = 4.5."
  },
  {
    "id": "M5_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 9): Giá trị của biểu thức 1/2 + 0,5 x 9 là:",
    "options": [
      "5.0",
      "5.5",
      "4.5",
      "10.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 9 = 0,5 + 4.5 = 5.0."
  },
  {
    "id": "M5_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "motion",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn tập tổng hợp Toán Lớp 5 Tuần 35 (Bài số 10): Giá trị của biểu thức 1/2 + 0,5 x 10 là:",
    "options": [
      "5.5",
      "6.0",
      "5.0",
      "11.0"
    ],
    "correctIndex": 0,
    "hint": "Đổi 1/2 = 0,5 rồi thực hiện nhân trước cộng sau.",
    "explanation": "1/2 + 0,5 x 10 = 0,5 + 5.0 = 5.5."
  }
];

export const STAGES_MATH5 = [
  {
    id: 1,
    title: "Chặng 1: Ôn Tập Phân Số & Bảng Đơn Vị Đo",
    subtitle: "Tuần 1 - Tuần 9",
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    semester: 1,
    icon: "Rocket",
    badge: "Bậc Thầy Đo Lường & Phân Số",
    color: "from-amber-400 to-orange-500",
    description: "Phân số thập phân, bảng đơn vị đo độ dài, khối lượng, diện tích, khái niệm số thập phân."
  },
  {
    id: 2,
    title: "Chặng 2: Số Thập Phân & Tỉ Số Phần Trăm",
    subtitle: "Tuần 10 - Tuần 18 (Ôn thi HK1)",
    weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    semester: 1,
    icon: "Target",
    badge: "Kỳ Thủ Số Thập Phân",
    color: "from-emerald-400 to-teal-500",
    description: "4 phép tính số thập phân, nhân chia nhẩm, tỉ số phần trăm và giải toán thực tế."
  },
  {
    id: 3,
    title: "Chặng 3: Hình Học & Đo Thể Tích Khối Hộp",
    subtitle: "Tuần 19 - Tuần 27",
    weeks: [19, 20, 21, 22, 23, 24, 25, 26, 27],
    semester: 2,
    icon: "Sparkles",
    badge: "Kiến Trúc Sư Không Gian",
    color: "from-blue-400 to-indigo-500",
    description: "Hình tam giác, hình thang, hình tròn, diện tích & thể tích hình hộp chữ nhật, lập phương."
  },
  {
    id: 4,
    title: "Chặng 4: Toán Chuyển Động & Chinh Phục Lớp 6",
    subtitle: "Tuần 28 - Tuần 35 (Ôn thi HK2)",
    weeks: [28, 29, 30, 31, 32, 33, 34, 35],
    semester: 2,
    icon: "Trophy",
    badge: "Thần Tốc Chinh Phục Lớp 6",
    color: "from-purple-400 to-pink-500",
    description: "Vận tốc, quãng đường, thời gian, chuyển động cùng chiều/ngược chiều/dòng nước, ôn tập cuối cấp."
  }
];

export const TOPIC_CATEGORIES_MATH5 = [
  { id: 'fractions', name: 'Phân Số & Hỗn Số', icon: 'Calculator', color: 'bg-amber-100 text-amber-800' },
  { id: 'measurement', name: 'Bảng Đơn Vị Đo', icon: 'Layers', color: 'bg-orange-100 text-orange-800' },
  { id: 'decimals', name: 'Số Thập Phân', icon: 'Sparkles', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'percentage', name: 'Tỉ Số Phần Trăm', icon: 'TrendingUp', color: 'bg-teal-100 text-teal-800' },
  { id: 'geometry', name: 'Hình Học & Mặt Phẳng', icon: 'Shapes', color: 'bg-blue-100 text-blue-800' },
  { id: 'volume', name: 'Thể Tích Khối Hộp', icon: 'Box', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'motion', name: 'Toán Chuyển Động Đều', icon: 'Zap', color: 'bg-purple-100 text-purple-800' }
];

export const WEEKS_METADATA_MATH5 = {
  "1": {
    "title": "Ôn tập & Khái niệm Phân số thập phân",
    "topic": "Phân số thập phân",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Phép cộng & trừ phân số nâng cao",
    "topic": "Cộng trừ phân số",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Phép nhân, chia phân số & Hỗn số",
    "topic": "Nhân chia phân số & Hỗn số",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Bảng đơn vị đo độ dài & Ứng dụng",
    "topic": "Đơn vị đo độ dài",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Bảng đơn vị đo khối lượng (tấn, tạ, yến, kg)",
    "topic": "Đơn vị đo khối lượng",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Bảng đơn vị đo diện tích & Héc-ta (ha)",
    "topic": "Đơn vị đo diện tích",
    "cat": "measurement",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Khái niệm & Hàng của số thập phân",
    "topic": "Số thập phân",
    "cat": "decimals",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "So sánh & Làm tròn số thập phân",
    "topic": "So sánh số thập phân",
    "cat": "decimals",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1",
    "topic": "Tổng hợp Chặng 1",
    "cat": "fractions",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Phép cộng & phép trừ số thập phân",
    "topic": "Cộng trừ số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "Phép nhân số thập phân (với số tự nhiên & số thập phân)",
    "topic": "Nhân số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Nhân nhẩm số thập phân với 10, 100, 0.1, 0.01",
    "topic": "Nhân nhẩm số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Phép chia số thập phân cho số tự nhiên",
    "topic": "Chia số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Chia số tự nhiên cho số tự nhiên thương là số thập phân",
    "topic": "Chia số tự nhiên ra số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Phép chia một số cho số thập phân",
    "topic": "Chia cho số thập phân",
    "cat": "decimals",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Khái niệm & Tìm tỉ số phần trăm của hai số",
    "topic": "Tỉ số phần trăm",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Giải toán về tỉ số phần trăm (Dạng 2 & Dạng 3)",
    "topic": "Giải toán tỉ số phần trăm",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Toán 5)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "percentage",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Hình tam giác & Diện tích hình tam giác",
    "topic": "Hình tam giác",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Hình thang & Diện tích hình thang",
    "topic": "Hình thang",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Hình tròn, Chu vi & Diện tích hình tròn",
    "topic": "Hình tròn",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Biểu đồ hình quạt tròn & Bảng số liệu thống kê",
    "topic": "Biểu đồ quạt tròn",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Diện tích xung quanh & Toàn phần Hình hộp chữ nhật",
    "topic": "Hình hộp chữ nhật",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Diện tích xung quanh & Toàn phần Hình lập phương",
    "topic": "Hình lập phương",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Thể tích một hình & Đơn vị đo thể tích (cm3, dm3, m3)",
    "topic": "Đơn vị đo thể tích",
    "cat": "volume",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Thể tích hình hộp chữ nhật & Hình lập phương",
    "topic": "Tính thể tích khối hộp",
    "cat": "volume",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Ôn tập Chặng 3 & Kiểm tra giữa Học kỳ 2",
    "topic": "Tổng hợp Hình học & Thể tích",
    "cat": "geometry",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Bảng đơn vị đo thời gian & Phép tính số đo thời gian",
    "topic": "Số đo thời gian",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Toán Chuyển động đều - Tính Vận tốc (v = s : t)",
    "topic": "Vận tốc",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Toán Chuyển động đều - Tính Quãng đường (s) & Thời gian (t)",
    "topic": "Quãng đường và Thời gian",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Chuyển động cùng chiều (Đuổi kịp) & Ngược chiều (Gặp nhau)",
    "topic": "Chuyển động hai vật",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Chuyển động trên dòng nước (Vận tốc xuôi/ngược dòng)",
    "topic": "Chuyển động dòng nước",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Ôn tập tổng hợp Số học, Phân số, Số thập phân & Đo lường",
    "topic": "Ôn tập số học cuối cấp",
    "cat": "decimals",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Hình học, Thể tích & Toán chuyển động",
    "topic": "Ôn tập hình học & chuyển động",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Đánh giá Năng lực Cuối năm & Chinh phục Lớp 6",
    "topic": "Đề thi Chuyển cấp",
    "cat": "motion",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekMath5 = (weekNum) => {
  return QUESTION_BANK_MATH5.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsMath5 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_MATH5];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
