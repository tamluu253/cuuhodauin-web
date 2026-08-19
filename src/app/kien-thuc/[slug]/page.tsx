import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Không tìm thấy bài viết" };
  
  return {
    title: `${article.metadata.title} | VNPIS Lab`,
    description: article.metadata.description,
    alternates: {
      canonical: `/kien-thuc/${params.slug}`,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Strip duplicate leading H1 from content if present
  const cleanContent = article.content.replace(/^#\s+[^\n]+\n*/, '').trim();

  return (
    <main className="font-sans text-slate-700 bg-white antialiased min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-navy-900/95 backdrop-blur border-b border-navy-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[4.5rem]">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/VNPIS_logo.png"
                alt="VNPIS Lab"
                className="h-11 w-auto object-contain bg-white rounded-lg px-2 py-1 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold text-base leading-none">VNPIS LAB</div>
                <div className="text-navy-300 text-xs font-medium">Trung tâm Cứu hộ Đầu in Số 1 VN</div>
              </div>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/kien-thuc" className="text-amber-300 hover:text-white text-sm font-bold transition-colors">
                &larr; Về kho kiến thức
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-navy-900 text-white border-b border-navy-800 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="px-3.5 py-1 bg-navy-800 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-navy-700">
              {article.metadata.category}
            </span>
            <span className="px-3.5 py-1 bg-navy-800 text-navy-200 text-xs font-bold rounded-full border border-navy-700">
              🏷️ {article.metadata.printhead}
            </span>
            <time className="text-xs text-navy-300 font-medium">
              {new Date(article.metadata.date).toLocaleDateString('vi-VN')}
            </time>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug mb-6">
            {article.metadata.title}
          </h1>
          {article.metadata.description && (
            <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-3xl mx-auto font-light">
              {article.metadata.description}
            </p>
          )}
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {cleanContent}
          </ReactMarkdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Bạn cần cứu hộ hoặc tư vấn kỹ thuật đầu in?</h4>
              <p className="text-navy-200 text-sm">Đội ngũ kỹ sư VNPIS Lab luôn sẵn sàng hỗ trợ trực tiếp 24/7 (Cam kết No Cure - No Pay).</p>
              <div className="mt-3 text-xs text-navy-300 space-y-1">
                <p>🏢 <strong>Trụ sở chính:</strong> Tầng 1, 202 Lê Lai, Phường Bến Thành, TP. Hồ Chí Minh</p>
                <p>🔬 <strong>Lab Center 1:</strong> 62 Trần Thị Nơi, Phường Chánh Hưng, TP. Hồ Chí Minh</p>
              </div>
            </div>
            <a href="/#lien-he" className="shrink-0 px-6 py-3.5 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-md text-sm whitespace-nowrap">
              🚀 Liên Hệ VNPIS Lab 24/7
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-navy-400 text-sm">
          &copy; {new Date().getFullYear()} CÔNG TY TNHH VNPIS &mdash; Trung tâm Cứu hộ Đầu in Kỹ thuật số Số 1 Việt Nam.
        </div>
      </footer>
    </main>
  );
}
