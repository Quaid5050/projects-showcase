import { connectDB } from "@/lib/mongodb";
import {
  RESTAURANT_DISPLAY_NAME,
  RESTAURANT_ADDRESS_LINES,
  DEFAULT_PICKUP_PREPARE_MINUTES,
} from "./constants";

export interface RestaurantEmailContext {
  restaurantName: string;
  logoUrl: string;
  pickupPrepareMinutes: number;
  email: string;
  addressLines: string[];
}

export async function loadRestaurantEmailContext(
  siteOrigin?: string
): Promise<RestaurantEmailContext> {
  const origin =
    siteOrigin ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const defaults: RestaurantEmailContext = {
    restaurantName: RESTAURANT_DISPLAY_NAME,
    logoUrl: `${origin}/images/logo.png`,
    pickupPrepareMinutes: DEFAULT_PICKUP_PREPARE_MINUTES,
    email:
      process.env.RESTAURANT_ORDER_EMAIL ||
      process.env.MAILGUN_FROM_EMAIL ||
      "",
    addressLines: RESTAURANT_ADDRESS_LINES,
  };

  try {
    await connectDB();
    // Dynamically import to avoid build-time issues
    const mongoose = await import("mongoose");
    const SiteSettingModel =
      mongoose.default.models.SiteSetting ||
      mongoose.default.model(
        "SiteSetting",
        new mongoose.default.Schema(
          {
            restaurantName: String,
            logo: String,
            pickupPrepareMinutes: Number,
            email: String,
          },
          { strict: false }
        )
      );

    const setting = await SiteSettingModel.findOne().sort({ updatedAt: -1 }).lean() as Record<string, unknown> | null;

    if (!setting) return defaults;

    const name = (setting.restaurantName as string) || defaults.restaurantName;
    const rawLogo = (setting.logo as string) || "";
    const logoUrl = rawLogo
      ? rawLogo.startsWith("http")
        ? rawLogo
        : `${origin}${rawLogo.startsWith("/") ? "" : "/"}${rawLogo}`
      : defaults.logoUrl;

    return {
      restaurantName: name,
      logoUrl,
      pickupPrepareMinutes:
        (setting.pickupPrepareMinutes as number) ||
        defaults.pickupPrepareMinutes,
      email: (setting.email as string) || defaults.email,
      addressLines: defaults.addressLines,
    };
  } catch {
    return defaults;
  }
}
