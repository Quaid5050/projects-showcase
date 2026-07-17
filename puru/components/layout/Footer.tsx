import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { company } from '@/lib/data/company';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'New Products', href: '/products/new-products' },
  { label: 'Safe Solution®', href: '/products/new-products/safe-solution-floor-safety-system' },
  { label: 'Energy Solutions', href: '/products?category=Energy%20Solutions' },
  { label: 'Industrial Machinery', href: '/products/industrial-machinery' },
  { label: 'Custom Product Sourcing', href: '/products/custom-product-sourcing' },
];

const resourceLinks = [
  { label: 'Global Markets', href: '/global-markets' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Distributors Wanted', href: '/partnerships/distributors-wanted' },
  { label: 'Investments', href: '/investments' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-2 md:gap-10 md:py-14 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center gap-3.5">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:h-16 sm:w-16">
                <Image src="/logo-dark.png" alt="YUVAAN INTERNATIONAL" fill className="object-contain p-1" sizes="64px" />
              </div>
              <div>
                <p className="font-sora text-base font-bold tracking-[0.14em] sm:text-lg">YUVAAN</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent-bright">International</p>
              </div>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-5 max-w-xs">
              Professional cleaning, floor-safety, sourcing, and international partnership support from {company.locationDisplay}.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${company.publicPhoneTel}`} className="flex items-center gap-2 text-white/70 hover:text-accent-bright transition-colors">
                <Phone className="w-4 h-4" /> {company.publicPhoneDisplay}
              </a>
              <a href={`mailto:${company.publicEmail}`} className="flex min-w-0 items-start gap-2 break-all text-white/70 transition-colors hover:text-accent-bright">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {company.publicEmail}
              </a>
              <p className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" /> {company.locationDisplay}
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="font-sora font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-sora font-semibold mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 min-w-0 md:col-span-1">
            <h3 className="font-sora font-semibold mb-4">Resources</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 md:block md:space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-white/45">© {new Date().getFullYear()} {company.displayName}. All rights reserved.</p>
          <p className="text-xs text-white/45 max-w-xl md:text-right">{company.trademarkNotice}</p>
        </div>
      </Container>
    </footer>
  );
}
