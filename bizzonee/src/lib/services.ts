import {
  Megaphone,
  Palette,
  Video,
  FileText,
  Share2,
  Bot,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  badgeLabel: string;
  badgeValue: string;
  href?: string;
  tagline: string;
  overview: string[];
  features: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "paid-advertising",
    icon: Megaphone,
    title: "Paid Advertising",
    short: "High-converting Meta, Google & TikTok ads that bring quality leads and maximize ROI.",
    badgeLabel: "ROI",
    badgeValue: "+300%",
    tagline: "Targeted ads that drive leads, sales and lasting growth across every platform.",
    overview: [
      "We create and manage high-performance ad campaigns across Meta, Google and TikTok, combining persuasive messaging, professional visuals and strategic placements to drive leads, sales and lasting growth.",
      "Every campaign is built around clear KPIs, tested relentlessly and scaled only when the numbers prove out. No wasted spend, no guesswork.",
    ],
    features: ["Audience research & targeting", "Ad creative & copy", "Campaign setup & structure", "A/B testing & scaling", "Pixel & conversion tracking", "Weekly spend & CPL reporting"],
  },
  {
    slug: "design-and-branding",
    icon: Palette,
    title: "Design & Branding",
    short: "Eye-catching creatives, brand identity and visual systems that make you stand out.",
    badgeLabel: "Brands",
    badgeValue: "300+",
    tagline: "Designs crafted to reflect your brand and stop the scroll.",
    overview: [
      "From logos and brand guidelines to social media creatives, ad banners and promotional materials, we craft every design to reflect your brand and capture attention.",
      "Consistent, premium visuals across every touchpoint, built around a system, not one-off posts.",
    ],
    features: ["Logo & brand identity", "Brand guidelines & kit", "Social media creatives", "Ad & banner design", "Brochures & print", "Design system"],
  },
  {
    slug: "video-editing-and-production",
    icon: Video,
    title: "Video Editing & Production",
    short: "Professional video editing, production and visual content that engages and converts.",
    badgeLabel: "Views",
    badgeValue: "5M+",
    tagline: "Scroll-stopping content, from raw footage to polished, platform-ready delivery.",
    overview: [
      "We handle the full content production pipeline, from on-site videography and product shoots to professional video editing, motion graphics and platform-ready exports.",
      "Whether it's short-form reels, promotional videos or brand content, we deliver polished visuals that engage your audience and drive action.",
    ],
    features: ["Short-form reels & shorts", "Promotional videos", "On-site videography", "Motion graphics & captions", "Product & brand shoots", "Platform-ready exports"],
  },
  {
    slug: "content-strategy",
    icon: FileText,
    title: "Content Strategy",
    short: "Research-led content planning that tells your brand story and drives measurable growth.",
    badgeLabel: "Engagement",
    badgeValue: "+180%",
    tagline: "Content strategies that do more than fill space, they drive growth.",
    overview: [
      "We build content strategies that do more than just fill space, they tell your brand's story and drive measurable growth across every channel.",
      "Research-led planning, a clear content calendar and messaging that turns attention into action.",
    ],
    features: ["Content audit & research", "Messaging & tone of voice", "Editorial calendar", "Channel strategy", "Performance tracking", "Ongoing optimization"],
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    short: "Convert followers into customers with tested social strategies and consistent content.",
    badgeLabel: "Followers",
    badgeValue: "+320%",
    tagline: "Turn leads into customers and build a brand people follow.",
    overview: [
      "By using tested conversion techniques to turn leads into customers, we help you close more deals and make sure your social presence works as hard as you do.",
      "We handle content, scheduling, community management and reporting so your channels stay consistent, on-brand and growing.",
    ],
    features: ["Content calendar & scheduling", "On-brand post design", "Community management", "Hashtag & growth strategy", "Engagement & DMs", "Monthly performance reports"],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "Ai & Automations",
    short: "Smart automation systems that save time, reduce manual work and scale your business.",
    badgeLabel: "Time Saved",
    badgeValue: "80%",
    tagline: "Work smarter and automate the repetitive so you can focus on what matters.",
    overview: [
      "We build custom AI automation systems that handle your repetitive tasks, from lead follow-up and CRM workflows to content generation, reporting and customer communication.",
      "Whether it's GoHighLevel automations, AI chatbots, or custom-built pipelines, we design systems that run 24/7 so your team doesn't have to.",
    ],
    features: ["AI chatbot setup", "Lead follow-up sequences", "CRM & pipeline automation", "Reporting automation", "Custom AI integrations"],
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

/* Flat string array for dropdowns / selects */
export const SERVICES_LIST = SERVICES.map((s) => s.title);