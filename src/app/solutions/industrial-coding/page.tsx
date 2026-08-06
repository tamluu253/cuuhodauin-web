import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BarChart3, Clock, Settings, Package, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Industrial Coding | In Date, Lô, Barcode Công Nghiệp | VNPIS',
  description: 'Giải pháp in phun công nghiệp (Industrial Coding & Marking) cho dây chuyền sản xuất: In Date, Số Lô, Barcode bằng công nghệ CIJ và TIJ.',
};

export default function IndustrialCodingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            Giải Pháp Đóng Gói
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Industrial Coding & <span className="text-blue-500">Marking</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Giải pháp in Date Code, Số Lô, Barcode 1D/2D trực tiếp lên bao bì sản phẩm trên dây chuyền tốc độ cao với công nghệ in phun liên tục (CIJ) và in phun nhiệt (TIJ).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30">
              Nhận Tư Vấn Cấu Hình <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE TECHNOLOGIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hai Công Nghệ In Phun Chủ Đạo</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">VNPIS cung cấp cả 2 giải pháp công nghệ in mã hóa (Coding) phổ biến nhất hiện nay, giúp nhà máy lựa chọn được công nghệ tối ưu chi phí nhất cho từng loại bao bì.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* CIJ */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Máy In Phun CIJ</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Công nghệ in phun liên tục (Continuous Inkjet). Bắn các giọt mực li ti từ khoảng cách 1-3cm lên sản phẩm. Giải pháp truyền thống, "nồi đồng cối đá" cho môi trường công nghiệp.
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Tốc độ in cực cao, phù hợp dây chuyền siêu tốc.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">In trên mặt cong, lõm như đáy lon, cổ chai, nắp chai.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Khô siêu tốc với hệ dung môi mạnh (Solvent-based).</span>
                </li>
              </ul>
              <Link href="/products/cij-ink" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 mt-auto">
                Mực In CIJ Tương Thích <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* TIJ */}
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Cpu className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Máy In Phun TIJ</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Công nghệ in phun nhiệt (Thermal Inkjet) sử dụng Cartridge HP. Độ phân giải siêu cao (600 DPI), không cần bảo trì, chi phí đầu tư ban đầu rất thấp.
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Độ phân giải siêu cao (tới 600 DPI), hoàn hảo cho in mã QR.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Zero Maintenance - Không cần bảo dưỡng đầu in.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Máy cực nhỏ gọn, dễ dàng lắp đặt mọi vị trí.</span>
                </li>
              </ul>
              <Link href="/products/tij-ink" className="inline-flex items-center text-green-600 font-bold hover:text-green-700 mt-auto">
                Hộp Mực TIJ Công Nghiệp <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION BY INDUSTRY */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ứng Dụng Trong Mọi Ngành Nghề</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Coding & Marking là công đoạn bắt buộc cho mọi sản phẩm xuất xưởng. Mực in VNPIS đảm bảo độ bám dính, không bong tróc trong suốt vòng đời sản phẩm.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "F&B (Thực phẩm & Đồ uống)",
                  "Dược phẩm & Y tế",
                  "Mỹ phẩm & Hóa chất",
                  "Dây cáp, Ống nhựa",
                  "Điện tử viễn thông",
                  "Vật liệu xây dựng"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <Package className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-8 flex flex-col justify-center text-center">
                 <BarChart3 className="w-20 h-20 text-blue-500 mx-auto mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Tối Ưu OPEX Với Vật Tư VNPIS</h3>
                 <p className="text-slate-300 leading-relaxed">
                   Nếu nhà máy bạn đã có sẵn máy in (Videojet, Domino, Linx), hãy chuyển sang sử dụng hệ thống mực in tương thích của VNPIS để tiết kiệm 30-40% chi phí vận hành hàng năm (OPEX) mà không làm giảm chất lượng bản in.
                 </p>
                 <Link href="/products/industrial-ink" className="mt-6 inline-block text-blue-400 font-bold hover:text-blue-300 transition-colors">
                   Khám phá Mực In Công Nghiệp &rarr;
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
