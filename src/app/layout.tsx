import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuuhodauin.com"),
  title: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam | cuuhodauin.com",
  description: "VNPIS Lab — Dịch vụ chuyên sâu cứu hộ, phục hồi, soi Nozzle 4K và sửa chữa đầu in phun công nghiệp Ricoh Gen5/6, Kyocera, Konica 1024i, Epson I3200, CIJ & TIJ. Cam kết No Cure - No Pay.",
  alternates: {
    canonical: "/",
  },
};

import GoogleTranslate from "@/components/GoogleTranslate";

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
        {/* Google Analytics GA4 (gtag.js) cho cuuhodauin.com */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y2MV182611"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y2MV182611');
          `}
        </Script>
      </head>
      <body className="font-sans text-slate-700 bg-slate-50 antialiased">
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
