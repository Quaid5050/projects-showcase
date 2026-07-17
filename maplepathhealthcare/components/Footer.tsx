import Link from 'next/link'
import Image from 'next/image'

const services = ['PSW & Personal Support','Dementia Care','Palliative Care','Overnight & 24-Hour Care','Post-Hospital Recovery','Companionship','Parkinson\'s Care','Meal Preparation']
const company = [
  { href:'/about', label:'About & Our Team' },
  { href:'/how-it-works', label:'How It Works' },
  { href:'/pricing', label:'Pricing' },
  { href:'/reviews', label:'Family Reviews' },
  { href:'/coverage', label:'Areas We Serve' },
  { href:'/faq', label:'FAQ' },
  { href:'/contact', label:'Contact' },
  { href:'/privacy', label:'Privacy & PHIPA' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D1F17' }} className="pt-16 pb-6 px-[5%]">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0">
                <Image src="/logo.png" alt="Maplepath Healthcare" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif text-base font-semibold text-white leading-tight">Maplepath Healthcare</div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest">Halton Region · PSW & Home Care</div>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">Locally operated, PHIPA-compliant PSW and home care agency serving all of Halton Region. We are your neighbours — not a franchise, not a call centre. Est. January 2026.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                {icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>, label: 'PHIPA'},
                {icon: <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6z"/>, label: 'WSIB'},
                {icon: <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 15H11v-6h1.5V17zm0-8H11V7h1.5v2z"/>, label: '24h Care'},
                {icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>, label: 'Local'},
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1 bg-white/5 border border-white/10 rounded px-2 py-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#89C477">{b.icon}</svg>
                  <span className="text-[10px] text-white/50 font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}><Link href="/services" className="text-sm text-white/40 hover:text-white/80 transition-colors no-underline">{s}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90 mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map(c => (
                <li key={c.href}><Link href={c.href} className="text-sm text-white/40 hover:text-white/80 transition-colors no-underline">{c.label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/90 mb-4">Contact — 24/7</h4>
            <a href="tel:18776275313" className="flex items-center gap-2 bg-[#E0262E] text-white px-4 py-3 rounded font-bold text-base mb-4 hover:bg-[#C01E25] transition-colors no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              1-877-MAPLE13
            </a>
            {[
              { href: 'https://wa.me/18776275313', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>, label: 'WhatsApp Message', ext: true },
              { href: 'mailto:info@maplepathhealthcare.ca', icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>, label: 'info@maplepathhealthcare.ca' },
              { href: 'https://maps.google.com/?q=37+Main+St+S+Halton+Hills', icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>, label: '37 Main St. S, Halton Hills ON', ext: true },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noopener' : undefined} className="flex items-center gap-2 text-sm text-white/40 hover:text-white/75 transition-colors no-underline py-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.28)">{item.icon}</svg>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-white/7 mb-5" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/22">
          <span>© 2026 Maplepath Healthcare Inc. All rights reserved. Halton Region, Ontario, Canada.</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="text-white/22 hover:text-white/60 transition-colors no-underline">Privacy & PHIPA</Link>
            <Link href="/privacy" className="text-white/22 hover:text-white/60 transition-colors no-underline">WSIB & Insurance</Link>
            <Link href="/privacy" className="text-white/22 hover:text-white/60 transition-colors no-underline">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
