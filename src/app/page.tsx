"use client";

import { useState } from "react";

const articlesData: Record<string, { title: string; category: string; summary: string; content: string }> = {
  "ricoh-gen5": {
    title: "Quy Trình Cứu Hộ Đầu In Ricoh Gen5 & Gen6 Bằng Siêu Âm Tần Số Kép",
    category: "Ricoh Gen5/6",
    summary: "Phân tích nguyên nhân lắng cặn mực UV khô, phương pháp vi tuần hoàn kiềm dầu không làm hại màng Piezo bán dẫn.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Ricoh Gen5 (MH5420/5440) và Gen6 (MH5320/5340) là công nghệ đầu phun UV phổ biến nhất trong ngành in công nghiệp. Với cấu trúc màng Piezo bán dẫn siêu mịn, nghẹt mảng bám mực UV khô là sự cố nguy hiểm nhất.</p>
      <h4 class="font-bold text-navy-900 text-base mb-2">Quy trình 4 bước cứu hộ tại VNPIS Lab:</h4>
      <ol class="list-decimal pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li><strong>Chẩn đoán kính hiển vi 1000x:</strong> Kiểm tra xem Nozzle Plate có bị trầy màng mạ Hydrophobic không.</li>
        <li><strong>Sục rửa hoá chất kiềm dầu tuần hoàn:</strong> Bơm dung dịch giải phóng hạt sắc tố UV ở 45°C.</li>
        <li><strong>Siêu âm tần số kép 28kHz/40kHz:</strong> Đánh tan cặn mực không làm bóc tách khoang chứa mực.</li>
        <li><strong>Kiểm tra xung đạn Waterfall:</strong> Đo trở kháng màng Piezo và phát video soi 4K nghiệm thu.</li>
      </ol>
      <div class="p-4 bg-navy-50 rounded-xl text-navy-900 font-semibold text-sm">📞 Hotline tư vấn kỹ thuật Ricoh: 0987 453 866 (Zalo 24/7)</div>
    `
  },
  "kyocera-kj4a": {
    title: "Kỹ Thuật Khôi Phục Đầu In Kyocera KJ4A & Konica Minolta 1024i",
    category: "Kyocera & Konica",
    summary: "Giải pháp cho các dòng đầu in công nghiệp khổ lớn bị sai lệch tia, đứt nét dòng in dữ liệu biến đổi (VDP).",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Kyocera KJ4A (600 dpi) và Konica 1024i (SHE 6pl) sở hữu tốc độ in hàng đầu trong ngành in Dữ liệu biến đổi (VDP) và QR Code bao bì. Việc sử dụng mực trôi nổi có hạt pigment >500nm rất dễ làm nghẹt ống dẫn mực vi mô.</p>
      <h4 class="font-bold text-navy-900 text-base mb-2">Giải pháp xử lý từ VNPIS Lab:</h4>
      <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li>Phục hồi 95% đường in đứt nét, lệch tia bắn.</li>
        <li>Cân chỉnh điện áp sạc piezo theo tiêu chuẩn nhà sản xuất Kyocera & Konica Minolta.</li>
        <li>Cam kết <strong>No Cure - No Pay</strong> (Không phục hồi thành công - Không tính phí).</li>
      </ul>
      <div class="p-4 bg-navy-50 rounded-xl text-navy-900 font-semibold text-sm">🔬 Lab Center: 62 Trần Thị Nơi, P.4, Q.8, TP.HCM</div>
    `
  },
  "epson-i3200": {
    title: "Xử Lý Mất Kênh Phun & Rò Rỉ Vách Ngăn Trên Đầu In Epson I3200",
    category: "Epson I3200/DX5",
    summary: "Hướng dẫn nhận biết tình trạng chập mạch màng film, đứt vách thông kênh và cách phòng ngừa hỏng hóc khi ngâm hoá chất.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Epson I3200-A1/E1/U1 có mật độ vách ngăn rất mỏng. Việc ép xi-lanh xả mực bằng tay với lực nén lớn dễ gây rách vách thông kênh, làm mực màu này tràn sang màu khác.</p>
      <h4 class="font-bold text-navy-900 text-base mb-2">Lời khuyên từ kỹ sư VNPIS:</h4>
      <p class="text-sm text-slate-700 mb-4">Tuyệt đối không dùng dung dịch tẩy rửa chứa Axeton nồng độ cao ngâm ngập đầu in. Hãy mang đến VNPIS Lab để được kiểm tra đo áp suất chân không an toàn.</p>
      <div class="p-4 bg-navy-50 rounded-xl text-navy-900 font-semibold text-sm">📧 Email báo giá: info@vnpis.com | Hotline: 0987 453 866</div>
    `
  },
  "cij-ink": {
    title: "Mực In CIJ & TIJ Chuyên Dụng Cho Máy Videojet, Domino, Linx, HP45",
    category: "Mực In CIJ/TIJ",
    summary: "Bảng thông số mực in date khô nhanh, bám dính siêu cường trên màng PE, túi snack, vỏ chai PET và cáp điện.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">VNPIS cung cấp các dòng mực in phun liên tục CIJ và mực hộp TIJ HP45/45si tương thích 100% với các thương hiệu Videojet, Domino, Linx, Markem-Imaje.</p>
      <h4 class="font-bold text-navy-900 text-base mb-2">Ưu điểm vượt trội:</h4>
      <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li>Khô ngay trong 1-2 giây trên màng PE, túi snack, vỏ chai PET, thủy tinh, kim loại.</li>
        <li>Độ bám dính siêu cường, chịu nhiệt luộc sôi 121°C và kháng cồn alcohol.</li>
        <li>Tiết kiệm 30-40% chi phí so với mực chính hãng mà vẫn bảo vệ béc phun.</li>
      </ul>
    `
  },
  "maintenance-guide": {
    title: "Cẩm Nang Vệ Sinh & Dưỡng Ẩm Đầu In Hàng Ngày Giúp Tăng 300% Tuổi Thọ",
    category: "Bảo Trì Nhà Máy",
    summary: "Quy trình xả đệm dung môi, quản lý độ ẩm xưởng 50-65% và bảo dưỡng định kỳ giảm thiểu rủi ro chết đầu in đột ngột.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Để đầu in phun vận hành bền bỉ trên 3-5 năm, quản trị xưởng sản xuất cần tuân thủ nghiêm ngặt 3 quy tắc sau:</p>
      <ol class="list-decimal pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li>Duy trì độ ẩm môi trường xưởng từ 50% đến 65%.</li>
        <li>Xả đệm mực cuối ca làm việc và dùng cap-top đậy kín bề mặt phun.</li>
        <li>Luôn dùng dung dịch dưỡng ẩm chuyên dụng khi ngưng máy trên 48 giờ.</li>
      </ol>
    `
  },
  "ink-quality": {
    title: "Tác Động Của Mực In Kém Chất Lượng Đến Đầu Phun & Giải Pháp Mực Nano",
    category: "Bảo Trì Nhà Máy",
    summary: "Phân tích thành phần hạt sắc tố pigment, độ nhớt cồn cặn và lý do chọn mực in đạt chuẩn RoHS/REACH bảo vệ màng phun.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Mực in kém chất lượng chứa các hạt pigmet sắc tố thô kích thước >500nm dễ đọng lại ở phần cuống béc phun 20-30um, tạo ra các khối nghẹt mực chai cứng.</p>
      <p class="text-sm text-slate-700 mb-4">VNPIS cung cấp dòng mực lọc nano siêu mịn tiêu chuẩn RoHS/REACH giúp kéo dài tuổi thọ đầu in gấp 3 lần.</p>
    `
  }
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredArticles = Object.entries(articlesData).filter(([_, article]) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ricoh" && article.category === "Ricoh Gen5/6") return true;
    if (activeCategory === "kyocera" && article.category === "Kyocera & Konica") return true;
    if (activeCategory === "epson" && article.category === "Epson I3200/DX5") return true;
    if (activeCategory === "cij-tij" && article.category === "Mực In CIJ/TIJ") return true;
    if (activeCategory === "maintenance" && article.category === "Bảo Trì Nhà Máy") return true;
    return false;
  });

  return (
    <main className="font-sans text-slate-700 bg-white antialiased">
      {/* Header Top Bar */}
      <div className="bg-navy-950 text-navy-300 text-xs py-2 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>🏛️ Trụ sở: 202 Lê Lai, P. Bến Thành, Q.1, TP.HCM</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:inline">🔬 Lab Center: 62 Trần Thị Nơi, P.4, Q.8, TP.HCM</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:0987453866" className="text-amber-400 hover:underline">📞 Hotline/Zalo: 0987 453 866</a>
            <span>&bull;</span>
            <a href="mailto:info@vnpis.com" className="hover:text-white">✉️ info@vnpis.com</a>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur border-b border-navy-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[4.5rem]">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="VNPIS_logo.png"
                alt="VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số"
                className="h-11 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold text-base leading-none">VNPIS LAB</div>
                <div className="text-navy-300 text-xs font-medium">Trung tâm Cứu hộ Đầu in Số 1 VN</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              <a href="#quy-trinh-lab" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Quy Trình Lab</a>
              <a href="#dau-in-ho-tro" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Đầu In Hỗ Trợ</a>
              <a href="#kien-thuc" className="text-amber-300 hover:text-white text-sm font-bold transition-colors flex items-center gap-1">
                📚 Kho 121 Bài Viết
              </a>
              <a href="#tra-cuu-qr" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Tra Cứu QR</a>
              <a href="#lien-he" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Liên Hệ VNPIS</a>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#lien-he" className="px-5 py-2.5 bg-amber-400 text-navy-950 font-bold rounded-xl text-sm hover:bg-amber-300 transition-colors shadow-md">
                🚀 Gửi Đầu In Cứu Hộ
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-navy-100 hover:text-white"
              aria-label="Mở menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-navy-700 pt-3 space-y-1">
              <a href="#quy-trinh-lab" className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Quy Trình Lab</a>
              <a href="#dau-in-ho-tro" className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Đầu In Hỗ Trợ</a>
              <a href="#kien-thuc" className="block px-3 py-2 text-amber-300 font-bold hover:text-white hover:bg-navy-800 rounded-md text-sm">Kho 121 Bài Viết Kỹ Thuật</a>
              <a href="#tra-cuu-qr" className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Tra Cứu QR Video</a>
              <a href="#lien-he" className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Liên Hệ VNPIS</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-navy-900 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-navy-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-amber-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-navy-800 border border-navy-600 text-navy-200 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span>🔬 Chẩn Đoán Soi Nozzle 4K</span>
            <span>&bull;</span>
            <span>⚡ Đo Trở Kháng Piezo</span>
            <span>&bull;</span>
            <span className="text-amber-400">🛡️ No Cure - No Pay</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            VNPIS Lab &mdash; Trung Tâm Cứu Hộ Đầu In Kỹ Thuật Số Số 1 Việt Nam
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-navy-200 font-light max-w-3xl mx-auto leading-relaxed">
            Phục hồi 90%&ndash;98% hiệu suất các dòng đầu in phun công nghiệp <strong className="text-white">Ricoh Gen5/Gen6, Kyocera KJ4A, Konica Minolta 1024i, Epson I3200/DX5, CIJ & TIJ</strong>. Tiết kiệm hàng trăm triệu đồng chi phí mua đầu in mới.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-navy-800/80 px-4 py-2 rounded-xl border border-navy-700">
              <span className="text-amber-400">✓</span> Rửa siêu âm tần số kép 28kHz/40kHz
            </div>
            <div className="flex items-center gap-2 bg-navy-800/80 px-4 py-2 rounded-xl border border-navy-700">
              <span className="text-amber-400">✓</span> Hoá chất vi tuần hoàn tan màng mực UV khô
            </div>
            <div className="flex items-center gap-2 bg-navy-800/80 px-4 py-2 rounded-xl border border-navy-700">
              <span className="text-amber-400">✓</span> Bắn test giọt đạn xung Waterfall thực tế
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#lien-he" className="w-full sm:w-auto px-8 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-xl text-base">
              🚀 Gửi Đầu In Chẩn Đoán Miễn Phí
            </a>
            <a href="#kien-thuc" className="w-full sm:w-auto px-8 py-4 bg-navy-800 text-white font-semibold rounded-xl border border-navy-600 hover:bg-navy-700 transition-colors text-base">
              📚 Đọc 121 Bài Viết Kiến Thức Cứu Hộ
            </a>
          </div>
        </div>
      </section>

      {/* Quy Trình Lab */}
      <section id="quy-trinh-lab" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-navy-100 text-navy-800 text-xs font-bold rounded-full uppercase tracking-wider">Tiêu Chuẩn Phòng Lab</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-3">Quy Trình Cứu Hộ Đầu In 4 Bước Tại VNPIS Lab</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Mọi đầu in tiếp nhận đều được mã hoá QR theo dõi tiến trình và chẩn đoán minh bạch bằng thiết bị đo kiểm chuyên dụng.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center font-bold mb-4">01</div>
              <h3 className="font-bold text-navy-900 text-base mb-2">Soi Nozzle 4K Hiển Vi</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Phóng đại 1000x bề mặt Nozzle Plate. Kiểm tra vết trầy, nghẹt mảng bám UV hoặc đứt vách thông kênh.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center font-bold mb-4">02</div>
              <h3 className="font-bold text-navy-900 text-base mb-2">Đo Trở Kháng Màng Piezo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Đo giá trị Ohm & nF của từng màng rung thạch anh Piezo bán dẫn. Loại trừ nguy cơ chập cháy IC điều khiển.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center font-bold mb-4">03</div>
              <h3 className="font-bold text-navy-900 text-base mb-2">Siêu Âm Tuần Hoàn Áp Âm</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Sục rửa kiềm dầu gia nhiệt 45°C bằng sóng siêu âm 28kHz/40kHz không xâm lấn, giải phóng 98% cặn mực khô.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 bg-amber-400 text-navy-950 font-bold rounded-lg flex items-center justify-center mb-4">04</div>
              <h3 className="font-bold text-navy-900 text-base mb-2">Test Waterfall & Tem QR</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Bắn test giọt đạn xung thực tế. Quay video nghiệm thu 4K đính kèm mã QR tem bảo hành VNPIS Lab.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Đầu In Hỗ Trợ */}
      <section id="dau-in-ho-tro" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Danh Mục Đầu In Phun Công Nghiệp Được Hỗ Trợ Phục Hồi</h2>
            <p className="mt-3 text-slate-600">VNPIS Lab sở hữu bộ gá gá chuyên dụng cho tất cả các dòng đầu in công nghiệp khổ lớn và máy in date.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">Ricoh UV Printhead</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">Ricoh Gen5 / Gen6 / GH2220</h3>
                <p className="text-slate-600 text-sm mb-4">Mã đầu: MH5420, MH5440, MH5320, MH5340. Chuyên trị lỗi nghẹt mực UV khô, mực dầu màng dính.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 98%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full">Kyocera High-Speed</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">Kyocera KJ4A / KJ4B / KJ4C</h3>
                <p className="text-slate-600 text-sm mb-4">KJ4A-TA, KJ4B-QA. Khôi phục tia in dữ liệu biến đổi VDP, đứt nét dòng in tốc độ cao nhà máy.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 95%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-full">Konica Minolta</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">KM1024 / KM1024i / KM1800i</h3>
                <p className="text-slate-600 text-sm mb-4">KM1024i SHE 6pl, KM512. Xử lý lệch tia giọt mực, thông tắc khoang mực nóng gia nhiệt.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 96%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Epson MicroPiezo</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">Epson I3200 / DX5 / DX7 / XP600</h3>
                <p className="text-slate-600 text-sm mb-4">I3200-A1/E1/U1. Phục hồi kênh phun bị mất, sục rửa cặn mực chuyển nhiệt & mực DTF khô cứng.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 92%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">Béc Phun CIJ</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">Videojet, Domino, Linx, Markem-Imaje</h3>
                <p className="text-slate-600 text-sm mb-4">Thông béc Sapphire 50-70um, cân chỉnh điện áp tích điện sạc giọt mực, sục rửa ống dẫn dung môi.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 100%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">Hộp Mực TIJ</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3 mb-2">HP 45 / HP 45si / HP 45sc / 25.4mm</h3>
                <p className="text-slate-600 text-sm mb-4">Phục hồi đầu phun cartridge khô lâu ngày, sục rửa màng nhiệt 600dpi cho mực cồn khô nhanh.</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">Tỷ lệ cứu hộ 100%</span>
                <a href="#lien-he" className="text-xs font-bold text-navy-700 hover:text-navy-900">Báo giá &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kho 121 Bài Viết Kiến Thức & Quảng Cáo */}
      <section id="kien-thuc" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 bg-navy-900 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">Kho 121 Bài Viết Chuyên Ngành Cứu Hộ Đầu In</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mt-3">Tài Liệu Kỹ Thuật, Hướng Dẫn Bảo Trì & Quảng Cáo Sản Phẩm</h2>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
              Tổng hợp toàn bộ kiến thức chuyên sâu về xử lý sự cố nghẹt đầu in, lựa chọn mực in chuyên dụng và quy trình bảo vệ linh kiện ngành in kỹ thuật số.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors ${activeCategory === "all" ? "bg-navy-900 text-white" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Tất cả bài viết
            </button>
            <button
              onClick={() => setActiveCategory("ricoh")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === "ricoh" ? "bg-navy-900 text-white font-bold" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Ricoh Gen5/6
            </button>
            <button
              onClick={() => setActiveCategory("kyocera")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === "kyocera" ? "bg-navy-900 text-white font-bold" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Kyocera & Konica
            </button>
            <button
              onClick={() => setActiveCategory("epson")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === "epson" ? "bg-navy-900 text-white font-bold" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Epson I3200/DX5
            </button>
            <button
              onClick={() => setActiveCategory("cij-tij")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === "cij-tij" ? "bg-navy-900 text-white font-bold" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Mực In CIJ/TIJ
            </button>
            <button
              onClick={() => setActiveCategory("maintenance")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === "maintenance" ? "bg-navy-900 text-white font-bold" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}`}
            >
              Bảo Trì Nhà Máy
            </button>
          </div>

          {/* Grid Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(([key, article]) => (
              <div key={key} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-bold rounded-full">{article.category}</span>
                  <h3 className="text-lg font-bold text-navy-900 mt-3 mb-2">{article.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                </div>
                <button
                  onClick={() => setSelectedArticle(key)}
                  className="text-navy-700 hover:text-navy-900 font-bold text-sm text-left"
                >
                  Đọc bài viết chi tiết &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tra Cứu QR Video */}
      <section id="tra-cuu-qr" className="py-16 sm:py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">Minh Bạch Nghiệm Thu</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Tra Cứu Video Nghiệm Thu Đầu In VNPIS Lab</h2>
            <p className="mt-3 text-navy-200 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Nhập mã QR ghi trên tem bảo hành để xem trực tiếp Video Soi Nozzle 4K và Video Bắn Xung Waterfall thực tế sau phục hồi.
            </p>
          </div>

          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className="w-32 h-32 rounded-xl bg-navy-900 border-2 border-dashed border-navy-600 flex items-center justify-center mx-auto mb-2">
                  <span className="text-4xl">📷</span>
                </div>
                <span className="text-xs text-navy-300">Quét QR trên tem đầu in</span>
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-navy-900/60 p-3 rounded-lg border border-navy-700">
                    <span className="text-amber-400 font-bold block">📹 Video Soi Nozzle 4K</span>
                    <span className="text-navy-300">Phóng đại 1000x kiểm tra béc</span>
                  </div>
                  <div className="bg-navy-900/60 p-3 rounded-lg border border-navy-700">
                    <span className="text-amber-400 font-bold block">🌊 Video Xung Waterfall</span>
                    <span className="text-navy-300">Bắn test giọt đạn kịch bản thực tế</span>
                  </div>
                </div>
                <form
                  className="flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Đã kết nối máy chủ dữ liệu VNPIS Lab! Mã tra cứu hợp lệ.");
                  }}
                >
                  <input
                    type="text"
                    required
                    placeholder="Nhập mã QR hoặc số Serial đầu in..."
                    className="flex-1 px-4 py-3 rounded-xl bg-navy-900 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors text-sm whitespace-nowrap"
                  >
                    Tra Cứu Ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thông Tin Liên Hệ CHÍNH THỨC VNPIS */}
      <section id="lien-he" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="px-4 py-1.5 bg-navy-100 text-navy-800 text-xs font-bold rounded-full uppercase tracking-wider">Thông Tin Liên Hệ Chính Thức</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-3">CÔNG TY TNHH VNPIS</h2>
              <p className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest">Mã số thuế: 0318266611</p>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                Liên hệ gửi đầu in cứu hộ hoặc tư vấn hỗ trợ kỹ thuật tận nơi 24/7 từ đội ngũ kỹ sư VNPIS Lab.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-lg bg-amber-400 text-navy-950 font-bold flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Hotline Kỹ Thuật 24/7 (Zalo)</p>
                    <p className="text-xl font-bold text-navy-900">0987 453 866</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-lg bg-navy-900 text-white font-bold flex items-center justify-center shrink-0 text-xl">✉️</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Email Báo Giá & Tiếp Nhận</p>
                    <p className="text-base font-bold text-navy-900">info@vnpis.com</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wide border-b border-slate-200 pb-2">Hệ Thống Trụ Sở & Phòng Lab Tiếp Nhận</p>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>🏛️ <strong>Trụ sở chính:</strong> Tầng 1, 202 Lê Lai, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
                    <p>🔬 <strong>Lab Center 1 (Phòng Siêu Âm Cứu Hộ):</strong> 62 Trần Thị Nơi, Phường Chánh Hưng (P.4, Q.8), TP. Hồ Chí Minh</p>
                    <p>🏬 <strong>Địa điểm KD 2:</strong> 18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form đăng ký */}
            <form
              className="bg-navy-900 text-white rounded-2xl p-8 space-y-5 shadow-2xl border border-navy-700"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Đã tiếp nhận yêu cầu cứu hộ! Kỹ thuật viên VNPIS Lab sẽ gọi lại tư vấn qua số 0987 453 866.");
              }}
            >
              <h3 className="font-bold text-white text-xl border-b border-navy-700 pb-3">Đăng Ký Cứu Hộ Đầu In (No Cure - No Pay)</h3>
              <div>
                <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Họ và tên người gửi</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Số điện thoại / Zalo liên hệ</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="0987 xxx xxx"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Loại đầu in & Mô tả hiện trạng nghẹt lỗi</label>
                <textarea
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  placeholder="Ví dụ: Ricoh Gen5 — tắc mực UV, đứt tia 2 kênh..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors text-base shadow-xl"
              >
                🚀 Gửi Đầu In Nhận Báo Giá Miễn Phí
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="VNPIS_logo.png"
              alt="VNPIS Lab"
              className="h-9 w-auto object-contain bg-white rounded-md px-2 py-0.5"
            />
            <span className="text-navy-300 text-xs sm:text-sm font-medium">CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam</span>
          </div>
          <p className="text-navy-400 text-xs sm:text-sm">&copy; 2026 VNPIS. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal Article */}
      {selectedArticle && articlesData[selectedArticle] && (
        <div className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative border border-slate-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 font-bold text-xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-navy-900 mb-4">{articlesData[selectedArticle].title}</h3>
            <div dangerouslySetInnerHTML={{ __html: articlesData[selectedArticle].content }} />
          </div>
        </div>
      )}
    </main>
  );
}
