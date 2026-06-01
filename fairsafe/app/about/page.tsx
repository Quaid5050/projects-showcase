import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, MapPin, DollarSign, Award, HeartPulse, HardHat, Calendar, ArrowRight, CheckCircle, Clock, Phone } from "lucide-react";

export const metadata = { title: "About – FAIRSAFE First Aid & Safety Solutions" };

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
<section
  style={{
    position: "relative",
    minHeight: 500,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: 84,
  }}
>
  {/* Background Image */}
  <Image
    src="/img/bgabout1.jpeg"
    alt="FAIRSAFE Team"
    fill
    style={{
      objectFit: "cover",
      filter: "brightness(0.45)", // image dark
    }}
  />

  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.35)",
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1280,
      margin: "0 auto",
      padding: "80px 5%",
      width: "100%",
      color: "#fff",
    }}
  >
    <div className="section-label" style={{ color: "#fff" }}>
      Our Story
    </div>

    <h1
      style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: "clamp(3rem,7vw,6rem)",
        lineHeight: 0.95,
        letterSpacing: "0.02em",
        marginBottom: 20,
        color: "#fff",
      }}
    >
      ABOUT
      <br />
      <span style={{ color: "#A855F7" }}>FAIRSAFE</span>
    </h1>

    <p
      style={{
        color: "rgba(255,255,255,0.85)",
        maxWidth: 520,
        fontSize: "1.05rem",
        lineHeight: 1.75,
        marginBottom: 36,
      }}
    >
      Built on one principle — professional safety should be accessible to
      everyone, at a fair price.
    </p>
  </div>
