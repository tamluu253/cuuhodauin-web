import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Consulting | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Consulting by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Consulting" 
      category="VNPIS Solutions"
    />
  );
}
