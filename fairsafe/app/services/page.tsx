import Image from "next/image";
import Link from "next/link";
import { HardHat, Calendar, Users, ShieldCheck, HeartPulse, Zap, ArrowRight, CheckCircle, Building2, Clock } from "lucide-react";

export const metadata = { title: "Services – FAIRSAFE First Aid & Safety Solutions" };

export default function ServicesPage() {
  const services = [
    {
      id: "event-first-aid",
      img: "/images/service-event.jpg",
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
      img: "/images/service-worksite.jpg",
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
      img: "/images/service-staffing.jpg",
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
      img: "/images/gallery7.jpg",
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
<section id="offers" style={{ background: "linear-gradient(135deg,#0d0d14,#150820,#0d0d14)", padding: "100px 5%", position: "relative", overflow: "hidden", scrollMarginTop: 84 }}>
  <div style={{ position: "absolute", top: "-40%", left: "-15%", width: 500, height: 500, background: "radial-gradient(circle,rgba(107,33,168,0.2) 0%,transparent 70%)", pointerEvents: "none" }} />
  <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <div className="section-label">Exclusive Deals</div>
      <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "0.02em", marginBottom: 14, color: "#FFFFFF" }}>SPECIAL OFFERS</h2>
      <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto", lineHeight: 1.75, fontSize: "0.93rem" }}>Fair pricing is our foundation — these offers make it even better.</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
      {/* Card 1 */}
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.35)", borderRadius: 16, padding: 44, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 20, right: -30, background: "#7C3AED", color: "#FFFFFF", padding: "6px 48px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", transform: "rotate(35deg)" }}>FREE BONUS</div>
        <HeartPulse size={36} color="#A78BFA" style={{ marginBottom: 20 }} />
        <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em", marginBottom: 14, color: "#FFFFFF" }}>FREE AED WITH CONTRACT</h3>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: 20 }}>
          Sign a coverage contract and receive a <span style={{ color: "#A78BFA", fontWeight: 700 }}>complimentary Automated External Defibrillator (AED)</span> — a $1,500+ value at no extra cost. Be prepared beyond the event.
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {["AED unit included at no cost", "Value over $1,500", "Yours to keep after the contract", "Setup guidance included"].map(f => (
            <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "0.83rem", color: "rgba(255,255,255,0.55)" }}>
              <CheckCircle size={13} color="#A78BFA" /> {f}
            </li>
          ))}
        </ul>
      </div>
      {/* Card 2 */}
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 44 }}>
        <Zap size={36} color="#A78BFA" style={{ marginBottom: 20 }} />
        <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em", marginBottom: 14, color: "#FFFFFF" }}>MULTI-DAY DISCOUNT</h3>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: 20 }}>
          Booking coverage for <span style={{ color: "#A78BFA", fontWeight: 700 }}>multiple consecutive days?</span> We reward commitment with discounted daily rates. Perfect for festivals, construction projects, or recurring weekly events.
        </p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {["Discounted daily rates", "Applies to 2+ consecutive days", "Works for all service types", "Ask for custom package pricing"].map(f => (
            <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "0.83rem", color: "rgba(255,255,255,0.55)" }}>
              <CheckCircle size={13} color="#A78BFA" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* ── PRICING NOTE ── */}
      <section style={{ background: "#FFFFFF", padding: "60px 5%" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ background: "rgba(26,10,46,0.04)", border: "1px solid rgba(26,10,46,0.1)", borderRadius: 12, padding: "36px 40px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "center" }}>
            <Clock size={40} color="#7C3AED" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem", letterSpacing: "0.04em", marginBottom: 10 }}>PRICING IS SUBJECT TO QUOTE</h3>
              <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, fontSize: "0.9rem" }}>
                All pricing is customized based on your event size, duration, site type, number of attendants required, and location. We pride ourselves on being the most competitive provider in Metro Vancouver — fairly priced, transparent, and responsive. Get your free quote within 24 hours.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.9rem" }}>
                  Request a Free Quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
