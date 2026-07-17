/**
 * Chan's Garden Menu Import Script
 * Source: https://www.skipthedishes.com/chan-garden
 * Run: npm run seed
 */

const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/chans-garden-site";

const MenuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);
MenuItemSchema.index({ name: 1, category: 1 }, { unique: true });

const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", MenuItemSchema);

const { getMenuItemImage } = require("./menuImages");

const MENU = [
  // ─── Appetizers ───────────────────────────────────────────────
  { category: "Appetizers", name: "A1. Vegetarian Spring Roll (1 pc)", description: "", price: 3.00 },
  { category: "Appetizers", name: "A2. Deep Fried Chicken Wings (10 pcs)", description: "", price: 16.45 },
  { category: "Appetizers", name: "A3. Lettuce Wrap", description: "", price: 19.45 },
  { category: "Appetizers", name: "A4. Green Onion Pancake (2 Pcs)", description: "", price: 12.45 },
  { category: "Appetizers", name: "A5. Grilled Pork Dumplings (10 Pcs)", description: "", price: 17.45 },
  { category: "Appetizers", name: "A6. Wonton in Spicy Garlic Pepper Sauce (12 Pcs)", description: "", price: 14.45 },
  { category: "Appetizers", name: "A7. Wonton with Hot and Sour Sauce (12 Pcs)", description: "One order comes with twelve pieces.", price: 14.45 },
  { category: "Appetizers", name: "A8. Deep Fried Wontons", description: "", price: 12.45 },
  { category: "Appetizers", name: "A9. Salt and Pepper Deep Fried Tofu", description: "", price: 12.45 },

  // ─── Soups ────────────────────────────────────────────────────
  { category: "Soups", name: "B1. Wonton Soup", description: "", price: 11.00 },
  { category: "Soups", name: "B2. Wonton Noodle Soup", description: "", price: 12.00 },
  { category: "Soups", name: "B3. Wor Wonton Soup", description: "", price: 15.45 },
  { category: "Soups", name: "B4. Hot and Sour Soup", description: "", price: 12.00 },
  { category: "Soups", name: "B5. Sweet Corn and Chicken Soup", description: "", price: 12.00 },
  { category: "Soups", name: "B6. Minced Beef Soup", description: "", price: 13.45 },

  // ─── Special Combination ──────────────────────────────────────
  { category: "Special Combination", name: "Special Combination A", description: "Chicken chow mein and sweet and sour boneless chicken.", price: 16.45 },
  { category: "Special Combination", name: "Special Combination B", description: "BBQ pork fried rice and sweet and sour chicken balls.", price: 16.45 },
  { category: "Special Combination", name: "Special Combination C", description: "Chicken chow mein, BBQ pork fried rice, and sweet and sour boneless pork.", price: 18.45 },
  { category: "Special Combination", name: "Special Combination D", description: "BBQ pork fried rice, chicken chop suey, and sweet and sour boneless pork.", price: 18.45 },
  { category: "Special Combination", name: "Special Combination E", description: "Dry garlic boneless pork, breaded almond chicken, and BBQ pork fried rice.", price: 19.45 },
  { category: "Special Combination", name: "Special Combination F", description: "Ginger beef, BBQ pork fried rice, and deep fried prawns.", price: 19.45 },

  // ─── Beef ─────────────────────────────────────────────────────
  { category: "Beef", name: "C1. Beef Chop Suey", description: "", price: 18.95 },
  { category: "Beef", name: "C2. Beef with Broccoli", description: "", price: 18.95 },
  { category: "Beef", name: "C3. Beef with Black Bean Sauce", description: "", price: 18.95 },
  { category: "Beef", name: "C4. Beef with String Beans in Black Bean Sauce", description: "", price: 19.95 },
  { category: "Beef", name: "C5. Sliced Beef with Ginger and Onion", description: "", price: 20.95 },
  { category: "Beef", name: "C6. Ginger Beef", description: "", price: 20.95 },
  { category: "Beef", name: "C7. Stir Fried Beef with Ginger", description: "", price: 20.95 },
  { category: "Beef", name: "C8. Szechuan Boiled Beef", description: "", price: 20.95 },
  { category: "Beef", name: "C9. Stir Fried Beef with Hoisin Sauce", description: "", price: 20.95 },
  { category: "Beef", name: "C10. Beef and Gai Ian", description: "", price: 20.95 },
  { category: "Beef", name: "Beef with Mixed Vegetables", description: "", price: 17.45 },
  { category: "Beef", name: "Curry Beef", description: "", price: 17.45 },
  { category: "Beef", name: "Beef with Satay Sauce", description: "", price: 17.45 },
  { category: "Beef", name: "Beef and Tomato", description: "", price: 17.45 },
  { category: "Beef", name: "Mongolian Beef", description: "", price: 19.45 },
  { category: "Beef", name: "Beef and Broccoli in Black Bean Sauce", description: "", price: 18.45 },

  // ─── Lamb ─────────────────────────────────────────────────────
  { category: "Lamb", name: "D1. Stir Fried Lamb with Cumin", description: "", price: 21.95 },
  { category: "Lamb", name: "D2. Stir Fried Lamb with Scallions", description: "", price: 21.95 },
  { category: "Lamb", name: "D3. Stir Fried Lamb with Ginger", description: "", price: 21.95 },

  // ─── Pork ─────────────────────────────────────────────────────
  { category: "Pork", name: "E1. Sweet and Sour Pork", description: "", price: 18.95 },
  { category: "Pork", name: "E2. Salt and Pepper Ribs", description: "", price: 18.50 },
  { category: "Pork", name: "E3. Honey Garlic Ribs", description: "", price: 18.50 },
  { category: "Pork", name: "E4. Sweet and Sour Pork Chop", description: "", price: 18.50 },
  { category: "Pork", name: "E5. Peking Style Pork Chop", description: "", price: 18.50 },
  { category: "Pork", name: "E6. Szechuan Shredded Pork", description: "", price: 18.95 },
  { category: "Pork", name: "E7. Honey Garlic Boneless Pork", description: "", price: 18.95 },
  { category: "Pork", name: "E8. Dry Garlic Boneless Pork", description: "", price: 18.95 },
  { category: "Pork", name: "E9. Fried Pork Chop with Salad Sauce", description: "", price: 18.95 },
  { category: "Pork", name: "Sweet and Sour Spareribs", description: "", price: 17.45 },
  { category: "Pork", name: "Spicy Dry Garlic Spareribs", description: "", price: 17.45 },
  { category: "Pork", name: "Sweet and Sour Boneless Pork", description: "", price: 18.45 },
  { category: "Pork", name: "Mu Shoo Pork (10 pcs)", description: "", price: 17.45 },
  { category: "Pork", name: "Honey Garlic Pork Chop", description: "", price: 17.45 },
  { category: "Pork", name: "Spicy Dry Garlic Pork Chop", description: "", price: 17.45 },

  // ─── Chicken ──────────────────────────────────────────────────
  { category: "Chicken", name: "F1. Chicken Chop Suey", description: "", price: 18.95 },
  { category: "Chicken", name: "F2. Sweet and Sour Chicken Balls", description: "", price: 18.95 },
  { category: "Chicken", name: "F3. Ginger Chicken", description: "", price: 20.95 },
  { category: "Chicken", name: "F4. General Tao's Chicken", description: "", price: 20.95 },
  { category: "Chicken", name: "F5. Chicken with Black Bean Sauce", description: "", price: 18.95 },
  { category: "Chicken", name: "F6. Diced Chicken with Cashew Nuts", description: "", price: 18.95 },
  { category: "Chicken", name: "F7. Diced Chicken with Peanut and Chili Sauce", description: "", price: 18.95 },
  { category: "Chicken", name: "F8. Diced Chicken with Chili and Garlic Sauce", description: "", price: 18.95 },
  { category: "Chicken", name: "F9. Almond Chicken", description: "", price: 18.95 },
  { category: "Chicken", name: "F10. Lemon Chicken", description: "", price: 18.95 },
  { category: "Chicken", name: "Chicken with Tomato Sauce", description: "", price: 16.45 },
  { category: "Chicken", name: "Curry Chicken", description: "", price: 16.45 },
  { category: "Chicken", name: "Chicken with Broccoli", description: "", price: 16.45 },
  { category: "Chicken", name: "Chicken with Satay Sauce", description: "", price: 16.45 },
  { category: "Chicken", name: "Dai Ching Chicken Boneless", description: "", price: 17.45 },
  { category: "Chicken", name: "Pepper Chicken on Dry Spinach", description: "", price: 18.45 },

  // ─── Seafood ──────────────────────────────────────────────────
  { category: "Seafood", name: "G1. Salt and Pepper Prawns (with Shell)", description: "", price: 21.95 },
  { category: "Seafood", name: "G2. Salt and Pepper Squid", description: "", price: 20.95 },
  { category: "Seafood", name: "G3. Salt and Pepper Cod", description: "", price: 20.95 },
  { category: "Seafood", name: "G4. Prawns Chop Suey", description: "", price: 21.95 },
  { category: "Seafood", name: "G5. Prawns with Cashew Nuts", description: "", price: 21.95 },
  { category: "Seafood", name: "G6. Kung Pao Prawns", description: "", price: 21.95 },
  { category: "Seafood", name: "G7. Deep Fried Prawns", description: "Served with sauce on the side.", price: 21.95 },
  { category: "Seafood", name: "G8. Fresh Squid with Black Bean and Pepper", description: "", price: 20.95 },
  { category: "Seafood", name: "G9. Kung Pao Seafood", description: "", price: 21.95 },
  { category: "Seafood", name: "G10. Szechuan Dry Braised Prawns", description: "", price: 21.95 },
  { category: "Seafood", name: "Prawns with Chili and Garlic Sauce", description: "", price: 21.45 },
  { category: "Seafood", name: "Prawns and Chicken with Hot Chili Pepper", description: "", price: 21.45 },
  { category: "Seafood", name: "Seafood Chop Suey", description: "", price: 21.45 },
  { category: "Seafood", name: "Curry Prawns", description: "", price: 20.45 },
  { category: "Seafood", name: "Prawns with Black Bean Sauce", description: "", price: 20.45 },
  { category: "Seafood", name: "Salt and Pepper Seafood", description: "", price: 21.45 },
  { category: "Seafood", name: "Prawns with Peanut and Chili Sauce", description: "", price: 20.45 },
  { category: "Seafood", name: "Dai Qian Prawns", description: "", price: 20.45 },
  { category: "Seafood", name: "Prawns with Satay Sauce", description: "", price: 20.45 },
  { category: "Seafood", name: "Deep Fried Cod Fillet with Cream Sauce", description: "", price: 20.45 },
  { category: "Seafood", name: "Deep Fried Cod Fillet Tofu with Hot Bean Sauce", description: "", price: 20.45 },
  { category: "Seafood", name: "Prawns with Broccoli", description: "", price: 20.45 },
  { category: "Seafood", name: "Prawns with Green Beans", description: "", price: 21.45 },

  // ─── Egg Foo Young ────────────────────────────────────────────
  { category: "Egg Foo Young", name: "J1. Foo Young", description: "Served with a choice of protein.", price: 16.95 },
  { category: "Egg Foo Young", name: "J2. Shrimp Foo Young", description: "", price: 17.95 },
  { category: "Egg Foo Young", name: "J3. Mushroom Foo Young", description: "", price: 15.95 },
  { category: "Egg Foo Young", name: "J4. Mixed Vegetable Foo Young", description: "", price: 15.95 },
  { category: "Egg Foo Young", name: "J5. House Special Foo Young", description: "", price: 15.95 },

  // ─── Vegetables ───────────────────────────────────────────────
  { category: "Vegetables", name: "H1. Broccoli with Garlic Sauce", description: "", price: 16.45 },
  { category: "Vegetables", name: "H2. Gai Ian with Garlic", description: "", price: 17.45 },
  { category: "Vegetables", name: "H3. Stir-Fried Vegetable", description: "", price: 16.45 },
  { category: "Vegetables", name: "H4. String Beans in Garlic Sauce", description: "", price: 17.45 },
  { category: "Vegetables", name: "H4. String Beans in Black Bean Sauce", description: "", price: 17.45 },
  { category: "Vegetables", name: "H4. Szechuan String Bean", description: "", price: 17.45 },
  { category: "Vegetables", name: "H5. Eggplant with Chili and Garlic Sauce", description: "", price: 17.45 },
  { category: "Vegetables", name: "H6. Soy Sauce Eggplant", description: "", price: 17.45 },
  { category: "Vegetables", name: "Mixed Four Kinds of Vegetable", description: "", price: 15.45 },
  { category: "Vegetables", name: "Deep Fried Tofu with Stir-Fried Vegetables", description: "", price: 16.45 },
  { category: "Vegetables", name: "Mu Shoo Vegetables", description: "", price: 15.45 },
  { category: "Vegetables", name: "Dai Ching Vegetable Chop Suey", description: "", price: 15.45 },
  { category: "Vegetables", name: "Hot and Sour Vegetables Chop Suey", description: "", price: 15.45 },
  { category: "Vegetables", name: "Curry Vegetables", description: "", price: 15.45 },
  { category: "Vegetables", name: "Black Bean Sauce Chop Suey", description: "", price: 15.45 },

  // ─── Tofu ─────────────────────────────────────────────────────
  { category: "Tofu", name: "I1. Salt and Pepper Tofu", description: "", price: 15.95 },
  { category: "Tofu", name: "I2. Mapo Tofu", description: "", price: 17.95 },
  { category: "Tofu", name: "I3. Tofu and Eggplant in Chili and Garlic Sauce", description: "", price: 17.95 },
  { category: "Tofu", name: "I4. Braised Tofu with Vegetables", description: "", price: 17.95 },
  { category: "Tofu", name: "I5. Tofu in Black Bean Sauce", description: "", price: 17.95 },
  { category: "Tofu", name: "I6. Diced Tofu with Peanut and Chilli", description: "", price: 17.95 },

  // ─── Chow Mein ────────────────────────────────────────────────
  { category: "Chow Mein", name: "K1. Beef or BBQ Pork Chow Mein", description: "", price: 16.95 },
  { category: "Chow Mein", name: "K2. Shrimp Chow Mein", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K3. Mixed Vegetables Chow Mein", description: "", price: 15.95 },
  { category: "Chow Mein", name: "K4. Seafood Chow Mein", description: "", price: 19.95 },
  { category: "Chow Mein", name: "K5. Fried Noodle in Soy Sauce", description: "", price: 15.95 },
  { category: "Chow Mein", name: "K6. Beef Fried Noodles with Black Bean Pepper Sauce", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K7. Chicken, Beef or Pork Chow Mein with Oyster Sauce", description: "Crispy noodles.", price: 18.95 },
  { category: "Chow Mein", name: "K7. Chicken, Beef or Pork Chow Mein with Curry Sauce", description: "Crispy noodles.", price: 18.95 },
  { category: "Chow Mein", name: "K8. House Special Chow Mein Crispy Noodle", description: "Crispy noodle.", price: 19.95 },
  { category: "Chow Mein", name: "K9. Singapore Vermicelli Rice Noodles", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K10. Three Shreds Fried Rice Noodles", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K11. Shanghai Chow Mein", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K12. Hand Pulled Thick Noodles with Shredded Pork", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K13. Beef Chow Fun", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K14. Shanghai Fried Rice Cake", description: "", price: 17.95 },
  { category: "Chow Mein", name: "K15. Korean Fried Rice Cake", description: "", price: 17.95 },
  { category: "Chow Mein", name: "Chicken Chow Mein", description: "", price: 17.45 },
  { category: "Chow Mein", name: "House Special Cantonese Style Chow Mein", description: "Crispy noodles.", price: 19.45 },
  { category: "Chow Mein", name: "Singapore Noodles", description: "", price: 17.45 },
  { category: "Chow Mein", name: "Beef Chow Fun with Garlic and Black Bean Sauce", description: "", price: 16.45 },
  { category: "Chow Mein", name: "Dai Ching Vegetable Chow Mein", description: "", price: 15.45 },
  { category: "Chow Mein", name: "Fried Noodles with Soy Sauce", description: "", price: 15.45 },

  // ─── Fried Rice ───────────────────────────────────────────────
  { category: "Fried Rice", name: "L1. Chicken or Beef or Pork Fried Rice", description: "", price: 16.95 },
  { category: "Fried Rice", name: "L2. Egg Fried Rice", description: "", price: 14.95 },
  { category: "Fried Rice", name: "L3. Mixed Vegetables Fried Rice", description: "", price: 14.95 },
  { category: "Fried Rice", name: "L4. Shrimp Fried Rice", description: "", price: 17.95 },
  { category: "Fried Rice", name: "L5. Chicken and Pineapple Fried Rice", description: "", price: 16.95 },
  { category: "Fried Rice", name: "L6. House Special Fried Rice", description: "", price: 17.95 },
  { category: "Fried Rice", name: "L7. Szechuan Fried Rice", description: "", price: 16.95 },
  { category: "Fried Rice", name: "L8. BBQ Pork and Shrimp Fried Rice", description: "", price: 16.95 },
  { category: "Fried Rice", name: "L9. Diced Chicken with Peanut Chili Fried Rice", description: "", price: 16.95 },
  { category: "Fried Rice", name: "L10. Stir-Fried Sticky Rice", description: "", price: 19.95 },
  { category: "Fried Rice", name: "Plain Fried Rice", description: "", price: 14.45 },
  { category: "Fried Rice", name: "Mushroom Fried Rice", description: "", price: 14.45 },

  // ─── Steamed Rice ─────────────────────────────────────────────
  { category: "Steamed Rice", name: "Tomato on Steamed Rice", description: "Served with a choice of protein.", price: 14.45 },
  { category: "Steamed Rice", name: "Chicken or Beef with Black Bean Sauce on Steamed Rice", description: "Served with a choice of protein.", price: 14.45 },
  { category: "Steamed Rice", name: "Satay Chicken or Beef on Steamed Rice", description: "Served with a choice of protein.", price: 14.45 },
  { category: "Steamed Rice", name: "Szechuan Chicken or Beef on Steamed Rice", description: "Served with a choice of protein.", price: 14.45 },
  { category: "Steamed Rice", name: "Curry Chicken or Beef on Steamed Rice", description: "Served with a choice of protein.", price: 19.45 },

  // ─── Group Dinner Combination ─────────────────────────────────
  { category: "Group Dinner Combination", name: "Dinner For Two", description: "Two spring rolls, chicken chop suey, sweet and sour boneless pork, and BBQ pork fried rice.", price: 41.45 },
  { category: "Group Dinner Combination", name: "Dinner For Three", description: "Three spring rolls, chicken chow mein, beef chop suey, sweet and sour chicken balls, and BBQ pork fried rice.", price: 58.45 },
  { category: "Group Dinner Combination", name: "Dinner For Four", description: "Four spring rolls, chicken chow mein, sweet and sour boneless pork, beef chop suey, deep-fried prawns, and house special fried rice.", price: 74.45 },
  { category: "Group Dinner Combination", name: "Dinner For Six", description: "Six spring rolls, chicken chow mein, sweet and sour boneless pork, deep-fried prawns, house special chop suey, breaded almond chicken, and house special fried rice.", price: 110.45 },
  { category: "Group Dinner Combination", name: "Dinner For Eight", description: "Eight spring rolls, chicken chow mein, deep-fried prawns, Szechuan chicken, house special chop suey, ginger beef, breaded almond chicken, house special fried rice, and sweet and sour boneless pork.", price: 142.45 },

  // ─── Sides ────────────────────────────────────────────────────
  { category: "Sides", name: "Steamed Rice", description: "", price: 2.75 },
  { category: "Sides", name: "Sweet and Sour Sauce", description: "", price: 1.50 },
  { category: "Sides", name: "Honey and Garlic Sauce", description: "", price: 3.00 },
  { category: "Sides", name: "Curry Sauce", description: "", price: 3.00 },
  { category: "Sides", name: "Black Bean Sauce", description: "", price: 3.00 },
  { category: "Sides", name: "Sesame Seeds", description: "", price: 2.25 },
  { category: "Sides", name: "Chili Oil", description: "", price: 2.50 },
  { category: "Sides", name: "Hot Sauce", description: "", price: 2.50 },

  // ─── Dessert ──────────────────────────────────────────────────
  { category: "Dessert", name: "Cheese Cake", description: "", price: 5.25 },
  { category: "Dessert", name: "Black Forest Cake", description: "", price: 3.75 },

  // ─── Beverages ────────────────────────────────────────────────
  { category: "Beverages", name: "Ice Tea", description: "", price: 2.50 },
  { category: "Beverages", name: "Juice", description: "", price: 3.25 },
];

async function run() {
  console.log("🔌 Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI, { bufferCommands: false });
  console.log(`✅ Connected — database: chans-garden-site`);

  // Clear existing menu items
  await MenuItem.deleteMany({});
  console.log("🗑️  Cleared old menu items");

  // Insert all items
  let added = 0;
  let skipped = 0;

  for (const item of MENU) {
    try {
      await MenuItem.create({
        name: item.name,
        description: item.description || "",
        price: item.price,
        category: item.category,
        image: getMenuItemImage(item.name),
        isAvailable: true,
      });
      added++;
    } catch (err) {
      console.warn(`  ⚠️  Skip duplicate: ${item.name}`);
      skipped++;
    }
  }

  await mongoose.disconnect();

  console.log("\n✅ Menu import complete!");
  console.log(`   Added:   ${added}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total:   ${MENU.length}`);
  console.log(`   Categories: Appetizers, Soups, Special Combination, Beef, Lamb, Pork, Chicken, Seafood, Egg Foo Young, Vegetables, Tofu, Chow Mein, Fried Rice, Steamed Rice, Group Dinner Combination, Sides, Dessert, Beverages`);
}

run().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
