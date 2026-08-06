import React from 'react';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const metadata = {
  title: 'Video Demo Máy In Công Nghiệp | VNPIS',
  description: 'Thư viện video thực tế các dự án in công nghiệp VNPIS: UV Single Pass, Pad Printing, Máy in Date, TIJ. Xem máy hoạt động thực tế trước khi đầu tư.',
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/20 text-red-300 text-sm font-bold tracking-widest mb-6 border border-red-500/30 uppercase">
            Thư Viện Kiến Thức
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Video Demo <span className="text-red-500">Thực Tế</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            "Trăm nghe không bằng một thấy". Xem trực tiếp các dây chuyền in UV, Pad, CIJ, TIJ do VNPIS lắp đặt hoạt động ổn định tại nhà máy khách hàng.
          </p>
          <div className="flex justify-center">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-xl group">
              Kênh YouTube VNPIS <PlayCircle className="ml-2 w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. VIDEO GALLERY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Placeholder 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">2:45</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-bold mb-2">UV Single Pass</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Hệ Thống In UV Lên Vỏ Cốc Nhựa Tốc Độ 60m/phút</h3>
                <p className="text-slate-600 text-sm">Dự án nhà máy bao bì nhựa tại Bình Dương.</p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">1:12</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-bold mb-2">TIJ Printing</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">In Mã QR Định Danh (VDP) Trên Hộp Giấy Dược Phẩm</h3>
                <p className="text-slate-600 text-sm">Độ phân giải 600DPI sắc nét, tỉ lệ đọc mã vạch 100%.</p>
              </div>
            </div>

            {/* Video Placeholder 3 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">3:20</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-bold mb-2">Pad Printing</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Gia Công In Pad 2 Màu Tự Động Lên Vỏ Ắc Quy</h3>
                <p className="text-slate-600 text-sm">Xưởng in gia công nội bộ VNPIS tại TP.HCM.</p>
              </div>
            </div>
            
             {/* Video Placeholder 4 */}
             <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">5:15</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-bold mb-2">Bảo Trì Máy CIJ</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Hướng Dẫn Súc Rửa Béc Phun Máy Videojet 1520</h3>
                <p className="text-slate-600 text-sm">Video kỹ thuật hướng dẫn bảo trì cơ bản tại nhà máy.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-600 italic">Đang cập nhật thêm video các dự án mới nhất...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
