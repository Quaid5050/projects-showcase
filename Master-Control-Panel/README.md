# Master Control Panel (Admin Panel)

A small Next.js + Tailwind admin app for the restaurant order system. This is the UI
the client uses to onboard restaurants (e.g. **Ono Poke Bar**) and create owner
accounts that log into the React Native mobile app.

## What it does

- **Admin login** via `POST /api/admin/login`.
- **Restaurants dashboard** — list + details, including recent orders and owner users.
- **Create restaurant** — name, restaurantKey, domain, isActive. After creation, the
  generated integration API key is shown **once** with a copy button and a clear warning
  (the backend only stores a hash).
- **Create owner** — picks a restaurant from a dropdown, captures name, email, and a
  temporary password (with a one-click generator). On success the credentials are shown
  again so the admin can hand them off.
- **Reset password** for an owner from the restaurant details page.
- **Rotate integration API key** for a restaurant (one-click; shows the new key once).
- **Logout** in the top-right.

## Tech

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS v4

## Running it

```bash
# 1. Make sure the backend is running on http://localhost:4000

# 2. From this directory
npm install
npm run dev
```

The app boots on http://localhost:3000.

The backend base URL is configurable via `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
(default: `http://localhost:4000`).

## Project layout

```
src/
  app/
    layout.tsx                                 # root layout + ToastProvider
    page.tsx                                   # redirect entry (login or dashboard)
    login/page.tsx                             # /login
    dashboard/
      layout.tsx                               # auth guard + sidebar + topbar
      page.tsx                                 # restaurants list
      restaurants/new/page.tsx                 # create restaurant
      restaurants/[id]/page.tsx                # restaurant details
      restaurant-users/new/page.tsx            # create owner
  components/                                  # Button, Input, Card, Toast, Modal, ...
  lib/
    api.ts                                     # the one fetch wrapper
    auth.ts                                    # token storage helpers
    types.ts                                   # shared TS types
    utils.ts                                   # cn, formatMoney, formatDate
```

## Auth model

The admin JWT is stored in `localStorage` under `mcp_admin_token` (per requirement #4 for
local development). The API client attaches it as `Authorization: Bearer <token>` and
auto-logs-out on 401.

## Important: the integration API key

When you create a restaurant the backend generates the integration API key, stores only
its hash, and returns the plain text **once**. The Create Restaurant page surfaces this
prominently with copy-to-clipboard. If the admin closes that screen without copying, the
key is gone — they'll have to rotate it from the restaurant details page.

## Business flow

1. Admin logs in.
2. Admin creates **Ono Poke Bar** with the restaurant form. Copies the integration API key.
3. Admin creates the **Ono Poke Bar owner** account (with a temporary password) and
   shares the email + password with the owner.
4. The owner signs into the React Native app with those credentials and sees only
   Ono Poke Bar's paid orders.
