// ============================================
// DATA CONFIGURATION FILE
// File chứa tất cả dữ liệu có thể tùy chỉnh
// Chỉ cần thay đổi thông tin ở đây, không cần sửa giao diện
// ============================================

// ============================================
// THÔNG TIN LỚP
// ============================================
const CLASS_INFO = {
    className: '12C5',
    schoolYear: '2024-2025',
    fullName: 'Lớp 12C5 - 2024-2025'
};

// ============================================
// THÔNG TIN GIÁO VIÊN CHỦ NHIỆM
// ============================================
const GVCN_INFO = {
    name: 'Võ Thanh Phong',
    displayName: 'Võ Thanh Phong',
    phone: '0382311919',
    zalo: '0382311919',
    // URL Zalo (tự động tạo từ số điện thoại)
    get zaloUrl() {
        return `https://zalo.me/${this.zalo}`;
    },
    // URL gọi điện (tự động tạo từ số điện thoại)
    get phoneUrl() {
        return `tel:${this.phone}`;
    }
};

// ============================================
// DANH SÁCH HỌC SINH
// Format: { name: 'Họ và Tên', birthDay: ngày, birthMonth: tháng }
// ============================================
const STUDENTS = [
    { name: 'Nguyễn Minh Anh', birthDay: 25, birthMonth: 1 },
    { name: 'Nguyễn Thị Xuân Nhi', birthDay: 7, birthMonth: 4 },
    { name: 'Trần Thị Cẩm Nhung', birthDay: 17, birthMonth: 7 },
    { name: 'Trần Thị Thúy Quỳnh', birthDay: 16, birthMonth: 4 },
    { name: 'Nguyễn Thị Tú Sương', birthDay: 4, birthMonth: 4 },
    { name: 'Lê Đông Thy', birthDay: 26, birthMonth: 12 },
    { name: 'Nguyễn Phạm Bảo Trân', birthDay: 29, birthMonth: 8 },
    { name: 'Nguyễn Thị Kim Cương', birthDay: 8, birthMonth: 11 },
    { name: 'Huỳnh Minh Tường', birthDay: 27, birthMonth: 10 },
    { name: 'Nguyễn Thị Thuỳ Dương', birthDay: 11, birthMonth: 11 },
    { name: 'Nguyễn Thành Đạt', birthDay: 5, birthMonth: 9 },
    { name: 'Trần Tiến Đạt', birthDay: 3, birthMonth: 2 },
    { name: 'Bùi Minh Đức', birthDay: 28, birthMonth: 11 },
    { name: 'Trần Gia Huệ', birthDay: 19, birthMonth: 2 },
    { name: 'Đinh Trung Kiên', birthDay: 18, birthMonth: 3 },
    { name: 'Lê Thị Thúy Kiều', birthDay: 16, birthMonth: 5 },
    { name: 'Lê Thị Thúy Kiều', birthDay: 15, birthMonth: 12 },
    { name: 'Trần Nguyễn Hồng Lam', birthDay: 3, birthMonth: 6 },
    { name: 'Nguyễn Thị Kiều Liên', birthDay: 22, birthMonth: 8 },
    { name: 'Lê Ngọc Linh', birthDay: 23, birthMonth: 11 },
    { name: 'Tăng Hoàng Trúc Linh', birthDay: 19, birthMonth: 9 },
    { name: 'Trần Thanh Long', birthDay: 23, birthMonth: 12 },
    { name: 'Nguyễn Kim Tường My', birthDay: 9, birthMonth: 11 },
    { name: 'Phạm Thị Kim Ngọc', birthDay: 18, birthMonth: 11 },
    { name: 'Nguyễn Thiện Nhân', birthDay: 30, birthMonth: 8 },
    { name: 'Trần Ngọc Nhân', birthDay: 27, birthMonth: 3 },
    { name: 'Trần Thị Yến Nhi', birthDay: 12, birthMonth: 11 },
    { name: 'Bùi Thị Thiện Như', birthDay: 16, birthMonth: 4 },
    { name: 'Bùi Trần Quỳnh Như', birthDay: 6, birthMonth: 11 },
    { name: 'Phạm Minh Nhựt', birthDay: 17, birthMonth: 11 },
    { name: 'Lê Minh Quí', birthDay: 13, birthMonth: 9 },
    { name: 'Bùi Thị Kiều Quy', birthDay: 4, birthMonth: 12 },
    { name: 'Nguyễn Thị Bích Thi', birthDay: 26, birthMonth: 9 },
    { name: 'Trương Thị Bảo Thi', birthDay: 5, birthMonth: 3 },
    { name: 'Nguyễn Đức Thịnh', birthDay: 30, birthMonth: 12 },
    { name: 'Dương Ngọc Thư', birthDay: 28, birthMonth: 10 },
    { name: 'Hồng Ngọc Anh Thư', birthDay: 23, birthMonth: 5 },
    { name: 'Lê Văn Thuận', birthDay: 30, birthMonth: 4 },
    { name: 'Lê Hoàng Bảo Thy', birthDay: 30, birthMonth: 11 },
    { name: 'Nguyễn Thị Bảo Trăm', birthDay: 23, birthMonth: 2 },
    { name: 'Nguyễn Thị Ngọc Trân', birthDay: 26, birthMonth: 1 },
    { name: 'Lê Thị Như Ý', birthDay: 10, birthMonth: 12 },
    { name: 'Lê Thị Ngọc Yến', birthDay: 24, birthMonth: 7 },
    { name: 'Nguyễn Thị Thảo Vi', birthDay: 20, birthMonth: 8 },
    { name: 'Nguyễn Trúc Đào', birthDay: 21, birthMonth: 6 },
    { name: 'Nguyễn Thị Ánh Hồng', birthDay: 9, birthMonth: 3 },
    { name: 'Hà Thị Tuyết My', birthDay: 23, birthMonth: 12 },
    { name: 'Nguyễn Thị Kim Tiên', birthDay: 9, birthMonth: 6 }
];

