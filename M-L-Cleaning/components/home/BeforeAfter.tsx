"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const pairs = [
  {
    label: "Kitchen Deep Clean",
    before: "/kitbefore.png",
    after: "/kitafter.png",
  },
  {
    label: "Bathroom Restoration",
    before: "/washbefore.png",
    after: "/washafter.png",
  },
  {
    label: "Living Room Refresh",
    before: "/lastbefore.png",
    after: "/lastafter.png",
  },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) updatePos(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => updatePos(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: "relative", borderRadius: "16px", overflow: "hidden",
          cursor: "ew-resize", userSelect: "none",
          aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(75,0,130,0.2)",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      >
        {/* After (full) */}
        <img src={after} alt="After cleaning" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />

        {/* Before (clipped) */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt="Before cleaning" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(75,0,130,0.1)",
          }} />
        </div>

        {/* Labels */}
        <div style={{
          position: "absolute", top: "16px", left: "16px",
          background: "rgba(75,0,130,0.85)", backdropFilter: "blur(8px)",
          color: "#fff", fontSize: "12px", fontWeight: 700,
          padding: "5px 14px", borderRadius: "50px", letterSpacing: "0.05em",
          opacity: pos > 20 ? 1 : 0, transition: "opacity 0.2s",
        }}>BEFORE</div>
        <div style={{
          position: "absolute", top: "16px", right: "16px",
          background: "linear-gradient(135deg, #FFD700, #E6C200)",
          color: "#2D0050", fontSize: "12px", fontWeight: 700,
          padding: "5px 14px", borderRadius: "50px", letterSpacing: "0.05em",
          opacity: pos < 80 ? 1 : 0, transition: "opacity 0.2s",
        }}>AFTER</div>

        {/* Divider */}
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: `${pos}%`, transform: "translateX(-50%)",
          width: "3px", background: "#FFD700",
          boxShadow: "0 0 20px rgba(255,215,0,0.6)",
        }}>
          {/* Handle */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "44px", height: "44px",
            background: "#FFD700", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            border: "3px solid #fff",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D0050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>
            </svg>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "16px", color: "#4B0082", fontWeight: 600, fontSize: "15px" }}>
        {label}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
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
    <section ref={sectionRef} style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{
          textAlign: "center", marginBottom: "64px",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease"
        }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #FFD700, #E6C200)",
            color: "#2D0050",
            fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "6px 20px", borderRadius: "50px", marginBottom: "16px",
          }}>
            Real Results
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, color: "#2D0050",
            marginBottom: "16px",
          }}>
            See the M&L Difference
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Drag the slider to reveal the transformation. Every clean is a commitment to excellence.
          </p>
        </div>

        {/* Sliders grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
        }}>
          {pairs.map((p, i) => (
            <div
              key={p.label}
              className="reveal"
              style={{
                opacity: 0, transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.15}s`
              }}
            >
              <Slider before={p.before} after={p.after} label={p.label} />
            </div>
          ))}
        </div>

        {/* Instruction hint */}
        <div className="reveal" style={{
          textAlign: "center", marginTop: "32px",
          opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease 0.5s"
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#f9f4ff", border: "1px solid rgba(75,0,130,0.15)",
            borderRadius: "50px", padding: "10px 22px",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B0082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>
            </svg>
            <span style={{ color: "#4B0082", fontSize: "13px", fontWeight: 500 }}>
              Drag the slider to compare before & after
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
