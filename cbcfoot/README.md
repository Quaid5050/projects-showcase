# CBC Foot Products Ltd. — Next.js Website

## Pages
- `/` — Home page (hero, services overview, about Lance, how it works, testimonials, CTA)
- `/about` — About Lance Colins and the CBC philosophy
- `/services` — Full services list with pricing
- `/why-us` — Why choose CBC (differentiators + comparison table)
- `/contact` — Contact page with form + contact details

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Email (Gmail App Password)

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Then fill in your values in `.env.local`:
```
EMAIL_USER=your-gmail@gmail.com        # Gmail account used to send emails
EMAIL_APP_PASS=xxxx-xxxx-xxxx-xxxx    # 16-character App Password
EMAIL_TO=cbcfoot@live.ca               # Where contact form emails are delivered
```

**How to get a Gmail App Password:**
1. Sign in to your Google Account
2. Go to: https://myaccount.google.com/apppasswords
3. Select "Mail" and your device
4. Copy the 16-character password into `EMAIL_APP_PASS`

> Note: You must have 2-Step Verification enabled on your Google account to generate App Passwords.

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

## Design System
- **Primary colour:** `#1B4332` (Deep Forest Green)
- **Accent colour:** `#D4A017` (Gold)
- **Background:** `#F9F5EF` (Warm Cream)
- **Heading font:** Playfair Display (Google Fonts)
- **Body font:** Lato (Google Fonts)

## Deployment
Deploy on Vercel (recommended):
1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Contact
CBC Foot Products Ltd.  
Lance Colins  
+1 403 259 2474  
cbcfoot@live.ca  
Calgary, Alberta, Canada
