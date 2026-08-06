"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Package, Layers, CircleDot, Settings, Droplet, Beaker } from 'lucide-react';
import inksData from '@/data/inks.json';
import accessoriesData from '@/data/accessories.json';

// Dữ liệu màu sắc cho các chứng nhận
const certColors: Record<string, string> = {
  "RoHS": "bg-blue-100 text-blue-700 border-blue-200",
  "REACH": "bg-sky-100 text-sky-700 border-sky-200",
  "ZDHC Level 3": "bg-green-100 text-green-700 border-green-200",
  "Oeko-Tex": "bg-teal-100 text-teal-700 border-teal-200",
  "GOTS": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "EN71-3": "bg-indigo-100 text-indigo-700 border-indigo-200"
};

type TabType = 'inks' | 'pads' | 'plates' | 'accessories' | 'additives';

export default function ConsumablesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('inks');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Tất cả');

  // Logic lọc cho Mực in
  const allMaterials = useMemo(() => {
    const materials = new Set<string>();
    inksData.forEach(brand => {
      brand.series.forEach(serie => {
        serie.materials.forEach(m => materials.add(m));
      });
    });
    return ['Tất cả', ...Array.from(materials)];
  }, []);

  const filteredBrands = useMemo(() => {
    if (selectedMaterial === 'Tất cả') return inksData;

    return inksData.map(brand => ({
      ...brand,
      series: brand.series.filter(s => s.materials.includes(selectedMaterial))
    })).filter(brand => brand.series.length > 0);
  }, [selectedMaterial]);


  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header & Navigation */}
      <div className="bg-white text-slate-900 pt-24 pb-12 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-orange-400 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-yellow-400 to-transparent blur-3xl transform skew-x-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-orange-600 mb-6 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Về trang Sản phẩm
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-orange-100 rounded-2xl border border-orange-200">
                  <Package className="w-12 h-12 text-orange-600" />
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
                  Vật Tư In Công Nghiệp
                </h1>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                Siêu thị vật tư tổng hợp cho ngành in Tampon (Pad printing) và In lụa (Screen printing). Từ mực in cao cấp đến khuôn thép, cục silicone và các hóa chất chuyên dụng.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/30 whitespace-nowrap text-lg">
              Nhận Báo Giá Tổng
            </Link>
          </div>

          {/* TABS NAVIGATION */}
          <div className="flex overflow-x-auto hide-scrollbar gap-3 mt-10 pb-2">
            <button 
              onClick={() => setActiveTab('inks')}
              className={`flex items-center px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${activeTab === 'inks' ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Droplet className="w-5 h-5 mr-2" /> Mực In (Inks)
            </button>
            <button 
              onClick={() => setActiveTab('pads')}
              className={`flex items-center px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${activeTab === 'pads' ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <CircleDot className="w-5 h-5 mr-2" /> Đầu In Silicone
            </button>
            <button 
              onClick={() => setActiveTab('plates')}
              className={`flex items-center px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${activeTab === 'plates' ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Layers className="w-5 h-5 mr-2" /> Khuôn In (Plates)
            </button>
            <button 
              onClick={() => setActiveTab('accessories')}
              className={`flex items-center px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${activeTab === 'accessories' ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/30' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Settings className="w-5 h-5 mr-2" /> Phụ Kiện (Accessories)
            </button>
            <button 
              onClick={() => setActiveTab('additives')}
              className={`flex items-center px-6 py-4 rounded-xl font-bold whitespace-nowrap transition-all border ${activeTab === 'additives' ? 'bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/30' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Beaker className="w-5 h-5 mr-2" /> Phụ Gia (Additives)
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        
        {/* ===================== TAB: MỰC IN ===================== */}
        {activeTab === 'inks' && (
          <div className="animate-fade-in">
            {/* Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-12">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Lọc Mực In Theo Vật Liệu</h3>
              <div className="flex flex-wrap gap-2">
                {allMaterials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      selectedMaterial === mat 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands Listing */}
            <div className="space-y-16">
              {filteredBrands.map(brand => (
                <div key={brand.brandId} className="scroll-mt-32">
                  <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4 mb-8">
                    <div className="flex items-center gap-4">
                      <img src={brand.logo} alt={brand.country} className="h-6 w-auto rounded-sm shadow-sm" />
                      <h2 className="text-3xl font-black text-slate-800 tracking-tight">{brand.brandName}</h2>
                    </div>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{brand.country}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {brand.series.map(serie => (
                      <div key={serie.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow group flex flex-col md:flex-row gap-6">
                        <div className="w-24 h-24 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                          <img src={serie.image} alt={serie.name} className="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-grow flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">{serie.name}</h3>
                              <p className="text-sm font-medium text-slate-500">{serie.type}</p>
                            </div>
                          </div>
                          
                          <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                            {serie.desc}
                          </p>
                          
                          <div className="mt-auto space-y-3">
                            <div className="flex flex-wrap gap-1.5">
                              {serie.materials.map((mat, i) => (
                                <span key={i} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">
                                  {mat}
                                </span>
                              ))}
                            </div>
                            
                            {serie.certs && serie.certs.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                                {serie.certs.map((cert, i) => (
                                  <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${certColors[cert] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                                    <ShieldAlert className="w-3 h-3 mr-1" /> {cert}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {filteredBrands.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                    <Droplet className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy loại mực phù hợp</h3>
                  <p className="text-slate-500">Hãy thử chọn một vật liệu khác hoặc liên hệ với VNPIS để được tư vấn dòng mực riêng biệt.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================== TAB: PADS ===================== */}
        {activeTab === 'pads' && (
          <div className="animate-fade-in space-y-8">
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                  VNPIS Silicone Pad Center
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center">
                  <CircleDot className="w-8 h-8 mr-3 text-blue-400"/> Đầu In Silicone (Pad Printing Head)
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Cung cấp giải pháp đầu in silicone công nghiệp chống tĩnh điện, độ đàn hồi cao, truyền mực sắc nét. Đa dạng hình thù (Tròn R Series, Chữ Nhật Q Series, Thanh Dài L Series) và độ cứng tùy chọn từ <strong className="text-white">30° đến 70° Shore A</strong>. Nhận đúc khuôn theo sản phẩm thực tế.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <span className="bg-blue-800/60 px-4 py-2 rounded-xl border border-blue-700/50">✓ Chống biến dạng hình in</span>
                  <span className="bg-blue-800/60 px-4 py-2 rounded-xl border border-blue-700/50">✓ Thoát bọt khí nhanh</span>
                  <span className="bg-blue-800/60 px-4 py-2 rounded-xl border border-blue-700/50">✓ Gia công nẹp Gỗ / Nhôm</span>
                </div>
              </div>
            </div>

            {/* Grid of Pad Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {accessoriesData.pads.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-24 h-24 shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 p-2 flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Đặc tính nổi bật:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((f, i) => (
                          <span key={i} className="inline-flex items-center text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-lg">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-blue-500"/> {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Table of Models & Dimensions */}
                    {item.models && item.models.length > 0 && (
                      <div className="mb-6 overflow-hidden rounded-xl border border-slate-200">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                            <tr>
                              <th className="p-2.5 text-center">Hình Dáng</th>
                              <th className="p-2.5">Mã Sản Phẩm</th>
                              <th className="p-2.5">Kích Thước (LxWxH)</th>
                              <th className="p-2.5">Phân Loại / Ứng Dụng</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {item.models.map((m: any, idx: number) => (
                              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="p-2 flex justify-center items-center">
                                  {m.img ? (
                                    <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 p-1 flex items-center justify-center overflow-hidden group/img">
                                      <img src={m.img} alt={m.code} className="w-full h-full object-contain group-hover/img:scale-125 transition-transform" />
                                    </div>
                                  ) : (
                                    <span className="text-slate-300">-</span>
                                  )}
                                </td>
                                <td className="p-2.5 font-bold text-slate-900">{m.code}</td>
                                <td className="p-2.5 font-medium text-blue-600">{m.size}</td>
                                <td className="p-2.5 text-slate-600">{m.type}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md text-sm">
                    Tư Vấn & Báo Giá Mã Đầu In Này <ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB: PLATES ===================== */}
        {activeTab === 'plates' && (
          <div className="animate-fade-in space-y-8">
             <div className="bg-purple-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                  VNPIS Cliche & Plate Manufacturing
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center">
                  <Layers className="w-8 h-8 mr-3 text-purple-400"/> Khuôn In Chế Bản (Cliche / Plates)
                </h2>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Khuôn in quyết định 90% độ sắc nét hình ảnh. VNPIS cung cấp dịch vụ gia công khắc laser / ăn mòn axit khuôn thép CNC 10mm siêu bền, khuôn thép mỏng 0.5mm và vật tư khuôn Polymer tự phơi UV tại nhà máy.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessoriesData.plates.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-full h-52 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 mb-6 p-4 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{item.desc}</p>
                    
                    <div className="space-y-2 mb-6">
                      {item.features.map((f, i) => (
                        <div key={i} className="flex items-start text-xs font-bold text-slate-700 bg-purple-50 text-purple-900 border border-purple-100 p-2 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 shrink-0 mt-0.5"/> {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition-colors shadow-md text-sm">
                    Báo Giá Khuôn In Này <ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB: ACCESSORIES ===================== */}
        {activeTab === 'accessories' && (
          <div className="animate-fade-in space-y-8">
             <div className="bg-emerald-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
                  VNPIS Premium Spare Parts
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-emerald-400"/> Linh Kiện & Phụ Kiện Tiêu Hao
                </h2>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Đảm bảo máy in luôn vận hành mượt mà với các phụ kiện thay thế chuẩn Châu Âu: Cốc mực sealed cup nhôm nguyên khối, Vòng gốm Zirconia, Vòng gạt thép Tungsten Carbide, Dao gạt Thụy Điển và Tấm lót khay mực dùng 1 lần.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessoriesData.accessories.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-full h-52 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 mb-6 p-4 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
                    
                    {item.features && (
                      <div className="space-y-1.5 mb-4">
                        {item.features.map((f, i) => (
                          <div key={i} className="flex items-center text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" /> {f}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-6">
                      <span className="text-xs font-bold text-slate-400 uppercase w-full mb-1">Quy cách phổ biến:</span>
                      {item.sizes.map((sz, i) => (
                        <span key={i} className="inline-block px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200">
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-colors shadow-md text-sm">
                    Tư Vấn & Báo Giá Phụ Kiện Này <ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TAB: ADDITIVES ===================== */}
        {activeTab === 'additives' && (
          <div className="animate-fade-in space-y-8">
             <div className="bg-amber-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                  VNPIS Industrial Solvents & Chemicals
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center">
                  <Beaker className="w-8 h-8 mr-3 text-amber-400"/> Phụ Gia & Dung Môi Hóa Chất (Additives)
                </h2>
                <p className="text-amber-100 text-lg leading-relaxed">
                  Bộ giải pháp dung dịch phụ trợ tối ưu màng mực: Dung môi pha loãng nhanh/chậm khô, Chất xử lý bề mặt tăng bám dính gấp 5 lần (Primer), Dung dịch chống bít bản in (Retarder) và Chất đóng rắn tăng cứng chịu hóa chất cồn (Hardener 2K).
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessoriesData.additives.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-full h-52 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 mb-6 p-4 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
                    
                    {item.features && (
                      <div className="space-y-1.5 mb-4">
                        {item.features.map((f, i) => (
                          <div key={i} className="flex items-center text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-600 shrink-0" /> {f}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-6">
                      <span className="text-xs font-bold text-slate-400 uppercase w-full mb-1">Dung tích / Đóng gói:</span>
                      {item.sizes.map((sz, i) => (
                        <span key={i} className="inline-block px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200">
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl transition-colors shadow-md text-sm">
                    Báo Giá Dung Môi / Phụ Gia <ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
