"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const solutionLinks = [
  { label: "Robot Dog", href: "/robots/robot-dog" },
  { label: "Humanoid Robot", href: "/robots/humanoid" },
  { label: "Cooking Robot", href: "/robots/cooking-robot" },
  { label: "Restaurant Automation", href: "/restaurant" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact#demo" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      {/* CTA strip */}
      <div style={{ background: "linear-gradient(135deg, #111111, #1a1a1a, #111111)", borderBottom: "1px solid rgba(200,200,200,0.05)" }}>
        <div className="r-footer-strip">
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#fafafa", marginBottom: 8 }}>
              Ready to Deploy Canadian Robots? 🍁
            </h3>
            <p style={{ fontSize: 15, color: "rgba(250,250,250,0.6)", fontFamily: "'Inter', sans-serif" }}>
              Contact our team for border procurement or restaurant deployment.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Get Started Today</Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="r-footer-main">
        <div className="r-footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: 16 }}>
              <img src="/logo.png" alt="Canadian Robots" style={{ height: 80, width: "auto", objectFit: "contain" }} />
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.7, maxWidth: 300, marginBottom: 8, fontFamily: "'Inter', sans-serif" }}>
              100% Canadian owned robotics company. AI Makes Canada Stronger. Proudly serving border agencies, and restaurants across Canada. 🍁
            </p>
            <p style={{ fontSize: 13, color: "#CC0000", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
              🍁 AI Makes Canada Stronger
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Robot Solutions</h4>
            {solutionLinks.map(l => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Company</h4>
            {companyLinks.map(l => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Contact</h4>
            {[
              { icon: <Mail size={13} />, text: "info@canadianrobots.ca", href: "mailto:info@canadianrobots.ca" },
              { icon: <Phone size={13} />, text: "+1 778.681.7688", href: "tel:+17786817688" },
              { icon: <MapPin size={13} />, text: "Serving Canada Nationwide", href: null },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>
                <span style={{ color: "#CC0000", flexShrink: 0 }}>{icon}</span>
                {href ? (
                  <a href={href} style={{ color: "rgba(250,250,250,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.55)"}>
                    {text}
                  </a>
                ) : text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 48, paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <p style={{ fontSize: 12, color: "rgba(250,250,250,0.3)", fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Canadian Robots™. All rights reserved. 🍁 100% Canadian Owned
          </p>
          <p style={{ fontSize: 12, color: "#CC0000", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            AI Makes Canada Stronger 🍁
          </p>
        </div>
      </div>
    </footer>
  );
}
