"use client";
import Link from "next/link";

const col1 = [
  { l: "Tire Installation", h: "/services" },
  { l: "Wheel Alignment", h: "/services" },
  { l: "Tire Balancing", h: "/services" },
  { l: "Seasonal Change", h: "/services" },
  { l: "Performance Wheels", h: "/services" },
  { l: "Ceramic Coating", h: "/services" },
  { l: "Window Tint", h: "/services" },
  { l: "Tire Repair", h: "/services" },
];

const col3 = [
  { l: "About Us", h: "/about" },
  { l: "Our Gallery", h: "/gallery" },
  { l: "Contact", h: "/contact" },
  { l: "Book Appointment", h: "/contact" },
  { l: "Privacy Policy", h: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "70px 60px 50px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "22px",
              fontWeight: 900,
              letterSpacing: "4px",
              color: "#f0f0f0",
              marginBottom: "16px",
            }}
          >
            Haven<span style={{ color: "#e8001d" }}>.</span>
          </div>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(240,240,240,0.72)",
              lineHeight: 1.85,
              maxWidth: "270px",
              marginBottom: "26px",
            }}
          >
            Performance tire and wheel specialists. Precision fitment,
            premium brands, and unmatched service for drivers who demand
            the best.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            {["IG", "FB", "YT", "X"].map((s) => (
              <a
                key={s}
                href="#"
                data-hover
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgba(240,240,240,0.72)",
                  textDecoration: "none",
                  transition: "all .3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#e8001d";
                  e.currentTarget.style.color = "#e8001d";
                  e.currentTarget.style.background =
                    "rgba(232,0,29,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color =
                    "rgba(240,240,240,0.72)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Services", items: col1 },
          { title: "Company", items: col3 },
        ].map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: "13px",
                letterSpacing: "4px",
                color: "#f0f0f0",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              {col.title}
            </div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {col.items.map((item) => (
                <li key={item.l}>
                  <Link
                    href={item.h}
                    data-hover
                    style={{
                      fontSize: "15px",
                      color: "rgba(240,240,240,0.72)",
                      textDecoration: "none",
                      letterSpacing: "0.5px",
                      transition: "color .3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e8001d")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(240,240,240,0.72)")
                    }
                  >
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="footer-bottom"
      >
        <span
          style={{
            fontSize: "14px",
            color: "rgba(240,240,240,0.55)",
            letterSpacing: "2px",
          }}
        >
          2025 Haven Tire and Wheel. All rights reserved.
        </span>

        <span
          style={{
            fontSize: "14px",
            color: "rgba(240,240,240,0.55)",
            letterSpacing: "1px",
          }}
        >
          Performance. Precision. Passion.
        </span>
      </div>

      <style>{`
        @media(max-width:1000px){
          .footer-grid{
            grid-template-columns:1fr 1fr!important;
            gap:40px!important;
            padding:50px 40px 40px!important
          }
        }

        @media(max-width:600px){
          .footer-grid{
            grid-template-columns:1fr!important;
            padding:40px 24px!important
          }

          .footer-bottom{
            padding:16px 24px!important;
            flex-direction:column!important;
            text-align:center!important
          }
        }
      `}</style>
    </footer>
  );
}