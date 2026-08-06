import React from 'react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In CIJ Tương Thích VNPIS | Bám Dính Cao, Chịu Nhiệt, Chống Cồn',
  description: 'Giải pháp mực in phun liên tục CIJ VNPIS tương thích 100% với máy Hitachi, Videojet, Leibinger. Mực in cáp điện, mực đông lạnh, mực chịu nhiệt 300 độ C.',
};

export default function CIJInksPage() {
  const content = {
    title: "Giải Pháp Mực In CIJ Tương Thích Hoàn Hảo",
    subtitle: "Tiết kiệm đến 40% chi phí với chất lượng vượt trội. Tương thích 100% với các dòng máy in công nghiệp Hitachi, Videojet, Leibinger, Domino.",
    painPoints: [
      "Mực in bong tróc khi gặp cồn 90 độ hoặc hóa chất?",
      "Mã QR bị mờ khi luộc hấp ở 100°C trong 90 phút?",
      "Mực in trên màng PE/HDPE đông lạnh (-5°C) bị rớt chữ?",
      "Mực in trên dây cáp đen bị nứt gãy, không bám dính?"
    ],
    solutions: [
      {
        title: "Độ Bám Dính Siêu Việt",
        description: "Bám dính vĩnh viễn trên cáp điện PVC/PE, nhựa HDPE, thủy tinh và kim loại.",
        icon: "ShieldCheck"
      },
      {
        title: "Chịu Nhiệt Độ Cực Đoan",
        description: "Mực chuyên dụng chịu luộc hấp 100°C (90 phút) và mực đông lạnh -5°C.",
        icon: "Thermometer"
      },
      {
        title: "Kháng Hóa Chất Mạnh",
        description: "Không bay màu khi chà xát với cồn công nghiệp 90 độ, kiềm hoặc acid nhẹ.",
        icon: "TestTube"
      },
      {
        title: "Tương Thích Tuyệt Đối",
        description: "Chạy mượt mà, không nghẹt béc trên máy Hitachi (K6), Leibinger (TW101).",
        icon: "CheckCircle2"
      }
    ],
    industries: [
      { name: "Sản xuất cáp điện", icon: "Cable" },
      { name: "Thực phẩm đông lạnh", icon: "Snowflake" },
      { name: "Dược phẩm (Kháng cồn)", icon: "Pill" },
      { name: "Đồ uống (Chai PET/Thủy tinh)", icon: "Coffee" }
    ]
  };

  return (
    <>
      <LandingPage {...content} />

      {/* Video Proofs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bằng Chứng Thực Tế (Video Test)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trăm nghe không bằng một thấy. Dưới đây là các video test khắc nghiệt nhất mà mực VNPIS đã vượt qua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1: Factory */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-factory-intro.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giới Thiệu Nhà Máy VNPIS</h3>
                <p className="text-slate-600 text-sm">Cơ sở sản xuất và nghiên cứu R&D quy mô lớn, đạt chuẩn ISO 9001.</p>
              </div>
            </div>

            {/* Video 2: Freezing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-ink-freezing-sausage-test.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Test Mực Đông Lạnh (-5°C)</h3>
                <p className="text-slate-600 text-sm">Test độ bám dính trên bao bì xúc xích ni-lông sau khi cấp đông sâu.</p>
              </div>
            </div>

            {/* Video 3: Boiling */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-ink-high-temp-boiling.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Test Luộc Hấp Nhiệt Độ Cao</h3>
                <p className="text-slate-600 text-sm">Mực T29 & T10C chịu luộc hấp trên nắp thiếc không bong tróc, không lem.</p>
              </div>
            </div>

            {/* Video 4: White Cable */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-ink-white-cable-tw101.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Test Mực Trắng Trên Cáp Đen</h3>
                <p className="text-slate-600 text-sm">Mực trắng TW101 test trực tiếp trên máy Leibinger: bám dính tuyệt đối trên nhựa cáp.</p>
              </div>
            </div>

            {/* Video 5: Alcohol */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-ink-alcohol-resistance-t64.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Test Kháng Cồn (Mực T64)</h3>
                <p className="text-slate-600 text-sm">Chà xát mạnh bằng cồn công nghiệp trên bề mặt nhựa PP, mực hoàn toàn giữ nguyên.</p>
              </div>
            </div>

            {/* Video 6: Glass */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video 
                src="/media/inks/vnpis-ink-glass-t33.mp4" 
                controls 
                muted 
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Test Mực In Thủy Tinh (T33)</h3>
                <p className="text-slate-600 text-sm">Độ bám dính siêu việt trên bề mặt chai lọ thủy tinh y tế, đồ uống.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <a href="/contact" className="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
               Yêu Cầu Gửi Mẫu Test Miễn Phí
             </a>
          </div>
        </div>
      </section>
    </>
  );
}
