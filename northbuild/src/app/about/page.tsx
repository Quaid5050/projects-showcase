"use client";
import Link from "next/link";
import CTABar from "@/components/ui/CTABar";
import { ArrowRightIcon, CheckCircleIcon, MapleLeafIcon } from "@/components/icons/Icons";

const values = [
  { title: "Quality First", desc: "We only install products we would put on our own homes and businesses." },
  { title: "Honest Advice", desc: "No upselling. We tell you what you actually need and why." },
  { title: "Fast Response", desc: "We respect your time. Quick quotes, quick installs, quick service." },
  { title: "Community Proud", desc: "Local business supporting local homeowners and businesses." },
];

const stats = [
  { value: "100%", label: "Local Team" },
  { value: "4", label: "Top Brands" },
  { value: "1 Day", label: "Response Time" },
  { value: "SWO", label: "Service Region" },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: "#0B0B0B", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            About Northbuilt
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "0.03em", marginBottom: "1.5rem", maxWidth: "700px" }}>
            Southwestern Ontario&apos;s <span style={{ color: "#F26522" }}>Local Door Experts</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.8, maxWidth: "600px" }}>
            Northbuilt Door &amp; Dock is a locally owned company proudly serving homeowners and businesses across Southwestern Ontario. We built this company on a simple belief: do the job right, use quality products, and treat every customer like a neighbour — because they are.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#121212", borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", color: "#F26522", letterSpacing: "0.05em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#7C7C7C", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="orange-line" style={{ margin: "0 auto 1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF", letterSpacing: "0.05em" }}>
              How We Work
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: "#121212", border: "1px solid #2C2C2C", borderRadius: "6px", padding: "2rem", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#F26522")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C")}
              >
                <div style={{ width: "28px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.85rem" }} />
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "0.6rem" }}>{v.title}</h3>
                <p style={{ color: "#A3A3A3", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL PRIDE */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <MapleLeafIcon size={48} color="#F26522" className="" />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", letterSpacing: "0.04em", margin: "1.25rem 0 1rem" }}>
            Southwestern Ontario <span style={{ color: "#F26522" }}>Proud</span>
          </h2>
          <p style={{ color: "#A3A3A3", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            We&apos;re not a national chain. We&apos;re your neighbours. Every install we do is in the communities where our team lives and works. That means we&apos;re invested in doing it right — our reputation depends on it.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRightIcon size={16} color="#fff" />
          </Link>
        </div>
      </section>

      <CTABar />
    </>
  );
}
