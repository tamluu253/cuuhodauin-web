import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VNPIS Lab — Trung tâm Cứu hộ Đầu in Kỹ thuật số số 1 Việt Nam | cuuhodauin.com",
  description: "VNPIS Lab — Dịch vụ chuyên sâu cứu hộ, phục hồi, soi Nozzle 4K và sửa chữa đầu in phun công nghiệp Ricoh Gen5/6, Kyocera, Konica 1024i, Epson I3200, CIJ & TIJ. Cam kết No Cure - No Pay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body class="font-sans text-slate-700 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
