import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Burnaby Palace Restaurant | Chinese Cuisine | Online Ordering',
  description:
    'Order authentic Chinese cuisine online from Burnaby Palace Restaurant. Fresh Chinese favourites for convenient pickup in Burnaby, BC. Call +1 604-437-1818.',
  keywords: 'Burnaby Palace, Chinese restaurant, Chinese food Burnaby, online ordering, pickup',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Burnaby Palace Restaurant | Chinese Cuisine',
    description: 'Authentic Chinese cuisine in Burnaby. Order online for pickup.',
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
