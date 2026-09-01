import React from 'react';

export default function SchemaOrg() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://cuuhodauin.com/#organization",
        "name": "VNPIS Lab - Trung tâm Cứu hộ & Phục hồi Đầu in Kỹ thuật số",
        "alternateName": "VNPIS Lab Cứu Hộ Đầu In",
        "image": "https://cuuhodauin.com/VNPIS_logo.png",
        "url": "https://cuuhodauin.com",
        "telephone": "+84987453866",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "62 Trần Thị Nơi, Phường Chánh Hưng",
          "addressLocality": "TP. Hồ Chí Minh",
          "addressRegion": "TP. Hồ Chí Minh",
          "postalCode": "700000",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.7412,
          "longitude": 106.6715
        },
        "hasMap": "https://share.google/N6YpipmVmhVDnLSBA",
        "description": "VNPIS Lab chuyên cứu hộ, soi Nozzle 4K, đo trở kháng Piezo và phục hồi đầu in phun công nghiệp Ricoh Gen5/Gen6, Kyocera, Konica, Epson, CIJ & TIJ.",
        "sameAs": [
          "https://zalo.me/0987453866"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
