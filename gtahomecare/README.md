# GTA Homecare Services — MERN Stack Website

## Project Structure
```
gta-mern/
├── frontend/     React (Vite) — public website + admin panel
└── backend/      Node.js + Express + MongoDB API
```

## Setup & Run

### 1. Backend
```bash
cd backend
npm install
# Edit .env → set your MONGO_URI
npm start
```

### 2. Create Admin Account (run once)
```
POST http://localhost:5000/api/auth/seed
```
Default: admin@gtahomecare.com / Admin@123

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

## URLs
- Website: http://localhost:5173
- Admin Panel: http://localhost:5173/admin/login
- Backend API: http://localhost:5000/api

## Pages
- / Home
- /about About Us
- /services/* All 6 service pages
- /gallery Gallery
- /testimonials Testimonials
- /booking Booking + Care Plan Form
- /contact Contact Form
- /admin/dashboard Admin Dashboard
- /admin/bookings Manage Bookings
- /admin/messages Manage Contact Messages

## Admin Features
- Dashboard with live stats
- Full booking list with filters, search, detail view
- Care plan services display
- Status management (New → Contacted → Assessment Scheduled → Active → Closed)
- Contact messages with Read/Replied status
- Direct call/email from admin

## Theme
Colors from logo: Red #C01A1A, Gold #C9922A, Cream #FDF9F5
Fonts: Playfair Display (headings) + Lato (body)

## Deploying to Vercel (2 separate projects)

This repo deploys as **two independent Vercel projects** from the same Git repo, each pointed at a different Root Directory.

### 1. Backend → `gtahomecare-api`
- New Vercel project → import this repo → **Root Directory: `backend`**
- Framework Preset: Other (Vercel auto-detects the `api/` serverless function)
- Environment Variables (copy from `backend/.env.example`):
  - `MONGO_URI`
  - `CLIENT_URL` → set to your deployed frontend URL (e.g. `https://gtahomecare.vercel.app`), comma-separate multiple origins if needed
  - `JWT_SECRET`
  - `ADMIN_EMAIL`, `ADMIN_PASSWORD`
  - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- Deploy → note the URL (e.g. `https://gtahomecare-api.vercel.app`)
- Run once to create the admin account: `POST https://gtahomecare-api.vercel.app/api/auth/seed`

### 2. Frontend → `gtahomecare`
- New Vercel project → import this repo → **Root Directory: `frontend`**
- Framework Preset: Vite (auto-detected)
- Environment Variables (copy from `frontend/.env.example`):
  - `VITE_API_URL` → `https://gtahomecare-api.vercel.app/api`
- Deploy

Both `vercel.json` files (in `backend/` and `frontend/`) are already set up — backend routes all requests to the serverless function, frontend rewrites all paths to `index.html` for client-side routing.
