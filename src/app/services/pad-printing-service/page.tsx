import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Pad Printing Service | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Pad Printing Service by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Dịch Vụ In Pad" 
      category="VNPIS Solutions"
      externalCtaUrl="https://inanvnpis.com"
      externalCtaText="Xem bảng giá & Đặt in tại inanvnpis.com"
    />
  );
}
