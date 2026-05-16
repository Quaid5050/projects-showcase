import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, MapPin, DollarSign, Award, HeartPulse, HardHat, Calendar, ArrowRight, CheckCircle, Clock, Phone } from "lucide-react";

export const metadata = { title: "About – FAIRSAFE First Aid & Safety Solutions" };

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: 500, display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 84 }}>
        <Image src="/images/gallery2.jpg" alt="FAIRSAFE Team" fill style={{ objectFit: "cover", filter: "brightness(0.3) saturate(0.6)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(255,255,255,0.97) 45%,rgba(26,10,46,0.5))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "80px 5%", width: "100%" }}>
          <div className="section-label">Our Story</div>
          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,7vw,6rem)", lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: 20 }}>
            ABOUT<br /><span style={{ color: "#7C3AED" }}>FAIRSAFE</span>
          </h1>
          <p style={{ color: "rgba(26,10,46,0.7)", maxWidth: 520, fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 36 }}>
            Built on one principle — professional safety should be accessible to everyone, at a fair price.
          </p>
          {/* Quick nav anchors */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[["Our Story", "#story"], ["Services", "#services"], ["Partnership", "#partnership"], ["Values", "#values"], ["Team", "#team"]].map(([label, href]) => (
              <a key={href} href={href} style={{
                background: "rgba(26,10,46,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(26,10,46,0.7)", padding: "8px 18px", borderRadius: 999,
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
                textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s",
              }}>{label}</a>
            ))}
          </div>
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
          BC
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
          Certified
          <br />
          Attendants
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
      <div className="section-label">Who We Are</div>

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
        SAFETY SERVICES AT A{" "}
        <span style={{ color: "#7C3AED" }}>FAIR PRICE</span>
      </h2>

      <p
        style={{
          color: "rgba(26,10,46,0.7)",
          lineHeight: 1.85,
          marginBottom: 20,
          fontSize: "0.97rem",
          textAlign: "left",
        }}
      >
        FAIRSAFE is named exactly what it stands for —
        <strong style={{ color: "#1A0A2E" }}> fair prices</strong> for
        professional safety coverage. We believe no event organizer,
        construction company, or community group should have to cut corners on
        first aid just because other providers charge too much.
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
          "WorkSafe BC compliant first aid attendants",
          "Rapid deployment across Metro Vancouver & Lower Mainland",
          "Transparent pricing — no hidden fees, no surprises",
          "Available for single events to long-term contracts",
          "Trusted by First Nations and community organizations",
          "Free AED provided with every coverage contract",
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
          Work With Us
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
          See Our Services
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ── SERVICES (with anchor links to /services#id) ── */}
      <section id="services" style={{ background: "#F8F5FF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">What We Offer</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.4rem)", letterSpacing: "0.02em", marginBottom: 16 }}>
              OUR <span style={{ color: "#7C3AED" }}>SERVICES</span>
            </h2>
            <p style={{ color: "rgba(26,10,46,0.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Every service is staffed by certified professionals and priced fairly — click any service to learn more.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              {
                id: "event-first-aid",
                icon: <Calendar size={26} />,
                img: "/images/service-event.jpg",
                title: "Event First Aid Coverage",
                sub: "Festivals · Sports · Corporate · Community",
                desc: "Certified first aid attendants for public and private events of all sizes — from youth soccer tournaments to large-scale festivals across Metro Vancouver.",
                features: ["Full event duration coverage", "AED on-site", "Incident documentation", "Scalable team size"],
              },
              {
                id: "worksite-construction",
                icon: <HardHat size={26} />,
                img: "/images/service-worksite.jpg",
                title: "Worksite & Construction Safety",
                sub: "WorkSafe BC Required",
                desc: "WorkSafe BC mandates certified first aid attendants on all construction and industrial sites. We supply fully compliant, trained personnel stationed on-site for your project duration.",
                features: ["OFA Level 1, 2 & 3 certified", "Daily safety monitoring", "Short & long-term contracts", "Fast deployment"],
              },
              {
                id: "safety-staffing",
                icon: <Users size={26} />,
                img: "/images/service-staffing.jpg",
                title: "Safety Staffing",
                sub: "On-demand · Contract · Multi-day",
                desc: "Need qualified safety personnel deployed quickly? We provide on-demand staff for any duration — single day to multi-month contracts — anywhere in the Lower Mainland.",
                features: ["Multi-day discount rates", "Last-minute deployments", "Diverse industry experience", "Transparent per-day pricing"],
              },
              {
                id: "industrial-sites",
                icon: <HeartPulse size={26} />,
                img: "/images/gallery7.jpg",
                title: "Industrial Site Coverage",
                sub: "Manufacturing · Warehouses · Facilities",
                desc: "Industrial facilities require compliant on-site first aid at all times. FAIRSAFE provides continuous coverage to keep your workforce protected and your operation legally sound.",
                features: ["Shift-based coverage available", "Hazard-aware attendants", "WorkSafe compliant documentation", "Emergency coordination"],
              },
            ].map(s => (
              <Link key={s.id} href={`/services#${s.id}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ overflow: "hidden", height: "100%", cursor: "pointer" }}>
                  <div style={{ position: "relative", height: 180 }}>
                    <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover", filter: "brightness(0.8)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,10,46,0.7),transparent)" }} />
                    <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(124,58,237,0.9)", borderRadius: 8, padding: "8px 10px", color: "#1A0A2E" }}>{s.icon}</div>
                  </div>
                  <div style={{ padding: 26 }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#6B6080", textTransform: "uppercase", marginBottom: 8 }}>{s.sub}</div>
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.45rem", letterSpacing: "0.04em", marginBottom: 10, color: "#1A0A2E" }}>{s.title}</h3>
                    <p style={{ color: "rgba(26,10,46,0.6)", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                      {s.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: "0.82rem", color: "rgba(26,10,46,0.6)" }}>
                          <CheckCircle size={13} color="#7C3AED" style={{ flexShrink: 0 }} /> {f}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, color: "#7C3AED", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
                      LEARN MORE <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              VIEW FULL SERVICES PAGE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MUSQUEAM PARTNERSHIP ── */}
      <section id="partnership" style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Community Partnership</div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.05 }}>
                PROUD PARTNER OF<br /><span style={{ color: "#5B21B6" }}>MUSQUEAM INDIAN BAND</span>
              </h2>
              <p style={{ color: "rgba(26,10,46,0.7)", lineHeight: 1.85, marginBottom: 20, fontSize: "0.95rem" }}>
                FAIRSAFE has been contracted to provide on-site first aid and medical support services for events with <strong style={{ color: "#1A0A2E" }}>Musqueam Indian Band</strong>, a First Nation government based in Vancouver, British Columbia.
              </p>
              <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.85, marginBottom: 20, fontSize: "0.93rem" }}>
                Services provided include first aid coverage for <strong style={{ color: "#1A0A2E" }}>youth soccer events</strong>, with additional event support ongoing across the Lower Mainland. We are honoured to serve and protect their community.
              </p>
              <p style={{ color: "rgba(26,10,46,0.55)", lineHeight: 1.85, marginBottom: 36, fontSize: "0.91rem" }}>
                This partnership reflects our core mission — bringing professional, affordable first aid coverage to the communities that need it most, including First Nations organizations throughout BC.
              </p>
              {/* Partnership highlight box */}
              <div style={{ background: "rgba(27,79,216,0.08)", border: "1px solid rgba(27,79,216,0.25)", borderLeft: "3px solid #1B4FD8", borderRadius: 8, padding: "18px 22px" }}>
                <p style={{ fontSize: "0.88rem", color: "rgba(26,10,46,0.6)", lineHeight: 1.75 }}>
                  <strong style={{ color: "#5B21B6" }}>Active Contract:</strong> On-site first aid & medical support for Musqueam Indian Band events, including youth soccer tournaments and community gatherings across Metro Vancouver.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ position: "relative", height: 300, borderRadius: 12, overflow: "hidden" }}>
                <Image src="/images/gallery5.jpg" alt="FAIRSAFE event coverage" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(27,79,216,0.15),transparent)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ position: "relative", height: 160, borderRadius: 10, overflow: "hidden" }}>
                  <Image src="/images/gallery6.jpg" alt="Youth event coverage" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "relative", height: 160, borderRadius: 10, overflow: "hidden" }}>
                  <Image src="/images/gallery8.jpg" alt="Community safety" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#7C3AED", padding: "56px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 32, textAlign: "center" }}>
          {[
            { num: "24/7", label: "Availability" },
            { num: "100%", label: "WorkSafe BC Compliant" },
            { num: "FREE", label: "AED with Contract" },
            { num: "BC", label: "Certified Staff" },
            { num: "LML", label: "Lower Mainland Coverage" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.8rem", lineHeight: 1, color: "#1A0A2E" }}>{stat.num}</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,10,46,0.7)", marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

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

      {/* ── TEAM / FOUNDER ── */}
      <section id="team" style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">The People</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "0.02em" }}>
              MEET THE <span style={{ color: "#7C3AED" }}>TEAM</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 400, borderRadius: 12, overflow: "hidden" }}>
                <Image src="/images/gallery1.jpg" alt="Nassif Rahmathullah - Founder" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(255,255,255,0.85) 0%,transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem", letterSpacing: "0.04em" }}>NASSIF RAHMATHULLAH</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(26,10,46,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Founder & Director</div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-label">Founder & Director</div>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2rem", letterSpacing: "0.04em", marginBottom: 20 }}>NASSIF RAHMATHULLAH</h3>
              <p style={{ color: "rgba(26,10,46,0.7)", lineHeight: 1.85, marginBottom: 18, fontSize: "0.95rem" }}>
                Nassif founded FAIRSAFE after identifying a clear gap in Metro Vancouver's safety services market — first aid coverage was either overpriced, understaffed, or unreliable.
              </p>
              <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.85, marginBottom: 18, fontSize: "0.93rem" }}>
                With a commitment to keeping prices fair and service quality high, Nassif built FAIRSAFE around the belief that <strong style={{ color: "#1A0A2E" }}>every event and every worksite deserves professional protection</strong> — regardless of budget.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:6043788311" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "rgba(26,10,46,0.7)", textDecoration: "none", fontSize: "0.9rem" }}>
                  <Phone size={15} color="#7C3AED" /> (604) 378-8311
                </a>
              </div>
            </div>
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
