import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey || !secretKey.startsWith("sk_")) {
  throw new Error("STRIPE_SECRET_KEY must start with sk_");
}

const stripe = new Stripe(secretKey, {
  apiVersion: "2025-02-24.acacia",
});

export default stripe;
