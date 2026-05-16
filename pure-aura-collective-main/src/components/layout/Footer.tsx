import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-32 bg-foreground text-background/90 overflow-hidden">
    <div className="blob bg-primary-soft top-0 left-1/4 h-72 w-72 opacity-20" />
    <div className="container-luxe relative pt-20 pb-10">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-teal-gradient grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-2xl text-background">Hands That Heal</span>
          </Link>
          <p className="mt-4 text-sm text-background/60 max-w-xs leading-relaxed">
            Safe, gentle, and effective treatments for all skin types — including darker tones. Everyone gets the care they need.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-primary-soft transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-primary-soft transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-background/60 hover:text-primary-glow transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-background/60 hover:text-primary-glow transition-colors">About</Link></li>
            <li><Link to="/gallery" className="text-background/60 hover:text-primary-glow transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="text-background/60 hover:text-primary-glow transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> 248 Maison Avenue<br />Suite 4, City Centre</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> +1 (555) 010-2480</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> hello@lumiere-clinic.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li className="flex justify-between"><span>Mon – Fri</span><span>9 – 19</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>10 – 18</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/40">
        <p>© {new Date().getFullYear()} Hands That Heal. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background/80">Privacy</a>
          <a href="#" className="hover:text-background/80">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
