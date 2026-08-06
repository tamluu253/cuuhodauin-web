import React from 'react';
import { notFound } from 'next/navigation';
import { getAllSlugs, getDocumentBySlug } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
  const slugs = getAllSlugs('case-studies');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('case-studies', resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.metadata.title} | Case Study VNPIS`,
    description: post.metadata.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('case-studies', resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const { metadata, contentHtml } = post;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    articleSection: metadata.industry,
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
    <main className="min-h-screen pt-24 pb-16 bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article className="container mx-auto px-4 max-w-4xl">
        <Link href="/case-studies" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Các Case Study Khác
        </Link>
        
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full mb-4">
            {metadata.category || 'Thành Công Thực Tế'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {metadata.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {metadata.description}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-12">
          <h3 className="font-bold text-slate-900 text-xl mb-4">Tổng Quan Dự Án</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
            <div>
              <p className="mb-2"><strong className="text-slate-800">Khách hàng:</strong> {metadata.client || 'Đang cập nhật'}</p>
              <p><strong className="text-slate-800">Ngành nghề:</strong> {metadata.industry || 'Đang cập nhật'}</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-slate-800">Giải pháp:</strong> {metadata.solution || 'Đang cập nhật'}</p>
              <p><strong className="text-slate-800">Kết quả:</strong> {metadata.result || 'Đang cập nhật'}</p>
            </div>
          </div>
        </div>

        <div 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:text-slate-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-blue-600
          prose-img:rounded-xl prose-img:shadow-md
          prose-li:text-slate-600"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
        
        <hr className="border-slate-200 my-16" />
        
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Bạn Đang Gặp Vấn Đề Tương Tự?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Hãy để đội ngũ kỹ sư VNPIS đến trực tiếp nhà máy khảo sát và tư vấn giải pháp phù hợp nhất cho dây chuyền của bạn.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors">
            Yêu Cầu Khảo Sát Miễn Phí
          </Link>
        </div>
      </article>
    </main>
  );
}
