import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Máy Ép Nhũ (Hot Stamping) | SJ',
  description: 'Tổng hợp các dòng máy ép nhũ nóng, ép kim (Hot Stamping) chất lượng cao từ SJ.',
};

export default function HotStampingPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <Layers className="w-5 h-5" />
            <span>Hot Stamping System</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Hệ Thống Máy Ép Nhũ Nóng</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Giải pháp ép kim, ép nhũ nóng hoàn hảo để tạo điểm nhấn sang trọng trên bao bì, hộp giấy, da, nhựa.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Link href="/products/hot-stamping/sj" className="inline-flex items-center bg-red-600 text-white hover:bg-red-700 font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-1">
              Xem Catalog Máy Ép Nhũ SJ <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <ConsultationForm
            title="Tư Vấn Chọn Máy Ép Nhũ"
            subtitle="Để lại thông tin về sản phẩm bạn cần ép kim / ép nhũ nóng, chúng tôi sẽ tư vấn dòng máy phù hợp nhất."
            pageTitle="Máy Ép Nhũ"
          />
        </div>

      </div>
    </main>
  );
}
