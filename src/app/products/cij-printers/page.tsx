import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Play, Cpu, Droplets, Settings } from 'lucide-react';

export const metadata = {
  title: 'Máy In Phun Liên Tục (CIJ Printers) | VNPIS',
  description: 'Cung cấp máy in phun liên tục CIJ công nghiệp tốc độ cao. Giải pháp in Date Code, Số Lô, Barcode trực tiếp trên dây chuyền với chi phí vận hành tối ưu.',
};

export default function CIJPrintersPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/20 text-red-300 text-sm font-bold tracking-widest mb-6 border border-red-500/30 uppercase">
            Máy In Công Nghiệp
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Máy In Phun Liên Tục <span className="text-red-500">CIJ</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Continuous Inkjet - Công nghệ in mã hóa "nồi đồng cối đá" nhất cho dây chuyền công nghiệp. Tốc độ siêu cao, in trên mọi bề mặt không bằng phẳng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-600/30">
              Nhận Báo Giá Máy CIJ <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY CIJ? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tại Sao Chọn Công Nghệ CIJ?</h2>
              <div className="w-20 h-1 bg-red-600 rounded-full mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Mặc dù có nhiều công nghệ in mới ra đời, CIJ vẫn giữ vị trí độc tôn trong các dây chuyền sản xuất hàng loạt nhờ nguyên lý "ném mực" không tiếp xúc.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Play className="w-6 h-6 text-red-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Tốc độ cực nhanh:</strong> Đáp ứng dây chuyền chiết rót tốc độ cao (lên tới 300m/phút).</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-red-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>In không tiếp xúc:</strong> Đầu in cách sản phẩm 1-3cm, in dễ dàng lên đáy lon lõm, cổ chai cong, bề mặt gồ ghề.</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-6 h-6 text-red-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Khô ngay lập tức:</strong> Mực gốc dung môi (MEK) bám dính siêu chắc lên kính, kim loại, PE/PP và khô ngay trong 1 giây.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                 <div className="aspect-video bg-slate-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                    {/* Placeholder for video or animation */}
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center flex-col">
                      <Cpu className="w-16 h-16 text-slate-600 mb-4" />
                      <span className="text-slate-400">CIJ Operating Principle</span>
                    </div>
                 </div>
                 <p className="text-slate-500 italic">Tia mực liên tục được bẻ lệch bởi từ trường để tạo thành các điểm ảnh trên sản phẩm đang di chuyển.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VNPIS OFFERING */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Giải Pháp CIJ Của VNPIS</h2>
          <p className="text-lg text-slate-300 mb-16 max-w-2xl mx-auto">Chúng tôi không chỉ bán máy in, chúng tôi cung cấp hệ sinh thái vật tư và dịch vụ bảo trì định kỳ, đảm bảo dây chuyền không bao giờ phải dừng đột ngột.</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Factory className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Phân Phối Thiết Bị</h3>
              <p className="text-slate-300">Tư vấn cấu hình và lắp đặt các dòng máy in CIJ nổi tiếng. Đảm bảo phù hợp ngân sách và tốc độ dây chuyền.</p>
            </div>
            
            <Link href="/products/industrial-ink" className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-colors group">
              <Droplets className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400">Mực & Dung Môi Tương Thích</h3>
              <p className="text-slate-300 mb-4">Tiết kiệm 30-40% OPEX với hệ mực tương thích chất lượng cao cho Videojet, Domino, Linx.</p>
              <span className="text-red-400 font-bold inline-flex items-center text-sm">Xem Vật Tư <ArrowRight className="ml-1 w-4 h-4"/></span>
            </Link>

            <Link href="/services/machine-repair" className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors group">
              <Settings className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400">Dịch Vụ Kỹ Thuật</h3>
              <p className="text-slate-300 mb-4">Sửa chữa board mạch, súc rửa Core, thay thế phụ tùng (bơm, valve, nozzle) và bảo dưỡng định kỳ.</p>
              <span className="text-green-400 font-bold inline-flex items-center text-sm">Xem Dịch Vụ <ArrowRight className="ml-1 w-4 h-4"/></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
