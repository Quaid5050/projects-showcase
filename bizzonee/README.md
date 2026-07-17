# BizzOne Digital — Futuristic Agency Homepage

A premium, animated, single-page homepage for **BizzOne Digital** — dark cyber-futuristic theme with neon purple (#7C3AED) and neon mint (#00FFB3) accents.

## Tech stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom neon theme, glassmorphism utilities)
- **Framer Motion** (scroll reveals, hovers, sliders, page motion)
- **React Three Fiber + drei + Three.js** (interactive 3D hero: glass sphere, orbiting nodes, particle field, mouse parallax)
- **lucide-react** icons

> Note: The brief mentioned GSAP and Shadcn UI. Scroll animations are handled with Framer Motion (whileInView) and all components are hand-built for full control over the custom design, so GSAP and Shadcn were not required. They can be added later without restructuring.

## Run locally
```bash
npm install            # or: npm install --legacy-peer-deps
npm run dev            # http://localhost:3000
npm run build && npm start
```

## Sections (single page)
Navbar · Hero (3D) · Trusted By · Services · Process · Our Work · Results · AI Automation · Testimonials · Final CTA · Footer

## Structure
- `src/app/` — layout (fonts: Sora + Hanken Grotesk, SEO metadata), page, globals
- `src/components/sections/` — all page sections
- `src/components/three/HeroScene.tsx` — the R3F 3D hero
- `src/components/ui/` — NeonButton, Reveal, Counter, SectionLabel
- `src/lib/content.ts` — all editable copy/data (services, process, projects, stats, testimonials)

## Customize
- Colors/glows: `tailwind.config.ts` + `src/app/globals.css`
- Text & numbers: `src/lib/content.ts`
- Logo: replace `public/logo.png`
