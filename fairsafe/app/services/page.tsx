import Image from "next/image";
import Link from "next/link";
import { HardHat, Calendar, Users, ShieldCheck, HeartPulse, Zap, ArrowRight, CheckCircle, Building2, Clock } from "lucide-react";

export const metadata = { title: "Services – FAIRSAFE First Aid & Safety Solutions" };

export default function ServicesPage() {
  const services = [
    {
      id: "event-first-aid",
      img: "/img/IMG_0113.png",
      icon: <Calendar size={28} />,
      title: "EVENT FIRST AID COVERAGE",
      subtitle: "Festivals · Sports · Corporate · Community",
      desc: "Whether it's a youth soccer tournament, a music festival, or a corporate gathering — FAIRSAFE provides certified first aid attendants on-site for the full duration of your event. We've served organizations across Metro Vancouver including Musqueam Indian Band and continue to expand coverage across the Lower Mainland.",
      features: [
        "Certified BC first aid attendants on-site",
        "Full event duration coverage from setup to teardown",
        "Rapid response to all medical incidents",

        "Detailed incident documentation & reporting",
    
        "Available 7 days a week including holidays",
      ],
    },
    {
      id: "worksite-construction",
      img: "/images/service-staffing.jpg",
      icon: <HardHat size={28} />,
      title: "WORKSITE & CONSTRUCTION",
      subtitle: "Construction · Industrial · Manufacturing",
      desc: "WorkSafe BC law requires certified first aid personnel on all construction and industrial sites. FAIRSAFE supplies fully compliant, trained attendants who station themselves on your site — keeping your workers safe and your project legally covered from day one.",
      features: [

        "OFA Level 1, 2 & 3 certified staff",
        "Emergency response coordination on-site",
        "WorkSafe BC documentation & incident logging",
        "Short-term and long-term contracts",
        "Fast deployment across Lower Mainland",
      ],
    },
    {
      id: "safety-staffing",
      img: "/images/IMG_0135.jpg",
      icon: <Users size={28} />,
      title: "SAFETY STAFFING",
      subtitle: "On-demand · Contract · Multi-day",
      desc: "Need reliable safety personnel deployed quickly? FAIRSAFE provides qualified safety staff for any duration — from a single day to ongoing weekly contracts. We go to your designated location anywhere in the Lower Mainland and handle everything from arrival briefing to incident reporting.",
      features: [
        "Single day to multi-month staffing contracts",
        "Custom staffing plans based on site needs",
        "Multi-day discount rates for extended bookings",
        "Last-minute and same-day deployments",
        "Experienced across diverse industries",
      ],
    },
    {
      id: "industrial-sites",
      img: "/images/gallery6.jpg",
      icon: <Building2 size={28} />,
      title: "INDUSTRIAL SITE COVERAGE",
      subtitle: "Manufacturing · Warehouses · Facilities",
      desc: "Industrial facilities and warehouses require continuous first aid coverage during all active shifts. FAIRSAFE provides compliant, hazard-aware attendants to protect your workforce around the clock — keeping your operation legally sound and your employees safe.",
      extra: "",
      features: [
        "Shift-based coverage — days, nights, weekends",
        "Hazard-aware and safety-briefed attendants",
        "WorkSafe BC compliant documentation",
        "Emergency coordination with local services",
        "Long-term facility contracts available",
        "Regular compliance reporting included",
        "Scalable staffing for facility size",
      ],
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "#FFFFFF", paddingTop: 120, paddingBottom: 80, paddingLeft: "5%", paddingRight: "5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="section-label">What We Offer</div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 24 }}>
            OUR SAFETY<br /><span style={{ color: "#7C3AED" }}>SERVICES</span>
          </h1>
          <p style={{ color: "rgba(26,10,46,0.6)", maxWidth: 580, fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 36 }}>
            British Columbia law requires certified first aid coverage on worksites and at events. FAIRSAFE fills that requirement with trained professionals — deployed on time, every time, at a fair price.
          </p>
          {/* Anchor jump links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["Event First Aid", "#event-first-aid"],
              ["Worksite & Construction", "#worksite-construction"],
              ["Safety Staffing", "#safety-staffing"],
              ["Industrial Sites", "#industrial-sites"],
            ].map(([label, href]) => (
              <a
  key={href}
  href={href}
  style={{
    background: "rgba(124,58,237,0.1)",
    border: "1px solid rgba(124,58,237,0.25)",
    color: "#1A0A2E",
    padding: "8px 18px",
    borderRadius: 999,
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.07em",
    textDecoration: "none",
    textTransform: "uppercase",
  }}
>
  {label}
</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{ background: i % 2 === 0 ? "#F8F5FF" : "#FFFFFF", padding: "100px 5%", scrollMarginTop: 84 }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 64,
              alignItems: "center",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}>
              {/* Image */}
              <div style={{ position: "relative", direction: "ltr" }}>
                <div style={{ position: "relative", height: 420, borderRadius: 12, overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: i % 2 === 1 ? "linear-gradient(135deg,rgba(124,58,237,0.1),transparent)" : "linear-gradient(135deg,rgba(27,79,216,0.1),transparent)" }} />
                </div>
                {/* Service icon badge */}
                <div style={{ position: "absolute", top: 20, right: i % 2 === 1 ? "auto" : 20, left: i % 2 === 1 ? 20 : "auto", background: "#7C3AED", borderRadius: 12, padding: "14px", color: "#1A0A2E", boxShadow: "0 8px 24px rgba(124,58,237,0.4)" }}>
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "#6B6080", textTransform: "uppercase", marginBottom: 10 }}>{s.subtitle}</div>
                <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.04em", marginBottom: 18, lineHeight: 1.05 }}>{s.title}</h2>
                <p style={{ color: "rgba(26,10,46,0.7)", lineHeight: 1.85, marginBottom: 16, fontSize: "0.95rem" }}>{s.desc}</p>
                <p style={{ color: "rgba(26,10,46,0.55)", lineHeight: 1.85, marginBottom: 28, fontSize: "0.9rem" }}>{s.extra}</p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, marginBottom: 36 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(26,10,46,0.7)", fontSize: "0.9rem" }}>
                      <ShieldCheck size={15} color="#7C3AED" style={{ flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── OFFERS ── */}


      {/* ── PRICING NOTE ── */}
  
    </>
  );
}
