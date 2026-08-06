import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Mail, Phone } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

interface LandingPageProps {
  title: string;
  subtitle?: string;
  category?: string;
  externalCtaUrl?: string;
  externalCtaText?: string;
}

export default function LandingPage({ title, subtitle, category, externalCtaUrl, externalCtaText }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {category && (
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider mb-6 border border-orange-500/30">
                {category}
              </span>
            )}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle || "Giải pháp công nghiệp toàn diện từ VNPIS. Tối ưu hóa quy trình, tăng năng suất và giảm thiểu rủi ro cho doanh nghiệp của bạn."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {externalCtaUrl ? (
                <a href={externalCtaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                  {externalCtaText || "Xem Chi Tiết"} <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              ) : (
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                  Nhận Báo Giá Ngay <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
              <Link href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
                Khám Phá Chi Tiết
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Các Thách Thức Sản Xuất Thường Gặp</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">01</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Chất Lượng In Không Ổn Định</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Mực in bị nhòe, bong tróc trên các vật liệu khó bám dính như nhựa PP/PE, PET, kim loại hay dệt may.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">02</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Chi Phí Vận Hành & Downtime</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Máy móc hay hóc hỏng, thiếu phụ kiện thay thế làm dừng dây chuyền và kéo dài tiến độ sản xuất.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">03</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Rào Cản Tiêu Chuẩn Xuất Khẩu</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Khách hàng yêu cầu kiểm nghiệm hóa chất nghiêm ngặt theo tiêu chuẩn an toàn EU RoHS 10 và REACH SVHC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & BENEFITS */}
      <section id="solutions" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Giải Pháp Vượt Trội</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Chúng tôi cung cấp công nghệ tiên tiến nhất giúp giải quyết triệt để các bài toán sản xuất khó khăn.
              </p>
              <ul className="space-y-4">
                {[
                  "Hiệu suất hoạt động ổn định 24/7",
                  "Tiết kiệm 30% chi phí vận hành",
                  "Tương thích với mọi dây chuyền hiện có",
                  "Đội ngũ hỗ trợ kỹ thuật tận nơi"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl relative overflow-hidden">
                <span className="text-slate-500">[Khu vực chèn Hình Ảnh / Video]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS & INDUSTRIES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ngành Nghề Ứng Dụng</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Thực Phẩm', 'Dược Phẩm', 'Bao Bì', 'Mỹ Phẩm'].map((ind, idx) => (
              <div key={idx} className="p-6 text-center border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full mb-4" />
                <h3 className="font-bold text-slate-800">{ind}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEAD FORM & CTA */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Nhận Tư Vấn & Báo Giá Miễn Phí"
            subtitle="Đội ngũ chuyên gia của VNPIS sẵn sàng khảo sát và thiết kế giải pháp phù hợp nhất với nhà máy của bạn."
            pageTitle={title}
          />
        </div>
      </section>
    </div>
  );
}
