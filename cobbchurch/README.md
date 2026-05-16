# Cobb Church Network — Full Stack MERN Application

> **Stronger Churches. Stronger Community.**  
> An initiative of Cobb Pastors Alliance · Powered by The Shepherd's Table

---

## 📋 Project Overview

A full-featured MERN stack web application for the Cobb Church Network — a private collaboration platform for pastors and churches throughout Cobb County, Georgia.

### Tech Stack
- **Frontend:** React 18, React Router v6, Axios, React Toastify, React Icons
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT Auth, Nodemailer
- **Database:** MongoDB (local or Atlas)
- **Styling:** Custom CSS with CSS Variables (no CSS framework dependency)

---

## 🗂 Project Structure

```
cobb-church-network/
├── client/                     # React Frontend
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js              # Router + all routes
│       ├── index.js
│       ├── context/
│       │   └── AuthContext.js  # Global auth state
│       ├── utils/
│       │   └── api.js          # Axios instance
│       ├── styles/
│       │   └── globals.css     # Design system + utilities
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.js / .css
│       │   │   ├── Footer.js / .css
│       │   │   ├── Layout.js           # Public layout wrapper
│       │   │   ├── DashboardLayout.js  # Member sidebar layout
│       │   │   └── AdminLayout.js      # Admin sidebar layout
│       │   └── common/
│       │       ├── PrivateRoute.js     # Auth guard
│       │       └── AdminRoute.js       # Admin guard
│       └── pages/
│           ├── Home.js / .css
│           ├── About.js
│           ├── Services.js
│           ├── Events.js
│           ├── PastorStories.js
│           ├── StoryDetail.js
│           ├── Resources.js
│           ├── CrisisResponse.js
│           ├── RequestAccess.js / .css  # Application form
│           ├── Login.js / .css
│           ├── Donate.js
│           ├── Contact.js
│           ├── NotFound.js
│           ├── dashboard/
│           │   ├── Dashboard.js / .css  # Member home
│           │   ├── ChurchDirectory.js
│           │   ├── MyResources.js
│           │   ├── MyEvents.js
│           │   ├── CrisisAlerts.js
│           │   └── Profile.js
│           └── admin/
│               ├── AdminDashboard.js / .css
│               ├── AdminApplications.js / .css
│               ├── AdminChurches.js
│               ├── AdminResources.js
│               ├── AdminEvents.js
│               ├── AdminStories.js
│               └── AdminCrisis.js
│
└── server/                     # Express Backend
    ├── index.js                # Entry point
    ├── models/
    │   ├── User.js             # Church/Pastor model
    │   ├── Resource.js
    │   ├── Event.js
    │   ├── Story.js
    │   └── Crisis.js
    ├── routes/
    │   ├── auth.js             # Register, login, profile
    │   ├── churches.js         # Church directory
    │   ├── resources.js        # Resource CRUD
    │   ├── events.js           # Event CRUD + RSVP
    │   ├── stories.js          # Pastor stories
    │   ├── crisis.js           # Crisis alerts
    │   ├── contact.js          # Contact form
    │   ├── donate.js           # Donation endpoint
    │   └── admin.js            # Admin management
    ├── middleware/
    │   └── auth.js             # JWT protect + role guards
    └── utils/
        ├── email.js            # Nodemailer templates
        └── seedAdmin.js        # First-run admin seeder
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB (local) or MongoDB Atlas account
- Git

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd cobb-church-network
npm run install-all
```

### 2. Configure Environment Variables

**Server:**
```bash
cd server
cp .env.example .env
# Edit .env with your values
```

Key variables:
```env
MONGO_URI=mongodb://localhost:27017/cobb-church-network
JWT_SECRET=your_super_secret_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=noreply@cobbchurchnetwork.org
CLIENT_URL=http://localhost:3000
ADMIN_EMAIL=admin@cobbchurchnetwork.org
ADMIN_PASSWORD=Admin@123
```

**Client:**
```bash
cd client
cp .env.example .env
# REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Gmail App Password Setup (for emails)
1. Enable 2FA on your Google account
2. Go to Google Account → Security → App passwords
3. Create a new app password
4. Use that 16-character password as `SMTP_PASS`

### 4. Run Development

```bash
# From root directory - runs both server and client
npm run dev

