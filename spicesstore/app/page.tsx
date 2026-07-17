import Link from "next/link";
import { spices } from "./data/spices";
import SpiceCard from "./components/SpiceCard";

export default function Home() {
  const featured = spices.filter(s=>s.featured).slice(0,4);
  return (
    <>
      {/* ===== HERO ===== */}
     <section
  className="hero"
  style={{
    backgroundImage: "url('/banner1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
>
  {/* Optional dark overlay for better text visibility */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      zIndex: 1,
    }}
  />

  <div
    className="hero-content"
    style={{
      position: "relative",
      zIndex: 2,
    }}
  >
    <div style={{ maxWidth: "38rem" }}>
      <span className="hero-eyebrow">Authentic · Pure · Farm to Door</span>

      <h1 className="hero-title">
        Spices that tell
        <br />
        <em>India&apos;s story</em>
      </h1>

      <p className="hero-desc">
        Hand-picked from farms in Kerala, Rajasthan, and Kashmir. No fillers,
        no artificial colour — just pure spices, delivered across Canada.
      </p>

      <div className="hero-btns">
        <Link href="/shop" className="btn-gold">
          Shop All Spices
        </Link>

        <Link href="/contact" className="btn-ghost">
          Contact Us
        </Link>
      </div>

      <div className="hero-stats">
        {[
          { n: "20+", l: "Spice Varieties" },
          { n: "100%", l: "Pure & Natural" },
          { n: "Canada", l: "Wide Delivery" },
        ].map((s) => (
          <div key={s.n}>
            <div className="hero-stat-n">{s.n}</div>
            <div className="hero-stat-l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ===== OFFER BANNER ===== */}
      <div className="offer-banner">
        <div className="offer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
          Orders over $100 get 15% OFF automatically
        </div>
        <div className="offer-divider"/>
        <div className="offer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Enter email on popup for 10% off first order
        </div>
      </div>

      {/* ===== FEATURED SPICES ===== */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="sec-label">Our Selection</span>
            <h2 className="sec-title">Customer Favourites</h2>
            <p className="sec-sub mx-auto">These are the spices our customers keep coming back for — fresh, aromatic, and exactly as they should be.</p>
          </div>
          <div className="cards-grid">
            {featured.map(s=><SpiceCard key={s.id} spice={s}/>)}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="btn-outline-dark">
              View All Spices
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section className="section section-muted">
        <div className="container">
          <div className="text-center">
            <span className="sec-label">Simple Process</span>
            <h2 className="sec-title">How to Order</h2>
          </div>
          <div className="steps-grid">
            {[
              {n:"01",t:"Browse Spices",d:"Explore our 20+ authentic Indian spices with full descriptions and pricing.",
                ic:<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="14" cy="14" r="9" stroke="#E8A020" strokeWidth="2"/><path d="M21 21l7 7" stroke="#E8A020" strokeWidth="2.5" strokeLinecap="round"/></svg>},
              {n:"02",t:"Fill Order Form",d:"Select your spices, quantities, and enter your name and delivery address.",
                ic:<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="28" rx="3" stroke="#E8A020" strokeWidth="2"/><path d="M10 12h12M10 18h12M10 24h7" stroke="#E8A020" strokeWidth="2" strokeLinecap="round"/></svg>},
              {n:"03",t:"We Confirm",d:"We email you within 24 hours with order confirmation and payment details.",
                ic:<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 8h24c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2z" stroke="#E8A020" strokeWidth="2"/><polyline points="28,10 16,18 4,10" stroke="#E8A020" strokeWidth="2"/></svg>},
              {n:"04",t:"Fast Delivery",d:"Your spices are packed fresh and shipped directly to your door across Canada.",
                ic:<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="1" y="10" width="20" height="14" rx="2" stroke="#E8A020" strokeWidth="2"/><path d="M21 14l5 4v6h-5V14z" stroke="#E8A020" strokeWidth="2"/><circle cx="7" cy="26" r="2.5" stroke="#E8A020" strokeWidth="2"/><circle cx="23" cy="26" r="2.5" stroke="#E8A020" strokeWidth="2"/></svg>},
            ].map(s=>(
              <div key={s.n}>
                <div className="step-icon">{s.ic}</div>
                <span className="step-num">{s.n}</span>
                <h3 className="step-title">{s.t}</h3>
                <p className="step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-dark">
        <div className="container">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{margin:"0 auto 1.5rem",display:"block"}}>
            <circle cx="28" cy="28" r="27" fill="#E8A020" opacity=".18"/>
            <path d="M28 8C28 8 15 18 15 28C15 35.7 21 42 28 42C35 42 41 35.7 41 28C41 18 28 8 28 8Z" fill="#E8A020" opacity=".7"/>
            <circle cx="28" cy="28" r="8" fill="#E8A020"/>
          </svg>
          <h2 className="sec-title">Ready to cook with real spices?</h2>
          <p>Order today. We confirm within 24 hours and ship fresh to your door across Canada.</p>
          <Link href="/shop" className="btn-gold">Shop Now</Link>
        </div>
      </section>
    </>
  );
}
