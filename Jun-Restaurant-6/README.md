# The Village Burger — Online Ordering Website

Restaurant: **The Village Burger**  
Location: 3800 Bayview St #105, Richmond, BC V7E 6K7, Canada  
Stack: Next.js 14 · MongoDB · Stripe · Mailgun · NextAuth

---

## Quick Start

### 1. Fill in `.env.local`

```env
# Change these for this restaurant:
MONGODB_URI=mongodb://127.0.0.1:27017/village-burger
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESTAURANT_ID=the-village-burger
ORDER_APP_RESTAURANT_KEY=the_village_burger

# Copy these from the sister ONO project .env.local:
NEXTAUTH_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESTAURANT_ORDER_EMAIL=
ADMIN_ORDER_EMAIL=
ORDER_CC_EMAIL=
MAILGUN_API_KEY=
MAILGUN_DOMAIN=merchantorders.io
MAILGUN_FROM_EMAIL=orders@merchantorders.io
MAILGUN_FROM_NAME=The Village Burger
ORDER_FROM_EMAIL=orders@merchantorders.io
EMAIL_PROVIDER=mailgun
ORDER_APP_API_URL=
ORDER_APP_API_KEY=
ORDER_SEND_CUSTOMER_CONFIRMATION=true
```

### 2. Seed the database

Make sure MongoDB is running, then:

```bash
npx ts-node --skip-project scripts/seed.ts
```

This creates:
- Admin user: `admin@thevillageburger.ca` / `Admin123!ChangeMe`
- All menu categories and items
- Default site settings

### 3. Run dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
npm start
```

---

## Admin Panel

URL: `http://localhost:3000/admin/login`  
Email: `admin@thevillageburger.ca`  
Password: `Admin123!ChangeMe`

**Change the password after first login via the Users page.**

---

## Stripe Webhook (local dev)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the `whsec_...` secret into `STRIPE_WEBHOOK_SECRET`.

---

## Test Checklist

1. Add item to cart → checkout → Stripe test pay → success page shows order #
2. MongoDB order has `paymentStatus: "paid"`
3. Kitchen + customer emails received (Mailgun)
4. Order App receives POST
5. Refresh success page → no duplicate emails (idempotency flags = true)
6. Admin orders: unpaid order at checkout start — NO sound. After pay — sound within 30s
7. Admin can open order detail and see all items
8. Hide menu item → gone from public /menu, still in admin
9. Admin status → completed → one customer status email only
10. Tip 20% appears on Stripe receipt and in `order.tip` field

---

## Env Vars: Changed vs Copied

| Variable | Status |
|---|---|
| `MONGODB_URI` | **Changed** — new DB `village-burger` |
| `NEXTAUTH_URL` | **Changed** — new domain |
| `NEXT_PUBLIC_SITE_URL` | **Changed** — new domain |
| `RESTAURANT_ID` | **Changed** — `the-village-burger` |
| `ORDER_APP_RESTAURANT_KEY` | **Changed** — `the_village_burger` |
| `MAILGUN_FROM_NAME` | **Changed** — `The Village Burger` |
| `NEXTAUTH_SECRET` | Copy from sister project |
| `STRIPE_SECRET_KEY` | Copy from sister project |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Copy from sister project |
| `STRIPE_WEBHOOK_SECRET` | Copy from sister project |
| `MAILGUN_API_KEY` | Copy from sister project |
| `MAILGUN_DOMAIN` | Copy from sister project |
| `RESTAURANT_ORDER_EMAIL` | Copy from sister project |
| `ORDER_APP_API_URL` | Copy from sister project |
| `ORDER_APP_API_KEY` | Copy from sister project |

---

## Deviations from Spec

1. **Stripe API version** updated to `2025-02-24.acacia` (stripe@17 requires latest)
2. **Zod v4** — `z.record()` now requires two type args; updated accordingly
3. **`authOptions` moved** to `lib/auth-options.ts` — Next.js 14 route files cannot export non-HTTP-handler named exports
4. **`useSearchParams` wrapped in Suspense** on `/menu` and `/payment-success` — required by Next.js 14 App Router
5. **No Stripe Connect** — as specified, no `application_fee_amount` or `transfer_data`
6. **Order number prefix** is `TVB-` (The Village Burger)
