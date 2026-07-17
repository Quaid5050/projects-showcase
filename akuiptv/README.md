# AKU IPTV Worldwide — Full MERN Platform

Premium IPTV box eCommerce + multi-level referral rewards platform.

---

## Project Structure

```
iptv-platform/
├── server/          → Express API (port 5000) — its own Vercel project
├── client/          → React frontend + admin panel at /admin (port 3000) — its own Vercel project
└── package.json     → Root scripts (local dev convenience only)
```

The admin panel is not a separate app — it's mounted inside the client at the `/admin` route (see `client/src/admin/AdminApp.js`). Deploy `server/` and `client/` as **two separate Vercel projects**.

---

## Quick Start (Local)

### 1. Install Dependencies

```bash
# From root directory
npm install          # installs concurrently
npm run install:all  # installs server + client dependencies
```

### 2. Configure Environment

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, and Cloudinary keys
```

```bash
cd client
cp .env.example .env
# REACT_APP_API_URL is only needed in production (see Deployment below).
# Leave it unset locally — CRA's "proxy" field in client/package.json
# forwards relative /api/* calls to http://localhost:5000 automatically.
```

### 3. Seed Database

```bash
npm run seed
# Creates 6 products + admin user
```

### 4. Run Both Apps

```bash
npm run dev
# Starts server (5000) and client (3000, admin at /admin)
```

---

## Admin Credentials

```
Email:    admin@akuiptv.com
Password: Admin@123456
```

---

## URLs (Local)

| App     | URL                          |
|---------|-------------------------------|
| Website | http://localhost:3000        |
| Admin   | http://localhost:3000/admin  |
| API     | http://localhost:5000/api    |

---

## Features

### Frontend (client/)
- Dark space theme — animated hero, features, products, referral, pricing sections
- All sections animated with framer-motion-style CSS animations
- Product listing + detail pages
- Referral submission form (1/3/5 box plans)
- User dashboard with referral tracking
- Login / Register with JWT auth

### Admin Panel (client/src/admin/ — served at /admin)
- Dashboard with live stats (users, products, referrals, inquiries)
- Product CRUD — add, edit, remove
- User management — view all users with referral stats
- Referral management — update status inline
- Inquiry management — split view with detail panel

### Backend (server/)
- JWT authentication + role-based middleware
- Products API with category/featured filtering
- Referral system with credit calculation
  - 1-box: 0 credits
  - 3-box: $200 credit per referee
  - 5-box: $400 credit per referee
- Inquiry submission (public) + management (admin)
- Admin dashboard aggregate stats
- MongoDB with Mongoose models

---

## Referral Credit Rules

| Plan     | Price   | Credit Per Referee | Boxes |
|----------|---------|--------------------|-------|
| 1 Box    | Market  | $0                 | 1     |
| 3 Boxes  | $299/yr | $200               | 3     |
| 5 Boxes  | $399/yr | $400               | 5     |

Maximum earning: 5 boxes × $400 = **$2,000 credits**

---

## Cloudinary Setup (for product images)

Already wired up — the admin panel's "Upload Image" button posts to `POST /api/upload`, which streams the file to Cloudinary and stores the returned URL.

1. Create account at [cloudinary.com](https://cloudinary.com)
2. Add to server `.env` (see `server/.env.example`):
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

---

## Deployment (Vercel — two separate projects)

Both `server/` and `client/` are Vercel-ready as-is. Create **two** Vercel projects from this repo, each pointed at a different Root Directory.

### 1. API project — Root Directory: `server`

- Vercel auto-detects `server/vercel.json` (Node serverless function, all routes → `index.js`)
- The Express app only calls `app.listen()` when `process.env.VERCEL` is unset, so it runs correctly both locally and as a Vercel function
- MongoDB connection is cached across warm invocations (no reconnect-per-request)
- Set these Environment Variables in the Vercel project settings:
  ```
  MONGO_URI=...
  JWT_SECRET=...
  JWT_EXPIRE=7d
  NODE_ENV=production
  CLIENT_URL=https://your-client-project.vercel.app
  CLOUDINARY_CLOUD_NAME=...
  CLOUDINARY_API_KEY=...
  CLOUDINARY_API_SECRET=...
  ```
- After deploying, note the API's URL (e.g. `https://your-api-project.vercel.app`)

### 2. Client project — Root Directory: `client`

- Standard CRA build (`npm run build`); `client/vercel.json` adds an SPA rewrite so refreshing any route (e.g. `/admin`, `/products/xyz`) doesn't 404
- Set this Environment Variable in the Vercel project settings:
  ```
  REACT_APP_API_URL=https://your-api-project.vercel.app
  ```
- Redeploy after setting it — CRA env vars are baked in at build time, not read at runtime

### CORS

The API's CORS middleware allows: any origin listed in `CLIENT_URL`, plus any `*.vercel.app` subdomain (covers Vercel preview deployments automatically) — no code changes needed when preview URLs change.

---

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React 18, React Router v6     |
| Styling   | Pure CSS (Space Grotesk + Inter) |
| State     | Context API + localStorage    |
| Backend   | Node.js + Express             |
| Database  | MongoDB + Mongoose            |
| Auth      | JWT (jsonwebtoken + bcryptjs) |
| HTTP      | Axios                         |
| Toasts    | react-hot-toast               |

---

## Product Seed (6 Products)

1. YOKATV IPX2 Pro — Android 4K Box
2. YOKATV IPx1 PRO — IPTV Box with Widevine L1
3. MAG322W1 — Professional Linux STB
4. Aku IPTV Box Worldwide — Flagship + 1 Year Free
5. My TV Android Box — Family Streaming
6. IPTV 1 Year Subscription — Digital Plan

All products use Unsplash placeholder images. Replace with Cloudinary URLs in production.
