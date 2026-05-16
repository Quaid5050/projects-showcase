import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-8 sm:mt-16 bg-foreground text-background/90 overflow-hidden">
    <div className="blob bg-primary-soft top-0 left-1/4 h-72 w-72 opacity-20" />
    <div className="container-luxe relative pt-16 pb-8 sm:pt-20 sm:pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/image.png" alt="Hands That Heal" className="h-14 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm text-background/60 max-w-xs leading-relaxed">
            Hands That Heal — caring, gentle aesthetic treatments for every skin tone.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/handsthatheal__?igsh=NnA0YWtxa2E3N2Jy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hands That Heal on Instagram"
              className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-primary-soft transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61576901215663"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hands That Heal on Facebook"
              className="h-10 w-10 grid place-items-center rounded-full bg-background/10 hover:bg-primary-soft transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="text-background/60 hover:text-primary-glow transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-background/60 hover:text-primary-glow transition-colors">About</Link></li>
            <li><Link to="/faqs" className="text-background/60 hover:text-primary-glow transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="text-background/60 hover:text-primary-glow transition-colors">Contact Us</Link></li>
            <li><Link to="/booking" className="text-background/60 hover:text-primary-glow transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> 70 King St E, Stoney Creek, ON L8G 1K2, Canada</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> +1 905 662 0005</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> handthatheal@hotmail.ca</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li className="flex justify-between"><span>Mon – Sat</span><span>9:00 – 18:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/40">
        <p>© {new Date().getFullYear()} Hands That Heal. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background/80">Privacy</a>
          <a href="#" className="hover:text-background/80">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
