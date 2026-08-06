import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, Printer, Droplet, ScanLine, Tag, Zap } from 'lucide-react';

export const metadata = {
  title: 'Danh Mục Sản Phẩm | VNPIS',
  description: 'Khám phá các giải pháp thiết bị công nghiệp, máy in, mực in và hệ thống RFID từ VNPIS.',
};

const productCategories = [
  {
    title: 'Mực In CIJ/TIJ Đặc Biệt',
    description: 'Mực dùng cho máy in phun CIJ/TIJ nhưng có đặc tính chuyên dụng: kháng dung môi, chịu nhiệt độ cao, bám dính siêu việt trên thủy tinh, cáp điện, kim loại.',
    href: '/products/special-inks',
    icon: <Droplet className="w-10 h-10 text-purple-500" />
  },
  {
    title: 'Hệ Thống Kho RFID (SME)',
    description: 'Hệ thống kiểm kho tự động siêu tốc 1000 sản phẩm/5 phút. Trọn gói thiết bị, thẻ tag và phần mềm.',
    href: '/products/rfid-warehouse-sme',
    icon: <ScanLine className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Đầu Phun Công Nghiệp',
    description: 'Cung cấp đầu phun Ricoh Gen5/Gen6, Epson i3200, Kyocera chính hãng hiệu suất cao.',
    href: '/products/printheads',
    icon: <Printer className="w-10 h-10 text-blue-500" />
  },
  {
    title: 'Mực In CIJ & TIJ Công Nghiệp',
    description: 'Mực in phun CIJ tương thích Videojet, Domino, Linx & Hộp mực in nhiệt TIJ HP 45A sắc nét 600dpi.',
    href: '/products/cij-ink',
    icon: <Package className="w-10 h-10 text-green-500" />
  },
  {
    title: 'Máy In Tampon & In Lụa',
    description: 'Giải pháp in pad, in lụa tự động cho linh kiện điện tử, thiết bị y tế và đồ nhựa gia dụng.',
    href: '/products/pad-printers',
    icon: <Tag className="w-10 h-10 text-red-500" />
  },
  {
    title: 'Máy Khắc Laser',
    description: 'Khắc laser tốc độ cao, vĩnh viễn trên kim loại, nhựa chống giả và truy xuất nguồn gốc.',
    href: '/products/laser-printers',
    icon: <Zap className="w-10 h-10 text-yellow-500" />
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wider mb-4">
            VNPIS PRODUCTS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Giải Pháp Công Nghiệp Toàn Diện
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp trang thiết bị, vật tư và phần mềm tự động hóa hàng đầu giúp tối ưu hóa dây chuyền sản xuất và vận hành kho của bạn.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-slate-600 mb-8 flex-grow">
                {cat.description}
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm mt-auto">
                XEM CHI TIẾT <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/30 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Bạn chưa tìm thấy sản phẩm phù hợp?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Đội ngũ kỹ sư VNPIS luôn sẵn sàng khảo sát trực tiếp tại nhà máy để tư vấn giải pháp "may đo" chính xác theo yêu cầu.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
              Liên Hệ Khảo Sát Ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
