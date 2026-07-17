# YEG Another World VR — Website

A modern, dark-themed Next.js website for **Another World VR** — Edmonton's premier free-roam virtual reality destination.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Sora (headlines), Inter (body), JetBrains Mono (labels)

## Pages

| Route      | Page         | Description                                    |
|------------|-------------|------------------------------------------------|
| `/`        | Home        | Hero, games library, pricing, events, FAQ      |
| `/about`   | About Us    | Mission, features, team, coming soon           |
| `/gallery` | Gallery     | Image grid with lightbox viewer                |
| `/book`    | Book Now    | Pricing cards + booking form                   |
| `/contact` | Contact     | Contact info + message form                    |

## API Routes

| Endpoint          | Method | Purpose              |
|-------------------|--------|----------------------|
| `/api/contact`    | POST   | Contact form handler |
| `/api/booking`    | POST   | Booking form handler |

> **Note:** API routes currently log to console. Connect to your CRM/email service in production.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Design System

- **Theme:** Ethereal Gateway — Glassmorphism + High-Contrast Bold
- **Primary:** Electric Blue (`#00d4ff` / `#a8e8ff`)
- **Secondary:** Neon Purple (`#d0bcff`)
- **Background:** Deep Void (`#070707`)
- **Glass Panels:** `rgba(17, 24, 39, 0.7)` with `blur(16px)`
- **Grid Overlay:** Cyan dot pattern at 3% opacity

## Contact Details (Live)

- **Phone:** +1 (587) 566-9707
- **Email:** Yeg@another-world.com
- **Contact:** Abel
- **Location:** Edmonton, AB, Canada

## Production TODOs

- [ ] Connect contact/booking forms to CRM (e.g., HubSpot, GoHighLevel)
- [ ] Add payment gateway integration for bookings
- [ ] Set up email service (SendGrid/Mailgun) for form notifications
- [ ] Replace Google Map placeholder with embedded map
- [ ] Add real video background to hero section
- [ ] Set up domain and hosting (DNS access needed)
- [ ] Add analytics (Google Analytics / Meta Pixel)
- [ ] Add social media links when available
