import mongoose, { Schema, Document } from "mongoose";

export interface ISiteSetting extends Document {
  restaurantName: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  logo?: string;
  heroImages: string[];
  pickupPrepareTimeMinutes: number;
  socialLinks: Record<string, string>;
}

const SiteSettingSchema = new Schema<ISiteSetting>(
  {
    restaurantName: { type: String, default: "The Village Burger" },
    address: { type: String, default: "3800 Bayview St #105, Richmond, BC V7E 6K7, Canada" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    openingHours: {
      type: String,
      default: "Mon-Sat: 11am-6:30pm | Sun: 10:30am-6:30pm | Tue: Closed",
    },
    logo: String,
    heroImages: [String],
    pickupPrepareTimeMinutes: { type: Number, default: 20 },
    socialLinks: { type: Map, of: String, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.SiteSetting || mongoose.model<ISiteSetting>("SiteSetting", SiteSettingSchema);
