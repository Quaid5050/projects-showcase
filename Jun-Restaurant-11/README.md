# 🍜 Burnaby Palace Restaurant — Online Ordering Website

Production-ready restaurant ordering website built with Next.js 16, MongoDB, Stripe, and Mailgun.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your real keys
```

### 3. Add the logo
Place the restaurant logo at:
```
public/images/logo.png
```

### 4. Add notification sound (optional)
Place an `.mp3` file at:
```
public/sounds/new-order.mp3
```

### 5. Seed the menu (requires MongoDB URI)
```bash
npx tsx seed/seed-menu.ts
```

### 6. Run development server
```bash
npm run dev
```

### 7. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
burnaby-palace/
├── app/
│   ├── page.tsx                     # Home page
│   ├── menu/page.tsx                # Menu page
│   ├── cart/page.tsx                # Cart + checkout form
│   ├── success/page.tsx             # Payment success
│   ├── cancel/page.tsx              # Payment cancelled
│   ├── admin/
│   │   ├── page.tsx                 # Admin overview dashboard
│   │   ├── login/page.tsx           # Admin login
│   │   └── orders/page.tsx          # Admin orders management
│   └── api/
│       ├── categories/route.ts
│       ├── menu-items/route.ts
│       ├── orders/create-checkout-session/route.ts
│       ├── stripe/webhook/route.ts
│       └── admin/
│           ├── login/route.ts
│           ├── orders/route.ts
│           ├── orders/[id]/route.ts
│           ├── orders/[id]/status/route.ts
│           ├── stats/route.ts
│           └── latest-paid-order/route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CategoryGrid.tsx
│   ├── MenuItemCard.tsx
│   ├── CartProvider.tsx
│   ├── AdminSidebar.tsx
│   ├── AdminStatsCards.tsx
│   ├── OrderDetailsModal.tsx
│   ├── OrderAlertToggle.tsx
│   └── Icons.tsx
├── lib/
│   ├── mongodb.ts
│   ├── stripe.ts
│   ├── mailgun.ts
│   ├── auth.ts
│   └── order-utils.ts
├── models/
│   ├── Category.ts
│   ├── MenuItem.ts
│   └── Order.ts
├── types/index.ts
├── seed/seed-menu.ts
└── public/
    ├── images/logo.png        ← Place logo here
    └── sounds/new-order.mp3   ← Place notification sound here
```

---

## 🔧 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `NEXT_PUBLIC_SITE_URL` | Your full site URL (no trailing slash) |
| `STRIPE_SECRET_KEY` | Stripe secret key (sk_test_... or sk_live_...) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (whsec_...) |
| `MAILGUN_API_KEY` | Mailgun API key |
| `MAILGUN_DOMAIN` | Mailgun sending domain |
| `MAILGUN_FROM_EMAIL` | From email address |
| `MAILGUN_FROM_NAME` | From display name |
| `ADMIN_ORDER_EMAIL` | (Optional) Admin receives new order copies |
| `ADMIN_USERNAME` | Admin panel username |
| `ADMIN_PASSWORD` | Admin panel password |
| `ADMIN_JWT_SECRET` | JWT signing secret (min 32 chars) |

---

## 💳 Stripe Webhook Setup

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select event: `checkout.session.completed`
4. Copy the **Signing Secret** → paste as `STRIPE_WEBHOOK_SECRET`

**Local testing with Stripe CLI:**
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## 🗄️ Database Seeding

The seed script creates 10 categories and 25 sample menu items:

```bash
npx tsx seed/seed-menu.ts
```

To add real menu items later, edit `seed/seed-menu.ts` → `menuItemsData` array and re-run, **or** add items directly in MongoDB Compass/Atlas.

---

## 🔐 Admin Panel

- URL: `/admin`
- Login: `/admin/login`
- Default credentials: set via `ADMIN_USERNAME` / `ADMIN_PASSWORD` in `.env.local`

**Features:**
- Dashboard with revenue, order counts
- Full orders table with search & filter
- Order status updates (New → Pending → Completed → Cancelled)
- Order details modal (items, customer info, payment reference)
- Real-time polling every 12 seconds for new paid orders
- Audio notification when new paid order arrives
- Toggle to enable/disable order alerts

---

## 🔊 Notification Sound

Place any `.mp3` file at `public/sounds/new-order.mp3`. The admin panel will:
1. Poll for new paid orders every 12 seconds
2. Play the sound when a new order is detected
3. Show a toast notification with order number
4. Highlight the new order row for 8 seconds

The browser autoplay restriction is handled gracefully — a prompt shows if the user hasn't interacted with the page yet.

---

## 📧 Email Confirmation

Emails are sent via Mailgun **only after Stripe confirms payment** (inside the webhook). Duplicate emails are prevented via the `confirmationEmailSent` flag on the Order model.

The customer email includes:
- Order number and details
- Itemized list with totals
- Restaurant address and hours
- Pickup instructions

---

## 🚢 Vercel Deployment

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL
5. Update Stripe webhook endpoint to your production URL
6. Deploy!

---

## 📞 Restaurant Info

**Burnaby Palace Restaurant**  
3110 Boundary Rd, Burnaby, BC V5M 4A2  
📞 +1 604-437-1818  
🕐 Open Daily: 11:00 AM – 9:30 PM
