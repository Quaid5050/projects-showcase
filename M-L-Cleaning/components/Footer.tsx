"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--purple-dark)", borderTop: "1px solid rgba(255,215,0,0.2)" }}>
      {/* Top Bar */}
      <div style={{ background: "linear-gradient(135deg, #FFD700, #E6C200)", padding: "16px 24px", textAlign: "center" }}>
        <p style={{ color: "#2D0050", fontWeight: 700, fontSize: "15px", fontFamily: "var(--font-body)" }}>
          Serving Lake Wales, Winter Haven, Haines City, Davenport, Bartow & Surrounding Areas
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Image src="/logo1.png" alt="M&L Cleaning" width={90} height={90} style={{ objectFit: "contain" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
              Reliable, high-quality residential and commercial cleaning services in Lake Wales, FL and surrounding areas.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <SocialLink href="https://www.facebook.com/people/ML-Cleaning-Home-Services-LLC" icon="facebook" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#FFD700", fontWeight: 700, fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-display)" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#FFD700")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#FFD700", fontWeight: 700, fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-display)" }}>Our Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Deep Cleaning", "Move-In/Move-Out", "Regular Cleaning", "Commercial Cleaning", "Apartment Cleaning", "Airbnb Cleaning"].map((s) => (
                <span key={s} style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>→ {s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#FFD700", fontWeight: 700, fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-display)" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <ContactItem icon="phone" text="(863) 456-8958" href="tel:8634568958" />
              <ContactItem icon="email" text="mlcleaninghomeservicesllc@gmail.com" href="mailto:mlcleaninghomeservicesllc@gmail.com" />
              <ContactItem icon="web" text="mlcleaninghs.com" href="https://mlcleaninghs.com" />
              <ContactItem icon="clock" text="Mon–Sat: 8:00 AM – 6:00 PM" />
              <ContactItem icon="location" text="Lake Wales, FL & Surrounding Areas" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,215,0,0.2)", paddingTop: "28px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            © {new Date().getFullYear()} M&L Cleaning Home Services LLC. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            Designed by <span style={{ color: "#FFD700" }}>BizzOne Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon, text, href }: { icon: string; text: string; href?: string }) {
  const icons: Record<string, React.ReactNode> = {
    phone: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    email: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    web: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    clock: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    location: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  };

  const content = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <span style={{ flexShrink: 0, marginTop: "2px" }}>{icons[icon]}</span>
      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.5 }}>{text}</span>
    </div>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: "none" }}>{content}</a>;
  }
  return content;
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      width: "40px", height: "40px", borderRadius: "50%",
      background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "all 0.3s",
    }}
      onMouseOver={(e) => { e.currentTarget.style.background = "#FFD700"; }}
      onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,215,0,0.15)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    </a>
  );
}
