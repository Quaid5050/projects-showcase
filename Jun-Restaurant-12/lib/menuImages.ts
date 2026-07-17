/**
 * Canonical menu image whitelist.
 * ONLY these exact product names receive photos — no fuzzy/substring matching.
 */
export const MENU_ITEM_IMAGES: Readonly<Record<string, string>> = {
  // Appetizers
  "Spring Roll": "/images/menu/spring-roll.jpg",
  "Homemade Egg Roll(contain peanut)": "/images/menu/egg-roll.jpg",
  "Crab Rangoon (6 pcs)": "/images/menu/crab-rangoon.jpg",
  "Fried Chicken (6 pcs)": "/images/menu/fried-chicken.jpg",

  // Fried Rice
  "Shrimp Fried Rice": "/images/menu/shrimp-fried-rice.jpg",

  // Chicken
  "Szechuan Chicken": "/images/menu/szechuan-chicken.jpg",
  "Chicken Kow": "/images/menu/chicken-kow.jpg",
  "Chicken with Garlic Sauce": "/images/menu/chicken-garlic-sauce.jpg",
  "Kung Pao Chicken": "/images/menu/kung-pao-chicken.jpg",
  "Pineapple Chicken Delight": "/images/menu/pineapple-chicken.jpg",
  "Mixed Vegetable with Chicken": "/images/menu/mixed-veg-chicken.jpg",
  "Orange Chicken": "/images/menu/orange-chicken.jpg",
  "Sesame Chicken": "/images/menu/sesame-chicken.jpg",

  // Beef
  "Mongolian Beef": "/images/menu/mongolian-beef.jpg",

  // Shrimp
  "Shrimp with Lobster Sauce": "/images/menu/shrimp-lobster-sauce.jpg",
  "Cashew Shrimp": "/images/menu/cashew-shrimp.jpg",

  // Vegetables
  "Hong Sue Tofu": "/images/menu/hong-sue-tofu.jpg",

  // Noodle
  "Lo Mein": "/images/menu/lo-mein.jpg",

  // House Specialties
  "Happy Family": "/images/menu/happy-family.jpg",
  "Triple Mushroom Combination": "/images/menu/triple-mushroom.jpg",
};

/** SkipTheDishes DB names that map to the same dishes above. */
const DB_NAME_ALIASES: Readonly<Record<string, string>> = {
  "A1. Vegetarian Spring Roll (1 pc)": "/images/menu/spring-roll.jpg",
  "L4. Shrimp Fried Rice": "/images/menu/shrimp-fried-rice.jpg",
};

const lookup = new Map<string, string>(
  Object.entries({ ...MENU_ITEM_IMAGES, ...DB_NAME_ALIASES }).map(
    ([name, path]) => [name.toLowerCase(), path]
  )
);

/** Returns image path for a menu item, or empty string if none. */
export function getMenuItemImage(name: string): string {
  return lookup.get(name.trim().toLowerCase()) ?? "";
}

export const MENU_ITEMS_WITH_IMAGES = Object.keys(MENU_ITEM_IMAGES);