// ============================================
// THỜI KHÓA BIỂU CẬP NHẬT: 12-01-2026
// ============================================
const TIMETABLE = {
    // Thông tin chung
    morningTitle: 'Buổi Sáng (Áp dụng: 12-01-2026)',
    afternoonTitle: 'Trái Buổi: Chiều',
    
    // Thời khóa biểu buổi sáng
    morning: [
        // Tiết 1
        { period: 1, day: 'hai', subject: 'HĐTN', teacher: 'Phạm Thị Minh Châu', class: 'subject-hdtn' },
        { period: 1, day: 'ba', subject: 'Anh', teacher: 'Nguyễn Thanh Tuyền', class: 'subject-anh' },
        { period: 1, day: 'tư', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 1, day: 'năm', subject: 'Địa', teacher: 'Lê Ngọc Lài', class: 'subject-dia' },
        { period: 1, day: 'sáu', subject: 'GDKT&P', teacher: 'Nguyễn Thị Cước', class: 'subject-gdktpl' },
        { period: 1, day: 'bảy', subject: 'HĐTN', teacher: 'Phạm Thị Minh Châu', class: 'subject-hdtn' },
        
        // Tiết 2
        { period: 2, day: 'hai', subject: 'CN(CN)', teacher: 'Trần Lâm Tùng', class: 'subject-cn' },
        { period: 2, day: 'ba', subject: 'Anh', teacher: 'Nguyễn Thanh Tuyền', class: 'subject-anh' },
        { period: 2, day: 'tư', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 2, day: 'năm', subject: 'Địa', teacher: 'Lê Ngọc Lài', class: 'subject-dia' },
        { period: 2, day: 'sáu', subject: 'Anh', teacher: 'Nguyễn Thanh Tuyền', class: 'subject-anh' },
        { period: 2, day: 'bảy', subject: 'HĐTN', teacher: 'Phạm Thị Minh Châu', class: 'subject-hdtn' },
        
        // Tiết 3
        { period: 3, day: 'hai', subject: 'Tin', teacher: 'Nguyễn Hồng Nhung', class: 'subject-tin' },
        { period: 3, day: 'ba', subject: 'GDKT&P', teacher: 'Nguyễn Thị Cước', class: 'subject-gdktpl' },
        { period: 3, day: 'tư', subject: 'Tin', teacher: 'Nguyễn Hồng Nhung', class: 'subject-tin' },
        { period: 3, day: 'năm', subject: 'GDHN', teacher: 'Phạm Thị Minh Châu', class: 'subject-gdhn' },
        { period: 3, day: 'sáu', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 3, day: 'bảy', subject: 'HĐTN', teacher: 'Phạm Thị Minh Châu', class: 'subject-hdtn' },
        
        // Tiết 4
        { period: 4, day: 'hai', subject: 'Sử', teacher: 'Bùi Văn Lới', class: 'subject-su' },
        { period: 4, day: 'ba', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 4, day: 'tư', subject: 'CN(CN)', teacher: 'Trần Lâm Tùng', class: 'subject-cn' },
        { period: 4, day: 'năm', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 4, day: 'sáu', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 4, day: 'bảy', subject: '-', teacher: '', class: '' },
        
        // Tiết 5
        { period: 5, day: 'hai', subject: 'Địa', teacher: 'Lê Ngọc Lài', class: 'subject-dia' },
        { period: 5, day: 'ba', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 5, day: 'tư', subject: '-', teacher: '', class: '' },
        { period: 5, day: 'năm', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 5, day: 'sáu', subject: 'SHCN', teacher: 'Võ Thanh Phong', class: 'subject-shcn' },
        { period: 5, day: 'bảy', subject: '-', teacher: '', class: '' }
    ],
    
    // Thời khóa biểu buổi chiều
    afternoon: [
        // Tiết 2
        { period: 2, day: 'hai', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 2, day: 'ba', subject: 'Sử', teacher: 'Bùi Văn Lới', class: 'subject-su' },
        { period: 2, day: 'tư', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 2, day: 'năm', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 2, day: 'sáu', subject: 'GDTC', teacher: 'Trương Hoàng Em', class: 'subject-gdtc' },
        { period: 2, day: 'bảy', subject: '-', teacher: '', class: '' },
        
        // Tiết 3
        { period: 3, day: 'hai', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 3, day: 'ba', subject: 'Sử', teacher: 'Bùi Văn Lới', class: 'subject-su' },
        { period: 3, day: 'tư', subject: 'Văn', teacher: 'Nguyễn Văn Thị', class: 'subject-van' },
        { period: 3, day: 'năm', subject: 'Toán', teacher: 'Võ Thanh Phong', class: 'subject-toan' },
        { period: 3, day: 'sáu', subject: 'GDTC', teacher: 'Trương Hoàng Em', class: 'subject-gdtc' },
        { period: 3, day: 'bảy', subject: '-', teacher: '', class: '' },
        
        // Tiết 4
        { period: 4, day: 'hai', subject: '-', teacher: '', class: '' },
        { period: 4, day: 'ba', subject: 'GDKT&P', teacher: 'Nguyễn Thị Cước', class: 'subject-gdktpl' },
        { period: 4, day: 'tư', subject: 'Địa', teacher: 'Lê Ngọc Lài', class: 'subject-dia' },
        { period: 4, day: 'năm', subject: 'Anh', teacher: 'Nguyễn Thanh Tuyền', class: 'subject-anh' },
        { period: 4, day: 'sáu', subject: 'GDQP', teacher: 'Lê Minh Tuấn', class: 'subject-gdqp' },
        { period: 4, day: 'bảy', subject: '-', teacher: '', class: '' },
        
        // Tiết 5
        { period: 5, day: 'hai', subject: '-', teacher: '', class: '' },
        { period: 5, day: 'ba', subject: 'GDKT&P', teacher: 'Nguyễn Thị Cước', class: 'subject-gdktpl' },
        { period: 5, day: 'tư', subject: 'Địa', teacher: 'Lê Ngọc Lài', class: 'subject-dia' },
        { period: 5, day: 'năm', subject: 'Anh', teacher: 'Nguyễn Thanh Tuyền', class: 'subject-anh' },
        { period: 5, day: 'sáu', subject: 'GDQP', teacher: 'Lê Minh Tuấn', class: 'subject-gdqp' },
        { period: 5, day: 'bảy', subject: '-', teacher: '', class: '' }
    ]
};

