require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Key prefix:", process.env.STRIPE_SECRET_KEY?.substring(0, 12));
stripe.products.list({ limit: 1 })
  .then(() => { console.log("✅ Stripe connection OK"); process.exit(0); })
  .catch(e => { console.log("❌ Stripe error:", e.statusCode, e.type, e.message?.substring(0, 200)); process.exit(1); });
