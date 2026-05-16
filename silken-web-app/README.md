# Silken Trading — Premium Automotive Interiors

A modern, premium website for Silken Trading: automotive interior products and professional installation services. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn-style UI** (Radix Accordion, custom components)
- **Framer Motion** (animations)
- **Next Image** (optimized images)
- Static data: JSON files in `/data` (no database)

## Brand Colors

- Primary Gold: `#f9c833`
- Dark Gold Shadow: `#855106`
- Pastel Bright Yellow: `#fffbce`
- Glow Yellow: `#feeb4e`
- Orange Highlight: `#aa4d00`
- Luxury Black: `#070705`

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
/app
  page.tsx          — Home
  layout.tsx        — Root layout (Navbar, Footer)
  globals.css
  /about
  /services         — Services listing
  /services/[slug]   — Service detail (seat covers, visors, mats)
  /products
  /gallery
  /faq
  /contact

/components
  Navbar, Footer, Hero
  ServiceCard, ProductCard, ReviewCard
  BeforeAfterSlider, FAQAccordion, GalleryGrid, CTASection

/data
  products.json, services.json, reviews.json, gallery.json, faqs.json

/public/images
  placeholder.svg
  /products, /services, /gallery — add your images here
```

## Content & Images

- Edit content in `/data/*.json`.
- Place images in `/public/images/` (e.g. `products/`, `services/`, `gallery/`). Use the same paths in the JSON (e.g. `/images/products/seat-cover-1.jpg`).
- Replace the Google Maps embed URL in `/app/contact/page.tsx` with your location.
- Update phone, WhatsApp, and address in `components/Footer.tsx` and `app/contact/page.tsx`.

## Deployment (Vercel)

1. Push the project to GitHub (or connect your repo in Vercel).
2. Import the project in [Vercel](https://vercel.com); use default Next.js settings.
3. Deploy. No environment variables or database are required for the static data setup.

## License

Private — Silken Trading.
