"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* CTA — light bg so logo does not blend */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-brand-navy">
              Need HVAC Service?
            </h3>
            <p className="text-slate-500 text-lg mt-1">Book your appointment today — free estimates on all installations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+16479485859" className="btn-red text-lg px-8 py-4 flex items-center gap-3 whitespace-nowrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
              +1 647-948-5859
            </a>
            <Link href="/contact" className="btn-navy text-lg px-8 py-4 text-center whitespace-nowrap">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
<div className="bg-gradient-to-br from-slate-50 via-blue-100 to-cyan-200 text-brand-navy">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <img src="/logo2.png" alt="JP Home Comfort" className="h-16 w-auto mb-5" />
              <p className="text-slate-600 leading-relaxed text-[15px] mb-6">
                Comfort You Can Count On. Professional heating, cooling, and water system services for the Greater Toronto Area.
              </p>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-lg bg-white border border-blue-100 hover:bg-brand-red flex items-center justify-center text-slate-600 hover:text-white transition-all" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3c-1.33 0-2.6.53-3.54 1.46C10.53 4.4 10 5.67 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7c0-.27.11-.52.29-.71.18-.18.44-.29.71-.29h3V2Z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-lg bg-white border border-blue-100 hover:bg-brand-red flex items-center justify-center text-slate-600 hover:text-white transition-all" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-lg bg-white border border-blue-100 hover:bg-brand-red flex items-center justify-center text-slate-600 hover:text-white transition-all" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
                </a>
                {/* Google */}
                <a href="#" className="w-10 h-10 rounded-lg bg-white border border-blue-100 hover:bg-brand-red flex items-center justify-center text-slate-600 hover:text-white transition-all" aria-label="Google">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09A6.97 6.97 0 015.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A10.98 10.98 0 001 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 text-slate-600 text-[15px]">
                {["Furnace Repair & Install","AC Repair & Install","Water Heaters","Heat Pumps","Water Systems","Air Systems","Duct Cleaning","Maintenance Plans"].map(s=>(
                  <li key={s}><Link href="/services" className="hover:text-brand-cyan transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-600 text-[15px]">
                {[{l:"Home",h:"/"},{l:"Services",h:"/services"},{l:"About Us",h:"/about"},{l:"Service Areas",h:"/areas"},{l:"Blog",h:"/blog"},{l:"Contact",h:"/contact"}].map(i=>(
                  <li key={i.l}><Link href={i.h} className="hover:text-brand-cyan transition-colors">{i.l}</Link></li>
                ))}
              </ul>
              <h4 className="font-heading font-bold text-lg mt-8 mb-4">Financing Partners</h4>
<ul className="space-y-2 text-slate-600 text-[15px]">                <li>Finance It</li>
                <li>Abode Financial</li>
                <li>Vista Rentals</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
<div className="space-y-4 text-slate-600 text-[15px]">                <a href="tel:+16479485859" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z"/></svg>
                  +1 647-948-5859
                </a>
                <a href="mailto:info@jphomecomfort.ca" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7L12 13L22 7"/></svg>
                  info@jphomecomfort.ca
                </a>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"/><circle cx="12" cy="9" r="3"/></svg>
                  Brampton, ON
                </div>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
                  Mon – Sat: 9AM – 6PM
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} JP Home Comfort. All rights reserved.</p>
            <p className="text-slate-500 text-sm italic">Comfort You Can Count On</p>
          </div>
        </div>
      </div>
    </footer>
  );
}