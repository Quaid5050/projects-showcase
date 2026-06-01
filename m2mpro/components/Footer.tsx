import Link from "next/link";

export default function Footer() {
  const services = [
    "Standard Home Cleaning",
    "Deep Cleaning",
    "Move-In / Move-Out",
    "Office & Commercial",
    "Post-Construction",
  ];

  const areas = [
    "Langley", "Surrey", "Abbotsford",
    "Maple Ridge", "Coquitlam", "Burnaby",
    "Vancouver", "Delta", "White Rock",
  ];

  return (
    <footer style={{ background: "var(--charcoal)", color: "rgba(255,255,255,0.7)", paddingTop: "80px" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", marginBottom: "80px" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "60px", marginBottom: "60px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <img src="/logo.png" alt="M2M Pro Cleaners" style={{ height: "70px", width: "auto", display: "block" }} />
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.8, marginBottom: "24px", maxWidth: "280px" }}>
              From Mess to Magic — professional cleaning that transforms your space. Serving the Lower Mainland with care and excellence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="tel:7788936786" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
                (778) 893-6786
              </a>
              <a href="mailto:info@m2mprocleaners.ca" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@m2mprocleaners.ca
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "white", marginBottom: "20px", fontWeight: 500 }}>Services</h4>
            <ul style={{ listStyle: "none" }}>
              {services.map((s) => (
                <li key={s} style={{ marginBottom: "10px" }}>
                  <Link href="/services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "white", marginBottom: "20px", fontWeight: 500 }}>Areas Served</h4>
            <ul style={{ listStyle: "none" }}>
              {areas.map((a) => (
                <li key={a} style={{ marginBottom: "10px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "white", marginBottom: "20px", fontWeight: 500 }}>Hours</h4>
            <div style={{ fontSize: "13px", lineHeight: 2, marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <span>Mon – Fri</span>
                <span style={{ color: "var(--gold)" }}>7AM – 10PM</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <span>Sat & Sun</span>
                <span style={{ color: "var(--gold)" }}>8AM – 8PM</span>
              </div>
            </div>
            <Link href="/booking" className="btn-primary" style={{ fontSize: "11px", padding: "12px 24px", display: "block", textAlign: "center" }}>
              Book a Clean
            </Link>
            <Link href="/contact" style={{ display: "block", textAlign: "center", marginTop: "12px", color: "var(--gold)", textDecoration: "none", fontSize: "12px", letterSpacing: "1px" }}>
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} M2M Pro Cleaners. All rights reserved. | Licensed & Insured
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            Serving Langley, BC & the Lower Mainland
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  );
}