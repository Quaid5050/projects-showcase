# Toronto Notary Office — MERN Website

## Project Structure
```
toronto-notary/
├── client/          ← React Frontend
│   ├── src/
│   │   ├── pages/   ← Home, Services, Booking, About, Contact
│   │   ├── components/ ← Navbar, Footer, LeadPopup, Notification
│   │   ├── App.js
│   │   └── index.css
│   └── package.json
└── server/          ← Node + Express Backend
    ├── index.js     ← All API routes + Nodemailer
    ├── .env.example ← Copy to .env and fill in
    └── package.json
```

## Quick Start

### 1. Setup Server
```bash
cd server
npm install
cp .env.example .env
# Fill in .env with your Gmail credentials
node index.js
```

### 2. Setup Client
```bash
cd client
npm install
npm start
```

### 3. Open browser
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## Email Setup (Gmail)

1. Go to **Google Account → Security → 2-Step Verification**
2. At the bottom: **App Passwords**
3. Create an App Password for "Mail"
4. Copy the 16-character code into `.env` as `EMAIL_PASS`

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
OWNER_EMAIL=varun_vashisht@ymail.com
```

**All emails will be sent TO `varun_vashisht@ymail.com`**

---

## What Emails Are Sent

| Trigger | To Varun | To Client |
|---------|----------|-----------|
| Popup lead form | Lead details + follow-up prompt | Welcome email + discount code |
| Booking submit | Full booking details | Booking confirmation + appointment details |
| Contact form | Message + reply link | Auto-reply confirmation |

---

## Deploy to Production

### Frontend → Vercel / Netlify
```bash
cd client
npm run build
# Upload /build folder to Vercel/Netlify
# Set REACT_APP_API_URL=https://your-server.com in env
```

### Backend → Railway / Render / VPS
```bash
cd server
# Set all env variables in dashboard
npm start
```

> Update `proxy` in `client/package.json` to your production server URL before building.
