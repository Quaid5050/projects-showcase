"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
} from "@/components/icons/Icons";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Residential", href: "/residential" },
    { label: "Commercial", href: "/commercial" },
    { label: "Agricultural", href: "/agricultural" },
    { label: "Service & Repairs", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer style={{ background: "linear-gradient(180deg, #101010 0%, #050505 100%)" }}>
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <img
              src="/logo.png"
              alt={SITE.name || "NorthBuilt Door & Dock"}
              style={{ height: "60px", width: "auto", objectFit: "contain", display: "block" }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "0.55rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>Built Strong.</span>
              <span style={{ color: "#4A4A4A" }}>|</span>
              <span style={{ color: "#FFFFFF" }}>Built Local.</span>
              <span style={{ color: "#4A4A4A" }}>|</span>
              <span style={{ color: "#F26522" }}>Built to Last.</span>
            </span>
          </div>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.82rem",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            We&apos;re a local company proud to serve homeowners and businesses across Southwestern Ontario with
            quality products and craftsmanship you can rely on.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[FacebookIcon, InstagramIcon, GoogleIcon].map((Ic, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #2C2C2C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#F26522";
                  (e.currentTarget as HTMLElement).style.background = "#1A1A1A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C";
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                <Ic size={16} color="#A3A3A3" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#F26522",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    color: "#A3A3A3",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F26522")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#A3A3A3")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Serving */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#F26522",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Serving
          </h4>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.85rem",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "1rem",
            }}
          >
            Southwestern Ontario
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#F26522",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              border: "1px solid #2C2C2C",
              padding: "0.4rem 0.8rem",
              borderRadius: "4px",
            }}
          >
            <MapPinIcon size={14} color="#F26522" />
            Service Area Map
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#F26522",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              { Icon: PhoneIcon, text: SITE.phone, href: `tel:${SITE.phoneFull}` },
              { Icon: MailIcon, text: SITE.email, href: `mailto:${SITE.email}` },
              { Icon: GlobeIcon, text: SITE.website, href: `https://${SITE.website}` },
            ].map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#A3A3A3",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F26522")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A3A3A3")}
              >
                <Icon size={15} color="#F26522" />
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #1A1A1A",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.25rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <p
          style={{
            color: "#7C7C7C",
            fontSize: "0.78rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Northbuilt Door &amp; Dock. All rights reserved.
        </p>
        <p
          style={{
            color: "#7C7C7C",
            fontSize: "0.78rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Built Strong. Built Local.{" "}
          <span style={{ color: "#F26522", fontWeight: 700 }}>Built to Last.</span>
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                color: "#7C7C7C",
                textDecoration: "none",
                fontSize: "0.78rem",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F26522")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#7C7C7C")}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
