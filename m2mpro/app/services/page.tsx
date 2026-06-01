"use client";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";


const services = [
  {
    id: "standard",
    title: "Standard Home Cleaning",
    subtitle: "Perfect for weekly, bi-weekly, or monthly maintenance",
    desc: "Our standard cleaning keeps your home consistently fresh and welcoming. Perfect for busy families and professionals who want a reliably clean home without the effort.",
    includes: [
      "Dusting all surfaces and ceiling fans",
      "Vacuuming all floors, carpets, and rugs",
      "Mopping all hard floors",
      "Kitchen wipe-down (counters, stovetop, exterior appliances)",
      "Bathroom cleaning (toilet, sink, shower, tub, mirrors)",
      "Bedroom tidying and making beds",
      "Emptying trash bins",
      "Wiping down light switches and door handles",
    ],
    pricing: [
      { size: "1 Bed / 1 Bath", price: "$149" },
      { size: "2 Bed / 1–2 Bath", price: "$179" },
      { size: "3 Bed / 2 Bath", price: "$209" },
      { size: "4 Bed / 3 Bath", price: "$249+" },
    ],
    iconPath: "home",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    subtitle: "A thorough top-to-bottom transformation",
    desc: "Our deep clean goes beyond the surface. We tackle every corner, crevice, and forgotten space to restore your home to its absolute best.",
    includes: [
      "Everything in Standard Cleaning, plus:",
      "Inside oven, microwave, and refrigerator cleaning",
      "Inside cabinets and drawers wiped down",
      "Scrubbing grout lines in bathrooms and kitchen",
      "Baseboards, window sills, and door frames",
      "Behind and under furniture and appliances",
      "Light fixtures and ceiling fans detail cleaned",
      "Washing interior windows",
    ],
    pricing: [
      { size: "1 Bed / 1 Bath", price: "From $250" },
      { size: "2 Bed / 1–2 Bath", price: "From $320" },
      { size: "3 Bed / 2 Bath", price: "From $390" },
      { size: "4+ Bed", price: "Custom Quote" },
    ],
    iconPath: "deep",
  },
  {
    id: "move",
    title: "Move-In / Move-Out Cleaning",
    subtitle: "Stress-free transition, full deposit back",
    desc: "Moving is stressful enough. Let us handle the cleaning so you can focus on what matters. We deep clean every inch — perfect for landlords, tenants, and new homeowners.",
    includes: [
      "Complete deep clean of entire property",
      "All appliances inside and out",
      "Inside all cupboards, drawers, and closets",
      "All walls, baseboards, and trim wiped down",
      "Full bathroom scrub and disinfection",
      "Window cleaning (interior)",
      "Garage sweep (upon request)",
      "Final walkthrough and touch-ups",
    ],
    pricing: [
      { size: "Studio / 1 Bed", price: "From $280" },
      { size: "2 Bed", price: "From $350" },
      { size: "3 Bed", price: "From $430" },
      { size: "4+ Bed", price: "Custom Quote" },
    ],
    iconPath: "move",
  },
  {
    id: "commercial",
    title: "Office & Commercial Cleaning",
    subtitle: "Professional spaces deserve professional cleaning",
    desc: "We help businesses create clean, welcoming environments for their teams and clients. Reliable scheduled cleaning with minimal disruption to operations.",
    includes: [
      "Reception and common areas",
      "Individual offices and workstations",
      "Boardrooms and meeting rooms",
      "Kitchen and break room cleaning",
      "Washroom sanitizing and restocking",
      "Vacuuming and mopping all floors",
      "Window and glass cleaning",
      "Custom cleaning schedules available",
    ],
    pricing: [
      { size: "Small Office (< 1,000 sqft)", price: "From $149" },
      { size: "Medium (1,000–3,000 sqft)", price: "From $249" },
      { size: "Large (3,000+ sqft)", price: "Custom Quote" },
      { size: "Retail / Showroom", price: "Custom Quote" },
    ],
    iconPath: "office",
  },
  {
    id: "postconstruction",
    title: "Post-Construction Cleaning",
    subtitle: "Reveal the beauty beneath the dust",
    desc: "After renovations or construction, we remove all debris, dust, and residue — transforming a construction site into a move-in ready, beautiful space.",
    includes: [
      "Removal of construction dust throughout",
      "Cleaning all surfaces including walls",
      "Window cleaning inside and out",
      "Appliance cleaning and polishing",
      "Floor cleaning (all types)",
      "Removing stickers and labels from surfaces",
      "Bathroom and kitchen deep clean",
      "Final detail clean and walkthrough",
    ],
    pricing: [
      { size: "Under 1,000 sqft", price: "From $350" },
      { size: "1,000–2,000 sqft", price: "From $500" },
      { size: "2,000+ sqft", price: "Custom Quote" },
      { size: "Commercial Build-Out", price: "Custom Quote" },
    ],
    iconPath: "construction",
  },
];

