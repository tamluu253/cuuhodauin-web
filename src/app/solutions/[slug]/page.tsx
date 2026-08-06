import React from 'react';
import { notFound } from 'next/navigation';
import { getAllSlugs, getDocumentBySlug } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

export function generateStaticParams() {
  const slugs = getAllSlugs('pillars');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('pillars', resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.metadata.title} | Giải Pháp VNPIS`,
    description: post.metadata.description,
  };
}

export default async function PillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('pillars', resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const { metadata, contentHtml } = post;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description: metadata.description,
    articleSection: metadata.category,
    author: {
      '@type': 'Organization',
      name: 'VNPIS',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VNPIS - Industrial Printing Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vnpis.com/icon.png',
      },
    },
    datePublished: metadata.date || '2026-07-08T00:00:00.000Z',
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            {metadata.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {metadata.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 mx-auto leading-relaxed">
            {metadata.description}
          </p>
        </div>
      </section>

      {/* 2. CONTENT WITH SIDEBAR */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:w-3/4 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div 
                className="prose prose-lg prose-slate max-w-none 
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-100
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-table:w-full prose-table:border-collapse
                prose-th:bg-slate-100 prose-th:p-4 prose-th:text-left prose-th:border prose-th:border-slate-200
                prose-td:p-4 prose-td:border prose-td:border-slate-200
                prose-li:text-slate-600"
                dangerouslySetInnerHTML={{ __html: contentHtml }} 
              />
            </article>

            {/* SIDEBAR */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Mục lục</h3>
                {/* Note: In a real app we'd parse the markdown to generate this ToC dynamically.
                    For now, it's a placeholder or we can leave it empty. */}
                <p className="text-sm text-slate-500 italic mb-6">Mục lục đang được cập nhật tự động...</p>
                
                <hr className="border-slate-100 mb-6" />
                
                <h3 className="font-bold text-slate-900 text-lg mb-4">Cần Tư Vấn Nhanh?</h3>
                <p className="text-slate-600 text-sm mb-6">Kỹ sư VNPIS luôn sẵn sàng giải đáp thắc mắc về công nghệ {metadata.category}.</p>
                <Link href="tel:0987453866" className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> Gọi: 098 745 3866
                </Link>
                <Link href="/solutions" className="w-full inline-flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-700 rounded-lg font-semibold mt-3 hover:bg-slate-200 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Xem giải pháp khác
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
