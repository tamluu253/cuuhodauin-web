import { getArticleBySlug, getArticleSlugs, getAllArticles } from "@/lib/articles";
import { redirect } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Metadata } from "next";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  // Pre-render top 25 articles at build time; remaining articles are rendered on-demand & cached via ISR on Vercel
  return slugs.slice(0, 25).map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Kho Kiến Thức Cứu Hộ Đầu In | VNPIS Lab" };
  
  const isDraft = article.metadata.draft === true || article.metadata.status === 'draft';
  const url = `https://cuuhodauin.com/kien-thuc/${params.slug}`;
  const title = `${article.metadata.title} | VNPIS Lab`;
  const description = article.metadata.description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "vi_VN",
      url,
      siteName: "VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số",
      title,
      description,
      publishedTime: article.metadata.date,
      images: [
        {
          url: "/icon.png",
          width: 512,
          height: 512,
          alt: article.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/icon.png"],
    },
    robots: isDraft
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    redirect('/kien-thuc');
  }

  // Related articles (matching printhead or category, excluding current)
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(
      (a) =>
        a.slug !== params.slug &&
        (a.printhead === article.metadata.printhead || a.category === article.metadata.category)
    )
    .slice(0, 3);

  // Fallback if less than 3
  const finalRelated =
    relatedArticles.length >= 3
      ? relatedArticles
      : [
          ...relatedArticles,
          ...allArticles.filter((a) => a.slug !== params.slug && !relatedArticles.includes(a)),
        ].slice(0, 3);

  // Strip duplicate leading H1 from content if present
  const cleanContent = article.content.replace(/^#\s+[^\n]+\n*/, '').trim();

  // Structured Data Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": "https://cuuhodauin.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kiến Thức Cứu Hộ Đầu In",
        "item": "https://cuuhodauin.com/kien-thuc"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.metadata.title,
        "item": `https://cuuhodauin.com/kien-thuc/${params.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.metadata.title,
    "description": article.metadata.description,
    "datePublished": article.metadata.date,
    "dateModified": article.metadata.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cuuhodauin.com/kien-thuc/${params.slug}`
    },
    "image": "https://cuuhodauin.com/icon.png",
    "author": {
      "@type": "Organization",
      "name": "VNPIS Lab",
      "url": "https://cuuhodauin.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VNPIS Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cuuhodauin.com/vnpis-logo.png"
      }
    },
    "about": {
      "@type": "Thing",
      "name": article.metadata.printhead || "Đầu in phun công nghiệp"
    },
    "keywords": `${article.metadata.category}, cứu hộ đầu in, phục hồi đầu in, ${article.metadata.printhead}`
  };

  return (
    <main className="font-sans text-slate-700 bg-white antialiased min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-navy-950/70 border-b border-navy-800 text-xs text-navy-300 py-2.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Trang Chủ
          </Link>
          <span>&rsaquo;</span>
          <Link href="/kien-thuc" className="hover:text-amber-400 transition-colors">
            Kho Kiến Thức
          </Link>
          <span>&rsaquo;</span>
          <span className="text-navy-100 truncate max-w-[200px] sm:max-w-sm">
            {article.metadata.title}
          </span>
        </div>
      </div>

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
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {cleanContent}
          </ReactMarkdown>
        </div>
        
        {/* CTA Contact Box */}
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

        {/* Related Articles Section */}
        {finalRelated.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <span>📖 Bài Viết Cùng Chủ Đề Liên Quan</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {finalRelated.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/kien-thuc/${rel.slug}`}
                  className="group bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      🏷️ {rel.printhead || "Khác"}
                    </span>
                    <h4 className="font-bold text-sm text-navy-900 mt-2 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-navy-700 mt-4 group-hover:text-amber-600">
                    Đọc tiếp &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
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
