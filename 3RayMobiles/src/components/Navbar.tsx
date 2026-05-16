"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu, X, Search, ChevronDown,
  Smartphone, Laptop, Headphones, Wrench, Info, Phone, LayoutGrid, Tablet,
} from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const shopLinks = [
  { href: "/mobiles",     label: "Mobiles",      icon: Smartphone, desc: "iPhones, Samsung, Google Pixel" },
  { href: "/tablets",     label: "Tablets",      icon: Tablet,     desc: "iPad Pro, iPad Air & more" },
  { href: "/laptops",     label: "Laptops",      icon: Laptop,     desc: "MacBook, Gaming, Business" },
  { href: "/accessories", label: "Accessories",  icon: Headphones, desc: "Earbuds, Chargers, Cases" },
  { href: "/products",    label: "All Products", icon: LayoutGrid, desc: "Browse the full catalog" },
];

const mainLinks = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/repair",   label: "Repair",   icon: Wrench },
  { href: "/about",    label: "About",    icon: Info },
  { href: "/contact",  label: "Contact",  icon: Phone },
] as const;

export function Navbar() {
  const [open, setOpen]             = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [shopOpen, setShopOpen]     = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router   = useRouter();
  const dropRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
    setShowSearch(false);
    setSearchQuery("");
    setOpen(false);
  };

  const isShopActive = ["/mobiles", "/tablets", "/laptops", "/accessories", "/products"].includes(pathname);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-border/50">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              href="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Home
              {pathname === "/" && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
            </Link>

            {/* Services */}
            <Link
              href="/services"
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${pathname === "/services" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Services
              {pathname === "/services" && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
            </Link>

            {/* Shop dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setShopOpen((s) => !s)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${isShopActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                Shop
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${shopOpen ? "rotate-180" : ""}`} />
                {isShopActive && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
              </button>

              {shopOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl p-2 z-50">
                  {shopLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShopOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface group ${pathname === link.href ? "bg-surface" : ""}`}
                    >
                      <div className="shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Repair */}
            <Link
              href="/repair"
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${pathname === "/repair" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Repair
              {pathname === "/repair" && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${pathname === "/about" ? "text-foreground" : "text-muted-foreground"}`}
            >
              About
              {pathname === "/about" && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-foreground ${pathname === "/contact" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Contact
              {pathname === "/contact" && <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-gradient-primary" />}
            </Link>
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => { setShowSearch((s) => !s); setOpen(false); setShopOpen(false); }}
              aria-label="Toggle search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Search className="h-4 w-4" />
            </button>

            <ThemeToggle />

            <Link
              href="/inquiry"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-gradient-primary hover:opacity-90 border-0 glow-blue text-xs sm:text-sm font-medium h-9 px-3 text-primary-foreground transition-opacity"
            >
              Get a Quote
            </Link>

            <button
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => { setOpen((o) => !o); setShowSearch(false); setShopOpen(false); }}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {showSearch && (
          <div className="border-t border-border/50 bg-surface/80 px-4 py-3 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="mx-auto max-w-3xl flex gap-2">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phones, laptops, accessories…"
                autoFocus
                className="flex-1 rounded-xl border border-border/60 bg-background/60 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 shrink-0 px-4 h-9 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden glass border-b border-border/50">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-1 pt-2 border-t border-border/40">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Shop</p>
              {shopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}
                >
                  <link.icon className="h-4 w-4 text-primary shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-primary px-3 py-2.5 text-sm font-semibold text-center text-primary-foreground"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
