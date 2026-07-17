import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact – FAIRSAFE First aid & Safety Solutionss",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 84,
        }}
      >
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact FAIRSAFE"
          fill
          priority
          style={{
            objectFit: "cover",
            filter: "brightness(0.28)",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.96) 38%, rgba(255,255,255,0.15) 75%, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "90px 5%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <div className="section-label">Get In Touch</div>

          <h1
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(3rem,6vw,5.2rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              marginBottom: 18,
              color: "#1A0A2E",
            }}
          >
            REQUEST A
            <br />
            <span style={{ color: "#7C3AED" }}>
              FREE QUOTE
            </span>
          </h1>

          <p
            style={{
              color: "rgba(26,10,46,0.72)",
              maxWidth: 560,
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: 34,
            }}
          >
            Tell us about your event, worksite, or staffing
            requirements — our team will respond quickly with
            transparent pricing and certified safety coverage.
          </p>

          {/* Hero Stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            {[
              "24/7 Availability",
              "Certified Staff",
              "Rapid Deployment",
              "Free AED RENTEL SITH CONTRACT",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(124,58,237,0.08)",
                  border:
                    "1px solid rgba(124,58,237,0.18)",
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: "0.82rem",
                  color: "#1A0A2E",
                  fontWeight: 600,
                }}
              >
                <ShieldCheck
                  size={15}
                  color="#7C3AED"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "90px 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 72,
            alignItems: "start",
          }}
        >
          {/* LEFT INFO */}
          <div>
            <div className="section-label">
              Contact Information
            </div>

            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                letterSpacing: "0.03em",
                marginBottom: 34,
                color: "#1A0A2E",
              }}
            >
              LET’S TALK ABOUT
              <br />
              YOUR SAFETY NEEDS
            </h2>

            {/* Contact Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {[
                {
                  icon: (
                    <Phone
                      size={20}
                      color="#7C3AED"
                    />
                  ),
                  label: "Phone",
                  value: "(604) 378-8311",
                  href: "tel:6043788311",
                },

                {
                  icon: (
                    <Mail
                      size={20}
                      color="#7C3AED"
                    />
                  ),
                  label: "Email",
                  value: "info@fairsafe.ca",
                  href: "mailto:info@fairsafe.ca",
                },

                {
                  icon: (
                    <MapPin
                      size={20}
                      color="#7C3AED"
                    />
                  ),
                  label: "Office Location",
                  value: (
                    <>
                      10114 King George Blvd, Unit 206A
                      <br />
                      Surrey, BC, Canada
                      <br />
                      <i>Located on the second floor. Enter through the building underpass, proceed upstairs, and follow the hallway to Unit 206A. Please note the doors may be closed at certain times during the day—call for assistance with access if needed.</i>
                    </>
                  ),
                  href: null,
                },

                {
                  icon: (
                    <Clock
                      size={20}
                      color="#7C3AED"
                    />
                  ),
                  label: "Availability",
                  value:
                    "24/7 – all night, weekends, weekday, holidays, and long weekends.",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    background: "#FFFFFF",
                    border:
                      "1px solid rgba(26,10,46,0.08)",
                    borderRadius: 14,
                    padding: "22px 22px",
                    boxShadow:
                      "0 8px 30px rgba(26,10,46,0.04)",
                  }}
                >
                  <div
                    style={{
                      background:
                        "rgba(124,58,237,0.08)",
                      border:
                        "1px solid rgba(124,58,237,0.15)",
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#7C3AED",
                        marginBottom: 7,
                        fontWeight: 700,
                      }}
                    >
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#1A0A2E",
                          fontSize: "1rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "#1A0A2E",
                          fontSize: "0.96rem",
                          fontWeight: 500,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Note */}
            <div
              style={{
                marginTop: 34,
                background:
                  "rgba(124,58,237,0.05)",
                border:
                  "1px solid rgba(124,58,237,0.14)",
                borderLeft: "4px solid #7C3AED",
                borderRadius: 12,
                padding: "22px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(26,10,46,0.68)",
                  lineHeight: 1.8,
                }}
              >
                <strong
                  style={{ color: "#1A0A2E" }}
                >
                  Pricing Note:
                </strong>{" "}
                All pricing is quote-based depending on
                event size, site conditions, duration,
                and staffing requirements. FAIRSAFE is
                committed to fair, transparent pricing
                with no hidden fees.
              </p>
            </div>

            {/* Bottom Image */}
            <div
              style={{
                marginTop: 34,
                position: "relative",
                height: 240,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/gallery3.jpg"
                alt="FAIRSAFE team"
                fill
                style={{
                  objectFit: "cover",
                  filter: "brightness(0.78)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.28), transparent)",
                }}
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "#FFFFFF",
              border:
                "1px solid rgba(26,10,46,0.08)",
              borderRadius: 18,
              padding: "36px 32px",
              boxShadow:
                "0 12px 40px rgba(26,10,46,0.06)",
            }}
          >
            <div className="section-label">
              Quick Response
            </div>

            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                letterSpacing: "0.03em",
                marginBottom: 14,
                color: "#1A0A2E",
              }}
            >
              SEND US A MESSAGE
            </h2>

            <p
              style={{
                color: "rgba(26,10,46,0.62)",
                lineHeight: 1.8,
                marginBottom: 32,
                fontSize: "0.95rem",
              }}
            >
              Fill out the form below and our team will
              get back to you as soon as possible.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section
        style={{
          background: "#F8F5FF",
          padding: "90px 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="section-label">
            Where We Operate
          </div>

          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(2.2rem,4vw,3.5rem)",
              letterSpacing: "0.02em",
              marginBottom: 18,
              color: "#1A0A2E",
            }}
          >
            SERVICE AREA
          </h2>

          <p
            style={{
              color: "rgba(26,10,46,0.6)",
              maxWidth: 680,
              margin: "0 auto 52px",
              lineHeight: 1.85,
              fontSize: "1rem",
            }}
          >
            FAIRSAFE deploys certified first aid
            attendants across Metro Vancouver and the
            Lower Mainland — supporting events,
            industrial sites, film productions,
            construction projects, and community
            organizations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(170px,1fr))",
              gap: 18,
              maxWidth: 980,
              margin: "0 auto",
            }}
          >
            {[
              "Vancouver",
              "Burnaby",
              "Richmond",
              "Surrey",
              "Coquitlam",
              "North Vancouver",
              "West Vancouver",
              "Langley",
              "Abbotsford",
              "Maple Ridge",
              "Delta",
              "New Westminster",
            ].map((city) => (
              <div
                key={city}
                style={{
                  background: "#FFFFFF",
                  border:
                    "1px solid rgba(26,10,46,0.08)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: "0.88rem",
                  color: "#1A0A2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontWeight: 500,
                }}
              >
                <MapPin
                  size={14}
                  color="#7C3AED"
                />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}