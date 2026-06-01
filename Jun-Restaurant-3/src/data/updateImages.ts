/**
 * One-time script to update menu item imageUrls in MongoDB.
 * Maps each item slug to its real image file in public/images/menu/.
 * Items with no matching image get imageUrl = '' (renders as blank).
 *
 * Run with:
 *   npx tsx src/data/updateImages.ts
 */

import 'dotenv/config'
import mongoose from 'mongoose'
import MenuItem from '../models/MenuItem'

// ── Slug → image path map ──────────────────────────────────────────────────────
// Only slugs that have a real image file are listed here.
// Everything else gets '' (blank).

const IMAGE_MAP: Record<string, string> = {
  // Solo Meal Combo
  'mongolian-beef-combo':           '/images/menu/mongolian-beef-combo.jpg',
  'stir-fried-beef-chili-combo':    '/images/menu/stir-fried-beef-chili-combo.jpg',
  'sweet-sour-pork-combo':          '/images/menu/sweet-sour-pork-combo.jpg',
  'spicy-diced-chicken-combo':      '/images/menu/spicy-diced-chicken-combo.jpg',
  'chicken-fried-noodle-combo':     '/images/menu/chicken-fried-noodle-combo.jpg',

  // Northeastern Classic Dishes
  'crispy-sweet-sour-pork':                '/images/menu/crispy-sweet-sour-pork.jpg',
  'stir-fried-tofu-skin-green-peppers':    '/images/menu/stir-fried-tofu-skin-green-peppers.jpg',
  'northeast-cold-glass-noodle-salad':     '/images/menu/northeast-cold-glass-noodle-salad.jpg',
  'crispy-fried-pork-bites-brown-sauce':   '/images/menu/crispy-fried-pork-bites-brown-sauce.jpg',
  'braised-eggplant-crispy-pork':          '/images/menu/braised-eggplant-crispy-pork.jpg',
  'candied-sweet-potatoes':                '/images/menu/candied-sweet-potatoes.jpg',
  'rustic-chicken-stew-wild-mushrooms':    '/images/menu/rustic-chicken-stew-wild-mushrooms.jpg',
  'pig-spine-stewed-sauerkraut':           '/images/menu/pig-spine-stewed-sauerkraut.jpg',
  'northeast-soy-braised-bones':           '/images/menu/northeast-soy-braised-bones.jpg',
  'spicy-lamb-spine-hotpot':               '/images/menu/spicy-lamb-spine-hotpot.jpg',
  'pork-joint-sweet-sauce':                '/images/menu/pork-joint-sweet-sauce.jpg',
  'specialty-dry-braised-whole-fish':      '/images/menu/specialty-dry-braised-whole-fish.jpg',
  'pork-knuckles':                         '/images/menu/pork-knuckles.jpg',
  'spicy-lamb-ribs':                       '/images/menu/spicy-lamb-ribs.jpg',
  'pork-cabbage-stew-vermicelli':          '/images/menu/pork-cabbage-stew-vermicelli.jpg',

  // Northeastern Cold Dishes
  'refreshing-shredded-salad':             '/images/menu/refreshing-shredded-salad.jpg',
  'fresh-veggie-platter-soybean-paste':    '/images/menu/fresh-veggie-platter-soybean-paste.jpg',
  'spinach-peanut-salad':                  '/images/menu/spinach-peanut-salad.jpg',
  'sliced-pork-garlic-sauce':              '/images/menu/sliced-pork-garlic-sauce.jpg',
  'spicy-numbing-shredded-tripe':          '/images/menu/spicy-numbing-shredded-tripe.jpg',
  'tofu-century-egg-scallion':             '/images/menu/tofu-century-egg-scallion.jpg',
  'blood-sausage-garlic-sauce':            '/images/menu/blood-sausage-garlic-sauce.jpg',
  'spicy-bean-thread-noodles-chili-oil':   '/images/menu/spicy-bean-thread-noodles-chili-oil.jpg',
  'cucumber-garlic-dressing':              '/images/menu/cucumber-garlic-dressing.jpg',
  'classic-tiger-salad':                   '/images/menu/classic-tiger-salad.jpg',
  'five-spice-braised-beef':               '/images/menu/five-spice-braised-beef.jpg',
  'braised-pork-meatball-shiitake':        '/images/menu/braised-pork-meatball-shiitake.jpg',
  'soy-braised-pork-trotters':             '/images/menu/soy-braised-pork-trotters.jpg',
  'braised-pork-intestine':                '/images/menu/braised-pork-intestine.jpg',
  'sliced-pork-knuckle-garlic-sauce':      '/images/menu/sliced-pork-knuckle-garlic-sauce.jpg',
  'smoked-platter':                        '/images/menu/smoked-platter.jpg',

  // Chicken Specialties
  'kung-pao-chicken':              '/images/menu/kung-pao-chicken.jpg',
  'honey-chicken':                 '/images/menu/honey-chicken.jpg',
  'spicy-diced-dry-chicken':       '/images/menu/spicy-diced-dry-chicken.jpg',
  'xinjiang-big-plate-chicken':    '/images/menu/xinjiang-big-plate-chicken.jpg',
  'special-stir-fried-chicken':    '/images/menu/special-stir-fried-chicken.jpg',
  'crispy-lemon-chicken':          '/images/menu/crispy-lemon-chicken.jpg',
  'sweet-sour-chicken':            '/images/menu/sweet-sour-chicken.jpg',
  'crispy-salt-pepper-chicken':    '/images/menu/crispy-salt-pepper-chicken.jpg',
  'crispy-peanut-chicken':         '/images/menu/crispy-peanut-chicken.jpg',

  // Beef & Lamb
  'sichuan-boiled-beef-fiery-broth':          '/images/menu/sichuan-boiled-beef-fiery-broth.jpg',
  'grilled-lamb-chops-cumin':                 '/images/menu/grilled-lamb-chops-cumin.jpg',
  'black-pepper-beef-king-oyster-mushrooms':  '/images/menu/black-pepper-beef-king-oyster-mushrooms.jpg',
  'cumin-crusted-beef':                       '/images/menu/cumin-crusted-beef.jpg',
  'stir-fried-beef-with-chili':               '/images/menu/stir-fried-beef-with-chili.jpg',
  'beef-stir-fry-fresh-coriander':            '/images/menu/beef-stir-fry-fresh-coriander.jpg',
  'chefs-signature-tomato-beef-brisket-pot':  '/images/menu/chefs-signature-tomato-beef-brisket-pot.jpg',
  'spicy-braised-lamb-ribs':                  '/images/menu/spicy-braised-lamb-ribs.jpg',
  'mongolian-beef':                           '/images/menu/mongolian-beef.jpg',
  'braised-lamb-spiced-soy-broth':            '/images/menu/braised-lamb-spiced-soy-broth.jpg',

  // Pork Specialties
  'shredded-pork-velvet-mushrooms':               '/images/menu/shredded-pork-velvet-mushrooms.jpg',
  'braised-pork-meatballs-cabbage-glass-noodles': '/images/menu/braised-pork-meatballs-cabbage-glass-noodles.jpg',
  'spicy-pigs-head-meat-peppers':                 '/images/menu/spicy-pigs-head-meat-peppers.jpg',
  'sizzling-pork-belly-green-chilies':            '/images/menu/sizzling-pork-belly-green-chilies.jpg',
  'stir-fried-pork-tripe-green-peppers':          '/images/menu/stir-fried-pork-tripe-green-peppers.jpg',
  'cumin-crusted-pork-trotters':                  '/images/menu/cumin-crusted-pork-trotters.jpg',
  'sauteed-shredded-pork-sweet-bean-sauce':       '/images/menu/sauteed-shredded-pork-sweet-bean-sauce.jpg',
  'spicy-blood-offal-stew':                       '/images/menu/spicy-blood-offal-stew.jpg',
  'sichuan-fish-fragrant-pork-slivers':           '/images/menu/sichuan-fish-fragrant-pork-slivers.jpg',
  'spicy-shredded-pork-dried-chilies-coriander':  '/images/menu/spicy-shredded-pork-dried-chilies-coriander.jpg',
  'moo-shu-pork':                                 '/images/menu/moo-shu-pork.jpg',
  'rustic-braised-pork-belly':                    '/images/menu/rustic-braised-pork-belly.jpg',
  'sweet-sour-crispy-pork':                       '/images/menu/sweet-sour-crispy-pork.jpg',
  'dry-fried-crispy-intestine-sichuan-peppercorns': '/images/menu/dry-fried-crispy-intestine-sichuan-peppercorns.jpg',
  'twice-cooked-pork':                            '/images/menu/twice-cooked-pork.jpg.png',
  'stir-fried-pork-intestine-chilies':            '/images/menu/stir-fried-pork-intestine-chilies.jpg.png',
  'braised-pork-ribs-soy-glaze':                  '/images/menu/braised-pork-ribs-soy-glaze.jpg',
  'sweet-sour-pork-ribs':                         '/images/menu/sweet-sour-pork-ribs.jpg',
  'fried-waist-pork-intestines-tripe':            '/images/menu/fried-waist-pork-intestines-tripe.jpg',

  // Seafood
  'braised-prawns-sweet-soy-glaze':    '/images/menu/braised-prawns-sweet-soy-glaze.jpg',
  'steamed-shrimp-garlic-glass-noodles': '/images/menu/steamed-shrimp-garlic-glass-noodles.jpg',
  'sizzling-spicy-squid-tentacles':    '/images/menu/sizzling-spicy-squid-tentacles.jpg',
  'clams-scallion-ginger':             '/images/menu/clams-scallion-ginger.jpg',
  'northern-style-stir-fried-clams':   '/images/menu/northern-style-stir-fried-clams.jpg',
  'the-boiled-fish':                   '/images/menu/the-boiled-fish.jpg',
  'sauerkraut-fish':                   '/images/menu/sauerkraut-fish.jpg',

  // Vegetables
  'japanese-silken-tofu-seafood-trio':     '/images/menu/japanese-silken-tofu-seafood-trio.jpg',
  'tomato-egg-stir-fry':                   '/images/menu/tomato-egg-stir-fry.jpg',
  'farmers-market-seasonal-vegetables':    '/images/menu/farmers-market-seasonal-vegetables.jpg',
  'salt-pepper-mushrooms':                 '/images/menu/salt-pepper-mushrooms.jpg',
  'mapo-tofu':                             '/images/menu/mapo-tofu.jpg',
  'sweet-sour-cabbage':                    '/images/menu/sweet-sour-cabbage.jpg',
  'cabbage-stir-fry':                      '/images/menu/cabbage-stir-fry.jpg',
  'sauteed-potato-eggplant-green-pepper':  '/images/menu/sauteed-potato-eggplant-green-pepper.jpg',
  'crab-roe-tofu-pudding':                 '/images/menu/crab-roe-tofu-pudding.jpg',
  'garlic-lettuce':                        '/images/menu/garlic-lettuce.jpg',
  'hot-sour-shredded-potatoes':            '/images/menu/hot-sour-shredded-potatoes.jpg',
  'farm-style-scrambled-eggs-green-chilies': '/images/menu/farm-style-scrambled-eggs-green-chilies.jpg',
  'scrambled-eggs-fermented-soy-paste':    '/images/menu/scrambled-eggs-fermented-soy-paste.jpg',
  'crispy-aromatic-eggplant':              '/images/menu/crispy-aromatic-eggplant.jpg',

  // Spicy Specialties
  'spicy-beef-brisket-hotpot':   '/images/menu/spicy-beef-brisket-hotpot.jpg',
  'mala-surf-turf':              '/images/menu/mala-surf-turf.jpg',
  'spicy-squid-shrimp-combo':    '/images/menu/spicy-squid-shrimp-combo.jpg',
  'firebird-chicken':            '/images/menu/firebird-chicken.jpg',
  'chili-braised-pork-trotters': '/images/menu/chili-braised-pork-trotters.jpg',
  'spicy-braised-bones':         '/images/menu/spicy-braised-bones.jpg',

  // Braised Dish
  'braised-pork-ribs-green-beans-pot':    '/images/menu/braised-pork-ribs-green-beans-pot.jpg',
  'beef-brisket-potato-hotpot':           '/images/menu/beef-brisket-potato-hotpot.jpg',
  'pork-chinese-sauerkraut-soup':         '/images/menu/pork-chinese-sauerkraut-soup.jpg',
  'mixed-meat-vegetable-stew-corn-cakes': '/images/menu/mixed-meat-vegetable-stew-corn-cakes.jpg',
  'fish-tofu-glass-noodles-white-broth':  '/images/menu/fish-tofu-glass-noodles-white-broth.jpg',
  'spicy-pork-spine-sauerkraut-soup':     '/images/menu/spicy-pork-spine-sauerkraut-soup.jpg',

  // Spring Pancake Set
  'handmade-spring-pancakes':    '/images/menu/handmade-spring-pancakes.jpg',
  'stir-fried-vegetable-medley': '/images/menu/stir-fried-vegetable-medley.jpg',
  'vermicelli-spicy-minced-pork': '/images/menu/vermicelli-spicy-minced-pork.jpg',
  'chive-egg-stir-fry':          '/images/menu/chive-egg-stir-fry.jpg',
  'pork-cabbage-glass-noodles':  '/images/menu/pork-cabbage-glass-noodles.jpg',

  // Soup Specialties
  'hot-sour-soup':                  '/images/menu/hot-sour-soup.jpg.png',
  'tomato-egg-pimple-soup':         '/images/menu/tomato-egg-pimple-soup.jpg.png',
  'silken-chicken-sweet-corn-chowder': '/images/menu/silken-chicken-sweet-corn-chowder.jpg.png',
  'corn-bone-soup':                 '/images/menu/corn-bone-soup.jpg.png',
  'seafood-dough-flake-soup':       '/images/menu/seafood-dough-flake-soup.jpg.png',

  // Fried Rice & Dumplings
  'classic-egg-fried-rice':         '/images/menu/classic-egg-fried-rice.jpg.png',
  'beef-spicy-fried-rice':          '/images/menu/beef-spicy-fried-rice.jpg.png',
  'vegetarian-fried-rice':          '/images/menu/vegetarian-fried-rice.jpg.png',
  'yangzhou-fried-rice':            '/images/menu/yangzhou-fried-rice.jpg.png',
  'soy-glazed-chicken-fried-rice':  '/images/menu/soy-glazed-chicken-fried-rice.jpg.png',
  'spicy-cumin-squid-fried-rice':   '/images/menu/spicy-cumin-squid-fried-rice.jpg.png',
  'steamed-pork-chive-dumplings':   '/images/menu/steamed-pork-chive-dumplings.jpg.png',
  'xiaolongbao':                    '/images/menu/xiaolongbao.jpg.png',

  // Rice Bowl Specialties
  'spicy-shredded-pork-rice':          '/images/menu/spicy-shredded-pork-rice.jpg.png',
  'chili-soy-glazed-chicken-rice':     '/images/menu/chili-soy-glazed-chicken-rice.jpg.png',
  'beef-brisket-potato-rice-bowl':     '/images/menu/beef-brisket-potato-rice-bowl.jpg.png',
  'black-pepper-beef-rice-bowl':       '/images/menu/black-pepper-beef-rice-bowl.jpg.png',
  'twice-cooked-pork-rice':            '/images/menu/twice-cooked-pork-rice.jpg.png',
  'stir-fried-pork-eggs-wood-ear-cucumber-rice': '/images/menu/stir-fried-pork-eggs-wood-ear-cucumber-rice.jpg.png',
  'big-plate-chicken-rice':            '/images/menu/big-plate-chicken-rice.jpg.png',
  'pork-trotter-rice':                 '/images/menu/pork-trotter-rice.jpg.png',
  'northern-braised-pork-belly-rice':  '/images/menu/northern-braised-pork-belly-rice.jpg.png',
  'mapo-tofu-rice':                    '/images/menu/mapo-tofu-rice.jpg.png',

  // Handmade Noodle
  'lanzhou-clear-broth-beef-soup-noodles': '/images/menu/lanzhou-clear-broth-beef-soup-noodles.jpg.png',
  'deep-fried-beef-noodles':               '/images/menu/deep-fried-beef-noodles.jpg.png',
  'chili-oil-splashed-noodles':            '/images/menu/chili-oil-splashed-noodles.jpg.png',
}

async function main() {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not set in environment')

  console.log('Connecting to MongoDB...')
  await mongoose.connect(uri)
  console.log('Connected.')

  const items = await MenuItem.find({}).lean()
  console.log(`Found ${items.length} menu items.`)

  let updated = 0
  let blanked = 0
  let skipped = 0

  for (const item of items) {
    const newImage = IMAGE_MAP[item.slug] ?? ''
    const currentImage = item.imageUrl ?? ''

    // Skip if already correct
    if (currentImage === newImage) {
      skipped++
      continue
    }

    await MenuItem.updateOne({ _id: item._id }, { $set: { imageUrl: newImage } })

    if (newImage) {
      console.log(`  ✅ ${item.slug} → ${newImage}`)
      updated++
    } else {
      console.log(`  ⬜ ${item.slug} → (blank)`)
      blanked++
    }
  }

  console.log(`\nDone. Updated: ${updated}, Blanked: ${blanked}, Already correct: ${skipped}`)
  await mongoose.disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
