// ============================================
// CONFIGURATION FILE
// Cấu hình URL Google Apps Script và Google Sheets
// ============================================
// 
// ⚠️ QUAN TRỌNG: Chỉ cần thay đổi 4 giá trị dưới đây,
// tất cả các URL khác sẽ tự động được tính toán!
// ============================================

// URL của Google Apps Script đã deploy
// Thay đổi URL này khi deploy script mới
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_EEmhzleWCuAvBqcSCEmKhs0dujuEKaynOp-YN3I9d-qPXRFKVfkp727GHhkRNGa1-A/exec';

// ============================================
// ⚙️ CẤU HÌNH CƠ BẢN - CHỈ CẦN THAY ĐỔI 4 GIÁ TRỊ NÀY
// ============================================

// 1. Spreadsheet ID chính (lấy từ URL: docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
const SPREADSHEET_ID = '1GS3QKu5Bbeoef0rQhkitX_dawnwqlRPdeUaCNKV8cJk';

// 2. Published Spreadsheet URL (dạng /e/... - lấy từ URL published sheet)
// Ví dụ: https://docs.google.com/spreadsheets/d/e/2PACX-1vTaaF4Ifa4ylSmZvqG1K8zKUw7yEJt1oTNsY__nCbQPRo6v__05lNc0oXpt56Yhy4tyTfDu0FOKFZ5U
const PUBLISHED_SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaaF4Ifa4ylSmZvqG1K8zKUw7yEJt1oTNsY__nCbQPRo6v__05lNc0oXpt56Yhy4tyTfDu0FOKFZ5U';

// 3. Sheet ThuQuy GID (lấy từ URL published sheet: .../pubhtml?gid=985887717)
const THUQUY_SHEET_GID = '985887717';

// 4. Sheet Ranking GID (lấy từ URL published sheet: .../pubhtml?gid=1367821958)
const RANKING_SHEET_GID = '1367821958';

// 5. Sheet Thời Khóa Biểu GID (lấy từ URL published sheet: .../pubhtml?gid=190016735)
const TIMETABLE_SHEET_GID = '190016735';

// 6. Sheet Tổng kết Tuần GID (lấy từ URL published sheet: .../pubhtml?gid=1093797283)
const TONGKET_TUAN_SHEET_GID = '1093797283';

// ============================================
// 📋 CẤU HÌNH GID CHO CÁC CHỨC VỤ BÁO CÁO
// Dùng cho trang Tổng hợp báo cáo (tonghopbaocao.html)
// ============================================

// 7. Lớp Trưởng (LT) GID - lấy từ URL published sheet: .../pubhtml?gid=492067933&single=true
const LT_SHEET_GID = '492067933';

// 8. Lớp Phó Học Tập (LPHT) GID - lấy từ URL published sheet: .../pubhtml?gid=1934891230&single=true
const LPHT_SHEET_GID = '1934891230';

// 9. Lớp Phó Trật Tự (LPTT) GID - lấy từ URL published sheet: .../pubhtml?gid=1934891230&single=true
// Lưu ý: Nếu LPTT có sheet riêng, hãy thay đổi GID này
const LPTT_SHEET_GID = '670544983';

// 10. Lớp Phó Phong Trào (LPPT) GID - lấy từ URL published sheet
// Lưu ý: Cần cập nhật GID này nếu có sheet riêng cho LPPT
// Tạm thời dùng GID của LPHT, vui lòng thay đổi khi có GID chính xác
const LPPT_SHEET_GID = '851131970';

// 11. Lớp Phó Lao Động (LPLD) GID - lấy từ URL published sheet: .../pubhtml?gid=563041671&single=true
const LPLD_SHEET_GID = '563041671';

// 12. Tổ Trưởng 1 (TT1) GID - lấy từ URL published sheet: .../pubhtml?gid=1995270266&single=true
const TT1_SHEET_GID = '1995270266';

// 13. Tổ Trưởng 2 (TT2) GID - lấy từ URL published sheet: .../pubhtml?gid=1951534761&single=true
const TT2_SHEET_GID = '1951534761';

// 14. Tổ Trưởng 3 (TT3) GID - lấy từ URL published sheet: .../pubhtml?gid=707357282&single=true
const TT3_SHEET_GID = '707357282';

// 15. Tổ Trưởng 4 (TT4) GID - lấy từ URL published sheet: .../pubhtml?gid=2014452658&single=true
const TT4_SHEET_GID = '2014452658';

// ============================================
// 🔄 TỰ ĐỘNG TÍNH TOÁN - KHÔNG CẦN THAY ĐỔI
// ============================================

// URL CSV của sheet ThuQuy (tự động tính từ PUBLISHED_SPREADSHEET_URL và THUQUY_SHEET_GID)
const THUQUY_SHEET_URL = `${PUBLISHED_SPREADSHEET_URL}/pub?gid=${THUQUY_SHEET_GID}&single=true&output=csv`;

