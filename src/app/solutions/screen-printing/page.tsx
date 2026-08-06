import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Palette, Settings, Droplet, Cog, Phone } from 'lucide-react';

export const metadata = {
  title: 'Screen Printing | Giải Pháp In Lụa Công Nghiệp | VNPIS',
  description: 'Hệ sinh thái in lụa (Screen Printing) công nghiệp VNPIS. Cung cấp máy in lụa tự động, bán tự động, mực in lụa UV/Solvent cao cấp và dịch vụ gia công.',
};

export default function ScreenPrintingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold tracking-widest mb-6 border border-purple-500/30 uppercase">
            Giải Pháp Cốt Lõi ⭐⭐⭐⭐☆
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Công Nghệ <span className="text-purple-500">In Lụa Công Nghiệp</span> (Screen Printing)
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Giải pháp in lụa toàn diện từ hệ thống máy tự động đến vật tư mực in cao cấp. Đảm bảo độ dày lớp mực ấn tượng, màu sắc rực rỡ và độ bền tuyệt đối trước hóa chất, ma sát.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-purple-600/30">
              Nhận Khảo Sát & Báo Giá <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Trọn Bộ Giải Pháp In Lụa</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Với định vị "Industrial Printing Solutions", VNPIS cung cấp mọi thứ bạn cần cho dây chuyền in lụa quy mô công nghiệp, tối ưu tính đồng đều và tự động hóa.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600">Máy In Lụa Công Nghiệp</h3>
              <p className="text-slate-600 leading-relaxed">Đa dạng từ máy in bán tự động phẳng/tròn đến các hệ thống tự động hoàn toàn tích hợp sấy UV/IR, in nhiều màu, mâm xoay Servo độ chính xác cao.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600">Mực In Lụa & Lưới In</h3>
              <p className="text-slate-600 leading-relaxed">Cung cấp hệ mực UV và Solvent nhập khẩu cao cấp bám dính tốt trên kính, nhựa, kim loại. Lụa căng khung (mesh) đa dạng số mắt lưới.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600">Vật Tư & Phụ Kiện Hỗ Trợ</h3>
              <p className="text-slate-600 leading-relaxed">Dao gạt mực (Squeegee) chịu mài mòn, keo chụp bản, hóa chất tẩy rửa khung, bàn chụp bản UV, và các linh kiện thay thế chính hãng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sức Mạnh Của Lớp Mực Dày</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                In lụa vẫn là vua khi nhắc đến độ dày lớp phủ mực, mang lại màu sắc rực rỡ, độ che phủ (opacity) xuất sắc và khả năng chống chịu điều kiện khắc nghiệt mà các công nghệ in kỹ thuật số khó thay thế.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Chai lọ mỹ phẩm (Thủy tinh, Nhựa)",
                  "Vỏ bình ắc quy, Bình nước lọc",
                  "Linh kiện điện tử, Phím bấm",
                  "Kính kiến trúc, Kính ô tô",
                  "Bao bì dược phẩm",
                  "Vỏ thiết bị gia dụng"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-8 flex flex-col justify-center text-center relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900/80 z-0"/>
                 <div className="relative z-10">
                   <Factory className="w-20 h-20 text-purple-400 mx-auto mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">Gia Công In Lụa Tại VNPIS</h3>
                   <p className="text-slate-300 mb-6">Chúng tôi nhận gia công in lụa số lượng lớn cho các nhà máy không có sẵn chuyền in. Đảm bảo tiến độ nhanh, chất lượng in vượt qua các bài test băng keo, test cồn khắc nghiệt nhất.</p>
                   <Link href="/services/screen-printing-service" className="inline-block text-purple-400 font-bold hover:text-purple-300 transition-colors">
                     Xem Dịch Vụ Gia Công &rarr;
                   </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bạn Đang Gặp Vấn Đề Về Bám Dính Mực?</h2>
          <p className="text-xl text-purple-100 mb-10">Liên hệ kỹ sư VNPIS để nhận mẫu test thử mực hoặc tư vấn cấu hình máy in lụa phù hợp nhất cho sản phẩm của bạn.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-2xl">
            Tư Vấn Miễn Phí <Phone className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
