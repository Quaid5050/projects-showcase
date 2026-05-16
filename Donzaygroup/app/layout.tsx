import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://donzaygroup.com'),
  title: 'Donzay Group | Professional Cleaning & Facility Solutions',
  description:
    'Reliable, cost-effective, and high-quality cleaning and facility services for businesses of all sizes across Toronto and the GTA.',
  openGraph: {
    title: 'Donzay Group | Professional Cleaning & Facility Solutions',
    description:
      'Reliable, cost-effective, and high-quality cleaning and facility services for businesses of all sizes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
