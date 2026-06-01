import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Gallery – FAIRSAFE First Aid & Safety Solutions" };

const images = [
  { src: "/images/gallery1.jpg", label: "Event Coverage", span: "row" },
  { src: "/images/IMG_0148.jpg", label: "Field Operations" },
  { src: "/images/gallery3.jpg", label: "Safety Personnel" },
  { src: "/images/gallery6.jpg", label: "Worksite Safety", span: "col" },
  { src: "/images/IMG_0118.jpg", label: "Youth Events" },
  { src: "/images/IMG_0145.jpg", label: "Community Events" },
  { src: "/images/gallery7.jpg", label: "Medical Support" },
  { src: "/images/gallery8.jpg", label: "Lower Mainland" },
  { src: "/images/IMG_0121.jpg", label: "Event First Aid" },
  { src: "/images/service-worksite.jpg", label: "Construction Safety" },
  { src: "/images/service-staffing.jpg", label: "Safety Staffing" },
  { src: "/images/IMG_7393.jpg", label: "Team Ready" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FFFFFF", paddingTop: 120, paddingBottom: 60, paddingLeft: "5%", paddingRight: "5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="section-label">In the Field</div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 20 }}>
            OUR TEAM<br /><span style={{ color: "#7C3AED" }}>AT WORK</span>
          </h1>
          <p style={{ color: "rgba(26,10,46,0.6)", maxWidth: 520, fontSize: "1rem", lineHeight: 1.75 }}>
            Real events, real coverage. From youth soccer to construction sites — FAIRSAFE professionals deployed across Metro Vancouver and the Lower Mainland.
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section style={{ background: "#F8F5FF", padding: "20px 5% 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            columns: "3 300px",
            columnGap: 16,
          }}>
            {images.map((img, i) => (
              <div key={i} style={{
                breakInside: "avoid",
                marginBottom: 16,
                borderRadius: 10,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
                className="gallery-item"
              >
                <div style={{ position: "relative", width: "100%", paddingBottom: i % 3 === 0 ? "130%" : "70%", overflow: "hidden" }}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s, filter 0.3s", filter: "brightness(0.85)" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 50%)",
                    opacity: 0, transition: "opacity 0.3s",
                    display: "flex", alignItems: "flex-end", padding: 20,
                  }} className="gallery-overlay">
                    <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.2rem", letterSpacing: "0.06em", color: "#1A0A2E" }}>{img.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            .gallery-item:hover img { transform: scale(1.05); filter: brightness(1) !important; }
            .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
          `}</style>
        </div>
      </section>

      {/* Event pictures note */}
      <section style={{ background: "#FFFFFF", padding: "60px 5%" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label">More Coming Soon</div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.4rem", letterSpacing: "0.02em", marginBottom: 16 }}>GROWING OUR PORTFOLIO</h2>
          <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, marginBottom: 36 }}>
            We're continuously adding photos from our events and deployments. Follow our coverage across Metro Vancouver as we expand our services across the Lower Mainland.
          </p>
          <Link href="/contact" className="btn-primary">Book Your Event</Link>
        </div>
      </section>
    </>
  );
}
