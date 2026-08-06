import React from 'react';
import { Apple, Pill, Shirt, Package, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Các Ngành Nghề Ứng Dụng | VNPIS - Giải Pháp In Ấn Công Nghiệp',
  description: 'Khám phá các giải pháp in ấn công nghiệp, mã hóa dữ liệu biến đổi và truy xuất nguồn gốc chuyên biệt cho ngành Thực phẩm, Dược phẩm, May mặc, Bao bì, Điện tử.',
};

export default function IndustriesPage() {
  const industries = [
    {
      id: 'food-beverage',
      name: 'Thực Phẩm & Đồ Uống',
      icon: <Apple className="w-8 h-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Đảm bảo an toàn vệ sinh thực phẩm với các dòng mực chuyên dụng và máy in tốc độ cao trên dây chuyền.',
      features: [
        'In date, hạn sử dụng tốc độ cao trên băng chuyền.',
        'Mực thực phẩm an toàn in trực tiếp lên vỏ trứng gà.',
        'In mã QR chống giả lên nắp chai, nắp hộp, bao bì màng mềm.',
      ],
    },
    {
      id: 'pharmaceuticals',
      name: 'Dược Phẩm & Mỹ Phẩm',
      icon: <Pill className="w-8 h-8" />,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      description: 'Chống hàng giả tuyệt đối và truy xuất nguồn gốc chính xác đến từng đơn vị sản phẩm nhỏ nhất.',
      features: [
        'In số lô, mã vạch (Barcode) sắc nét trên hộp thuốc, vỉ thuốc.',
        'In UV gia công chất lượng cao trên chai lọ mỹ phẩm.',
        'Giải pháp chống hàng giả bằng tem nhãn thông minh và mực tàng hình UV.',
      ],
    },
    {
      id: 'garment',
      name: 'May Mặc & Giày Da',
      icon: <Shirt className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Số hóa chuỗi cung ứng với công nghệ RFID và các giải pháp in tem nhãn vải chuyên nghiệp.',
      features: [
        'Ứng dụng công nghệ RFID để quản lý kho bãi, chống thất thoát.',
        'In tem nhãn vải, mã vạch QR trên mác quần áo độ bền cao.',
        'Máy in Pad chuyên dụng in logo lên đế giày, phụ kiện.',
      ],
    },
    {
      id: 'packaging',
      name: 'Bao Bì & Nhựa',
      icon: <Package className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Giải quyết bài toán bám dính trên các bề mặt nhựa trơn bóng và in dữ liệu biến đổi hàng loạt.',
      features: [
        'In dữ liệu biến đổi (VDP) số lượng lớn trên thùng carton.',
        'Mực CIJ/TIJ bám dính cực tốt trên màng PE, PP, nhựa cứng.',
        'Xử lý bề mặt Corona trước khi in để đảm bảo độ bền mực.',
      ],
    },
    {
      id: 'electronics',
      name: 'Linh Kiện Điện Tử',
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-slate-700',
      bgColor: 'bg-slate-200',
      description: 'Độ chính xác tuyệt đối ở mức vi mô. Đáp ứng các tiêu chuẩn khắt khe nhất của ngành điện tử (RoHS, Halogen-Free).',
      features: [
        'In sơ đồ, mã linh kiện siêu nhỏ trên bảng mạch (PCB).',
        'Mực in không chứa Halogen, an toàn môi trường.',
        'Mực chống tĩnh điện, chịu nhiệt độ cao khi qua lò hàn mạch.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
              Giải Pháp Chuyên Biệt Cho <br/>
              <span className="text-blue-600">Mọi Ngành Công Nghiệp</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mỗi ngành sản xuất đều có những yêu cầu khắt khe riêng về chất liệu bề mặt, tốc độ dây chuyền và tiêu chuẩn an toàn. Tại VNPIS, chúng tôi tùy biến giải pháp in ấn và truy xuất dữ liệu phù hợp với đặc thù riêng của nhà máy bạn.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES LISTING */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${industry.bgColor} ${industry.color}`}>
                    {industry.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{industry.name}</h2>
                </div>
                <p className="text-slate-600 mb-6 font-medium">
                  {industry.description}
                </p>
                <div className="space-y-4 mb-8 flex-grow">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-lg text-white flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold mb-4">Ngành Của Bạn Chưa Được Liệt Kê?</h2>
              <p className="text-blue-100 mb-8">
                Đừng lo lắng! Với hàng trăm mã mực chuyên dụng và đội ngũ kỹ thuật giàu kinh nghiệm, chúng tôi có thể thiết kế giải pháp riêng cho bề mặt vật liệu của bạn.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors mx-auto">
                Yêu Cầu Khảo Sát & Tư Vấn <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
