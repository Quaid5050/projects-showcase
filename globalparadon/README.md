# ClearPath Pardons & US Waivers — MERN Stack

Full-stack MERN application for a professional Pardons & US Waivers service website with integrated CRM.

## 🚀 Tech Stack
- **Frontend:** React 18, React Router v6, Recharts, React Toastify, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (JSON Web Tokens)
- **Email:** Nodemailer (Gmail)

---

## 📁 Project Structure

```
clearpath/
├── server/
│   ├── index.js              # Express entry point
│   ├── models/
│   │   ├── Lead.js           # Lead/CRM model
│   │   └── User.js           # Admin user model
│   ├── routes/
│   │   ├── leads.js          # Lead CRUD + CRM API
│   │   ├── auth.js           # Login / JWT auth
│   │   ├── cases.js          # Case management
│   │   └── contact.js        # Contact form
│   └── middleware/
│       ├── authMiddleware.js  # JWT protection
│       └── emailService.js   # Nodemailer emails
├── client/
│   ├── public/index.html
│   └── src/
│       ├── App.js            # Routes
│       ├── api.js            # Axios instance
│       ├── index.css         # Global styles
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Footer.js
│       │   ├── LiveChat.js
│       │   └── PrivateRoute.js
│       └── pages/
│           ├── Home.js
│           ├── Services.js   (also exports About, Pricing, etc.)
│           ├── Apply.js
│           ├── HowItWorks.js
│           ├── About.js
│           ├── Pricing.js
│           ├── Testimonials.js
│           ├── FAQ.js
│           └── admin/
│               ├── AdminLogin.js
│               ├── AdminDashboard.js
│               ├── AdminLeads.js
│               └── AdminLeadDetail.js
├── package.json
└── .env.example
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas free tier)
- Gmail account (for email notifications)

### 2. Clone & Install

```bash
# Install root dependencies
npm install

# Install React client dependencies
npm install --prefix client
```

### 3. Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/clearpath
JWT_SECRET=your_super_secret_key_here
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=admin@yoursite.ca
NODE_ENV=development
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate for "Mail"

### 4. Create First Admin Account

Start the server, then visit:
```
POST http://localhost:5000/api/auth/seed
```
This creates: `admin@clearpathpardons.ca` / `Admin@1234`
**Change this password immediately after first login.**

### 5. Run Development

```bash
# Run both server + client simultaneously
npm run dev

# Or separately:
npm run server     # Backend on :5000
npm run client     # Frontend on :3000
```

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero + Lead Form + Services) |
| `/services` | Full Services Detail |
| `/how-it-works` | 4-Step Process |
| `/about` | About Us |
| `/pricing` | Pricing Cards |
| `/testimonials` | Client Reviews |
| `/faq` | FAQ Accordion |
| `/apply` | Apply Now / Contact Form |
| `/admin/login` | Admin Login |
| `/admin` | CRM Dashboard (charts + stats) |
| `/admin/leads` | All Leads (filters + search) |
| `/admin/leads/:id` | Lead Detail + Case Notes |

---

## 📊 CRM Pipeline Stages

```
New Lead → Contacted → In Review → Documents Requested → Submitted → Approved / Rejected → Closed
```

---

## 🚢 Deploy to Production

### Option A: Vercel (Frontend) + Railway (Backend + MongoDB)
1. Push to GitHub
2. Deploy `/client` to Vercel
3. Deploy root to Railway, add MongoDB plugin
4. Set env vars in Railway dashboard

### Option B: DigitalOcean / VPS
```bash
npm run build --prefix client
NODE_ENV=production npm start
```

### Option C: Heroku
```bash
heroku create clearpath-pardons
heroku config:set MONGO_URI=... JWT_SECRET=... 
git push heroku main
```

---

## 📧 Email Automation

Two emails fire automatically on every form submission:
1. **Client confirmation** — professional branded email with case reference
2. **Admin notification** — full lead details for immediate follow-up

---

## 🔌 HubSpot / CRM Integration (Optional)

To push leads to HubSpot in addition to MongoDB, add to `server/routes/leads.js`:

```javascript
const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN });

// Inside the POST route:
await hubspotClient.crm.contacts.basicApi.create({
  properties: {
    firstname: lead.firstName,
    lastname: lead.lastName,
    email: lead.email,
    phone: lead.phone,
  }
});
```

---

## 📱 Mobile Responsive
All pages are fully responsive. Navbar collapses to hamburger on mobile.

---

## 🛡️ Security Features
- JWT authentication for admin panel
- Password hashing with bcryptjs
- PIPEDA-compliant data handling
- Input validation on all forms
- Protected admin routes

---

Built with ❤️ for ClearPath Pardons & US Waivers
