# Modern Industrial Redesign

## What changed
- Light-first industrial design system (white/soft grey surfaces, deep blue ink, teal/green accents)
- Simplified navigation: Home, Products, Industries, About, Resources, Contact + Request a Quote
- New `/resources` hub for markets, partnerships, investments, Safe Solution® documentation requests, privacy, and terms
- Conversion-focused homepage (hero, featured products, why choose us, industries grid, inquiry process/CTA)
- Card-based product catalog and concise product detail templates
- Industry photo/icon grid and challenge/solution detail pages
- Temporary Unsplash application photography stored locally with provenance in `docs/asset-sources.md`
- Intro splash removed from public chrome; admin shell unchanged

## Preserved
- Verified product catalog only (no invented Floor Cleaner / Disinfectant SKUs)
- Safe Solution® evidence safeguards and “available upon request” documentation stance
- Inquiry form field names, validation, honeypot/timing, and `/api/inquiry` payload
- Existing routes and redirects; `/resources` added without removing prior URLs

## QA checklist
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run verify:routes` (with local server)
- `npm run test:e2e`
- `npm run screenshots`
