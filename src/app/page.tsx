import React from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Settings, CheckCircle2, Factory, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            Industrial Printing Solutions
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Nâng Tầm Sản Xuất Với Giải Pháp <span className="text-orange-500">In Công Nghiệp Toàn Diện</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hệ sinh thái thiết bị, vật tư và dịch vụ in ấn cao cấp: UV Single Pass, Pad Printing, Screen Printing, TIJ, CIJ và Giải pháp in Dữ liệu biến đổi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-600/30 hover:-translate-y-1">
              Nhận Khảo Sát Kỹ Thuật Miễn Phí <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
              Khám Phá Giải Pháp
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">6 Trụ Cột Giải Pháp Cốt Lõi</h2>
            <p className="text-lg text-slate-600">Hệ sinh thái in ấn công nghiệp toàn diện, đáp ứng mọi nhu cầu từ thiết bị, vật tư đến dịch vụ in gia công trực tiếp trên dây chuyền.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. UV Single Pass Printing */}
            <Link href="/solutions/uv-single-pass-printing" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">1. UV Single Pass Printing</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Giải pháp in tốc độ cao trực tiếp trên chuyền. Tối ưu cho Variable Data, QR Code, Barcode, Serial kết hợp hệ thống Vision Camera.</p>
              <div className="flex items-center text-blue-600 font-bold mt-auto">
                Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2. Pad Printing */}
            <Link href="/solutions/pad-printing" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-orange-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">2. Pad Printing</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Hệ sinh thái trọn gói: Máy in, mực, silicone pad, bản in, hóa chất, primer và dịch vụ kỹ thuật chuyển giao công nghệ.</p>
              <div className="flex items-center text-orange-600 font-bold mt-auto">
                Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. Screen Printing */}
            <Link href="/solutions/screen-printing" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-purple-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">3. Screen Printing</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★☆</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Giải pháp in lụa công nghiệp. Cung cấp máy móc, vật tư cao cấp cùng dịch vụ in gia công chuyên nghiệp cho độ bền màu tuyệt đối.</p>
              <div className="flex items-center text-purple-600 font-bold mt-auto">
                Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 4. TIJ Printing Ink */}
            <Link href="/products/tij-ink" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-green-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">4. Mực In TIJ (Cartridge)</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★☆</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Hộp mực in nhiệt 12.7mm & 25.4mm cho độ phân giải 600dpi sắc nét. Khô ngay trên thùng carton, túi nilon, màng PE.</p>
              <div className="flex items-center text-green-600 font-bold mt-auto">
                Xem bảng giá mực <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 5. CIJ Consumables & Ink */}
            <Link href="/products/cij-ink" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-red-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">5. Mực In CIJ Tương Thích</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★☆</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Mực và dung môi tương thích 100% cho máy Videojet, Domino, Linx, Markem-Imaje. Tiết kiệm 40% chi phí vận hành.</p>
              <div className="flex items-center text-red-600 font-bold mt-auto">
                Xem bảng giá mực <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 6. Printing Service */}
            <Link href="/services/variable-data-printing" className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">6. Printing Service</h3>
              <div className="flex text-yellow-400 mb-4 text-lg">★★★★★</div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">Mỏ vàng dịch vụ của VNPIS. Bao gồm in QR, barcode, UV, tampon, lụa, cho thuê máy, và đặc biệt là In Dữ Liệu Biến Đổi Tận Nơi.</p>
              <div className="flex items-center text-yellow-600 font-bold mt-auto">
                Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE VNPIS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tại sao các nhà máy lớn chọn VNPIS?</h2>
              <div className="w-20 h-1 bg-orange-500 mb-8" />
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Hơn 2 năm hoạt động với đội ngũ kỹ sư thực chiến, chúng tôi thấu hiểu áp lực vận hành và tiêu chuẩn khắt khe của các nhà máy sản xuất.
              </p>
              <div className="space-y-6">
                {[
                  'Giải pháp thiết kế riêng biệt (Tailor-made) cho từng ngành',
                  'Đội ngũ kỹ sư hỗ trợ tận nhà máy 24/7',
                  'Vật tư chính hãng, thiết bị nhập khẩu Châu Âu / Nhật Bản',
                  'Chi phí vận hành dài hạn (TCO) thấp nhất'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-slate-400">Khách Hàng B2B</div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                  <div className="text-5xl font-bold text-orange-400 mb-2">2+</div>
                  <div className="text-slate-400">Năm Hoạt Động</div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-slate-400">Hỗ Trợ Kỹ Thuật</div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-slate-400">Cam Kết Chất Lượng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ngành Ứng Dụng</h2>
            <p className="text-lg text-slate-600">Công nghệ của chúng tôi tương thích và đáp ứng quy chuẩn của các ngành công nghiệp mũi nhọn.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Bao Bì', href: '/industries/packaging' },
              { name: 'Thực Phẩm', href: '/industries/food' },
              { name: 'Dược Phẩm', href: '/industries/pharmaceuticals' },
              { name: 'Điện Tử', href: '/industries/electronics' },
              { name: 'Mỹ Phẩm', href: '/industries/cosmetics' },
              { name: 'May Mặc', href: '/industries/garment' },
            ].map((industry, idx) => (
              <Link key={idx} href={industry.href} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:border-blue-500 hover:shadow-lg transition-all group">
                <Factory className="w-10 h-10 mx-auto text-slate-400 group-hover:text-blue-600 mb-4 transition-colors" />
                <h3 className="font-bold text-slate-900">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng nâng cấp dây chuyền sản xuất?</h2>
          <p className="text-xl text-blue-100 mb-10">Liên hệ ngay để nhận khảo sát kỹ thuật miễn phí tại nhà máy của bạn.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-2xl">
            Yêu Cầu Gọi Lại Ngay <Phone className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
