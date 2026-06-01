import connectDB from "@/lib/mongodb";
import SiteSetting from "@/models/SiteSetting";
import { RESTAURANT_NAME, RESTAURANT_ADDRESS } from "./constants";
import { getRestaurantLogoUrl } from "./restaurant-logo";

export interface RestaurantContext {
  name: string;
  address: string;
  logoUrl: string | null;
  pickupPrepareTimeMinutes: number;
}

export async function getRestaurantContext(): Promise<RestaurantContext> {
  try {
    await connectDB();
    const setting = await SiteSetting.findOne().lean();
    return {
      name: (setting as any)?.restaurantName || RESTAURANT_NAME,
      address: (setting as any)?.address || RESTAURANT_ADDRESS,
      logoUrl: getRestaurantLogoUrl((setting as any)?.logo),
      pickupPrepareTimeMinutes: (setting as any)?.pickupPrepareTimeMinutes || 20,
    };
  } catch {
    return {
      name: RESTAURANT_NAME,
      address: RESTAURANT_ADDRESS,
      logoUrl: null,
      pickupPrepareTimeMinutes: 20,
    };
  }
}
