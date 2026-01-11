// thuquy-data.js - Đọc dữ liệu quỹ lớp từ Google Sheets (đơn giản như dự án web cá nhân)

// URL của Google Sheet ThuQuy (Published CSV)
// ⚠️ PHẢI LẤY TỪ config.js - KHÔNG DÙNG HARDCODE
// config.js tự động tính từ PUBLISHED_SPREADSHEET_URL và THUQUY_SHEET_GID
// File này sẽ lấy từ window.THUQUY_SHEET_URL (được expose từ thuquy.html sau khi load config.js)

// Parse CSV text thành mảng dữ liệu (theo utils.js từ dự án web cá nhân)
function parseCsv(text) {
  const rows = [];
  let row = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    if (c === '"' && inQuotes && next === '"') {
      current += '"';
      i++;
    } else if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === "," && !inQuotes) {
      row.push(current);
      current = "";
    } else if ((c === "\n" || c === "\r") && !inQuotes) {
      if (current !== "" || row.length) {
        row.push(current);
        rows.push(row);
        row = [];
        current = "";
      }
    } else {
      current += c;
    }
  }
  if (current !== "" || row.length) {
    row.push(current);
    rows.push(row);
  }
  return rows;
}

// Parse số định dạng Việt Nam
function parseVietnameseNumber(str) {
  if (!str || str.trim() === '') return 0;
  
  str = str.trim();
  const isNegative = str.startsWith('-');
  if (isNegative) str = str.substring(1);
  
  // Format VN: dấu chấm (.) là phần nghìn, dấu phẩy (,) là phần thập phân
  if (str.includes(',') && str.includes('.')) {
    str = str.replace(/\./g, '').replace(',', '.');
  } else if (str.includes(',')) {
    const parts = str.split(',');
    if (parts.length === 2 && parts[1].length <= 2) {
      str = str.replace(',', '.');
    } else {
      str = str.replace(/,/g, '');
    }
  } else if (str.includes('.')) {
    const parts = str.split('.');
    if (parts.length > 2) {
      str = str.replace(/\./g, '');
    }
  }
  
  str = str.replace(/[^\d.]/g, '');
  const num = parseFloat(str);
  return isNaN(num) ? 0 : (isNegative ? -num : num);
}

// Load và hiển thị dữ liệu quỹ lớp theo tuần (đơn giản như dự án web cá nhân)
async function loadWeekData(week) {
  try {
    // ⚠️ PHẢI LẤY TỪ config.js (qua window.THUQUY_SHEET_URL)
    // Đảm bảo config.js đã được load và expose lên window
    let sheetUrl = null;
    
    if (typeof window !== 'undefined' && window.THUQUY_SHEET_URL) {
      sheetUrl = window.THUQUY_SHEET_URL;
    } else {
      // Thử đợi một chút nếu config.js chưa load xong
      await new Promise(resolve => setTimeout(resolve, 100));
      if (typeof window !== 'undefined' && window.THUQUY_SHEET_URL) {
        sheetUrl = window.THUQUY_SHEET_URL;
      }
    }
    
    if (!sheetUrl) {
      throw new Error('THUQUY_SHEET_URL chưa được load từ config.js. Vui lòng đảm bảo:\n1. config.js được load trước js/thuquy-data.js\n2. thuquy.html đã expose THUQUY_SHEET_URL lên window');
    }
    
    console.log('✓ Sử dụng THUQUY_SHEET_URL từ config.js:', sheetUrl);
    
    // Fetch CSV từ Google Sheet
    const resp = await fetch(sheetUrl, { cache: "no-store" });
    if (!resp.ok) {
      throw new Error("HTTP " + resp.status);
    }
    
    const csvText = await resp.text();
    
    // Kiểm tra xem có phải CSV không (có thể bị redirect hoặc trả về HTML)
    if (csvText.includes('<html') || csvText.includes('<!DOCTYPE')) {
      throw new Error("URL trả về HTML thay vì CSV. Vui lòng kiểm tra URL có đúng format CSV và sheet ThuQuy (gid=985887717) không.");
    }
    
    const rows = parseCsv(csvText);
    
    if (!rows || rows.length < 2) {
      throw new Error("Không đọc được dữ liệu từ sheet (có ít hơn 2 dòng)");
    }
    
    // Kiểm tra header để đảm bảo đúng sheet ThuQuy
    // Header dòng đầu tiên nên có "Tuần" ở cột A
    if (rows[0] && rows[0][0]) {
      const firstHeader = String(rows[0][0]).trim().toLowerCase();
      if (!firstHeader.includes('tuần') && !firstHeader.includes('week')) {
        console.warn('⚠️ Header không khớp với sheet ThuQuy. Cột A header:', rows[0][0]);
      }
    }
    
    // Tìm dòng có tuần khớp (cột A = index 0)
    const weekStr = String(week);
    let foundRow = null;
    
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length === 0) continue;
      
      // Đọc cột A (tuần) - so sánh cả string và số
      const weekValue = row[0] ? String(row[0]).trim() : '';
      if (weekValue === weekStr || parseInt(weekValue) === parseInt(weekStr)) {
        foundRow = row;
        break;
      }
    }
    
    if (!foundRow) {
      // Log một vài tuần có sẵn để debug
      const availableWeeks = [];
      for (let i = 1; i < Math.min(20, rows.length); i++) {
        if (rows[i] && rows[i][0] && String(rows[i][0]).trim() !== '') {
          availableWeeks.push(String(rows[i][0]).trim());
        }
      }
      throw new Error(`Không tìm thấy dữ liệu cho tuần ${week}. Các tuần có sẵn: ${availableWeeks.slice(0, 10).join(', ')}`);
    }
    
    // Đọc các cột theo cấu trúc sheet:
    // Cột A (index 0): Tuần - đã tìm thấy
    // Cột E (index 4): Tên HS thiếu
    // Cột S (index 18): Tổng thu (đủ) - số nguyên không có dấu phẩy (ví dụ: 329000, 450000)
    // Cột T (index 19): Tổng chi - format VN với dấu phẩy (ví dụ: 1.572.000,00, 0,00)
    // Cột U (index 20): Còn lại - format VN với dấu phẩy, có thể âm (ví dụ: -1.243.000,00, 1.547.000,00)
    
    const missingStudents = foundRow[4] ? String(foundRow[4]).trim() : '';
    
    // Cột S: Tổng thu - số nguyên (không có dấu phẩy)
    const totalIncomeRaw = foundRow[18] ? String(foundRow[18]).trim() : '';
    const totalIncome = totalIncomeRaw ? parseFloat(totalIncomeRaw.replace(/[^\d]/g, '')) || 0 : 0;
    
    // Cột T: Tổng chi - format VN (có dấu phẩy và chấm)
    const totalExpense = parseVietnameseNumber(foundRow[19] || '');
    
    // Cột U: Còn lại - format VN (có dấu phẩy và chấm, có thể âm)
    const totalRemaining = parseVietnameseNumber(foundRow[20] || '');
    
    return {
      week: week,
      missing_students: missingStudents,
      total_income: totalIncome,
      total_expense: totalExpense,
      total_remaining: totalRemaining
    };
  } catch (e) {
    console.error("Lỗi tải dữ liệu quỹ lớp:", e);
    throw e;
  }
}

// Expose hàm để sử dụng trong HTML
if (typeof window !== 'undefined') {
  window.loadWeekData = loadWeekData;
}