// ============================================
// LỊCH TUẦN HỌC - CHUNG CHO TẤT CẢ CÁC FORM
// Khung tuần năm học 2024-2025 đã điều chỉnh theo lịch nghỉ Tết
// ============================================
const SCHOOL_WEEKS_CONFIG = [
  { week: 1, from: "05/09/2024", to: "13/09/2024", note: "Khai giảng 05/09" },
  { week: 2, from: "15/09/2024", to: "20/09/2024", note: "" },
  { week: 3, from: "22/09/2024", to: "27/09/2024", note: "" },
  { week: 4, from: "29/09/2024", to: "04/10/2024", note: "" },
  { week: 5, from: "06/10/2024", to: "11/10/2024", note: "" },
  { week: 6, from: "13/10/2024", to: "18/10/2024", note: "" },
  { week: 7, from: "20/10/2024", to: "25/10/2024", note: "" },
  { week: 8, from: "27/10/2024", to: "01/11/2024", note: "" },
  { week: 9, from: "03/11/2024", to: "08/11/2024", note: "" },
  { week: 10, from: "10/11/2024", to: "15/11/2024", note: "" },
  { week: 11, from: "17/11/2024", to: "22/11/2024", note: "Chào mừng ngày Nhà giáo VN 20/11" },
  { week: 12, from: "24/11/2024", to: "29/11/2024", note: "" },
  { week: 13, from: "01/12/2024", to: "06/12/2024", note: "" },
  { week: 14, from: "08/12/2024", to: "13/12/2024", note: "" },
  { week: 15, from: "15/12/2024", to: "20/12/2024", note: "Kiểm tra cuối kỳ I" },
  { week: 16, from: "22/12/2024", to: "27/12/2024", note: "" },
  { week: 17, from: "29/12/2024", to: "03/01/2025", note: "Nghỉ Tết Dương lịch (01/01)" },
  { week: 18, from: "05/01/2025", to: "10/01/2025", note: "Sơ kết HK I" },
  { week: 19, from: "12/01/2025", to: "17/01/2025", note: "Bắt đầu HK II" },
  { week: 20, from: "19/01/2025", to: "24/01/2025", note: "" },
  { week: 21, from: "26/01/2025", to: "31/01/2025", note: "" },
  { week: 22, from: "02/02/2025", to: "07/02/2025", note: "Học hết tuần rồi nghỉ Tết" },
  // Nghỉ Tết từ 09/02 đến 22/02 (không tính vào tuần thực học)
  { week: 23, from: "23/02/2025", to: "28/02/2025", note: "Bắt đầu học lại sau Tết" },
  { week: 24, from: "02/03/2025", to: "07/03/2025", note: "" },
  { week: 25, from: "09/03/2025", to: "14/03/2025", note: "" },
  { week: 26, from: "16/03/2025", to: "21/03/2025", note: "" },
  { week: 27, from: "23/03/2025", to: "28/03/2025", note: "Ngày thành lập Đoàn 26/03" },
  { week: 28, from: "30/03/2025", to: "04/04/2025", note: "" },
  { week: 29, from: "06/04/2025", to: "11/04/2025", note: "" },
  { week: 30, from: "13/04/2025", to: "18/04/2025", note: "" },
  { week: 31, from: "20/04/2025", to: "25/04/2025", note: "" },
  { week: 32, from: "27/04/2025", to: "02/05/2025", note: "Giỗ Tổ (nghỉ bù 27/04), Lễ 30/04 & 01/05" },
  { week: 33, from: "04/05/2025", to: "09/05/2025", note: "Kiểm tra cuối kỳ II" },
  { week: 34, from: "11/05/2025", to: "16/05/2025", note: "" },
  { week: 35, from: "18/05/2025", to: "23/05/2025", note: "Tổng kết năm học" }
];

