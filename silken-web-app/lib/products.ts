import productsData from "@/data/products.json";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  description?: string;
  image: string;
  features?: string[];
}

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getProductIds(): string[] {
  return products.map((p) => p.id);
}