</section>

     <section style={{ background: "#FFFFFF", padding: "100px 5%" }}>
  <div
    style={{
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 72,
      alignItems: "center",
    }}
  >
    {/* Image stack */}
    <div style={{ position: "relative", height: 520 }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "75%",
          height: "75%",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/gallery1.jpg"
          alt="FAIRSAFE team field"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "55%",
          height: "55%",
          borderRadius: 12,
          overflow: "hidden",
          border: "4px solid #FFFFFF",
        }}
      >
        <Image
          src="/images/gallery6.jpg"
          alt="FAIRSAFE coverage"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Floating badge */}
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "-16px",
          zIndex: 10,
          background: "#7C3AED",
          borderRadius: 10,
          padding: "16px 20px",
          boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "2rem",
            lineHeight: 1,
          }}
        >
          24/7
        </div>

        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.85,
            marginTop: 2,
          }}
        >
          Emergency
          <br />
          Coverage
        </div>
      </div>
    </div>

    {/* Content */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <div className="section-label">About FAIRSAFE</div>

      <h2
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(2.2rem,4vw,3.4rem)",
          letterSpacing: "0.02em",
          lineHeight: 1.1,
          marginBottom: 24,
          textAlign: "left",
        }}
      >
        PROFESSIONAL FIRST AID
        <br />
        WITH A <span style={{ color: "#7C3AED" }}>MODERN APPROACH</span>
      </h2>

      <p
        style={{
          color: "rgba(26,10,46,0.7)",
          lineHeight: 1.85,
          marginBottom: 28,
          fontSize: "0.97rem",
          textAlign: "left",
          maxWidth: 580,
        }}
      >
        FAIRSAFE provides dependable on-site first aid and medical
        coverage for events, sports, construction sites, and
        community organizations across Metro Vancouver and the
        Lower Mainland — delivering professional service with fast
        response times and reliable support.
      </p>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginBottom: 36,
          padding: 0,
          width: "100%",
        }}
      >
        {[
          "Professional on-site medical standby coverage",
          "Serving events, sports, worksites & communities",
          "Fast response and dependable support",
          "Available weekdays, weekends & holidays",
        ].map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              color: "rgba(26,10,46,0.7)",
              fontSize: "0.93rem",
              lineHeight: 1.6,
            }}
          >
            <ShieldCheck
              size={16}
              color="#7C3AED"
              style={{ marginTop: 2, flexShrink: 0 }}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>

        <a
          href="#services"
          style={{
            border: "2px solid rgba(26,10,46,0.2)",
            color: "#1A0A2E",
            padding: "12px 28px",
            borderRadius: 5,
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "0.95rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Explore Services
        </a>
      </div>
    </div>
  </div>
</section>

    

      {/* ── MUSQUEAM PARTNERSHIP ── */}

<section
  id="partnership"
  style={{
    background: "#FFFFFF",
    padding: "100px 5%",
  }}
>
  <div style={{ maxWidth: 1280, margin: "0 auto" }}>

    {/* Trust India Logo */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 60,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 240,
          height: 120,
        }}
      >
        <Image
          src="/img/IMG_0398.jpg"
          alt="Trust India"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: 64,
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div>
        <div className="section-label">
          Community Support
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            letterSpacing: "0.02em",
            marginBottom: 20,
            lineHeight: 1.05,
          }}
        >
          TRUSTED FIRST AID PROVIDER FOR THE
          <br />
          <span style={{ color: "#5B21B6" }}>
            MUSQUEAM INDIAN BAND
          </span>
        </h2>

        <p
          style={{
            color: "rgba(26,10,46,0.7)",
            lineHeight: 1.85,
            marginBottom: 20,
          }}
        >
          FAIRSAFE proudly provides on-site first
          aid and event medical support services
          for events associated with
          <strong style={{ color: "#1A0A2E" }}>
            {" "}the Musqueam Indian Band
          </strong>
          {" "}in Vancouver, British Columbia.
        </p>

        <p
          style={{
            color: "rgba(26,10,46,0.6)",
            lineHeight: 1.85,
            marginBottom: 20,
          }}
        >
          Our team supports community and youth
          sporting events by delivering
          professional first aid coverage and
          reliable medical standby services.
        </p>

        <p
          style={{
            color: "rgba(26,10,46,0.55)",
            lineHeight: 1.85,
            marginBottom: 36,
          }}
        >
          We remain committed to providing
          dependable and professional first aid
          services across BC.
        </p>

        <div
          style={{
            background: "rgba(27,79,216,0.08)",
            border: "1px solid rgba(27,79,216,0.25)",
            borderLeft: "4px solid #1B4FD8",
            borderRadius: 8,
            padding: "18px 22px",
          }}
        >
          <strong
            style={{
              color: "#5B21B6",
            }}
          >
            Event Support:
          </strong>

          <p
            style={{
              marginTop: 10,
              color: "rgba(26,10,46,0.65)",
              lineHeight: 1.7,
            }}
          >
            Professional on-site first aid
            coverage for community gatherings,
            sporting events, and public events.
          </p>
        </div>
      </div>

      {/* Right Images */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            position: "relative",
            height: 300,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/gallery5.jpg"
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div
            style={{
              position: "relative",
              height: 160,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/gallery6.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              height: 160,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/gallery8.jpg"
              alt=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── STATS BAR ── */}
  

      {/* ── VALUES ── */}
      <section id="values" style={{ background: "#F8F5FF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">What Drives Us</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "0.02em", marginBottom: 14 }}>OUR <span style={{ color: "#7C3AED" }}>VALUES</span></h2>
            <p style={{ color: "rgba(26,10,46,0.5)", maxWidth: 460, margin: "0 auto", lineHeight: 1.75, fontSize: "0.93rem" }}>The principles that guide every deployment, every quote, and every interaction.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              { icon: <DollarSign size={22} />, title: "FAIRNESS", desc: "Priced competitively so no one has to choose between safety and budget. That's the FAIRSAFE promise — fair prices, every time." },
              { icon: <ShieldCheck size={22} />, title: "SAFETY FIRST", desc: "We don't cut corners — every attendant is certified, prepared, and equipped for real emergencies. No exceptions." },
              { icon: <Users size={22} />, title: "COMMUNITY", desc: "We serve local events, First Nation communities, and businesses across the Lower Mainland. This region is our home." },
              { icon: <Award size={22} />, title: "RELIABILITY", desc: "We show up. On time, fully equipped, and ready — because the people at your event are counting on it." },
              { icon: <MapPin size={22} />, title: "LOCAL", desc: "Based in Metro Vancouver. We know the area, the regulations, and the communities we serve." },
            ].map(v => (
              <div key={v.title} className="card" style={{ padding: "36px 28px", textAlign: "center" }}>
                <div style={{ color: "#7C3AED", display: "flex", justifyContent: "center", background: "rgba(124,58,237,0.1)", width: 52, height: 52, borderRadius: 12, alignItems: "center", margin: "0 auto 22px" }}>{v.icon}</div>
                <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.35rem", letterSpacing: "0.06em", marginBottom: 12 }}>{v.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,10,46,0.6)", lineHeight: 1.72 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg,#7C3AED,#4C1D95)", padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", letterSpacing: "0.02em", marginBottom: 16 }}>READY TO WORK WITH US?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 36, lineHeight: 1.7, fontSize: "1rem" }}>
            Get a free quote for your event or worksite. We'll respond within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "white", color: "#7C3AED", padding: "14px 34px", borderRadius: 5, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Get a Free Quote</Link>
            <Link href="/services" style={{ border: "2px solid rgba(26,10,46,0.5)", color: "#1A0A2E", padding: "12px 32px", borderRadius: 5, fontWeight: 500, textDecoration: "none", fontSize: "1rem" }}>View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
