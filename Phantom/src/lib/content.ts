/** Site copy and structured content — adjust as needed for production. */

export const SITE = {
  name: "PAC Phantom Auto Center",
  phone: "905-299-9267",
  phoneHref: "tel:+19052999267",
  email: "info@phantomautocenter.com",
  emailHref: "mailto:info@phantomautocenter.com",
  address: "345 Wyecroft Road, Unit 5 and 6",
  addressLines: ["345 Wyecroft Road", "Unit 5 and 6"],
  /** Replace with real Google Maps embed src when available. */
  mapEmbedPlaceholderNote:
    "TODO: paste Google Maps iframe src for PAC Phantom Auto Center",
  hours: [
    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "By appointment" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/mechanical", label: "Mechanical" },
  { href: "/customizations", label: "Customizations" },
  { href: "/mobile-detailing", label: "Mobile Detailing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const MECHANICAL_SERVICES = [
  {
    id: "general",
    title: "Service & General Repairs",
    description:
      "Diagnostics and repairs executed with OEM discipline and zero compromise on fit and finish.",
    image: "/placeholders/placeholder-mechanical-service.jpg",
    imageAlt: "Placeholder: premium vehicle engine bay for mechanical service",
  },
  {
    id: "tires",
    title: "Tires",
    description:
      "Mounting, balancing, and seasonal swaps with precision torque and road-ready calibration.",
    image: "/placeholders/placeholder-tires.jpg",
    imageAlt: "Placeholder: performance tire and wheel detail",
  },
  {
    id: "brakes",
    title: "Brakes",
    description:
      "Pads, rotors, fluid, and hardware — restored stopping power with clean, silent operation.",
    image: "/placeholders/placeholder-brakes.jpg",
    imageAlt: "Placeholder: brake caliper and rotor close-up",
  },
  {
    id: "oil",
    title: "Oil Changes",
    description:
      "Factory-spec lubricants and filters, documented intervals, and a spotless engine bay hand-off.",
    image: "/placeholders/placeholder-oil-change.jpg",
    imageAlt: "Placeholder: synthetic oil service",
  },
  {
    id: "safety",
    title: "Safety Certification",
    description:
      "Certified safety inspections with transparent reporting and same-roof mechanical correction.",
    image: "/placeholders/placeholder-safety-cert.jpg",
    imageAlt: "Placeholder: vehicle inspection checklist",
  },
] as const;

export const CUSTOMIZATION_SERVICES = [
  {
    id: "wrap",
    title: "Vinyl Wrapping",
    description:
      "Color-shift, satin, gloss, or stealth — film laid cold, tensioned right, edges buried invisible.",
    image: "/placeholders/placeholder-vinyl-wrap.jpg",
    imageAlt: "Placeholder: vinyl-wrapped sports car panel",
    category: "Wraps" as const,
  },
  {
    id: "detail",
    title: "Detailing",
    description:
      "Multi-stage interior and exterior rituals that reset glass, leather, and paint to showroom clarity.",
    image: "/placeholders/placeholder-detailing.jpg",
    imageAlt: "Placeholder: luxury interior detailing",
    category: "Detailing" as const,
  },
  {
    id: "correction",
    title: "Paint Correction",
    description:
      "Defect mapping, measured clear coat removal, and jeweled finishes under controlled lighting.",
    image: "/placeholders/placeholder-paint-correction.jpg",
    imageAlt: "Placeholder: paint correction polishing",
    category: "Paint Correction" as const,
  },
  {
    id: "ambient",
    title: "Ambient Lighting",
    description:
      "OEM-grade routing, diffusion, and control — atmosphere without aftermarket glare.",
    image: "/placeholders/placeholder-ambient-lighting.jpg",
    imageAlt: "Placeholder: ambient cabin lighting",
    category: "Lighting" as const,
  },
  {
    id: "starlight",
    title: "Starlights",
    description:
      "Constellation headliners with fiber density and twinkle curves tuned to your cabin geometry.",
    image: "/placeholders/placeholder-starlight-headliner.jpg",
    imageAlt: "Placeholder: starlight headliner ceiling",
    category: "Lighting" as const,
  },
  {
    id: "dashcam",
    title: "Dashcams",
    description:
      "Clean cable paths, fused power, parking modes, and app integration you will actually use.",
    image: "/placeholders/placeholder-dashcam-install.jpg",
    imageAlt: "Placeholder: dashcam windshield install",
    category: "Lighting" as const,
  },
  {
    id: "carplay",
    title: "CarPlay Installs",
    description:
      "Factory-integrated feel: screens, modules, and steering controls that behave like they were born there.",
    image: "/placeholders/placeholder-carplay-install.jpg",
    imageAlt: "Placeholder: in-dash Apple CarPlay screen",
    category: "Lighting" as const,
  },
  {
    id: "ppf",
    title: "Paint Protection Film",
    description:
      "Self-healing film, wrapped edges, and invisible seams — armor without altering your paint story.",
    image: "/placeholders/placeholder-ppf.jpg",
    imageAlt: "Placeholder: PPF installation on front clip",
    category: "PPF" as const,
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    description:
      "Multi-layer ceramic stacks with cure windows respected — gloss that reads liquid under streetlights.",
    image: "/placeholders/placeholder-ceramic-coating.jpg",
    imageAlt: "Placeholder: ceramic coating water beading",
    category: "Ceramic Coating" as const,
  },
] as const;

export type GalleryCategory =
  | "All"
  | "Wraps"
  | "Detailing"
  | "Paint Correction"
  | "Lighting"
  | "PPF"
  | "Ceramic Coating";

export const GALLERY_FILTERS: GalleryCategory[] = [
  "All",
  "Wraps",
  "Detailing",
  "Paint Correction",
  "Lighting",
  "PPF",
  "Ceramic Coating",
];

export const GALLERY_ITEMS: {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
}[] = [
  {
    id: "g1",
    title: "Satin Stealth Wrap",
    category: "Wraps",
    image: "/placeholders/gallery-placeholder-wrap-01.jpg",
    alt: "Placeholder gallery: satin black vehicle wrap",
  },
  {
    id: "g2",
    title: "Interior Reset",
    category: "Detailing",
    image: "/placeholders/gallery-placeholder-detail-01.jpg",
    alt: "Placeholder gallery: detailed leather interior",
  },
  {
    id: "g3",
    title: "Two-Step Correction",
    category: "Paint Correction",
    image: "/placeholders/gallery-placeholder-correction-01.jpg",
    alt: "Placeholder gallery: paint correction reflection",
  },
  {
    id: "g4",
    title: "Constellation Headliner",
    category: "Lighting",
    image: "/placeholders/gallery-placeholder-starlight-01.jpg",
    alt: "Placeholder gallery: starlight headliner",
  },
  {
    id: "g5",
    title: "Full Front PPF",
    category: "PPF",
    image: "/placeholders/gallery-placeholder-ppf-01.jpg",
    alt: "Placeholder gallery: paint protection film",
  },
  {
    id: "g6",
    title: "Ceramic Stack",
    category: "Ceramic Coating",
    image: "/placeholders/gallery-placeholder-ceramic-01.jpg",
    alt: "Placeholder gallery: ceramic coating gloss",
  },
  {
    id: "g7",
    title: "Gloss Flip Wrap",
    category: "Wraps",
    image: "/placeholders/gallery-placeholder-wrap-02.jpg",
    alt: "Placeholder gallery: color flip vinyl wrap",
  },
  {
    id: "g8",
    title: "Engine Bay Detail",
    category: "Detailing",
    image: "/placeholders/gallery-placeholder-detail-02.jpg",
    alt: "Placeholder gallery: engine bay detailing",
  },
];

export const FEATURED_CUSTOM = [
  {
    id: "fc-wrap",
    title: "Vinyl Wrapping",
    tag: "Film · Edge · Finish",
    image: "/placeholders/featured-placeholder-wrap.jpg",
    alt: "Placeholder: dramatic vinyl wrap hero shot",
  },
  {
    id: "fc-light",
    title: "Ambient Lighting",
    tag: "Cabin Architecture",
    image: "/placeholders/featured-placeholder-ambient.jpg",
    alt: "Placeholder: ambient interior lighting",
  },
  {
    id: "fc-star",
    title: "Starlights",
    tag: "Headliner Constellations",
    image: "/placeholders/featured-placeholder-starlight.jpg",
    alt: "Placeholder: starlight ceiling",
  },
  {
    id: "fc-ppf",
    title: "PPF",
    tag: "Invisible Armor",
    image: "/placeholders/featured-placeholder-ppf-wide.jpg",
    alt: "Placeholder: PPF treated front end",
  },
  {
    id: "fc-ceramic",
    title: "Ceramic Coating",
    tag: "Depth · Defense",
    image: "/placeholders/featured-placeholder-ceramic-wide.jpg",
    alt: "Placeholder: ceramic coated paint depth",
  },
  {
    id: "fc-carplay",
    title: "CarPlay Installs",
    tag: "Factory Rhythm",
    image: "/placeholders/featured-placeholder-carplay.jpg",
    alt: "Placeholder: CarPlay dashboard integration",
  },
] as const;

export const DETAILING_PACKAGES = [
  {
    id: "essential",
    name: "Essential Mobile Detail",
    blurb: "Exterior wash, wheels, windows, and light interior refresh.",
  },
  {
    id: "interior",
    name: "Interior Deep Clean",
    blurb: "Steam, extraction, leather conditioning, and glass to spec.",
  },
  {
    id: "exterior",
    name: "Exterior Refresh",
    blurb: "Decon, foam, hand wash, and gloss-enhancing sealant.",
  },
  {
    id: "full",
    name: "Full Phantom Detail",
    blurb: "Interior + exterior multi-stage — our signature driveway reset.",
  },
  {
    id: "ceramic-addon",
    name: "Premium Ceramic Add-On",
    blurb: "Adds durable ceramic topping to any booked detail package.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Do you offer mobile detailing?",
    a: "Yes. We bring Phantom-level detailing to your driveway with packaged services, scheduled windows, and the same materials discipline you would expect in-shop.",
  },
  {
    q: "Can clients book a time slot online?",
    a: "Use the mobile detailing booking flow on this site to request a slot. Our team confirms availability and coordinates access. Backend calendar and payments can be wired when you are ready.",
  },
  {
    q: "Do you provide safety certification?",
    a: "Yes. Safety certification is available with transparent documentation and corrective work handled in-house when needed.",
  },
  {
    q: "Do you install dashcams and CarPlay?",
    a: "Both. Dashcam routing is fused and concealed; CarPlay integrations are tailored to your vehicle platform for OEM-like behavior.",
  },
  {
    q: "Do you offer PPF and ceramic coating?",
    a: "We offer full PPF programs and multi-layer ceramic systems with cure protocols respected for lasting gloss and protection.",
  },
  {
    q: "Do clients need to bring the vehicle in for customization work?",
    a: "Most customization and protection work is performed at our facility for controlled lighting and climate. Mobile detailing is the exception — we come to you.",
  },
] as const;

export const TESTIMONIALS_PLACEHOLDER = [
  {
    id: "t1",
    quote:
      "Placeholder review — replace with a real client story about mechanical work and finish quality.",
    name: "Client A.",
    vehicle: "Placeholder vehicle",
  },
  {
    id: "t2",
    quote:
      "Placeholder review — replace with feedback on PPF edges, lighting install cleanliness, and communication.",
    name: "Client B.",
    vehicle: "Placeholder vehicle",
  },
  {
    id: "t3",
    quote:
      "Placeholder review — replace with mobile detailing experience and booking convenience.",
    name: "Client C.",
    vehicle: "Placeholder vehicle",
  },
] as const;
