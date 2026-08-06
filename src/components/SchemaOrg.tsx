import React from 'react';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VNPIS - Industrial Printing Solutions",
    "image": "https://vnpis.com/icon.png",
    "@id": "https://vnpis.com",
    "url": "https://vnpis.com",
    "telephone": "0903333333", // placeholder for real phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vietnam",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "description": "Chuyên gia hàng đầu về giải pháp in công nghiệp: UV Single Pass, Pad Printing, Screen Printing, CIJ, TIJ, và vật tư mực in.",
    "priceRange": "$$",
    "sameAs": [
      "https://youtube.com/vnpis",
      "https://facebook.com/vnpis"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
