# Projects showcase

## How to clone or open a single project

You do **not** need the full showcase tree if you only care about one folder (e.g. `royal-pizza`).

**Folder name = repository name.** Each top-level directory matches the upstream repository slug (spelling and capitalization as in the index).

### Option A — This showcase is the only remote (sparse checkout)

If you only have this **monorepo** URL, you can clone once and check out **just one directory**:

```bash
git clone --filter=blob:none --sparse https://YOUR_SHOWCASE_REPO_URL.git
cd YOUR_SHOWCASE_REPO
git sparse-checkout init --cone
git sparse-checkout set royal-pizza
```

Use the folder name you need instead of `royal-pizza`. You still have one Git repo (the showcase), but your working tree only contains that project.

### Option B — Copy one folder into a new repo

To ship a folder as its **own** repo **without** monorepo history:

```bash
cp -R royal-pizza /path/to/royal-pizza-standalone
cd /path/to/royal-pizza-standalone
git init
git add .
git commit -m "Initial import"
```

---

These projects are grouped in **one parent Git repository** for browsing; each app still lives in its **own top-level folder** (see index), and **that folder name is the repo name** on the remote.

To refresh this collection from its remote: `git pull` at the **repository root**.

## Project index

Brief descriptions are taken from each repo’s README, metadata, or layout where available.

| Folder | Description |
|--------|-------------|
| **3mobiles** | Empty upstream repository (no app files yet). |
| **3RayMobiles** | Next.js storefront for refurbished phones and devices (iPhone, Pixel, Samsung, iPad, MacBook, etc.). |
| **a1furnished** | MERN stack for **A1 Furnished Homes Canada** — listings, bookings, inquiries, admin, Cloudinary images. |
| **alimotors** | Next.js + Tailwind marketing site (package: `autoforge-workshop`) for an automotive workshop business. |
| **Bariis-Pizza** | Full-stack **Bariis & Pizza House** — Somali & halal restaurant: MERN stack, menu, cart, gallery, admin panel. |
| **Black-Trucks-Co** | Next.js site for **Black Trucks Co.** — Stripe Checkout, Prisma/MongoDB, booking-oriented setup. |
| **cobb-church** | Next.js + Prisma + MongoDB for **Cobb Church Network** — churches directory, events, messaging, Stripe donations. |
| **cobbchurch** | MERN stack **Cobb Church Network** — collaboration platform for pastors/churches (React + Express + MongoDB). |
| **cornerstore** | Vite + React — **Corner Store at Linwood** (Kitchener, ON): neighbourhood convenience retail site (LCBO, grocery, lottery, etc.). |
| **dial4bottle** | Static HTML landing — **Dial 4 Bottle** liquor delivery (Edmonton), age gate, premium dark/gold UI. |
| **Donzaygroup** | Next.js site for **Donzay Group** — commercial cleaning and facility services (Toronto / GTA). |
| **Dr-Jagatjit-Ahulwalia** | Vite + React brochure — **GTB Holistic Wellness** / Dr. Jagatjit Ahluwalia (natural medicine, osteopathy, massage, Alberta). |
| **fairsafe** | Next.js site for **FAIRSAFE** — first aid and safety coverage for events and worksites (Vancouver, BC). |
| **globalparadon** | MERN **ClearPath Pardons & US Waivers** — public site + CRM (leads, cases, contact, JWT admin). |
| **gtbnaturals** | Vite + React — **GTB Holistic Wellness Care** (holistic medicine positioning; shares theme with Dr-Jagatjit-style wellness sites). |
| **Hands-that-heal** | Vite + React + shadcn/ui — **Hands That Heal** aesthetic/wellness clinic marketing site. |
| **Jun-Restaurant-1** | Next.js ordering for **ONO Poké Bar** (Toronto) — Stripe, NextAuth, MongoDB, admin, transactional email options. |
| **Jun-Restaurant-2** | Next.js ordering for **A Wok** (Hayward, CA) — Stripe Checkout + Connect (split payouts), admin portal. |
| **Jun-Restaurant-3** | Next.js ordering for **Mascot Chinese Cuisine** (Sydney) — Northeastern Chinese menu, pickup/delivery. |
| **Lupin-Project** | Next.js site for **Lupin Project Group** — construction and handyman services (Scarborough, ON). |
| **Master-Control-Panel** | Next.js admin UI to onboard restaurants and owners, integration API keys, tied to a restaurant order backend. |
| **Phantom** | Next.js site for **PAC Phantom Auto Center** — mechanical, safety, detailing, wraps, PPF, ceramic coating, installs. |
| **pure-aura-collective-main** | Vite + React — **Lumière** aesthetic clinic (laser, teeth whitening, body contouring, cryotherapy). |
| **royal-pizza** | Next.js (+ backend folder) for **The Royal Pizzeria and Bar** / Royal Pizza and Subs — Georgetown, ON; menu-driven UX, cart. |
| **silken-trading** | Empty upstream repository. |
| **silken-web-app** | Next.js 14 site for **Silken Trading** — automotive interior products and installation (JSON-driven content, Tailwind, motion). |
| **SILKEN-TRADING-WEB** | Empty upstream repository. |
| **Silken-Web** | Empty upstream repository. |
| **Site-3** | Next.js marketing for **Merchant Orders** — branded online ordering / restaurant SaaS positioning. |
| **sunset** | Empty upstream repository. |
| **uraerotech** | Full-stack **UR Aerotech** — aircraft repair & parts e-commerce (Next.js, Prisma, MongoDB, NextAuth, admin, Vercel Blob). |
| **VNE-construction** | Next.js site running as **Aerofix Handyman Services** (Toronto handyman, pricing, local SEO); repo folder name is legacy. |
| **watami** | Next.js pickup ordering for **Watami Japanese Food** (Hawthorn VIC) — sushi/bento/ramen, Stripe hooks. |

## Repository layout note

All listed folders live under **one** Git repository at this root. History for each app is whatever is committed here; for a checkout that only contains one project, use **Option A** (sparse) or **Option B** (copy + `git init`) above.
