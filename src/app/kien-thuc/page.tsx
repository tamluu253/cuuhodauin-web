import { getAllArticles } from "@/lib/articles";
import KnowledgeCenterClient from "@/components/KnowledgeCenterClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kho Kiến Thức Chuyên Ngành Cứu Hộ Đầu In Kỹ Thuật Số | VNPIS Lab",
  description: "Tổng hợp gần 300 bài viết cẩm nang chuyên sâu về xử lý sự cố nghẹt đầu in Ricoh, Kyocera, Konica, Epson, CIJ & TIJ, kỹ thuật soi Nozzle 4K và đo trở kháng Piezo.",
  alternates: {
    canonical: "https://cuuhodauin.com/kien-thuc",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://cuuhodauin.com/kien-thuc",
    siteName: "VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số",
    title: "Kho Kiến Thức Chuyên Ngành Cứu Hộ Đầu In Kỹ Thuật Số | VNPIS Lab",
    description: "Tổng hợp gần 300 bài viết cẩm nang chuyên sâu về xử lý sự cố nghẹt đầu in Ricoh, Kyocera, Konica, Epson, CIJ & TIJ, kỹ thuật soi Nozzle 4K và đo trở kháng Piezo.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Kho Kiến Thức Cứu Hộ Đầu In VNPIS Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kho Kiến Thức Chuyên Ngành Cứu Hộ Đầu In Kỹ Thuật Số | VNPIS Lab",
    description: "Tổng hợp giải pháp phục hồi béc phun, cứu hộ đầu in công nghiệp và bảo trì phòng ngừa tại VNPIS Lab.",
    images: ["/icon.png"],
  },
};

export default function BlogListingPage() {
  const articles = getAllArticles();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": "https://cuuhodauin.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kho Kiến Thức Cứu Hộ Đầu In",
        "item": "https://cuuhodauin.com/kien-thuc"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KnowledgeCenterClient articles={articles} />
    </>
  );
}
