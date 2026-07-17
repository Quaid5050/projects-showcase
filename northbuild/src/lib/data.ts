export const SITE = {
  name: "Northbuilt Door & Dock",
  phone: "226 400 7043",
  phoneFull: "+12264007043",
  email: "northbuiltdoors@gmail.com",
  website: "northbuiltdoors.ca",
  region: "Southwestern Ontario",
  tagline: "Built Strong. Built Local. Built to Last.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "Contemporary", href: "/residential/contemporary" },
      { label: "Carriage House", href: "/residential/carriage-house" },
      { label: "Traditional", href: "/residential/traditional" },
      { label: "Full View & Aluminum", href: "/residential/full-view" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    children: [
      { label: "High Performance Doors", href: "/commercial/high-performance" },
      { label: "Dock Equipment", href: "/commercial/dock-equipment" },
      { label: "Steel Sectional", href: "/commercial/steel-sectional" },
    ],
  },
  {
    label: "Agricultural",
    href: "/agricultural",
    children: [
      { label: "Farm Doors", href: "/agricultural/farm-doors" },
      { label: "Barn Equipment", href: "/agricultural/barn-equipment" },
    ],
  },
  {
    label: "Service & Repairs",
    href: "/services",
    children: [
      { label: "Garage Door Repair", href: "/services/repair" },
      { label: "Spring Replacement", href: "/services/springs" },
      { label: "Opener Service", href: "/services/openers" },
      { label: "Preventative Maintenance", href: "/services/maintenance" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const BRANDS = [
  { name: "Upwardor", logo: "/brands/upwardor.svg" },
  { name: "Richards-Wilcox", logo: "/brands/richards-wilcox.svg" },
  { name: "Garaga", logo: "/brands/garaga.svg" },
  { name: "LiftMaster", logo: "/brands/liftmaster.svg" },
  { name: "Manaras Opera", logo: "/brands/manaras.svg" },
];

export const FEATURES = [
  {
    icon: "shield",
    title: "Quality Materials",
    desc: "Built to handle Canadian weather.",
  },
  {
    icon: "wrench",
    title: "Expert Installation",
    desc: "Installed right the first time.",
  },
  {
    icon: "check-circle",
    title: "Reliable Service",
    desc: "Fast, professional support you can count on.",
  },
  {
    icon: "maple",
    title: "Southwestern Ontario",
    desc: "Local roots. Community focused.",
  },
];

export const SERVICES_GRID = [
  {
    title: "Residential",
    subtitle: "Garage Doors",
    href: "/residential",
    icon: "home",
  },
  {
    title: "Commercial",
    subtitle: "Doors & Dock Equipment",
    href: "/commercial",
    icon: "building",
  },
  {
    title: "Agricultural",
    subtitle: "Doors & Equipment",
    href: "/agricultural",
    icon: "tractor",
  },
  {
    title: "Service & Repairs",
    subtitle: "Fast · Reliable · Professional",
    href: "/services",
    icon: "tools",
  },
];

export const RESIDENTIAL_STYLES = [
  {
    title: "Contemporary",
    desc: "Clean lines and modern designs for a sleek, updated look.",
    href: "/residential/contemporary",
  },
  {
    title: "Carriage House",
    desc: "Timeless charm with classic elegance and detail.",
    href: "/residential/carriage-house",
  },
  {
    title: "Traditional",
    desc: "Versatile designs that suit any home style.",
    href: "/residential/traditional",
  },
  {
    title: "Full View & Aluminum",
    desc: "Modern glass and aluminum options for a bold statement.",
    href: "/residential/full-view",
  },
];

export const CONTACT_SERVICES = [
  { icon: "home", title: "Residential", desc: "Garage doors, openers & home solutions." },
  { icon: "building", title: "Commercial", desc: "High performance doors & dock equipment." },
  { icon: "tractor", title: "Agricultural", desc: "Doors & equipment built for farm life." },
  { icon: "tools", title: "Service & Repairs", desc: "Fast, reliable repairs and maintenance." },
  { icon: "shield", title: "Preventative Maintenance", desc: "Keep your equipment running strong." },
  { icon: "message", title: "General Inquiry", desc: "Questions, partnerships or other requests." },
];
