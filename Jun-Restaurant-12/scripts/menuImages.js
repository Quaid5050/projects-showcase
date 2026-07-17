/**
 * Shared menu image whitelist for Node scripts.
 * Keep in sync with lib/menuImages.ts
 */

const MENU_ITEM_IMAGES = {
  "Spring Roll": "/images/menu/spring-roll.jpg",
  "Homemade Egg Roll(contain peanut)": "/images/menu/egg-roll.jpg",
  "Crab Rangoon (6 pcs)": "/images/menu/crab-rangoon.jpg",
  "Fried Chicken (6 pcs)": "/images/menu/fried-chicken.jpg",
  "Shrimp Fried Rice": "/images/menu/shrimp-fried-rice.jpg",
  "Szechuan Chicken": "/images/menu/szechuan-chicken.jpg",
  "Chicken Kow": "/images/menu/chicken-kow.jpg",
  "Chicken with Garlic Sauce": "/images/menu/chicken-garlic-sauce.jpg",
  "Kung Pao Chicken": "/images/menu/kung-pao-chicken.jpg",
  "Pineapple Chicken Delight": "/images/menu/pineapple-chicken.jpg",
  "Mixed Vegetable with Chicken": "/images/menu/mixed-veg-chicken.jpg",
  "Orange Chicken": "/images/menu/orange-chicken.jpg",
  "Sesame Chicken": "/images/menu/sesame-chicken.jpg",
  "Mongolian Beef": "/images/menu/mongolian-beef.jpg",
  "Shrimp with Lobster Sauce": "/images/menu/shrimp-lobster-sauce.jpg",
  "Cashew Shrimp": "/images/menu/cashew-shrimp.jpg",
  "Hong Sue Tofu": "/images/menu/hong-sue-tofu.jpg",
  "Lo Mein": "/images/menu/lo-mein.jpg",
  "Happy Family": "/images/menu/happy-family.jpg",
  "Triple Mushroom Combination": "/images/menu/triple-mushroom.jpg",
};

const DB_NAME_ALIASES = {
  "A1. Vegetarian Spring Roll (1 pc)": "/images/menu/spring-roll.jpg",
  "L4. Shrimp Fried Rice": "/images/menu/shrimp-fried-rice.jpg",
};

const IMAGE_BY_NAME = { ...MENU_ITEM_IMAGES, ...DB_NAME_ALIASES };

function getMenuItemImage(name) {
  const key = Object.keys(IMAGE_BY_NAME).find(
    (k) => k.toLowerCase() === name.trim().toLowerCase()
  );
  return key ? IMAGE_BY_NAME[key] : "";
}

/** Menu items to ensure exist (category, name, price). Skips items covered by DB_NAME_ALIASES. */
const MENU_ITEMS_TO_ENSURE = [
  { category: "Appetizers", name: "Homemade Egg Roll(contain peanut)", price: 4.5 },
  { category: "Appetizers", name: "Crab Rangoon (6 pcs)", price: 8.95 },
  { category: "Appetizers", name: "Fried Chicken (6 pcs)", price: 12.95 },
  { category: "Chicken", name: "Szechuan Chicken", price: 16.95 },
  { category: "Chicken", name: "Chicken Kow", price: 16.95 },
  { category: "Chicken", name: "Chicken with Garlic Sauce", price: 16.95 },
  { category: "Chicken", name: "Kung Pao Chicken", price: 16.95 },
  { category: "Chicken", name: "Pineapple Chicken Delight", price: 16.95 },
  { category: "Chicken", name: "Mixed Vegetable with Chicken", price: 16.45 },
  { category: "Chicken", name: "Orange Chicken", price: 16.95 },
  { category: "Chicken", name: "Sesame Chicken", price: 16.95 },
  { category: "Shrimp", name: "Shrimp with Lobster Sauce", price: 18.95 },
  { category: "Shrimp", name: "Cashew Shrimp", price: 21.95 },
  { category: "Vegetables", name: "Hong Sue Tofu", price: 16.45 },
  { category: "Noodle", name: "Lo Mein", price: 15.95 },
  { category: "House Specialties", name: "Happy Family", price: 18.95 },
  { category: "House Specialties", name: "Triple Mushroom Combination", price: 16.95 },
];

module.exports = {
  MENU_ITEM_IMAGES,
  DB_NAME_ALIASES,
  IMAGE_BY_NAME,
  getMenuItemImage,
  MENU_ITEMS_TO_ENSURE,
};
