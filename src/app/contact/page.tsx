import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Wrench, AlertTriangle, Cpu, Building2, Store } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Liên Hệ VNPIS | Trụ Sở Chính & Giải Pháp In Công Nghiệp',
  description: 'Liên hệ VNPIS (Trụ sở: 202 Lê Lai, P. Bến Thành, TP.HCM) để nhận tư vấn báo giá mực in Henkey, Dubuit, máy in tampon, máy in lụa và hỗ trợ kỹ thuật tận nơi 24/7.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold tracking-wider mb-6 border border-orange-500/30 uppercase">
              VNPIS Contact Center
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
              Liên Hệ Với VNPIS
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Giải pháp công nghiệp toàn diện từ VNPIS. Tối ưu hóa quy trình sản xuất, tư vấn vật tư mực in & máy móc chính hãng, hỗ trợ kỹ thuật tận nơi 24/7.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Hotline Kỹ Thuật 24/7</div>
                  <div className="text-lg font-bold text-white">0987 453 866</div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Email Báo Giá</div>
                  <div className="text-base font-bold text-white">info@vnpis.com</div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Thời Gian Làm Việc</div>
                  <div className="text-sm font-bold text-white">Thứ 2 - T7: 8h - 17h30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THÁCH THỨC VÀ GIẢI PHÁP THỰC TẾ (PAIN POINTS SOLVED BY VNPIS) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nhà Máy Của Bạn Đang Gặp Thách Thức Nào?
            </h2>
            <p className="text-slate-600 text-lg">
              VNPIS thấu hiểu những rủi ro trong vận hành sản xuất công nghiệp và luôn sẵn sàng hỗ trợ giải quyết triệt để.
            </p>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Problem 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 shrink-0"/> Mực In Bong Tróc / Khó Bám
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Nỗi đau tróc mực trên các chất liệu khó như nhựa PP/PE, PET, nhôm, kính, sơn tĩnh điện khiến sản phẩm bị lỗi xuất khẩu hoặc bị đối tác trả hàng.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Giải pháp VNPIS:</span>
                <p className="text-sm font-semibold text-slate-800">
                  Cung cấp mực in Henkey, Dubuit đạt RoHS/REACH & xử lý bề mặt chuyên sâu.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center">
                  <Wrench className="w-5 h-5 text-orange-500 mr-2 shrink-0"/> Máy In Hay Lỗi / Dừng Dây Chuyền
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Máy in tampon, máy in lụa hoặc đầu in phun gặp sự cố hóc hỏng giữa ca sản xuất, thiếu linh kiện thay thế gây chậm tiến độ đơn hàng.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Giải pháp VNPIS:</span>
                <p className="text-sm font-semibold text-slate-800">
                  Kỹ thuật hỗ trợ 24/7 tận nơi, kho linh kiện sẵn sàng & dịch vụ cho thuê máy.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black group-hover:scale-110 transition-transform">
                  03
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center">
                  <Cpu className="w-5 h-5 text-blue-500 mr-2 shrink-0"/> Lo Ngại Tiêu Chuẩn Xuất Khẩu
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Khách hàng B2B đòi hỏi khắt khe chứng nhận an toàn hóa chất RoHS 10, REACH SVHC, ZDHC Level 3 cho thị trường Châu Âu, Mỹ, Nhật Bản.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Giải pháp VNPIS:</span>
                <p className="text-sm font-semibold text-slate-800">
                  100% vật tư có đầy đủ Test Report từ trung tâm CTI & chứng nhận quốc tế.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TRỤ SỞ CHÍNH & ĐỊA ĐIỂM KINH DOANH VNPIS */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trụ Sở & Địa Điểm Kinh Doanh</h2>
            <p className="text-slate-600">Hệ thống trụ sở chính pháp lý và các địa điểm kinh doanh kho bãi của VNPIS.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Trụ Sở Chính */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 font-bold text-xs rounded-full">Trụ Sở Chính Pháp Lý</span>
                  <Building2 className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Công Ty TNHH VNPIS</h3>
                <ul className="space-y-4 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Địa chỉ trụ sở chính:</strong>
                      Tầng 1, 202 Lê Lai, Phường Bến Thành, Thành phố Hồ Chí Minh, Việt Nam.
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                    <span>Hotline: <strong>0987 453 866</strong></span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                    <span>Email: <strong>info@vnpis.com</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Địa Điểm Kinh Doanh & Kho Bãi */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full">Địa Điểm Kinh Doanh & Kho Hàng</span>
                  <Store className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Địa Điểm Hoạt Động & Kho Bãi</h3>
                <ul className="space-y-4 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Địa điểm kinh doanh 1:</strong>
                      62 Trần Thị Nơi, Phường Chánh Hưng, TP. Hồ Chí Minh.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Địa điểm kinh doanh 2:</strong>
                      18 Đường số 4, Khu Dân Cư Đại Phúc Green Villas, Xã Bình Hưng, TP. Hồ Chí Minh.
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    <span>Email: <strong>info@vnpis.com</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORM YÊU CẦU TƯ VẤN & BÁO GIÁ */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Gửi Yêu Cầu Tư Vấn & Khảo Sát Nhà Máy"
            subtitle="Đội ngũ kỹ sư VNPIS sẽ khảo sát thực tế, test mẫu in tận nơi và đề xuất giải pháp tối ưu chi phí cho doanh nghiệp của bạn."
            pageTitle="Contact Page"
          />
        </div>
      </section>
    </div>
  );
}
