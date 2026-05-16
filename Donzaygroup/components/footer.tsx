import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const serviceLinks = [
  { href: '/services', label: 'Commercial Cleaning' },
  { href: '/services', label: 'Office Solutions' },
  { href: '/services', label: 'Industrial Services' },
  { href: '/services', label: 'Specialty Services' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/Logo.png"
                alt="Donzay Group"
                width={160}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Donzay Group delivers industry-level cleaning and facility
              solutions with a focus on quality, efficiency, and long-term
              value. Serving businesses across Toronto and the GTA since 1993.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:4167975652"
                  className="flex items-start gap-3 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  (416) 797-5652
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@donzaygroup.com"
                  className="flex items-start gap-3 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  info@donzaygroup.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  777 Bay St. Unit C208B, Toronto, ON
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  24/7/365 Service Hours
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Donzay Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
