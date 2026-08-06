'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  pageTitle?: string;
}

export default function ConsultationForm({
  title = "Tư Vấn & Nhận Báo Giá",
  subtitle = "Để lại thông tin về sản phẩm bạn cần in, đội ngũ kỹ sư VNPIS sẽ hỗ trợ tư vấn cấu hình phù hợp nhất.",
  pageTitle = "Trang sản phẩm"
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, pageTitle })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const formattedMessage = `Xin chào VNPIS, tôi là ${formData.name} (${formData.company} - SĐT: ${formData.phone}). Tôi đang cần tư vấn: ${formData.message || 'Báo giá và cấu hình máy'}`;
  const whatsappUrl = `https://wa.me/84987453866?text=${encodeURIComponent(formattedMessage)}`;
  const zaloUrl = `https://zalo.me/0987453866`;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto text-slate-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-slate-600 font-medium">{subtitle}</p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Họ và tên *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium"
            />
            <input
              type="tel"
              placeholder="Số điện thoại *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium"
            />
          </div>
          <input
            type="text"
            placeholder="Tên công ty / Xưởng sản xuất *"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3.5 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium"
          />
          <textarea
            placeholder="Mô tả sản phẩm cần in (vd: Cần in logo 2 màu lên nắp chai nhựa cong)..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3.5 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30"
          >
            {isSubmitting ? (
              <span>Đang gửi yêu cầu...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Gửi Yêu Cầu Tư Vấn</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-6 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Đã Tiếp Nhận Thông Tin!</h3>
            <p className="text-slate-600 max-w-lg mx-auto">
              Cảm ơn <span className="font-semibold text-slate-900">{formData.name}</span>. Thông tin của bạn đã được gửi tới email <span className="font-semibold text-blue-600">info@vnpis.com</span>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-700 mb-4">Để nhận phản hồi & báo giá tức thì, bạn có thể chọn gửi nhắn trực tiếp:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a
                href={zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Nhắn qua Zalo</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Nhắn WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
