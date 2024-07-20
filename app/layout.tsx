import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Orchard Home Stay',
  description: 'Travel  for Camping',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <link rel="icon" href="/logo-33.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <div className='relative w-full overflow-hidden'>
          <Navbar />
          <main className='relative '>{children}</main>
          <Footer />
        </div>
      </body>
    </html >
  );
}
