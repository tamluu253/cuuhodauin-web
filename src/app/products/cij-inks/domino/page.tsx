import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Domino | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Domino by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Domino" 
      category="VNPIS Solutions"
    />
  );
}
