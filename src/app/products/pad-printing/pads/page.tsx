import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Pads | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Pads by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Pads" 
      category="VNPIS Solutions"
    />
  );
}
