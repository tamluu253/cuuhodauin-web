import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Settings, Cog, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export const metadata = {
  title: 'Bảo Trì & Sửa Chữa Máy In (Machine Repair) | VNPIS',
  description: 'Dịch vụ sửa chữa, bảo trì máy in phun công nghiệp CIJ (Videojet, Domino, Linx), máy in lụa, máy in tampon. Đội ngũ kỹ sư >10 năm kinh nghiệm xử lý sự cố.',
};

export default function MachineRepairPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-300 text-sm font-bold tracking-widest mb-6 border border-green-500/30 uppercase">
            Dịch Vụ Kỹ Thuật
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Sửa Chữa & Bảo Trì <span className="text-green-500">Máy In Công Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Khắc phục mọi sự cố máy in phun Date Code (CIJ), máy in Pad, máy in lụa nhanh chóng nhất. Đảm bảo thời gian downtime của dây chuyền là tối thiểu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-xl shadow-green-600/30">
              Gọi Kỹ Thuật Viên <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PROVIDED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Chuyên Trị Các Dòng Máy In Nào?</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Máy In Phun CIJ (Date Code)</h3>
              <p className="text-slate-600 mb-4">Chuyên trị lỗi nghẹt béc (nozzle), lỗi áp suất bơm (pump), lỗi không thu hồi mực của các hãng lớn: Videojet, Domino, Linx, Markem-Imaje, Hitachi.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Súc rửa lõi Core (Ink System)</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Sửa Board nguồn, Board điều khiển</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Máy In Pad (Tampon)</h3>
              <p className="text-slate-600 mb-4">Xử lý các lỗi lệch mâm xoay, lỗi hệ thống khí nén (cylinder), thay thế cốc mực (ink cup) và dao gạt bị mẻ gây lem mực.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Canh chỉnh độ chính xác cơ khí</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Thay thế lưỡi dao gạt vòng</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hệ Thống In UV & Vision</h3>
              <p className="text-slate-600 mb-4">Bảo trì hệ thống máy in UV Single Pass, vệ sinh đầu in công nghiệp (Ricoh, Epson), cân chỉnh thông số sấy LED UV và cụm Camera Vision.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Phục hồi đầu in UV bị nghẹt nghẹ</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2"/> Calibrate hệ màu chuẩn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAINTENANCE CONTRACTS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hợp Đồng Bảo Trì Định Kỳ (PM)</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Đừng đợi máy hỏng mới sửa. Preventive Maintenance (Bảo trì phòng ngừa) giúp kéo dài tuổi thọ thiết bị và ngăn chặn rủi ro dừng chuyền trong giờ cao điểm.
              </p>
              <div className="space-y-4">
                {[
                  "Kỹ sư đến nhà máy kiểm tra định kỳ mỗi tháng/quý",
                  "Thay lọc mực (Filters) đúng hạn để bảo vệ đầu in",
                  "Back-up thông số hệ thống, đề phòng mất dữ liệu",
                  "Kiểm tra và bôi trơn hệ thống cơ khí, khí nén",
                  "Được ưu tiên xử lý sự cố khẩn cấp 24/7"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
                 <ShieldCheck className="w-12 h-12 text-green-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Cam Kết Cho Mượn Máy</h3>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Trong trường hợp sự cố nghiêm trọng không thể khắc phục ngay lập tức tại hiện trường (ví dụ hỏng board mạch chính), VNPIS sẽ hỗ trợ cho khách hàng mượn một máy in backup cấu hình tương đương để dây chuyền tiếp tục chạy, trong khi chờ đem linh kiện về Lab sửa chữa.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Đội Ngũ Kỹ Thuật Đang Sẵn Sàng</h2>
          <p className="text-xl text-blue-100 mb-10">Mô tả sự cố máy in của bạn cho chúng tôi để được tư vấn hướng giải quyết nhanh nhất qua điện thoại hoặc yêu cầu cử kỹ sư đến khảo sát trực tiếp.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-slate-50 transition-colors shadow-2xl">
            Hotline Hỗ Trợ Kỹ Thuật 24/7 <Phone className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
