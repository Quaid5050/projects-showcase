/**
 * scripts/seed-stclair.mjs
 *
 * Duplicates the ono-poke-bar-georgetown database into ono-poke-bar-stclair:
 *   - categories      → copied as-is
 *   - menuitems       → copied as-is
 *   - promotions      → copied as-is
 *   - sitesettings    → copied, address updated to St. Clair, phone/email cleared
 *   - checkoutemailverifications → empty collection created
 *   - stripewebhookevents        → empty collection created
 *   - orders          → empty collection created
 *   - users           → admin user only (no regular users copied)
 *
 * Usage:
 *   node scripts/seed-stclair.mjs
 */

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

// ── CONFIG ────────────────────────────────────────────────────────────────────
const SOURCE_DB = "ono-poke-bar-georgetown";
const TARGET_DB = "ono-poke-bar-stclair";
const MONGO_URI = "mongodb://127.0.0.1:27017";

// Admin credentials for the St. Clair site
const NEW_ADMIN_EMAIL    = "admin@onopokebar.com";
const NEW_ADMIN_NAME     = "ONO Admin St Clair";
const NEW_ADMIN_PASSWORD = "StClair2025!";
// ─────────────────────────────────────────────────────────────────────────────

const COLLECTIONS_COPY_AS_IS = [
  "categories",
  "menuitems",
  "promotions",
];

const COLLECTIONS_EMPTY = [
  "orders",
  "users",
  "stripewebhookevents",
  "checkoutemailverifications",
];

async function main() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  console.log(`Connected to MongoDB at ${MONGO_URI}`);

  const src = client.db(SOURCE_DB);
  const tgt = client.db(TARGET_DB);

  // ── 1. Drop target DB (clean slate) ──────────────────────────────────────
  await tgt.dropDatabase();
  console.log(`Dropped existing "${TARGET_DB}" (if any) — clean slate.`);

  // ── 2. Copy collections as-is ─────────────────────────────────────────────
  for (const col of COLLECTIONS_COPY_AS_IS) {
    const docs = await src.collection(col).find({}).toArray();
    if (docs.length > 0) {
      await tgt.collection(col).insertMany(docs);
    }
    console.log(`  ✓ ${col}: copied ${docs.length} document(s)`);
  }

  // ── 3. Copy sitesettings, update address, clear phone/email ───────────────
  const settings = await src.collection("sitesettings").find({}).toArray();
  if (settings.length > 0) {
    const updated = settings.map((s) => ({
      ...s,
      address: "1353 St Clair Ave W, Toronto, ON M6E 1C5",
      phone: "",
      email: "",
    }));
    await tgt.collection("sitesettings").insertMany(updated);
    console.log(`  ✓ sitesettings: copied ${updated.length} document(s), address updated to St. Clair`);
  } else {
    console.log(`  ⚠ sitesettings: no documents in source — skipped`);
  }

  // ── 4. Create empty collections ───────────────────────────────────────────
  for (const col of COLLECTIONS_EMPTY) {
    await tgt.createCollection(col);
    console.log(`  ✓ ${col}: created empty`);
  }

  // ── 5. Insert St. Clair admin user ────────────────────────────────────────
  const passwordHash = await bcrypt.hash(NEW_ADMIN_PASSWORD, 12);
  await tgt.collection("users").insertOne({
    name: NEW_ADMIN_NAME,
    email: NEW_ADMIN_EMAIL.toLowerCase(),
    passwordHash,
    role: "admin",
    phone: "",
    addresses: [],
    isBlocked: false,
    emailVerified: true,
    emailVerifiedAt: new Date(),
    emailVerificationToken: "",
    emailVerificationExpires: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log(`  ✓ users: admin created — email: ${NEW_ADMIN_EMAIL}`);

  // ── 6. Summary ────────────────────────────────────────────────────────────
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Database "${TARGET_DB}" is ready.

  Collections copied from "${SOURCE_DB}":
    ✓ categories
    ✓ menuitems
    ✓ promotions
    ✓ sitesettings  (address → 1353 St Clair Ave W, Toronto, ON M6E 1C5)

  Empty collections created:
    ✓ orders
    ✓ users
    ✓ stripewebhookevents
    ✓ checkoutemailverifications

  Admin login:
    Email:    ${NEW_ADMIN_EMAIL}
    Password: ${NEW_ADMIN_PASSWORD}

  ⚠  Change the admin password after first login.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

  await client.close();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
