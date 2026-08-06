import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Cog, Droplet, Users, Phone } from 'lucide-react';

export const metadata = {
  title: 'Pad Printing | Giải Pháp In Tampon Trọn Gói | VNPIS',
  description: 'Hệ sinh thái Pad Printing (In Tampon) toàn diện từ VNPIS: Máy in, mực in chuyên dụng, silicone pad, bản in thép/polymer, hóa chất và dịch vụ chuyển giao.',
};

export default function PadPrintingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-orange-500/20 text-orange-300 text-sm font-bold tracking-widest mb-6 border border-orange-500/30 uppercase">
            Giải Pháp Cốt Lõi ⭐⭐⭐⭐⭐
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Hệ Sinh Thái <span className="text-orange-500">Pad Printing</span> Toàn Diện
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            In Pad (Tampon) chính là "ADN" của VNPIS. Rất ít đối thủ trên thị trường có thể cung cấp đầy đủ và chuyên sâu từ Thiết bị, Vật tư, đến Dịch vụ như chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-orange-500 rounded-lg hover:bg-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30">
              Nhận Tư Vấn Trọn Gói <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Giải Pháp "Chìa Khóa Trao Tay"</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Với VNPIS, bạn không cần phải tìm kiếm nhiều nhà cung cấp. Chúng tôi có mọi thứ bạn cần để thiết lập và vận hành xưởng in Pad Printing chuyên nghiệp.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/products/pad-printers" className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600">Máy In Pad (Pad Printers)</h3>
              <p className="text-slate-600 leading-relaxed">Cung cấp các dòng máy in Pad từ bán tự động (1-2 màu) đến hệ thống tự động hoàn toàn (lên đến 8-12 màu) tích hợp mâm xoay và sấy.</p>
            </Link>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Droplet className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600">Mực In Pad & Hóa Chất</h3>
              <p className="text-slate-600 leading-relaxed">Mực in đa dạng chất liệu (Nhựa, Kim loại, Cao su, Thủy tinh). Cung cấp đầy đủ dung môi pha loãng, chất đóng rắn, dung dịch rửa và Primer.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600">Silicone Pad & Bản In</h3>
              <p className="text-slate-600 leading-relaxed">Chế tạo và cung cấp cục cao su (Silicone Pad) mọi hình dáng, độ cứng. Khắc bản thép dày, thép mỏng và bản Polymer chất lượng cao.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chuyên Môn Sâu Về Công Nghệ</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Pad Printing là một nghệ thuật đòi hỏi sự chính xác và am hiểu sâu sắc về hóa học vật liệu. VNPIS tự tin giải quyết những ca in khó nhất mà các đơn vị khác từ chối.
              </p>
              
              <div className="space-y-4">
                {[
                  "In trên bề mặt cong, lồi lõm phức tạp",
                  "Khắc phục lỗi lem mực, thiếu nét, kéo tơ",
                  "Giải quyết bài toán bám dính trên Silicone, PP, POM",
                  "Thiết lập quy trình chuẩn (SOP) cho công nhân nhà máy",
                  "Đào tạo và chuyển giao công nghệ tận nơi"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center flex flex-col justify-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">Đội ngũ kỹ thuật</div>
                <div className="text-slate-400 text-sm">Chuyên gia thực chiến &gt;10 năm kinh nghiệm</div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center flex flex-col justify-center">
                <Factory className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">Xưởng Gia Công</div>
                <div className="text-slate-400 text-sm">Hệ thống máy in Pad hiện đại tại kho VNPIS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINTING SERVICE */}
      <section className="py-24 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-orange-200 text-orange-800 text-sm font-bold tracking-widest mb-6 uppercase">
            Dịch Vụ Nổi Bật
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dịch Vụ In Gia Công Tampon</h2>
          <p className="text-lg text-slate-700 mb-10 leading-relaxed">
            Nếu bạn không muốn đầu tư máy móc và nhân sự, VNPIS nhận gia công in Pad Printing số lượng lớn cho các nhà máy sản xuất (Nhựa, y tế, điện tử, đồ chơi...). Cam kết chất lượng đồng đều và tiến độ giao hàng nhanh nhất.
          </p>
          <Link href="/services/pad-printing-service" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 text-lg">
            Tìm hiểu chi tiết dịch vụ gia công <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trải Nghiệm Dịch Vụ Của Chuyên Gia</h2>
          <p className="text-xl text-blue-100 mb-10">Liên hệ với chúng tôi để test mẫu in thử miễn phí trên chất liệu của bạn và nhận báo giá trọn gói thiết bị hoặc dịch vụ gia công.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-2xl">
            Liên Hệ VNPIS Ngay <Phone className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
