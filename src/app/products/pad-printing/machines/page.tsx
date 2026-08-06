import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Machines | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Machines by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Machines" 
      category="VNPIS Solutions"
    />
  );
}
