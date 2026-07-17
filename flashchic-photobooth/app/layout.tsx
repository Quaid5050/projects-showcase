import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

export const metadata: Metadata = {
  title: 'Flashchic Photobooth | Luxury Photo & Video Booth | Laval, Québec',
  description:
    'Premium photobooth and 360 video booth rental for birthdays, corporate events, weddings, and parties in Laval, Montréal & surrounding areas. Luxury experience, unforgettable moments.',
  keywords:
    'photobooth, videobooth, 360 booth, Laval, Montreal, Quebec, events, birthday, wedding, corporate',

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Flashchic Photobooth – Luxury Booth Experiences',
    description:
      'Capture every moment in style. Premium photo & 360 video booth rental in Laval, Québec.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  )
}