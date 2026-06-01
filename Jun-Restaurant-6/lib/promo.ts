import Promotion from "@/models/Promotion";

export interface PromoResult {
  valid: boolean;
  discount: number;
  error?: string;
}

export async function applyPromo(code: string, subtotal: number): Promise<PromoResult> {
  if (!code) return { valid: false, discount: 0 };

  const promo = await Promotion.findOne({
    code: code.toUpperCase(),
    active: true,
  });

  if (!promo) return { valid: false, discount: 0, error: "Invalid promo code" };

  const now = new Date();
  if (promo.startDate && now < promo.startDate) return { valid: false, discount: 0, error: "Promo not yet active" };
  if (promo.endDate && now > promo.endDate) return { valid: false, discount: 0, error: "Promo has expired" };
  if (promo.maxUses && promo.usedCount >= promo.maxUses) return { valid: false, discount: 0, error: "Promo code limit reached" };
  if (promo.minOrder && subtotal < promo.minOrder) return { valid: false, discount: 0, error: `Minimum order $${promo.minOrder.toFixed(2)} required` };

  let discount = 0;
  if (promo.discountType === "percentage") {
    discount = Math.round((subtotal * promo.value) / 100 * 100) / 100;
  } else {
    discount = Math.min(promo.value, subtotal);
  }

  return { valid: true, discount };
}
