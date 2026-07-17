import Link from 'next/link';
import Image from 'next/image';
import { services, locations, LOGO_URL } from '@/lib/data';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Book An Appointment', href: '/booking' },
  { name: 'FAQs', href: '/#faq' },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <span className="text-[#e01e25] font-black text-sm tracking-[-0.05em] block mb-1">///</span>
      <h3 className="text-white font-black text-sm uppercase tracking-widest">{title}</h3>
    </div>
  );
}

const mississauga = locations.find((l) => l.name === 'Mississauga')!;

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10">

          {/* Col 1 — Brand + Mississauga address + email */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src={LOGO_URL} alt="Haven Tint & Tire" width={160} height={54}
                className="h-14 w-auto object-contain" />
            </Link>

            <div className="mb-4">
              <p className="text-[#e01e25] font-black text-xs uppercase tracking-widest mb-2">
                {mississauga.name}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{mississauga.address}</p>
              <p className="text-[#e01e25] font-bold text-[0.6rem] uppercase tracking-widest mb-1">
                Call Now
              </p>
              <a href={`tel:${mississauga.phoneRaw}`}
                className="text-white font-bold text-sm hover:text-[#e01e25] transition-colors">
                {mississauga.phone}
              </a>
            </div>

            <div>
              <p className="text-[#e01e25] font-bold text-[0.6rem] uppercase tracking-widest mb-1">
                E-mail :
              </p>
              <a href="mailto:haventinttire@gmail.com"
                className="text-gray-400 text-sm hover:text-[#e01e25] transition-colors">
                haventinttire@gmail.com
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <SectionHeading title="Our Services" />
            <ul className="space-y-2.5">
              {services.slice(1, 9).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}
                    className="text-gray-400 hover:text-[#e01e25] text-xs uppercase tracking-wide transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <SectionHeading title="Quick Links" />
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href}
                    className="text-gray-400 hover:text-[#e01e25] text-xs uppercase tracking-wide transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500 text-center">
            © 2026, HAVEN TINT &amp; TIRE, All rights reserved.
          </p>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/haventintandtiregarage" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/haven_garage/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@haven_garage" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-[#2a2a2a] hover:bg-[#e01e25] flex items-center justify-center transition-colors text-[10px] font-black text-white">
              TT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
