import { Poppins } from 'next/font/google';

import { SoftwareApplication, WithContext } from 'schema-dts';

import './globals.css';

import Script from 'next/script';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import WhatsappButton from '@/components/whatsapp';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-popins',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: 'Tinoagro',
    template: '%s | Tinoagro',
  },
  description: 'Gestão inteligente de processos agrícolas',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Tinoagro',
    type: 'website',
    locale: 'pt_BR',
  },
};

const jsonLd: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tinoagro',
  description: 'Gestão inteligente de processos agrícolas',
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const background =
    'bg-gradient-to-br bg-no-repeat from-blue-darker from-20% via-green-darker via-65% to-green-dark';

  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="h-full min-h-screen w-full scroll-smooth font-sans">
        <main className="relative flex h-full w-full flex-grow flex-col items-stretch">
          <Header background={background} />
          {children}
          <Footer />
          <WhatsappButton />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-M2V95922" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'GTM-M2V95922');
            `}
          </Script>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
