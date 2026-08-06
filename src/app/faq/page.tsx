import React from 'react';
import faqsData from '@/data/faqs.json';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Trung Tâm Trợ Giúp & FAQ | VNPIS - Industrial Printing Solutions',
  description: 'Thư viện hơn 200 câu hỏi thường gặp về máy in công nghiệp, công nghệ in UV, Tampon, CIJ, TIJ và giải pháp khắc phục sự cố.',
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqsData.map(faq => faq.category)));

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]+>/g, ''), // Strip HTML for schema
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thư Viện Kiến Thức & FAQ</h1>
          <p className="text-xl text-slate-300 mb-8">
            Giải đáp chuyên sâu mọi thắc mắc về công nghệ in công nghiệp, vật tư và kỹ thuật vận hành.
          </p>
        </div>
      </section>

      {/* 2. FAQ CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-100 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                {category}
              </h2>
              <div className="space-y-4">
                {faqsData
                  .filter(faq => faq.category === category)
                  .map((faq, faqIdx) => (
                    <details 
                      key={faqIdx} 
                      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
                        <h3 className="font-bold text-slate-900 text-lg pr-8">{faq.question}</h3>
                        <span className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-open:bg-blue-600 group-open:text-white transition-colors">
                          <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </div>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-6">Bạn Không Tìm Thấy Câu Trả Lời?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Hãy liên hệ trực tiếp với đội ngũ kỹ sư của VNPIS. Chúng tôi luôn sẵn sàng hỗ trợ kỹ thuật 24/7.
          </p>
          <Link href="tel:0987453866" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:bg-slate-50 transition-all">
            Gọi Hotline: 098 745 3866
          </Link>
        </div>
      </section>
    </div>
  );
}
