"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="18" fill="#2C1810"/>
            <path d="M19 7C19 7 10 14 10 21C10 25.9 14.1 30 19 30C23.9 30 28 25.9 28 21C28 14 19 7 19 7Z" fill="#E8A020"/>
            <path d="M19 13C19 13 13 18 13 22C13 25 15.7 27.5 19 27.5C22.3 27.5 25 25 25 22C25 18 19 13 19 13Z" fill="#FDF6EC"/>
            <circle cx="19" cy="22" r="3.5" fill="#E8A020"/>
          </svg>
          <div>
            <span className="navbar-logo-text-top">Spice</span>
            <span className="navbar-logo-text-bot">Route</span>
          </div>
        </Link>

        <div className="navbar-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/shop" className="nav-link nav-cta">Order Now</Link>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          }
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {[["Home","/"],["Shop","/shop"],["About","/about"],["Contact","/contact"]].map(([l,h])=>(
          <Link key={l} href={h} className="nav-link" onClick={() => setOpen(false)}>{l}</Link>
        ))}
        <Link href="/shop" className="nav-link nav-cta" style={{ textAlign:"center" }} onClick={() => setOpen(false)}>Order Now</Link>
      </div>
    </nav>
  );
}
