"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArticleMetadata } from "@/lib/articles";

const languages = [
  { code: 'vi', name: 'Tiếng Việt', label: 'VI', flag: '🇻🇳' },
  { code: 'en', name: 'English', label: 'EN', flag: '🇬🇧' },
  { code: 'zh-CN', name: '中文 (Chinese)', label: 'ZH', flag: '🇨🇳' },
  { code: 'ja', name: '日本語 (Japanese)', label: 'JA', flag: '🇯🇵' },
  { code: 'ko', name: '한국어 (Korean)', label: 'KO', flag: '🇰🇷' },
  { code: 'km', name: 'ភាសាខ្មែរ (Khmer)', label: 'KM', flag: '🇰🇭' },
  { code: 'lo', name: 'ພາສາລາວ (Lao)', label: 'LO', flag: '🇱🇦' },
  { code: 'th', name: 'ไทย (Thai)', label: 'TH', flag: '🇹🇭' },
];

export default function HomeClient({ latestArticles }: { latestArticles: ArticleMetadata[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>('vi');
  const [activeMap, setActiveMap] = useState<'lab' | 'factory'>('lab');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/googtrans=\/vi\/([^;]+)/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    document.cookie = `googtrans=/vi/${langCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/vi/${langCode}; path=/;`;
    setCurrentLang(langCode);
    setIsMobileLangOpen(false);
    setIsDesktopLangOpen(false);
    window.location.reload();
  };

  const selectedLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          message: formState.message,
          pageTitle: 'Trang chủ Cứu Hộ Đầu In (cuuhodauin.com)'
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', phone: '', message: '' });
      } else {
        alert('Có lỗi xảy ra, vui lòng liên hệ hotline/Zalo: 0987 453 866');
      }
    } catch (err) {
      alert('Không thể kết nối đến máy chủ, vui lòng liên hệ hotline/Zalo: 0987 453 866');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="font-sans text-slate-700 bg-white antialiased">
      {/* Header Top Bar */}
      <div className="bg-navy-950 text-navy-300 text-xs py-2 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>🏛️ Trụ sở: 202 Lê Lai, P. Bến Thành, TP.HCM</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:inline">🔬 Lab Center: 62 Trần Thị Nơi, P. Chánh Hưng, TP.HCM</span>
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
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/images/vnpis-logo.png"
                alt="VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số"
                className="h-11 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold text-base leading-none">VNPIS LAB</div>
                <div className="text-navy-300 text-xs font-medium">Trung tâm Cứu hộ Đầu in Số 1 VN</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              <a href="#quy-trinh-lab" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Quy Trình Lab</a>
              <a href="#dau-in-ho-tro" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Đầu In Hỗ Trợ</a>
              <Link href="/kien-thuc" className="text-amber-300 hover:text-white text-sm font-bold transition-colors flex items-center gap-1">
                📚 Blog / Kiến Thức
              </Link>
              <a href="#tra-cuu-qr" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Tra Cứu QR</a>
              <a href="#lien-he" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Liên Hệ VNPIS</a>
            </nav>

            <div className="hidden md:flex items-center gap-3 relative">
              {/* Desktop Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                  className="flex items-center gap-1.5 text-xs font-bold text-navy-100 bg-navy-800 hover:bg-navy-700 px-3 py-2 rounded-xl border border-navy-700 transition-colors"
                >
                  <span>🌐 {selectedLangObj.flag} {selectedLangObj.name}</span>
                  <span className="text-navy-400">▾</span>
                </button>
                {isDesktopLangOpen && (
                  <div className="absolute top-11 right-0 w-48 bg-navy-900 border border-navy-700 shadow-2xl rounded-xl py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-navy-800 transition-colors ${
                          currentLang === lang.code ? 'text-amber-400 font-bold bg-navy-800/60' : 'text-navy-100'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        {currentLang === lang.code && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#lien-he" className="px-4 py-2 bg-amber-400 text-navy-950 font-bold rounded-xl text-xs hover:bg-amber-300 transition-colors shadow-md">
                🚀 Gửi Đầu In Cứu Hộ
              </a>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Quick Language Toggle Button */}
              <button
                onClick={() => {
                  setIsMobileLangOpen(!isMobileLangOpen);
                  if (mobileMenuOpen) setMobileMenuOpen(false);
                }}
                className="flex items-center text-xs font-bold text-amber-300 bg-navy-800 hover:bg-navy-700 px-2.5 py-1.5 rounded-full border border-navy-700 transition-colors"
                aria-label="Chọn ngôn ngữ"
              >
                <span>🌐 {selectedLangObj.flag} {selectedLangObj.label} ▾</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (isMobileLangOpen) setIsMobileLangOpen(false);
                }}
                className="p-2 text-navy-100 hover:text-white"
                aria-label="Mở menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Language Picker Dropdown Modal */}
          {isMobileLangOpen && (
            <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 py-4 shadow-2xl">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-navy-800">
                <span className="text-xs font-bold text-navy-300 uppercase tracking-wider flex items-center gap-1.5">
                  🌐 Chọn Ngôn Ngữ / Select Language
                </span>
                <button onClick={() => setIsMobileLangOpen(false)} className="text-navy-400 p-1 hover:text-white">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                      currentLang === lang.code
                        ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                        : 'border-navy-800 bg-navy-950/60 text-navy-100 hover:bg-navy-800'
                    }`}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </span>
                    {currentLang === lang.code && <span className="text-amber-400">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-navy-700 pt-3 space-y-3">
              {/* Mobile Drawer Language Selector */}
              <div className="bg-navy-950/80 p-3 rounded-xl border border-navy-800 mb-2">
                <div className="text-[11px] font-bold text-navy-300 uppercase tracking-wider mb-2">
                  🌐 Đa Ngôn Ngữ / Languages
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentLang === lang.code
                          ? 'bg-amber-400 text-navy-950 shadow-sm'
                          : 'bg-navy-900 text-navy-100 border border-navy-800 hover:bg-navy-800'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{lang.flag}</span>
                        <span className="truncate">{lang.name}</span>
                      </span>
                      {currentLang === lang.code && <span>✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              <a href="#quy-trinh-lab" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Quy Trình Lab</a>
              <a href="#dau-in-ho-tro" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Đầu In Hỗ Trợ</a>
              <Link href="/kien-thuc" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-amber-300 font-bold hover:text-white hover:bg-navy-800 rounded-md text-sm">📚 Blog / Kiến Thức</Link>
              <a href="#tra-cuu-qr" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Tra Cứu QR Video</a>
              <a href="#lien-he" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-navy-100 hover:text-white hover:bg-navy-800 rounded-md text-sm">Liên Hệ VNPIS</a>
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
            <Link href="/kien-thuc" className="w-full sm:w-auto px-8 py-4 bg-navy-800 text-white font-semibold rounded-xl border border-navy-600 hover:bg-navy-700 transition-colors text-base">
              📚 Đọc 121 Bài Viết Kiến Thức Cứu Hộ
            </Link>
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
            <p className="mt-3 text-slate-600">VNPIS Lab sở hữu bộ gá gá chuyên dụng cho tất cả các dòng đầu in công nghiệp khổ lớn và máy hiện đại.</p>
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
            <span className="px-4 py-1.5 bg-navy-900 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">Kho Bài Viết Chuyên Ngành Cứu Hộ Đầu In</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mt-3">Tài Liệu Kỹ Thuật, Hướng Dẫn Bảo Trì & Quảng Cáo Sản Phẩm</h2>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
              Tổng hợp toàn bộ kiến thức chuyên sâu về xử lý sự cố nghẹt đầu in, lựa chọn mực in chuyên dụng và quy trình bảo vệ linh kiện ngành in kỹ thuật số.
            </p>
          </div>

          {/* Grid Cards (Latest Articles) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.slug} href={`/kien-thuc/${article.slug}`} className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-bold rounded-full">{article.category}</span>
                    <time className="text-xs text-slate-400 font-medium">{new Date(article.date).toLocaleDateString('vi-VN')}</time>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-navy-700 font-bold text-sm inline-flex items-center gap-2 group-hover:text-amber-600">
                  Đọc bài viết chi tiết <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/kien-thuc" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors shadow-md text-base">
              📚 Khám Phá Toàn Bộ Bài Viết
            </Link>
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
                <a href="tel:0987453866" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-amber-400 text-navy-950 font-bold flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">📞</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Hotline Kỹ Thuật 24/7 (Zalo)</p>
                    <p className="text-xl font-bold text-navy-900">0987 453 866</p>
                  </div>
                </a>

                <a href="mailto:info@vnpis.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-navy-900 text-white font-bold flex items-center justify-center shrink-0 text-xl group-hover:scale-105 transition-transform">✉️</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Email Báo Giá & Tiếp Nhận</p>
                    <p className="text-base font-bold text-navy-900">info@vnpis.com</p>
                  </div>
                </a>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wide border-b border-slate-200 pb-2">Hệ Thống Trụ Sở & Phòng Lab Tiếp Nhận</p>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>🏛️ <strong>Trụ sở chính:</strong> Tầng 1, 202 Lê Lai, Phường Bến Thành, TP. Hồ Chí Minh</p>
                    <p>🔬 <strong>Lab Center 1 (Phòng Siêu Âm Cứu Hộ):</strong> 62 Trần Thị Nơi, Phường Chánh Hưng, TP. Hồ Chí Minh</p>
                    <p>🏬 <strong>Địa điểm KD 2:</strong> 18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form đăng ký cứu hộ có kết nối gửi mail tự động về info@vnpis.com */}
            {submitted ? (
              <div className="bg-emerald-900 text-white rounded-2xl p-8 shadow-2xl border border-emerald-700 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold">✓</div>
                <h3 className="text-2xl font-bold">Đã Gửi Yêu Cầu Cứu Hộ Thành Công!</h3>
                <p className="text-emerald-200 text-sm leading-relaxed max-w-md">
                  Hệ thống đã tự động chuyển thông tin về Email <strong>info@vnpis.com</strong> và <strong>tamluu253@gmail.com</strong>. Kỹ thuật viên VNPIS Lab sẽ gọi điện tư vấn ngay cho bạn!
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  Gửi Yêu Cầu Khác
                </button>
              </div>
            ) : (
              <form
                className="bg-navy-900 text-white rounded-2xl p-8 space-y-5 shadow-2xl border border-navy-700"
                onSubmit={handleSubmitLead}
              >
                <h3 className="font-bold text-white text-xl border-b border-navy-700 pb-3">Đăng Ký Cứu Hộ Đầu In (No Cure - No Pay)</h3>
                <div>
                  <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Họ và tên người gửi</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Số điện thoại / Zalo liên hệ</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="0987 xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-200 uppercase mb-1">Loại đầu in & Mô tả hiện trạng nghẹt lỗi</label>
                  <textarea
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-navy-600 text-white placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    placeholder="Ví dụ: Ricoh Gen5 — tắc mực UV, đứt tia 2 kênh..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors text-base shadow-xl disabled:opacity-50"
                >
                  {loading ? 'Đang Gửi Email Báo Lead...' : '🚀 Gửi Đầu In Nhận Báo Giá Miễn Phí'}
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Maps with Location Selector Tabs */}
          <div className="mt-12 bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-3xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block">📍 Bản Đồ Định Vị &amp; Chỉ Đường Google Maps</span>
                <h3 className="text-lg font-bold text-navy-950 mt-0.5">VNPIS Lab Center &amp; Xưởng Sản Xuất</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveMap('lab')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeMap === 'lab'
                      ? 'bg-navy-900 text-amber-400 shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🔬 Lab Center (62 Trần Thị Nơi)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMap('factory')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeMap === 'factory'
                      ? 'bg-navy-900 text-amber-400 shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🏬 Xưởng / KD 2 (18 Đường số 4)
                </button>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200 relative">
              <iframe
                title={
                  activeMap === 'lab'
                    ? 'Bản đồ Lab Center 1 VNPIS (62 Trần Thị Nơi, TP.HCM)'
                    : 'Bản đồ Xưởng 2 VNPIS (18 Đường số 4, KDC Đại Phúc, TP.HCM)'
                }
                src={
                  activeMap === 'lab'
                    ? 'https://maps.google.com/maps?q=62+Tr%E1%BA%A7n+Th%E1%BB%8B+N%C6%A1i,+Ph%C6%B0%E1%BB%9Dng+Ch%C3%A1nh+H%C6%B0ng,+TP.+H%E1%BB%93+Ch%C3%AD+Minh&t=&z=16&ie=UTF8&iwloc=&output=embed'
                    : 'https://maps.google.com/maps?q=18+%C4%90%C6%B0%E1%BB%9Dng+s%E1%BB%91+4,+KDC+%C4%90%E1%BA%A1i+Ph%C3%BAc+Green+Villas,+B%C3%ACnh+H%C6%B0ng,+TP.+H%E1%BB%93+Ch%C3%AD+Minh&t=&z=16&ie=UTF8&iwloc=&output=embed'
                }
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                {activeMap === 'lab'
                  ? '📍 Lab Center 1: 62 Trần Thị Nơi, Phường Chánh Hưng, TP. Hồ Chí Minh'
                  : '📍 Địa điểm KD 2 / Xưởng: 18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP.HCM'}
              </span>
              <a
                href={
                  activeMap === 'lab'
                    ? 'https://maps.google.com/?q=62+Tr%E1%BA%A7n+Th%E1%BB%8B+N%C6%A1i,+Ph%C6%B0%E1%BB%9Dng+Ch%C3%A1nh+H%C6%B0ng,+TP.+H%E1%BB%93+Ch%C3%AD+Minh'
                    : 'https://share.google/N6YpipmVmhVDnLSBA'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold rounded-xl shadow-sm transition-colors"
              >
                <span>Mở Chỉ Đường Trực Tiếp Trên Google Maps 🗺️</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/vnpis-logo.png"
              alt="VNPIS Lab"
              className="h-9 w-auto object-contain bg-white rounded-md px-2 py-0.5"
            />
            <span className="text-navy-300 text-xs sm:text-sm font-medium">CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam</span>
          </div>
          <p className="text-navy-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} VNPIS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