# Or separately:
npm run server   # Express on port 5000
npm run client   # React on port 3000
```

### 5. Access the App
- **Website:** http://localhost:3000
- **API:** http://localhost:5000/api
- **Admin login:** `admin@cobbchurchnetwork.org` / `Admin@123`

---

## 👤 User Roles & Access

| Role | Access |
|------|--------|
| `pastor` (pending) | No dashboard access until approved |
| `pastor` (approved) | Full member dashboard: directory, resources, events, crisis alerts |
| `admin` | Member dashboard + admin panel: approve/reject, manage content |
| `superadmin` | All admin features + delete churches, change roles |

---

## 🌐 Pages & Routes

### Public Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with full hero, features, stats, CTA |
| `/about` | Mission, vision, values |
| `/services` | What we offer |
| `/resources` | Public resources info (full directory requires login) |
| `/pastor-stories` | Published testimonies |
| `/events` | Public upcoming events |
| `/crisis-response` | Crisis coordination info |
| `/request-access` | Application form |
| `/donate` | Donation page |
| `/contact` | Contact form |
| `/login` | Login page |

### Member Dashboard (requires approved account)
| Route | Description |
|-------|-------------|
| `/dashboard` | Welcome + upcoming events + crisis alerts |
| `/dashboard/directory` | Full church directory with search |
| `/dashboard/resources` | Browse all + manage your church's resources |
| `/dashboard/events` | All events + RSVP functionality |
| `/dashboard/crisis` | Active alerts + response submission |
| `/dashboard/profile` | Edit church profile |

### Admin Panel (requires admin role)
| Route | Description |
|-------|-------------|
| `/admin` | Dashboard with stats + pending applications |
| `/admin/applications` | Review, approve, reject applications |
| `/admin/churches` | Full church management + status control |
| `/admin/resources` | Moderate all network resources |
| `/admin/events` | Create/edit events, manage RSVPs |
| `/admin/stories` | Add/edit/publish pastor stories |
| `/admin/crisis` | Create alerts, email network, resolve alerts |

---

## 📧 Automated Email System

All emails are triggered automatically:

| Trigger | Email Sent |
|---------|-----------|
| Church applies | Confirmation to applicant |
| Admin approves | Welcome + dashboard access info |
| Admin rejects | Rejection with optional reason |
| Admin creates crisis alert | Alert to ALL approved churches |
| Member RSVPs to event | Event confirmation |
| Contact form submitted | Forwarded to admin email |

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register` — Submit access application
- `POST /api/auth/login` — Login
- `GET /api/auth/me` — Get current user
- `PUT /api/auth/profile` — Update profile
- `PUT /api/auth/password` — Change password

### Churches (approved members only)
- `GET /api/churches` — Directory
- `GET /api/churches/:id` — Church detail

### Resources
- `GET /api/resources` — All resources (with filters)
- `POST /api/resources` — Add resource
- `PUT /api/resources/:id` — Update resource
- `DELETE /api/resources/:id` — Remove resource
- `GET /api/resources/my/list` — My resources

### Events
- `GET /api/events` — All upcoming events
- `POST /api/events` — Create (admin)
- `PUT /api/events/:id` — Update (admin)
- `POST /api/events/:id/register` — RSVP
- `DELETE /api/events/:id/register` — Cancel RSVP

### Stories
- `GET /api/stories` — Published stories
- `POST /api/stories` — Create (admin)
- `PUT /api/stories/:id` — Update (admin)
- `DELETE /api/stories/:id` — Delete (admin)

### Crisis
- `GET /api/crisis` — Active alerts
- `POST /api/crisis` — Create + notify network (admin)
- `POST /api/crisis/:id/respond` — Submit response
- `PUT /api/crisis/:id/resolve` — Resolve (admin)

### Admin
- `GET /api/admin/stats` — Dashboard statistics
- `GET /api/admin/applications` — Pending apps
- `PUT /api/admin/churches/:id/approve` — Approve
- `PUT /api/admin/churches/:id/reject` — Reject
- `PUT /api/admin/churches/:id/status` — Change status
- `PUT /api/admin/churches/:id/role` — Change role

---

## 🚢 Production Deployment

### Build Frontend
```bash
cd client && npm run build
```

### Serve with Express (add to server/index.js)
```js
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}
```

### Recommended Hosting
- **Full stack:** Railway, Render, DigitalOcean App Platform
- **Database:** MongoDB Atlas (free tier available)
- **Domain:** Point to your deployment

---

## 🎨 Design System

Brand colors defined as CSS variables in `globals.css`:

```css
--navy: #1a2744;       /* Primary dark blue */
--navy-dark: #111a30;  /* Darker navy */
--gold: #d4a853;       /* Primary gold/amber */
--gold-dark: #b8923e;  /* Darker gold */
--white: #ffffff;
--off-white: #f8f7f4;
```

Fonts: **Montserrat** (headings) + **Open Sans** (body)

---

## 📦 Payment Integration (Donate Page)

The donate page is ready for Stripe integration:
1. `npm install stripe` in server
2. `npm install @stripe/stripe-js @stripe/react-stripe-js` in client
3. Add `STRIPE_SECRET_KEY` and `REACT_APP_STRIPE_PUBLIC_KEY` to .env
4. Uncomment the Stripe code in `server/routes/donate.js`

---

## 🔒 Security Features
- JWT authentication with 30-day expiration
- Bcrypt password hashing (12 rounds)
- Rate limiting (100 req/15min)
- Helmet.js security headers
- CORS configured for specific client origin
- Role-based route protection
- Input validation

---

*Built for Cobb Church Network — Powered by the Pastors Alliance Initiative of The Shepherd's Table*  
*© 2026 Cobb Church Network. All Rights Reserved.*
