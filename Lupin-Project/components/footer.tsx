import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Instagram, ArrowRight } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/handyman/register", label: "Join Network" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { label: "Construction", href: "/services#construction" },
  { label: "Handyman", href: "/services#handyman" },
  { label: "Electrical", href: "/services#electrical" },
  { label: "Plumbing", href: "/services#plumbing" },
  { label: "HVAC", href: "/services#hvac" },
  { label: "Drywall", href: "/services#drywall" },
  { label: "Framing", href: "/services#framing" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4F46E5]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#4F46E5]" />

      <div className="container mx-auto px-4 py-8 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <img
                src="/Logo.jpeg"
                alt="Lupin Project Group"
                className="h-12 w-auto object-contain rounded-lg"
              />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg text-white tracking-tight">Lupin Project</span>
                <span className="text-xs font-medium text-[#A78BFA] tracking-widest uppercase">Group</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
              Quality construction & handyman services across the GTA. Licensed & insured.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="https://facebook.com/LupinProjectGroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-[#4F46E5] border border-white/10 transition-all duration-200 hover:border-[#4F46E5] hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com/lupingroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-[#833ab4] hover:to-[#fd1d1d] border border-white/10 transition-all duration-200 hover:border-[#833ab4] hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links + Services side by side on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-0 sm:col-span-1">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-3">Navigate</h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#A78BFA]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:col-span-1">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-3">Services</h4>
              <ul className="space-y-1.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-1 text-white/60 hover:text-white text-xs transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#A78BFA]" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-3">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:905-233-2100"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#4F46E5]/20 group-hover:bg-[#4F46E5]/40 transition-colors shrink-0">
                    <Phone className="w-3 h-3 text-[#A78BFA]" />
                  </span>
                  905-233-2100
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:lupinprojectgroup@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#4F46E5]/20 group-hover:bg-[#4F46E5]/40 transition-colors shrink-0">
                    <Mail className="w-3 h-3 text-[#A78BFA]" />
                  </span>
                  lupinprojectgroup@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.google.com/?q=100+Consilium+Pl+Suite+200+Scarborough+ON+M1H+3E3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/60 hover:text-white text-xs transition-colors group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#4F46E5]/20 group-hover:bg-[#4F46E5]/40 transition-colors shrink-0 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#A78BFA]" />
                  </span>
                  <span>100 Consilium Pl #200<br />Scarborough, ON M1H 3E3</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Lupin Project Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/admin/login" className="hover:text-white/70 transition-colors">Admin</Link>
            <Link href="/handyman/login" className="hover:text-white/70 transition-colors">Handyman Login</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
