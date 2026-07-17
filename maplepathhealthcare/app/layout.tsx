import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatButton from '@/components/FloatButton'

export const metadata: Metadata = {
  title: 'PSW & Home Care Halton Region | Maplepath Healthcare',
  description: 'Maplepath Healthcare — Halton\'s trusted, PHIPA-compliant PSW and home care agency. Certified caregivers in Oakville, Burlington, Milton & Halton Hills. Care starts within 24 hours.',
  keywords: 'PSW Oakville, home care Halton, PSW Burlington, dementia care Halton, personal support worker',
  openGraph: {
    title: 'Maplepath Healthcare — PSW & Home Care Halton Region',
    description: 'Locally operated, PHIPA-compliant home care. Real caregivers. Real trust. Serving Oakville, Burlington, Milton & Halton Hills.',
    type: 'website',
    url: 'https://www.maplepathhealthcare.ca',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#1C3162] text-white px-4 py-2 rounded z-50">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatButton />
      </body>
    </html>
  )
}
