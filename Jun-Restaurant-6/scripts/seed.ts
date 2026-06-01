import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/village-burger";

const UserSchema = new mongoose.Schema({ name: String, email: { type: String, unique: true }, passwordHash: String, role: { type: String, default: "user" }, isBlocked: { type: Boolean, default: false }, emailVerified: { type: Boolean, default: false }, addresses: [String] }, { timestamps: true });
const CategorySchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, isActive: { type: Boolean, default: true }, sortOrder: { type: Number, default: 0 } }, { timestamps: true });
const MenuItemSchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, description: String, price: Number, category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, image: String, isAvailable: { type: Boolean, default: true }, isFeatured: Boolean, isPopular: Boolean, isSpicy: Boolean, isVegetarian: Boolean, options: [] }, { timestamps: true });
const SiteSettingSchema = new mongoose.Schema({ restaurantName: String, address: String, phone: String, email: String, openingHours: String, logo: String, pickupPrepareTimeMinutes: { type: Number, default: 20 } }, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
const MenuItem = mongoose.models.MenuItem || mongoose.model("MenuItem", MenuItemSchema);
const SiteSetting = mongoose.models.SiteSetting || mongoose.model("SiteSetting", SiteSettingSchema);

// ── All 14 categories ──────────────────────────────────────────────────────
const CATEGORIES = [
  { name: "Seafood Burger",        slug: "seafood-burger",        sortOrder: 1  },
  { name: "Sides",                 slug: "sides",                 sortOrder: 2  },
  { name: "Special",               slug: "special",               sortOrder: 3  },
  { name: "Deluxe Burger & Fries", slug: "deluxe-burger-fries",   sortOrder: 4  },
  { name: "Burgers",               slug: "burgers",               sortOrder: 5  },
  { name: "All Beef Hotdogs",      slug: "all-beef-hotdogs",      sortOrder: 6  },
  { name: "Fries",                 slug: "fries",                 sortOrder: 7  },
  { name: "Hot Dogs",              slug: "hot-dogs",              sortOrder: 8  },
  { name: "Seafood",               slug: "seafood",               sortOrder: 9  },
  { name: "Burger Menu",           slug: "burger-menu",           sortOrder: 10 },
  { name: "Hotdog Menu",           slug: "hotdog-menu",           sortOrder: 11 },
  { name: "Drink",                 slug: "drink",                 sortOrder: 12 },
  { name: "Milkshake",             slug: "milkshake",             sortOrder: 13 },
  { name: "Snacks",                slug: "snacks",                sortOrder: 14 },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected:", MONGODB_URI);

  // ── Admin user ─────────────────────────────────────────────────────────
  const existing = await User.findOne({ email: "admin@thevillageburger.ca" });
  if (!existing) {
    const passwordHash = await bcrypt.hash("Admin123!ChangeMe", 12);
    await User.create({ name: "Admin", email: "admin@thevillageburger.ca", passwordHash, role: "admin" });
    console.log("✅ Admin created: admin@thevillageburger.ca / Admin123!ChangeMe");
  } else {
    console.log("ℹ️  Admin already exists");
  }

  // ── Categories ─────────────────────────────────────────────────────────
  const catMap: Record<string, mongoose.Types.ObjectId> = {};
  for (const cat of CATEGORIES) {
    const c = await Category.findOneAndUpdate({ slug: cat.slug }, cat, { upsert: true, new: true });
    catMap[cat.slug] = c._id;
    console.log(`✅ Category: ${cat.name}`);
  }

  // ── Full menu items ────────────────────────────────────────────────────
  const ITEMS = [

    // ── cat1: Seafood Burger ──────────────────────────────────────────
    {
      name: "Wild Salmon Burger",
      slug: "seafood-burger-wild-salmon",
      price: 9.95,
      category: catMap["seafood-burger"],
      description: "Fresh wild salmon burger, lightly seasoned and grilled to perfection.",
      isPopular: true,
    },

    // ── cat2: Sides ───────────────────────────────────────────────────
    {
      name: "Hand Crafted Fries",
      slug: "sides-hand-crafted-fries",
      price: 5.95,
      category: catMap["sides"],
      description: "Freshly hand-crafted golden fries.",
      isPopular: true,
    },

    // ── cat3: Special ─────────────────────────────────────────────────
    {
      name: "Cod Banger",
      slug: "special-cod-banger",
      price: 9.95,
      category: catMap["special"],
      description: "Our signature crispy cod banger burger.",
      isPopular: true,
    },
    {
      name: "Prawn Burger",
      slug: "special-prawn-burger",
      price: 9.95,
      category: catMap["special"],
      description: "Juicy prawn burger with fresh toppings.",
    },

    // ── cat4: Deluxe Burger & Fries ───────────────────────────────────
    {
      name: "Kids Burger",
      slug: "deluxe-kids-burger",
      price: 7.99,
      category: catMap["deluxe-burger-fries"],
      description: "A smaller burger perfect for kids.",
    },
    {
      name: "Kids Fries",
      slug: "deluxe-kids-fries",
      price: 3.99,
      category: catMap["deluxe-burger-fries"],
      description: "A smaller portion of fries for kids.",
    },

    // ── cat5: Burgers ─────────────────────────────────────────────────
    {
      name: "Classic Cheeseburger",
      slug: "burgers-classic-cheeseburger",
      price: 14.00,
      category: catMap["burgers"],
      description: "Classic beef patty with melted cheese, lettuce, tomato, and our special sauce.",
      isPopular: true,
    },
    {
      name: "Seafood Burger",
      slug: "burgers-seafood-burger",
      price: 12.99,
      category: catMap["burgers"],
      description: "A delicious mix of fresh seafood in a toasted bun.",
    },
    {
      name: "Wild Salmon Burger",
      slug: "burgers-wild-salmon-burger",
      price: 11.99,
      category: catMap["burgers"],
      description: "Wild Pacific salmon burger with fresh greens.",
    },

    // ── cat6: All Beef Hotdogs ────────────────────────────────────────
    {
      name: "All Beef Hotdog",
      slug: "all-beef-hotdogs-hotdog",
      price: 4.95,
      category: catMap["all-beef-hotdogs"],
      description: "Classic all-beef hotdog in a soft bun.",
      isPopular: true,
    },

    // ── cat7: Fries ───────────────────────────────────────────────────
    {
      name: "Regular Fries",
      slug: "fries-regular",
      price: 5.95,
      category: catMap["fries"],
      description: "Golden crispy regular fries.",
      isPopular: true,
    },

    // ── cat8: Hot Dogs ────────────────────────────────────────────────
    {
      name: "All Beef Hot Dog (Small)",
      slug: "hot-dogs-small",
      price: 4.95,
      category: catMap["hot-dogs"],
      description: "All-beef hot dog, small size.",
    },
    {
      name: "All Beef Hot Dog (Large)",
      slug: "hot-dogs-large",
      price: 5.95,
      category: catMap["hot-dogs"],
      description: "All-beef hot dog, large size.",
      isPopular: true,
    },

    // ── cat9: Seafood ─────────────────────────────────────────────────
    {
      name: "Wild Sockeye Salmon Burger (With Fries)",
      slug: "seafood-sockeye-with-fries",
      price: 14.99,
      category: catMap["seafood"],
      description: "Wild sockeye salmon burger served with hand-crafted fries.",
      isPopular: true,
    },
    {
      name: "Wild Salmon Burger (No Fries)",
      slug: "seafood-wild-salmon-no-fries",
      price: 9.95,
      category: catMap["seafood"],
      description: "Wild salmon burger, no fries.",
    },
    {
      name: "Prawn Burger",
      slug: "seafood-prawn-burger",
      price: 9.95,
      category: catMap["seafood"],
      description: "Crispy prawn burger with fresh toppings.",
    },

    // ── cat10: Burger Menu ────────────────────────────────────────────
    {
      name: "Lobster Burger",
      slug: "burger-menu-lobster",
      price: 19.99,
      category: catMap["burger-menu"],
      description: "Premium lobster burger — a true indulgence.",
      isPopular: true,
      isFeatured: true,
    },
    {
      name: "Beef Burger",
      slug: "burger-menu-beef",
      price: 14.99,
      category: catMap["burger-menu"],
      description: "Juicy beef burger with classic toppings.",
      isPopular: true,
    },
    {
      name: "Wild Salmon Burger",
      slug: "burger-menu-wild-salmon",
      price: 11.99,
      category: catMap["burger-menu"],
      description: "Wild Pacific salmon burger.",
      isPopular: true,
    },
    {
      name: "Oyster Burger",
      slug: "burger-menu-oyster",
      price: 11.99,
      category: catMap["burger-menu"],
      description: "Crispy oyster burger with tangy sauce.",
    },
    {
      name: "Cod Burger",
      slug: "burger-menu-cod",
      price: 11.69,
      category: catMap["burger-menu"],
      description: "Beer-battered cod burger.",
    },
    {
      name: "Shrimp Burger",
      slug: "burger-menu-shrimp",
      price: 11.69,
      category: catMap["burger-menu"],
      description: "Crispy shrimp burger with fresh greens.",
    },
    {
      name: "Chicken Burger",
      slug: "burger-menu-chicken",
      price: 11.39,
      category: catMap["burger-menu"],
      description: "Grilled chicken burger with lettuce and tomato.",
    },
    {
      name: "Veggie Burger",
      slug: "burger-menu-veggie",
      price: 11.39,
      category: catMap["burger-menu"],
      description: "Plant-based veggie burger.",
      isVegetarian: true,
    },
    {
      name: "Wild Salmon Taco",
      slug: "burger-menu-wild-salmon-taco",
      price: 11.99,
      category: catMap["burger-menu"],
      description: "Wild salmon taco with fresh slaw.",
    },

    // ── cat11: Hotdog Menu ────────────────────────────────────────────
    {
      name: "Classic Hotdog",
      slug: "hotdog-menu-classic",
      price: 6.99,
      category: catMap["hotdog-menu"],
      description: "All-beef classic hotdog in a soft bun.",
      isPopular: true,
    },
    {
      name: "Bacon Hotdog",
      slug: "hotdog-menu-bacon",
      price: 7.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog topped with crispy bacon.",
    },
    {
      name: "Cheese Hotdog",
      slug: "hotdog-menu-cheese",
      price: 7.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog with melted cheese.",
    },
    {
      name: "Egg Hotdog",
      slug: "hotdog-menu-egg",
      price: 7.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog topped with a fried egg.",
    },
    {
      name: "Egg & Cheese Hotdog",
      slug: "hotdog-menu-egg-cheese",
      price: 8.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog with egg and melted cheese.",
    },
    {
      name: "Bacon & Cheese Hotdog",
      slug: "hotdog-menu-bacon-cheese",
      price: 8.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog with bacon and cheese.",
    },
    {
      name: "Bacon & Egg Hotdog",
      slug: "hotdog-menu-bacon-egg",
      price: 8.99,
      category: catMap["hotdog-menu"],
      description: "All-beef hotdog with bacon and egg.",
    },
    {
      name: "Bacon, Egg & Cheese Hotdog",
      slug: "hotdog-menu-bacon-egg-cheese",
      price: 9.99,
      category: catMap["hotdog-menu"],
      description: "The works — bacon, egg, and cheese on an all-beef hotdog.",
      isPopular: true,
      isFeatured: true,
    },

    // ── cat12: Drink ──────────────────────────────────────────────────
    {
      name: "Water",
      slug: "drink-water",
      price: 1.99,
      category: catMap["drink"],
      description: "Bottled water.",
    },
    {
      name: "Soda",
      slug: "drink-soda",
      price: 2.19,
      category: catMap["drink"],
      description: "Assorted sodas — Coke, Sprite, and more.",
      isPopular: true,
    },
    {
      name: "Coffee",
      slug: "drink-coffee",
      price: 2.99,
      category: catMap["drink"],
      description: "Fresh brewed coffee.",
      isPopular: true,
    },
    {
      name: "Tea",
      slug: "drink-tea",
      price: 2.99,
      category: catMap["drink"],
      description: "Hot tea.",
    },
    {
      name: "Lemon Tea",
      slug: "drink-lemon-tea",
      price: 3.29,
      category: catMap["drink"],
      description: "Refreshing lemon tea.",
    },
    {
      name: "Hot Chocolate",
      slug: "drink-hot-chocolate",
      price: 3.29,
      category: catMap["drink"],
      description: "Rich and creamy hot chocolate.",
    },
    {
      name: "Bottled Drink",
      slug: "drink-bottled",
      price: 3.29,
      category: catMap["drink"],
      description: "Assorted bottled drinks.",
    },

    // ── cat13: Milkshake ──────────────────────────────────────────────
    {
      name: "Organic Mixed Fruits Shake",
      slug: "milkshake-mixed-fruits",
      price: 7.99,
      category: catMap["milkshake"],
      description: "Organic mixed fruits milkshake — refreshing and delicious.",
      isPopular: true,
      isFeatured: true,
    },
    {
      name: "Organic Strawberry Shake",
      slug: "milkshake-strawberry",
      price: 7.99,
      category: catMap["milkshake"],
      description: "Organic strawberry milkshake.",
      isPopular: true,
    },
    {
      name: "Organic Blueberry Shake",
      slug: "milkshake-blueberry",
      price: 7.99,
      category: catMap["milkshake"],
      description: "Organic blueberry milkshake.",
    },
    {
      name: "Organic Mango Shake",
      slug: "milkshake-mango",
      price: 7.99,
      category: catMap["milkshake"],
      description: "Organic mango milkshake.",
      isPopular: true,
    },

    // ── cat14: Snacks ─────────────────────────────────────────────────
    {
      name: "Spring Rolls (8 pcs)",
      slug: "snacks-spring-rolls",
      price: 5.99,
      category: catMap["snacks"],
      description: "Crispy spring rolls, 8 pieces.",
      isPopular: true,
    },
    {
      name: "Fries",
      slug: "snacks-fries",
      price: 6.99,
      category: catMap["snacks"],
      description: "Snack-size golden fries.",
    },
    {
      name: "Chicken Nuggets (8 pcs)",
      slug: "snacks-chicken-nuggets",
      price: 6.99,
      category: catMap["snacks"],
      description: "Crispy chicken nuggets, 8 pieces.",
      isPopular: true,
    },
    {
      name: "Onion Rings",
      slug: "snacks-onion-rings",
      price: 7.99,
      category: catMap["snacks"],
      description: "Golden crispy onion rings.",
      isPopular: true,
    },
  ];

  // Upsert all items
  for (const item of ITEMS) {
    await MenuItem.findOneAndUpdate(
      { slug: item.slug },
      { ...item, isAvailable: true },
      { upsert: true, new: true }
    );
    console.log(`✅ ${item.name} — $${item.price}`);
  }

  // ── Site settings ──────────────────────────────────────────────────────
  await SiteSetting.findOneAndUpdate({}, {
    restaurantName: "The Village Burger",
    address: "3800 Bayview St #105, Richmond, BC V7E 6K7, Canada",
    phone: "",
    email: "admin@thevillageburger.ca",
    openingHours: "Mon: 11am–6:30pm | Tue: Closed | Wed–Fri: 11am–6:30pm | Sat: 10:30am–6:30pm | Sun: 10:30am–6:30pm",
    pickupPrepareTimeMinutes: 20,
    logo: "/logo.png",
  }, { upsert: true });
  console.log("✅ Site settings seeded");

  await mongoose.disconnect();
  console.log("\n🎉 Seed complete!");
  console.log(`   ${ITEMS.length} menu items across ${CATEGORIES.length} categories`);
  console.log("   Admin: admin@thevillageburger.ca / Admin123!ChangeMe");
}

seed().catch(err => { console.error(err); process.exit(1); });
