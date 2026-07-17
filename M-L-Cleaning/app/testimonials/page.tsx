"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const testimonials = [
  { name: "Maria Gonzalez", location: "Lake Wales, FL", rating: 5, service: "Monthly Cleaning", initials: "MG", text: "M&L Cleaning is absolutely amazing! My house has never looked this clean. They were on time, professional, and paid attention to every detail. I booked them for monthly cleaning and couldn't be happier! The team is respectful, efficient, and trustworthy. Highly recommend to anyone looking for quality cleaning services." },
  { name: "James Thompson", location: "Winter Haven, FL", rating: 5, service: "Move-Out Cleaning", initials: "JT", text: "Hired them for a move-out clean and they did a phenomenal job. The landlord was impressed and I got my full deposit back. They cleaned areas I didn't even think of — inside cabinets, behind appliances, the works. Highly recommend M&L to anyone in the area!" },
  { name: "Priya Sharma", location: "Haines City, FL", rating: 5, service: "Airbnb Cleaning", initials: "PS", text: "I use them for my Airbnb and the turnaround is always fast and the quality is hotel-level. My guests consistently mention how clean the space is. 5 stars every time! They always restock and reset everything perfectly. Invaluable to my hosting business." },
  { name: "Robert Davis", location: "Davenport, FL", rating: 5, service: "Commercial Cleaning", initials: "RD", text: "Best cleaning company in Polk County, hands down. They are thorough, reliable, and use great products. My office has never been cleaner. Employees have noticed and morale has improved. Will not use anyone else. Worth every penny." },
  { name: "Linda Morales", location: "Bartow, FL", rating: 5, service: "Deep Cleaning", initials: "LM", text: "Called them for a deep clean before a family gathering. They arrived on time, worked hard, and left the house spotless. Very fair pricing too. Definitely booking again! My mother-in-law couldn't believe how clean everything was — that's saying something!" },
  { name: "Carlos Rivera", location: "Lake Wales, FL", rating: 5, service: "Regular Cleaning", initials: "CR", text: "Trusted, reliable, and always deliver. I've had many cleaning companies before but M&L is on another level. They truly care about the quality of their work. Same team every time, which I love — they know my home and exactly what I like." },
  { name: "Sandra Williams", location: "Winter Haven, FL", rating: 5, service: "Move-In Cleaning", initials: "SW", text: "We just moved into a new house and wanted it deep cleaned first. M&L did an incredible job — it smelled fresh and looked brand new when they were done. Will definitely use them again for regular cleanings." },
  { name: "Miguel Santos", location: "Eagle Lake, FL", rating: 5, service: "Bi-Weekly Cleaning", initials: "MS", text: "I have young kids and pets so the house gets messy fast. M&L comes every two weeks and it makes such a difference. They are so thorough and careful around the kids' things. Pricing is very reasonable for the quality." },
  { name: "Angela Brooks", location: "Polk City, FL", rating: 5, service: "Airbnb Cleaning", initials: "AB", text: "As a property manager with multiple units, finding M&L was a game changer. They handle all my turnaround cleans professionally and quickly. My properties are always guest-ready and my review scores have gone up since working with them." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Stats bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: "48px", marginBottom: "40px", flexWrap: "wrap" }}>
          {[
            { num: "5.0", label: "Google Rating" },
            { num: "500+", label: "Happy Clients" },
            { num: "100%", label: "Would Recommend" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: 800, color: "#FFD700" }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <span style={{
          display: "inline-block",
          background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
          color: "#FFD700", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "50px", marginBottom: "20px",
        }}>Client Reviews</span>
        <h1 style={{
          fontFamily: "var(--font-display)", color: "#fff",
          fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: "16px",
        }}>
          Trusted by Hundreds of<br /><span className="gold-text">Polk County Families</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
          Real reviews from real clients who trust M&L with their homes, offices, and businesses.
        </p>
      </div>

      {/* Reviews Grid */}
      <div ref={sectionRef} style={{ padding: "80px 24px", background: "#f9f4ff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}>
            {testimonials.map((r, i) => (
              <div
                key={r.name}
                className="reveal card-hover"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "32px",
                  border: "1px solid rgba(75,0,130,0.08)",
                  boxShadow: "0 4px 20px rgba(75,0,130,0.06)",
                  opacity: 0, transform: "translateY(30px)",
                  transition: `all 0.7s ease ${i * 0.08}s`,
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Service tag */}
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  background: "#f9f4ff", color: "#4B0082",
                  fontSize: "11px", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "50px",
                  border: "1px solid rgba(75,0,130,0.15)",
                }}>
                  {r.service}
                </div>

                <StarRating count={r.rating} />

                <p style={{
                  color: "#374151", fontSize: "14px", lineHeight: 1.8,
                  margin: "16px 0 24px", position: "relative",
                }}>
                  &ldquo;{r.text}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "50px", height: "50px",
                    background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#FFD700", fontWeight: 700, fontSize: "16px",
                    flexShrink: 0,
                  }}>
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "15px" }}>{r.name}</div>
                    <div style={{ color: "#6b7280", fontSize: "12px" }}>{r.location}</div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <svg viewBox="0 0 48 48" width="28" height="28">
                      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leave a Review CTA */}
      <div style={{ padding: "60px 24px", background: "#fff", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", color: "#2D0050", fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>
          Happy With Our Service?
        </h3>
        <p style={{ color: "#6b7280", marginBottom: "28px", fontSize: "15px" }}>
          Leave us a Google review — it means the world to our team.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg viewBox="0 0 48 48" width="20" height="20">
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Leave a Google Review
          </a>
          <Link href="/contact" className="btn-secondary">
            Book Your Next Clean
          </Link>
        </div>
      </div>
    </div>
  );
}
