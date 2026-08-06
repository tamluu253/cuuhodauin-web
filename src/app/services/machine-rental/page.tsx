import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Wrench, PiggyBank, Settings, Phone } from 'lucide-react';

export const metadata = {
  title: 'Cho Thuê Máy In Công Nghiệp | Machine Rental | VNPIS',
  description: 'Dịch vụ cho thuê máy in công nghiệp (CIJ, TIJ, UV, Máy in Pad) theo tháng/quý/năm. Không cần lo bảo trì, tiết kiệm chi phí đầu tư ban đầu.',
};

export default function MachineRentalPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            Dịch Vụ Nổi Bật
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Cho Thuê <span className="text-blue-500">Máy In Công Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mô hình OaaS (OpEx as a Service). Không tốn chi phí đầu tư ban đầu (CapEx), không lo hỏng hóc bảo trì. Tập trung 100% vào sản xuất cốt lõi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30">
              Nhận Báo Giá Thuê Máy <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY RENT? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tại Sao Nên Thuê Thay Vì Mua Máy Mới?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiggyBank className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Zero CapEx</h3>
              <p className="text-slate-600">Không cần bỏ ra hàng trăm triệu đồng đầu tư máy mới. Chuyển chi phí cố định thành chi phí vận hành (OPEX).</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bảo Trì Miễn Phí</h3>
              <p className="text-slate-600">Mọi chi phí sửa chữa, thay thế phụ tùng (bơm, valve, board mạch) đều do VNPIS chi trả trong suốt thời gian thuê.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1 Đổi 1 Nhanh Chóng</h3>
              <p className="text-slate-600">Nếu máy gặp sự cố không thể khắc phục ngay, VNPIS sẽ đổi máy backup tương đương để không gián đoạn dây chuyền.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Linh Hoạt Nhu Cầu</h3>
              <p className="text-slate-600">Có thể thuê theo dự án ngắn hạn (vài tháng) hoặc dài hạn (theo năm) tùy thuộc vào sản lượng sản xuất mùa vụ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EQUIPMENT AVAILABLE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Danh Mục Thiết Bị Cho Thuê</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between hover:border-blue-500 transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-2">Máy In Phun CIJ (Date, Lô)</h3>
                <p className="text-slate-400">Các dòng máy Videojet, Domino, Linx đã được đại tu 100%. Phù hợp in đáy lon, nắp chai.</p>
              </div>
              <Link href="/contact" className="mt-4 md:mt-0 px-6 py-2 border border-slate-500 rounded-lg hover:bg-slate-700 font-medium">Nhận báo giá thuê</Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between hover:border-blue-500 transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-2">Máy In Phun TIJ (Mã QR)</h3>
                <p className="text-slate-400">Máy in nhỏ gọn độ phân giải cao 600 DPI, in QR code siêu nét lên hộp giấy, thùng carton.</p>
              </div>
              <Link href="/contact" className="mt-4 md:mt-0 px-6 py-2 border border-slate-500 rounded-lg hover:bg-slate-700 font-medium">Nhận báo giá thuê</Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between hover:border-blue-500 transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-2">Máy In Tampon (Pad Printing)</h3>
                <p className="text-slate-400">Máy in Pad bán tự động (1-2 màu) kèm hỗ trợ thiết lập dây chuyền và làm bản in, chế pad.</p>
              </div>
              <Link href="/contact" className="mt-4 md:mt-0 px-6 py-2 border border-slate-500 rounded-lg hover:bg-slate-700 font-medium">Nhận báo giá thuê</Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between hover:border-blue-500 transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-2">Máy In Dữ Liệu Biến Đổi (UV)</h3>
                <p className="text-slate-400">Hệ thống in UV Single Pass kèm băng tải chuyên biệt. Dành cho các dự án lớn, in số lượng nhiều.</p>
              </div>
              <Link href="/contact" className="mt-4 md:mt-0 px-6 py-2 border border-slate-500 rounded-lg hover:bg-slate-700 font-medium">Liên hệ kỹ sư</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">An Tâm Sản Xuất - Rủi Ro Bằng 0</h2>
          <p className="text-xl text-blue-100 mb-10">Mọi hợp đồng thuê máy tại VNPIS đều đi kèm điều khoản cam kết thời gian khắc phục sự cố (SLA) nghiêm ngặt.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-2xl">
            Tư Vấn Gói Thuê Phù Hợp <Phone className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
