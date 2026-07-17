import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import SiteChrome from '@/components/layout/SiteChrome';
import { company } from '@/lib/data/company';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvaan-international.vercel.app'),
  title: 'YUVAAN INTERNATIONAL | Professional Cleaning & Floor Safety Solutions',
  description:
    'Yuvaan International supports professional cleaning and floor-safety solutions, cross-border product sourcing, commercial partnerships, and international business inquiries.',
  keywords:
    'floor safety, commercial cleaning, Safe Solution, international trade, product sourcing, Canada trade, industrial solutions',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'YUVAAN INTERNATIONAL | Professional Cleaning & Floor Safety Solutions',
    description: 'Safe. Sustainable. Commercial performance for facilities that need reliable floor-safety and sourcing support.',
    url: '/',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.displayName,
    url: 'https://yuvaan-international.vercel.app',
    email: company.publicEmail,
    telephone: company.publicPhoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressRegion: company.province,
      addressCountry: company.country,
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} bg-surface-soft text-ink font-inter antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
