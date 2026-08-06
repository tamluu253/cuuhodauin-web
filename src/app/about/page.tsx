import React from 'react';
import { ArrowRight, Printer, QrCode, ShieldCheck, Factory, CheckCircle2, ChevronRight, PhoneCall, RefreshCw, Cpu } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Về Chúng Tôi | VNPIS - Giải Pháp In Ấn Công Nghiệp',
  description: 'VNPIS là nhà cung cấp hàng đầu về máy in công nghiệp (bán & cho thuê), vật tư, giải pháp in dữ liệu biến đổi, truy xuất nguồn gốc RFID và gia công in ấn.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-wider mb-6 border border-blue-500/30">
              VỀ CHÚNG TÔI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Giải Pháp Toàn Diện Cho <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">In Ấn Công Nghiệp</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              VNPIS là đối tác chiến lược cung cấp các giải pháp tự động hóa, thiết bị in ấn công nghiệp, mã hóa dữ liệu biến đổi, công nghệ RFID và dịch vụ gia công in ấn chất lượng cao. Chúng tôi cam kết đồng hành cùng doanh nghiệp tối ưu hóa sản xuất và chống hàng giả.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE SOLUTIONS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hệ Sinh Thái Giải Pháp Của VNPIS</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">
              Từ cung cấp máy móc, vật tư đến giải pháp phần mềm và dịch vụ gia công in ấn. Chúng tôi đáp ứng mọi nhu cầu khắt khe nhất của các nhà máy sản xuất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Printer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Máy In & Vật Tư C.Nghiệp</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Cung cấp hệ thống máy in Pad, in lụa, in UV Single Pass và đầu in (Ricoh, Epson). Cung cấp đa dạng các dòng mực đặc biệt (CIJ, TIJ). <strong>Hỗ trợ linh hoạt: Bán máy mới & Cho thuê máy in dài hạn.</strong>
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Bán mới & Cho Thuê</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Mực in đặc biệt</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">In Dữ Liệu Biến Đổi (VDP)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Giải pháp phần mềm và hệ thống máy in tốc độ cao chuyên in Barcode, QR Code, số nhảy ngẫu nhiên trực tiếp lên bao bì, tem nhãn, thẻ cào.
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> QR Code Trực tiếp</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Số nhảy, Barcode</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Truy Xuất & Công Nghệ RFID</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Tích hợp toàn diện công nghệ RFID ứng dụng trong quản lý kho bãi, ngành may mặc thông minh. Cung cấp giải pháp tem nhãn bảo mật, chống hàng giả tuyệt đối.
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> RFID May mặc / Kho bãi</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Chống giả bảo mật</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dịch Vụ Gia Công In Ấn</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Sở hữu hệ thống xưởng in hiện đại, chúng tôi nhận gia công in Pad, in UV, in lụa và in mã vạch trên các bề mặt khó, sản lượng lớn với chất lượng ổn định.
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Gia công In Pad, UV, Lụa</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Chi phí tối ưu</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <RefreshCw className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Cho Thuê Linh Hoạt</h4>
                  <p className="text-sm text-slate-500">Tiết kiệm chi phí đầu tư ban đầu với gói thuê máy theo tháng/năm.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Công Nghệ Hóa Chất</h4>
                  <p className="text-sm text-slate-500">Test thử mực miễn phí, tìm ra loại mực bám dính tốt nhất cho bề mặt của bạn.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center -mt-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Chất Lượng Cam Kết</h4>
                  <p className="text-sm text-slate-500">Thiết bị nhập khẩu chính hãng, độ bền cao, vận hành 24/7 ổn định.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Hỗ Trợ Kỹ Thuật Tận Nơi</h4>
                  <p className="text-sm text-slate-500">Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng xử lý sự cố nhanh chóng.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Lợi thế cạnh tranh</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tại Sao Chọn VNPIS?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Chúng tôi không chỉ bán máy móc, chúng tôi mang đến một quy trình sản xuất được nâng cấp hoàn thiện. Từ việc phân tích đặc tính bề mặt in, lựa chọn công nghệ in (Pad, Lụa, UV, TIJ, CIJ), cho đến việc lập trình phần mềm tích hợp, VNPIS bao quát mọi khía cạnh để dự án của bạn thành công.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Tư vấn kỹ thuật chuyên sâu theo dây chuyền thực tế', 'Hỗ trợ test mẫu và đưa ra cấu hình tối ưu trước khi đầu tư', 'Giải pháp trọn gói: Phần cứng - Phần mềm - Vật tư', 'Đồng hành cùng sự phát triển dài hạn của doanh nghiệp'].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full transition-colors inline-flex items-center justify-center shadow-lg shadow-blue-600/30">
                  Liên Hệ Ngay <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="https://inanvnpis.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold py-3.5 px-8 rounded-full transition-colors inline-flex items-center justify-center">
                  Xem Xưởng In Gia Công <ChevronRight className="w-5 h-5 ml-1 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn Sàng Nâng Tầm Sản Xuất?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Dù bạn muốn mua mới, thuê máy in hay đang tìm kiếm dịch vụ gia công số lượng lớn, chúng tôi luôn có giải pháp tối ưu chi phí dành cho bạn.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-xl shadow-slate-900/10 inline-block">
            Nhận Tư Vấn Miễn Phí
          </Link>
        </div>
      </section>

    </main>
  );
}
