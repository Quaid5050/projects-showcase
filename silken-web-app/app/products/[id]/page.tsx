import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getRelatedProducts, getProductIds } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product | Silken Trading" };
  return {
    title: `${product.name} | Silken Trading`,
    description: product.description ?? `Premium ${product.category} - ${product.name}. ${product.price}.`,
    openGraph: {
      title: `${product.name} | Silken Trading`,
      description: product.description ?? undefined,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);
  const imageSrc = product.image || "/images/placeholder.svg";

  return (
    <>
      <ProductDetailClient
        productId={product.id}
        productName={product.name}
        category={product.category}
        price={product.price}
        description={product.description}
        image={imageSrc}
        features={product.features}
      />
      {related.length > 0 && (
        <section className="border-t border-white/10 bg-luxury-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Related <span className="text-gold-primary">Products</span>
            </h2>
            <p className="mt-2 text-yellow-pastel/80">More from {product.category}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-gold-primary font-medium hover:text-yellow-glow transition-colors"
              >
                View all products <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
