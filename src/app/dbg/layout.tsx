import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VNPIS Analytics Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DbgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