// URL CSV của sheet Ranking (tự động tính từ PUBLISHED_SPREADSHEET_URL và RANKING_SHEET_GID)
const RANKING_SHEET_URL = `${PUBLISHED_SPREADSHEET_URL}/pub?gid=${RANKING_SHEET_GID}&single=true&output=csv`;

// URL HTML của sheet ThuQuy (tự động tính)
const THUQUY_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${THUQUY_SHEET_GID}&single=true`;

// URL CSV export của sheet ThuQuy (tự động tính)
const THUQUY_SHEET_EXPORT_URL = `${PUBLISHED_SPREADSHEET_URL}/export?format=csv&gid=${THUQUY_SHEET_GID}`;

// URL CSV của sheet Thời Khóa Biểu (tự động tính từ PUBLISHED_SPREADSHEET_URL và TIMETABLE_SHEET_GID)
const TIMETABLE_SHEET_URL = `${PUBLISHED_SPREADSHEET_URL}/pub?gid=${TIMETABLE_SHEET_GID}&single=true&output=csv`;

// URL HTML của sheet Thời Khóa Biểu (tự động tính)
const TIMETABLE_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TIMETABLE_SHEET_GID}&single=true`;

// URL CSV của sheet Tổng kết Tuần (tự động tính từ PUBLISHED_SPREADSHEET_URL và TONGKET_TUAN_SHEET_GID)
const TONGKET_TUAN_SHEET_URL = `${PUBLISHED_SPREADSHEET_URL}/pub?gid=${TONGKET_TUAN_SHEET_GID}&single=true&output=csv`;

// URL HTML của sheet Tổng kết Tuần (tự động tính)
const TONGKET_TUAN_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TONGKET_TUAN_SHEET_GID}&single=true`;

// ============================================
// 🔗 URL HTML CHO CÁC CHỨC VỤ BÁO CÁO
// Tự động tính từ PUBLISHED_SPREADSHEET_URL và GID tương ứng
// ============================================

// URL HTML cho các chức vụ (dùng cho tonghopbaocao.html)
const LT_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${LT_SHEET_GID}&single=true`;
const LPHT_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${LPHT_SHEET_GID}&single=true`;
const LPTT_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${LPTT_SHEET_GID}&single=true`;
const LPPT_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${LPPT_SHEET_GID}&single=true`;
const LPLD_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${LPLD_SHEET_GID}&single=true`;
const TT1_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TT1_SHEET_GID}&single=true`;
const TT2_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TT2_SHEET_GID}&single=true`;
const TT3_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TT3_SHEET_GID}&single=true`;
const TT4_SHEET_HTML_URL = `${PUBLISHED_SPREADSHEET_URL}/pubhtml?gid=${TT4_SHEET_GID}&single=true`;

// Object chứa tất cả URL cho dễ truy cập trong tonghopbaocao.html
const REPORT_SHEET_URLS = {
    'LT': LT_SHEET_HTML_URL,
    'LPHT': LPHT_SHEET_HTML_URL,
    'LPTT': LPTT_SHEET_HTML_URL,
    'LPPT': LPPT_SHEET_HTML_URL,
    'LPLD': LPLD_SHEET_HTML_URL,
    'TT1': TT1_SHEET_HTML_URL,
    'TT2': TT2_SHEET_HTML_URL,
    'TT3': TT3_SHEET_HTML_URL,
    'TT4': TT4_SHEET_HTML_URL,
    'ThuQuy': THUQUY_SHEET_HTML_URL
};

// ============================================
// 📝 EDIT LINKS (Links để chỉnh sửa sheet)
// ============================================

const SHEET_LINKS = {
    // Link edit sheet tổng kết lớp (tự động tính từ SPREADSHEET_ID)
    tongketLop: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?usp=sharing`,
    // Link edit sheet dữ liệu lớp (sheet khác, không đổi theo SPREADSHEET_ID)
    dulieuLop: 'https://docs.google.com/spreadsheets/d/12XA3VExQ0HSV_1eIoWmJ6j7lQ7pVN3j7IWFvlNxXXRE/edit?usp=sharing',
    // Link edit sheet Thời Khóa Biểu (để chỉnh sửa thời khóa biểu và ngày thi)
    // Link này dẫn tới sheet cụ thể với GID 190016735 chứa thời khóa biểu và các ngày thi ở ô H2, I2, J2
    // H2: Ngày thi HK1, I2: Ngày thi HK2, J2: Ngày thi TN THPT
    timetable: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?gid=${TIMETABLE_SHEET_GID}#gid=${TIMETABLE_SHEET_GID}`
};

// ============================================
// 📌 LƯU Ý CHO unified.gs
// ============================================
// 
// File unified.gs (Google Apps Script) không thể đọc từ config.js
// Vui lòng cập nhật SPREADSHEET_ID trong unified.gs dòng 8:
// var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
//

