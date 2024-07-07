import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX for Camping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>

      <body>
        <div className='relative w-full overflow-hidden'>

          <Navbar />
          <main className='relative '>{children}</main>
          <Footer />
        </div>

      </body>

    </html >
  );
}
