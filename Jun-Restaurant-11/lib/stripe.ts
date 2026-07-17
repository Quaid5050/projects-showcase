import Stripe from 'stripe';

/**
 * Returns a Stripe instance. Throws at runtime if STRIPE_SECRET_KEY is missing.
 * Safe to import during build — the key is only read when the function is called.
 */
export function getStripeClient(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is not defined');
  return new Stripe(key, { apiVersion: '2026-06-24.dahlia' });
}
