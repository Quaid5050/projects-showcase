# Finance With Preet — Full MERN Stack Website

Complete financial advisor website for Canadian families with Admin CMS.

## Tech Stack
- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Node.js + Express + MongoDB (Mongoose)
- **Images:** Cloudinary
- **Auth:** JWT
- **Deploy:** Vercel (both frontend and backend)

---

## Project Structure
```
finance-with-preet/
├── frontend/          ← React app (deploy to Vercel)
└── backend/           ← Express API (deploy to Vercel)
```

---

## Local Development

### Backend
```bash
cd backend
cp .env.example .env
# Fill in your .env values
npm install
npm run dev
# Runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000/api
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## Vercel Deployment

### Step 1 — Deploy Backend
1. Push `backend/` folder to GitHub (separate repo or monorepo)
2. Go to [vercel.com](https://vercel.com) → New Project → Import `backend`
3. **Root Directory:** `backend`
4. Add these Environment Variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/financewithpreet` |
| `JWT_SECRET` | Any random 32+ char string |
| `ADMIN_EMAIL` | `admin@financewithpreet.com` |
| `ADMIN_PASSWORD` | Strong password |
| `CLOUDINARY_CLOUD_NAME` | From Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | From Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | From Cloudinary dashboard |
| `FRONTEND_URL` | Will add after frontend deploy |

5. Deploy → Copy the backend URL (e.g. `https://fwp-backend.vercel.app`)

### Step 2 — Deploy Frontend
1. Push `frontend/` folder to GitHub
2. New Vercel Project → Import `frontend`
3. **Root Directory:** `frontend`
4. Add Environment Variable:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://fwp-backend.vercel.app/api` |

5. Deploy → Copy frontend URL
6. Go back to Backend project → Settings → Environment Variables → Add `FRONTEND_URL` = frontend URL → Redeploy

---

## Admin Panel
- URL: `https://your-site.vercel.app/admin`
- Login with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`

### Admin Features
| Section | What You Can Do |
|---------|----------------|
| Dashboard | View stats — leads, bookings, blogs, subscribers |
| Hero | Edit homepage headline, subheadline, background image |
| Services | Add/edit/delete service cards with Cloudinary image upload |
| Blog Posts | Create, edit, delete blog posts with image upload |
| Leads | View contact form submissions, update status, email clients |
| Bookings | View booking requests, confirm/cancel, email clients |
| Subscribers | View newsletter list, export CSV |

---

## Cloudinary Setup
1. Create free account at [cloudinary.com](https://cloudinary.com)
2. Go to Dashboard → copy Cloud Name, API Key, API Secret
3. Add to backend `.env`

## MongoDB Setup
1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create database user + allow all IPs (0.0.0.0/0)
3. Copy connection string → add to `MONGODB_URI`

---

## Pages
| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Blog | `/blog` |
| Blog Post | `/blog/:slug` |
| FAQ | `/faq` |
| Booking | `/booking` |
| Contact | `/contact` |
| Admin Login | `/admin` |

---

## API Endpoints

### Public
- `GET /api/blogs` — All blog posts
- `GET /api/blogs/:slug` — Single blog post
- `GET /api/services` — All services
- `GET /api/hero` — Hero section content
- `POST /api/leads` — Submit contact form
- `POST /api/bookings` — Submit booking
- `POST /api/newsletter` — Subscribe to newsletter

### Protected (JWT Required)
- `POST /api/admin/login` — Admin login
- `POST /api/upload` — Upload image to Cloudinary
- `POST/PUT/DELETE /api/blogs/:id`
- `GET/PATCH/DELETE /api/leads/:id`
- `GET/PATCH/DELETE /api/bookings/:id`
- `GET/DELETE /api/newsletter/:id`
- `POST /api/hero` — Save hero content
- `POST/PUT/DELETE /api/services/:id`

---

Built by BizzOne Digital
