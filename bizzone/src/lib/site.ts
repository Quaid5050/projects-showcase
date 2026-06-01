import {
  Code2,
  Smartphone,
  Database,
  Workflow,
  Palette,
  Megaphone,
  Search,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "BizzOne Digital",
  tagline: "Digital Growth. Engineered.",
  email: "hello@bizzonedigital.com",
  phone: "+1 (555) 012-3456",
  address: "Innovation Hub, Suite 400, Global Tech Park",
  website: "https://bizzonedigital.com",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance, scalable websites and web apps built with modern frameworks and clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps designed for speed, retention and a flawless user experience.",
  },
  {
    icon: Database,
    title: "CRM Solutions",
    description:
      "Custom CRM systems that centralize your leads, automate follow-ups and turn data into revenue.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Workflow automation that removes manual work, syncs your tools and scales your operations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Conversion-focused interfaces with pixel-perfect design systems and intuitive user journeys.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Performance marketing across Meta & Google that drives qualified leads at a predictable cost.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical and content SEO that grows organic traffic and puts your brand in front of buyers.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, updates and rapid support so your digital assets never miss a beat.",
  },
];

export interface Project {
  name: string;
  category: string;
  description: string;
  device: "laptop" | "mobile" | "browser";
  accent: "purple" | "green";
  url: string;
}

export const PROJECTS: Project[] = [
  {
    name: "NovaCommerce",
    category: "E-commerce Platform",
    description:
      "A headless storefront with 3D product previews that lifted conversion by 47%.",
    device: "laptop",
    accent: "purple",
    url: "#",
  },
  {
    name: "PulseCRM",
    category: "SaaS / CRM",
    description:
      "An all-in-one CRM dashboard automating the full lead-to-deal pipeline.",
    device: "browser",
    accent: "green",
    url: "#",
  },
  {
    name: "FitFlow",
    category: "Mobile App",
    description:
      "A fitness companion app with live coaching and gamified progress tracking.",
    device: "mobile",
    accent: "purple",
    url: "#",
  },
  {
    name: "Lumen Studio",
    category: "Brand & Web",
    description:
      "A cinematic agency website with WebGL transitions and motion storytelling.",
    device: "laptop",
    accent: "green",
    url: "#",
  },
  {
    name: "CartIQ",
    category: "Marketing Automation",
    description:
      "Behaviour-driven email & ad automation that doubled retention in one quarter.",
    device: "browser",
    accent: "purple",
    url: "#",
  },
  {
    name: "Orbit Wallet",
    category: "FinTech App",
    description:
      "A secure mobile wallet with biometric auth and instant cross-border payments.",
    device: "mobile",
    accent: "green",
    url: "#",
  },
];

export interface Step {
  n: string;
  title: string;
  description: string;
}

export const PROCESS: Step[] = [
  { n: "01", title: "Discovery", description: "We learn your goals, audience and market to define a clear strategy." },
  { n: "02", title: "Planning", description: "Roadmaps, architecture and scope — aligned before a line of code." },
  { n: "03", title: "Design", description: "Premium UI/UX and design systems crafted around your brand." },
  { n: "04", title: "Development", description: "Clean, scalable engineering with modern, future-proof tooling." },
  { n: "05", title: "Testing", description: "Rigorous QA across devices, performance and security." },
  { n: "06", title: "Launch", description: "Smooth, optimized deployment with zero-downtime release." },
  { n: "07", title: "Support", description: "Ongoing monitoring, growth and proactive maintenance." },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 9, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    company: "NovaCommerce",
    role: "CEO",
    quote:
      "BizzOne rebuilt our entire platform and our revenue followed. The most professional team we have worked with — period.",
    initials: "SM",
  },
  {
    name: "David Chen",
    company: "PulseCRM",
    role: "Founder",
    quote:
      "They translated a vague idea into a polished product faster than anyone we evaluated. Genuinely premium delivery.",
    initials: "DC",
  },
  {
    name: "Amara Okafor",
    company: "Lumen Studio",
    role: "Creative Director",
    quote:
      "The attention to design detail is unreal. Our new site finally matches the quality of our work.",
    initials: "AO",
  },
  {
    name: "Marco Rossi",
    company: "Orbit Wallet",
    role: "CTO",
    quote:
      "Security, speed and a flawless launch. BizzOne is now our long-term engineering partner.",
    initials: "MR",
  },
];

export const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile Application",
  "CRM Solution",
  "Automation",
  "UI/UX Design",
  "Digital Marketing",
  "SEO",
  "Maintenance & Support",
  "Other",
];
