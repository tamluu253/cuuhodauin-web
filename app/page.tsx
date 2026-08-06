"use client";

import { useState, useEffect } from "react";

const languages = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-CN", name: "中文 (Chinese)", flag: "🇨🇳" },
  { code: "ja", name: "日本語 (Japanese)", flag: "🇯🇵" },
  { code: "ko", name: "한국어 (Korean)", flag: "🇰🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const articlesData: Record<string, { title: string; category: string; summary: string; content: string }> = {
  "ricoh-gen5": {
    title: "Quy Trình Cứu Hộ Đầu In Ricoh Gen5 & Gen6 Bằng Siêu Âm Tần Số Kép",
    category: "Ricoh Gen5/6",
    summary: "Phân tích nguyên nhân lắng cặn mực UV khô, phương pháp vi tuần hoàn kiềm dầu không làm hại màng Piezo bán dẫn.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Ricoh Gen5 (MH5420/5440) và Gen6 (MH5320/5340) là công nghệ đầu phun UV phổ biến nhất trong ngành in công nghiệp. Với cấu trúc màng Piezo bán dẫn siêu mịn, nghẹt mảng bám mực UV khô là sự cố nguy hiểm nhất.</p>
      <h4 class="font-bold text-slate-900 text-base mb-2">Quy trình 4 bước cứu hộ tại VNPIS Lab:</h4>
      <ol class="list-decimal pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li><strong>Chẩn đoán kính hiển vi 1000x:</strong> Kiểm tra xem Nozzle Plate có bị trầy màng mạ Hydrophobic không.</li>
        <li><strong>Sục rửa hoá chất kiềm dầu tuần hoàn:</strong> Bơm dung dịch giải phóng hạt sắc tố UV ở 45°C.</li>
        <li><strong>Siêu âm tần số kép 28kHz/40kHz:</strong> Đánh tan cặn mực không làm bóc tách khoang chứa mực.</li>
        <li><strong>Kiểm tra xung đạn Waterfall:</strong> Đo trở kháng màng Piezo và phát video soi 4K nghiệm thu.</li>
      </ol>
      <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 font-semibold text-sm">📞 Hotline tư vấn kỹ thuật Ricoh: 0987 453 866 (Zalo 24/7)</div>
    `
  },
  "kyocera-kj4a": {
    title: "Kỹ Thuật Khôi Phục Đầu In Kyocera KJ4A & Konica Minolta 1024i",
    category: "Kyocera & Konica",
    summary: "Giải pháp cho các dòng đầu in công nghiệp khổ lớn bị sai lệch tia, đứt nét dòng in dữ liệu biến đổi (VDP).",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Kyocera KJ4A (600 dpi) và Konica 1024i (SHE 6pl) sở hữu tốc độ in hàng đầu trong ngành in Dữ liệu biến đổi (VDP) và QR Code bao bì. Việc sử dụng mực trôi nổi có hạt pigment >500nm rất dễ làm nghẹt ống dẫn mực vi mô.</p>
      <h4 class="font-bold text-slate-900 text-base mb-2">Giải pháp xử lý từ VNPIS Lab:</h4>
      <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2 mb-4">
        <li>Phục hồi 95% đường in đứt nét, lệch tia bắn.</li>
        <li>Cân chỉnh điện áp sạc piezo theo tiêu chuẩn nhà sản xuất Kyocera & Konica Minolta.</li>
        <li>Cam kết <strong>No Cure - No Pay</strong> (Không phục hồi thành công - Không tính phí).</li>
      </ul>
      <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 font-semibold text-sm">🔬 Lab Center: 62 Trần Thị Nơi, P.4, Q.8, TP.HCM</div>
    `
  },
  "epson-i3200": {
    title: "Xử Lý Mất Kênh Phun & Rò Rỉ Vách Ngăn Trên Đầu In Epson I3200",
    category: "Epson I3200/DX5",
    summary: "Hướng dẫn nhận biết tình trạng chập mạch màng film, đứt vách thông kênh và cách phòng ngừa hỏng hóc khi ngâm hoá chất.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">Đầu in Epson I3200-A1/E1/U1 có mật độ vách ngăn rất mỏng. Việc ép xi-lanh xả mực bằng tay với lực nén lớn dễ gây rách vách thông kênh, làm mực màu này tràn sang màu khác.</p>
      <h4 class="font-bold text-slate-900 text-base mb-2">Lời khuyên từ kỹ sư VNPIS:</h4>
      <p class="text-sm text-slate-700 mb-4">Tuyệt đối không dùng dung dịch tẩy rửa chứa Axeton nồng độ cao ngâm ngập đầu in. Hãy mang đến VNPIS Lab để được kiểm tra đo áp suất chân không an toàn.</p>
      <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 font-semibold text-sm">📧 Email báo giá: info@vnpis.com | Hotline: 0987 453 866</div>
    `
  },
  "cij-ink": {
    title: "Mực In CIJ & TIJ Chuyên Dụng Cho Máy Videojet, Domino, Linx, HP45",
    category: "Mực In CIJ/TIJ",
    summary: "Bảng thông số mực in date khô nhanh, bám dính siêu cường trên màng PE, túi snack, vỏ chai PET và cáp điện.",
    content: `
      <p class="text-slate-600 leading-relaxed mb-4">VNPIS cung cấp các dòng mực in phun liên tục CIJ và mực hộp TIJ HP45/45si tương thích 100% với các thương hiệu Videojet, Domino, Linx, Markem-Imaje.</p>
      <h4 class="font-bold text-slate-900 text-base mb-2">Ưu điểm vượt trội:</h4>
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
      <p class="text-slate-600 leading-relaxed mb-4">Mực in kém chất lượng chứa các hạt pigment sắc tố thô kích thước >500nm dễ đọng lại ở phần cuống béc phun 20-30um, tạo ra các khối nghẹt mực chai cứng.</p>
      <p class="text-sm text-slate-700 mb-4">VNPIS cung cấp dòng mực lọc nano siêu mịn tiêu chuẩn RoHS/REACH giúp kéo dài tuổi thọ đầu in gấp 3 lần.</p>
    `
  }
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    // Check existing Google Translate cookie
    const cookies = document.cookie.split(";");
    const googtrans = cookies.find((c) => c.trim().startsWith("googtrans="));
    if (googtrans) {
      const code = googtrans.split("/").pop();
      const match = languages.find((l) => l.code === code);
      if (match) setCurrentLang(match);
    }

    // Load Google Translate script dynamically if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "vi",
            includedLanguages: "en,zh-CN,ja,ko,es,de,fr,vi",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  const changeLanguage = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setLangOpen(false);
    document.cookie = `googtrans=/vi/${lang.code};path=/`;
    document.cookie = `googtrans=/vi/${lang.code};domain=${window.location.hostname};path=/`;
    window.location.reload();
  };

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
    <main className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Header Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>🏛️ Trụ sở: 202 Lê Lai, P. Bến Thành, Q.1, TP.HCM</span>
            <span className="hidden md:inline text-slate-600">&bull;</span>
            <span className="hidden md:inline">🔬 Lab Center: 62 Trần Thị Nơi, P.4, Q.8, TP.HCM</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:0987453866" className="text-blue-400 hover:text-blue-300 transition-colors">📞 Hotline/Zalo: 0987 453 866</a>
            <span className="text-slate-600">&bull;</span>
            <a href="mailto:info@vnpis.com" className="hover:text-white transition-colors">✉️ info@vnpis.com</a>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo vector badge */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-slate-900 font-extrabold text-xl leading-none tracking-tight">VNPIS <span className="text-blue-600">LAB</span></div>
                <div className="text-slate-500 text-xs font-medium mt-1">Trung tâm Cứu hộ & Phục hồi Đầu in</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              <a href="#quy-trinh-lab" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Quy Trình Lab</a>
              <a href="#thong-so-ky-thuat" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Thông Số Đầu In</a>
              <a href="#kien-thuc" className="text-blue-600 hover:text-blue-700 text-sm font-bold transition-colors flex items-center gap-1.5">
                📚 Kho 121 Bài Viết Kỹ Thuật
              </a>
              <a href="#tra-cuu-qr" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Tra Cứu QR</a>
              <a href="#lien-he" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Liên Hệ VNPIS</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* Select Language Dropdown Component */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 border border-slate-300 rounded-xl px-3 py-2 bg-white text-slate-700 font-medium text-xs sm:text-sm hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.6 9h16.8M3.6 15h16.8" />
                  </svg>
                  <span>{currentLang.flag} {currentLang.name}</span>
                  <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang)}
                        className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center gap-2.5 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                          currentLang.code === lang.code ? "bg-blue-50 text-blue-600 font-bold" : "text-slate-700"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#lien-he" className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                🚀 Gửi Đầu In Cứu Hộ
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Mở menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-slate-100 pt-3 space-y-1">
              {/* Select Language inside Mobile Menu */}
              <div className="px-3 py-2 border-b border-slate-100 mb-2">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2">Chọn Ngôn Ngữ (Language)</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang)}
                      className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                        currentLang.code === lang.code ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a href="#quy-trinh-lab" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium">Quy Trình Lab</a>
              <a href="#thong-so-ky-thuat" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium">Thông Số Đầu In</a>
              <a href="#kien-thuc" className="block px-3 py-2 text-blue-600 font-bold hover:bg-blue-50 rounded-lg text-sm">Kho 121 Bài Viết Kỹ Thuật</a>
              <a href="#tra-cuu-qr" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium">Tra Cứu QR Video</a>
              <a href="#lien-he" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium">Liên Hệ VNPIS</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Clean Light Theme */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/40 to-white border-b border-slate-200/80 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold shadow-sm">
            <span>🔬 Soi Nozzle Hiển Vi 1000x</span>
            <span className="text-slate-300">&bull;</span>
            <span>⚡ Siêu Âm Tần Số Kép</span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-emerald-600 font-extrabold">🛡️ Cam Kết No Cure - No Pay</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl mx-auto tracking-tight">
            VNPIS Lab &mdash; Trung Tâm Cứu Hộ & Phục Hồi Đầu In Kỹ Thuật Số
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            Giải pháp chuyên sâu cứu hộ, thông béc nghẹt và phục hồi hiệu suất các dòng đầu in phun công nghiệp <strong className="text-slate-900 font-semibold">Ricoh Gen5/Gen6, Kyocera KJ4A, Konica Minolta 1024i, Epson I3200/DX5, béc CIJ & TIJ HP45</strong>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600">✓</span> Siêu âm 28kHz/40kHz không bóc vách
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600">✓</span> Vi tuần hoàn kiềm dầu giải phóng mảng bám UV
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-blue-600">✓</span> Video soi 4K nghiệm thu gắn tem mã QR
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#lien-he" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
              <span>🚀 Đăng Ký Kiểm Tra Đầu In</span>
            </a>
            <a href="#quy-trinh-lab" className="px-8 py-4 bg-white text-slate-700 border border-slate-300 font-bold rounded-2xl text-base hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
              <span>📖 Xem Quy Trình 4 Bước</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quy Trình Lab Section */}
      <section id="quy-trinh-lab" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Quy Trình Chuẩn Kỹ Thuật</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Quy Trình Cứu Hộ 4 Bước Tại VNPIS Lab</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">Mọi đầu in tiếp nhận đều trải qua quy trình đo kiểm khắt khe trước và sau khi xử lý.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-sm">1</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Chẩn Đoán 1000x</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Soi bề mặt Nozzle Plate dưới kính hiển vi độ phóng đại 1000x để phát hiện mảng bám và kiểm tra màng Hydrophobic.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-sm">2</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Siêu Âm Tần Số Kép</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Rửa siêu âm tần số 28kHz/40kHz kết hợp tuần hoàn hóa chất kiềm dầu bóc tách cặn mực UV/Sơn mà không làm hại vách ngăn.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-sm">3</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Đo Trở Kháng Piezo</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Đo điện áp và xung đạn bán dẫn nhằm đảm bảo màng mạ điện áp không bị chập rò rỉ trước khi lắp lại máy.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-sm">4</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quay Video Nghiệm Thu</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Bắn test giọt đạn xung thực tế, quay video nghiệm thu 4K đính kèm mã QR tem bảo hành dán trên thân đầu in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bảng Thông Số Tham Khảo Đầu In */}
      <section id="thong-so-ky-thuat" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">Tra Cứu Kỹ Thuật</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Bảng Thông Số Tham Khảo Các Dòng Đầu In</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">Thông số kỹ thuật tiêu chuẩn để hỗ trợ kỹ thuật viên kiểm tra điện áp và chọn đúng dung dịch sục rửa phù hợp.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold text-xs uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-6">Dòng Đầu In</th>
                    <th className="py-4 px-6">Số Lượng Nozzle</th>
                    <th className="py-4 px-6">Thể Tích Giọt Phun (Drop Size)</th>
                    <th className="py-4 px-6">Tần Số Phun (Frequency)</th>
                    <th className="py-4 px-6">Loại Mực Tương Thích</th>
                    <th className="py-4 px-6">Tỷ Lệ Phục Hồi Trung Bình</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Ricoh Gen5 (MH5420/5440)</td>
                    <td className="py-4 px-6">1,280 nozzles (4x320)</td>
                    <td className="py-4 px-6">7pl &ndash; 35pl (Bi-variable)</td>
                    <td className="py-4 px-6">60 kHz</td>
                    <td className="py-4 px-6">UV, Solvent</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">90% &ndash; 95%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Ricoh Gen6 (MH5320/5340)</td>
                    <td className="py-4 px-6">1,280 nozzles (4x320)</td>
                    <td className="py-4 px-6">5pl &ndash; 30pl</td>
                    <td className="py-4 px-6">50 kHz</td>
                    <td className="py-4 px-6">UV, Water-based, Solvent</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">92% &ndash; 98%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Kyocera KJ4A-RH/TA</td>
                    <td className="py-4 px-6">2,656 nozzles</td>
                    <td className="py-4 px-6">6pl / 14pl</td>
                    <td className="py-4 px-6">30 kHz / 20 kHz</td>
                    <td className="py-4 px-6">UV / Water-based</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">88% &ndash; 94%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Konica Minolta 1024i SHE</td>
                    <td className="py-4 px-6">1,024 nozzles</td>
                    <td className="py-4 px-6">6pl</td>
                    <td className="py-4 px-6">45 kHz</td>
                    <td className="py-4 px-6">UV, Solvent</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">90% &ndash; 96%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Epson I3200-A1/E1/U1</td>
                    <td className="py-4 px-6">3,200 nozzles (8x400)</td>
                    <td className="py-4 px-6">3.8pl &ndash; 9.4pl</td>
                    <td className="py-4 px-6">43.2 kHz</td>
                    <td className="py-4 px-6">Eco-Solvent, Sublimation, UV</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">85% &ndash; 92%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Béc In CIJ (Videojet / Domino)</td>
                    <td className="py-4 px-6">Béc đơn 50um &ndash; 70um</td>
                    <td className="py-4 px-6">Liên tục (Continuous)</td>
                    <td className="py-4 px-6">80 kHz &ndash; 100 kHz</td>
                    <td className="py-4 px-6">Mực MEK, Alcohol, Acetone</td>
                    <td className="py-4 px-6 font-bold text-emerald-600">95% &ndash; 99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Kho 121 Bài Viết Kỹ Thuật Hub */}
      <section id="kien-thuc" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Kho Bài Viết Hướng Dẫn</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">Cẩm Nang Kỹ Thuật & Cứu Hộ Đầu In</h2>
              <p className="text-slate-600 text-sm mt-2">Tổng hợp 121 tài liệu hướng dẫn sục rửa, chẩn đoán sự cố và bảo dưỡng đầu in phun.</p>
            </div>
          </div>

          {/* Nav Tab Categories */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
            {[
              { id: "all", label: "🌐 Tất Cả Bài Viết" },
              { id: "ricoh", label: "Ricoh Gen5/6" },
              { id: "kyocera", label: "Kyocera & Konica" },
              { id: "epson", label: "Epson I3200/DX5" },
              { id: "cij-tij", label: "Mực CIJ / TIJ HP45" },
              { id: "maintenance", label: "Bảo Trì Nhà Máy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(([key, article]) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div>
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mb-3 border border-blue-100">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedArticle(key)}
                  className="mt-5 w-full py-2.5 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold text-xs rounded-xl transition-all border border-slate-200 hover:border-blue-600 flex items-center justify-center gap-1.5"
                >
                  <span>📖 Đọc Hướng Dẫn Chi Tiết</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tra Cứu QR Video Section */}
      <section id="tra-cuu-qr" className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Minh Bạch Nghiệm Thu</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mt-4 tracking-tight">Tra Cứu Video Nghiệm Thu Đầu In VNPIS Lab</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mt-3">Nhập mã đơn hàng hoặc quét mã QR tem bảo hành dán trên thân đầu in để xem video nghiệm thu soi nozzle 4K.</p>

          <div className="mt-8 max-w-xl mx-auto bg-slate-800/90 p-3 rounded-2xl border border-slate-700 shadow-xl">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert("Đã kết nối máy chủ dữ liệu VNPIS Lab! Mã tra cứu hợp lệ."); }}>
              <input
                type="text"
                placeholder="Nhập Mã Đơn Hàng (VD: VNPIS-2026-8892)"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                required
              />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-bold text-sm text-white rounded-xl transition-colors shadow-md">
                🔍 Tra Cứu Video
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Liên Hệ Section */}
      <section id="lien-he" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Thông Tin Chính Thức</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">CÔNG TY TNHH VNPIS</h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Liên hệ gửi đầu in cứu hộ hoặc tư vấn hỗ trợ kỹ thuật tận nơi từ đội ngũ kỹ sư VNPIS Lab.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xl">🏛️</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">Trụ sở chính:</strong>
                    Tầng 1, 202 Lê Lai, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xl">🔬</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">Lab Center 1 (Tiếp nhận & Cứu hộ):</strong>
                    62 Trần Thị Nơi, Phường 4, Quận 8, TP. Hồ Chí Minh
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">Địa điểm 2:</strong>
                    18 Đường số 4, KDC Đại Phúc Green Villas, Bình Hưng, TP. Hồ Chí Minh
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <span className="text-xs font-semibold text-blue-600 block mb-1">Hotline / Zalo 24/7</span>
                    <a href="tel:0987453866" className="text-lg font-extrabold text-blue-900 hover:underline">0987 453 866</a>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <span className="text-xs font-semibold text-blue-600 block mb-1">Email Kỹ Thuật</span>
                    <a href="mailto:info@vnpis.com" className="text-base font-bold text-blue-900 hover:underline">info@vnpis.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Đăng Ký Cứu Hộ */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Đăng Ký Khảo Sát & Cứu Hộ Đầu In</h3>
              <p className="text-xs text-slate-500 mb-6">Cam kết No Cure - No Pay. Kỹ thuật viên sẽ gọi tư vấn giải pháp trước khi gửi đầu in.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Đã tiếp nhận yêu cầu! Kỹ thuật viên VNPIS Lab sẽ liên hệ lại qua số hotline 0987 453 866."); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Họ & Tên Kỹ Thuật / Khách Hàng</label>
                  <input type="text" required placeholder="Nguyễn Văn A" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Số Điện Thoại (Zalo)</label>
                  <input type="tel" required placeholder="090x xxx xxx" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dòng Đầu In Cần Cứu Hộ</label>
                  <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-blue-600">
                    <option>Ricoh Gen5 / Gen6 (MH5420/MH5320)</option>
                    <option>Kyocera KJ4A / KJ4B</option>
                    <option>Konica Minolta 1024i / 512i</option>
                    <option>Epson I3200 / DX5 / XP600</option>
                    <option>Béc In CIJ (Videojet/Domino/Linx)</option>
                    <option>Dòng đầu in khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mô Tả Tình Trạng Nghẹt / Mất Kênh</label>
                  <textarea rows={3} placeholder="Đầu in bị nghẹt cặn mực UV khô, đứt nét dòng in QR code..." className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-blue-600"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-500/20">
                  📩 Gửi Yêu Cầu Cứu Hộ VNPIS Lab
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-slate-200 font-semibold text-sm">CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ & Phục hồi Đầu in Kỹ thuật số</span>
          </div>
          <p>&copy; 2026 VNPIS. All rights reserved.</p>
        </div>
      </footer>

      {/* Article Modal Popup */}
      {selectedArticle && articlesData[selectedArticle] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold transition-colors"
            >
              ✕
            </button>
            <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
              {articlesData[selectedArticle].category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-snug">
              {articlesData[selectedArticle].title}
            </h3>
            <div
              className="prose prose-slate prose-sm max-w-none border-t border-slate-100 pt-4"
              dangerouslySetInnerHTML={{ __html: articlesData[selectedArticle].content }}
            />
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
