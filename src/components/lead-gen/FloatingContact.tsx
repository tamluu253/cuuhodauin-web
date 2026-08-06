'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a
        href="tel:0987453866"
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 relative group"
        aria-label="Gọi điện thoại"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="absolute right-16 bg-slate-900 text-white px-3 py-1.5 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          0987 453 866
        </span>
      </a>
      
      <a
        href="https://zalo.me/0987453866"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 relative group overflow-hidden border border-slate-100"
        aria-label="Nhắn tin Zalo"
      >
        <img src="/images/zalo-icon.svg" alt="Zalo" className="w-9 h-9 object-contain" />
        <span className="absolute right-16 bg-slate-900 text-white px-3 py-1.5 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Zalo
        </span>
      </a>
    </div>
  );
}