// Helper function: Chuyển đổi SCHOOL_WEEKS_CONFIG sang format "từ ngày X đến Y"
function getWeekRangeString(weekNumber) {
    if (!SCHOOL_WEEKS_CONFIG || weekNumber < 1 || weekNumber > SCHOOL_WEEKS_CONFIG.length) {
        return '';
    }
    const weekConfig = SCHOOL_WEEKS_CONFIG[weekNumber - 1];
    if (!weekConfig) return '';
    return `từ ngày ${weekConfig.from} đến ${weekConfig.to}`;
}

// Helper function: Lấy tất cả week ranges dạng array string
function getAllWeekRanges() {
    if (!SCHOOL_WEEKS_CONFIG) return [];
    return SCHOOL_WEEKS_CONFIG.map(w => getWeekRangeString(w.week));
}

// Helper function: Tính tuần hiện tại dựa trên ngày tháng
function getCurrentWeekNumber() {
    if (!SCHOOL_WEEKS_CONFIG || SCHOOL_WEEKS_CONFIG.length === 0) return 1;
    
    const today = new Date();
    // Normalize to midnight local time để tránh lỗi timezone
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    currentDate.setHours(0, 0, 0, 0);
    
    // Tìm tuần chứa ngày hiện tại
    for (let i = 0; i < SCHOOL_WEEKS_CONFIG.length; i++) {
        const weekConfig = SCHOOL_WEEKS_CONFIG[i];
        if (!weekConfig || !weekConfig.from || !weekConfig.to) continue;
        
        const [fromDay, fromMonth, fromYear] = weekConfig.from.split('/').map(Number);
        const [toDay, toMonth, toYear] = weekConfig.to.split('/').map(Number);
        
        // Kiểm tra dữ liệu hợp lệ
        if (isNaN(fromDay) || isNaN(fromMonth) || isNaN(fromYear) || 
            isNaN(toDay) || isNaN(toMonth) || isNaN(toYear)) {
            continue;
        }
        
        const startDate = new Date(fromYear, fromMonth - 1, fromDay);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(toYear, toMonth - 1, toDay);
        endDate.setHours(23, 59, 59, 999); // Bao gồm cả ngày cuối
        
        if (currentDate >= startDate && currentDate <= endDate) {
            return weekConfig.week;
        }
    }
    
    // Nếu không tìm thấy tuần chứa ngày hiện tại, tìm tuần gần nhất trong quá khứ
    // (Vì Chủ nhật không được liệt kê trong tuần học, nên nếu hôm nay là Chủ nhật
    // hoặc nằm giữa các tuần, ta sẽ trả về tuần vừa qua)
    for (let i = SCHOOL_WEEKS_CONFIG.length - 1; i >= 0; i--) {
        const weekConfig = SCHOOL_WEEKS_CONFIG[i];
        if (!weekConfig || !weekConfig.from) continue;
        
        const [fromDay, fromMonth, fromYear] = weekConfig.from.split('/').map(Number);
        if (isNaN(fromDay) || isNaN(fromMonth) || isNaN(fromYear)) continue;
        
        const startDate = new Date(fromYear, fromMonth - 1, fromDay);
        startDate.setHours(0, 0, 0, 0);
        
        // Nếu tuần này bắt đầu trước hoặc bằng ngày hiện tại, đây là tuần gần nhất trong quá khứ
        if (startDate <= currentDate) {
            return weekConfig.week;
        }
    }
    
    // Mặc định trả về tuần 1 nếu không tìm thấy gì
    return 1;
}

