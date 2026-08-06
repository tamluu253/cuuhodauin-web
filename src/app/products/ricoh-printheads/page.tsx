import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Ricoh Printheads | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Ricoh Printheads by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Ricoh Printheads" 
      category="VNPIS Solutions"
    />
  );
}
