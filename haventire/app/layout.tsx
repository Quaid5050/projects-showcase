import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Haven Tint & Tire Garage | Auto Protection — Mississauga',
    template: '%s | Haven Tint & Tire',
  },
  description:
    'Professional ceramic coating, paint protection film, window tinting, vinyl wraps, dashcam installation, tire services and more. Serving Mississauga, Ontario.',
  keywords: ['ceramic coating', 'window tinting mississauga', 'paint protection film', 'vinyl wraps', 'tire services'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Haven Tint & Tire',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[#1a1a1a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
