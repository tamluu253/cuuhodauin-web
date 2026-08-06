'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Droplet } from 'lucide-react';
import specialInks from '@/data/special-inks.json';
// Force HMR reload

export default function SpecialInksCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Lấy danh sách danh mục duy nhất
  const categories = useMemo(() => {
    const cats = new Set(specialInks.map((ink) => ink.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Lọc dữ liệu dựa trên search term và category
  const filteredInks = useMemo(() => {
    return specialInks.filter((ink) => {
      const matchesSearch =
        ink.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ink.desc.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory =
        selectedCategory === 'All' || ink.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Thanh Công Cụ (Toolbar) */}
      <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow shadow-sm"
              placeholder="Tìm kiếm mã mực, ứng dụng (VD: T03, chịu nhiệt)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Result Count */}
          <div className="text-slate-500 font-medium whitespace-nowrap">
            Tìm thấy <span className="text-blue-600 font-bold">{filteredInks.length}</span> mã mực
          </div>
        </div>

        {/* Categories (Filter Tags) */}
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="flex items-center mr-2 text-slate-500 text-sm font-semibold uppercase tracking-wider">
            <Filter className="w-4 h-4 mr-1" />
            Lọc theo:
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category === 'All' ? 'Tất cả' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Kết quả tìm kiếm (Grid) */}
      <div className="p-6 md:p-8">
        {filteredInks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredInks.map((ink, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {ink.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{ink.code}</h3>
                <h4 className="text-lg font-bold text-blue-700 mb-3">{ink.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {ink.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <a href="tel:0987453866" className="block w-full text-center bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold py-2.5 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                    Nhận Mẫu Test & Báo Giá
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Droplet className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy mã mực nào</h3>
            <p className="text-slate-500">Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-6 text-blue-600 font-semibold hover:underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
