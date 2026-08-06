import React from 'react';
import Link from 'next/link';
import { ArrowRight, QrCode, Cpu, PackageCheck, Zap, Factory } from 'lucide-react';

export const metadata = {
  title: 'Máy In Phun Nhiệt (TIJ Printers) | VNPIS',
  description: 'Công nghệ in phun nhiệt TIJ độ phân giải 600DPI chuyên in mã QR, Barcode, Date Code. Dễ sử dụng, không cần bảo trì (Zero Maintenance).',
};

export default function TIJPrintersPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-300 text-sm font-bold tracking-widest mb-6 border border-green-500/30 uppercase">
            Máy In Độ Phân Giải Cao
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Máy In Phun Nhiệt <span className="text-green-500">TIJ</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Thermal Inkjet (TIJ) - Giải pháp in sắc nét nhất (600 DPI) cho mã vạch và QR Code. "Cắm là chạy" - Không cần bảo dưỡng, không hao hụt dung môi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-xl shadow-green-600/30">
              Nhận Báo Giá Máy TIJ <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ưu Điểm Tuyệt Đối Của TIJ</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <QrCode className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">600 DPI - Sắc Nét Vượt Trội</h3>
              <p className="text-slate-600">Độ phân giải tương đương máy in văn phòng. Hoàn hảo để in mã QR kích thước cực nhỏ (vài mm) mà máy quét vẫn đọc được 100%.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Zero Maintenance</h3>
              <p className="text-slate-600">Mỗi lần thay bình mực (Cartridge HP) là bạn đang thay luôn cả đầu in. Không cần súc rửa, không nghẹt béc, không cần gọi kỹ thuật.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nhỏ Gọn & Tiết Kiệm</h3>
              <p className="text-slate-600">Máy chỉ to bằng lòng bàn tay, dễ dàng lắp đặt vào mọi ngóc ngách của dây chuyền. Đầu tư ban đầu thấp hơn nhiều so với CIJ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ứng Dụng Thực Tế</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Máy in TIJ đặc biệt phù hợp cho các nhà máy dược phẩm, bao bì giấy, và bất cứ nơi nào cần in mã vạch mật độ cao trên bề mặt tương đối phẳng.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PackageCheck className="w-6 h-6 text-green-400 mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100 mb-1">In mã QR chống giả (VDP)</strong>
                    <span className="text-slate-400 text-sm">Quét mã bằng Zalo/Camera để xác thực nguồn gốc.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Factory className="w-6 h-6 text-green-400 mr-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-100 mb-1">In hộp thuốc (Dược phẩm)</strong>
                    <span className="text-slate-400 text-sm">Đảm bảo độ sạch, không có mùi dung môi bay hơi trong phòng sạch.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center">
                 <h3 className="text-2xl font-bold text-white mb-4">Lưu ý khi dùng TIJ</h3>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Do nguyên lý ném mực bằng nhiệt (Thermal), khoảng cách từ đầu in đến sản phẩm phải rất gần (chỉ từ 1-5mm). Vì vậy, TIJ không phù hợp để in dưới đáy lon lõm hay bề mặt quá gồ ghề (Lúc đó bạn sẽ cần <Link href="/products/cij-printers" className="text-red-400 hover:underline">Máy In CIJ</Link>).
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
