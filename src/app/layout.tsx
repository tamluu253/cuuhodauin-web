import type { Metadata } from "next";
import "./globals.css";
import GoogleTranslate from "@/components/GoogleTranslate";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuuhodauin.com"),
  alternates: {
    canonical: "/",
  },
  title: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam | cuuhodauin.com",
  description: "VNPIS Lab — Dịch vụ chuyên sâu cứu hộ, phục hồi, soi Nozzle 4K và sửa chữa đầu in phun công nghiệp Ricoh Gen5/6, Kyocera, Konica 1024i, Epson I3200, CIJ & TIJ. Cam kết No Cure - No Pay.",
  keywords: [
    "cứu hộ đầu in",
    "phục hồi đầu in",
    "sửa đầu in ricoh gen5",
    "sửa đầu in ricoh gen6",
    "cứu hộ đầu in kyocera kj4a",
    "phục hồi konica 1024i",
    "cứu hộ đầu in epson i3200",
    "thông béc phun cij",
    "phục hồi hộp mực tij",
    "soi nozzle 4k",
    "đo trở kháng piezo",
    "no cure no pay",
    "vnpis lab",
    "cuuhodauin.com",
  ],
  authors: [{ name: "VNPIS Lab", url: "https://cuuhodauin.com" }],
  creator: "VNPIS Lab",
  publisher: "CÔNG TY TNHH VNPIS",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://cuuhodauin.com",
    siteName: "VNPIS Lab — Cứu Hộ Đầu In Kỹ Thuật Số",
    title: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam",
    description: "Chuyên sâu cứu hộ, phục hồi 90%-98% hiệu suất, soi Nozzle 4K và đo trở kháng Piezo cho đầu in Ricoh Gen5/6, Kyocera, Konica, Epson, CIJ & TIJ. Cam kết No Cure - No Pay.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam",
    description: "Phục hồi 90%-98% hiệu suất đầu in Ricoh Gen5/6, Kyocera KJ4A, Konica 1024i, Epson I3200. Cam kết No Cure - No Pay.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google9e179da40afebf95",
  },
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
        {/* Google Analytics GA4 (gtag.js) cho cuuhodauin.com */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2MV182611"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y2MV182611');
            `,
          }}
        />
      </head>
      <body className="font-sans text-slate-700 bg-slate-50 antialiased">
        <SchemaOrg />
        <GoogleTranslate />
        {children}
      </body>
    </html>
  );
}
