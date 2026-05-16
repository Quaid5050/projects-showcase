import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart tech, trusted devices. Curated new and pre-owned electronics
              with verified quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/mobiles" className="hover:text-foreground transition-colors">Mobiles</Link></li>
              <li><Link href="/tablets" className="hover:text-foreground transition-colors">Tablets</Link></li>
              <li><Link href="/laptops" className="hover:text-foreground transition-colors">Laptops</Link></li>
              <li><Link href="/accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
              <li><Link href="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/repair" className="hover:text-foreground transition-colors">Repair Services</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/inquiry" className="hover:text-foreground transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-3">Get in touch</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@3raymobile.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  info@3raymobile.com
                </a>
              </li>
              <li>
                <a href="tel:+14166693931" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  +1 416-669-3931
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/14166693931"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" />
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>7025 Tomken Rd, Mississauga, ON L5T 2J8, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} 3 Ray Mobiles. All rights reserved.</p>
          <p>Inquiry-only — no checkout, no surprises.</p>
        </div>
      </div>
    </footer>
  );
}
