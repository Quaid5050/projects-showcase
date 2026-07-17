"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Daritza Rojas",
    location: "Lake Wales, FL",
    rating: 5,
    text: "M&L Cleaning Home Services LLC did an amazing job on my move-out cleaning in Lake Wales. The house looked spotless from top to bottom, and I was honestly impressed by the attention to detail. They were on time, professional, and made the whole process stress-free.",
    initials: "DR",
  },
  {
    name: "Idalia Gonzalez",
    location: "Polk County, FL",
    rating: 5,
    text: "Excellent service. I'm so grateful for the care and detail she puts into her work. Mara is punctual, thorough, and extremely detail-oriented. She's consistent, trustworthy, and truly takes pride in making a home feel peaceful and clean.",
    initials: "IG",
  },
  {
    name: "Gaby & Rosa",
    location: "Polk County, FL",
    rating: 5,
    text: "We had M&L Cleaning Home Services LLC do a deep clean before family came to visit, and they made the house look incredible. It felt like walking into a completely different home. The team was easy to work with and answered all of my questions.",
    initials: "GR",
  },
  {
    name: "Hector Oquendo",
    location: "Polk County, FL",
    rating: 5,
    text: "I couldn't be happier with the move-in/move-out cleaning from M&L Cleaning Home Services LLC. They did an amazing job and made the whole house look and feel fresh again. Every room was spotless, and you could tell they really care about the work.",
    initials: "HO",
  },
  {
    name: "David Romero",
    location: "Polk County, FL",
    rating: 5,
    text: "I recently hired M&L Cleaning Home Services LLC for a deep cleaning service, and the results exceeded my expectations. Their team was professional, punctual, and incredibly detail-oriented from start to finish.",
    initials: "DR",
  },
  {
    name: "Xavier Pizarro",
    location: "Polk County, FL",
    rating: 5,
    text: "Excellent service! My house was spotless and exceeded my expectations. They were punctual, professional, and very detail-oriented. I recommend them 100% and will definitely hire them again. Thank you for the great work.",
    initials: "XP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "100px 24px", background: "#f9f4ff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{
          textAlign: "center", marginBottom: "64px",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease"
        }}>
          {/* Google Reviews Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#fff", border: "1px solid #e5e7eb",
            borderRadius: "12px", padding: "12px 24px", marginBottom: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <svg viewBox="0 0 48 48" width="28" height="28">
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e" }}>Google Reviews</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#1a1a2e" }}>5.0</span>
                <StarRating count={5} />
                <span style={{ color: "#6b7280", fontSize: "13px" }}>(6 reviews)</span>
              </div>
            </div>
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, color: "#2D0050",
            marginBottom: "16px",
          }}>
            What Our Clients Say
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Hundreds of satisfied customers across Polk County trust M&L for reliable, premium cleaning.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal card-hover"
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid rgba(75,0,130,0.08)",
                boxShadow: "0 4px 20px rgba(75,0,130,0.06)",
                opacity: 0, transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: "20px", right: "24px",
                fontFamily: "Georgia", fontSize: "60px", color: "rgba(75,0,130,0.08)",
                lineHeight: 1, fontWeight: 900,
              }}>&ldquo;</div>

              <StarRating count={r.rating} />

              <p style={{
                color: "#374151", fontSize: "14px", lineHeight: 1.75,
                margin: "16px 0 20px", fontStyle: "italic",
              }}>
                &ldquo;{r.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#FFD700", fontWeight: 700, fontSize: "15px",
                  flexShrink: 0,
                }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "14px" }}>{r.name}</div>
                  <div style={{ color: "#6b7280", fontSize: "12px" }}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
