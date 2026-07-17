# OSIPP Delivery — MERN Stack (Single Deploy)

> Website + Admin Panel = 1 React app. Backend serves everything in production.

## Deploy Structure
```
Only 2 things to deploy:
├── backend/    → Node.js API (Render, Railway, VPS)
└── frontend/   → React app with /admin routes (same build)

In production:  backend serves frontend/build → SINGLE URL
  yoursite.com/           → Customer website
  yoursite.com/admin      → Admin panel
  yoursite.com/api/*      → API
```

## Brand Colors
| Color   | Hex       | Usage                        |
|---------|-----------|------------------------------|
| Black   | `#0A0A0A` | Primary, Navbar, Footer      |
| Gold    | `#C9922A` | Accent, CTAs, Highlights     |
| Cream   | `#FBF7F0` | Backgrounds                  |
| White   | `#FFFFFF` | Cards, Product Areas         |

## Quick Start

### 1. MongoDB
Make sure MongoDB is running on `localhost:27017`

### 2. Backend
```bash
cd backend
npm install
npm run seed          # 38 products + admin user + sample orders
npm run dev           # → http://localhost:5000
```

### 3. Frontend (includes admin)
```bash
cd frontend
npm install
npm start             # → http://localhost:3000
```

### Access
- **Website:** http://localhost:3000
- **Admin:** http://localhost:3000/admin
- **Admin Login:** admin@osipp.ca / osipp2024

## Production Deploy

```bash
# Build frontend
cd frontend && npm run build

# Set backend to production
cd ../backend
NODE_ENV=production npm start
# Backend serves frontend/build at port 5000
# Everything runs from 1 URL
```

## File Structure
```
osipp-delivery/
├── backend/
│   ├── server.js           # API + serves React build in prod
│   ├── seed.js             # DB seeder (38 products + admin)
│   ├── models/
│   │   ├── User.js         # Auth (admin + customer)
│   │   ├── Product.js      # Products (Beer, Spirits, Wine, Convenience)
│   │   ├── Order.js        # Orders with status tracking
│   │   └── Settings.js     # Store settings
│   ├── routes/
│   │   ├── auth.js         # Register, Login, Profile
│   │   ├── products.js     # CRUD (public GET, admin POST/PUT/DELETE)
│   │   ├── orders.js       # Place order, track, manage
│   │   ├── dashboard.js    # Admin stats
│   │   ├── customers.js    # Customer aggregation
│   │   ├── categories.js   # Category counts
│   │   └── settings.js     # Store config
│   └── middleware/auth.js   # JWT + admin guard
│
└── frontend/
    └── src/
        ├── App.js          # Merged routing (public + admin)
        ├── App.css         # All styles (public + admin + responsive)
        ├── context/
        │   ├── CartContext.js    # Cart state
        │   └── AuthContext.js   # Admin auth
        ├── components/
        │   ├── Navbar.js        # Public navbar + mobile menu
        │   ├── Footer.js        # Public footer
        │   ├── CartDrawer.js    # Cart + 3-step checkout
        │   ├── ProductCard.js   # Product display
        │   ├── AdminSidebar.js  # Admin sidebar + mobile toggle
        │   ├── Toast.js         # Notifications
        │   └── Icons.js         # All SVG icons
        └── pages/
            ├── public/
            │   ├── Home.js      # Hero, categories, featured, how it works
            │   ├── Products.js  # Filter, search, product grid
            │   ├── Contact.js   # Phone, WhatsApp, Instagram, email form
            │   ├── About.js     # Story, stores, stats
            │   └── Tracking.js  # Order tracking by ID
            └── admin/
                ├── Login.js     # Secure admin login
                ├── Dashboard.js # Revenue, orders, stats
                ├── Orders.js    # View, status update, cancel
                ├── Products.js  # Add, edit, delete, filter
                ├── Customers.js # Customer list + spend
                └── Settings.js  # Business info, delivery config
```

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/login | - | Login |
| POST | /api/auth/register | - | Register |
| GET | /api/auth/me | Token | Current user |
| GET | /api/products | - | List products |
| POST | /api/products | Admin | Create product |
| PUT | /api/products/:id | Admin | Update product |
| DELETE | /api/products/:id | Admin | Delete product |
| POST | /api/orders | - | Place order (guest) |
| GET | /api/orders | Admin | List orders |
| GET | /api/orders/track/:id | - | Track by order ID |
| PUT | /api/orders/:id/status | Admin | Update status |
| GET | /api/dashboard | Admin | Stats & analytics |
| GET | /api/customers | Admin | Customer list |
| GET/PUT | /api/settings | Public/Admin | Store settings |

## Features Checklist
- [x] Product catalog (Beer, Spirits, Wine, Convenience)
- [x] Add to cart, qty control, cart drawer
- [x] 3-step checkout (details → payment → confirm)
- [x] Guest checkout (no registration needed)
- [x] Order tracking by order ID
- [x] WhatsApp click-to-chat integration
- [x] Instagram link
- [x] Contact form with email
- [x] Admin: Dashboard with revenue stats
- [x] Admin: Order management with status flow
- [x] Admin: Product CRUD with categories
- [x] Admin: Customer list with spend data
- [x] Admin: Store settings (delivery fee, hours, etc.)
- [x] Fully responsive (mobile, tablet, desktop)
- [x] SVG icons (no emoji)
- [x] White background design
- [x] Modern Syne + DM Sans typography
