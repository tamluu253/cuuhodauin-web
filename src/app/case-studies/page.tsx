import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Case Studies | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for Case Studies by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="Case Studies" 
      category="VNPIS Solutions"
    />
  );
}
