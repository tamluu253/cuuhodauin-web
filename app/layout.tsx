import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VNPIS Lab — Trung tâm Cứu hộ & Phục hồi Đầu in Kỹ thuật số | cuuhodauin.com",
  description: "VNPIS Lab — Dịch vụ chuyên sâu cứu hộ, phục hồi, soi Nozzle 4K và sửa chữa đầu in phun công nghiệp Ricoh Gen5/6, Kyocera, Konica 1024i, Epson I3200, CIJ & TIJ. Cam kết No Cure - No Pay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-slate-700 bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
