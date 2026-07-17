"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const REVIEWS = [
  {
    name: "Allan Carvajal",
    date: "3 months ago",
    text: "Mohamad is a very good guy & explained everything to me. Fast turnaround, clean install, and fair pricing. Will be back for dashcam installation!",
    service: "Window Tint",
    rating: 5,
  },
  {
    name: "Aehtsham Shah",
    date: "7 months ago",
    text: "First time visiting HavenTint & Tires. The owner is very nice and professional. Got my RAV4 2025 nano ceramic tinted quickly and worked very well. Amazing!",
    service: "Nano Ceramic Tint",
    rating: 5,
  },
  {
    name: "Anthony YZ1",
    date: "8 months ago",
    text: "Shoutout to Muhammad and the team. Came in for tints all around my car — quoted at a VERY good price and assured me it would be done same day. The job looks amazing!",
    service: "Full Car Tint",
    rating: 5,
  },
  {
    name: "Ankur Devgan",
    date: "8 months ago",
    text: "Mohammad, Mohammad, and Zeeshan were all extremely friendly and welcoming. They absolutely killed it on my 2016 F82 M4 — took their time and delivered perfection.",
    service: "Car Detailing",
    rating: 5,
  },
  {
    name: "Akash Ratani",
    date: "7 months ago",
    text: "Got 4K dashcam and tint together at a very reasonable price. Staff explained everything and installed with clean hidden wiring. Well recommended.",
    service: "Dashcam + Tint",
    rating: 5,
  },
  {
    name: "Harold Cancio",
    date: "3 months ago",
    text: "Excellent experience for window tinting and dash cam installation. Quality of work was top-notch — everything done cleanly and professionally. My car looks great.",
    service: "Tint + Dashcam",
    rating: 5,
  },
  {
    name: "Sachin Namdev",
    date: "3 weeks ago",
    text: "Got my car tinted and a camera installed through Umar Ghumman. Very helpful throughout the whole process, made everything smooth and hassle-free. Really appreciate his excellent support.",
    service: "Tint + Camera",
    rating: 5,
  },
  {
    name: "Sunny Sangha",
    date: "4 months ago",
    text: "These guys are NEXT LEVEL at tinting. Straight professionals, unbeatable prices — honestly some of the best in the entire country. Zero bubbles, zero excuses. 10/10!",
    service: "Window Tint",
    rating: 5,
  },
  {
    name: "Farhan Selod",
    date: "8 months ago",
    text: "Top notch Canadian family owned business. Did an amazing job on my Tesla Model Y. Gave me advice on the tint % to ensure privacy, protection from UV/IR and visibility.",
    service: "Tesla Tint",
    rating: 5,
  },
  {
    name: "Saurabh Patel",
    date: "4 months ago",
    text: "Extremely satisfied with my 3-channel dash cam installation. The team was professional, knowledgeable, and explained everything clearly before starting. Clean install!",
    service: "3-Ch Dashcam",
    rating: 5,
  },
  {
    name: "Garnet Umali",
    date: "3 months ago",
    text: "Had a PPF wrap and smoked light with window tint. Excellent job and attention to detail. Very competitive pricing. Highly recommended to all.",
    service: "PPF + Tint",
    rating: 5,
  },
  {
    name: "Awais Malik",
    date: "3 weeks ago",
    text: "Came in near closing time for window tinting and a tire swap — they still welcomed me and completed the job professionally. The tint looks fantastic. Highly recommend!",
    service: "Tint + Tires",
    rating: 5,
  },
  {
    name: "Garv Kumar",
    date: "7 months ago",
    text: "Visiting Haven Tint and Tire Garage was actually like heaven. Got winter tires and dashcam. They are so polite and having very affordable price. Highly recommended!",
    service: "Tires + Dashcam",
    rating: 5,
  },
  {
    name: "Ahmed Adnan",
    date: "2 months ago",
    text: "Had my car tinted at Haven Tint and the experience was amazing. The team explained all the tint options clearly, and the quality of work is top-notch. 10 stars!",
    service: "Window Tint",
    rating: 5,
  },
];

const AVATAR_COLORS = ["#e8001d", "#c0001a", "#a80017", "#8c0013", "#b00019", "#d40020"];
const CARDS_VISIBLE = 3;
const CARD_WIDTH = 320;
const CARD_GAP = 20;
const AUTO_INTERVAL = 4000;

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function StarIcon({ size = 13, filled = true }: { size?: number; filled?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#FBBC04" : "rgba(255,255,255,0.12)"}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
    </svg>
  );
}

