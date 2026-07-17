# Ray Stephens Tax Services — MERN Stack Website

Full-stack website with React frontend, Node.js/Express backend, MongoDB database, Cloudinary image hosting, and Nodemailer email integration.

---

## Project Structure

```
raystephens-tax/
├── client/          # React + Vite + Tailwind v4 (Frontend)
├── server/          # Node.js + Express + MongoDB (Backend)
└── README.md
```

---

## Quick Start

### 1. Clone & Install

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

---

### 2. Configure Server Environment

```bash
cd server
cp .env.example .env
```

Open `.env` and fill in all values:

```env
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASS@cluster.mongodb.net/raystephenstax

JWT_SECRET=make_this_a_long_random_string_32chars

# Gmail (use App Password — NOT your real password)
EMAIL_USER=your_gmail@gmail.com
EMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
EMAIL_RECEIVER=raystephenstax@gmail.com

# Cloudinary (free account at cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin credentials (change before going live)
ADMIN_EMAIL=admin@raystephens.ca
ADMIN_PASSWORD=ChangeThisPassword123!
```

---

### 3. Gmail App Password Setup

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** if not already on
3. Go to **Security → App Passwords**
4. Select: App = **Mail**, Device = **Other** → name it "Ray Stephens Tax"
5. Copy the 16-character password → paste into `EMAIL_APP_PASSWORD` in `.env`

---

### 4. MongoDB Setup

**Option A — MongoDB Atlas (Free, Recommended):**
1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Create a database user with read/write access
4. Whitelist your IP (or 0.0.0.0/0 for all)
5. Copy connection string → paste into `MONGO_URI`

**Option B — Local MongoDB:**
```
MONGO_URI=mongodb://localhost:27017/raystephenstax
```

---

### 5. Cloudinary Setup (for service images)

1. Sign up free at https://cloudinary.com
2. Go to Dashboard → copy Cloud Name, API Key, API Secret
3. Paste into `.env`

---

### 6. Run the Project

**Development (two terminals):**

```bash
# Terminal 1 — Start server
cd server
npm run dev
# Runs on http://localhost:5000

# Terminal 2 — Start client
cd client
npm run dev
# Runs on http://localhost:5173
```

---

### 7. Create First Admin Account

After the server is running, run this ONCE:

```bash
curl -X POST http://localhost:5000/api/auth/seed
```

Or open in browser: `http://localhost:5000/api/auth/seed`

This creates the admin using the credentials in your `.env`.

**Admin Panel URL:** http://localhost:5173/admin/login

---

## Pages

| URL | Page |
|-----|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/faq` | FAQ |
| `/contact` | Contact Form |
| `/booking` | Book Appointment |
| `/admin/login` | Admin Login |
| `/admin/dashboard` | Admin Dashboard |
| `/admin/services` | Manage Services |
| `/admin/contacts` | View Contact Inquiries |
| `/admin/bookings` | View Bookings |

---

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all active services |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/booking` | Submit booking request |

### Admin (JWT Required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/auth/me` | Get current admin |
| GET | `/api/admin/stats` | Dashboard stats |
| POST | `/api/services` | Add service (with image) |
| PUT | `/api/services/:id` | Edit service |
| DELETE | `/api/services/:id` | Delete service |
| GET | `/api/contact` | View all contacts |
| PATCH | `/api/contact/:id` | Update contact status |
| GET | `/api/booking` | View all bookings |
| PATCH | `/api/booking/:id` | Update booking status |

---

## How to Upload Logo

**Option 1 — Cloudinary Dashboard:**
1. Log in at cloudinary.com
2. Go to Media Library
3. Upload logo → copy the URL
4. Use that URL wherever needed in the project

**Option 2 — Email:**
Client can send logo to `raystephenstax@gmail.com`

**Accepted formats:** PNG (with transparent background recommended), JPG, SVG

---

## Sending Files to Client

1. Replace logo placeholder in `Navbar.jsx` and `Footer.jsx` with the actual `<img>` tag pointing to the Cloudinary URL
2. Update social media link in Footer if needed

---

## Production Deployment

**Server — Deploy to Railway / Render / VPS:**
```bash
cd server
npm start
```
Set all `.env` variables in your hosting platform's environment settings.

**Client — Deploy to Vercel / Netlify:**
```bash
cd client
npm run build
# Upload dist/ folder
```
Set environment variable: `VITE_API_URL=https://your-server-domain.com`

Update `vite.config.js` proxy target to your live server URL for production.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Tailwind CSS v4 |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Email | Nodemailer + Gmail App Password |
| Images | Cloudinary + multer |
| Routing | React Router v6 |

---

## Support

For technical questions contact BizzOne Digital.
