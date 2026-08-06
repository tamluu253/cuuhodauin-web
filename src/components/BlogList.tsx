"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';

export default function BlogList({ initialData }: { initialData: any[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');

  // Lọc danh mục duy nhất từ dữ liệu (và thêm "Tất cả")
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialData.forEach(item => {
      if (item.category) cats.add(item.category);
    });
    return ['Tất cả', ...Array.from(cats)];
  }, [initialData]);

  // Lọc bài viết dựa trên category đang chọn
  const filteredData = useMemo(() => {
    if (activeCategory === 'Tất cả') return initialData;
    return initialData.filter(item => item.category === activeCategory);
  }, [initialData, activeCategory]);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <div className="flex items-center text-slate-500 mr-2 font-medium">
          <Filter className="w-5 h-5 mr-2" /> Lọc theo:
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat === 'Tất cả' ? 'Tất cả bài viết' : 
             cat === 'PAD' ? 'Máy In Tampon (PAD)' : 
             cat === 'SCREEN' ? 'Máy In Lụa' : 
             cat === 'VAT-TU' ? 'Vật Tư In' : cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((article: any, index: number) => (
          <Link key={index} href={`/blog/${article.slug}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              {article.mediaExt === 'mp4' && article.slug !== 'giai-phap-in-truc-tiep-len-vo-trung-ga-muc-he01' && article.slug !== 'muc-in-day-cap-trang-linx-videojet' ? (
                <video src={`/media/blog/${article.slug}.mp4`} muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 group-hover:scale-105 transition-transform duration-500 relative">
                    <img 
                      src={article.mediaExt === 'jpg' ? `/media/blog/${article.slug}.jpg` : "/images/blog-placeholder.jpg"} 
                      alt={article.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" 
                    />
                    <span className="text-4xl md:text-5xl font-black text-white z-10 drop-shadow-lg opacity-90">{article.code || article.category}</span>
                </div>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                {article.category && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">{article.category}</span>
                )}
                {article.code && (
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md">{article.code}</span>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                {article.description}
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm mt-auto">
                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredData.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          Không tìm thấy bài viết nào trong danh mục này.
        </div>
      )}
    </div>
  );
}
