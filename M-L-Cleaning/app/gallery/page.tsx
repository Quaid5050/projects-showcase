"use client";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=600&q=80", label: "Kitchen Deep Clean", cat: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1758272421516-9593de0fb5bf?w=600&q=80", label: "Living Room Refresh", cat: "Living Room" },
  { src: "https://images.unsplash.com/photo-1758273705627-937374bfa978?w=600&q=80", label: "Apartment Clean", cat: "Apartment" },
  { src: "https://images.unsplash.com/photo-1437326300822-01d8f13c024f?w=600&q=80", label: "Office Cleaning", cat: "Commercial" },
  { src: "https://images.unsplash.com/photo-1589803010842-41cdf85bf0f9?w=600&q=80", label: "Move-Out Ready", cat: "Move-Out" },
  { src: "https://plus.unsplash.com/premium_photo-1679775635916-ef9f76e390dd?w=600&q=80", label: "Bedroom Detail", cat: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?w=600&q=80", label: "Spotless Bathroom", cat: "Bathroom" },
  { src: "https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?w=600&q=80", label: "Commercial Space", cat: "Commercial" },
];

const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Apartment", "Bedroom", "Commercial", "Airbnb", "Full Home", "Move-Out"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.cat === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #2D0050, #4B0082, #6A00B8)",
        padding: "140px 24px 80px",
        textAlign: "center",
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
          color: "#FFD700", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "50px", marginBottom: "20px",
        }}>Portfolio</span>
        <h1 style={{
          fontFamily: "var(--font-display)", color: "#fff",
          fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: "16px",
        }}>
          Our Work Speaks<br /><span className="gold-text">For Itself</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Browse our gallery of real cleaning projects across homes, apartments, offices, and vacation rentals.
        </p>
      </div>

      {/* Gallery */}
      <div ref={sectionRef} style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? "linear-gradient(135deg, #4B0082, #6A00B8)" : "#f9f4ff",
                  color: filter === cat ? "#FFD700" : "#4B0082",
                  border: filter === cat ? "none" : "1px solid rgba(75,0,130,0.2)",
                  fontWeight: 600, fontSize: "13px",
                  padding: "8px 20px", borderRadius: "50px",
                  cursor: "pointer", transition: "all 0.2s",
                  boxShadow: filter === cat ? "0 4px 15px rgba(75,0,130,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}>
            {filtered.map((item, i) => (
              <div
                key={item.src}
                className="reveal card-hover"
                style={{
                  borderRadius: "16px", overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(75,0,130,0.1)",
                  cursor: "pointer",
                  opacity: 0, transform: "translateY(30px)",
                  transition: `all 0.6s ease ${i * 0.05}s`,
                  position: "relative",
                }}
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                {/* Overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(45,0,80,0.8) 0%, transparent 60%)",
                  display: "flex", alignItems: "flex-end",
                  padding: "16px",
                  opacity: 0, transition: "opacity 0.3s",
                }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <div>
                    <div style={{ color: "#FFD700", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.cat}</div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{item.label}</div>
                  </div>
                </div>
                {/* Category tag */}
                <div style={{
                  position: "absolute", top: "12px", left: "12px",
                  background: "rgba(45,0,80,0.8)", backdropFilter: "blur(8px)",
                  color: "#FFD700", fontSize: "11px", fontWeight: 600,
                  padding: "4px 12px", borderRadius: "50px",
                }}>
                  {item.cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ position: "relative", maxWidth: "900px", width: "100%" }}>
            <img
              src={lightbox}
              alt="Gallery"
              style={{ width: "100%", borderRadius: "16px", maxHeight: "80vh", objectFit: "contain" }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "-16px", right: "-16px",
                width: "44px", height: "44px",
                background: "#FFD700", borderRadius: "50%", border: "none",
                cursor: "pointer", fontSize: "20px", fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D0050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
