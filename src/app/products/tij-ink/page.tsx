import React from 'react';
import { ArrowRight, CheckCircle2, Zap, MonitorSmartphone, Package, Target } from 'lucide-react';
import Link from 'next/link';
import SpecialInksCatalog from '@/components/products/SpecialInksCatalog';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Mực In Nhiệt TIJ (Thermal Inkjet) | Độ Phân Giải Cao | VNPIS',
  description: 'Mực in TIJ chất lượng cao dùng cho hộp mực 12.7mm, 25.4mm. In barcode, QR code siêu nét 600dpi, bám chắc trên thùng carton, bao bì màng, hộp giấy.',
};

export default function TIJInkPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold tracking-wider mb-6 border border-orange-500/30">
              SẢN PHẨM: MỰC IN TIJ (MỰC NHIỆT)
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Mực In TIJ - Giải Pháp In <span className="text-orange-400">Siêu Nét 600dpi</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tối ưu cho in QR Code, Barcode, và thông tin truy xuất nguồn gốc trên mọi bao bì. Cắm là in, không rườm rà súc rửa, tiết kiệm nhân sự tối đa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                Yêu Cầu Báo Giá <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Thách thức khi dùng mực TIJ kém chất lượng</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mã Vạch, QR Không Đọc Được</h3>
              <p className="text-slate-600 leading-relaxed">Mực bị nhòe hoặc đứt nét, dẫn đến máy quét mã vạch không thể đọc, gây gián đoạn khâu kiểm kho và xuất hàng.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Package className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mực Lau Dễ Bay Chữ</h3>
              <p className="text-slate-600 leading-relaxed">Mực bám kém trên túi nilon, màng PE bóng. Chỉ cần vuốt tay nhẹ hoặc ma sát trong lúc vận chuyển là mất số lô, NSX.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nghẹt Đầu Phun Vĩnh Viễn</h3>
              <p className="text-slate-600 leading-relaxed">Do bản chất cartridge dính liền đầu phun, dùng mực dỏm khiến đầu phun bị tắt nghẽn, làm hỏng toàn bộ hộp mực đắt tiền.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Chất Lượng Vượt Trội Từ VNPIS</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Độ phân giải siêu nét lên tới 600dpi",
                  "Khô ngay lập tức trên túi nilon, nhôm, nhựa",
                  "Chống nghẹt đầu kim (Decap time dài)",
                  "Tương thích hộp mực 12.7mm & 25.4mm",
                  "Hoạt động ổn định ở tốc độ băng chuyền cao"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="text-orange-600 font-bold hover:text-orange-700 flex items-center transition-colors">
                Nhận Báo Giá Mực TIJ <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 bg-slate-900 relative min-h-[300px]">
              <video 
                src="/media/tij-chips-bag-test.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                 <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-700 max-w-sm text-center">
                    <p className="text-white font-bold text-lg mb-1">In trực tiếp trên bao bì PE</p>
                    <p className="text-slate-300 text-sm">Test thực tế: Mực TIJ khô ngay, cào không tróc.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPATIBILITY TABLE */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bảng Phân Loại Mực TIJ</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Chọn đúng loại mực theo bề mặt vật liệu để đảm bảo độ bám và mã vạch đạt chuẩn.</p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto shadow-xl rounded-2xl border border-slate-200 bg-slate-50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700 whitespace-nowrap">Loại Bề Mặt In</th>
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700 whitespace-nowrap">Dung Tích Hộp Mực</th>
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700">Đặc Tính Kỹ Thuật</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b border-slate-200 hover:bg-white transition-colors bg-white">
                  <td className="p-4 md:p-5 font-bold">Vật Liệu Thấm Hút<br/><span className="text-sm text-slate-500 font-normal">(Carton, Giấy Kraft, Gỗ)</span></td>
                  <td className="p-4 md:p-5 whitespace-nowrap text-slate-700">42ml (12.7mm)<br/>72ml (25.4mm)</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Gốc nước (Water-based). Thấm sâu vào sớ giấy, độ tương phản cực cao để quét QR code/Barcode 100% pass. Thân thiện môi trường.</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-white transition-colors bg-slate-50">
                  <td className="p-4 md:p-5 font-bold">Vật Liệu Không Thấm Hút<br/><span className="text-sm text-slate-500 font-normal">(Nilon, Màng PE/PP, Kim loại, Thủy tinh)</span></td>
                  <td className="p-4 md:p-5 whitespace-nowrap text-slate-700">42ml (12.7mm)<br/>72ml (25.4mm)</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Gốc dung môi (Solvent-based). Khô nhanh từ 1-3 giây. Chống trầy xước và bong tróc cực tốt khi ma sát vật lý.</td>
                </tr>
                <tr className="hover:bg-white transition-colors bg-white">
                  <td className="p-4 md:p-5 font-bold">Bề Mặt Đặc Biệt<br/><span className="text-sm text-slate-500 font-normal">(Chịu nhiệt, In tàng hình, Cáp điện)</span></td>
                  <td className="p-4 md:p-5 whitespace-nowrap text-slate-700">42ml (12.7mm)</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Mực UV tàng hình (chỉ thấy dưới đèn UV), Mực chịu nhiệt độ cao (200-300°C), Mực trắng in cáp. Vui lòng liên hệ đặt hàng riêng.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INK CATALOG (DATA KHỦNG) */}
      <section id="catalog" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tra Cứu Hơn 100+ Mã Mực CIJ / TIJ</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Hệ thống cơ sở dữ liệu các dòng mực đặc biệt, mực tương thích cho mọi bề mặt công nghiệp.</p>
          </div>

          <SpecialInksCatalog />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Câu Hỏi Thường Gặp Về Hộp Mực In TIJ</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hộp mực TIJ có bám dính tốt trên bề mặt nhựa trơn bóng (PP, PE, PET) không?</h3>
              <p className="text-slate-600 leading-relaxed">Có. VNPIS cung cấp hộp mực TIJ gốc dung môi (Solvent-based) chuyên dụng. Dòng mực này khô cực nhanh chỉ từ 1-3 giây, bám dính vĩnh viễn trên các bề mặt khó in như nhựa PP/PE, màng nhôm, màng co BOPP, chống trầy xước và không bị nhòe khi ma sát.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mực in TIJ VNPIS có in được mã vạch QR Code để quét ứng dụng không?</h3>
              <p className="text-slate-600 leading-relaxed">Chắc chắn. Hộp mực TIJ (công nghệ HP 45A) của chúng tôi cho độ phân giải cực cao lên đến 600 DPI. Cực kỳ hoàn hảo để in mã vạch (Barcode), mã QR Code truy xuất nguồn gốc, hoặc chữ siêu nhỏ mà các thiết bị quét mã có thể đọc được chính xác 100%.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Làm sao để tránh nghẹt đầu in TIJ khi không sử dụng thường xuyên?</h3>
              <p className="text-slate-600 leading-relaxed">Để kéo dài tuổi thọ hộp mực và tránh nghẹt mực, bạn nên đậy nắp bảo vệ (clip) ngay sau khi ngưng dây chuyền sản xuất trên 15 phút. Nếu bị khô nhẹ ở bề mặt kim phun, bạn chỉ cần dùng vải mềm không xơ lau nhẹ một chiều với dung dịch vệ sinh là có thể dùng lại bình thường.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD FORM SECTION */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Bạn Cần Tìm Hộp Mực TIJ Tương Thích?"
            subtitle="Để lại thông tin máy in và bề mặt in, chúng tôi sẽ báo giá dòng mực chuẩn nhất cho bạn."
            pageTitle="Mực In TIJ"
          />
        </div>
      </section>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "Hộp Mực In Phun Cầm Tay TIJ VNPIS",
                "description": "Giải pháp hộp mực in TIJ (Thermal Inkjet) tương thích công nghệ HP 45A. In mã vạch QR code sắc nét 600dpi, bám dính vĩnh viễn trên nhựa PP, PE, kim loại.",
                "brand": {
                  "@type": "Brand",
                  "name": "VNPIS"
                },
                "category": "Industrial Printing Ink",
                "offers": {
                  "@type": "Offer",
                  "url": "https://vnpis.com/products/tij-ink",
                  "priceCurrency": "VND",
                  "price": "0",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Hộp mực TIJ có bám dính tốt trên bề mặt nhựa trơn bóng (PP, PE, PET) không?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Có. VNPIS cung cấp hộp mực TIJ gốc dung môi (Solvent-based) chuyên dụng. Dòng mực này khô cực nhanh chỉ từ 1-3 giây, bám dính vĩnh viễn trên các bề mặt khó in như nhựa PP/PE, màng nhôm, màng co BOPP."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mực in TIJ VNPIS có in được mã vạch QR Code để quét ứng dụng không?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Chắc chắn. Hộp mực TIJ của chúng tôi cho độ phân giải cực cao lên đến 600 DPI. Hoàn hảo để in mã vạch (Barcode), mã QR Code truy xuất nguồn gốc."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Làm sao để tránh nghẹt đầu in TIJ khi không sử dụng thường xuyên?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Để kéo dài tuổi thọ hộp mực và tránh nghẹt mực, bạn nên đậy nắp bảo vệ (clip) ngay sau khi ngưng dây chuyền sản xuất trên 15 phút. Nếu bị khô nhẹ, chỉ cần dùng vải mềm lau với dung dịch vệ sinh chuyên dụng."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </div>
  );
}
