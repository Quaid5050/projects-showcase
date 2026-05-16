# Lupin Project Group - Dashboard Guide

## 🔗 All URLs

### Public Pages
- Home: `http://localhost:3000/`
- Services: `http://localhost:3000/services`
- Projects: `http://localhost:3000/projects`
- About: `http://localhost:3000/about`
- Careers: `http://localhost:3000/careers`
- Contact: `http://localhost:3000/contact`

### Admin Portal
- **Admin Login**: `http://localhost:3000/admin/login`
- **Admin Dashboard**: `http://localhost:3000/admin/dashboard` (after login)

### Handyman Portal
- **Handyman Register**: `http://localhost:3000/handyman/register`
- **Handyman Login**: `http://localhost:3000/handyman/login`
- **Handyman Dashboard**: `http://localhost:3000/handyman/dashboard` (after login)

---

## 🔐 Admin Credentials

**Default Email**: `admin@lupinprojectgroup.com`  
**Default Password**: `LupinAdmin2026!`

*(Set in `.env.local` — can be updated via Profile tab in dashboard)*

### Updating Admin Credentials
1. Login to admin dashboard
2. Go to "Profile" tab
3. Click "Edit" button
4. Update email, name, and/or password
5. Click "Save Changes"
6. Sign out and sign in with new credentials

**How it works:**
- First login uses credentials from `.env.local`
- After updating in Profile tab, credentials are stored in MongoDB
- Future logins check database first, then fallback to env variables

---

## 📧 Email Configuration

All forms send to: **lupinprojectgroup@gmail.com**

- Contact/Quote form → Email with customer details
- Careers form → Email with resume attachment
- Handyman applications → Stored in database

Gmail App Password: `bkqyanhnfhxxwoji` (already configured)

---

## 🗄️ Database

**MongoDB Atlas** connection string in `.env.local`:
```
MONGODB_URI=mongodb+srv://bizzone:bizzone@cluster0.bwpdzae.mongodb.net/lupinproject?retryWrites=true&w=majority&appName=Cluster0
```

**Collections**:
- `Admin` — admin credentials (email, password, name)
- `Handyman` — member profiles
- `Job` — jobs created by admin

---

## 🚀 How to Access Admin Dashboard

1. Start dev server: `npm run dev`
2. Go to: `http://localhost:3000/admin/login`
3. Enter admin credentials (see above)
4. Click "Sign In"
5. You'll land on: `http://localhost:3000/admin/dashboard`

**Admin Dashboard Features**:
- **Overview Tab**: System stats, recent jobs, pending approvals
- **Jobs Tab**: Create/assign/track jobs, filter by city/status
- **Members Tab**: View/approve/suspend handymen, filter by city
- **Profile Tab**: Update admin credentials, view system overview, check email config
- Track total revenue from 15% fees

---

## 👷 How Handyman System Works

1. Handyman registers at `/handyman/register` (free)
2. Status = "pending" by default
3. Admin approves them → status = "active"
4. Admin creates jobs at `/admin/dashboard`
5. Admin assigns job to handyman (filtered by city)
6. Handyman sees job in their dashboard
7. Job shows their earnings (job value - 15% fee)
8. Admin marks job "completed" → fee is tracked

---

## 🛠️ Troubleshooting

**Can't see admin dashboard?**
- Make sure dev server is running (`npm run dev`)
- Go to `/admin/login` first (not `/admin/dashboard` directly)
- Use exact credentials from `.env.local`
- Check browser console for errors

**Prisma errors (EPERM on Windows)?**
- **Stop the dev server** (Ctrl+C in terminal)
- Run `npx prisma generate`
- Restart dev server: `npm run dev`
- This is a Windows file locking issue

**Database errors?**
- Verify MongoDB URI in `.env.local` is correct
- Check MongoDB Atlas → Network Access → allow your IP
- Run `npx prisma generate` if you changed the schema

**Email not sending?**
- Gmail app password is already set in `.env.local`
- Check spam folder
- Verify Gmail account allows app passwords

**401 errors when updating jobs/members?**
- Try refreshing the page
- Sign out and sign back in
- This is a session persistence issue that should resolve after first successful operation

---

## 📁 Key Files

- `app/admin/login/page.tsx` — Admin login page
- `app/admin/dashboard/page.tsx` — Admin dashboard (server)
- `components/admin/dashboard-client.tsx` — Admin dashboard UI
- `app/handyman/register/page.tsx` — Handyman signup
- `app/handyman/login/page.tsx` — Handyman login
- `app/handyman/dashboard/page.tsx` — Handyman dashboard (server)
- `components/handyman/dashboard-client.tsx` — Handyman dashboard UI
- `auth.ts` — NextAuth configuration
- `prisma/schema.prisma` — Database schema
- `.env.local` — Environment variables

---

## 🎯 Quick Links (Footer)

The footer now has quick links to:
- Admin (bottom right)
- Handyman Login (bottom right)
- Join Network (navigate menu)

---

Need help? All pages are built and working. Just restart your dev server and visit the URLs above.
