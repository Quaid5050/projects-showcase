import type { Metadata } from "next";
import ProductsHero from "@/components/ProductsHero";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "Products | Silken Trading",
  description:
    "Premium seat covers, car mats, window visors, steering covers, and interior accessories. Shop by category.",
  openGraph: { title: "Products | Silken Trading", description: "Premium automotive interior products." },
};

const categories = [
  "Seat Covers",
  "Car Mats",
  "Window Visors",
  "Steering Covers",
  "Interior Accessories",
];

export default function ProductsPage() {
  const products = productsData as {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    price: string;
    description?: string;
    image: string;
  }[];

  return (
    <>
      <ProductsHero />

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-lg text-gold-primary mb-4 sm:text-xl sm:mb-6">Categories</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full border border-gold-primary/40 px-3 py-1.5 text-xs text-yellow-pastel/90 hover:bg-gold-primary/10 hover:text-gold-primary transition sm:px-4 sm:py-2 sm:text-sm"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {categories.map((category) => {
        const categoryProducts = products.filter((p) => p.category === category);
        if (categoryProducts.length === 0) return null;
        const id = category.toLowerCase().replace(/\s+/g, "-");
        return (
          <section key={category} id={id} className="border-t border-white/10 py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-xl text-white mb-6 sm:text-2xl sm:mb-8">{category}</h2>
              <div className="grid gap-4 grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {categoryProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
