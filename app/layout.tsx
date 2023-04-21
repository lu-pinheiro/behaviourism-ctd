import { Inter } from 'next/font/google';
import { MascotProvider } from '@/contexts/mascot';
import './globals.css';
import { AnimationProvider } from '@/contexts/animation-provider';
import { Modal } from '@/components/modal';

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
      <body>
        <AnimationProvider>
          <MascotProvider>
            <Modal />
            {children}
          </MascotProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
