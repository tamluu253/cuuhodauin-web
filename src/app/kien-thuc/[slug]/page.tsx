import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from "next";

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
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

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
              </div>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/kien-thuc" className="text-navy-100 hover:text-white text-sm font-medium transition-colors">
                &larr; Về kho kiến thức
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-navy-900 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">{article.metadata.category}</span>
            <time className="text-sm text-slate-500 font-medium">{new Date(article.metadata.date).toLocaleDateString('vi-VN')}</time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            {article.metadata.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {article.metadata.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-navy-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-navy-50 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">Bạn cần tư vấn giải pháp chuyên sâu?</h4>
              <p className="text-slate-600 text-sm">Đội ngũ kỹ sư VNPIS Lab luôn sẵn sàng hỗ trợ bạn 24/7.</p>
            </div>
            <a href="/#lien-he" className="shrink-0 px-6 py-3 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-md">
              Liên Hệ Ngay
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-navy-950 py-10 border-t border-navy-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-navy-400 text-sm">
          &copy; {new Date().getFullYear()} VNPIS Lab. Tự hào là đơn vị số 1 về cứu hộ đầu in kỹ thuật số.
        </div>
      </footer>
    </main>
  );
}
