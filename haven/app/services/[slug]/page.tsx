"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

const UNSPLASH = "https://images.unsplash.com";

/* ══════════════════════════════════════════════
   ALL SERVICES DATA — slug, details, features, gallery
   ══════════════════════════════════════════════ */
const services: Record<string, {
  num: string;
  title: string;
  sub: string;
  hero: string;
  img: string;
  desc: string;
  longDesc: string;
  features: string[];
  process: { step: string; text: string }[];
  gallery: string[];
}> = {
  ppf: {
    num: "01",
    title: "PPF Service",
    sub: "Invisible Paint Protection Film",
    hero: `${UNSPLASH}/photo-1603584173870-7f23fdae1b7a?w=1400&q=80`,
    img: `/ppf.webp`,
    desc: "Our Paint Protection Film is the ultimate shield for your vehicle's most vulnerable panels.",
    longDesc: "Applied by certified technicians, this self-healing, optically clear film absorbs rock chips, road debris, and minor abrasions before they ever touch your paint. Invisible from arm's length, unstoppable up close. We use only premium-grade films from industry leaders like XPEL, 3M, and SunTek, cut with precision plotters for a perfect edge-to-edge fit on every panel.",
    features: [
      "Self-healing top coat technology",
      "Optically clear — invisible finish",
      "Full-front, partial, or full-body packages",
      "10-year manufacturer warranty",
      "Hydrophobic surface for easy cleaning",
      "XPEL, 3M, and SunTek films available",
    ],
    process: [
      { step: "Consultation", text: "We assess your vehicle's paint condition and discuss coverage options tailored to your driving habits." },
      { step: "Preparation", text: "Full wash, clay bar decontamination, and paint correction on target panels before film application." },
      { step: "Installation", text: "Precision-cut film applied in a controlled environment with zero dust contamination." },
      { step: "Inspection", text: "Final quality check under multiple light angles. Every edge sealed, every bubble eliminated." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1603584173870-7f23fdae1b7a?w=600&q=80`,
      `${UNSPLASH}/photo-1618843479313-40f8afb4b4d8?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
    ],
  },
  "ceramic-coating": {
    num: "02",
    title: "Ceramic Coating",
    sub: "Showroom Shine That Endures",
    hero: `${UNSPLASH}/photo-1618843479313-40f8afb4b4d8?w=1400&q=80`,
    img: `/ceramic.webp`,
    desc: "Professional-grade nano-ceramic coatings bond to your paintwork at a molecular level.",
    longDesc: "Creating a semi-permanent layer of protection against UV degradation, oxidation, bird droppings, water spots, and light scratches. We prep every panel to perfection before application, and cure the coating under controlled conditions for maximum durability. Our ceramic packages range from single-layer daily-driver protection to multi-layer show-car finishes.",
    features: [
      "9H hardness nano-ceramic formula",
      "Full paint decontamination prep",
      "Wheel face and brake caliper coating",
      "5-year protection warranty",
      "Graphene-infused upgrade available",
      "Interior ceramic coating option",
    ],
    process: [
      { step: "Wash & Decontamination", text: "Multi-stage wash, iron removal, clay bar treatment to strip all embedded contaminants." },
      { step: "Paint Correction", text: "Machine polish to remove swirl marks, scratches, and oxidation — restoring factory clarity." },
      { step: "Coating Application", text: "Nano-ceramic applied panel by panel in a temperature-controlled bay for even bonding." },
      { step: "Curing", text: "IR lamp assisted cure followed by 24-hour ambient cure before vehicle release." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1618843479313-40f8afb4b4d8?w=600&q=80`,
      `${UNSPLASH}/photo-1603584173870-7f23fdae1b7a?w=600&q=80`,
      `${UNSPLASH}/photo-1542362567-b07e54358753?w=600&q=80`,
    ],
  },
  dashcams: {
    num: "03",
    title: "Dashcams",
    sub: "Professional Hardwired Setup",
    hero: `${UNSPLASH}/photo-1489824904134-891ab64532f1?w=1400&q=80`,
    img: `/dashcam.webp`,
    desc: "Protect yourself on the road with a professionally installed dashcam.",
    longDesc: "We hardwire front and rear cameras with clean, hidden cable routing through your headliner and trim panels. Parking mode enabled so your camera stays active even when you walk away. We carry top brands including BlackVue, Thinkware, and Viofo. Every install is backed by our workmanship guarantee — no loose cables, no visible wires, no compromises.",
    features: [
      "Front and rear camera installation",
      "Hardwired with parking mode",
      "Clean hidden cable routing",
      "BlackVue, Thinkware, Viofo brands",
      "Cloud-ready and GPS enabled",
      "Battery protection cutoff system",
    ],
    process: [
      { step: "Camera Selection", text: "We help you choose the right camera based on your budget, vehicle, and recording needs." },
      { step: "Hardwire Setup", text: "Direct fuse box connection with voltage cutoff to protect your battery during parking mode." },
      { step: "Cable Routing", text: "Every cable hidden behind headliner, A-pillar, and trim panels — zero visible wiring." },
      { step: "Testing", text: "Full system test including parking mode, GPS lock, cloud connectivity, and playback quality." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1489824904134-891ab64532f1?w=600&q=80`,
      `${UNSPLASH}/photo-1549399542-7e3f8b79c341?w=600&q=80`,
      `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=600&q=80`,
    ],
  },
  carplay: {
    num: "04",
    title: "CarPlay Integration",
    sub: "Factory-Fit Apple CarPlay",
    hero: `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=1400&q=80`,
    img: `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=800&q=80`,
    desc: "Factory-fit Apple CarPlay installation with clean wiring and seamless integration.",
    longDesc: "A modern cockpit that looks OEM from day one. Our technicians route every cable invisibly through factory channels, delivering a finished result indistinguishable from a factory-optioned system. We support both wireless and wired CarPlay modules, Android Auto compatible head units, and full steering wheel control retention.",
    features: [
      "OEM-quality wiring and integration",
      "Wireless CarPlay available",
      "Android Auto compatible units",
      "Steering wheel control retention",
      "Reverse camera integration",
      "Factory amplifier retention",
    ],
    process: [
      { step: "Vehicle Assessment", text: "Check existing head unit compatibility and determine the best integration path for your vehicle." },
      { step: "Unit Installation", text: "Dash trim removal, module or head unit install, and factory connector adaptation." },
      { step: "Wiring Integration", text: "Steering wheel controls, reverse camera signal, and amplifier all retained and connected." },
      { step: "Calibration", text: "System calibration, Bluetooth pairing test, and audio balance tuning." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=600&q=80`,
      `${UNSPLASH}/photo-1549399542-7e3f8b79c341?w=600&q=80`,
      `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=600&q=80`,
    ],
  },
  "ambient-lights": {
    num: "05",
    title: "Ambient Lights",
    sub: "Multi-Zone Custom LED Lighting",
    hero: `${UNSPLASH}/photo-1776639520962-dad59bd15197?w=1400&q=80`,
    img: `${UNSPLASH}/photo-1776639520962-dad59bd15197?w=800&q=80`,
    desc: "Multi-zone custom LED lighting with smart colour control.",
    longDesc: "Set the mood, sync with music, and transform your interior into something extraordinary. Available in 64+ colour options with app control, our ambient light kits are fitted with factory-level precision and zero visible wiring. From subtle accent glow to full immersive lighting — your car, your atmosphere.",
    features: [
      "64+ colour options via app",
      "Music sync mode",
      "Zero visible wiring install",
      "Door, footwell, and dash zones",
      "OEM-style integration",
      "Brightness and zone control",
    ],
    process: [
      { step: "Design Consultation", text: "Choose your zones, colours, and control preferences. We plan the full layout with you." },
      { step: "Trim Removal", text: "Careful disassembly of door panels, dash trim, and footwell covers for LED placement." },
      { step: "LED Installation", text: "LEDs positioned and secured in each zone with hidden wiring routed through factory channels." },
      { step: "App Setup", text: "Controller installed, app paired, zones calibrated, and music sync tested." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1776639520962-dad59bd15197?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
      `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=600&q=80`,
    ],
  },
  "wheel-lights": {
    num: "06",
    title: "Wheel Lights",
    sub: "Unmissable Day or Night",
    hero: `${UNSPLASH}/photo-1615775918890-040745dd38d5?w=1400&q=80`,
    img: `${UNSPLASH}/photo-1615775918890-040745dd38d5?w=800&q=80`,
    desc: "Vibration-proof, weather-resistant LED kits that make your rims unmissable.",
    longDesc: "Day or night, rain or shine — these kits are built to last. Each kit is balanced to avoid any wheel wobble, rated IP67 for waterproofing, and designed to last the full life of your tyres without attention. Multiple colour and flash modes let you match your mood or your build's theme.",
    features: [
      "IP67 waterproof rated",
      "Balanced for zero vibration",
      "Multiple colour and flash modes",
      "Easy removal for tyre changes",
      "12-month warranty included",
      "App-controlled colour selection",
    ],
    process: [
      { step: "Wheel Fitment Check", text: "Measure clearance and confirm compatibility with your wheel size and brake setup." },
      { step: "LED Mounting", text: "LEDs mounted and balanced on each wheel with vibration-dampening hardware." },
      { step: "Wiring", text: "Waterproof connections routed through wheel wells with quick-disconnect for tyre changes." },
      { step: "Calibration", text: "Colour modes set, brightness adjusted, and road test for vibration-free operation." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1615775918890-040745dd38d5?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
      `${UNSPLASH}/photo-1542362567-b07e54358753?w=600&q=80`,
    ],
  },
  starlights: {
    num: "07",
    title: "Starlights",
    sub: "Your Private Galaxy Every Drive",
    hero: `${UNSPLASH}/photo-1707085301609-10a63d3f0a8e?w=1400&q=80`,
    img: `${UNSPLASH}/photo-1707085301609-10a63d3f0a8e?w=800&q=80`,
    desc: "Thousands of hand-placed fibre-optic LEDs installed in your headliner.",
    longDesc: "Create a breathtaking starfield effect across the entire roof. Each fibre is individually placed and trimmed flush with the headliner fabric, giving an OEM appearance with an otherworldly result. Choose from pure white starfields to full RGB twinkle effects with custom constellation layouts.",
    features: [
      "Hand-placed fibre-optic strands",
      "Twinkle effect with RGB controller",
      "Full headliner or partial panel",
      "No visible hardware or wiring",
      "Custom constellation layouts available",
      "Shooting star effect upgrade",
    ],
    process: [
      { step: "Headliner Removal", text: "Full headliner drop in a clean bay. Fabric prepped for fibre-optic threading." },
      { step: "Fibre Placement", text: "Each strand individually threaded through the headliner and trimmed flush with the fabric." },
      { step: "Light Engine Install", text: "LED light engine mounted behind the headliner with controller and power wiring hidden." },
      { step: "Reinstallation", text: "Headliner refitted, all clips secured, controller tested with all modes and brightness levels." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1707085301609-10a63d3f0a8e?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
      `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=600&q=80`,
    ],
  },
  tires: {
    num: "08",
    title: "Tire Services",
    sub: "Precision Mounting and Balancing",
    hero: `${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=1400&q=80`,
    img: `/tire.webp`,
    desc: "Certified technicians using state-of-the-art mounting and balancing equipment.",
    longDesc: "Every tyre is fitted to OEM torque specifications. We handle everything from economy commuters to exotic supercars, with the same obsessive attention to detail on every single job. Road force balancing available for vehicles with persistent vibration issues. TPMS reset and valve stem inspection included with every service.",
    features: [
      "Computer spin balancing on all axles",
      "OEM torque spec compliance",
      "Road force balancing available",
      "Valve stem inspection and replacement",
      "TPMS reset and calibration",
      "Seasonal tire storage available",
    ],
    process: [
      { step: "Inspection", text: "Tyre condition, tread depth, and sidewall integrity checked before any work begins." },
      { step: "Mounting", text: "Tyres mounted on a low-profile-safe machine with bead lubricant for damage-free installation." },
      { step: "Balancing", text: "Computer spin balance on every wheel. Road force balance available for sensitive vehicles." },
      { step: "Torque & TPMS", text: "Lug nuts torqued to OEM spec. TPMS sensors reset and calibrated." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=600&q=80`,
      `${UNSPLASH}/photo-1549399542-7e3f8b79c341?w=600&q=80`,
      `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=600&q=80`,
    ],
  },
  tint: {
    num: "09",
    title: "Ceramic Tint",
    sub: "99% UV Block, Zero Signal Interference",
    hero: `${UNSPLASH}/photo-1603386329225-868f9b1ee6c9?w=1400&q=80`,
    img: `/tint.webp`,
    desc: "Ceramic and carbon window films that block up to 99% of UV radiation.",
    longDesc: "Dramatically reduce cabin heat without compromising visibility or signal. We cut every film on-site using plotted templates for a perfect fit, applied by hand in a dust-controlled environment. Legal VLT levels matched for every region. Our films carry a lifetime delamination warranty and maintain optical clarity for the life of the vehicle.",
    features: [
      "Ceramic and carbon film options",
      "99% UV block on all films",
      "Heat rejection up to 65%",
      "Plotted template precision cutting",
      "Lifetime delamination warranty",
      "Legal VLT compliance guaranteed",
    ],
    process: [
      { step: "Film Selection", text: "Choose ceramic or carbon film. We confirm legal VLT for your province and discuss shade preferences." },
      { step: "Template Cutting", text: "Computer-plotted templates cut for your exact make, model, and year — zero guesswork." },
      { step: "Surface Prep", text: "Glass cleaned and decontaminated in a dust-controlled environment before application." },
      { step: "Application", text: "Film applied by hand, squeegeed for zero bubbles, edges heat-sealed for permanent adhesion." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1603386329225-868f9b1ee6c9?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
      `${UNSPLASH}/photo-1542362567-b07e54358753?w=600&q=80`,
    ],
  },
  "tail-lights": {
    num: "10",
    title: "Tail Lights",
    sub: "Bold Smoked OEM-Quality Finish",
    hero: `${UNSPLASH}/photo-1544829099-b9a0c07fad1a?w=1400&q=80`,
    img: `/light.webp`,
    desc: "Smoked or custom-tinted tail lights with an OEM-quality finish.",
    longDesc: "A bold, distinctive rear presence that turns heads everywhere. Applied using professional-grade tint films or custom vinyl overlays, finished with a clear protective layer for longevity in all weather conditions. Fully reversible — no permanent modification to your vehicle's lenses.",
    features: [
      "Smoked, red, or custom tint options",
      "OEM-quality film application",
      "UV-protected clear coat finish",
      "Reversible process — no damage",
      "Pair with full exterior tint package",
      "Custom gradient options available",
    ],
    process: [
      { step: "Shade Selection", text: "Choose your tint darkness and colour. We show samples on your actual tail lights before committing." },
      { step: "Surface Prep", text: "Lenses cleaned, degreased, and prepped for perfect film adhesion." },
      { step: "Film Application", text: "Professional-grade tint film applied with heat forming for a seamless, bubble-free finish." },
      { step: "Clear Coat", text: "UV-protective clear layer applied over the film for long-term durability and gloss." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1544829099-b9a0c07fad1a?w=600&q=80`,
      `${UNSPLASH}/photo-1603584173870-7f23fdae1b7a?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
    ],
  },
  protection: {
    num: "11",
    title: "Car Protection",
    sub: "Complete Exterior and Interior Defence",
    hero: `${UNSPLASH}/photo-1618843479313-40f8afb4b4d8?w=1400&q=80`,
    img: `/protect.webp`,
    desc: "Complete exterior and interior protection packages for all-year defence.",
    longDesc: "From a single panel touch-up to a full multi-stage correction and ceramic coating, our protection packages keep your vehicle looking factory-fresh in every season. Paint correction, sealants, interior fabric guard, leather conditioning, and engine bay detailing — all under one roof.",
    features: [
      "Single and multi-stage paint correction",
      "Sealant and wax protection options",
      "Interior fabric and leather guard",
      "Engine bay detailing available",
      "Bundled PPF and ceramic packages",
      "Seasonal maintenance plans",
    ],
    process: [
      { step: "Assessment", text: "Full paint depth readings and condition report. We identify every defect before quoting." },
      { step: "Decontamination", text: "Multi-stage wash, iron fallout removal, clay bar, and tar spot removal." },
      { step: "Correction", text: "Machine compound and polish — single or multi-stage depending on paint condition." },
      { step: "Protection", text: "Sealant, wax, or ceramic applied. Interior treated. Full vehicle detailed before handover." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1618843479313-40f8afb4b4d8?w=600&q=80`,
      `${UNSPLASH}/photo-1603584173870-7f23fdae1b7a?w=600&q=80`,
      `${UNSPLASH}/photo-1542362567-b07e54358753?w=600&q=80`,
    ],
  },
  custom: {
    num: "12",
    title: "Custom Upgrades",
    sub: "Vinyl Wraps, Blackouts, and More",
    hero: `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=1400&q=80`,
    img: `/upg.webp`,
    desc: "Vinyl wraps, logo blackouts, full interior makeovers.",
    longDesc: "If you can imagine it for your build, we can execute it. Our custom shop handles everything from partial accent wraps to full-vehicle colour changes, chrome deletes, and bespoke interior retrimming. Every project gets a dedicated consultation to plan materials, colour, and finish before any work begins.",
    features: [
      "Full and partial vinyl wrap",
      "Chrome delete and blackout packages",
      "Custom interior retrim",
      "Logo and emblem blackout",
      "Colour-change consultation included",
      "3M, Avery, and Inozetek films",
    ],
    process: [
      { step: "Consultation", text: "Design session to choose materials, colours, coverage area, and expected finish." },
      { step: "Surface Prep", text: "Full wash, decontamination, and panel prep. Any existing damage addressed before wrapping." },
      { step: "Application", text: "Film applied with heat guns and squeegees for a bubble-free, crease-free finish on every panel." },
      { step: "Post-Heat & Trim", text: "All edges post-heated for permanent adhesion. Excess trimmed. Final inspection under show lights." },
    ],
    gallery: [
      `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=600&q=80`,
      `${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=600&q=80`,
      `${UNSPLASH}/photo-1549399542-7e3f8b79c341?w=600&q=80`,
    ],
  },
};

/* ── All slugs for "Next / Prev" navigation ── */
const slugOrder = ["ppf","ceramic-coating","dashcams","carplay","ambient-lights","wheel-lights","starlights","tires","tint","tail-lights","protection","custom"];

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const s = services[slug];
  if (!s) notFound();

  const currentIdx = slugOrder.indexOf(slug);
  const prevSlug = currentIdx > 0 ? slugOrder[currentIdx - 1] : null;
  const nextSlug = currentIdx < slugOrder.length - 1 ? slugOrder[currentIdx + 1] : null;

  return (
    <main style={{ background: "#080808", paddingTop: "100px" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "60vh", minHeight: "400px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.hero} alt={s.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.18) saturate(1.2)" }}
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(8,8,8,0.95) 40%,rgba(8,8,8,0.4) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)" }} />

        <div style={{ position: "relative", padding: "0 60px", zIndex: 2, maxWidth: "800px" }} className="hero-content">
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Orbitron',sans-serif", fontSize: "11px", letterSpacing: "4px", color: "rgba(240,240,240,0.5)", textTransform: "uppercase", textDecoration: "none", marginBottom: "24px", transition: "color .3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e8001d")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,240,240,0.5)")}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All Services
          </Link>

          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "48px", fontWeight: 900, color: "rgba(232,0,29,0.12)", letterSpacing: "4px", marginBottom: "8px" }}>{s.num}</div>

          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "'Orbitron',sans-serif", fontSize: "13px", letterSpacing: "6px", color: "#e8001d", textTransform: "uppercase", marginBottom: "16px" }}>
            <span style={{ width: "28px", height: "1px", background: "#e8001d", display: "block" }} />{s.sub}
          </span>

          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(52px,7vw,100px)", lineHeight: 0.9, color: "#f0f0f0", letterSpacing: "2px", marginBottom: "20px" }}>
            {s.title.toUpperCase()}
          </h1>

          <p style={{ fontSize: "18px", color: "rgba(240,240,240,0.8)", lineHeight: 1.85, maxWidth: "500px" }}>{s.desc}</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ padding: "100px 60px", maxWidth: "1400px", margin: "0 auto" }} className="detail-section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="detail-grid">

          {/* Left — image + description */}
          <div>
            <div style={{ position: "relative", overflow: "hidden", marginBottom: "40px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title}
                style={{ width: "100%", height: "400px", objectFit: "cover", filter: "brightness(0.7) saturate(1.1)" }}
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(232,0,29,0.1),transparent)" }} />
            </div>

            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "36px", color: "#f0f0f0", marginBottom: "16px" }}>ABOUT THIS SERVICE</h2>
            <div style={{ width: "60px", height: "2px", background: "#e8001d", marginBottom: "24px" }} />
            <p style={{ fontSize: "16px", color: "rgba(240,240,240,0.75)", lineHeight: 1.9 }}>{s.longDesc}</p>

            {/* Gallery */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "40px" }}>
              {s.gallery.map((g, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={g} alt={`${s.title} gallery ${i + 1}`}
                  style={{ width: "100%", height: "140px", objectFit: "cover", filter: "brightness(0.6)", transition: "filter .3s" }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "brightness(0.85)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "brightness(0.6)")}
                  onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              ))}
            </div>
          </div>

          {/* Right — features + process */}
          <div>
            {/* Features */}
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", padding: "40px", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color: "#f0f0f0", marginBottom: "24px" }}>WHAT IS INCLUDED</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "rgba(240,240,240,0.8)" }}>
                    <span style={{ width: "22px", height: "22px", border: "1px solid #e8001d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#e8001d" strokeWidth="1.5"><path d="M2 5 L4 7 L8 3" /></svg>
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", padding: "40px", marginBottom: "24px" }}>
              <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", color: "#f0f0f0", marginBottom: "24px" }}>OUR PROCESS</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {s.process.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "24px", fontWeight: 900, color: "rgba(232,0,29,0.2)", lineHeight: 1, flexShrink: 0, width: "36px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "20px", letterSpacing: "2px", color: "#f0f0f0", marginBottom: "6px" }}>{p.step}</div>
                      <div style={{ fontSize: "14px", color: "rgba(240,240,240,0.55)", lineHeight: 1.8 }}>{p.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/booking" style={{ display: "block", background: "#e8001d", color: "#fff", padding: "18px", fontFamily: "'Orbitron',sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", textAlign: "center", textDecoration: "none", transition: "all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ff0025"; e.currentTarget.style.boxShadow = "0 0 40px rgba(232,0,29,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#e8001d"; e.currentTarget.style.boxShadow = "none"; }}>
              Book This Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "1400px", margin: "0 auto", padding: "0 60px" }} className="detail-section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
          {prevSlug ? (
            <Link href={`/services/${prevSlug}`} style={{ background: "#080808", padding: "40px", textDecoration: "none", transition: "background .3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,0,29,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "10px", letterSpacing: "4px", color: "rgba(240,240,240,0.4)", textTransform: "uppercase", marginBottom: "8px" }}>← Previous</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "24px", color: "#f0f0f0" }}>{services[prevSlug].title}</div>
            </Link>
          ) : <div style={{ background: "#080808" }} />}
          {nextSlug ? (
            <Link href={`/services/${nextSlug}`} style={{ background: "#080808", padding: "40px", textDecoration: "none", textAlign: "right", transition: "background .3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,0,29,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "10px", letterSpacing: "4px", color: "rgba(240,240,240,0.4)", textTransform: "uppercase", marginBottom: "8px" }}>Next →</div>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "24px", color: "#f0f0f0" }}>{services[nextSlug].title}</div>
            </Link>
          ) : <div style={{ background: "#080808" }} />}
        </div>
      </section>

      <style>{`
        @media(max-width:900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .detail-section { padding-left: 24px !important; padding-right: 24px !important; }
          .hero-content { padding: 0 24px !important; }
        }
      `}</style>
    </main>
  );
}