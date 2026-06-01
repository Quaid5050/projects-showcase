import Link from "next/link";
import { Phone, Mail, Globe, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#060f22", padding: "72px 0 0", overflowX: "hidden", maxWidth: "100%" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: 52,
            marginBottom: 52,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: 1 }}>AEM</div>
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: 8, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#3b82f6" }}>
                Quality ISO Consulting
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.85, maxWidth: 280, marginBottom: 24 }}>
              Simplifying ISO 9001 certification through practical, efficient and results-driven support. Compliance. Quality. Excellence.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="tel:+15145526936" style={socialBtn} title="Call us">
                <Phone size={15} />
              </a>
              <a href="mailto:contact@aemqualityiso.com" style={socialBtn} title="Email us">
                <Mail size={15} />
              </a>
              <a href="https://www.aemqualityiso.com" style={socialBtn} title="Website">
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={colHead}>Services</h4>
            <ul style={{ listStyle: "none" }}>
              {[
                ["Diagnostic & Gap Analysis", "/services#diagnostic"],
                ["ISO 9001 Implementation", "/services#implementation"],
                ["Training Services", "/services#training"],
                ["Documentation & CI", "/services#documentation"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <Link href={href} style={footLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={colHead}>Navigation</h4>
            <ul style={{ listStyle: "none" }}>
              {[["Home", "/"], ["About", "/about"], ["Our Process", "/process"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <Link href={href} style={footLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={colHead}>Contact Info</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <Phone size={14} />, text: "+1 514 552 6936", href: "tel:+15145526936" },
                { icon: <Mail size={14} />, text: "contact@aemqualityiso.com", href: "mailto:contact@aemqualityiso.com" },
                { icon: <Globe size={14} />, text: "www.aemqualityiso.com", href: "https://www.aemqualityiso.com" },
                { icon: <MapPin size={14} />, text: "Montréal, Québec, Canada", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: "flex", alignItems: "flex-start", gap: 10, textDecoration: "none", color: "rgba(255,255,255,0.45)", fontSize: 13, transition: "color 0.2s" }}>
                  <span style={{ color: "#1a56db", marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} AEM Quality ISO Consulting. All rights reserved. Montréal, Québec, Canada.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Shield size={13} color="rgba(255,255,255,0.25)" />
            <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
              Québec Registered · NEQ: 2282117623
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.2fr !important; }
        @media (max-width: 960px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

const colHead: React.CSSProperties = {
  fontFamily: "var(--font-montserrat)",
  fontSize: 10, fontWeight: 700,
  letterSpacing: "2.5px", textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: 20,
};
const footLink: React.CSSProperties = {
  fontSize: 13, color: "rgba(255,255,255,0.42)",
  textDecoration: "none", transition: "color 0.2s",
};
const socialBtn: React.CSSProperties = {
  width: 36, height: 36, borderRadius: 8,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "rgba(255,255,255,0.45)", textDecoration: "none",
  transition: "all 0.2s",
};