function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} size={size} filled={i <= rating} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const maxIndex = REVIEWS.length - CARDS_VISIBLE;
  const stepWidth = CARD_WIDTH + CARD_GAP;

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, maxIndex));
      setCurrent(clamped);
      setProgress(0);
    },
    [maxIndex]
  );

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setProgress(0);
    }, AUTO_INTERVAL);
  }, [maxIndex]);

  useEffect(() => {
    if (!paused) {
      startAuto();
      if (progRef.current) clearInterval(progRef.current);
      setProgress(0);
      progRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) return 0;
          return p + 100 / (AUTO_INTERVAL / 50);
        });
      }, 50);
    } else {
      if (autoRef.current) clearInterval(autoRef.current);
      if (progRef.current) clearInterval(progRef.current);
    }
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
      if (progRef.current) clearInterval(progRef.current);
    };
  }, [paused, startAuto]);

  const translateX = isDragging
    ? -(current * stepWidth) + dragDelta
    : -(current * stepWidth);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setDragDelta(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    setDragDelta(e.clientX - dragStartX.current);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragDelta < -60) goTo(current + 1);
    else if (dragDelta > 60) goTo(current - 1);
    setIsDragging(false);
    setDragDelta(0);
    dragStartX.current = null;
    startAuto();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -50) goTo(current + 1);
    else if (diff > 50) goTo(current - 1);
    touchStartX.current = null;
    startAuto();
  };

  return (
    <section
      style={{
        padding: "100px 0",
        background: "#080808",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <div
          className="reviews-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* Left: Title */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "10px",
                letterSpacing: "6px",
                color: "#e8001d",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#e8001d",
                  display: "block",
                }}
              />
              Client Reviews
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(38px, 4vw, 60px)",
                lineHeight: 0.95,
                color: "#f0f0f0",
                margin: 0,
              }}
            >
              TRUSTED BY{" "}
              <span style={{ color: "#e8001d" }}>REAL OWNERS</span>
              <br />
              WHO DEMAND PERFECTION
            </h2>
          </div>

          {/* Right: Google Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px 28px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              flexShrink: 0,
            }}
          >
            <GoogleIcon size={32} />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "36px",
                    color: "#f0f0f0",
                    lineHeight: 1,
                  }}
                >
                  5.0
                </span>
                <Stars rating={5} size={14} />
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(240,240,240,0.4)",
                  marginTop: "2px",
                }}
              >
                Google Reviews · Live
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: "#e8001d",
            marginBottom: "40px",
          }}
        />
      </div>

      {/* Slider Track */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "60px",
          paddingRight: "60px",
          overflow: "hidden",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          if (isDragging) handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${CARD_WIDTH}px`,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "28px",
                transition: "border-color 0.3s, background 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,0,29,0.3)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(232,0,29,0.04)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Card Top */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {/* Avatar */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: AVATAR_COLORS[i % AVATAR_COLORS.length],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#fff",
                      flexShrink: 0,
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#f0f0f0",
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "11px",
                        color: "rgba(240,240,240,0.35)",
                      }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
                <Stars rating={review.rating} size={12} />
              </div>

              {/* Review Text */}
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: "13px",
                  color: "rgba(240,240,240,0.6)",
                  lineHeight: 1.85,
                }}
              >
                {review.text}
              </p>

              {/* Service Tag */}
              <span
                style={{
                  display: "inline-block",
                  marginTop: "16px",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#e8001d",
                  textTransform: "uppercase",
                  border: "1px solid rgba(232,0,29,0.3)",
                  padding: "4px 10px",
                }}
              >
                {review.service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "32px auto 0",
          paddingLeft: "60px",
          paddingRight: "60px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Prev */}
        <button
          onClick={() => { goTo(current - 1); startAuto(); }}
          style={{
            width: "40px",
            height: "40px",
            background: "rgba(232,0,29,0.1)",
            border: "1px solid rgba(232,0,29,0.3)",
            color: "#e8001d",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,0,29,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,0,29,0.1)"; }}
          aria-label="Previous review"
        >
          &#8592;
        </button>

        {/* Next */}
        <button
          onClick={() => { goTo(current + 1); startAuto(); }}
          style={{
            width: "40px",
            height: "40px",
            background: "rgba(232,0,29,0.1)",
            border: "1px solid rgba(232,0,29,0.3)",
            color: "#e8001d",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,0,29,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,0,29,0.1)"; }}
          aria-label="Next review"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); startAuto(); }}
              style={{
                width: i === current ? "36px" : "24px",
                height: "2px",
                background: i === current ? "#e8001d" : "rgba(240,240,240,0.15)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#e8001d",
              width: `${progress}%`,
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "28px auto 0",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <a
          href="https://www.google.com/maps/place/Haven+Customs+Tint+%26+Tire+Inc./@43.7801512,-79.2389815,17z/data=!3m2!4b1!5s0x89d4d0f8fd0c2c83:0xb6b0a72af06de85f!4m6!3m5!1s0x89d4d1005fd49279:0x1ec775d0fabcaf47!8m2!3d43.7801512!4d-79.2364066!16s%2Fg%2F11xvhl_fp1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#e8001d",
            textDecoration: "none",
            padding: "12px 0",
          }}
        >
          Leave Us A Review
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8001d"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}