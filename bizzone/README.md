# BizzOne Digital — Premium Corporate Website

A modern, high-end corporate website built with **Next.js 15, TypeScript, Tailwind CSS and Framer Motion**. Dark theme, glassmorphism, a cinematic video hero, glow effects and smooth scroll animations — all built around the brand's existing **purple + green** identity.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion 11** — animations, scroll reveals, tilt cards
- **lucide-react** — icons

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
#   → http://localhost:3000

# 3. Production build
npm run build && npm start
```

> Requires Node.js 18.18+ (Node 20+ recommended).
> Fonts are fetched from Google Fonts at build time — ensure network access during `npm run build`.

## Fonts

- **Display / headings:** Bricolage Grotesque
- **Body:** Hanken Grotesk

Both are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as the
CSS variables `--font-display` and `--font-body` (mapped to Tailwind's
`font-display` / `font-sans`). To change fonts, edit only `layout.tsx`.

## Brand Colors

Colors were extracted directly from the company logo and must not be changed.

| Token                 | Hex        | Use            |
| --------------------- | ---------- | -------------- |
| `brand.purple`        | `#8000F0`  | Primary        |
| `brand.purple-bright` | `#A435FF`  | Highlights     |
| `brand.purple-deep`   | `#4A0A8F`  | Depth/shadows  |
| `brand.green`         | `#C6F529`  | Secondary      |
| `brand.green-bright`  | `#D9FF4D`  | Accent glow    |
| `ink` (background)    | `#050308`  | Dark base      |

Defined in `tailwind.config.ts` and as CSS variables in `src/app/globals.css`.

## Project Structure

```
public/
├── logo.png
└── hero-bg.mp4           # cinematic hero background video
src/
├── app/
│   ├── layout.tsx        # Fonts, SEO metadata, background layers
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Theme, glassmorphism, glow & gradient utilities
├── components/
│   ├── Navbar.tsx
│   ├── sections/         # Hero, About, Services, Portfolio, Process,
│   │                     # Stats, Testimonials, Contact, FinalCTA, Footer
│   └── ui/               # CTAButton, Particles, ServiceCard (tilt), Counter,
│                         # Reveal, SectionHeading, LaptopFrame
└── lib/
    └── site.ts           # All editable content (services, projects, etc.)
```

## Hero Video

The hero uses a full-bleed background video at `public/hero-bg.mp4` (muted, looped,
autoplay). To change it, replace that file. Brand purple/green gradient overlays
keep the dark theme and color identity dominant.

## "Who We Are" Laptop — Previous Website Preview

The About section shows a flat laptop mockup (`src/components/ui/LaptopFrame.tsx`)
that embeds the live previous site `https://bizzonedigital.com/` via an `<iframe>`,
scaled to a desktop view.

**If the embedded preview appears blank**, the target site is blocking embedding
via `X-Frame-Options` / CSP `frame-ancestors` (common). In that case, use a
screenshot instead:

1. Save a screenshot to `public/old-site.png`.
2. In `LaptopFrame.tsx`, replace the `<iframe>` with:
   ```tsx
   <img src="/old-site.png" alt="Previous website" className="absolute inset-0 h-full w-full object-cover object-top" />
   ```

## Wiring Up the Contact Form

The form in `src/components/sections/Contact.tsx` simulates submission. To make it
live, create a route handler (e.g. `src/app/api/contact/route.ts`) that sends an
email (Resend, Nodemailer, etc.) and call it inside the `submit()` function.

## Notes

- Fully responsive and SEO-optimized (Open Graph, Twitter cards, metadata).
- The site is statically prerendered for fast loading.
- Almost all copy lives in `src/lib/site.ts` — edit there without touching components.
