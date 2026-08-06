"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Printer, Cpu, Droplet, Activity } from 'lucide-react';
import printheadsData from '@/data/printheads.json';

export default function PrintheadsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header & Navigation */}
      <div className="bg-slate-900 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-blue-600 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-indigo-500 to-transparent blur-3xl transform skew-x-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/products" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Về trang Sản phẩm
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/30">
              <Printer className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Đầu Phun Công Nghiệp (Printheads)
            </h1>
          </div>
          
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Danh mục các dòng đầu phun công nghiệp chính hãng hiệu suất cao. Giải pháp in ấn kỹ thuật số sắc nét, siêu tốc từ Ricoh, Epson, Kyocera và HP.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        
        {/* Brands Listing */}
        <div className="space-y-16 mt-16">
          {printheadsData.map(brand => (
            <div key={brand.brandId} className="scroll-mt-32" id={brand.brandId}>
              {/* Brand Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4 mb-8">
                <div className="flex items-center gap-4">
                  <img src={brand.logo} alt={brand.country} className="h-6 w-auto rounded-sm shadow-sm" />
                  <h2 className="text-3xl font-black text-slate-800 tracking-tight">{brand.brandName}</h2>
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{brand.country}</span>
              </div>
              
              <p className="text-slate-600 mb-8 max-w-4xl text-lg">{brand.description}</p>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {brand.products.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group overflow-hidden">
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{product.name}</h3>
                          <span className="inline-flex items-center text-sm font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-lg">
                            <Droplet className="w-4 h-4 mr-1.5" /> {product.type}
                          </span>
                        </div>
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-3 border border-slate-100 shadow-inner">
                          <img src={product.image} alt="Printhead icon" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                        {product.desc}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center">
                            <Droplet className="w-3 h-3 mr-1" /> Thể tích giọt (Drop Size)
                          </div>
                          <div className="text-lg font-bold text-slate-800">{product.dropSize}</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center">
                            <Activity className="w-3 h-3 mr-1" /> Tần số xả (Frequency)
                          </div>
                          <div className="text-lg font-bold text-slate-800">{product.frequency}</div>
                        </div>
                      </div>

                      <Link href={product.href} className="inline-flex items-center justify-center w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors group-hover:shadow-lg group-hover:shadow-blue-500/30">
                        {product.href === '/contact' ? 'Liên Hệ Báo Giá' : 'Xem Chi Tiết Kỹ Thuật'}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <Cpu className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white opacity-5" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn thay thế đầu phun?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Đội ngũ kỹ thuật của VNPIS luôn sẵn sàng hỗ trợ kiểm tra tình trạng máy in và tư vấn giải pháp nâng cấp/thay thế đầu phun tiết kiệm nhất.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
              Yêu Cầu Hỗ Trợ Kỹ Thuật
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
