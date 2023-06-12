import { Poppins } from 'next/font/google';

import './globals.css';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { classNames } from '@/utils/classNames';

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
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const background =
    'bg-gradient-to-br bg-no-repeat from-blue-darker from-20% via-green-darker via-65% to-green-dark';

  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className={classNames('font-sans')}>
        <Header background={background} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
