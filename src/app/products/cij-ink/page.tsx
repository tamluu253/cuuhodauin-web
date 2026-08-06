import React from 'react';
import { ArrowRight, CheckCircle2, Factory, Droplets, ShieldCheck, Clock, Layers, Maximize } from 'lucide-react';
import Link from 'next/link';
import SpecialInksCatalog from '@/components/products/SpecialInksCatalog';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Mực In Phun Công Nghiệp CIJ | Tương Thích & Tiết Kiệm | VNPIS',
  description: 'Giải pháp mực in CIJ tương thích hoàn hảo cho Videojet, Domino, Linx, Markem-Imaje. Khô nhanh, bám dính siêu việt, chống chịu nhiệt độ cao.',
};

export default function CIJInkPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider mb-6 border border-blue-500/30">
              SẢN PHẨM: MỰC IN CIJ
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Mực In Phun Công Nghiệp <span className="text-blue-400">CIJ</span> Tương Thích Hoàn Hảo
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Giải pháp thay thế ưu việt cho Videojet, Domino, Linx, Markem-Imaje. Tiết kiệm lên đến 40% chi phí vận hành mà vẫn đảm bảo độ bám dính và sắc nét vượt trội.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                Đăng Ký Test Mực Miễn Phí <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nỗi đau của nhà máy khi dùng mực CIJ thông thường</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nghẹt Đầu In Thường Xuyên</h3>
              <p className="text-slate-600 leading-relaxed">Mực nhanh khô ở đầu phun nhưng lại lâu khô trên sản phẩm, gây tắc nghẽn, buộc dây chuyền phải dừng lại để súc rửa liên tục.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bám Dính Kém, Dễ Bong Tróc</h3>
              <p className="text-slate-600 leading-relaxed">In trên bề mặt trơn nhẵn như PE, PP, Thủy tinh hay kim loại dễ bị bay màu, trầy xước khi ma sát hoặc qua quá trình thanh trùng.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chi Phí Mực Chính Hãng Quá Cao</h3>
              <p className="text-slate-600 leading-relaxed">Bị độc quyền bởi hãng máy in, giá mực và dung môi bị đẩy lên quá cao làm đội chi phí sản xuất (OPEX) của nhà máy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & BENEFITS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full text-blue-400 font-semibold mb-6">
                <ShieldCheck className="w-5 h-5" />
                <span>Giải Pháp Từ VNPIS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Mực CIJ VNPIS - Hiệu Suất Tối Đa, Tối Ưu Chi Phí</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Được tổng hợp từ các nguyên liệu cao cấp, mực in CIJ của VNPIS vượt qua các bài kiểm tra khắc nghiệt nhất: Luộc sôi, cấp đông, cồn công nghiệp.
              </p>
              <ul className="space-y-4">
                {[
                  "Tương thích 100% với Videojet, Domino, Linx, Markem-Imaje",
                  "Khô cực nhanh dưới 1 giây, chống lem nhòe",
                  "Bám dính siêu việt trên Thủy tinh, Nhựa PP/PE, Kim loại",
                  "Kháng cồn, kháng dung môi, chịu nhiệt độ thanh trùng",
                  "Giảm 30% - 40% chi phí vật tư in ấn hàng năm"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl relative">
                 <video 
                   src="/media/cij-glass-test.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-700">
                    <p className="text-sm text-slate-200 font-medium">Video test mực bám dính siêu việt trên vỏ chai thủy tinh ướt lạnh.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPATIBILITY TABLE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bảng Phân Loại & Máy Tương Thích</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Lựa chọn mã mực phù hợp nhất cho dòng máy in và dây chuyền sản xuất của bạn.</p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto shadow-xl rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700 whitespace-nowrap">Thương Hiệu Máy In</th>
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700 whitespace-nowrap">Mã Mực Tham Khảo</th>
                  <th className="p-4 md:p-5 font-semibold border-b border-slate-700">Đặc Tính Kỹ Thuật Nổi Bật</th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold whitespace-nowrap">Videojet®</td>
                  <td className="p-4 md:p-5 whitespace-nowrap">V410-D, V411-D, V421-D</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Khô siêu nhanh. Bám cực tốt trên nhựa PP/PE, chai thủy tinh đọng sương lạnh.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold whitespace-nowrap">Domino®</td>
                  <td className="p-4 md:p-5 whitespace-nowrap">IR-270BK, IR-252BK</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Chống lem tuyệt đối, chuyên dùng cho thùng carton phủ bóng và bao bì kim loại.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold whitespace-nowrap">Markem-Imaje®</td>
                  <td className="p-4 md:p-5 whitespace-nowrap">5157, 5100, 8188</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Chịu được nhiệt độ cao (thanh trùng, luộc sôi). Kháng dung môi cồn mạnh.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold whitespace-nowrap">Linx®</td>
                  <td className="p-4 md:p-5 whitespace-nowrap">1240, 1014, 3103</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">Độ ổn định cao, giảm thiểu tối đa hiện tượng nghẹt đầu in kim. Mực trắng chuyên dây cáp.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 md:p-5 font-bold whitespace-nowrap">Hitachi®</td>
                  <td className="p-4 md:p-5 whitespace-nowrap">JP-K67, JP-K72</td>
                  <td className="p-4 md:p-5 text-sm text-slate-600">In barcode sắc nét, không răng cưa trên linh kiện điện tử, mạ kẽm.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">* Tất cả thương hiệu nêu trên là tài sản của chủ sở hữu hợp pháp. VNPIS cung cấp mực in tương thích không thuộc các hãng sản xuất trên.</p>
        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ứng Dụng Thực Tiễn Trong Ngành</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Ngành Đồ Uống', desc: 'In date trên vỏ chai PET, thủy tinh nón đọng sương, lon nhôm.' },
              { name: 'Dây Cáp Điện', desc: 'Mực trắng/vàng tương phản cao, bám chắc trên vỏ cáp PE/PVC trơn tuột.' },
              { name: 'Thực Phẩm Đông Lạnh', desc: 'Kháng ẩm ướt, chịu nhiệt độ âm sâu không bong tróc NSX/HSD.' },
              { name: 'Linh Kiện Điện Tử', desc: 'Kháng cồn IPA, in siêu nhỏ sắc nét trên PCB, linh kiện mạ kẽm.' }
            ].map((app, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{app.name}</h4>
                <p className="text-slate-600">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INK CATALOG (DATA KHỦNG) */}
      <section id="catalog" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tra Cứu Hơn 100+ Mã Mực CIJ / TIJ</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">Hệ thống cơ sở dữ liệu các dòng mực đặc biệt, mực tương thích cho mọi bề mặt công nghiệp.</p>
          </div>

          <SpecialInksCatalog />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Câu Hỏi Thường Gặp (FAQ) Về Mực In CIJ</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mực in CIJ của VNPIS có dùng thay thế cho máy in Videojet, Domino, Linx được không?</h3>
              <p className="text-slate-600 leading-relaxed">Có. Mực in CIJ VNPIS được tổng hợp theo tiêu chuẩn tương thích 100% (Drop-in replacement) với các dòng máy in phun liên tục phổ biến như Videojet, Domino, Linx, Markem-Imaje. Bạn không cần súc rửa lại hệ thống, chỉ việc đổ mực vào và chạy, giúp tiết kiệm đến 40% chi phí vật tư hàng năm.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mực in CIJ chịu nhiệt độ cao thanh trùng được bao nhiêu độ?</h3>
              <p className="text-slate-600 leading-relaxed">Chúng tôi có các mã mực CIJ chuyên dụng chịu nhiệt độ cao lên tới 121°C. Rất phù hợp cho ngành đồ hộp, thực phẩm đóng gói cần luộc sôi hoặc hấp thanh trùng kéo dài mà không bị bong tróc hay bay màu mã vạch, NSX/HSD.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mực có bám dính tốt trên bề mặt nhựa PP, PE và kính đọng sương không?</h3>
              <p className="text-slate-600 leading-relaxed">Độ bám dính là điểm mạnh nhất của mực CIJ VNPIS. Các dòng mực dung môi MEK đặc biệt của chúng tôi có thể bám dính vĩnh viễn trên bề mặt nhựa trơn bóng (PE, PP, PVC) và vỏ chai thủy tinh ướt lạnh trong ngành đồ uống, hoàn toàn kháng cồn và chống trầy xước.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <section id="contact" className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Đăng Ký Test Mực Miễn Phí Tại Nhà Máy"
            subtitle="Đội ngũ kỹ sư VNPIS sẽ mang mẫu mực đến tận dây chuyền của bạn để kiểm chứng độ bám dính."
            pageTitle="Mực In CIJ"
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
                "name": "Mực In Phun Công Nghiệp CIJ VNPIS",
                "description": "Giải pháp mực in CIJ tương thích hoàn hảo cho Videojet, Domino, Linx, Markem-Imaje. Khô nhanh, bám dính siêu việt, chống chịu nhiệt độ cao 121 độ C.",
                "brand": {
                  "@type": "Brand",
                  "name": "VNPIS"
                },
                "category": "Industrial Printing Ink",
                "offers": {
                  "@type": "Offer",
                  "url": "https://vnpis.com/products/cij-ink",
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
                    "name": "Mực in CIJ của VNPIS có dùng thay thế cho máy in Videojet, Domino, Linx được không?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Có. Mực in CIJ VNPIS được tổng hợp theo tiêu chuẩn tương thích 100% (Drop-in replacement) với các dòng máy in phun liên tục phổ biến như Videojet, Domino, Linx, Markem-Imaje. Giúp tiết kiệm đến 40% chi phí vật tư hàng năm."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mực in CIJ chịu nhiệt độ cao thanh trùng được bao nhiêu độ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Chúng tôi có các mã mực CIJ chuyên dụng chịu nhiệt độ cao lên tới 121°C. Rất phù hợp cho ngành đồ hộp, thực phẩm đóng gói cần luộc sôi hoặc hấp thanh trùng kéo dài."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Mực có bám dính tốt trên bề mặt nhựa PP, PE và kính đọng sương không?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Độ bám dính là điểm mạnh nhất của mực CIJ VNPIS. Các dòng mực dung môi MEK đặc biệt có thể bám dính vĩnh viễn trên bề mặt nhựa trơn bóng (PE, PP) và vỏ chai thủy tinh ướt lạnh, kháng cồn tuyệt đối."
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
