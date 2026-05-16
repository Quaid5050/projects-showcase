import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextAuthProvider } from '@/components/session-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lupin Project Group | Professional Construction & Handyman Services in Scarborough',
  description: 'Lupin Project Group delivers quality craftsmanship, reliable construction, and professional handyman services across Scarborough and surrounding areas. Licensed & Insured.',
  generator: 'v0.app',
  keywords: ['construction', 'handyman', 'Scarborough', 'home renovations', 'commercial maintenance', 'Ontario'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased overflow-x-hidden">
        <NextAuthProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </NextAuthProvider>
      </body>
    </html>
  )
}
