import React from 'react';
import Link from 'next/link';
import { Settings, PhoneCall, ArrowLeft, Filter, ImageOff } from 'lucide-react';
import Image from 'next/image';
import sjPrinters from '@/data/sj-printers.json';

export const metadata = {
  title: 'Catalog Máy In Pad SJ | VNPIS',
  description: 'Danh mục chi tiết toàn bộ các model máy in pad của hãng SJ (SanJin) (Từ 1 màu cơ bản đến 8 màu tự động)',
};

export default function HJPrintersCatalog() {
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
              <span>SJ Series Catalog</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Danh Mục Máy In Pad SJ</h1>
            <p className="text-lg text-slate-600">
              Tổng hợp gần 30 model máy in pad chất lượng cao từ hãng SJ (SanJin). Đáp ứng mọi nhu cầu từ xưởng gia công nhỏ đến dây chuyền sản xuất tự động hàng loạt.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sjPrinters.map((machine) => (
            <div key={machine.model} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group">
              <div className="aspect-square bg-white relative flex items-center justify-center border-b border-slate-100 overflow-hidden">
                {machine.image ? (
                  <Image 
                    src={machine.image}
                    alt={machine.model}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-300 group-hover:text-slate-400 transition-colors">
                    <ImageOff className="w-12 h-12 mb-2" />
                    <span className="text-xs font-medium">Đang cập nhật hình</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-bold text-slate-800 shadow-sm border border-slate-200 z-10">
                  {machine.colors} Màu
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{machine.model}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 min-h-[40px]">{machine.desc}</p>
                
                <div className="space-y-2 mt-auto pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Kích thước bản in:</span>
                    <span className="font-semibold text-slate-700">{machine.plateSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Kích thước hình in tối đa:</span>
                    <span className="font-semibold text-slate-700">{machine.printArea}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Tốc độ in:</span>
                    <span className="font-semibold text-slate-700">{machine.speed}</span>
                  </div>
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
