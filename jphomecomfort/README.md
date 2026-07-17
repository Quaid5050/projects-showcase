# JP Home Comfort  Next.js Website

Professional HVAC website with brand-matched design (Red + Navy + Cyan theme from logo).

## Pages

| Route       | Page          | Description                                      |
|-------------|---------------|--------------------------------------------------|
| `/`         | Home          | Hero, Quick Booking Bar, Services, Why Us, Reviews, Areas teaser |
| `/services` | Services      | 6 detailed service sections with features & CTAs |
| `/about`    | About Us      | Company story, stats, values, trusted brands     |
| `/areas`    | Service Areas | 16 GTA cities with neighborhoods                 |
| `/contact`  | Contact       | Contact info cards + full contact form            |

## Email System

| Endpoint        | Trigger               | Sends To                     |
|-----------------|----------------------|------------------------------|
| `/api/booking`  | Quick Booking Bar     | Business email + Customer confirmation |
| `/api/contact`  | Contact Page Form     | Business email + Customer confirmation |

Both use **Gmail App Password** via Nodemailer.

## Brand Colors (from logo)

- **Red**: `#E31E24`  "JP HOME", roof accent, CTAs
- **Navy**: `#1B2A4A`  "COMFORT", backgrounds, text
- **Cyan**: `#0099D6`  "HEATING | COOLING | WATER SYSTEMS", secondary

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Nodemailer (Gmail App Password)
- Google Fonts: Raleway + Open Sans

## Setup

```bash
# 1. Install
npm install

# 2. Configure email
cp .env.local.example .env.local
# Edit .env.local with your Gmail credentials

# 3. Run
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Customization

- **Phone**: Search `647-948-5859`  replace everywhere
- **Email**: Update `.env.local` + search `info@jphomecomfort.ca`
- **Colors**: Edit `tailwind.config.ts` + `globals.css`
- **Services**: Edit `src/components/HomeServices.tsx` + `src/app/services/page.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Areas**: Edit `src/app/areas/page.tsx`
- **Logo SVG**: Edit `src/components/Logo.tsx`

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Brand styles
│   ├── services/page.tsx   # Services page
│   ├── about/page.tsx      # About page
│   ├── areas/page.tsx      # Service Areas page
│   ├── contact/page.tsx    # Contact page
│   └── api/
│       ├── booking/route.ts  # Booking email API
│       └── contact/route.ts  # Contact email API
├── components/
│   ├── Header.tsx          # Nav with brand logo
│   ├── Footer.tsx          # Footer with CTA
│   ├── Logo.tsx            # SVG Logo component
│   ├── Hero.tsx            # Homepage hero
│   ├── QuickBooking.tsx    # Short booking bar
│   ├── HomeServices.tsx    # Services grid
│   ├── WhyChooseUs.tsx     # Why choose us section
│   ├── Testimonials.tsx    # Reviews carousel
│   └── PageHeader.tsx      # Reusable page header
```
