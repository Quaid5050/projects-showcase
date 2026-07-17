import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import MenuItemCard from '@/components/MenuItemCard';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@/components/Icons';
import { ICategory, IMenuItem } from '@/types';

async function getCategories(): Promise<ICategory[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/categories`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.categories || [];
  } catch {
    return [];
  }
}

async function getFeaturedItems(): Promise<IMenuItem[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/menu-items?featured=true`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const items = data.items || [];
    return items.slice(0, 8);
  } catch {
    return [];
  }
}

async function getAllItems(): Promise<IMenuItem[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/menu-items`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items || [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const [categories, featuredItems, allItems] = await Promise.all([
    getCategories(),
    getFeaturedItems(),
    getAllItems(),
  ]);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero />

        {/* Categories Section */}
        <section className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#8B0000] text-sm font-semibold uppercase tracking-widest">
                Browse By Category
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Menu Categories</h2>
              <div className="w-16 h-0.5 bg-[#FFD700] mx-auto mt-3" />
            </div>

            {categories.length > 0 ? (
              <>
                <CategoryGrid categories={categories} />
                <div className="text-center mt-8">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 bg-[#1a5c1a] hover:bg-[#1e6e1e] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    View Full Menu
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-2">Menu coming soon!</p>
                <p className="text-gray-400 text-sm">Call us to place your order: +1 604-437-1818</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-[#8B0000] text-sm font-semibold uppercase tracking-widest">
                  Customer Favourites
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Featured Dishes</h2>
                <div className="w-16 h-0.5 bg-[#FFD700] mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredItems.map((item) => (
                  <MenuItemCard key={item._id} item={item} allItems={allItems} />
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
                >
                  See Full Menu
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Contact / Info Section */}
        <section id="contact" className="bg-[#1a0a00] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#FFD700] text-sm font-semibold uppercase tracking-widest">
                Visit Us
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">Find Us & Get In Touch</h2>
              <div className="w-16 h-0.5 bg-[#8B0000] mx-auto mt-3" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Info */}
              <div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-6">Burnaby Palace Restaurant</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400 text-sm">3110 Boundary Rd, Burnaby, BC V5M 4A2</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+16044371818" className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">
                        +1 604-437-1818
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-400 text-sm">Open Daily: 11:00 AM – 9:30 PM</p>
                      <p className="text-gray-500 text-xs mt-0.5">Monday – Sunday</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+16044371818"
                    className="inline-flex items-center justify-center gap-2 bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Call to Order
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3110+Boundary+Rd+Burnaby+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1a0a00] font-semibold px-6 py-3 rounded-full transition-all duration-200"
                  >
                    <MapPinIcon className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-xl overflow-hidden border border-[#8B0000]/30 h-64 bg-[#0d0500]">
                <iframe
                  title="Burnaby Palace Restaurant Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d-122.9559!3d49.2649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673b6d8e6d9c5%3A0x1234567890abcdef!2s3110%20Boundary%20Rd%2C%20Burnaby%2C%20BC%20V5M%204A2!5e0!3m2!1sen!2sca!4v1234567890"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
