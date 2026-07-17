# Flashchic Photobooth — Website

Luxury photobooth & 360 video booth website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Pages

- `/` — Homepage with hero, services preview, about section, pricing overview, CTA
- `/about` — About Stéphanie & Flashchic story, team values
- `/services` — Detailed service pages (Photobooth, 360 Videobooth, Combo)
- `/pricing` — Full pricing table, additional fees, payment policy
- `/gallery` — Masonry image gallery
- `/booking` — 3-step booking form with email notifications
- `/contact` — Contact form with email notifications

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set up email notifications
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your Gmail credentials:
```
EMAIL_FROM=flashchic84@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=flashchic84@gmail.com
```

**Getting a Gmail App Password:**
1. Go to [Google Account](https://myaccount.google.com) → Security
2. Enable 2-Step Verification
3. Go to Security → App Passwords
4. Create password for "Mail" → copy the 16-character code
5. Paste it as `EMAIL_PASS` (no spaces)

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## Email Notifications

When a visitor submits the **booking form**:
- Owner receives a full booking request email with all event details, estimated total, and deposit amount
- Client receives an auto-reply confirmation with next steps

When a visitor submits the **contact form**:
- Owner receives the message with reply-to set to the sender's email
- Sender receives a confirmation that their message was received

## Deployment

Deploy easily on [Vercel](https://vercel.com):
1. Push code to GitHub
2. Connect repo in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Brand Colors
- Gold: `#d4af37`
- Gold Light: `#f0d060`
- Black: `#0a0a0a`
- Dark: `#111111`

## Fonts
- Display: Cinzel (headings)
- Body: Montserrat (sans-serif)
- Accent: Cormorant Garamond (serif)
