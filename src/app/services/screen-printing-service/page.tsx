import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, PackageCheck, Truck, Droplet } from 'lucide-react';

export const metadata = {
  title: 'Dịch Vụ In Gia Công Lụa (Screen Printing Service) | VNPIS',
  description: 'Nhận gia công in lụa công nghiệp số lượng lớn. In trên mọi bề mặt: nhựa, thủy tinh, kim loại. Chất lượng cao, cam kết độ bám dính, đáp ứng tiến độ khắt khe.',
};

export default function ScreenPrintingServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold tracking-widest mb-6 border border-purple-500/30 uppercase">
            Xưởng Gia Công
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Gia Công <span className="text-purple-500">In Lụa Công Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Giải quyết bài toán sản lượng lớn, yêu cầu độ bám dính khắt khe và lớp mực dày che phủ tốt. Chúng tôi in gia công trực tiếp tại xưởng VNPIS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-purple-600/30">
              Nhận Báo Giá In Gia Công <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY OUTSOURCE TO US? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tại Sao Chọn In Lụa Gia Công Tại VNPIS?</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Thay vì đầu tư máy móc và tuyển thợ in lụa tốn kém, hãy giao phó hạng mục in ấn cho các chuyên gia thực thụ.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplet className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cam Kết Độ Bám Dính</h3>
              <p className="text-slate-600">Sử dụng mực UV/Solvent cao cấp, bao test băng keo 3M, test cồn 90 độ, test luộc nước sôi theo yêu cầu.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hệ Thống Máy Tự Động</h3>
              <p className="text-slate-600">In bằng hệ thống máy tự động hoàn toàn thay vì kéo tay, đảm bảo độ đồng đều màu sắc trên 100,000 sản phẩm.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PackageCheck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kiểm Tra Chất Lượng</h3>
              <p className="text-slate-600">Bộ phận QC kiểm tra độc lập từng mẻ hàng trước khi xuất xưởng, tỷ lệ phế phẩm (reject rate) dưới 1%.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tiến Độ Giao Hàng</h3>
              <p className="text-slate-600">Xưởng hoạt động liên tục 2 ca/ngày, năng lực đáp ứng những đơn hàng gấp, số lượng lớn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Năng Lực Nhận Gia Công</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Kinh nghiệm xử lý đa dạng các hình khối và chất liệu phức tạp mà in phun hay kỹ thuật số không làm được.
              </p>
              <div className="space-y-4">
                {[
                  "In tròn (Cylindrical): Chai lọ mỹ phẩm, bình nước, ly cốc",
                  "In phẳng (Flatbed): Mặt kính điện thoại, vỏ thiết bị điện tử",
                  "Chất liệu Nhựa: PP, PE (có xử lý ngọn lửa/Primer), PET, PVC, ABS",
                  "Chất liệu Thủy tinh, Kim loại nhôm/sắt, Inox",
                  "Khả năng in nhiều màu chồng nét chính xác (Registration)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl">
                 <h3 className="text-2xl font-bold text-white mb-6">Quy Trình Gia Công VNPIS</h3>
                 <ol className="space-y-6">
                   <li className="flex">
                     <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 mr-4">1</span>
                     <div>
                       <strong className="block text-lg text-purple-300 mb-1">Tiếp nhận Mẫu & Yêu cầu</strong>
                       <p className="text-slate-400 text-sm">Nhận sản phẩm thô, yêu cầu thiết kế, bài test chịu lực/hóa chất từ khách hàng.</p>
                     </div>
                   </li>
                   <li className="flex">
                     <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 mr-4">2</span>
                     <div>
                       <strong className="block text-lg text-purple-300 mb-1">Test Mẫu Thực Tế (Miễn Phí)</strong>
                       <p className="text-slate-400 text-sm">Pha mực, làm khuôn, in thử trên phôi thực tế và gửi lại khách hàng đánh giá phê duyệt.</p>
                     </div>
                   </li>
                   <li className="flex">
                     <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 mr-4">3</span>
                     <div>
                       <strong className="block text-lg text-purple-300 mb-1">Sản Xuất Hàng Loạt</strong>
                       <p className="text-slate-400 text-sm">Sau khi chốt giá và mẫu, tiến hành chạy trên dây chuyền tự động, QC kiểm tra và đóng gói.</p>
                     </div>
                   </li>
                 </ol>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
