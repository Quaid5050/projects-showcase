/** Production / preview origin for metadata, JSON-LD, and OG (set `NEXT_PUBLIC_SITE_URL` on Vercel). */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return vercel.startsWith("http") ? vercel : `https://${vercel}`;
  return SITE.url;
}

export const SITE = {
  name: "Aerofix Handyman Services",
  shortName: "Aerofix",
  tagline: "Professional handyman and home repair in Toronto.",
  url: "https://aerofixhandyman.ca",
  phoneDisplay: "+1 437 256 1028",
  phoneTel: "+14372561028",
  email: "vnecconstruction@gmail.com",
  contactPerson: "Esdras Noe",
  address: {
    street: "3284 A Dundas St W",
    city: "Old Toronto",
    region: "ON",
    postal: "M6P 2A4",
    country: "Canada",
    full: "3284 A Dundas St W, Old Toronto, ON M6P 2A4, Canada",
  },
  serviceArea: "Toronto and surrounding areas",
  hours: {
    weekdays: "Monday–Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 4:00 PM",
    sunday: "Sunday: Closed",
  },
  logoPath: "/images/aerofix-logo.png",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/offers", label: "Offers" },
  { href: "/upload-project", label: "Upload Project" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_OPTIONS = [
  "Home repair",
  "Installation",
  "Painting",
  "Property maintenance",
  "Multiple / not sure",
] as const;

export const DURATION_OPTIONS = [
  "Under 2 hours",
  "2–4 hours",
  "Half day",
  "Full day",
  "Custom / not sure",
] as const;
