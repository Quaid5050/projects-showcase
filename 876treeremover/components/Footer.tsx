"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(212,160,23,0.15)", paddingTop: 60, paddingBottom: 30 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="/logo1.png" alt="876 Tree Removal" style={{ height: 44, width: "auto", display: "block" }} />
            </div>
            <p style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>
              Professional tree services across Jamaica. From removal to trimming, we keep your land safe and beautiful.
            </p>
            <div style={{ display: "flex", height: 4, borderRadius: 2, overflow: "hidden", width: 80 }}>
              <div style={{ flex: 1, background: "#0a0a0a" }} />
              <div style={{ flex: 1, background: "#D4A017" }} />
              <div style={{ flex: 1, background: "#1A6B3A" }} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A017", marginBottom: 20 }}>Quick Links</h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ display: "block", color: "rgba(245,245,240,0.65)", fontSize: "0.9rem", textDecoration: "none", marginBottom: 10 }}>
                → {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A017", marginBottom: 20 }}>Services</h4>
            {["Tree Removal", "Tree Trimming", "Fallen Tree Removal", "Lot Clearing", "Wood Chips for Sale"].map((s) => (
              <div key={s} style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.9rem", marginBottom: 10 }}>
                <span style={{ color: "#1A6B3A", marginRight: 8 }}>✓</span>{s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A017", marginBottom: 20 }}>Contact</h4>
            {[
              { icon: "📞", text: "876-478-1248" },
              { icon: "✉️", text: "876treeremoval@gmail.com" },
              { icon: "🌐", text: "876treeremoval.com" },
              { icon: "📍", text: "Jamaica" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
                <span style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.9rem" }}>{item.text}</span>
              </div>
            ))}

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a href="https://instagram.com/876tree.removal" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(212,160,23,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245,245,240,0.7)" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="rgba(245,245,240,0.7)" stroke="none" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(212,160,23,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245,245,240,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(212,160,23,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(245,245,240,0.4)", fontSize: "0.8rem" }}>
            © {currentYear} 876 Tree Removal. All rights reserved. | Jamaica
          </p>
          <p style={{ color: "rgba(245,245,240,0.3)", fontSize: "0.75rem" }}>
            Licensed & Insured Tree Service Professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
