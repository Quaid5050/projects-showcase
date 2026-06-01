import { getSiteUrl } from "@/lib/site-url";

export function getRestaurantLogoUrl(logoPath?: string | null): string | null {
  if (!logoPath) return null;
  if (logoPath.startsWith("http")) return logoPath;
  return `${getSiteUrl()}${logoPath}`;
}
