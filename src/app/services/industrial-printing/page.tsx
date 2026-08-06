import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Industrial Printing | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Industrial Printing by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Dịch Vụ In Công Nghiệp" 
      category="VNPIS Solutions"
      externalCtaUrl="https://inanvnpis.com"
      externalCtaText="Xem bảng giá & Đặt in tại inanvnpis.com"
    />
  );
}
