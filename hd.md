Code đơn giản hóa:
Fetch CSV trực tiếp:
   const resp = await fetch(THUQUY_SHEET_URL, { cache: "no-store" });   const csvText = await resp.text();   const rows = parseCsv(csvText);
Tìm tuần đơn giản:
Duyệt từng dòng
So sánh cột A (index 0) với tuần cần tìm
So sánh cả string và số để linh hoạt
Đọc dữ liệu trực tiếp:
Cột E (index 4): Học sinh thiếu
Cột S (index 18): Tổng thu
Cột T (index 19): Tổng chi
Cột U (index 20): Còn lại
Parse số định dạng VN:
Xử lý định dạng Việt Nam (dấu chấm/phẩy)