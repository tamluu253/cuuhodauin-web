import React from 'react';
import { FileText } from 'lucide-react';
import BlogList from '@/components/BlogList';
import { getAllDocumentsMeta } from '@/lib/mdx';

export const metadata = {
  title: 'Blog Kiến Thức In Ấn Công Nghiệp | VNPIS',
  description: 'Tổng hợp các bài viết chuyên sâu về mực in, giải pháp in ấn công nghiệp (In lụa, Tampon, CIJ, TIJ, DOD...) và các ứng dụng thực tế.',
};

export default function BlogIndex() {
  const blogData = getAllDocumentsMeta('articles');
  
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <FileText className="w-5 h-5" />
            <span>Blog & Tin Tức Ngành</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Giải Pháp & Kiến Thức In Ấn Công Nghiệp</h1>
          <p className="text-lg text-slate-600">
            Khám phá thư viện {blogData.length}+ bài viết chuyên sâu và giải pháp kỹ thuật in ấn đặc biệt của VNPIS.
          </p>
        </div>

        <BlogList initialData={blogData} />

      </div>
    </main>
  );
}
