import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Demo | Merchant Orders",
  description: "Contact Merchant Orders to book a demo and learn how branded online ordering can support your restaurant.",
  alternates: { canonical: "https://www.merchantorders.io/contact" },
  openGraph: {
    url: "https://www.merchantorders.io/contact",
    title: "Book a Demo | Merchant Orders",
    description: "Contact Merchant Orders to book a demo and learn how branded online ordering can support your restaurant.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
