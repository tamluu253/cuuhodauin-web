import React from 'react';
import Link from 'next/link';
import { ArrowRight, Palette, CheckCircle2, Sliders, Target, Eye } from 'lucide-react';

export const metadata = {
  title: 'Quản Trị Màu Sắc (Color Management) | VNPIS',
  description: 'Dịch vụ cân chỉnh màu sắc chuyên nghiệp. Tạo ICC Profile cho máy in phun, máy in UV. Đảm bảo đồng nhất màu sắc Delta E < 2.',
};

export default function ColorManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-yellow-900/20 to-blue-900/30 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800 text-slate-300 text-sm font-bold tracking-widest mb-6 border border-slate-700 uppercase">
            Color Management System
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Quản Trị <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500">Màu Sắc</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            In đúng màu thương hiệu chưa bao giờ dễ dàng. VNPIS cung cấp dịch vụ Color Management chuyên nghiệp: tạo ICC Profile, chuẩn hóa màn hình và máy in công nghiệp (Delta E &lt; 2).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-200 transition-all duration-300 shadow-xl">
              Tư Vấn Chuẩn Màu <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nỗi Đau Về Sai Lệch Màu Sắc</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-8" />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                "Nhìn trên màn hình thiết kế rất đẹp, nhưng khi in ra lại bị ám xanh/đỏ."<br/>
                "Cùng một file thiết kế, in máy A ra màu này, in máy B lại ra màu khác."<br/>
                "Đổi lô mực mới, màu in ra không giống lô cũ."
              </p>
              <p className="text-lg text-slate-600 font-semibold">
                Đây là những vấn đề kinh điển mà mọi xưởng in đều gặp phải khi thiếu hệ thống Quản Trị Màu Sắc (Color Management System - CMS).
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-slate-100 p-6 rounded-2xl text-center border-2 border-red-500/20">
                <Eye className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="font-bold text-slate-700">Màn hình (RGB)</p>
                <div className="h-16 mt-4 bg-blue-500 rounded-lg"></div>
              </div>
              <div className="bg-slate-100 p-6 rounded-2xl text-center border-2 border-blue-500/20">
                <Palette className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="font-bold text-slate-700">Bản In (CMYK)</p>
                <div className="h-16 mt-4 bg-blue-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dịch Vụ Cân Màu Của VNPIS</h2>
            <p className="text-lg text-slate-400">Sử dụng thiết bị đo phổ (Spectrophotometer) tiêu chuẩn công nghiệp từ X-Rite và Barbieri.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-start hover:border-slate-500 transition-colors">
              <Target className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Tạo ICC Profile Cho Máy In</h3>
              <p className="text-slate-300 mb-6">Đo đạc chính xác khả năng tái tạo màu của sự kết hợp [Máy in + Mực in + Vật liệu in]. Tạo ra file ICC Profile độc bản giúp phần mềm RIP xuất màu chuẩn xác nhất, đạt Delta E &lt; 2.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col items-start hover:border-slate-500 transition-colors">
              <Sliders className="w-10 h-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Chuẩn Hóa Thiết Bị (Calibration)</h3>
              <p className="text-slate-300 mb-6">Cân chỉnh màn hình của bộ phận Thiết kế (Pre-press) đồng bộ với kết quả bản in thực tế. "What you see is what you get" (WYSIWYG) - Loại bỏ rủi ro tranh cãi nội bộ.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
