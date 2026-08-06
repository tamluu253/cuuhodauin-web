import React from 'react';
import Link from 'next/link';
import { ArrowRight, QrCode, Zap, CheckCircle2, Factory, Package, Barcode, ScanLine } from 'lucide-react';

export const metadata = {
  title: 'Variable Data Printing | Giải Pháp In Dữ Liệu Biến Đổi | VNPIS',
  description: 'Chuyên gia số 1 về in Dữ Liệu Biến Đổi (VDP). In mã QR Code định danh, Barcode, Serial Number tốc độ cao trực tiếp trên dây chuyền sản xuất.',
};

export default function VariableDataPrintingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            Giải Pháp Cốt Lõi
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            In Dữ Liệu Biến Đổi <br/><span className="text-blue-500">(Variable Data Printing)</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Biến mỗi sản phẩm thành một định danh duy nhất. Giải pháp cốt lõi cho Truy Xuất Nguồn Gốc, Quản Lý Kho Bãi, và Tem Chống Hàng Giả.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30">
              Nhận Tư Vấn Kỹ Thuật <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS VDP? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Variable Data Printing (VDP) Là Gì?</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Không giống như in tem nhãn truyền thống (hàng ngàn sản phẩm có chung một mã), VDP cho phép thay đổi dữ liệu (văn bản, đồ họa, hình ảnh, mã vạch) trên **từng bản in** liên tiếp nhau mà không làm chậm tốc độ dây chuyền.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <QrCode className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Mã QR Động:</strong> Mỗi sản phẩm mang một mã QR khác nhau để truy xuất nguồn gốc hoặc tích điểm.</span>
                </li>
                <li className="flex items-start">
                  <Barcode className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Barcode Nhảy Số:</strong> Quản lý logistics, kiểm kê kho bãi chính xác đến từng đơn vị.</span>
                </li>
                <li className="flex items-start">
                  <ScanLine className="w-6 h-6 text-blue-600 mr-4 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Serial Number:</strong> Mã chống giả, mã bảo hành điện tử độc nhất.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                     <QrCode className="w-12 h-12 text-slate-800 mx-auto mb-3"/>
                     <div className="font-mono text-sm text-slate-500">PROD-001-A</div>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-sm text-center border-2 border-blue-500 relative">
                     <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">New Data</div>
                     <QrCode className="w-12 h-12 text-slate-800 mx-auto mb-3"/>
                     <div className="font-mono text-sm text-blue-600 font-bold">PROD-001-B</div>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                     <Barcode className="w-12 h-12 text-slate-800 mx-auto mb-3"/>
                     <div className="font-mono text-sm text-slate-500">1000029381</div>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-sm text-center border-2 border-orange-500 relative">
                     <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">Next</div>
                     <Barcode className="w-12 h-12 text-slate-800 mx-auto mb-3"/>
                     <div className="font-mono text-sm text-orange-600 font-bold">1000029382</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY ECOSYSTEM */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Công Nghệ In Dữ Liệu Biến Đổi Tại VNPIS</h2>
            <p className="text-lg text-slate-400">Tùy thuộc vào vật liệu và tốc độ dây chuyền, chúng tôi ứng dụng công nghệ phù hợp nhất.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">UV Single Pass</h3>
              <p className="text-slate-300 mb-6">Giải pháp cao cấp nhất. In trực tiếp lên thẻ nhựa, nắp chai, nhôm với độ sắc nét tuyệt đối, khô ngay lập tức nhờ đèn sấy LED UV.</p>
              <Link href="/solutions/uv-single-pass-printing" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">TIJ (In Phun Nhiệt)</h3>
              <p className="text-slate-300 mb-6">Độ phân giải 600 DPI, nét in cực đẹp. Phù hợp in mã QR kích thước nhỏ trên bao bì dược phẩm, thùng carton, hộp giấy.</p>
              <Link href="/products/tij-ink" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                Mực In TIJ <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">2. CIJ Ink (Continuous Inkjet)</h3>
              <p className="text-slate-400 text-sm mb-4">Dung môi và mực tương thích tiết kiệm 40% cho dây chuyền in liên tục.</p>
              <Link href="/products/cij-ink" className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center">
                Mực In CIJ <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