// ============================================
// THÔNG TIN THI CỬ
// ============================================
const EXAM_INFO = {
    hk1Date: '29/12/2024', // Ngày thi học kỳ 1
    hk1DateFull: '2024-12-29', // Format đầy đủ cho countdown
    hk1Title: 'Thi học kỳ 1'
};

// ============================================
// TẤT CẢ CÁC LINK TRONG ỨNG DỤNG
// ============================================
const LINKS = {
    // Links tư vấn hướng nghiệp
    career: {
        chatgpt: 'https://chatgpt.com/g/g-678f082a9d9881919d4898ebe84b9061-ai-huong-nghiep/c/68b907f1-72d8-8329-8471-7af0473f6c55',
        registerForm: 'https://forms.gle/kexLsyinrctLgZBZ8'
    },
    
    // Links học tập
    learning: {
        khanAcademy: 'https://vi.khanacademy.org/',
        roboki: 'https://roboki.vn/g/681d6f075a561b1d5e71e835',
        smsEdu: 'https://smsedu.smas.edu.vn/User/Login?ReturnUrl=%2f',
        toanmath: 'https://toanmath.com/'
    },
    
    // Links hình ảnh/kỷ niệm
    photos: {
        album: 'https://photos.app.goo.gl/RXmdLwygHYZsgWzs8'
    },
    
    // Links báo cáo SYLL
    syll: {
        soyeulylichlop: 'https://soyeulylichlop.vercel.app/'
    },
    
    // Links báo cáo Ban Cán Sự
    reports: {
        lt: 'lt.html',
        lpht: 'lpht.html',
        lpld: 'lpld.html',
        lppt: 'lppt.html',
        lptt: 'lptt.html',
        tt: 'tt_form.html',
        thuquy: 'thuquy.html'
    },
    
    // Links giáo viên chủ nhiệm (protected links)
    gvcn: {
        // Lấy từ config.js - tự động tính từ SPREADSHEET_ID
        tongketLop: SHEET_LINKS.tongketLop,
        dulieuLop: SHEET_LINKS.dulieuLop,
        lienhePhuHuynh: 'http://lienheph.vercel.app/'
    }
};

// ============================================
// THÔNG TIN KHÁC
// ============================================
const OTHER_INFO = {
    // Thông tin hiển thị trong soyeulilich.html
    soyeulilich: {
        className: '12C1',
        gvcnDisplay: 'Thầy Phong Math',
        gvcnPhone: '0382311919'
    },
    
    // Thông tin hiển thị trong thankyou-syll.html
    thankyouMessage: 'Gửi Thành công rồi. GVCN: Thầy Phong Math!'
};

// ============================================
// EXPORT (nếu sử dụng module)
// ============================================
// Nếu cần sử dụng trong môi trường module:
// export { CLASS_INFO, GVCN_INFO, STUDENTS, TIMETABLE, EXAM_INFO, OTHER_INFO };

