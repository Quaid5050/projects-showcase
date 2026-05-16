/**
 * All on-disk marketing images go under `public/` (served at `/…` in the browser).
 *
 * ─── Brand logo (header, footer, intro) ───
 *   public/branding/pac-phantom-logo.png
 *   Used by: SiteHeader, SiteFooter, IntroLoader (path hardcoded in those components).
 *
 * ─── Hero background (home only) ───
 *   public/placeholders/hero-cinematic-bg.jpg
 *   Used by: HeroSection (`/placeholders/hero-cinematic-bg.jpg`).
 *
 * ─── Before / after slider (home gallery section + /gallery) ───
 *   public/placeholders/before-after-before.jpg   → “before” side (duller / pre-service).
 *   public/placeholders/before-after-after.jpg      → “after” side (corrected / glossy).
 *   Used by: BeforeAfterSlider.tsx
 *
 * ─── Service cards: mechanical + customizations ───
 *   Paths are listed on each item in `src/lib/content.ts`:
 *   - MECHANICAL_SERVICES[].image  → placeholder-mechanical-service.jpg, placeholder-tires.jpg, …
 *   - CUSTOMIZATION_SERVICES[].image → placeholder-vinyl-wrap.jpg, …
 *   Shown on: home `/`, `/services`, `/mechanical`, `/customizations` via ServicesOverview + ServiceCard.
 *
 * ─── Featured customization reel (home) ───
 *   FEATURED_CUSTOM[].image in content.ts → featured-placeholder-*.jpg
 *   Used by: FeaturedCustomizationSection
 *
 * ─── Gallery grid tiles ───
 *   GALLERY_ITEMS[].image in content.ts → gallery-placeholder-*.jpg
 *   Used by: GallerySection (home + `/gallery`).
 *
 * Re-download stock placeholders: `node scripts/download-placeholders.mjs`
 * Replace any file above with your own JPG/WebP; keep the same filename OR update the path in `content.ts`.
 */

export function resolvePlaceholderSrc(logicalPath: string): string {
  if (logicalPath.startsWith("http://") || logicalPath.startsWith("https://")) {
    return logicalPath;
  }
  return logicalPath;
}
