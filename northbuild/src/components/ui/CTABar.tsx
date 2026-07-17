"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { PhoneIcon } from "@/components/icons/Icons";

interface CTABarProps {
  title?: string;
  subtitle?: string;
}

export default function CTABar({
  title = "Ready to Upgrade Your Door?",
  subtitle = "Contact us today for a free, no-obligation quote.",
}: CTABarProps) {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FF7A1A 0%, #F26522 100%)",
        padding: "1.75rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
          <a
            href={`tel:${SITE.phoneFull}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.05em",
            }}
          >
            <PhoneIcon size={28} color="#fff" />
            {SITE.phone}
          </a>
          <div>
            <div
              style={{
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
        <Link
          href="/contact"
          style={{
            backgroundColor: "#0B0B0B",
            color: "#fff",
            padding: "0.8rem 1.75rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "background-color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1A1A1A")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0B0B0B")}
        >
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
}
