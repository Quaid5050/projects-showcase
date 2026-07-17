import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPageClient from "./MenuPageClient";
import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import { getMenuItemImage } from "@/lib/menuImages";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function getMenuItems() {
  try {
    await connectDB();
    const items = await MenuItem.find({ isAvailable: true })
      .sort({ category: 1, name: 1 })
      .lean();
    return items.map((item) => ({
      id: String(item._id),
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      image: getMenuItemImage(item.name),
    }));
  } catch {
    return [];
  }
}

export default async function MenuPage() {
  const items = await getMenuItems();
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen bg-[#f5f5f5]">
        <div className="bg-[#111111] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold">Our Menu</h1>
            <p className="text-gray-400 text-sm mt-1">
              Authentic Chinese cuisine, freshly prepared
            </p>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center text-gray-500">
              Loading menu...
            </div>
          }
        >
          <MenuPageClient items={items} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
