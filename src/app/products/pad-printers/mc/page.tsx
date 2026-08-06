import React from 'react';
import Link from 'next/link';
import { Settings, PhoneCall, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import mcPrinters from '@/data/mc-printers.json';

export const metadata = {
  title: 'Catalog Máy In Pad Meichao (MC) | VNPIS',
  description: 'Danh mục các dòng máy in pad chất lượng cao của hãng Meichao (MC series).',
};

export default function MCPrintersCatalog() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/products/pad-printers" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Trở lại danh mục Máy In Pad
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Settings className="w-5 h-5" />
              <span>Meichao (MC) Series</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Danh Mục Máy In Pad Meichao</h1>
            <p className="text-lg text-slate-600">
              Tổng hợp các model máy in pad từ hãng Meichao (MC).
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center md:text-right flex-shrink-0">
            <p className="text-sm text-slate-500 font-medium mb-2">Nhận báo giá & Tư vấn cấu hình</p>
            <a href="tel:0987453866" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg shadow-lg shadow-blue-500/30">
              <PhoneCall className="w-5 h-5 mr-2" />
              0987 453 866
            </a>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mcPrinters.map((machine) => (
            <div key={machine.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group">
              {machine.image && (
                <div className="aspect-[4/3] bg-slate-100 relative flex items-center justify-center border-b border-slate-50 overflow-hidden">
                  <Image 
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{machine.name}</h3>
                
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-100 text-sm text-slate-700">
                  {machine.features && machine.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:0987453866" className="mt-6 w-full text-center bg-slate-50 hover:bg-slate-100 text-blue-600 font-semibold py-2.5 rounded-lg transition-colors border border-slate-200 text-sm">
                  Liên hệ 0987453866
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
