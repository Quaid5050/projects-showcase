import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-lowest w-full pt-16 pb-8 border-t border-glass-stroke">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="block mb-4"><Logo className="h-9 w-auto" /></Link>
          <p className="text-on-surface-variant text-sm mb-5">&copy; {new Date().getFullYear()} YEG Another World VR.</p>
          <div className="flex gap-3">
            {[Facebook,Instagram,Youtube].map((Ic,i) => <a key={i} href="#" className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-brand-red hover:border-brand-red transition-all"><Ic className="w-4 h-4"/></a>)}
          </div>
        </div>
        <div><h4 className="font-mono text-xs text-brand-red tracking-widest uppercase mb-5">Experiences</h4><ul className="space-y-2.5">{["Zombie Survival","Sci-Fi Heist","Mystic Realms","Birthday Parties"].map(l=><li key={l}><Link href="/book" className="text-on-surface-variant hover:text-brand-red transition-all text-sm">{l}</Link></li>)}</ul></div>
        <div><h4 className="font-mono text-xs text-brand-red tracking-widest uppercase mb-5">Company</h4><ul className="space-y-2.5">{[{l:"About Us",h:"/about"},{l:"Corporate Events",h:"/book"},{l:"Educational VR",h:"/about"},{l:"Privacy Policy",h:"#"}].map(i=><li key={i.l}><Link href={i.h} className="text-on-surface-variant hover:text-brand-red transition-all text-sm">{i.l}</Link></li>)}</ul></div>
        <div><h4 className="font-mono text-xs text-brand-red tracking-widest uppercase mb-5">Support</h4><ul className="space-y-2.5">{[{l:"FAQ",h:"/#faq"},{l:"Contact Us",h:"/contact"},{l:"Safety Waiver",h:"#"}].map(i=><li key={i.l}><Link href={i.h} className="text-on-surface-variant hover:text-brand-red transition-all text-sm">{i.l}</Link></li>)}</ul></div>
      </div>
    </footer>
  );
}