"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function ServicesPage() {
  useScrollReveal();

  const services = [
    {
      title: "Tree Removal",
      desc: "Our core service. Whether it is a single tree in your backyard or multiple trees on a commercial plot, we handle every removal safely and efficiently. We assess each tree for structural integrity, proximity to structures, and safest removal method before any cut is made.",
      features: ["Any tree size or species", "Damage-free property protection", "Full debris cleanup included", "Stump grinding available"],
      image: "/service1.png",
    },
    {
      title: "Tree Trimming & Pruning",
      desc: "Regular trimming keeps trees healthy, improves aesthetics, and removes dangerous dead branches before they become a hazard. Our arborists understand tree biology and make precise cuts that promote healthy regrowth without harming the tree.",
      features: ["Crown shaping and reduction", "Dead branch removal", "Clearance trimming from structures", "Seasonal and emergency pruning"],
      image: "/service2.png",
    },
    {
      title: "Fallen Tree & Hurricane Cleanup",
      desc: "Storms, hurricanes, and heavy rains can bring trees down without warning. A fallen tree blocking your driveway, damaging your roof, or obstructing a road needs to be dealt with immediately. We offer emergency response and full hurricane cleanup to get you clear and safe fast.",
      features: ["24/7 emergency availability", "Hurricane and storm damage cleanup", "Road and driveway clearance", "Insurance documentation assistance"],
      image: "/service3.png",
    },
    {
      title: "Lot Clearing",
      desc: "Need to prepare land for construction, agriculture, or development? Our lot clearing service removes all trees, brush, shrubs, and debris from your property, leaving it ready for the next phase. We handle projects of all sizes.",
      features: ["Full vegetation removal", "Brush and shrub clearing", "Debris hauling included", "Ideal for construction or farming prep"],
      image: "/service4.png",
    },
    {
      title: "Stump Grinding",
      desc: "After a tree is removed, the stump left behind is an eyesore, a tripping hazard, and a magnet for termites and fungi. Our stump grinding service eliminates stumps below ground level, leaving your yard clean and ready for replanting or paving.",
      features: ["Grinding below soil level", "Residential and commercial", "Prevents pest infestation", "Site cleaned after grinding"],
      image: "/service5.png",
    },
    {
      title: "Colored Wood Chips",
      desc: "A unique offering from 876 Tree Removal. After removals, we process the wood into quality mulch chips available in a variety of colors. Great for landscaping, garden beds, playgrounds, and pathways. Sold by volume — contact us for current availability.",
      features: ["Multiple colors available", "Natural and dyed options", "Great for landscaping", "Contact us for pricing"],
      image: "/service6.png",
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 100, background: "linear-gradient(135deg, #050505 0%, #0a1A0D 50%, #0a0a0a 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, width: "40%", height: "100%", backgroundImage: "radial-gradient(ellipse at right, rgba(212,160,23,0.06) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="section-label animate-fadeInUp">What We Offer</div>
          <div className="gold-divider animate-fadeInUp" />
          <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F5F0", marginBottom: 20, maxWidth: 640 }}>
            Professional Tree Services <span className="gold-shimmer">for Every Need</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(245,245,240,0.65)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560 }}>
            From a single tree to full land clearing — we bring the right expertise, equipment, and care to every job across Jamaica.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {services.map((service, i) => (
            <div key={i} className={`service-row ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", direction: i % 2 !== 0 ? "rtl" : "ltr" }}>
              {/* Icon Side */}
              <div style={{ direction: "ltr", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", height: 460, background: "rgba(26,107,58,0.08)", border: "1px solid rgba(212,160,23,0.15)", position: "relative", overflow: "hidden" }}>
                  <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              {/* Content Side */}
              <div style={{ direction: "ltr" }}>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A017", fontWeight: 700 }}>Service 0{i + 1}</span>
                <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#F5F5F0", margin: "12px 0 16px" }}>{service.title}</h2>
                <p style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 24 }}>{service.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {service.features.map((feat, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="rgba(26,107,58,0.2)" stroke="#2D9955" strokeWidth="1.2"/><path d="M5.5 9L7.5 11L12.5 7" stroke="#2D9955" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ color: "rgba(245,245,240,0.7)", fontSize: "0.88rem", fontFamily: "Arial, sans-serif" }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Request This Service</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ padding: "60px 24px", background: "#0D0D0D", textAlign: "center", borderTop: "1px solid rgba(212,160,23,0.1)", borderBottom: "1px solid rgba(212,160,23,0.1)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ margin: "0 auto 16px" }}>
            <circle cx="20" cy="20" r="19" stroke="#D4A017" strokeWidth="1.5" />
            <path d="M20 12V22" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="28" r="1.5" fill="#D4A017" />
          </svg>
          <h3 className="reveal" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.6rem", color: "#F5F5F0", marginBottom: 12 }}>No Fixed Pricing — Every Job is Unique</h3>
          <p className="reveal" style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
            Tree work is not one-size-fits-all. The price depends on tree size, access, proximity to structures, and scope of work. Contact us for a free, honest assessment. No pressure, no obligation.
          </p>
          <Link href="/contact" className="btn-primary reveal" style={{ textDecoration: "none" }}>Get a Free Quote</Link>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .service-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; } }`}</style>
    </>
  );
}
