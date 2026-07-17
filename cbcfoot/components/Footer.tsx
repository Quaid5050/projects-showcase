import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1A45", color: "#ccc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 2rem 2rem" }}>
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <Image src="/logo2.png" alt="ShoeMate Orthotic Clinic" width={160} height={46}
              style={{ height: "40px", width: "auto", marginBottom: "1rem", filter: "brightness(0) invert(1)" }} />
            <div style={{ width: "40px", height: "3px", backgroundColor: "#E63329", marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#aaa", maxWidth: "280px" }}>
              45 years of custom orthotic expertise. We analyze, we assess, we suggest — improving the quality of your life, one step at a time.
            </p>
            <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="tel:+14032592474" style={{ color: "#E63329", textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <PhoneIcon /> +1 403 259 2474
              </a>
              <a href="mailto:cbcfoot@live.ca" style={{ color: "#E63329", textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <MailIcon /> cbcfoot@live.ca
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 style={{ color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.8rem" }}>Services</h4>
            <div style={{ width: "32px", height: "3px", backgroundColor: "#E63329", marginBottom: "1rem" }} />
            {["Custom Orthotics", "Free Foot Assessment", "Free Back Assessment", "Walking Analysis", "Lifetime Warranty", "Free Shoe Horn"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "7px", padding: "0.32rem 0", fontSize: "0.88rem", color: "#aaa" }}>
                <CheckIcon /> {s}
              </div>
            ))}
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 style={{ color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.8rem" }}>Quick Links</h4>
            <div style={{ width: "32px", height: "3px", backgroundColor: "#E63329", marginBottom: "1rem" }} />
            {[{href:"/",label:"Home"},{href:"/about",label:"About Lance"},{href:"/services",label:"Our Services"},{href:"/why-us",label:"Why Choose CBC"},{href:"/contact",label:"Contact Us"}].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#aaa", textDecoration: "none", padding: "0.32rem 0", fontSize: "0.88rem" }}>
                → {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — CTA */}
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>Ready to walk better?</p>
            <p style={{ color: "#aaa", fontSize: "0.88rem", marginBottom: "1.25rem" }}>Free assessment — no obligations.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "0.82rem", padding: "0.75rem 1.25rem", display: "block", textAlign: "center" }}>
              Book Free Assessment
            </Link>
          </div>

        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 2rem", textAlign: "center", fontSize: "0.8rem", color: "#555" }}>
        <p>© {new Date().getFullYear()} ShoeMate Orthotic Clinic · CBC Foot Products Ltd. · Calgary, AB · Lance Colins</p>
        <p style={{ marginTop: "4px", fontSize: "0.75rem" }}>We analyze, we suggest — we do not diagnose or prescribe.</p>
      </div>

      <style>{`
        /* Mobile: ek ke neeche ek */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        /* Tablet: 2x2 */
        @media (min-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        /* Desktop: 4 columns ek row */
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
            gap: 3rem;
          }
        }

        .footer-grid a:hover {
          color: #E63329 !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </footer>
  );
}

function CheckIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E63329" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"3px"}}><polyline points="20 6 9 17 4 12"/></svg>; }
function PhoneIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function MailIcon()  { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }