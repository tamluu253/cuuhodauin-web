import React from 'react';

export default function SchemaOrg() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://cuuhodauin.com/#website",
        "url": "https://cuuhodauin.com",
        "name": "VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số",
        "description": "Trung tâm cứu hộ, phục hồi Nozzle 4K và đo trở kháng Piezo đầu in phun công nghiệp số 1 Việt Nam.",
        "inLanguage": "vi",
        "publisher": {
          "@id": "https://cuuhodauin.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://cuuhodauin.com/kien-thuc?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://cuuhodauin.com/#organization",
        "name": "VNPIS Lab - Trung tâm Cứu hộ & Phục hồi Đầu in Kỹ thuật số",
        "alternateName": ["VNPIS Lab Cứu Hộ Đầu In", "Trung Tâm Cứu Hộ Đầu In VNPIS", "cuuhodauin.com"],
        "image": "https://cuuhodauin.com/icon.png",
        "logo": "https://cuuhodauin.com/vnpis-logo.png",
        "url": "https://cuuhodauin.com",
        "telephone": "+84987453866",
        "email": "info@vnpis.com",
        "priceRange": "$$",
        "currenciesAccepted": "VND",
        "paymentAccepted": "Tiền mặt, Chuyển khoản ngân hàng",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Việt Nam"
          },
          {
            "@type": "AdministrativeArea",
            "name": "TP. Hồ Chí Minh"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Hà Nội"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bình Dương"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Đồng Nai"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Long An"
          }
        ],
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
        "hasMap": "https://www.google.com/maps/search/?api=1&query=PMQG%2BVM+Ch%C3%A1nh+H%C6%B0ng,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam",
        "description": "VNPIS Lab chuyên cứu hộ, soi Nozzle 4K, đo trở kháng Piezo và phục hồi đầu in phun công nghiệp Ricoh Gen5/Gen6, Kyocera KJ4A, Konica 1024i, Epson I3200, CIJ & TIJ với cam kết No Cure - No Pay.",
        "sameAs": [
          "https://zalo.me/0987453866",
          "https://inanvnpis.com"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "knowsAbout": [
          "Cứu hộ đầu in phun công nghiệp",
          "Phục hồi đầu in Ricoh Gen5 MH5420 MH5440",
          "Phục hồi đầu in Ricoh Gen6 MH5320 MH5340",
          "Sửa chữa đầu in Kyocera KJ4A KJ4B",
          "Cứu hộ đầu in Konica Minolta KM1024i KM1024",
          "Phục hồi đầu in Epson I3200 DX5 XP600",
          "Thông béc Sapphire máy in date CIJ Videojet Domino",
          "Sục rửa siêu âm màng Piezo 28kHz 40kHz áp âm",
          "Chẩn đoán hiển vi Nozzle 4K 1000x"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://cuuhodauin.com/#service-cuu-ho-dau-in",
        "name": "Dịch vụ Cứu hộ & Phục hồi Đầu in Phun Công Nghiệp",
        "provider": {
          "@id": "https://cuuhodauin.com/#organization"
        },
        "serviceType": "Cứu hộ & Phục hồi đầu in",
        "description": "Phục hồi 90%-98% hiệu suất các dòng đầu in công nghiệp Ricoh Gen5/6, Kyocera KJ4A, Konica 1024i, Epson I3200, máy in date CIJ & TIJ. Cam kết No Cure - No Pay.",
        "termsOfService": "Cam kết No Cure - No Pay: Không phục hồi được tia in, không thu phí dịch vụ."
      },
      {
        "@type": "Service",
        "@id": "https://cuuhodauin.com/#service-soi-nozzle-4k",
        "name": "Chẩn đoán Soi Nozzle 4K & Đo Trở Kháng Piezo",
        "provider": {
          "@id": "https://cuuhodauin.com/#organization"
        },
        "serviceType": "Chẩn đoán kiểm định đầu in",
        "description": "Kiểm tra phóng đại 1000x bề mặt béc phun Nozzle, đo điện áp Ohm và nF buồng thạch anh Piezo nhằm chẩn đoán chính xác nguyên nhân lỗi trước khi phục hồi."
      },
      {
        "@type": "FAQPage",
        "@id": "https://cuuhodauin.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Chính sách No Cure - No Pay tại VNPIS Lab là gì?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cam kết No Cure - No Pay nghĩa là: nếu VNPIS Lab không phục hồi được đầu in đạt chuẩn thông tia (tối thiểu từ 85%-95% tùy loại), khách hàng hoàn toàn không phải thanh toán bất kỳ chi phí cứu hộ nào. Quý khách chỉ thanh toán khi nghiệm thu video bắn test xung Waterfall thực tế đạt yêu cầu."
            }
          },
          {
            "@type": "Question",
            "name": "VNPIS Lab tiếp nhận cứu hộ những dòng đầu in nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VNPIS Lab tiếp nhận cứu hộ chuyên sâu tất cả các dòng đầu in công nghiệp: Ricoh Gen5 (MH5420/5440), Ricoh Gen6 (MH5320/5340), Kyocera KJ4A/KJ4B, Konica Minolta 1024i/512i, Epson I3200/DX5/DX7/XP600, béc phun máy in date công nghiệp CIJ (Videojet, Domino, Linx, Markem-Imaje) và hộp mực nhiệt TIJ."
            }
          },
          {
            "@type": "Question",
            "name": "Thời gian chẩn đoán và cứu hộ một đầu in mất bao lâu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thời gian chẩn đoán soi Nozzle 4K và đo trở kháng Piezo diễn ra trong vòng 2-4 giờ làm việc. Quy trình sục rửa vi tuần hoàn áp âm và chạy siêu âm gia nhiệt thường kéo dài từ 24 đến 48 giờ tùy theo mức độ khô cứng của mực UV hoặc cặn mực."
            }
          },
          {
            "@type": "Question",
            "name": "Khách hàng ở các tỉnh xa ngoài TP.HCM gửi đầu in cứu hộ như thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Khách hàng chỉ cần đóng gói đầu in cẩn thận (giữ ẩm bề mặt bằng dung môi chuyên dụng, chèn xốp chống va đập) và gửi qua các đơn vị chuyển phát nhanh như Viettel Post, Kerry, EMS hoặc gửi nhà xe về địa chỉ Lab Center 1: 62 Trần Thị Nơi, Phường Chánh Hưng, TP. Hồ Chí Minh (Hotline/Zalo tiếp nhận: 0987 453 866). Lab sẽ quay video mở hộp và cập nhật mã tra cứu QR cho khách hàng theo dõi trực tuyến."
            }
          },
          {
            "@type": "Question",
            "name": "Tỷ lệ cứu hộ thành công đầu in tại VNPIS Lab đạt bao nhiêu phần trăm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Đối với các đầu in bị nghẹt mực UV, mực dầu hoặc để khô lâu ngày không bị chập cháy mạch điện tử, tỷ lệ phục hồi thành công tại VNPIS Lab đạt từ 90% đến 98%. Trường hợp đầu in bị chập IC điều khiển hoặc trầy xước nặng bề mặt Nozzle Plate, kỹ sư Lab sẽ thông báo trung thực ngay sau khi soi 4K để tránh phát sinh chi phí lãng phí cho khách hàng."
            }
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
