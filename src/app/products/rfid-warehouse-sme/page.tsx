import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Package, Search, BarChart3, Clock, Zap, Phone, ShoppingCart } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Giải Pháp Quản Lý Kho RFID Cho SME | VNPIS',
  description: 'Kiểm kê 1000 sản phẩm chỉ trong 5 phút. Giải pháp RFID trọn gói cho kho hàng SME (10-2000m²).',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider mb-6 border border-orange-500/30">
              GIẢI PHÁP KHO HÀNG SME
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Giải Pháp Quản Lý Kho RFID <br/> Cho Doanh Nghiệp SME
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Kiểm kê 1000 sản phẩm chỉ trong 5 phút. Nhanh hơn 10 lần - Chính xác 100% - Không còn nỗi lo lệch tồn kho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                Nhận Báo Giá & Tư Vấn <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
                Xem Video Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kho hàng của bạn đang gặp phải những vấn đề này?</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">Những nỗi đau cản trở doanh nghiệp SME phát triển và làm thất thoát lợi nhuận mỗi ngày.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Mất quá nhiều thời gian</h3>
              <p className="text-slate-600">Kiểm kho thủ công bằng tay hoặc mã vạch (barcode) mất hàng giờ, thậm chí hàng ngày, khiến đội ngũ mệt mỏi và tốn kém chi phí nhân sự.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Lệch số lượng tồn kho</h3>
              <p className="text-slate-600">Hàng trên phần mềm báo còn nhưng thực tế đã hết (hoặc ngược lại). Tỉ lệ sai sót cao dẫn đến việc bán hụt hàng, gây mất uy tín với khách.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Khó tìm kiếm vị trí</h3>
              <p className="text-slate-600">Trong kho hàng rộng từ 10 - 2000m², việc tìm chính xác vị trí của một kiện hàng nhỏ giống như &quot;mò kim đáy bể&quot;.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & COMPETITIVE ADVANTAGE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-2 block">Vũ Khí Bí Mật</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">VNPIS không chỉ bán RFID,<br/>chúng tôi mang đến Hệ Thống Quản Lý Toàn Diện!</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Khác biệt của chúng tôi là cung cấp combo trọn gói giúp bạn triển khai ngay lập tức: In tem RFID + Ghi dữ liệu + Quản lý đồng bộ. Bạn không cần phải tìm kiếm nhiều nhà cung cấp khác nhau.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Thiết bị chuẩn công nghiệp</h4>
                    <p className="text-slate-400">Chip Impinj M4/M5, thiết bị quét lõi Impinj R2000 cao cấp.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Phần mềm đi kèm tối ưu</h4>
                    <p className="text-slate-400">Giao diện thân thiện, báo cáo tồn kho realtime, import/export dữ liệu nhanh chóng.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Triển khai cực nhanh</h4>
                    <p className="text-slate-400">Sẵn sàng vận hành hệ thống chỉ sau 7-14 ngày setup.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                  <h3 className="text-4xl font-black text-white mb-2">10x</h3>
                  <p className="text-slate-400 font-medium">Tốc độ kiểm kho</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
                  <h3 className="text-4xl font-black text-white mb-2">100%</h3>
                  <p className="text-slate-400 font-medium">Chính xác dữ liệu</p>
                </div>
                <div className="bg-orange-600 p-6 rounded-2xl text-center col-span-2 shadow-lg shadow-orange-600/20">
                  <h3 className="text-3xl font-black text-white mb-2">1000 sp / 5 phút</h3>
                  <p className="text-orange-100 font-medium text-lg">Năng suất thực tế đo lường</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS & COMBO */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Danh Mục Sản Phẩm & Bảng Giá Đầu Tư</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* COMBO BÁN CHẠY */}
            <div className="lg:col-span-2 bg-white rounded-3xl border-2 border-orange-500 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">
                ĐỀ XUẤT CHO SME
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Combo Khởi Tạo Hệ Thống RFID</h3>
                <p className="text-slate-600 mb-6">Trọn bộ giải pháp cắm là chạy, hoàn hảo cho kho hàng dưới 2000m².</p>
                
                <div className="flex items-end gap-2 mb-8 pb-8 border-b border-slate-100">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">25.000.000</span>
                  <span className="text-xl text-slate-500 font-medium mb-1">VNĐ</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">1x Máy đọc RFID cầm tay (Handheld)</span>
                      <span className="text-sm text-slate-600">Model UHF R2000 cao cấp, hệ điều hành Android, độ trễ cực thấp.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">5000x Tem RFID UHF Cao cấp</span>
                      <span className="text-sm text-slate-600">Chip Impinj M4/M5 chuẩn EPC Gen2 / ISO 18000-6C, in dán sẵn.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">Phần mềm kiểm kho cơ bản</span>
                      <span className="text-sm text-slate-600">Miễn phí sử dụng, tích hợp tính năng quét hàng loạt và báo cáo tồn.</span>
                    </div>
                  </li>
                </ul>

                <Link href="#contact" className="w-full flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Đặt Mua Combo Ngay
                </Link>
              </div>
            </div>

            {/* MODULE NÂNG CẤP */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Cổng Fixed Reader + Antenna</h4>
                <p className="text-sm text-slate-600 mb-4">Tracking tự động khi hàng hóa đi qua cổng xuất/nhập. Không cần nhân sự đứng quét.</p>
                <span className="text-sm font-semibold text-blue-600">Phù hợp: Dự án lớn, lưu lượng cao.</span>
              </div>
              
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Tag RFID Chuyên Dụng</h4>
                <p className="text-sm text-slate-600 mb-4">Tag chống kim loại (quản lý máy móc, tài sản) hoặc Tag giặt là/chịu nhiệt (bệnh viện, khách sạn, spa).</p>
                <span className="text-sm font-semibold text-slate-700">Giá: Báo giá theo số lượng.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quy Trình Triển Khai Siêu Tốc Trong 3 Bước</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Vận hành ngay lập tức, không làm gián đoạn công việc kinh doanh của bạn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10" />
            
            <div className="text-center bg-white">
              <div className="w-20 h-20 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl border-4 border-white">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Dán Tag RFID</h3>
              <p className="text-slate-600">Đội ngũ gắn tem RFID (hoặc tag chuyên dụng) lên từng sản phẩm, pallet hoặc thùng hàng.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-20 h-20 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl border-4 border-white">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Import Dữ Liệu</h3>
              <p className="text-slate-600">Đồng bộ mã định danh trên chip RFID với hệ thống phần mềm quản lý kho của bạn.</p>
            </div>
            
            <div className="text-center bg-white">
              <div className="w-20 h-20 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl border-4 border-white">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Quét & Vận Hành</h3>
              <p className="text-slate-600">Dùng máy quét Handheld lướt qua các kệ hàng. Hệ thống tự nhận diện và cập nhật tồn kho tức thì.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEMO VIDEO (Social Proof) */}
      <section id="demo" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Trăm Nghe Không Bằng Một Thấy</h2>
          <p className="text-lg text-slate-600 mb-10">Xem trực tiếp tốc độ kiểm kho bằng công nghệ RFID vượt trội như thế nào so với mã vạch truyền thống.</p>
          
          <div className="aspect-video bg-slate-800 rounded-3xl shadow-2xl overflow-hidden relative flex items-center justify-center border border-slate-300">
            <iframe 
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/qE28opXzqB0" 
              title="RFID Inventory Scanning Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. LEAD FORM & CTA */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ConsultationForm
            title="Sẵn Sàng Nâng Cấp Kho Hàng Của Bạn?"
            subtitle="Đừng để thất thoát tồn kho làm giảm lợi nhuận. Để lại thông tin, chuyên gia của VNPIS sẽ liên hệ khảo sát miễn phí."
            pageTitle="Giải Pháp RFID Kho SME"
          />
        </div>
      </section>
    </div>
  );
}
