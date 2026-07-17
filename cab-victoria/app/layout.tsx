import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BookaCab Victoria — Personalized Transportation & Tours',
  description: 'Airport transfers, city tours, outstation trips, limousine service and more. Serving Victoria, BC. Book with Jay — +1 (250) 986-8284',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}