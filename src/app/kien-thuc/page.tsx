import { getAllArticles } from "@/lib/articles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kho 121 Bài Viết Chuyên Ngành Cứu Hộ Đầu In | VNPIS Lab",
  description: "Tổng hợp toàn bộ kiến thức chuyên sâu về xử lý sự cố nghẹt đầu in, lựa chọn mực in chuyên dụng và quy trình bảo vệ linh kiện ngành in kỹ thuật số.",
};

export default function BlogListingPage() {
  const articles = getAllArticles();

  return (
    <main className="font-sans text-slate-700 bg-slate-50 antialiased min-h-screen">
      {/* Header */}
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
      <section className="bg-navy-900 py-16 text-center text-white border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-4 py-1.5 bg-navy-800 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-navy-700">Tài Liệu Kỹ Thuật & Giải Pháp</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6">Kho {articles.length} Bài Viết Chuyên Ngành</h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">Kiến thức chuyên sâu về xử lý sự cố đầu in, lựa chọn mực in chuyên dụng và quy trình bảo vệ thiết bị in kỹ thuật số.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/VNPIS_logo.png" alt="VNPIS Lab" className="h-9 w-auto object-contain bg-white rounded-md px-2 py-0.5" />
            <span className="text-navy-300 text-xs sm:text-sm font-medium">CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam</span>
          </div>
          <p className="text-navy-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} VNPIS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
