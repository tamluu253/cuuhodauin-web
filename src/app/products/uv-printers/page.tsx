import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Zap, Settings, ShieldCheck } from 'lucide-react';
import uvPrinters from '@/data/uv-printers.json';

export const metadata = {
  title: 'Máy In UV Single Pass | VNPIS - Giải Pháp In Ấn Công Nghiệp',
  description: 'Danh mục máy in UV Single Pass tốc độ cao, độ phân giải sắc nét, đáp ứng in dữ liệu biến đổi trên mọi bề mặt bao bì, tem nhãn.',
};

export default function UvPrintersPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/30 text-sm font-bold tracking-wider">
                MÁY IN UV SINGLE PASS
              </span>
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Tốc Độ Chớp Nhoáng <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Độ Nét Hoàn Hảo</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Khám phá dải sản phẩm máy in UV Single Pass thế hệ mới. Giải pháp tối thượng cho việc in dữ liệu biến đổi (VDP), mã vạch, QR code tốc độ cao trên dây chuyền công nghiệp. Bám dính hoàn hảo trên nhựa, kim loại, bao bì màng mềm.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#catalog" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center shadow-lg shadow-blue-600/30">
                  Xem Các Dòng Máy <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center backdrop-blur-sm">
                  Tư Vấn Miễn Phí
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Zap className="w-10 h-10 text-yellow-400 mb-3" />
                  <span className="font-bold">Tốc Độ Tối Đa</span>
                  <span className="text-slate-400 text-sm mt-1">150m / phút</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Settings className="w-10 h-10 text-blue-400 mb-3" />
                  <span className="font-bold">Độ Phân Giải</span>
                  <span className="text-slate-400 text-sm mt-1">1200 dpi</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <Factory className="w-10 h-10 text-cyan-400 mb-3" />
                  <span className="font-bold">Khổ In Đa Dạng</span>
                  <span className="text-slate-400 text-sm mt-1">Từ 54mm đến 486mm</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-10 h-10 text-green-400 mb-3" />
                  <span className="font-bold">Độ Bền Đầu In</span>
                  <span className="text-slate-400 text-sm mt-1">10 Tỷ Lần Phun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATALOG SECTION */}
      <section id="catalog" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Danh Mục Máy In UV Single Pass</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">
              Với thiết kế mô-đun linh hoạt, hệ thống in UV Single Pass của chúng tôi có thể được tùy biến số lượng đầu in từ 1 đến 9 đầu, đáp ứng chính xác khổ in yêu cầu của doanh nghiệp.
            </p>
          </div>

          <div className="space-y-16">
            {uvPrinters.map((printer, index) => (
              <div key={printer.id} className={`flex flex-col lg:flex-row gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image 
                      src={printer.image} 
                      alt={printer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{printer.name}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {printer.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Tính năng nổi bật</h4>
                    <ul className="space-y-3">
                      {printer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Thông số kỹ thuật</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                      <div>
                        <span className="text-slate-500 block mb-1">Loại Đầu In</span>
                        <span className="font-semibold text-slate-900">{printer.specs.printheadType}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1">Khổ In</span>
                        <span className="font-semibold text-slate-900">{printer.specs.printWidth}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1">Tốc Độ In</span>
                        <span className="font-semibold text-slate-900">{printer.specs.printSpeed}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1">Độ Phân Giải</span>
                        <span className="font-semibold text-slate-900">{printer.specs.resolution}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block mb-1">Hệ Thống Sấy</span>
                        <span className="font-semibold text-slate-900">{printer.specs.curingSystem}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. ONSITE PRINTING SERVICE */}
      <section className="py-20 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6">
            <Factory className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dịch Vụ In Dữ Liệu Biến Đổi Tận Nơi (On-site)</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Bên cạnh việc nhận in gia công trực tiếp tại xưởng VNPIS, chúng tôi còn cung cấp <strong>dịch vụ đem máy móc và nhân sự chuyên nghiệp đến in trực tiếp tại nhà máy của khách hàng</strong>. Đây là giải pháp hoàn hảo để đảm bảo tính an toàn cho dữ liệu, tránh rủi ro hao hụt bao bì trong quá trình vận chuyển.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Bảo mật dữ liệu 100%</h3>
              <p className="text-sm text-slate-600">Quá trình in mã vạch, QR Code biến đổi diễn ra hoàn toàn dưới sự giám sát tại xưởng của bạn, tuyệt đối không rò rỉ dữ liệu.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Không rủi ro vận chuyển</h3>
              <p className="text-sm text-slate-600">Loại bỏ khâu đóng gói vận chuyển màng/bao bì đi và về, giảm thiểu tuyệt đối tình trạng hư hỏng, xước hay nhăn bao bì.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <Settings className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Lắp đặt siêu tốc</h3>
              <p className="text-sm text-slate-600">Đội ngũ kỹ thuật VNPIS sẽ đến tận nơi thiết lập hệ thống máy in UV trên chuyền có sẵn và vận hành ra sản lượng ngay lập tức.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bạn Cần Tích Hợp Lên Dây Chuyền Có Sẵn?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Hệ thống máy in UV Single Pass của VNPIS được thiết kế dạng mô-đun, cho phép tích hợp trực tiếp lên máy đóng gói, máy chia cuộn hoặc dây chuyền sản xuất hiện hữu của bạn để tiết kiệm không gian và nhân lực.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-xl shadow-slate-900/10 inline-block">
            Liên Hệ Đội Ngũ Kỹ Thuật
          </Link>
        </div>
      </section>

    </main>
  );
}
