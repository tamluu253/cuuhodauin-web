"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArticleMetadata } from "@/lib/articles";

interface KnowledgeCenterClientProps {
  articles: ArticleMetadata[];
}

const PRINTHEAD_OPTIONS = [
  "Tất cả đầu in",
  "Ricoh",
  "Kyocera",
  "Konica",
  "Epson",
  "CIJ",
  "TIJ",
  "Seiko SPT"
];

const CATEGORY_OPTIONS = [
  "Tất cả danh mục",
  "Cứu Hộ & Phục Hồi Đầu In",
  "Hướng Dẫn Kỹ Thuật & Phục Hồi",
  "Mẹo Bảo Dưỡng Đầu In",
  "Đo Trở Kháng & Kiểm Tra",
  "Quy Trình Thông Tắc"
];

const ITEMS_PER_PAGE = 12;

export default function KnowledgeCenterClient({ articles }: KnowledgeCenterClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrinthead, setSelectedPrinthead] = useState("Tất cả đầu in");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả danh mục");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Articles Calculation
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // 1. Search Query Filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesDesc = article.description.toLowerCase().includes(q);
        const matchesCat = article.category.toLowerCase().includes(q);
        const matchesPrinthead = (article.printhead || "").toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesPrinthead) {
          return false;
        }
      }

      // 2. Printhead Filter
      if (selectedPrinthead !== "Tất cả đầu in") {
        if (article.printhead !== selectedPrinthead) {
          return false;
        }
      }

      // 3. Category Filter
      if (selectedCategory !== "Tất cả danh mục") {
        if (!article.category.toLowerCase().includes(selectedCategory.toLowerCase().substring(0, 8))) {
          return false;
        }
      }

      return true;
    });
  }, [articles, searchQuery, selectedPrinthead, selectedCategory]);

  // Reset pagination when filters change
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePrintheadChange = (ph: string) => {
    setSelectedPrinthead(ph);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <main className="font-sans text-slate-700 bg-slate-50 antialiased min-h-screen">
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur border-b border-navy-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[4.5rem]">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/VNPIS_logo.png"
                alt="VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số"
                className="h-11 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold text-base leading-none">VNPIS LAB</div>
                <div className="text-navy-300 text-xs font-medium">Trung tâm Cứu hộ Đầu in Số 1 VN</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/#quy-trinh-lab" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Quy Trình Lab</Link>
              <Link href="/#dau-in-ho-tro" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Đầu In Hỗ Trợ</Link>
              <Link href="/kien-thuc" className="text-amber-300 hover:text-white text-sm font-bold transition-colors flex items-center gap-1">
                📚 Kho Kiến Thức
              </Link>
              <Link href="/#lien-he" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">Liên Hệ</Link>
            </nav>
            <div className="flex items-center">
              <Link href="/#lien-he" className="px-5 py-2.5 bg-amber-400 text-navy-950 font-bold rounded-xl text-sm hover:bg-amber-300 transition-colors shadow-md hidden lg:inline-flex">
                🚀 Gửi Đầu In Cứu Hộ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-navy-900 py-12 sm:py-16 text-center text-white border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-4 py-1.5 bg-navy-800 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-navy-700">
            Tài Liệu Kỹ Thuật & Giải Pháp Phục Hồi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6">
            Kho {articles.length} Bài Viết Chuyên Ngành Cứu Hộ
          </h1>
          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Tra cứu nhanh các giải pháp xử lý thông nghẹt, đo trở kháng piezo và bảo dưỡng dòng đầu in công nghiệp Ricoh, Kyocera, Konica, Epson, CIJ & TIJ.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Tìm theo tên đầu in (Ricoh, Epson I3200, XP600...), lỗi nghẹt, hóa chất..."
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white text-navy-950 placeholder-slate-400 text-sm font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-4 text-slate-400 hover:text-navy-900 font-bold text-sm"
                  title="Xóa tìm kiếm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[4.5rem] z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          {/* Printhead Filter Tabs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <span>🏷️ Lọc Theo Dòng Đầu In:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {PRINTHEAD_OPTIONS.map((ph) => {
                const isActive = selectedPrinthead === ph;
                return (
                  <button
                    key={ph}
                    onClick={() => handlePrintheadChange(ph)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-navy-900 text-amber-400 shadow-md scale-105"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                    }`}
                  >
                    {ph}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 mb-2.5 flex items-center gap-1.5">
              <span>📂 Lọc Theo Chuyên Mục:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORY_OPTIONS.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-amber-400 text-navy-950 font-bold shadow-sm"
                        : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Articles Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="text-sm font-semibold text-slate-600">
              Hiển thị <span className="text-navy-900 font-extrabold">{filteredArticles.length}</span> / {articles.length} bài viết
            </div>
            {(selectedPrinthead !== "Tất cả đầu in" || selectedCategory !== "Tất cả danh mục" || searchQuery !== "") && (
              <button
                onClick={() => {
                  setSelectedPrinthead("Tất cả đầu in");
                  setSelectedCategory("Tất cả danh mục");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-amber-600 hover:underline"
              >
                🔄 Đặt lại bộ lọc
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Không tìm thấy bài viết phù hợp</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                Thử thay đổi từ khóa tìm kiếm hoặc chọn dòng đầu in khác để xem giải pháp tương ứng.
              </p>
              <button
                onClick={() => {
                  setSelectedPrinthead("Tất cả đầu in");
                  setSelectedCategory("Tất cả danh mục");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-navy-900 text-white font-bold text-sm rounded-xl hover:bg-navy-800 transition-colors shadow-md"
              >
                Xem Toàn Bộ 277 Bài Viết
              </button>
            </div>
          ) : (
            /* Grid Cards */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/kien-thuc/${article.slug}/`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 text-[11px] font-bold rounded-md border border-amber-200">
                        🏷️ {article.printhead || "Khác"}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 text-navy-700 font-bold text-xs inline-flex items-center justify-between group-hover:text-amber-600">
                    <span>Đọc giải pháp chi tiết</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs disabled:opacity-40 hover:bg-slate-50 transition-colors"
              >
                &larr; Trang trước
              </button>
              <span className="px-4 py-2.5 text-xs font-bold text-navy-900">
                Trang {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs disabled:opacity-40 hover:bg-slate-50 transition-colors"
              >
                Trang sau &rarr;
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/VNPIS_logo.png"
              alt="VNPIS Lab"
              className="h-9 w-auto object-contain bg-white rounded-md px-2 py-0.5"
            />
            <div className="text-navy-300 text-xs font-medium text-left">
              <p>CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam</p>
              <p className="text-navy-400 mt-1">🏛️ Trụ sở: 202 Lê Lai, P. Bến Thành, TP.HCM | 🔬 Lab Center: 62 Trần Thị Nơi, P. Chánh Hưng, TP.HCM</p>
            </div>
          </div>
          <p className="text-navy-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} VNPIS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
