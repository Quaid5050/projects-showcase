import {
  Search,
  Share2,
  Target,
  Code2,
  Bot,
  Compass,
  Lightbulb,
  Rocket,
  Workflow,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "BizzOne Digital",
  email: "info@bizzonedigital.com",
  phone: "+1 (289) 412-1562",
  address: "55 Village Centre PI , Mississauga ON L4Z IV9 , Canada",
  googleReviewsUrl: "https://share.google/TRInEQdM2L3d3szfQ",
};

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Web Development", href: "/web-development" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/#contact" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  { icon: Search, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic that converts." },
  { icon: Share2, title: "Social Media Marketing", description: "Engage your audience and build your brand across every platform." },
  { icon: Target, title: "Paid Ads Management", description: "High-converting ads that bring quality leads and maximize ROI." },
  { icon: Code2, title: "Web Development", description: "Fast, modern, responsive websites that turn visitors into customers." },
  { icon: Bot, title: "AI Automation", description: "Automate workflows, save time and scale your business effortlessly." },
];

export interface Step {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS: Step[] = [
  { n: "01", title: "Discovery", description: "We understand your business and audience.", icon: Compass },
  { n: "02", title: "Strategy", description: "We create a customized plan for growth.", icon: Lightbulb },
  { n: "03", title: "Execution", description: "Our experts execute with precision.", icon: Rocket },
  { n: "04", title: "Automation", description: "We automate and streamline for efficiency.", icon: Workflow },
  { n: "05", title: "Scale", description: "We optimize and scale for sustainable growth.", icon: TrendingUp },
];

export interface Project {
  name: string;
  metric: string;
  blurb: string;
  accent: "purple" | "mint";
}

export const PROJECTS: Project[] = [
  { name: "Lead Generation", metric: "+312% Leads", blurb: "A funnel that tripled qualified leads in one quarter.", accent: "purple" },
  { name: "E-Commerce Growth", metric: "+245% Revenue", blurb: "Headless storefront that scaled revenue fast.", accent: "mint" },
  { name: "Brand Awareness", metric: "320% Growth", blurb: "A social-first campaign that exploded reach.", accent: "purple" },
  { name: "AI Systems", metric: "24/7 Automation", blurb: "An automation suite running sales on autopilot.", accent: "mint" },
];

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Websites Built" },
  { value: 1, suffix: "M+", label: "Leads Generated" },
  { value: 250, suffix: "Cr+", prefix: "₹", label: "Revenue Generated" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Mehta", role: "Founder, GrowFast", initials: "RM", quote: "BizzOne Digital transformed our online presence. Their strategy and automation helped us scale like never before." },
  { name: "Sara Khan", role: "CEO, NovaCommerce", initials: "SK", quote: "The most professional team we've worked with. Revenue followed within the first quarter." },
  { name: "David Chen", role: "CMO, PulseCRM", initials: "DC", quote: "From idea to launch faster than anyone we evaluated. Genuinely premium delivery." },
];