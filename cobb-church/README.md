# Cobb Church Network

Next.js application for connecting Cobb County churches: onboarding, directory, resources, events, messaging, announcements, crisis alerts, and Stripe donations.

## Requirements

- Node.js 20+
- MongoDB connection string (Prisma `mongodb` provider)

## Local setup

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root (do not commit it). See [Environment variables](#environment-variables) below.

3. Generate the Prisma client and apply the schema to your database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. (Optional) Load demo data for client demos and QA:

   ```bash
   npm run seed
   ```

   After seeding you can sign in as:

   - **Admin:** `admin@cobbchurch.org` / `Km9#Tp2$vL8@nQ4wX7jF5hR3cM6bY1zA8` (defined as `SEED_ADMIN_PASSWORD` in `prisma/seed.ts` — **change it in production**; re-run `npm run seed` only on disposable DBs, or update the admin `User` password hash in Mongo for existing deploys)
   - **Church users (each):** see terminal output — emails `pastor.*@demo.cobbchurch.org` with password **`DemoChurch2026!`**

5. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

> **Windows:** If `prisma generate` fails with `EPERM` while renaming the query engine, stop `npm run dev` (or any process locking `node_modules\.prisma\client`), then run `npx prisma generate` again.

## Environment variables

Values used in code (names must match exactly):

### Required

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | MongoDB URL for Prisma |
| `NEXTAUTH_SECRET` | Secret for JWT/session encryption |
| `NEXTAUTH_URL` | Canonical site URL for NextAuth (e.g. `http://localhost:3000` in dev) |
| `NEXT_PUBLIC_SITE_URL` | Public origin for emails and Stripe return URLs (falls back to `NEXTAUTH_URL` / `NEXT_PUBLIC_APP_URL` in `lib/email.ts`) |

### Email (Resend)

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Send mail via Resend; if unset, emails are **logged to the console** and an **`EmailLog`** row is written with status `LOGGED` |
| `EMAIL_FROM` | From address (e.g. `Cobb Church Network <onboarding@yourdomain>`) |
| `ADMIN_EMAIL` | Default recipient for join-form admin notifications |
| `ADMIN_NOTIFICATION_EMAIL` | Optional override for admin join notifications (takes precedence over `ADMIN_EMAIL`) |

### Stripe (donations)

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Server-side Stripe API key (test mode for development) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for `POST /api/webhooks/stripe` |

`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is **not** required for the current Checkout redirect flow (server creates the session). Add it only if you integrate Stripe.js or Elements on the client.

### Optional

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Alternate public URL fallback |

## Database

- **ORM:** Prisma with MongoDB.
- **Push schema:** `npx prisma db push` (typical for MongoDB prototypes).
- **Seed:** `npm run seed` runs `tsx prisma/seed.ts`.

## Build and lint

```bash
npm run build
npm run lint
```

## Admin access

- Only users with role **`ADMIN`** can open `/admin` routes (enforced in **middleware**, **admin layout**, **`requireAdmin()`** on admin pages, and **`requireAdminApi()`** on admin APIs).
- Default admin is created by the seed script (change password after first deploy).

## Email behavior

All outbound mail goes through `lib/email.ts`. Missing `RESEND_API_KEY` does **not** break user flows: the body is printed to the server console and an `EmailLog` entry is stored.

## Stripe webhooks

1. In the Stripe Dashboard, add an endpoint: `https://your-domain.com/api/webhooks/stripe`.
2. Subscribe at minimum to **`checkout.session.completed`**.
3. Set `STRIPE_WEBHOOK_SECRET` to the endpoint signing secret.
4. Donations are persisted as **`COMPLETED`** only after the webhook runs successfully (never trust the client alone).

**Local testing:** use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Vercel / production checklist

- [ ] Set all required env vars in the Vercel project settings.
- [ ] Set `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Configure Resend domain and `EMAIL_FROM`.
- [ ] Configure Stripe live keys and production webhook.
- [ ] Run `npx prisma db push` against production Mongo (or your migration process).
- [ ] Change default **admin** and **demo** passwords; restrict or remove demo accounts in production if not needed.
- [ ] Confirm `.env` is never committed (`.gitignore` includes `.env`).

## Manual QA checklist

Use this list before a client demo or launch:

1. **Visitor:** Homepage CTAs → `/join`, `/resources`, `/pastor-stories`, `/giving`; join form submits; confirmation appears.
2. **Join email:** Applicant + admin notification appear in console or Resend; `EmailLog` rows exist.
3. **Admin:** Log in at `/admin/login`; open `/admin/applications`; approve one application → church + `CHURCH_USER` created; approval + login emails sent/logged.
4. **Church user:** Log in at `/login`; `/dashboard` loads live data; `/admin` is blocked.
5. **Profile:** `/dashboard/profile` loads and saves only your church (`PUT /api/dashboard/church` scoped by session).
6. **Resources:** Create offer + request; appear on `/resources`; another church user responds; inbox message + optional email.
7. **Messages / notifications:** `/dashboard/messages` and `/dashboard/notifications` show only your user/church data.
8. **Events:** RSVP on `/events/[slug]`; duplicate RSVP blocked; confirmation email/log.
9. **Announcements:** Admin creates published announcement; visible on dashboard; optional mass email.
10. **Crisis:** Admin creates alert; activate → notifications (and email if enabled); church responds on `/dashboard/crisis`; admin views responses.
11. **Donations:** Complete test Checkout; `Donation` row appears after webhook; receipt email/log.
12. **Admin tools:** `/admin/donations`, `/admin/email-logs` show data.
13. **Mobile:** Spot-check key pages on a narrow viewport.
14. **Security:** Confirm non-admin cannot hit admin APIs (401/403) and non-authenticated users cannot hit dashboard APIs.

## License

Private / client project — use per your agreement.
