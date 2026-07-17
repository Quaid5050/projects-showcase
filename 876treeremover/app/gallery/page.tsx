"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import Link from "next/link";

const galleryItems = [
  { id: 2, category: "trimming", title: "Crown Reduction Job", location: "Montego Bay", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "clearing", title: "Lot Clearing Project", location: "Spanish Town", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "woodchips", title: "Colored Mulch Supply", location: "Portmore", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "removal", title: "Storm Emergency Clearance", location: "Ocho Rios", image: "https://images.unsplash.com/photo-1595867005771-4d3e811d0886?q=80" },
  { id: 6, category: "trimming", title: "Commercial Property Trim", location: "New Kingston", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "removal", title: "Residential Tree Takedown", location: "Mandeville", image: "https://images.unsplash.com/photo-1776427544877-40324049417d?q=80" },
  { id: 8, category: "clearing", title: "New Build Site Prep", location: "May Pen", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" },
  { id: 9, category: "trimming", title: "Palm Tree Pruning", location: "Negril", image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80" },
  { id: 10, category: "woodchips", title: "Mulch Delivery & Spread", location: "Portmore", image: "https://images.unsplash.com/photo-1637781474211-af4b492303dc?q=80" },
];

const categories = ["all", "removal", "trimming", "clearing", "woodchips"];

export default function GalleryPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 80, background: "linear-gradient(135deg, #050505 0%, #0D1A10 50%, #0a0a0a 100%)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="section-label animate-fadeInUp">Our Portfolio</div>
          <div className="gold-divider animate-fadeInUp" />
          <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F5F0", marginBottom: 20 }}>
            Real Work, <span className="gold-shimmer">Real Results</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(245,245,240,0.65)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 520 }}>
            A showcase of jobs completed across Jamaica. Every project here represents a satisfied client and a property made safer and more beautiful.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: "40px 24px 60px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Category filter */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 22px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "1px solid",
                  transition: "all 0.3s",
                  background: activeCategory === cat ? "#D4A017" : "transparent",
                  borderColor: activeCategory === cat ? "#D4A017" : "rgba(212,160,23,0.3)",
                  color: activeCategory === cat ? "#0a0a0a" : "rgba(245,245,240,0.7)",
                }}
              >
                {cat === "all" ? "All Work" : cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {filtered.map((item, i) => (
              <div key={item.id} className="reveal service-card" style={{ overflow: "hidden", cursor: "pointer" }}>
                {/* Image area */}
                <div style={{ height: 220, background: "#0D1505", position: "relative", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                  {/* Category badge */}
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(212,160,23,0.9)", padding: "3px 10px" }}>
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a0a", fontWeight: 700 }}>{item.category}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.05rem", color: "#F5F5F0", marginBottom: 6 }}>{item.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.57 7.93 1 6 1ZM6 5.75C5.31 5.75 4.75 5.19 4.75 4.5C4.75 3.81 5.31 3.25 6 3.25C6.69 3.25 7.25 3.81 7.25 4.5C7.25 5.19 6.69 5.75 6 5.75Z" fill="#D4A017"/></svg>
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: "#D4A017" }}>{item.location}, Jamaica</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photos note */}
          <div className="reveal" style={{ marginTop: 60, padding: 32, background: "rgba(212,160,23,0.05)", border: "1px solid rgba(212,160,23,0.15)", textAlign: "center" }}>
            <p style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              <strong style={{ color: "#D4A017" }}>More photos coming soon.</strong> We are building out our full portfolio with real job photos. Follow us on Instagram{" "}
              <a href="https://instagram.com/876tree.removal" target="_blank" rel="noopener noreferrer" style={{ color: "#2D9955", textDecoration: "none" }}>@876tree.removal</a>{" "}
              for the latest work updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#0D0D0D", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div className="section-label reveal">Let Us Do This for You</div>
          <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
          <h2 className="section-title reveal" style={{ marginBottom: 20 }}>Your Property Could Be Next</h2>
          <p className="reveal" style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 36 }}>Contact us today for a free quote. No job is too big or too small for the 876 team.</p>
          <Link href="/contact" className="btn-primary reveal" style={{ textDecoration: "none" }}>Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