const discounts = [
  { freq: "Weekly", pct: "20% Off", desc: "Best value — always clean" },
  { freq: "Bi-Weekly", pct: "15% Off", desc: "Most popular choice" },
  { freq: "Monthly", pct: "10% Off", desc: "Fresh reset every month" },
  { freq: "First Deep Clean", pct: "$20 Off", desc: "New clients only" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #1A1A1A 0%, #1e2a1e 100%)",
        padding: "160px 32px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%, rgba(201,169,110,0.07) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Our Services</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 300, color: "white", marginBottom: "24px", letterSpacing: "-1px" }}>
            Cleaning Services<br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Tailored for You</em>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "520px" }}>
            From routine maintenance to complete transformations — we have a service for every space and every need.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <ServiceCard key={s.id} service={s} flipped={i % 2 !== 0} />
      ))}

      {/* Discounts */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Recurring Discounts</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: "white" }}>Save More, Clean More</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }} className="disc-grid">
            {discounts.map((d, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.15)", padding: "40px 28px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 600, color: "#C9A96E", lineHeight: 1 }}>{d.pct}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "white", margin: "12px 0 8px", letterSpacing: "1px" }}>{d.freq}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{d.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/booking" className="btn-primary">Book and Save Today</Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .disc-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .disc-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="section-pad" style={{ background: "#FAF8F4" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Extra Services</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: "#1A1A1A", marginBottom: "16px" }}>Add-On Services</h2>
            <div className="gold-divider" style={{ marginBottom: "20px" }} />
            <p style={{ color: "#8A8078", fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>Customize your clean with extras. All add-ons are priced on a custom quote basis — just let us know when booking.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="addons-grid">
            {[
              { title: "Oven Cleaning", desc: "Full interior oven deep clean — racks, glass door, and all surfaces. Removes grease and baked-on residue." },
              { title: "Fridge Cleaning", desc: "Inside and out — shelves, drawers, door seals, and walls. Sanitized and deodorized." },
              { title: "Window Cleaning", desc: "Interior and exterior window cleaning. Streak-free finish on all glass surfaces and window sills." },
              { title: "Dishwasher Cleaning", desc: "Full interior clean — filter, spray arms, door seal, and drum. Removes buildup and odors." },
              { title: "Laundry (Wash & Fold)", desc: "We wash, dry, and fold your laundry during the clean. Just leave it out and we handle the rest." },
              { title: "Wall Spot Cleaning", desc: "Remove scuffs, marks, and stains from walls. Perfect for move-outs or after renovations." },
              { title: "Garage Cleaning", desc: "Sweep, dust, and wipe down your garage. Remove cobwebs and clean surfaces." },
              { title: "Balcony / Patio", desc: "Sweep, scrub, and clean your outdoor space. Furniture wipe-down included upon request." },
              { title: "Cabinet Interior", desc: "All kitchen and bathroom cabinet interiors wiped, sanitized, and organized." },
            ].map((addon, i) => (
              <div key={i} style={{ background: "white", padding: "36px 32px", borderBottom: "2px solid transparent", transition: "border-color 0.3s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderBottomColor = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent"; }}>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="#C9A96E" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#1A1A1A", marginBottom: "10px" }}>{addon.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#8A8078", marginBottom: "16px" }}>{addon.desc}</p>
                <span style={{ fontSize: "11px", color: "#C9A96E", letterSpacing: "1.5px", textTransform: "uppercase" }}>Custom Quote</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#1A1A1A", padding: "36px 40px", marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "white", fontWeight: 300, marginBottom: "6px" }}>Want to add extras to your booking?</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Mention your add-ons in the special requests field when booking.</p>
            </div>
            <Link href="/booking" className="btn-primary" style={{ whiteSpace: "nowrap" }}>Book with Add-Ons</Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .addons-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .addons-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "#2D4A3E", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: "white", marginBottom: "20px" }}>Not Sure Which Service?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.8, marginBottom: "36px" }}>Contact us and we will recommend the perfect cleaning package for your space and budget.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:7788936786" style={{ textDecoration: "none", background: "transparent", color: "white", padding: "13px 32px", border: "1px solid rgba(255,255,255,0.4)", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", display: "inline-block" }}>(778) 893-6786</a>
          </div>
        </div>
      </section>
    </>
  );
}