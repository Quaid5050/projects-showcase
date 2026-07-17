"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-surface/95 backdrop-blur-2xl border-b border-glass-stroke" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 max-w-container mx-auto">
        <Link href="/"><Logo className="h-10 w-auto" /></Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => <Link key={l.href} href={l.href} className={`text-sm transition-all ${pathname === l.href ? "text-primary font-semibold border-b-2 border-brand-red pb-1" : "text-on-surface-variant hover:text-brand-red"}`}>{l.label}</Link>)}
        </div>
        <div className="flex items-center gap-4">
          <User className="w-5 h-5 text-on-surface-variant hover:text-brand-red cursor-pointer hidden md:block" />
          <Link href="/book" className="hidden md:flex bg-brand-red text-white px-5 py-2 rounded font-bold text-sm items-center gap-1.5">Book Now</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brand-red"><Menu className="w-6 h-6" /></button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glass-panel-solid border-t border-glass-stroke">
          <div className="flex flex-col px-margin-mobile py-6 gap-1">
            <button onClick={() => setIsOpen(false)} className="self-end text-brand-red mb-2"><X className="w-6 h-6" /></button>
            {navLinks.map(l => <Link key={l.href} href={l.href} className={`py-3 px-4 rounded-lg text-base ${pathname === l.href ? "text-brand-red font-bold bg-brand-red/5" : "text-on-surface-variant hover:text-brand-red"}`}>{l.label}</Link>)}
            <Link href="/book" className="mt-4 bg-brand-red text-white px-6 py-3.5 rounded font-bold text-center">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}