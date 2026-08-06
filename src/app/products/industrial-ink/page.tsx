import React from 'react';
import Link from 'next/link';
import { ArrowRight, Droplets, Droplet, FlaskConical, Factory, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Mực In Công Nghiệp (Industrial Ink) | CIJ & TIJ | VNPIS',
  description: 'Trung tâm vật tư mực in công nghiệp VNPIS. Cung cấp mực in phun CIJ, TIJ, dung môi, make-up tương thích hoàn hảo cho các dòng máy Videojet, Domino, Linx.',
};

export default function IndustrialInkPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            Sản Phẩm Cốt Lõi
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Trung Tâm <span className="text-blue-500">Mực In Công Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Giải pháp vật tư tiêu hao toàn diện cho máy in phun công nghiệp. Giảm đến 40% chi phí vận hành với chất lượng tương đương mực chính hãng.
          </p>
        </div>
      </section>

      {/* 2. INK CATEGORIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Phân Loại Mực In (Industrial Inks)</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CIJ INK */}
            <Link href="/products/cij-ink" className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="p-8 bg-slate-100 flex justify-center items-center h-48 group-hover:bg-blue-50 transition-colors">
                <Droplets className="w-20 h-20 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Mực In Phun CIJ</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  Mực, dung môi (Solvent), và Make-up cho máy in phun liên tục. Tương thích 100% với Domino, Videojet, Linx, Markem-Imaje.
                </p>
                <div className="flex items-center text-blue-600 font-bold">
                  Khám phá Mực CIJ <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* TIJ INK */}
            <Link href="/products/tij-ink" className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-green-300 transition-all">
              <div className="p-8 bg-slate-100 flex justify-center items-center h-48 group-hover:bg-green-50 transition-colors">
                <Droplet className="w-20 h-20 text-slate-400 group-hover:text-green-500 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Mực In Phun TIJ (Cartridge)</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  Hộp mực in phun nhiệt công nghệ HP 45A. Cung cấp cả hệ mực Solvent (gốc dung môi) và mực UV bám dính siêu tốt.
                </p>
                <div className="flex items-center text-green-600 font-bold">
                  Khám phá Mực TIJ <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* SPECIAL INK */}
            <Link href="/products/special-inks" className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="p-8 bg-slate-100 flex justify-center items-center h-48 group-hover:bg-purple-50 transition-colors">
                <FlaskConical className="w-20 h-20 text-slate-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Mực In Đặc Biệt</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  Các dòng mực đặc trị: Mực UV tàng hình (chống giả), mực đổi màu theo nhiệt độ (Thermochromic), mực chịu nhiệt độ luộc thanh trùng.
                </p>
                <div className="flex items-center text-purple-600 font-bold">
                  Khám phá Mực Đặc Biệt <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE OUR INK */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cam Kết Chất Lượng Vượt Trội</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Là nhà cung cấp mực in công nghiệp hàng đầu, VNPIS hiểu rằng sự ổn định của dây chuyền là ưu tiên số một. Mực in của chúng tôi giải quyết triệt để các vấn đề phổ biến.
              </p>
              <div className="space-y-4">
                {[
                  "Không gây nghẹt đầu in, giảm thời gian súc rửa",
                  "Bám dính tốt trên kính, kim loại, bao bì màng nhựa (PE, PP)",
                  "Khô nhanh dưới 1 giây, chống lem nhòe khi ma sát",
                  "Màu sắc đậm nét, độ tương phản cao cho máy quét QR, Barcode",
                  "Nguồn cung ổn định, không lo đứt gãy chuỗi cung ứng"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
                 <ShieldCheck className="absolute -right-4 -bottom-4 w-48 h-48 text-slate-700 opacity-20" />
                 <Factory className="w-12 h-12 text-blue-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Chiến Lược Tối Ưu TCO</h3>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Tổng chi phí sở hữu (Total Cost of Ownership) của hệ thống máy in phun phần lớn đến từ Vật tư tiêu hao (Mực, Dung môi). Chuyển đổi sang sử dụng vật tư của VNPIS giúp nhà máy của bạn tiết kiệm hàng trăm triệu đồng mỗi năm.
                 </p>
                 <Link href="/contact" className="inline-block text-blue-400 font-bold hover:text-blue-300 transition-colors">
                   Yêu cầu bảng so sánh chi phí &rarr;
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
