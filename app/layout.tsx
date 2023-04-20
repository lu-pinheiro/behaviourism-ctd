import { Poppins } from 'next/font/google';
import { MascotProvider } from '@/contexts/mascot';
import './globals.css';
import { AnimationProvider } from '@/contexts/animation-provider';

export const metadata = {
  title: 'Behaviorismo - CTD',
  description: 'Behaviorismo - CTD',
};

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className={`${poppins.variable} font-sans`}>
      <body>
        <AnimationProvider>
          <MascotProvider>{children}</MascotProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
