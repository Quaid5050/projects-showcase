import Image from "next/image";
import Link from "next/link";
import Ticker from "./components/Ticker";
import {
  ShieldCheck, Zap, DollarSign, Users, HeartPulse,
  HardHat, Calendar, Award, Phone, ArrowRight,
  MapPin, Star, CheckCircle, Building2, Trophy, Clock,
  FileText, Shield
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: 84,
        display: "flex",
        alignItems: "center",
      }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/herobg.png"
            alt="FAIRSAFE in action"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "right center",
            }}
          />
          <div className="hero-overlay" style={{ position: "absolute", inset: 0, background: "rgba(8, 97, 250, 0.169)" }} />
        </div>

        {/* Content */}
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 5%",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32,
            background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)",
            borderRadius: 999, padding: "7px 18px",
          }}>
            <span className="animate-pulse-dot" style={{
              width: 8, height: 8, background: "#7C3AED",
              borderRadius: "50%", display: "inline-block"
            }} />
            <span style={{
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "black"
            }}>
              Available 24/7 Across Metro Vancouver
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.8rem,8vw,7rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: 28,
            color: "black",
          }}>
            FIRST AID<br />
            <span style={{ color: "black" }}>COVERAGE</span><br />
            <span style={{ color: "black" }}>YOU CAN TRUST</span>
          </h1>

          <p style={{
            fontSize: "1.1rem", color: "rgba(19, 14, 14, 0.75)",
            maxWidth: 500, marginBottom: 44, lineHeight: 1.75, fontWeight: 300
          }}>
            Certified first aid attendants and safety personnel for events, construction sites,
            and industrial worksites. Fair prices. Professional response. Zero compromise on safety.
          </p>

          <Link href="/services" className="btn-outline" style={{
            borderColor: "rgba(3, 0, 0, 0.4)", color: "#7C3AED",
            padding: "13px 32px", borderRadius: 5, fontWeight: 700,
            textDecoration: "none", fontSize: "1rem", display: "inline-flex", alignItems: "center"
          }}>Our Services</Link>

          {/* Stats strip */}
          <div className="hero-stats" style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap"
          }}>
            {[["24/7", "Availability"], ["BC", "Certified Staff"], ["FREE", "AED with Contract"], ["100%", "WorkSafe Compliant"]].map(([num, lbl]) => (
              <div key={lbl}>
                <div style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "2.4rem",
                  color: "#A78BFA",
                  lineHeight: 1
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: "0.78rem",
                  color: "rgba(26,10,46,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 4
                }}>
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── TRUST BAR ── */}
      <div style={{
        background: "#F8F5FF",
        padding: "18px 4%",
        borderBottom: "1px solid rgba(26,10,46,0.08)",
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 18,
          alignItems: "center",
        }}>
          {[
            [<ShieldCheck key="s" size={18} color="#7C3AED" />, "WorkSafe BC Compliant"],
            [<Users key="u" size={18} color="#7C3AED" />, "Trusted First Aid Provider for the Musqueam Indian Band"],
            [<Zap key="z" size={18} color="#7C3AED" />, "Rapid Response"],
            [<DollarSign key="d" size={18} color="#7C3AED" />, "Transparent Pricing"],
            [<HeartPulse key="h" size={18} color="#7C3AED" />, "Metro Vancouver & Lower Mainland"],
          ].map(([icon, text], index) => (
            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(26,10,46,0.04)",
              border: "1px solid rgba(26,10,46,0.08)",
              borderRadius: 10,
              padding: "12px 14px",
              minHeight: 58,
            }}>
              <div style={{ flexShrink: 0 }}>{icon}</div>
              <span style={{
                fontSize: "0.82rem",
                color: "rgba(26,10,46,0.72)",
                fontWeight: 500,
                lineHeight: 1.4,
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WORKSAFE BC COMPLIANCE SECTION ── */}
      <section style={{ background: "#F8F5FF", padding: "80px 5%", borderBottom: "1px solid rgba(124,58,237,0.1)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48, alignItems: "center"
        }}>

          {/* Left: Text Content */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20,
              background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: 999, padding: "6px 16px",
            }}>
              <ShieldCheck size={14} color="#7C3AED" />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7C3AED" }}>
                WorkSafe BC Certified
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              letterSpacing: "0.02em",
              marginBottom: 20,
              color: "#1A0A2E",
            }}>
              FULLY INSURED &<br />
              <span style={{ color: "#7C3AED" }}>WORKSAFE BC COMPLIANT</span>
            </h2>

            <p style={{ fontSize: "1rem", color: "rgba(26,10,46,0.7)", lineHeight: 1.85, marginBottom: 32 }}>
              At FAIRSAFE First Aid and Safety Solutions, we maintain active clearance with WorkSafeBC,
              ensuring our workers are covered in the event of a workplace injury, with access to medical
              care and wage-loss benefits. Workplace incidents involving covered workers are managed through
              WorkSafeBC&apos;s no-fault system, while our liability and professional insurance provide additional
              protection when assisting members of the public. This ensures comprehensive coverage and peace
              of mind for both our team and our clients.
            </p>

            {/* WorkSafe BC Logo */}
            <div style={{
              display: "inline-block",
              background: "white",
              borderRadius: 10,
              padding: "16px 24px",
              border: "1px solid rgba(124,58,237,0.12)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.08)",
              marginBottom: 28,
            }}>
              <Image
                src="/images/worksafebc-logo.PNG"
                alt="WorkSafe BC"
                width={180}
                height={60}
                style={{ objectFit: "contain", display: "block" }}
              />
            </div>

            {/* Document Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
              <a
                
                 
                 href="/docs/clearance-letter.PNG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#7C3AED", color: "white",
                  padding: "11px 22px", borderRadius: 8,
                  fontSize: "0.82rem", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.04em",
                  boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
                }}
              >
                <FileText size={15} /> View Clearance Letter
              </a>

              <a
                href="/docs/certificate-of-insurance.PNG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "white", color: "#7C3AED",
                  border: "2px solid #7C3AED",
                  padding: "9px 22px", borderRadius: 8,
                  fontSize: "0.82rem", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.04em",
                }}
              >
                <Shield size={15} /> View Insurance Certificate
              </a>
            </div>

         {/* Contact note */}
            <p style={{ fontSize: "0.78rem", color: "rgba(26,10,46,0.45)", marginTop: 4 }}>
              To view full documents, please{" "}
              <Link href="/contact" style={{ color: "#7C3AED", fontWeight: 600, textDecoration: "none" }}>
                contact us
              </Link>{" "}
              or email directly.
            </p>

            {/* Disclaimer */}
            <p style={{ fontSize: "0.72rem", color: "rgba(26,10,46,0.38)", marginTop: 6, fontStyle: "italic" }}>
              * Documents shown are partial previews only. Full certificates available upon request.
            </p>
          </div>

          {/* Right: Certifications Image */}
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 420, boxShadow: "0 20px 60px rgba(124,58,237,0.15)" }}>
            <Image
              src="/images/certifications-wall.jpg"
              alt="FAIRSAFE Certifications"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(124,58,237,0.3) 0%, transparent 60%)"
            }} />
            <div style={{
              position: "absolute", bottom: 24, left: 24, right: 24,
              background: "rgba(255,255,255,0.95)", borderRadius: 10, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <CheckCircle size={20} color="#7C3AED" />
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A0A2E" }}>
                Account #201811946 — Active & In Good Standing
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ background: "#F8F5FF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">What We Do</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em", marginBottom: 16 }}>
              PROFESSIONAL SAFETY SERVICES
            </h2>
            <p style={{ color: "rgba(26,10,46,0.6)", maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
              BC law requires certified first aid attendants on construction, industrial, and event sites.
              We fill that gap — fast, professional, and fairly priced.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {[
              {
                img: "/img/IMG_0151.png", icon: <Calendar size={22} />,
                title: "EVENT FIRST AID", tag: "Festivals · Sports · Corporate",
                desc: "Full coverage for public and private events — youth sports, festivals, community gatherings — anywhere in Metro Vancouver.",
              },
              {
                img: "/images/service-worksite.jpg", icon: <HardHat size={22} />,
                title: "WORKSITE & CONSTRUCTION", tag: "WorkSafe BC Required",
                desc: "Certified first aid attendants stationed on construction and industrial sites for the full duration of your project.",
              },
              {
                img: "/images/service-staffing.jpg", icon: <Users size={22} />,
                title: "SAFETY STAFFING", tag: "Flexible Contracts",
                desc: "On-demand qualified safety personnel for single events or long-term contracts — deployed to your location, Lower Mainland-wide.",
              },
            ].map(s => (
              <div key={s.title} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: 220 }}>
                  <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover", transition: "filter 0.3s" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,10,46,0.6),transparent)" }} />
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ color: "#7C3AED", marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem", letterSpacing: "0.04em", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "rgba(26,10,46,0.6)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                  <span style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.2)", padding: "4px 14px", borderRadius: 999, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", letterSpacing: "0.06em" }}>
              VIEW ALL SERVICES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT SECTION ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 72, alignItems: "center" }}>
          <div style={{ position: "relative", height: 520 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "75%", height: "75%", borderRadius: 12, overflow: "hidden" }}>
              <Image src="/images/gallery1.jpg" alt="FAIRSAFE team field" fill sizes="(max-width: 768px) 75vw, 40vw" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%", borderRadius: 12, overflow: "hidden", border: "4px solid #FFFFFF" }}>
              <Image src="/images/gallery6.jpg" alt="FAIRSAFE coverage" fill sizes="(max-width: 768px) 55vw, 30vw" style={{ objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", bottom: "28%", left: "-16px", zIndex: 10,
              background: "#7C3AED", borderRadius: 10, padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
            }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2rem", lineHeight: 1 }}>BC</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85, marginTop: 2 }}>Certified<br />Attendants</div>
            </div>
          </div>

          <div>
            <div className="section-label">Who We Are</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.4rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: 24 }}>
              SAFETY AT A<br /><span style={{ color: "#7C3AED" }}>FAIR PRICE</span>
            </h2>
            <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, marginBottom: 20, fontSize: "0.97rem" }}>
              FAIRSAFE is named exactly what it stands for — <strong style={{ color: "#1A0A2E" }}>fair prices</strong> for professional safety coverage. We believe no event or worksite should cut corners on first aid because other providers charge too much.
            </p>
            <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, marginBottom: 32, fontSize: "0.93rem" }}>
              From youth soccer events with the Musqueam Indian Band to industrial construction sites — our certified attendants show up prepared, on time, every time.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {[
                "WorkSafe BC compliant — fully certified staff",
                "Rapid deployment across the Lower Mainland",
                "Transparent quotes — no hidden fees",
                "Single events to long-term contracts",
              ].map(item => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(26,10,46,0.7)", fontSize: "0.93rem" }}>
                  <CheckCircle size={15} color="#7C3AED" style={{ flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID (RESPONSIVE MOSAIC) ── */}
      <section style={{ background: "#F8F5FF", padding: "100px 5%" }}>
        <style>{`
          @media (max-width: 900px) {
            .gallery-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: 240px 240px 240px !important; }
            .gallery-large { grid-column: 1 / 3 !important; grid-row: auto !important; }
          }
          @media (max-width: 640px) {
            .gallery-grid { grid-template-columns: 1fr !important; grid-template-rows: none !important; }
            .gallery-large { grid-column: auto !important; }
            .gallery-item { height: 240px !important; }
            .gallery-heading { flex-direction: column !important; align-items: flex-start !important; }
          }
        `}</style>

        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="gallery-heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-label">In the Field</div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.4rem)", letterSpacing: "0.02em", lineHeight: 1 }}>
                OUR TEAM <span style={{ color: "#7C3AED" }}>AT WORK</span>
              </h2>
            </div>
            <Link href="/gallery" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", letterSpacing: "0.06em" }}>
              VIEW FULL GALLERY <ArrowRight size={15} />
            </Link>
          </div>

          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "280px 280px", gap: 12 }}>
            <div className="gallery-item gallery-large" style={{ gridRow: "1 / 3", borderRadius: 10, overflow: "hidden", position: "relative" }}>
              <Image src="/images/work1.jpeg" alt="FAIRSAFE" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,10,46,0.5),transparent 60%)" }} />
            </div>
            <div className="gallery-item" style={{ borderRadius: 10, overflow: "hidden", position: "relative" }}>
              <Image src="/images/gallery3.jpg" alt="FAIRSAFE" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="gallery-item" style={{ borderRadius: 10, overflow: "hidden", position: "relative" }}>
              <Image src="/images/service-staffing.jpg" alt="FAIRSAFE" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            
            <div className="gallery-item" style={{ borderRadius: 10, overflow: "hidden", position: "relative" }}>
              <Image src="/images/gallery7.jpg" alt="FAIRSAFE" fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIAL OFFERS ── */}
      <section style={{ background: "linear-gradient(135deg,#0d0d14,#150820,#0d0d14)", padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50%", left: "-20%", width: 600, height: 600, background: "radial-gradient(circle,rgba(107,33,168,0.22) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: 500, height: 500, background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Limited Time</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em", color: "#FFFFFF" }}>SPECIAL OFFERS</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "12px auto 0", fontSize: "0.95rem", lineHeight: 1.7 }}>Exclusive deals for new clients and multi-day bookings.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.35)", borderRadius: 16, padding: 44, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 20, right: -30, background: "#7C3AED", color: "#FFFFFF", padding: "6px 48px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", transform: "rotate(35deg)" }}>FREE BONUS</div>
              <HeartPulse size={36} color="#A78BFA" style={{ marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em", marginBottom: 14, color: "#FFFFFF" }}>FREE AED WITH CONTRACT</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                Book a coverage contract and receive a <span style={{ color: "#A78BFA", fontWeight: 700 }}>complimentary Automated External Defibrillator (AED)</span> — a $1,500+ value included at no cost.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: 44 }}>
              <Calendar size={36} color="#A78BFA" style={{ marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em", marginBottom: 14, color: "#FFFFFF" }}>MULTI-DAY DISCOUNT</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                Booking coverage across <span style={{ color: "#A78BFA", fontWeight: 700 }}>multiple consecutive days?</span> We reward commitment with discounted rates. Perfect for multi-day festivals, week-long worksites, or recurring events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div className="section-label">Simple Process</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em" }}>
              HOW IT <span style={{ color: "#7C3AED" }}>WORKS</span>
            </h2>
            <p style={{ color: "rgba(26,10,46,0.5)", maxWidth: 460, margin: "12px auto 0", lineHeight: 1.75 }}>
              Getting professional first aid coverage is simple. Three steps and you&apos;re covered.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(to right,transparent,rgba(124,58,237,0.3),rgba(124,58,237,0.3),transparent)", zIndex: 0 }} className="hidden-mobile" />
            {[
              { num: "01", icon: <Phone size={24} />, title: "CONTACT US", desc: "Call or email with your event details — date, location, expected attendance, and site type." },
              { num: "02", icon: <DollarSign size={24} />, title: "GET A QUOTE", desc: "We assess your needs and send a transparent, competitive quote within 24 hours. No surprises." },
              { num: "03", icon: <CheckCircle size={24} />, title: "CONFIRM BOOKING", desc: "Approve the quote and we confirm your certified attendant(s). Everything sorted." },
              { num: "04", icon: <ShieldCheck size={24} />, title: "WE SHOW UP", desc: "Our certified staff arrive on-site, fully equipped and ready before your event starts." },
            ].map((step, i) => (
              <div key={step.num} style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", margin: "0 auto 24px",
                  background: i % 2 === 0 ? "#7C3AED" : "#EDE9FF",
                  border: i % 2 !== 0 ? "1px solid rgba(124,58,237,0.3)" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#1A0A2E", boxShadow: i % 2 === 0 ? "0 0 0 8px rgba(124,58,237,0.1)" : "none",
                }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#7C3AED", marginBottom: 8 }}>STEP {step.num}</div>
                <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.3rem", letterSpacing: "0.06em", marginBottom: 12 }}>{step.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,10,46,0.55)", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SUPPORT / MUSQUEAM FEATURE ── */}
      <section style={{ background: "#F8F5FF", padding: "0", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <div style={{ position: "relative", minHeight: 440 }}>
            <Image
              src="/img/IMG_7393.png"
              alt="Community event support"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,transparent 60%,#F8F5FF)" }} />
          </div>

          <div style={{ padding: "72px 6%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="section-label">Community Support</div>
            <h2 style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(2rem,3.5vw,3rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.05,
              marginBottom: 20,
            }}>
              TRUSTED FIRST AID PROVIDER FOR THE<br />
              <span style={{ color: "#5B21B6" }}>MUSQUEAM INDIAN BAND</span>
            </h2>
            <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 20 }}>
              FAIRSAFE provides on-site first aid and event medical support services for community and sporting events associated with the{" "}
              <strong style={{ color: "#1A0A2E" }}>Musqueam Indian Band</strong>{" "}in Vancouver, British Columbia.
            </p>
            <p style={{ color: "rgba(26,10,46,0.5)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: 32 }}>
              Our focus is delivering dependable event coverage, professional support, and safer experiences for communities across the Lower Mainland.
            </p>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#5B21B6", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", letterSpacing: "0.06em" }}>
              ABOUT FAIRSAFE <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY FAIRSAFE ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">Why Choose Us</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em" }}>THE FAIRSAFE DIFFERENCE</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
            {[
              { icon: <DollarSign size={24} />, title: "FAIR PRICING", desc: "Our name says it all. Competitive rates with no hidden fees — safety coverage that fits your budget." },
              { icon: <Zap size={24} />, title: "RAPID DEPLOYMENT", desc: "Stationed at your location for the full duration, ready to respond immediately when it matters." },
              { icon: <ShieldCheck size={24} />, title: "BC CERTIFIED", desc: "All attendants hold current WorkSafe BC certification. Every regulatory requirement met." },
              { icon: <Award size={24} />, title: "PROVEN PARTNER", desc: "Trusted by Musqueam Indian Band and organizations across the Lower Mainland." },
              { icon: <Phone size={24} />, title: "REAL SUPPORT", desc: "Talk to a real person. Fast responses because safety planning can't wait." },
            ].map(w => (
              <div key={w.title} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
                <div style={{ color: "#7C3AED", display: "flex", justifyContent: "center", background: "rgba(124,58,237,0.1)", width: 52, height: 52, borderRadius: 12, alignItems: "center", margin: "0 auto 20px" }}>{w.icon}</div>
                <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.3rem", letterSpacing: "0.04em", marginBottom: 10 }}>{w.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,10,46,0.6)", lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA STRIP ── */}
      <section style={{ background: "#F8F5FF", padding: "80px 5%", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div className="section-label">Where We Operate</div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.02em", marginBottom: 20 }}>
                METRO VANCOUVER &<br /><span style={{ color: "#7C3AED" }}>LOWER MAINLAND</span>
              </h2>
              <p style={{ color: "rgba(26,10,46,0.6)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 32 }}>
                We deploy certified safety personnel across the entire Metro Vancouver region — from Whistler to Abbotsford. Wherever your event or worksite is, we&apos;ll be there.
              </p>
              <Link href="/contact" className="btn-primary">Book Coverage Now</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {["Vancouver", "Burnaby", "Richmond", "Surrey", "Coquitlam", "N. Vancouver", "W. Vancouver", "Langley", "Abbotsford", "Delta", "Maple Ridge", "New West"].map(city => (
                <div key={city} style={{ background: "rgba(26,10,46,0.05)", border: "1px solid rgba(26,10,46,0.08)", borderRadius: 8, padding: "10px 14px", fontSize: "0.8rem", color: "rgba(26,10,46,0.6)", display: "flex", alignItems: "center", gap: 7 }}>
                  <MapPin size={11} color="#7C3AED" /> {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / SOCIAL PROOF ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label">Trusted By</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.2rem,4vw,3.4rem)", letterSpacing: "0.02em" }}>
              WHAT CLIENTS <span style={{ color: "#7C3AED" }}>SAY</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              { quote: "FAIRSAFE had their attendant on-site before we even opened gates. Professional, prepared, and genuinely affordable. Exactly what we needed for our community event.", 
  name: "Community Event Organizer", role: "North Vancouver", initials: "CE" },
              { quote: "We needed last-minute first aid coverage for our construction site — FAIRSAFE came through same day. Certified, on time, and cheaper than any other quote we got.", name: "Site Supervisor", role: "Construction Project, Burnaby", initials: "SS" },
              { quote: "Booked them for a 3-day festival. The multi-day discount was a great deal and the team was outstanding throughout. Will use FAIRSAFE for all future events.", name: "Event Coordinator", role: "Lower Mainland Festival", initials: "EC" },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: 36 }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#7C3AED" color="#7C3AED" />)}
                </div>
                <p style={{ color: "rgba(26,10,46,0.7)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: 28, fontStyle: "italic" }}>&quot;{t.quote}&quot;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, color: "white" }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#6B6080" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section style={{ background: "#F8F5FF", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-label">Industries</div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "0.02em" }}>
              WHO WE <span style={{ color: "#7C3AED" }}>SERVE</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {[
              { icon: <Building2 size={28} />, label: "Construction" },
              { icon: <Trophy size={28} />, label: "Sports Events" },
              { icon: <Users size={28} />, label: "Community Events" },
              { icon: <HardHat size={28} />, label: "Industrial Sites" },
              { icon: <Calendar size={28} />, label: "Festivals" },
              { icon: <Clock size={28} />, label: "24/7 Worksites" },
            ].map(ind => (
              <div key={ind.label} style={{
                background: "rgba(26,10,46,0.04)",
                border: "1px solid rgba(26,10,46,0.08)",
                borderRadius: 12, padding: "28px 20px", textAlign: "center",
              }}>
                <div style={{ color: "#7C3AED", display: "flex", justifyContent: "center", marginBottom: 14 }}>{ind.icon}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.1rem", letterSpacing: "0.06em", color: "black" }}>{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "linear-gradient(135deg,#7C3AED,#4C1D95)", padding: "100px 5%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "0.02em", marginBottom: 20 }}>READY TO BOOK COVERAGE?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 44, fontSize: "1.05rem", lineHeight: 1.7 }}>
            Get certified first aid and safety coverage for your next event, worksite, or project. Fair price, guaranteed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "white", color: "#7C3AED", padding: "15px 36px", borderRadius: 5, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>Get a Free Quote</Link>
            <a href="tel:6043788311" style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white", padding: "13px 34px", borderRadius: 5, fontWeight: 500, textDecoration: "none", fontSize: "1rem", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Phone size={16} /> (604) 378-8311
            </a>
          </div>
        </div>
      </section>
    </>
  );
}