'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, PhoneCall, Globe, ExternalLink } from 'lucide-react';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
    external?: boolean;
  }[];
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navigation: NavigationItem[] = [
    {
      name: 'Giải Pháp',
      href: '/solutions',
      dropdown: [
        { name: 'Variable Data Printing', href: '/solutions/variable-data-printing' },
        { name: 'UV Single Pass Printing', href: '/solutions/uv-single-pass-printing' },
        { name: 'Pad Printing', href: '/solutions/pad-printing' },
        { name: 'Screen Printing', href: '/solutions/screen-printing' },
        { name: 'Industrial Coding', href: '/solutions/industrial-coding' },
      ],
    },
    {
      name: 'Sản Phẩm',
      href: '/products',
      dropdown: [
        { name: 'UV Printer', href: '/products/uv-printers' },
        { name: 'Pad Printer', href: '/products/pad-printers' },
        { name: 'Screen Printer', href: '/products/screen-printers' },
        { name: 'Hot Stamping', href: '/products/hot-stamping' },
        { name: 'CIJ Ink', href: '/products/cij-ink' },
        { name: 'TIJ Ink', href: '/products/tij-ink' },
        { name: 'Special Inks', href: '/products/special-inks' },
        { name: 'Printheads', href: '/products/printheads' },
        { name: 'Printing Consumables', href: '/products/consumables' },
      ]
    },
    {
      name: 'Dịch Vụ',
      href: '/services',
      dropdown: [
        { name: 'Variable Data Printing', href: '/services/variable-data-printing' },
        { name: 'Pad Printing Service', href: '/services/pad-printing-service' },
        { name: 'Screen Printing Service', href: '/services/screen-printing-service' },
        { name: 'Machine Rental', href: '/services/machine-rental' },
        { name: 'Machine Repair', href: '/services/machine-repair' },
        { name: 'Color Management', href: '/services/color-management' },
      ],
    },
    {
      name: 'Kiến Thức',
      href: '/blog',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Study', href: '/case-studies' },
        { name: 'Video', href: '/videos' },
        { name: 'Downloads', href: '/resources/download' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      name: 'Giới Thiệu',
      href: '/about',
    },
    {
      name: 'Liên Hệ',
      href: '/contact',
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all">
      <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/images/vnpis-logo.png" alt="VNPIS Logo" className="h-14 lg:h-16 w-auto transition-all" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative group h-20 flex items-center"
              onMouseEnter={() => item.dropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors flex items-center"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-xl py-4 transition-all duration-200 origin-top ${
                    activeMenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      rel={subItem.external ? "noopener noreferrer" : undefined}
                      className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors"
                    >
                      <span className="flex items-center">
                        {subItem.name}
                        {subItem.external && <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative group flex items-center h-20 z-50">
            <button className="flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
              <Globe className="w-4 h-4 mr-1.5" /> Select Language <ChevronDown className="ml-1 w-3 h-3" />
            </button>
            <div className="absolute top-[60px] right-0 w-48 bg-white border border-slate-100 shadow-xl rounded-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
              <button onClick={() => { document.cookie = `googtrans=/vi/vi; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Tiếng Việt
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/zh-CN; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Chinese (Simplified)
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/en; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                English
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/ja; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Japanese
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/km; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Khmer
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/ko; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Korean
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/lo; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Lao
              </button>
              <button onClick={() => { document.cookie = `googtrans=/vi/th; path=/;`; window.location.reload(); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors">
                Thai
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500 font-medium">Hotline 24/7</span>
            <a href="tel:0987453866" className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors">
              0987 453 866
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-orange-500/20"
          >
            Nhận Báo Giá
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col space-y-2">
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-900 text-lg py-2 border-b border-slate-100">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined} 
                        className="text-slate-600 text-sm font-medium flex items-center"
                      >
                        {subItem.name}
                        {subItem.external && <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col space-y-4">
              <a href="tel:0987453866" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-slate-100 text-slate-800 rounded-md font-bold">
                <PhoneCall className="w-5 h-5 mr-2" /> Hotline: 0987 453 866
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-orange-600 text-white rounded-md font-bold shadow-lg">
                Yêu Cầu Báo Giá
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
