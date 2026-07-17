import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";

export const dynamic = "force-dynamic";

async function getCategories(): Promise<string[]> {
  try {
    await connectDB();
    const categories = await MenuItem.distinct("category", {
      isAvailable: true,
    });
    return categories.sort();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Categories Section */}
        {categories.length > 0 && (
          <section className="py-14 bg-[#f5f5f5]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                  Our Menu Categories
                </h2>
                <p className="text-gray-500 text-sm">
                  Explore our wide selection of authentic Chinese dishes
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/menu?category=${encodeURIComponent(cat)}`}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-[#d60000] transition-all text-center group"
                  >
                    <div className="w-10 h-10 bg-[#d60000] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-[#111111] text-sm mb-1 group-hover:text-[#d60000] transition-colors">
                      {cat}
                    </h3>
                    <p className="text-xs text-gray-500">Explore dishes</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-14 bg-[#d60000] text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to order your favourites?
            </h2>
            <p className="text-red-100 mb-7 max-w-lg mx-auto">
              Browse our full menu and place your order online. Pickup available
              at 441 E Columbia St, New Westminster.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-white text-[#d60000] font-bold px-10 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </section>

        {/* Info Strip */}
        <section className="py-10 bg-[#111111] text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#d60000] text-3xl mb-2">🕐</div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-gray-400 text-sm">
                  Mon – Sun: 11:30 am – 9:30 pm
                </p>
              </div>
              <div>
                <div className="text-[#d60000] text-3xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400 text-sm">
                  441 E Columbia St, New Westminster, BC
                </p>
              </div>
              <div>
                <div className="text-[#d60000] text-3xl mb-2">📞</div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm">
                  <a
                    href="tel:+16045211871"
                    className="hover:text-[#d60000] transition-colors"
                  >
                    +1 604-521-1871
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
