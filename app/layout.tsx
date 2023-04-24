import { Inter } from 'next/font/google';
import { MascotProvider } from '@/contexts/mascot';
import { Modal } from '@/components/modal';
import './globals.css';
import 'animate.css';

export const metadata = {
  title: 'Behaviorismo - CTD',
  description: 'Behaviorismo - CTD',
};

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className={`${inter.variable} font-sans`}>
      <body className='overflow-x-hidden'>
        <MascotProvider>
          <Modal />
          {children}
        </MascotProvider>
      </body>
    </html>
  );
}
