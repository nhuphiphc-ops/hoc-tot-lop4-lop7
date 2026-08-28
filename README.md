# Toán Lớp 4 Phiêu Lưu Ký 🚀🧮
**Ứng dụng Web Luyện Thi Trắc Nghiệm Toán Lớp 4 Chuẩn Chương Trình GDPT Mới**

Ứng dụng được thiết kế đặc biệt dành riêng cho học sinh Tiểu học lớp 4, với lộ trình 35 tuần học chia thành 4 chặng phiêu lưu, giao diện bắt mắt, phông chữ to rõ, bảng nháp điện tử và phân tích năng lực chi tiết cho phụ huynh.

---

## 🌟 1. Các Tính Năng Nổi Bật

### 🗺️ Lộ trình 35 tuần học (Gamified Roadmap)
- **4 Chặng phiêu lưu xuyên suốt năm học:**
  - **Chặng 1 (Tuần 1 - 9):** Khởi động & Số tự nhiên, biểu thức chứa chữ, đơn vị thời gian/khối lượng, góc hình học.
  - **Chặng 2 (Tuần 10 - 18):** Phép tính nâng cao, Trung bình cộng, Toán Tổng - Hiệu & Đề thi thử Học Kỳ 1.
  - **Chặng 3 (Tuần 19 - 27):** Khám phá Phân số, 4 phép tính phân số, Hình bình hành & Hình thoi.
  - **Chặng 4 (Tuần 28 - 35):** Tỉ số, Toán Tổng - Tỉ, Hiệu - Tỉ, Tỉ lệ bản đồ & Đề thi thử Học Kỳ 2 toàn diện.
- **Cơ chế Mở khóa thông minh:** Đạt $\ge 75\%$ điểm để mở khóa tuần tiếp theo, tích lũy $1 - 3$ Sao và Xu thưởng.
- Có nút **"Mở Khóa Tự Do"** tiện lợi cho phụ huynh / thầy cô khi cần kiểm tra bất kỳ tuần nào.

### ✍️ Phòng Thi Trắc Nghiệm & Bảng Nháp Điện Tử
- Giao diện chữ to ($18\text{px} - 22\text{px}$), màu sắc tươi sáng chống mỏi mắt cho trẻ em.
- Định dạng phân số chuẩn đẹp (tử số / mẫu số phân tầng rõ ràng).
- **Bảng Nháp Vẽ Tay (Scratchpad Canvas):** Bé có thể bật bảng nháp để đặt tính, vẽ hình, nháp nhẩm trực tiếp trên màn hình mà không cần giấy bút ngoài.
- Đồng hồ đếm ngược thông minh, nút đánh dấu câu hỏi (Flag), bảng điều hướng nhanh toàn bộ câu hỏi.

### 🏆 Chấm Điểm, Pháo Hoa & Lời Giải Chi Tiết
- Hiệu ứng pháo hoa rực rỡ (**Canvas-Confetti**) và âm thanh chúc mừng khi đạt điểm cao.
- **Xem Lời Giải Chi Tiết:** Hướng dẫn giải từng bước, công thức áp dụng, mẹo nhớ nhanh và phân tích tại sao đáp án sai.
- Chế độ **"Luyện tập lại các câu làm sai"** giúp bé khắc sâu kiến thức ngay lập tức.

### 🎯 Phòng Luyện Thi Tự Do (Custom Practice)
- Tích hợp sẵn các bộ đề thi thử nổi bật: *Đề thi Học Kỳ 1*, *Đề thi Học Kỳ 2*, *Thử thách tính nhanh 10 phút*, *Toán nâng cao điểm 10*.
- Bộ lọc linh hoạt: Lọc theo Học kỳ, theo Chặng, theo Mức độ khó (Dễ / Trung bình / Nâng cao), theo Mảng kiến thức, tùy chọn số lượng câu hỏi ($10 / 20 / 30$ câu).

### 📊 Góc Phụ Huynh (Parent Dashboard)
- Thống kê tổng số bài đã làm, điểm trung bình toàn diện, tổng thời gian học và chuỗi ngày chăm chỉ (Streak).
- **Biểu đồ năng lực 6 mảng kiến thức:**
  1. *Số tự nhiên & Biểu thức*
  2. *4 Phép tính nâng cao*
  3. *Phân số & Phép tính phân số*
  4. *Hình học & Góc*
  5. *Đại lượng & Đo lường*
  6. *Toán có lời văn & Tỉ số*
- Phân tích điểm mạnh vượt trội và đưa ra lời khuyên cụ thể cho phụ huynh đồng hành cùng con.
- Hỗ trợ in/tải báo cáo kết quả học tập.

### 🔊 Hiệu Ứng & Linh Vật Đồng Hành
- Tổng hợp âm thanh bằng **Web Audio API** (không cần file mp3 ngoài, tải tức thì, có nút bật/tắt).
- 4 bạn Linh vật đáng yêu: *Bé Voi Dũng Cảm 🐘*, *Cú Mèo Thông Thái 🦉*, *Sóc Con Nhanh Nhẹn 🐿️*, *Mèo Miu Đáng Yêu 🐱*.

---

## 💻 2. Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### Yêu cầu hệ thống:
- Đã cài đặt **Node.js** (phiên bản 18+ khuyến nghị).

### Các bước chạy trên máy:
```bash
# 1. Cài đặt các gói thư viện (nếu chưa cài)
npm install

# 2. Khởi chạy máy chủ phát triển (Development Server)
npm run dev

# 3. Đóng gói bản Production
npm run build
```

Sau khi chạy `npm run dev`, mở trình duyệt web tại địa chỉ: `http://localhost:5173/` để trải nghiệm ứng dụng.

---

## 🛠️ 3. Công Nghệ Sử Dụng (Tech Stack)
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom Kid Theme, Nunito & Quicksand fonts)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas-Confetti
- **Sound Effects:** Web Audio API AudioContext Synthesizer
- **Storage:** LocalStorage (Lưu trữ an toàn ngoại tuyến)
