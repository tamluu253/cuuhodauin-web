import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/lead-gen/FloatingContact';
import GoogleTranslate from '@/components/GoogleTranslate';
import SchemaOrg from '@/components/SchemaOrg';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

const fontMain = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'VNPIS | Industrial Printing Solutions',
  description: 'Enterprise B2B provider of QR Code Printing, Variable Data Printing, RFID, and Industrial Ink Solutions.',
  verification: {
    google: 'xQz99KRkCepH0j7LgeoQ2hHqRA4YqEMOw4rP1nHBHH0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Placeholder cho Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G9RTHLGQFS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9RTHLGQFS');
          `}
        </Script>

        {/* Placeholder cho Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920561344403244');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${fontMain.variable} font-sans flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        <SchemaOrg />
        <GoogleTranslate />
        <Header />
        <main className="flex-grow pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
