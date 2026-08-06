import React from 'react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hộp Mực TIJ Tương Thích VNPIS | In Mã QR Tốc Độ Cao, Không Mờ',
  description: 'Hộp mực in nhiệt TIJ tương thích hoàn hảo. Tốc độ khô cực nhanh, in mã vạch và QR code độ phân giải cao trên bao bì nilon, giấy, bìa carton.',
};

export default function TIJInksPage() {
  const content = {
    title: "Giải Pháp Mực In TIJ Tương Thích",
    subtitle: "Chất lượng in mã QR siêu nét. Phù hợp cho dây chuyền tốc độ cao, in mã vạch, logo trên đa dạng chất liệu.",
    painPoints: [
      "Mã QR in ra hay bị lem nhem, máy quét không đọc được?",
      "Tốc độ dây chuyền quá nhanh khiến mực không kịp khô?",
      "Chi phí thay hộp mực chính hãng quá đắt đỏ?",
      "Mực bị tắc nghẽn sau vài ngày không sử dụng?"
    ],
    solutions: [
      {
        title: "Tốc Độ Khô Cực Nhanh",
        description: "Khô ngay lập tức dưới 1 giây, phù hợp cho dây chuyền đóng gói tốc độ cao.",
        icon: "Zap"
      },
      {
        title: "Độ Phân Giải Chuẩn 600dpi",
        description: "In mã vạch, QR Code sắc nét tuyệt đối, tỷ lệ đọc mã 100%.",
        icon: "ScanLine"
      },
      {
        title: "Chống Tắc Nghẽn",
        description: "Công nghệ mực đặc biệt giúp bảo vệ đầu in, không nghẹt mực kể cả ngưng máy nhiều ngày.",
        icon: "Droplet"
      },
      {
        title: "Tiết Kiệm Chi Phí",
        description: "Giá thành chỉ bằng 60% so với hộp mực gốc nhưng chất lượng hoàn toàn tương đương.",
        icon: "Wallet"
      }
    ],
    industries: [
      { name: "Sản xuất dược phẩm", icon: "Pill" },
      { name: "Đóng gói bao bì carton", icon: "Box" },
      { name: "Linh kiện điện tử", icon: "Cpu" },
      { name: "Mỹ phẩm", icon: "Sparkles" }
    ]
  };

  return (
    <>
      <LandingPage {...content} />
      
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ứng dụng đa dạng trên mọi vật liệu</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Mực in TIJ của VNPIS tự tin đáp ứng in ấn trên mọi bề mặt: nhựa, màng nhôm, giấy cán bóng, bìa carton, và cả kim loại.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition">Nhận Tư Vấn Cấu Hình Mực Tối Ưu</a>
        </div>
      </section>
    </>
  );
}
