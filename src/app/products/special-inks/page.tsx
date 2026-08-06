import React from 'react';
import { ArrowRight, ShieldCheck, Microscope, Thermometer, Droplets, Droplet } from 'lucide-react';
import Link from 'next/link';
import SpecialInksCatalog from '@/components/products/SpecialInksCatalog';
import ConsultationForm from '@/components/ui/ConsultationForm';


export const metadata = {
  title: 'Mực In CIJ, TIJ Đặc Biệt | VNPIS - Giải Pháp In Phun Công Nghiệp',
  description: 'Chuyên cung cấp các dòng mực in CIJ, TIJ đặc biệt: mực tàng hình, mực chịu nhiệt, mực thực phẩm in trứng, mực kháng cồn, kháng lưu hóa.',
};

export default function SpecialInksPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/30">
                <Microscope className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Công Nghệ Hóa Chất Tiên Tiến</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Mực In CIJ, TIJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Đặc Biệt</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Giải pháp toàn diện cho những bề mặt "khó nhằn" nhất. Từ mực in chịu nhiệt độ cao luộc sôi, mực tàng hình bảo mật, cho đến mực thực phẩm in trực tiếp lên vỏ trứng gà. VNPIS cung cấp dải sản phẩm chuyên biệt cho mọi ngành công nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#catalog" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Tra Cứu Bảng Mã Mực <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl relative flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 p-8 w-full h-full">
                    <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                        <Thermometer className="w-12 h-12 text-red-400 mb-4" />
                        <span className="text-white font-bold">Chịu Nhiệt Cao</span>
                        <span className="text-slate-400 text-sm mt-2">Lên đến 300°C</span>
                    </div>
                    <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                        <ShieldCheck className="w-12 h-12 text-cyan-400 mb-4" />
                        <span className="text-white font-bold">Tàng Hình / UV</span>
                        <span className="text-slate-400 text-sm mt-2">Bảo mật chống giả</span>
                    </div>
                    <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                        <Droplets className="w-12 h-12 text-orange-400 mb-4" />
                        <span className="text-white font-bold">Kháng Dung Môi</span>
                        <span className="text-slate-400 text-sm mt-2">Kháng Cồn, Dầu</span>
                    </div>
                    <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                        <Droplet className="w-12 h-12 text-green-400 mb-4" />
                        <span className="text-white font-bold">Mực Thực Phẩm</span>
                        <span className="text-slate-400 text-sm mt-2">An toàn ăn uống</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INK CATALOG */}
      <section id="catalog" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bảng Tra Cứu Mực In Đặc Biệt VNPIS</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Với hơn 100 mã mực CIJ/TIJ chuyên biệt cho các bề mặt khó. Sử dụng thanh tìm kiếm và bộ lọc để tra cứu nhanh nhất.</p>
          </div>

          <SpecialInksCatalog />
        </div>
      </section>

      {/* 3. LEAD FORM SECTION */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Gặp Bài Toán Bề Mặt Khó?"
            subtitle="Hãy mô tả chất liệu và yêu cầu của bạn, đội ngũ kỹ sư hóa chất VNPIS sẽ gửi mẫu mực test thử hoàn toàn miễn phí."
            pageTitle="Mực In Đặc Biệt"
          />
        </div>
      </section>
    </main>
  );
}
