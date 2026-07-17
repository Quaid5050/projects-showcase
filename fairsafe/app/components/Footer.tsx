"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // SAME PAGE CLICK => SCROLL TOP / SECTION
  const handleSamePageLink = (href: string) => {
    const [path, hash] = href.split("#");

    // same page
    if (pathname === path || (!path && pathname)) {
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 50);
    }
  };

  return (
    <footer
      style={{
        background: "#1A0A2E",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "64px 5% 32px",
      }}
    >
      <style>{`
        .f-link {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s;
          line-height: 1;
        }

        .f-link:hover {
          color: #7C3AED;
        }

        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1.4fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
         {/* Brand */}
{/* Brand */}
<div>
  <Link
    href="/"
    onClick={() => handleSamePageLink("/")}
    style={{
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      marginBottom: 22,
      width: "fit-content",
    }}
  >
    <Image
      src="/newlogo.png"
      alt="FAIRSAFE"
      width={130}
      height={50}
      style={{
        width: "130px",
        height: "auto",
        objectFit: "contain",
      }}
    />
  </Link>

  <p
    style={{
      fontSize: "0.85rem",
      color: "rgba(255,255,255,0.55)",
      lineHeight: 1.75,
      maxWidth: 280,
      marginBottom: 24,
    }}
  >
    Professional First aid & Safety Solutions across Metro
    Vancouver and the Lower Mainland. Fair prices,
    certified staff, rapid deployment.
  </p>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <a
      href="tel:6043788311"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        color: "rgba(255,255,255,0.65)",
        textDecoration: "none",
        fontSize: "0.875rem",
      }}
    >
      <Phone size={14} color="#7C3AED" />
      (604) 378-8311
    </a>

    <a
      href="mailto:info@fairsafe.ca"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        color: "rgba(255,255,255,0.65)",
        textDecoration: "none",
        fontSize: "0.875rem",
        wordBreak: "break-word",
      }}
    >
      <Mail size={14} color="#7C3AED" />
      info@fairsafe.ca
    </a>

    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 9,
        color: "rgba(255,255,255,0.45)",
        fontSize: "0.85rem",
        lineHeight: 1.6,
      }}
    >
      <MapPin
        size={14}
        color="#7C3AED"
        style={{ marginTop: 3, flexShrink: 0 }}
      />

      <div>
        10114 King George Blvd, Unit 206A <br />
       Surrey, BC, Canada
      </div>
    </div>
  </div>
</div>

          {/* Pages */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 22,
                fontWeight: 700,
              }}
            >
              Pages
            </h4>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 13,
              }}
            >
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="f-link"
                    onClick={() =>
                      handleSamePageLink(h as string)
                    }
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 22,
                fontWeight: 700,
              }}
            >
              Services
            </h4>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 13,
              }}
            >
              {[
                ["Event First Aid", "/services#event-first-aid"],
                ["Worksite & Construction", "/services#worksite-construction"],
                ["Safety Staffing", "/services#safety-staffing"],
                ["Industrial Sites", "/services#industrial-sites"],
                ["Special Offers", "/services#offers"],
                ["All Services", "/services"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="f-link"
                    onClick={() =>
                      handleSamePageLink(h as string)
                    }
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 22,
                fontWeight: 700,
              }}
            >
              About
            </h4>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 13,
              }}
            >
              {[
                ["Our Story", "/about#story"],
                ["Our Services", "/about#services"],
                ["Musqueam Partnership", "/about#partnership"],
                ["Our Values", "/about#values"],
                ["Meet the Team", "/about#team"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="f-link"
                    onClick={() =>
                      handleSamePageLink(h as string)
                    }
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            © 2025{" "}
            <span style={{ color: "#7C3AED" }}>
              FAIRSAFE
            </span>{" "}
            First Aid and Safety Solutions. All rights reserved.
          </p>

          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Metro Vancouver, British Columbia, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}