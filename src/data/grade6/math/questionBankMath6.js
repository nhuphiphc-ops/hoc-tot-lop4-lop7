// TOÁN LỚP 6 - NGÂN HÀNG CÂU HỎI & LỘ TRÌNH 35 TUẦN GDPT MỚI 2026
import { STAGE_1_MATH6_QUESTIONS } from './stages/stage1_math6.js';
import { STAGE_2_MATH6_QUESTIONS } from './stages/stage2_math6.js';
import { STAGE_3_MATH6_QUESTIONS } from './stages/stage3_math6.js';
import { STAGE_4_MATH6_QUESTIONS } from './stages/stage4_math6.js';

export const QUESTION_BANK_MATH6 = [
  {
    "id": "M6_01_01",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Tập hợp các số tự nhiên N* là tập hợp gồm:",
    "options": [
      "Các số tự nhiên khác 0 (1, 2, 3, ...)",
      "Tất cả các số tự nhiên kể cả 0",
      "Các số nguyên âm",
      "Các phân số"
    ],
    "correctIndex": 0,
    "hint": "N* là tập hợp số tự nhiên khác 0.",
    "explanation": "Tập hợp ℕ* = {1; 2; 3; ...} gồm các số tự nhiên khác 0."
  },
  {
    "id": "M6_01_02",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Công thức nhân hai lũy thừa cùng cơ số: a^m . a^n =",
    "options": [
      "a^(m + n)",
      "a^(m - n)",
      "a^(m . n)",
      "(a . a)^(m + n)"
    ],
    "correctIndex": 0,
    "hint": "Giữ nguyên cơ số, cộng các số mũ.",
    "explanation": "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: a^m . a^n = a^(m+n)."
  },
  {
    "id": "M6_01_03",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^5 = (Câu 3)",
    "options": [
      "32",
      "64",
      "34",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^5 = 32."
  },
  {
    "id": "M6_01_04",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^6 = (Câu 4)",
    "options": [
      "64",
      "128",
      "66",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^6 = 64."
  },
  {
    "id": "M6_01_05",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 96. Giá trị của x là:",
    "options": [
      "5",
      "6",
      "4",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^5 => 2^x . 3 = 3 . 2^5 => x = 5."
  },
  {
    "id": "M6_01_06",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 192. Giá trị của x là:",
    "options": [
      "6",
      "7",
      "5",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^6 => 2^x . 3 = 3 . 2^6 => x = 6."
  },
  {
    "id": "M6_01_07",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 384. Giá trị của x là:",
    "options": [
      "7",
      "8",
      "6",
      "14"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^7 => 2^x . 3 = 3 . 2^7 => x = 7."
  },
  {
    "id": "M6_01_08",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 768. Giá trị của x là:",
    "options": [
      "8",
      "9",
      "7",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^8 => 2^x . 3 = 3 . 2^8 => x = 8."
  },
  {
    "id": "M6_01_09",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 1536. Giá trị của x là:",
    "options": [
      "9",
      "10",
      "8",
      "18"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^9 => 2^x . 3 = 3 . 2^9 => x = 9."
  },
  {
    "id": "M6_01_10",
    "week": 1,
    "semester": 1,
    "stage": 1,
    "topic": "Tập hợp N",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 3072. Giá trị của x là:",
    "options": [
      "10",
      "11",
      "9",
      "20"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^10 => 2^x . 3 = 3 . 2^10 => x = 10."
  },
  {
    "id": "M6_02_01",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Tập hợp các số tự nhiên N* là tập hợp gồm:",
    "options": [
      "Các số tự nhiên khác 0 (1, 2, 3, ...)",
      "Tất cả các số tự nhiên kể cả 0",
      "Các số nguyên âm",
      "Các phân số"
    ],
    "correctIndex": 0,
    "hint": "N* là tập hợp số tự nhiên khác 0.",
    "explanation": "Tập hợp ℕ* = {1; 2; 3; ...} gồm các số tự nhiên khác 0."
  },
  {
    "id": "M6_02_02",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Công thức nhân hai lũy thừa cùng cơ số: a^m . a^n =",
    "options": [
      "a^(m + n)",
      "a^(m - n)",
      "a^(m . n)",
      "(a . a)^(m + n)"
    ],
    "correctIndex": 0,
    "hint": "Giữ nguyên cơ số, cộng các số mũ.",
    "explanation": "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: a^m . a^n = a^(m+n)."
  },
  {
    "id": "M6_02_03",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^5 = (Câu 3)",
    "options": [
      "32",
      "64",
      "34",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^5 = 32."
  },
  {
    "id": "M6_02_04",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^6 = (Câu 4)",
    "options": [
      "64",
      "128",
      "66",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^6 = 64."
  },
  {
    "id": "M6_02_05",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 96. Giá trị của x là:",
    "options": [
      "5",
      "6",
      "4",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^5 => 2^x . 3 = 3 . 2^5 => x = 5."
  },
  {
    "id": "M6_02_06",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 192. Giá trị của x là:",
    "options": [
      "6",
      "7",
      "5",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^6 => 2^x . 3 = 3 . 2^6 => x = 6."
  },
  {
    "id": "M6_02_07",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 384. Giá trị của x là:",
    "options": [
      "7",
      "8",
      "6",
      "14"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^7 => 2^x . 3 = 3 . 2^7 => x = 7."
  },
  {
    "id": "M6_02_08",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 768. Giá trị của x là:",
    "options": [
      "8",
      "9",
      "7",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^8 => 2^x . 3 = 3 . 2^8 => x = 8."
  },
  {
    "id": "M6_02_09",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 1536. Giá trị của x là:",
    "options": [
      "9",
      "10",
      "8",
      "18"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^9 => 2^x . 3 = 3 . 2^9 => x = 9."
  },
  {
    "id": "M6_02_10",
    "week": 2,
    "semester": 1,
    "stage": 1,
    "topic": "Phép tính số tự nhiên",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 3072. Giá trị của x là:",
    "options": [
      "10",
      "11",
      "9",
      "20"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^10 => 2^x . 3 = 3 . 2^10 => x = 10."
  },
  {
    "id": "M6_03_01",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Tập hợp các số tự nhiên N* là tập hợp gồm:",
    "options": [
      "Các số tự nhiên khác 0 (1, 2, 3, ...)",
      "Tất cả các số tự nhiên kể cả 0",
      "Các số nguyên âm",
      "Các phân số"
    ],
    "correctIndex": 0,
    "hint": "N* là tập hợp số tự nhiên khác 0.",
    "explanation": "Tập hợp ℕ* = {1; 2; 3; ...} gồm các số tự nhiên khác 0."
  },
  {
    "id": "M6_03_02",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Công thức nhân hai lũy thừa cùng cơ số: a^m . a^n =",
    "options": [
      "a^(m + n)",
      "a^(m - n)",
      "a^(m . n)",
      "(a . a)^(m + n)"
    ],
    "correctIndex": 0,
    "hint": "Giữ nguyên cơ số, cộng các số mũ.",
    "explanation": "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: a^m . a^n = a^(m+n)."
  },
  {
    "id": "M6_03_03",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^5 = (Câu 3)",
    "options": [
      "32",
      "64",
      "34",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^5 = 32."
  },
  {
    "id": "M6_03_04",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^6 = (Câu 4)",
    "options": [
      "64",
      "128",
      "66",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^6 = 64."
  },
  {
    "id": "M6_03_05",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 96. Giá trị của x là:",
    "options": [
      "5",
      "6",
      "4",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^5 => 2^x . 3 = 3 . 2^5 => x = 5."
  },
  {
    "id": "M6_03_06",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 192. Giá trị của x là:",
    "options": [
      "6",
      "7",
      "5",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^6 => 2^x . 3 = 3 . 2^6 => x = 6."
  },
  {
    "id": "M6_03_07",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 384. Giá trị của x là:",
    "options": [
      "7",
      "8",
      "6",
      "14"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^7 => 2^x . 3 = 3 . 2^7 => x = 7."
  },
  {
    "id": "M6_03_08",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 768. Giá trị của x là:",
    "options": [
      "8",
      "9",
      "7",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^8 => 2^x . 3 = 3 . 2^8 => x = 8."
  },
  {
    "id": "M6_03_09",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 1536. Giá trị của x là:",
    "options": [
      "9",
      "10",
      "8",
      "18"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^9 => 2^x . 3 = 3 . 2^9 => x = 9."
  },
  {
    "id": "M6_03_10",
    "week": 3,
    "semester": 1,
    "stage": 1,
    "topic": "Lũy thừa",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 3072. Giá trị của x là:",
    "options": [
      "10",
      "11",
      "9",
      "20"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^10 => 2^x . 3 = 3 . 2^10 => x = 10."
  },
  {
    "id": "M6_04_01",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Tập hợp các số tự nhiên N* là tập hợp gồm:",
    "options": [
      "Các số tự nhiên khác 0 (1, 2, 3, ...)",
      "Tất cả các số tự nhiên kể cả 0",
      "Các số nguyên âm",
      "Các phân số"
    ],
    "correctIndex": 0,
    "hint": "N* là tập hợp số tự nhiên khác 0.",
    "explanation": "Tập hợp ℕ* = {1; 2; 3; ...} gồm các số tự nhiên khác 0."
  },
  {
    "id": "M6_04_02",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "Công thức nhân hai lũy thừa cùng cơ số: a^m . a^n =",
    "options": [
      "a^(m + n)",
      "a^(m - n)",
      "a^(m . n)",
      "(a . a)^(m + n)"
    ],
    "correctIndex": 0,
    "hint": "Giữ nguyên cơ số, cộng các số mũ.",
    "explanation": "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: a^m . a^n = a^(m+n)."
  },
  {
    "id": "M6_04_03",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^5 = (Câu 3)",
    "options": [
      "32",
      "64",
      "34",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^5 = 32."
  },
  {
    "id": "M6_04_04",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "Tính giá trị của 2^6 = (Câu 4)",
    "options": [
      "64",
      "128",
      "66",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Nhân liên tiếp các thừa số 2.",
    "explanation": "2^6 = 64."
  },
  {
    "id": "M6_04_05",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 96. Giá trị của x là:",
    "options": [
      "5",
      "6",
      "4",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^5 => 2^x . 3 = 3 . 2^5 => x = 5."
  },
  {
    "id": "M6_04_06",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 192. Giá trị của x là:",
    "options": [
      "6",
      "7",
      "5",
      "12"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^6 => 2^x . 3 = 3 . 2^6 => x = 6."
  },
  {
    "id": "M6_04_07",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 384. Giá trị của x là:",
    "options": [
      "7",
      "8",
      "6",
      "14"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^7 => 2^x . 3 = 3 . 2^7 => x = 7."
  },
  {
    "id": "M6_04_08",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 768. Giá trị của x là:",
    "options": [
      "8",
      "9",
      "7",
      "16"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^8 => 2^x . 3 = 3 . 2^8 => x = 8."
  },
  {
    "id": "M6_04_09",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 1536. Giá trị của x là:",
    "options": [
      "9",
      "10",
      "8",
      "18"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^9 => 2^x . 3 = 3 . 2^9 => x = 9."
  },
  {
    "id": "M6_04_10",
    "week": 4,
    "semester": 1,
    "stage": 1,
    "topic": "Thứ tự phép tính",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc N biết: 2^x + 2^(x+1) = 3072. Giá trị của x là:",
    "options": [
      "10",
      "11",
      "9",
      "20"
    ],
    "correctIndex": 0,
    "hint": "Đặt 2^x làm nhân tử chung: 2^x . (1 + 2) = 2^x . 3.",
    "explanation": "2^x . (1 + 2) = 3 . 2^10 => 2^x . 3 = 3 . 2^10 => x = 10."
  },
  {
    "id": "M6_05_01",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Khi nào ta nói số tự nhiên a chia hết cho số tự nhiên b (b ≠ 0)?",
    "options": [
      "Khi có số tự nhiên q sao cho a = b · q",
      "Khi a lớn hơn b",
      "Khi a và b cùng chẵn",
      "Khi a chia b được số thập phân"
    ],
    "correctIndex": 0,
    "hint": "Phép chia phải hết, không có dư.",
    "explanation": "a chia hết cho b khi tồn tại số tự nhiên q sao cho a = b · q, tức phép chia a : b có số dư bằng 0."
  },
  {
    "id": "M6_05_02",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Trong các số sau, số nào chia hết cho 7?",
    "options": [
      "56",
      "58",
      "60",
      "64"
    ],
    "correctIndex": 0,
    "hint": "Thử chia từng số cho 7.",
    "explanation": "56 : 7 = 8 nên 56 chia hết cho 7; 58, 60, 64 chia cho 7 đều có dư."
  },
  {
    "id": "M6_05_03",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số 0 chia hết cho mọi số tự nhiên khác 0. Phát biểu này đúng hay sai?",
    "options": [
      "Đúng, vì 0 = b · 0 với mọi b khác 0",
      "Sai, vì không chia được cho 0",
      "Sai, vì 0 không phải số tự nhiên",
      "Chỉ đúng khi b là số chẵn"
    ],
    "correctIndex": 0,
    "hint": "Viết 0 dưới dạng b nhân với một số.",
    "explanation": "Với mọi b ≠ 0 ta có 0 = b · 0, nên 0 chia hết cho mọi số tự nhiên khác 0."
  },
  {
    "id": "M6_05_04",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Nếu a chia hết cho b thì b được gọi là gì của a?",
    "options": [
      "Ước của a",
      "Bội của a",
      "Số nguyên tố",
      "Hợp số"
    ],
    "correctIndex": 0,
    "hint": "a là bội, còn b là gì?",
    "explanation": "Nếu a chia hết cho b thì b là ước của a và a là bội của b."
  },
  {
    "id": "M6_05_05",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Tính chất chia hết của một tổng: nếu a chia hết cho m và b chia hết cho m thì:",
    "options": [
      "(a + b) chia hết cho m",
      "(a + b) không chia hết cho m",
      "(a + b) chia hết cho 2m",
      "Không kết luận được"
    ],
    "correctIndex": 0,
    "hint": "Đặt a = m·k, b = m·l rồi cộng lại.",
    "explanation": "Nếu a = m·k và b = m·l thì a + b = m·(k + l) nên (a + b) chia hết cho m."
  },
  {
    "id": "M6_05_06",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Cho a chia hết cho 5 và b KHÔNG chia hết cho 5. Kết luận nào đúng về a + b?",
    "options": [
      "(a + b) không chia hết cho 5",
      "(a + b) chia hết cho 5",
      "(a + b) chia hết cho 10",
      "Không kết luận được"
    ],
    "correctIndex": 0,
    "hint": "Số dư của tổng bằng số dư của b.",
    "explanation": "Vì a chia hết cho 5 nên số dư của (a + b) khi chia 5 bằng số dư của b, mà b không chia hết cho 5 nên (a + b) không chia hết cho 5."
  },
  {
    "id": "M6_05_07",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Tổng 24 + 36 + 48 có chia hết cho 12 không? Vì sao?",
    "options": [
      "Có, vì mỗi số hạng đều chia hết cho 12",
      "Không, vì tổng quá lớn",
      "Có, vì tổng là số chẵn",
      "Không, vì 48 không chia hết cho 12"
    ],
    "correctIndex": 0,
    "hint": "Kiểm tra từng số hạng.",
    "explanation": "24 = 12·2, 36 = 12·3, 48 = 12·4 nên cả ba số hạng đều chia hết cho 12; theo tính chất chia hết của một tổng, tổng cũng chia hết cho 12 (tổng bằng 108 = 12·9)."
  },
  {
    "id": "M6_05_08",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Tìm x thuộc tập hợp {12; 15; 18; 21} sao cho x chia hết cho 3 và x KHÔNG chia hết cho 2.",
    "options": [
      "x = 15 và x = 21",
      "x = 12 và x = 18",
      "Chỉ x = 15",
      "Chỉ x = 21"
    ],
    "correctIndex": 0,
    "hint": "Chia hết cho 3 nhưng phải là số lẻ.",
    "explanation": "Cả 4 số đều chia hết cho 3; trong đó 15 và 21 là số lẻ nên không chia hết cho 2. Vậy x = 15 hoặc x = 21."
  },
  {
    "id": "M6_05_09",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Cho tổng A = 12 + 24 + 36 + n. Với giá trị nào của n thì A chia hết cho 12?",
    "options": [
      "n phải chia hết cho 12",
      "n phải là số chẵn",
      "n phải chia hết cho 6",
      "Với mọi n"
    ],
    "correctIndex": 0,
    "hint": "Ba số hạng đầu đã chia hết cho 12.",
    "explanation": "12, 24, 36 đều chia hết cho 12 nên tổng của chúng chia hết cho 12; do đó A chia hết cho 12 khi và chỉ khi n chia hết cho 12."
  },
  {
    "id": "M6_05_10",
    "week": 5,
    "semester": 1,
    "stage": 1,
    "topic": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Chứng tỏ tổng của ba số tự nhiên liên tiếp luôn chia hết cho 3.",
    "options": [
      "Vì tổng bằng n + (n+1) + (n+2) = 3n + 3 = 3(n+1), luôn chia hết cho 3",
      "Vì ba số liên tiếp luôn có một số chia hết cho 3",
      "Vì tổng luôn là số chẵn",
      "Phát biểu này sai"
    ],
    "correctIndex": 0,
    "hint": "Gọi số nhỏ nhất là n rồi cộng lại.",
    "explanation": "Gọi ba số là n, n+1, n+2. Tổng = 3n + 3 = 3(n + 1) nên luôn chia hết cho 3 với mọi số tự nhiên n."
  },
  {
    "id": "M6_06_01",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số nào sau đây chia hết cho 2?",
    "options": [
      "134",
      "135",
      "137",
      "139"
    ],
    "correctIndex": 0,
    "hint": "Xét chữ số tận cùng.",
    "explanation": "Số chia hết cho 2 có chữ số tận cùng là 0, 2, 4, 6, 8. Số 134 có tận cùng là 4 nên chia hết cho 2."
  },
  {
    "id": "M6_06_02",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số chia hết cho 5 có chữ số tận cùng là gì?",
    "options": [
      "0 hoặc 5",
      "Chỉ 5",
      "Chỉ 0",
      "Số chẵn bất kì"
    ],
    "correctIndex": 0,
    "hint": "Nhớ lại dấu hiệu chia hết cho 5.",
    "explanation": "Số chia hết cho 5 có chữ số tận cùng là 0 hoặc 5."
  },
  {
    "id": "M6_06_03",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số 342 có chia hết cho 9 không?",
    "options": [
      "Có, vì 3 + 4 + 2 = 9 chia hết cho 9",
      "Không, vì 342 là số chẵn",
      "Có, vì 342 chia hết cho 2",
      "Không, vì chữ số tận cùng là 2"
    ],
    "correctIndex": 0,
    "hint": "Cộng các chữ số lại.",
    "explanation": "Tổng các chữ số: 3 + 4 + 2 = 9, chia hết cho 9 nên 342 chia hết cho 9 (342 : 9 = 38)."
  },
  {
    "id": "M6_06_04",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số 471 có chia hết cho 3 không?",
    "options": [
      "Có, vì 4 + 7 + 1 = 12 chia hết cho 3",
      "Không, vì 471 là số lẻ",
      "Không, vì tận cùng là 1",
      "Có, vì 471 chia hết cho 9"
    ],
    "correctIndex": 0,
    "hint": "Cộng các chữ số rồi xét chia hết cho 3.",
    "explanation": "Tổng các chữ số: 4 + 7 + 1 = 12, chia hết cho 3 nên 471 chia hết cho 3 (471 : 3 = 157). Lưu ý 12 không chia hết cho 9 nên 471 không chia hết cho 9."
  },
  {
    "id": "M6_06_05",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Số nào sau đây chia hết cho CẢ 2 VÀ 5?",
    "options": [
      "270",
      "275",
      "272",
      "278"
    ],
    "correctIndex": 0,
    "hint": "Chia hết cho cả 2 và 5 thì tận cùng là gì?",
    "explanation": "Số chia hết cho cả 2 và 5 phải có chữ số tận cùng là 0. Chỉ 270 thoả mãn."
  },
  {
    "id": "M6_06_06",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Thay dấu * bằng chữ số nào để số 12* chia hết cho 3?",
    "options": [
      "* thuộc {0; 3; 6; 9}",
      "* thuộc {1; 4; 7}",
      "* thuộc {2; 5; 8}",
      "Chỉ * = 0"
    ],
    "correctIndex": 0,
    "hint": "1 + 2 + * phải chia hết cho 3.",
    "explanation": "Tổng chữ số là 1 + 2 + * = 3 + *, chia hết cho 3 khi * chia hết cho 3, tức * thuộc {0; 3; 6; 9}."
  },
  {
    "id": "M6_06_07",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Số nào sau đây chia hết cho 3 nhưng KHÔNG chia hết cho 9?",
    "options": [
      "123",
      "126",
      "135",
      "144"
    ],
    "correctIndex": 0,
    "hint": "Tổng chữ số chia hết cho 3 mà không chia hết cho 9.",
    "explanation": "1 + 2 + 3 = 6 chia hết cho 3 nhưng không chia hết cho 9 nên 123 chia hết cho 3 mà không chia hết cho 9."
  },
  {
    "id": "M6_06_08",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Vì sao mọi số chia hết cho 9 thì cũng chia hết cho 3?",
    "options": [
      "Vì tổng chữ số chia hết cho 9 thì cũng chia hết cho 3 (9 là bội của 3)",
      "Vì 9 lớn hơn 3",
      "Vì số chia hết cho 9 luôn là số chẵn",
      "Phát biểu này sai"
    ],
    "correctIndex": 0,
    "hint": "Quan hệ giữa 9 và 3 là gì?",
    "explanation": "Vì 9 là bội của 3, nên tổng chữ số chia hết cho 9 thì đương nhiên chia hết cho 3; do đó số chia hết cho 9 luôn chia hết cho 3 (điều ngược lại không đúng)."
  },
  {
    "id": "M6_06_09",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Thay các dấu * bằng chữ số để số có dạng 2*5* chia hết cho cả 2, 5 và 9. Số đó là bao nhiêu?",
    "options": [
      "2250",
      "2205",
      "2055",
      "2955"
    ],
    "correctIndex": 0,
    "hint": "Chia hết cho cả 2 và 5 nên chữ số tận cùng là 0; sau đó xét tổng các chữ số.",
    "explanation": "Chia hết cho cả 2 và 5 nên chữ số tận cùng là 0, số có dạng 2a50. Tổng các chữ số là 2 + a + 5 + 0 = 7 + a, chia hết cho 9 khi a = 2. Vậy số đó là 2250 (2250 : 9 = 250)."
  },
  {
    "id": "M6_06_10",
    "week": 6,
    "semester": 1,
    "stage": 1,
    "topic": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Có bao nhiêu số tự nhiên có hai chữ số chia hết cho cả 2 và 3?",
    "options": [
      "15 số",
      "10 số",
      "20 số",
      "30 số"
    ],
    "correctIndex": 0,
    "hint": "Chia hết cho cả 2 và 3 nghĩa là chia hết cho 6.",
    "explanation": "Chia hết cho cả 2 và 3 nghĩa là chia hết cho 6. Các số hai chữ số chia hết cho 6 là 12; 18; ...; 96, gồm (96 - 12) : 6 + 1 = 15 số."
  },
  {
    "id": "M6_07_01",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số nguyên tố là số tự nhiên như thế nào?",
    "options": [
      "Lớn hơn 1 và chỉ có hai ước là 1 và chính nó",
      "Lớn hơn 1 và có nhiều hơn hai ước",
      "Là mọi số lẻ",
      "Là mọi số chẵn"
    ],
    "correctIndex": 0,
    "hint": "Đếm số ước của nó.",
    "explanation": "Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có đúng hai ước là 1 và chính nó."
  },
  {
    "id": "M6_07_02",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số nguyên tố chẵn DUY NHẤT là số nào?",
    "options": [
      "2",
      "0",
      "4",
      "Không có số nào"
    ],
    "correctIndex": 0,
    "hint": "Mọi số chẵn khác đều chia hết cho 2.",
    "explanation": "2 là số nguyên tố chẵn duy nhất; mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên có nhiều hơn hai ước."
  },
  {
    "id": "M6_07_03",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số nào sau đây là hợp số?",
    "options": [
      "15",
      "13",
      "17",
      "19"
    ],
    "correctIndex": 0,
    "hint": "Hợp số có nhiều hơn hai ước.",
    "explanation": "15 = 3 · 5 nên có các ước 1; 3; 5; 15 - nhiều hơn hai ước nên là hợp số; 13, 17, 19 đều là số nguyên tố."
  },
  {
    "id": "M6_07_04",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "Số 1 là số nguyên tố hay hợp số?",
    "options": [
      "Không phải số nguyên tố cũng không phải hợp số",
      "Là số nguyên tố",
      "Là hợp số",
      "Là số nguyên tố chẵn"
    ],
    "correctIndex": 0,
    "hint": "Số 1 có mấy ước?",
    "explanation": "Số 1 chỉ có một ước là chính nó nên không phải số nguyên tố (cần đúng hai ước) và cũng không phải hợp số."
  },
  {
    "id": "M6_07_05",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Phân tích số 60 ra thừa số nguyên tố ta được:",
    "options": [
      "2² · 3 · 5",
      "2 · 3 · 5",
      "2³ · 3 · 5",
      "2² · 3² · 5"
    ],
    "correctIndex": 0,
    "hint": "Chia liên tiếp cho các số nguyên tố nhỏ nhất.",
    "explanation": "60 = 2 · 30 = 2 · 2 · 15 = 2 · 2 · 3 · 5 = 2² · 3 · 5."
  },
  {
    "id": "M6_07_06",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Phân tích số 84 ra thừa số nguyên tố ta được:",
    "options": [
      "2² · 3 · 7",
      "2 · 3 · 7",
      "2³ · 3 · 7",
      "2² · 3² · 7"
    ],
    "correctIndex": 0,
    "hint": "Chia liên tiếp cho 2, rồi cho 3, rồi cho 7.",
    "explanation": "84 = 2 · 42 = 2 · 2 · 21 = 2 · 2 · 3 · 7 = 2² · 3 · 7."
  },
  {
    "id": "M6_07_07",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Số 91 là số nguyên tố hay hợp số?",
    "options": [
      "Hợp số, vì 91 = 7 · 13",
      "Số nguyên tố",
      "Hợp số, vì 91 chia hết cho 3",
      "Không xác định được"
    ],
    "correctIndex": 0,
    "hint": "Thử chia cho 7.",
    "explanation": "91 = 7 · 13 nên 91 có nhiều hơn hai ước, là hợp số. (Nhiều người nhầm 91 là số nguyên tố vì nó không chia hết cho 2, 3, 5.)"
  },
  {
    "id": "M6_07_08",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Để kiểm tra một số a có phải số nguyên tố hay không, ta chỉ cần thử chia a cho các số nguyên tố nào?",
    "options": [
      "Các số nguyên tố p thoả mãn p² ≤ a",
      "Tất cả các số nhỏ hơn a",
      "Chỉ số 2 và 3",
      "Chỉ các số lẻ nhỏ hơn a"
    ],
    "correctIndex": 0,
    "hint": "Không cần thử quá căn bậc hai của a.",
    "explanation": "Chỉ cần thử chia a cho các số nguyên tố p mà p² ≤ a (tức p ≤ căn bậc hai của a); nếu không có phép chia nào hết thì a là số nguyên tố."
  },
  {
    "id": "M6_07_09",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Số 2 · 3 · 5 · 7 + 1 = 211 là số nguyên tố hay hợp số? Giải thích.",
    "options": [
      "Số nguyên tố, vì 211 không chia hết cho bất kì số nguyên tố nào nhỏ hơn hoặc bằng 13",
      "Hợp số, vì 211 chia hết cho 2",
      "Hợp số, vì 211 chia hết cho 3",
      "Không xác định được"
    ],
    "correctIndex": 0,
    "hint": "Thử chia 211 cho 2, 3, 5, 7, 11, 13.",
    "explanation": "211 không chia hết cho 2, 3, 5, 7, 11, 13; mà 17² = 289 > 211 nên không cần thử tiếp. Vậy 211 là số nguyên tố."
  },
  {
    "id": "M6_07_10",
    "week": 7,
    "semester": 1,
    "stage": 1,
    "topic": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Số 2ⁿ (với n là số tự nhiên, n ≥ 2) có bao nhiêu ước số?",
    "options": [
      "n + 1 ước",
      "n ước",
      "2n ước",
      "Chỉ 2 ước"
    ],
    "correctIndex": 0,
    "hint": "Các ước là 1, 2, 2², ..., 2ⁿ.",
    "explanation": "Các ước của 2ⁿ là 1; 2; 2²; ...; 2ⁿ, tức n + 1 ước. Ví dụ 2³ = 8 có 4 ước: 1; 2; 4; 8."
  },
  {
    "id": "M6_08_01",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "ƯCLN của hai số là gì?",
    "options": [
      "Số lớn nhất trong các ước chung của hai số đó",
      "Số nhỏ nhất trong các ước chung",
      "Tích của hai số",
      "Tổng của hai số"
    ],
    "correctIndex": 0,
    "hint": "Chú ý chữ \"lớn nhất\".",
    "explanation": "ƯCLN (ước chung lớn nhất) của hai số là số lớn nhất trong tập các ước chung của hai số đó."
  },
  {
    "id": "M6_08_02",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "ƯCLN(18, 27) bằng bao nhiêu?",
    "options": [
      "9",
      "3",
      "6",
      "54"
    ],
    "correctIndex": 0,
    "hint": "Tìm ước chung lớn nhất của 18 và 27.",
    "explanation": "Ước của 18: 1, 2, 3, 6, 9, 18. Ước của 27: 1, 3, 9, 27. Ước chung lớn nhất là 9."
  },
  {
    "id": "M6_08_03",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "BCNN của hai số là gì?",
    "options": [
      "Số nhỏ nhất khác 0 trong các bội chung của hai số đó",
      "Số lớn nhất trong các bội chung",
      "Tổng của hai số",
      "Hiệu của hai số"
    ],
    "correctIndex": 0,
    "hint": "Chú ý chữ \"nhỏ nhất\".",
    "explanation": "BCNN (bội chung nhỏ nhất) là số nhỏ nhất khác 0 trong tập các bội chung của hai số đó."
  },
  {
    "id": "M6_08_04",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "easy",
    "question": "BCNN(4, 6) bằng bao nhiêu?",
    "options": [
      "12",
      "24",
      "2",
      "10"
    ],
    "correctIndex": 0,
    "hint": "Liệt kê bội của 4 và của 6.",
    "explanation": "Bội của 4: 4, 8, 12, 16... Bội của 6: 6, 12, 18... Bội chung nhỏ nhất là 12."
  },
  {
    "id": "M6_08_05",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Tìm ƯCLN(24, 36) bằng cách phân tích ra thừa số nguyên tố.",
    "options": [
      "12",
      "6",
      "18",
      "72"
    ],
    "correctIndex": 0,
    "hint": "Lấy các thừa số chung với số mũ nhỏ nhất.",
    "explanation": "24 = 2³ · 3; 36 = 2² · 3². Thừa số chung với số mũ nhỏ nhất: 2² · 3 = 12. Vậy ƯCLN(24, 36) = 12."
  },
  {
    "id": "M6_08_06",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Tìm BCNN(24, 36) bằng cách phân tích ra thừa số nguyên tố.",
    "options": [
      "72",
      "12",
      "144",
      "216"
    ],
    "correctIndex": 0,
    "hint": "Lấy mọi thừa số với số mũ lớn nhất.",
    "explanation": "24 = 2³ · 3; 36 = 2² · 3². Lấy mọi thừa số với số mũ lớn nhất: 2³ · 3² = 8 · 9 = 72."
  },
  {
    "id": "M6_08_07",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Hai số 8 và 15 được gọi là hai số nguyên tố cùng nhau vì sao?",
    "options": [
      "Vì ƯCLN(8, 15) = 1",
      "Vì cả hai đều là số nguyên tố",
      "Vì cả hai đều là hợp số",
      "Vì tổng của chúng là số nguyên tố"
    ],
    "correctIndex": 0,
    "hint": "Xét ước chung lớn nhất của hai số.",
    "explanation": "ƯCLN(8, 15) = 1 nên 8 và 15 là hai số nguyên tố cùng nhau, dù bản thân mỗi số đều là hợp số."
  },
  {
    "id": "M6_08_08",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "medium",
    "question": "Với hai số a và b, ta luôn có ƯCLN(a, b) · BCNN(a, b) bằng bao nhiêu?",
    "options": [
      "a · b",
      "a + b",
      "a - b",
      "a : b"
    ],
    "correctIndex": 0,
    "hint": "Kiểm tra với a = 4, b = 6.",
    "explanation": "Luôn có ƯCLN(a, b) · BCNN(a, b) = a · b. Kiểm tra: ƯCLN(4,6) · BCNN(4,6) = 2 · 12 = 24 = 4 · 6."
  },
  {
    "id": "M6_08_09",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Cô giáo có 24 quyển vở và 36 chiếc bút, muốn chia thành các phần thưởng giống nhau sao cho không còn dư. Số phần thưởng nhiều nhất có thể chia là bao nhiêu?",
    "options": [
      "12 phần",
      "6 phần",
      "72 phần",
      "4 phần"
    ],
    "correctIndex": 0,
    "hint": "Đây là bài toán tìm ƯCLN.",
    "explanation": "Số phần thưởng nhiều nhất là ƯCLN(24, 36) = 12; mỗi phần có 24 : 12 = 2 quyển vở và 36 : 12 = 3 chiếc bút."
  },
  {
    "id": "M6_08_10",
    "week": 8,
    "semester": 1,
    "stage": 1,
    "topic": "Ước chung, ƯCLN & Bội chung, BCNN",
    "category": "divisibility",
    "difficulty": "hard",
    "question": "Hai xe buýt cùng khởi hành từ bến lúc 6 giờ. Xe thứ nhất cứ 15 phút lại chạy một chuyến, xe thứ hai cứ 20 phút một chuyến. Hỏi lúc mấy giờ hai xe lại cùng khởi hành ở bến?",
    "options": [
      "7 giờ",
      "6 giờ 35 phút",
      "6 giờ 30 phút",
      "8 giờ"
    ],
    "correctIndex": 0,
    "hint": "Đây là bài toán tìm BCNN.",
    "explanation": "Thời gian hai xe cùng khởi hành lại là BCNN(15, 20) = 60 phút = 1 giờ. Vậy lúc 6 giờ + 1 giờ = 7 giờ hai xe lại cùng khởi hành."
  },
  {
    "id": "M6_09_01",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_09_02",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_09_03",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_09_04",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_09_05",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_09_06",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_09_07",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_09_08",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_09_09",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_09_10",
    "week": 9,
    "semester": 1,
    "stage": 1,
    "topic": "Tổng hợp Chặng 1",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 9 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_10_01",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_10_02",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_10_03",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_10_04",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_10_05",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_10_06",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_10_07",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_10_08",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_10_09",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_10_10",
    "week": 10,
    "semester": 1,
    "stage": 2,
    "topic": "Tập hợp số nguyên Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_11_01",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_11_02",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_11_03",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_11_04",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_11_05",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_11_06",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_11_07",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_11_08",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_11_09",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_11_10",
    "week": 11,
    "semester": 1,
    "stage": 2,
    "topic": "So sánh số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_12_01",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_12_02",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_12_03",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_12_04",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_12_05",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_12_06",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_12_07",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_12_08",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_12_09",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_12_10",
    "week": 12,
    "semester": 1,
    "stage": 2,
    "topic": "Cộng số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_13_01",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_13_02",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_13_03",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_13_04",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_13_05",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_13_06",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_13_07",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_13_08",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_13_09",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_13_10",
    "week": 13,
    "semester": 1,
    "stage": 2,
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_14_01",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_14_02",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_14_03",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_14_04",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_14_05",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_14_06",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_14_07",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_14_08",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_14_09",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_14_10",
    "week": 14,
    "semester": 1,
    "stage": 2,
    "topic": "Nhân số nguyên",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_15_01",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "easy",
    "question": "Số đối của số nguyên -15 là:",
    "options": [
      "15",
      "-15",
      "0",
      "1/15"
    ],
    "correctIndex": 0,
    "hint": "Số đối của -a là a.",
    "explanation": "Số đối của -15 là 15 (hai số có điểm biểu diễn cách đều gốc 0 trên trục số)."
  },
  {
    "id": "M6_15_02",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "easy",
    "question": "Tính: (-8) + (6) =",
    "options": [
      "-2",
      "2",
      "14",
      "-14"
    ],
    "correctIndex": 0,
    "hint": "Cộng hai số nguyên khác dấu: lấy phần số lớn trừ phần số bé, mang dấu của số lớn hơn.",
    "explanation": "(-8) + (6) = -2."
  },
  {
    "id": "M6_15_03",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-12) . (9) = (Câu 3)",
    "options": [
      "-108",
      "108",
      "-98",
      "-118"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-12) . (9) = -108."
  },
  {
    "id": "M6_15_04",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "medium",
    "question": "Tính: (-16) . (12) = (Câu 4)",
    "options": [
      "-192",
      "192",
      "-182",
      "-202"
    ],
    "correctIndex": 0,
    "hint": "Tích của hai số nguyên trái dấu là một số nguyên âm.",
    "explanation": "(-16) . (12) = -192."
  },
  {
    "id": "M6_15_05",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-20) = 15. Giá trị của x là:",
    "options": [
      "-2.5",
      "2.5",
      "-0.5",
      "-4.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 15 + (-20) = -5 => x = -2.5."
  },
  {
    "id": "M6_15_06",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-24) = 18. Giá trị của x là:",
    "options": [
      "-3.0",
      "3.0",
      "-1.0",
      "-5.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 18 + (-24) = -6 => x = -3.0."
  },
  {
    "id": "M6_15_07",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-28) = 21. Giá trị của x là:",
    "options": [
      "-3.5",
      "3.5",
      "-1.5",
      "-5.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 21 + (-28) = -7 => x = -3.5."
  },
  {
    "id": "M6_15_08",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-32) = 24. Giá trị của x là:",
    "options": [
      "-4.0",
      "4.0",
      "-2.0",
      "-6.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 24 + (-32) = -8 => x = -4.0."
  },
  {
    "id": "M6_15_09",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-36) = 27. Giá trị của x là:",
    "options": [
      "-4.5",
      "4.5",
      "-2.5",
      "-6.5"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 27 + (-36) = -9 => x = -4.5."
  },
  {
    "id": "M6_15_10",
    "week": 15,
    "semester": 1,
    "stage": 2,
    "topic": "Ước và bội trong Z",
    "category": "integers",
    "difficulty": "hard",
    "question": "[Nâng cao] Tìm x thuộc Z biết: 2x - (-40) = 30. Giá trị của x là:",
    "options": [
      "-5.0",
      "5.0",
      "-3.0",
      "-7.0"
    ],
    "correctIndex": 0,
    "hint": "2x = b + a => x = (b + a) : 2.",
    "explanation": "2x = 30 + (-40) = -10 => x = -5.0."
  },
  {
    "id": "M6_16_01",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_16_02",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_16_03",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_16_04",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_16_05",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_16_06",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_16_07",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_16_08",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_16_09",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_16_10",
    "week": 16,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 1",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_17_01",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_17_02",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_17_03",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_17_04",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_17_05",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_17_06",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_17_07",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_17_08",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_17_09",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_17_10",
    "week": 17,
    "semester": 1,
    "stage": 2,
    "topic": "Hình học trực quan 2",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_18_01",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_18_02",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_18_03",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_18_04",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_18_05",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_18_06",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_18_07",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_18_08",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_18_09",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_18_10",
    "week": 18,
    "semester": 1,
    "stage": 2,
    "topic": "Tổng hợp Học kỳ 1",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 18 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_19_01",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_19_02",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_19_03",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_19_04",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_19_05",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_19_06",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_19_07",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_19_08",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_19_09",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_19_10",
    "week": 19,
    "semester": 2,
    "stage": 3,
    "topic": "Khái niệm phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 19 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_20_01",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_20_02",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_20_03",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_20_04",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_20_05",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_20_06",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_20_07",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_20_08",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_20_09",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_20_10",
    "week": 20,
    "semester": 2,
    "stage": 3,
    "topic": "Tính chất phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 20 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_21_01",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_21_02",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_21_03",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_21_04",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_21_05",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_21_06",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_21_07",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_21_08",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_21_09",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_21_10",
    "week": 21,
    "semester": 2,
    "stage": 3,
    "topic": "So sánh phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 21 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_22_01",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_22_02",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_22_03",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_22_04",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_22_05",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_22_06",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_22_07",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_22_08",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_22_09",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_22_10",
    "week": 22,
    "semester": 2,
    "stage": 3,
    "topic": "Cộng trừ phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 22 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_23_01",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_23_02",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_23_03",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_23_04",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_23_05",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_23_06",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_23_07",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_23_08",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_23_09",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_23_10",
    "week": 23,
    "semester": 2,
    "stage": 3,
    "topic": "Nhân chia phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 23 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_24_01",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_24_02",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_24_03",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_24_04",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_24_05",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_24_06",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_24_07",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_24_08",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_24_09",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_24_10",
    "week": 24,
    "semester": 2,
    "stage": 3,
    "topic": "Bài toán phân số",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 24 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_25_01",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_25_02",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_25_03",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_25_04",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_25_05",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_25_06",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_25_07",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_25_08",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_25_09",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_25_10",
    "week": 25,
    "semester": 2,
    "stage": 3,
    "topic": "Số thập phân",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 25 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_26_01",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_26_02",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_26_03",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_26_04",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_26_05",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_26_06",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_26_07",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_26_08",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_26_09",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_26_10",
    "week": 26,
    "semester": 2,
    "stage": 3,
    "topic": "Tỉ số phần trăm",
    "category": "fractions6",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 26 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_27_01",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_27_02",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_27_03",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_27_04",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_27_05",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_27_06",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_27_07",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_27_08",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_27_09",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_27_10",
    "week": 27,
    "semester": 2,
    "stage": 3,
    "topic": "Tính đối xứng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_28_01",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_28_02",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_28_03",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_28_04",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_28_05",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_28_06",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_28_07",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_28_08",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_28_09",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_28_10",
    "week": 28,
    "semester": 2,
    "stage": 4,
    "topic": "Điểm và đường thẳng",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_29_01",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_29_02",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_29_03",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_29_04",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_29_05",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_29_06",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_29_07",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_29_08",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_29_09",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_29_10",
    "week": 29,
    "semester": 2,
    "stage": 4,
    "topic": "Đường thẳng và Tia",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_30_01",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_30_02",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_30_03",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_30_04",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_30_05",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_30_06",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_30_07",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_30_08",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_30_09",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_30_10",
    "week": 30,
    "semester": 2,
    "stage": 4,
    "topic": "Đoạn thẳng & Trung điểm",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_31_01",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Tam giác đều có đặc điểm nào sau đây?",
    "options": [
      "3 cạnh bằng nhau và 3 góc bằng nhau (đều bằng 60 độ)",
      "Chỉ có 2 cạnh bằng nhau",
      "Có 1 góc vuông",
      "3 cạnh độ dài khác nhau"
    ],
    "correctIndex": 0,
    "hint": "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60 độ.",
    "explanation": "Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°."
  },
  {
    "id": "M6_31_02",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "easy",
    "question": "Hình lục giác đều gồm bao nhiêu tam giác đều ghép lại?",
    "options": [
      "6 tam giác đều",
      "4 tam giác đều",
      "8 tam giác đều",
      "5 tam giác đều"
    ],
    "correctIndex": 0,
    "hint": "Lục giác đều gồm 6 tam giác đều bằng nhau chung đỉnh.",
    "explanation": "Hình lục giác đều được tạo thành từ 6 tam giác đều bằng nhau ghép lại."
  },
  {
    "id": "M6_31_03",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 12 cm và chiều rộng 6 cm. Chu vi và diện tích là: (Câu 3)",
    "options": [
      "P = 36 cm, S = 72 cm2",
      "P = 36 cm, S = 144 cm2",
      "P = 18 cm, S = 72 cm2",
      "P = 72 cm, S = 36 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (12 + 6) x 2 = 36 cm. Diện tích S = 12 x 6 = 72 cm2."
  },
  {
    "id": "M6_31_04",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "medium",
    "question": "Một hình chữ nhật có chiều dài 16 cm và chiều rộng 8 cm. Chu vi và diện tích là: (Câu 4)",
    "options": [
      "P = 48 cm, S = 128 cm2",
      "P = 48 cm, S = 256 cm2",
      "P = 24 cm, S = 128 cm2",
      "P = 128 cm, S = 48 cm2"
    ],
    "correctIndex": 0,
    "hint": "P = (a + b) x 2, S = a x b.",
    "explanation": "Chu vi P = (16 + 8) x 2 = 48 cm. Diện tích S = 16 x 8 = 128 cm2."
  },
  {
    "id": "M6_31_05",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 30 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "15.0 cm",
      "30.0 cm",
      "14.0 cm",
      "17.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 30 : 2 = 15.0 cm."
  },
  {
    "id": "M6_31_06",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 36 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "18.0 cm",
      "36.0 cm",
      "17.0 cm",
      "20.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 36 : 2 = 18.0 cm."
  },
  {
    "id": "M6_31_07",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 42 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "21.0 cm",
      "42.0 cm",
      "20.0 cm",
      "23.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 42 : 2 = 21.0 cm."
  },
  {
    "id": "M6_31_08",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 48 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "24.0 cm",
      "48.0 cm",
      "23.0 cm",
      "26.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 48 : 2 = 24.0 cm."
  },
  {
    "id": "M6_31_09",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 54 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "27.0 cm",
      "54.0 cm",
      "26.0 cm",
      "29.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 54 : 2 = 27.0 cm."
  },
  {
    "id": "M6_31_10",
    "week": 31,
    "semester": 2,
    "stage": 4,
    "topic": "Góc và số đo góc",
    "category": "geometry6",
    "difficulty": "hard",
    "question": "[Nâng cao] Cho đoạn thẳng AB dài 60 cm. Gọi M là trung điểm của AB. Độ dài đoạn thẳng AM là:",
    "options": [
      "30.0 cm",
      "60.0 cm",
      "29.0 cm",
      "32.0 cm"
    ],
    "correctIndex": 0,
    "hint": "Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: AM = AB : 2.",
    "explanation": "Vì M là trung điểm của AB nên AM = MB = AB : 2 = 60 : 2 = 30.0 cm."
  },
  {
    "id": "M6_32_01",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Có mấy cách thu thập dữ liệu thường dùng?",
    "options": [
      "Quan sát, làm thí nghiệm, lập phiếu hỏi hoặc thu thập từ nguồn có sẵn",
      "Chỉ có cách quan sát",
      "Chỉ có cách lập phiếu hỏi",
      "Không có cách nào"
    ],
    "correctIndex": 0,
    "hint": "Kể các cách lấy số liệu.",
    "explanation": "Dữ liệu có thể thu thập bằng cách quan sát, làm thí nghiệm, lập phiếu hỏi hoặc lấy từ những nguồn có sẵn như sách, báo, Internet."
  },
  {
    "id": "M6_32_02",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Bảng thống kê dùng để làm gì?",
    "options": [
      "Tổ chức, sắp xếp dữ liệu đã thu thập cho gọn gàng, dễ đọc",
      "Vẽ hình học",
      "Tính chu vi",
      "Giải phương trình"
    ],
    "correctIndex": 0,
    "hint": "Sắp xếp số liệu thành hàng và cột.",
    "explanation": "Bảng thống kê giúp tổ chức, sắp xếp dữ liệu đã thu thập thành các hàng, cột cho gọn gàng, dễ đọc và dễ so sánh."
  },
  {
    "id": "M6_32_03",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Trong biểu đồ tranh, mỗi hình vẽ (biểu tượng) thể hiện điều gì?",
    "options": [
      "Một số lượng nhất định đã được quy ước",
      "Luôn là một đơn vị",
      "Tên của đối tượng",
      "Không thể hiện gì"
    ],
    "correctIndex": 0,
    "hint": "Chú ý phần chú thích của biểu đồ.",
    "explanation": "Trong biểu đồ tranh, mỗi biểu tượng thể hiện một số lượng nhất định theo quy ước ghi ở phần chú thích, ví dụ một hình quyển sách ứng với 10 quyển."
  },
  {
    "id": "M6_32_04",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Biểu đồ cột kép dùng để làm gì?",
    "options": [
      "So sánh hai (hoặc nhiều) bộ dữ liệu cùng loại trên cùng một biểu đồ",
      "Chỉ biểu diễn một bộ dữ liệu",
      "Vẽ đường tròn",
      "Tính diện tích"
    ],
    "correctIndex": 0,
    "hint": "\"Kép\" nghĩa là có hai cột cạnh nhau.",
    "explanation": "Biểu đồ cột kép dùng để so sánh hai hay nhiều bộ dữ liệu cùng loại trên cùng một biểu đồ, ví dụ so sánh điểm của lớp 6A và 6B."
  },
  {
    "id": "M6_32_05",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Trong biểu đồ tranh, một hình quyển sách ứng với 5 quyển. Nếu hàng \"Lớp 6A\" có 7 hình quyển sách thì lớp 6A quyên góp bao nhiêu quyển?",
    "options": [
      "35 quyển",
      "12 quyển",
      "7 quyển",
      "5 quyển"
    ],
    "correctIndex": 0,
    "hint": "Nhân số hình với quy ước.",
    "explanation": "Số quyển = 7 × 5 = 35 quyển."
  },
  {
    "id": "M6_32_06",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Một bảng thống kê cho biết số học sinh thích các môn: Toán 12, Văn 8, Anh 10. Tổng số học sinh được hỏi là bao nhiêu?",
    "options": [
      "30 học sinh",
      "12 học sinh",
      "20 học sinh",
      "10 học sinh"
    ],
    "correctIndex": 0,
    "hint": "Cộng tất cả các giá trị.",
    "explanation": "Tổng = 12 + 8 + 10 = 30 học sinh."
  },
  {
    "id": "M6_32_07",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Với bảng thống kê: Toán 12, Văn 8, Anh 10 (tổng 30), môn nào được nhiều học sinh thích nhất và chiếm bao nhiêu phần trăm?",
    "options": [
      "Môn Toán, chiếm 40%",
      "Môn Văn, chiếm 40%",
      "Môn Anh, chiếm 40%",
      "Môn Toán, chiếm 12%"
    ],
    "correctIndex": 0,
    "hint": "Lấy 12 chia 30 rồi nhân 100.",
    "explanation": "Môn Toán được nhiều nhất với 12 học sinh; tỉ lệ = 12 : 30 × 100% = 40%."
  },
  {
    "id": "M6_32_08",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Khi đọc biểu đồ cột, ta cần chú ý điều gì trước tiên?",
    "options": [
      "Đọc tên biểu đồ, tên các trục và đơn vị đo",
      "Chỉ cần xem cột nào cao nhất",
      "Chỉ cần xem màu của cột",
      "Không cần chú ý gì"
    ],
    "correctIndex": 0,
    "hint": "Không có đơn vị thì số liệu vô nghĩa.",
    "explanation": "Cần đọc tên biểu đồ, tên các trục và đơn vị đo trước, vì nếu không rõ đơn vị thì việc so sánh số liệu sẽ sai lệch."
  },
  {
    "id": "M6_32_09",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "hard",
    "question": "Biểu đồ cột kép cho thấy số học sinh giỏi của lớp 6A là 12 và lớp 6B là 8 ở học kì 1; sang học kì 2 lần lượt là 15 và 14. Lớp nào tiến bộ nhiều hơn?",
    "options": [
      "Lớp 6B, vì tăng 6 học sinh trong khi lớp 6A chỉ tăng 3",
      "Lớp 6A, vì có nhiều học sinh giỏi hơn",
      "Hai lớp tiến bộ như nhau",
      "Không thể so sánh được"
    ],
    "correctIndex": 0,
    "hint": "So sánh mức TĂNG, không so sánh tổng số.",
    "explanation": "Lớp 6A tăng 15 − 12 = 3 học sinh; lớp 6B tăng 14 − 8 = 6 học sinh. Vậy lớp 6B tiến bộ nhiều hơn dù tổng số học sinh giỏi vẫn ít hơn."
  },
  {
    "id": "M6_32_10",
    "week": 32,
    "semester": 2,
    "stage": 4,
    "topic": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, biểu đồ cột kép",
    "category": "statistics6",
    "difficulty": "hard",
    "question": "Vì sao khi vẽ biểu đồ cột, trục số lượng nên bắt đầu từ 0?",
    "options": [
      "Vì nếu không bắt đầu từ 0, độ cao các cột sẽ phóng đại chênh lệch và gây hiểu sai số liệu",
      "Vì quy định bắt buộc phải như vậy",
      "Vì như thế biểu đồ đẹp hơn",
      "Vì không có lí do gì"
    ],
    "correctIndex": 0,
    "hint": "Thử tưởng tượng trục bắt đầu từ 10 thay vì 0.",
    "explanation": "Nếu trục số lượng không bắt đầu từ 0, tỉ lệ độ cao giữa các cột sẽ không còn đúng với tỉ lệ số liệu, làm chênh lệch bị phóng đại và người đọc hiểu sai dữ liệu."
  },
  {
    "id": "M6_33_01",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Khi tung một đồng xu cân đối, có bao nhiêu kết quả có thể xảy ra?",
    "options": [
      "Hai kết quả: mặt sấp và mặt ngửa",
      "Một kết quả",
      "Ba kết quả",
      "Sáu kết quả"
    ],
    "correctIndex": 0,
    "hint": "Đồng xu có mấy mặt?",
    "explanation": "Tung một đồng xu có hai kết quả có thể xảy ra: mặt sấp (S) và mặt ngửa (N)."
  },
  {
    "id": "M6_33_02",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Khi gieo một con xúc xắc 6 mặt, có bao nhiêu kết quả có thể xảy ra?",
    "options": [
      "Sáu kết quả",
      "Hai kết quả",
      "Ba kết quả",
      "Mười hai kết quả"
    ],
    "correctIndex": 0,
    "hint": "Xúc xắc có mấy mặt?",
    "explanation": "Gieo một con xúc xắc 6 mặt có 6 kết quả có thể xảy ra: 1, 2, 3, 4, 5, 6 chấm."
  },
  {
    "id": "M6_33_03",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Xác suất thực nghiệm của một sự kiện được tính thế nào?",
    "options": [
      "Số lần sự kiện xảy ra chia cho tổng số lần thực hiện",
      "Số lần sự kiện xảy ra nhân tổng số lần",
      "Tổng số lần chia số lần xảy ra",
      "Số lần xảy ra cộng tổng số lần"
    ],
    "correctIndex": 0,
    "hint": "Lấy phần chia cho tổng.",
    "explanation": "Xác suất thực nghiệm = (số lần sự kiện xảy ra) : (tổng số lần thực hiện)."
  },
  {
    "id": "M6_33_04",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "easy",
    "question": "Tung một đồng xu 20 lần, có 12 lần xuất hiện mặt ngửa. Xác suất thực nghiệm của sự kiện \"xuất hiện mặt ngửa\" là bao nhiêu?",
    "options": [
      "0,6",
      "0,4",
      "12",
      "20"
    ],
    "correctIndex": 0,
    "hint": "Lấy 12 chia 20.",
    "explanation": "Xác suất thực nghiệm = 12 : 20 = 0,6 (tức 60%)."
  },
  {
    "id": "M6_33_05",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Gieo một con xúc xắc 30 lần, mặt 6 chấm xuất hiện 6 lần. Xác suất thực nghiệm của sự kiện \"xuất hiện mặt 6 chấm\" là bao nhiêu?",
    "options": [
      "0,2",
      "0,6",
      "6",
      "0,3"
    ],
    "correctIndex": 0,
    "hint": "Lấy 6 chia 30.",
    "explanation": "Xác suất thực nghiệm = 6 : 30 = 0,2 (tức 20%)."
  },
  {
    "id": "M6_33_06",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Một hộp có 5 viên bi xanh và 3 viên bi đỏ. Lấy ngẫu nhiên 1 viên. Có bao nhiêu kết quả có thể xảy ra về màu bi?",
    "options": [
      "Hai kết quả: bi xanh hoặc bi đỏ",
      "Tám kết quả",
      "Năm kết quả",
      "Ba kết quả"
    ],
    "correctIndex": 0,
    "hint": "Xét theo màu, không xét từng viên.",
    "explanation": "Xét theo màu, có hai kết quả có thể xảy ra: lấy được bi xanh hoặc lấy được bi đỏ."
  },
  {
    "id": "M6_33_07",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Sự kiện nào sau đây là sự kiện CHẮC CHẮN xảy ra khi gieo một con xúc xắc 6 mặt?",
    "options": [
      "Số chấm xuất hiện nhỏ hơn 7",
      "Số chấm xuất hiện bằng 7",
      "Số chấm xuất hiện lớn hơn 6",
      "Số chấm xuất hiện bằng 0"
    ],
    "correctIndex": 0,
    "hint": "Xúc xắc chỉ có từ 1 đến 6 chấm.",
    "explanation": "Vì xúc xắc chỉ có các mặt 1 đến 6 chấm, sự kiện \"số chấm nhỏ hơn 7\" luôn xảy ra nên là sự kiện chắc chắn."
  },
  {
    "id": "M6_33_08",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "medium",
    "question": "Sự kiện nào sau đây KHÔNG THỂ xảy ra khi gieo một con xúc xắc 6 mặt?",
    "options": [
      "Số chấm xuất hiện bằng 8",
      "Số chấm xuất hiện là số lẻ",
      "Số chấm xuất hiện lớn hơn 3",
      "Số chấm xuất hiện bằng 6"
    ],
    "correctIndex": 0,
    "hint": "Xúc xắc lớn nhất là mấy chấm?",
    "explanation": "Xúc xắc chỉ có tối đa 6 chấm nên sự kiện \"số chấm bằng 8\" không thể xảy ra."
  },
  {
    "id": "M6_33_09",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "hard",
    "question": "Bạn Nam tung đồng xu 100 lần được 48 lần mặt ngửa; bạn Mai tung 10 lần được 7 lần mặt ngửa. Kết quả của ai gần với xác suất lí thuyết (0,5) hơn và vì sao?",
    "options": [
      "Nam, vì số lần thực hiện càng lớn thì xác suất thực nghiệm càng gần xác suất lí thuyết",
      "Mai, vì Mai có nhiều lần ngửa hơn theo tỉ lệ",
      "Hai bạn như nhau",
      "Không so sánh được"
    ],
    "correctIndex": 0,
    "hint": "Số lần thử ảnh hưởng thế nào tới kết quả?",
    "explanation": "Nam: 48 : 100 = 0,48 (gần 0,5). Mai: 7 : 10 = 0,7 (xa 0,5). Số lần thực hiện càng lớn thì xác suất thực nghiệm càng gần với xác suất lí thuyết."
  },
  {
    "id": "M6_33_10",
    "week": 33,
    "semester": 2,
    "stage": 4,
    "topic": "Kết quả có thể, sự kiện & Xác suất thực nghiệm",
    "category": "statistics6",
    "difficulty": "hard",
    "question": "Trong 200 lần gieo một con xúc xắc, mặt 1 chấm xuất hiện 30 lần, mặt 2 chấm 35 lần, mặt 3 chấm 33 lần, mặt 4 chấm 34 lần, mặt 5 chấm 32 lần. Mặt 6 chấm xuất hiện bao nhiêu lần và xác suất thực nghiệm là bao nhiêu?",
    "options": [
      "36 lần, xác suất 0,18",
      "30 lần, xác suất 0,15",
      "40 lần, xác suất 0,2",
      "35 lần, xác suất 0,175"
    ],
    "correctIndex": 0,
    "hint": "Lấy 200 trừ tổng các mặt đã biết.",
    "explanation": "Số lần mặt 6 chấm = 200 − (30 + 35 + 33 + 34 + 32) = 200 − 164 = 36 lần. Xác suất thực nghiệm = 36 : 200 = 0,18."
  },
  {
    "id": "M6_34_01",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_34_02",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_34_03",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_34_04",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_34_05",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_34_06",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_34_07",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_34_08",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_34_09",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_34_10",
    "week": 34,
    "semester": 2,
    "stage": 4,
    "topic": "Tổng hợp cuối năm",
    "category": "natural_numbers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 34 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  },
  {
    "id": "M6_35_01",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 1): Tính giá trị của biểu thức (-1/2) + 1/2 là:",
    "options": [
      "0.0",
      "-0.0",
      "1.0",
      "-1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (1/2) = (1 - 1) / 2 = 0.0."
  },
  {
    "id": "M6_35_02",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "easy",
    "question": "[EASY] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 2): Tính giá trị của biểu thức (-1/2) + 2/2 là:",
    "options": [
      "0.5",
      "-0.5",
      "1.5",
      "-0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (2/2) = (2 - 1) / 2 = 0.5."
  },
  {
    "id": "M6_35_03",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 3): Tính giá trị của biểu thức (-1/2) + 3/2 là:",
    "options": [
      "1.0",
      "-1.0",
      "2.0",
      "0.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (3/2) = (3 - 1) / 2 = 1.0."
  },
  {
    "id": "M6_35_04",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "medium",
    "question": "[MEDIUM] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 4): Tính giá trị của biểu thức (-1/2) + 4/2 là:",
    "options": [
      "1.5",
      "-1.5",
      "2.5",
      "0.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (4/2) = (4 - 1) / 2 = 1.5."
  },
  {
    "id": "M6_35_05",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 5): Tính giá trị của biểu thức (-1/2) + 5/2 là:",
    "options": [
      "2.0",
      "-2.0",
      "3.0",
      "1.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (5/2) = (5 - 1) / 2 = 2.0."
  },
  {
    "id": "M6_35_06",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 6): Tính giá trị của biểu thức (-1/2) + 6/2 là:",
    "options": [
      "2.5",
      "-2.5",
      "3.5",
      "1.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (6/2) = (6 - 1) / 2 = 2.5."
  },
  {
    "id": "M6_35_07",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 7): Tính giá trị của biểu thức (-1/2) + 7/2 là:",
    "options": [
      "3.0",
      "-3.0",
      "4.0",
      "2.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (7/2) = (7 - 1) / 2 = 3.0."
  },
  {
    "id": "M6_35_08",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 8): Tính giá trị của biểu thức (-1/2) + 8/2 là:",
    "options": [
      "3.5",
      "-3.5",
      "4.5",
      "2.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (8/2) = (8 - 1) / 2 = 3.5."
  },
  {
    "id": "M6_35_09",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 9): Tính giá trị của biểu thức (-1/2) + 9/2 là:",
    "options": [
      "4.0",
      "-4.0",
      "5.0",
      "3.0"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (9/2) = (9 - 1) / 2 = 4.0."
  },
  {
    "id": "M6_35_10",
    "week": 35,
    "semester": 2,
    "stage": 4,
    "topic": "Đề thi Chuyển cấp",
    "category": "integers",
    "difficulty": "hard",
    "question": "[HARD] Câu hỏi ôn luyện Toán Lớp 6 Tuần 35 (Bài số 10): Tính giá trị của biểu thức (-1/2) + 10/2 là:",
    "options": [
      "4.5",
      "-4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 0,
    "hint": "Cùng mẫu số 2, ta lấy tử số cộng lại: (-1 + q_idx) / 2.",
    "explanation": "(-1/2) + (10/2) = (10 - 1) / 2 = 4.5."
  }
];

export const STAGES_MATH6 = [
  {
    id: 1,
    title: "Chặng 1: Số Tự Nhiên & Tính Chia Hết",
    subtitle: "Tuần 1 - Tuần 9",
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    semester: 1,
    icon: "Rocket",
    badge: "Bậc Thầy Số Tự Nhiên",
    color: "from-blue-500 to-indigo-600",
    description: "Tập hợp N, lũy thừa, thứ tự phép tính, dấu hiệu chia hết, số nguyên tố, ƯCLN & BCNN."
  },
  {
    id: 2,
    title: "Chặng 2: Số Nguyên Z & Hình Học Trực Quan",
    subtitle: "Tuần 10 - Tuần 18 (Ôn thi HK1)",
    weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    semester: 1,
    icon: "Target",
    badge: "Chinh Phục Số Nguyên Z",
    color: "from-indigo-500 to-purple-600",
    description: "Tập hợp Z, cộng trừ nhân chia số nguyên, quy tắc dấu ngoặc, hình tam giác đều, hình vuông, lục giác đều."
  },
  {
    id: 3,
    title: "Chặng 3: Phân Số, Số Thập Phân & Tính Đối Xứng",
    subtitle: "Tuần 19 - Tuần 27",
    weeks: [19, 20, 21, 22, 23, 24, 25, 26, 27],
    semester: 2,
    icon: "Sparkles",
    badge: "Kỳ Thủ Phân Số & Hình Phẳng",
    color: "from-teal-500 to-emerald-600",
    description: "Phân số âm, phép tính phân số, số thập phân, tỉ số phần trăm, trục đối xứng và tâm đối xứng."
  },
  {
    id: 4,
    title: "Chặng 4: Điểm, Đoạn Thẳng, Góc & Xác Suất",
    subtitle: "Tuần 28 - Tuần 35 (Ôn thi HK2)",
    weeks: [28, 29, 30, 31, 32, 33, 34, 35],
    semester: 2,
    icon: "Trophy",
    badge: "Thần Đồng Toán Lớp 6",
    color: "from-orange-500 to-amber-600",
    description: "Điểm, đường thẳng, tia, góc, bảng thống kê dữ liệu, xác suất thực nghiệm, ôn thi cuối năm."
  }
];

export const TOPIC_CATEGORIES_MATH6 = [
  { id: 'natural_numbers', name: 'Số Tự Nhiên & Lũy Thừa', icon: 'Calculator', color: 'bg-blue-100 text-blue-800' },
  { id: 'divisibility', name: 'Tính Chia Hết & Số Nguyên Tố', icon: 'Sparkles', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'integers', name: 'Tập Hợp Số Nguyên Z', icon: 'Layers', color: 'bg-purple-100 text-purple-800' },
  { id: 'fractions6', name: 'Phân Số & Số Thập Phân', icon: 'TrendingUp', color: 'bg-teal-100 text-teal-800' },
  { id: 'geometry6', name: 'Hình Học Trực Quan & Điểm, Đoạn', icon: 'Shapes', color: 'bg-amber-100 text-amber-800' },
  { id: 'statistics6', name: 'Thống Kê & Xác Suất Thực Nghiệm', icon: 'BarChart3', color: 'bg-emerald-100 text-emerald-800' }
];

export const WEEKS_METADATA_MATH6 = {
  "1": {
    "title": "Tập hợp các số tự nhiên N & Phần tử của tập hợp",
    "topic": "Tập hợp N",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "2": {
    "title": "Phép tính cộng, trừ, nhân, chia trong tập N",
    "topic": "Phép tính số tự nhiên",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "3": {
    "title": "Lũy thừa với số mũ tự nhiên & Nhân chia lũy thừa",
    "topic": "Lũy thừa",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "4": {
    "title": "Thứ tự thực hiện các phép tính trong biểu thức",
    "topic": "Thứ tự phép tính",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "5": {
    "title": "Quan hệ chia hết & Tính chất chia hết của một tổng",
    "topic": "Tính chất chia hết",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "6": {
    "title": "Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
    "topic": "Dấu hiệu chia hết",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "7": {
    "title": "Số nguyên tố, Hợp số & Phân tích ra thừa số nguyên tố",
    "topic": "Số nguyên tố",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "8": {
    "title": "Ước chung, ƯCLN & Bội chung, BCNN",
    "topic": "ƯCLN và BCNN",
    "cat": "divisibility",
    "stage": 1,
    "sem": 1
  },
  "9": {
    "title": "Ôn tập Chặng 1 & Kiểm tra giữa Học kỳ 1 (Toán 6)",
    "topic": "Tổng hợp Chặng 1",
    "cat": "natural_numbers",
    "stage": 1,
    "sem": 1
  },
  "10": {
    "title": "Tập hợp số nguyên Z & Biểu diễn trên trục số, Số đối",
    "topic": "Tập hợp số nguyên Z",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "11": {
    "title": "So sánh các số nguyên & Thứ tự trong tập hợp Z",
    "topic": "So sánh số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "12": {
    "title": "Phép cộng hai số nguyên (cùng dấu và khác dấu)",
    "topic": "Cộng số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "13": {
    "title": "Phép trừ số nguyên & Quy tắc dấu ngoặc",
    "topic": "Trừ số nguyên & Dấu ngoặc",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "14": {
    "title": "Phép nhân số nguyên & Tính chất phép nhân",
    "topic": "Nhân số nguyên",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "15": {
    "title": "Phép chia hết, Ước và Bội của một số nguyên",
    "topic": "Ước và bội trong Z",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "16": {
    "title": "Hình học trực quan: Tam giác đều, Hình vuông, Lục giác đều",
    "topic": "Hình học trực quan 1",
    "cat": "geometry6",
    "stage": 2,
    "sem": 1
  },
  "17": {
    "title": "Hình học trực quan: Hình chữ nhật, Hình thoi, Hình bình hành, Hình thang cân",
    "topic": "Hình học trực quan 2",
    "cat": "geometry6",
    "stage": 2,
    "sem": 1
  },
  "18": {
    "title": "Ôn tập Chặng 2 & Đề thi Học kỳ 1 (Toán 6)",
    "topic": "Tổng hợp Học kỳ 1",
    "cat": "integers",
    "stage": 2,
    "sem": 1
  },
  "19": {
    "title": "Phân số với tử và mẫu số nguyên & Phân số bằng nhau",
    "topic": "Khái niệm phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "20": {
    "title": "Tính chất cơ bản của phân số & Rút gọn phân số tối giản",
    "topic": "Tính chất phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "21": {
    "title": "Quy đồng mẫu nhiều phân số & So sánh phân số",
    "topic": "So sánh phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "22": {
    "title": "Phép cộng và phép trừ phân số (Số đối của phân số)",
    "topic": "Cộng trừ phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "23": {
    "title": "Phép nhân và phép chia phân số (Số nghịch đảo)",
    "topic": "Nhân chia phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "24": {
    "title": "Hỗn số & Hai bài toán thực tế về phân số",
    "topic": "Bài toán phân số",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "25": {
    "title": "Số thập phân, Các phép tính với số thập phân & Làm tròn",
    "topic": "Số thập phân",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "26": {
    "title": "Tỉ số và Tỉ số phần trăm trong thực tiễn",
    "topic": "Tỉ số phần trăm",
    "cat": "fractions6",
    "stage": 3,
    "sem": 2
  },
  "27": {
    "title": "Tính đối xứng: Hình có trục đối xứng & Tâm đối xứng",
    "topic": "Tính đối xứng",
    "cat": "geometry6",
    "stage": 3,
    "sem": 2
  },
  "28": {
    "title": "Điểm, Đường thẳng, Điểm thuộc đường thẳng & Ba điểm thẳng hàng",
    "topic": "Điểm và đường thẳng",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "29": {
    "title": "Hai đường thẳng cắt nhau, song song & Khái niệm Tia",
    "topic": "Đường thẳng và Tia",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "30": {
    "title": "Đoạn thẳng, Độ dài đoạn thẳng & Trung điểm của đoạn thẳng",
    "topic": "Đoạn thẳng & Trung điểm",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "31": {
    "title": "Góc, Các góc đặc biệt (Nhọn, Vuông, Tù, Bẹt) & Số đo góc",
    "topic": "Góc và số đo góc",
    "cat": "geometry6",
    "stage": 4,
    "sem": 2
  },
  "32": {
    "title": "Thu thập, tổ chức dữ liệu & Biểu đồ tranh, Biểu đồ cột kép",
    "topic": "Thống kê dữ liệu",
    "cat": "statistics6",
    "stage": 4,
    "sem": 2
  },
  "33": {
    "title": "Kết quả có thể, Sự kiện & Xác suất thực nghiệm",
    "topic": "Xác suất thực nghiệm",
    "cat": "statistics6",
    "stage": 4,
    "sem": 2
  },
  "34": {
    "title": "Ôn tập tổng hợp Số học, Đại số, Hình học & Thống kê Lớp 6",
    "topic": "Tổng hợp cuối năm",
    "cat": "natural_numbers",
    "stage": 4,
    "sem": 2
  },
  "35": {
    "title": "Đề thi Khảo sát Đánh giá Năng lực Cuối năm & Chinh phục Toán 7",
    "topic": "Đề thi Chuyển cấp",
    "cat": "integers",
    "stage": 4,
    "sem": 2
  }
};

export const getQuestionsByWeekMath6 = (weekNum) => {
  return QUESTION_BANK_MATH6.filter(q => q.week === Number(weekNum));
};

export const getFilteredQuestionsMath6 = ({ semester, stage, category, difficulty, count = 10 }) => {
  let pool = [...QUESTION_BANK_MATH6];
  if (semester && semester !== 'all') pool = pool.filter(q => q.semester === Number(semester));
  if (stage && stage !== 'all') pool = pool.filter(q => q.stage === Number(stage));
  if (category && category !== 'all') pool = pool.filter(q => q.category === category);
  if (difficulty && difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
