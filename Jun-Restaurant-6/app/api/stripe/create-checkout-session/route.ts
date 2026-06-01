import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createStripeCheckoutSession } from "@/lib/checkout/create-stripe-checkout-session";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

const schema = z.object({
  items: z.array(z.object({
    menuItemId: z.string(),
    name: z.string(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
    selectedOptions: z.record(z.string(), z.string()).optional(),
    notes: z.string().optional(),
  })).min(1),
  customerName: z.string().min(1),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(1),
  tip: z.number().min(0).max(999).default(0),
  promoCode: z.string().optional(),
  notes: z.string().optional(),
  pickupType: z.enum(["ASAP", "SCHEDULED"]).default("ASAP"),
  pickupTime: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id;

    const result = await createStripeCheckoutSession({ ...parsed.data, userId });
    return NextResponse.json(result);
  } catch (err: any) {
    console.error("[create-checkout-session]", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
