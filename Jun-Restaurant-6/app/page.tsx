import Link from "next/link";

const MENU_HIGHLIGHTS = [
  { name: "Burger Menu", desc: "Lobster $19.99 · Beef $14.99 · Wild Salmon · Oyster · Cod · Shrimp · Chicken · Veggie", emoji: "🍔", href: "/menu?category=burger-menu" },
  { name: "Hotdog Menu", desc: "Classic · Bacon · Cheese · Egg · and all the combos", emoji: "🌭", href: "/menu?category=hotdog-menu" },
  { name: "Seafood", desc: "Wild Sockeye Salmon Burger · Wild Salmon · Prawn Burger", emoji: "🐟", href: "/menu?category=seafood" },
  { name: "Snacks", desc: "Spring Rolls · Chicken Nuggets · Onion Rings · Fries", emoji: "🍟", href: "/menu?category=snacks" },
  { name: "Milkshakes", desc: "Organic Mixed Fruits · Strawberry · Blueberry · Mango", emoji: "🥤", href: "/menu?category=milkshake" },
  { name: "Drinks", desc: "Coffee · Tea · Lemon Tea · Hot Chocolate · Soda · Water", emoji: "☕", href: "/menu?category=drink" },
  { name: "Specials", desc: "Cod Banger $9.95 · Prawn Burger $9.95", emoji: "⭐", href: "/menu?category=special" },
  { name: "Sides & Fries", desc: "Hand Crafted Fries · Regular Fries", emoji: "🍟", href: "/menu?category=sides" },
];

const HOURS = [
  { day: "Monday", hours: "11:00 am – 6:30 pm" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "11:00 am – 6:30 pm" },
  { day: "Thursday", hours: "11:00 am – 6:30 pm" },
  { day: "Friday", hours: "11:00 am – 6:30 pm" },
  { day: "Saturday", hours: "10:30 am – 6:30 pm" },
  { day: "Sunday", hours: "10:30 am – 6:30 pm" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── NAVBAR ── */}
      <header className="bg-[#c8102e] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="The Village Burger"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
            />
            <span className="font-bold text-base sm:text-lg leading-tight">The Village Burger</span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
            <a href="#menu" className="hidden sm:block hover:text-[#ffd700] transition-colors">Menu</a>
            <a href="#contact" className="hidden sm:block hover:text-[#ffd700] transition-colors">Contact</a>
            <Link
              href="/menu"
              className="bg-[#ffd700] text-[#c8102e] px-3 sm:px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Order Now
            </Link>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1400&q=80')" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-[#c8102e] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            🍔 Richmond&apos;s Favourite Burger Spot
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            THE <span className="text-[#ffd700]">VILLAGE</span><br />BURGER
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-xl mb-7 sm:mb-8 px-2">
            Handcrafted burgers, fresh seafood, all-beef hotdogs, and organic milkshakes.
            Made with love in Richmond, BC.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/menu"
              className="bg-[#c8102e] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-colors shadow-lg text-center"
            >
              Order Online →
            </Link>
            <a
              href="#menu"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-colors text-center"
            >
              View Menu
            </a>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-1">📍 3800 Bayview St #105, Richmond, BC</span>
            <span className="flex items-center gap-1">🕐 Open Today</span>
            <span className="flex items-center gap-1">🚗 Pickup Only</span>
          </div>
        </div>
      </section>

      {/* ── MENU HIGHLIGHTS ── */}
      <section id="menu" className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3">
              Our <span className="text-[#c8102e]">Menu</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">Something for everyone — fresh, flavourful, and made to order</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {MENU_HIGHLIGHTS.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group bg-white border-2 border-gray-100 hover:border-[#c8102e] rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all hover:shadow-lg"
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0">{cat.emoji}</div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#1a1a1a] group-hover:text-[#c8102e] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/menu"
              className="inline-block bg-[#c8102e] hover:bg-red-700 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors"
            >
              See Full Menu & Order →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US STRIP ── */}
      <section className="bg-[#c8102e] text-white py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { icon: "🐟", label: "Fresh Seafood" },
              { icon: "🥩", label: "Quality Beef" },
              { icon: "🥤", label: "Organic Shakes" },
              { icon: "🚗", label: "Quick Pickup" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl sm:text-4xl">{item.icon}</span>
                <span className="font-bold text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT & HOURS ── */}
      <section id="contact" className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-3">
              Find <span className="text-[#c8102e]">Us</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">Come visit us in Richmond, BC</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-5 sm:mb-6 flex items-center gap-2">
                🕐 Opening Hours
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {HOURS.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 text-sm sm:text-base"
                  >
                    <span className="text-gray-700 font-medium">{day}</span>
                    <span className={hours === "Closed" ? "text-gray-400" : "text-gray-800 font-semibold"}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-5 sm:mb-6 flex items-center gap-2">
                📍 Location
              </h3>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <p className="font-bold text-[#1a1a1a] text-base sm:text-lg">The Village Burger</p>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">3800 Bayview St #105</p>
                  <p className="text-gray-600 text-sm sm:text-base">Richmond, BC V7E 6K7</p>
                  <p className="text-gray-600 text-sm sm:text-base">Canada</p>
                </div>
                <div className="bg-gray-50 rounded-xl overflow-hidden h-40 sm:h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5!2d-123.1!3d49.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzEyLjAiTiAxMjPCsDA2JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Village Burger Location"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=3800+Bayview+St+%23105+Richmond+BC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c8102e] font-semibold hover:underline text-sm sm:text-base"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a1a1a] text-white py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="The Village Burger"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
              />
              <div>
                <p className="font-bold text-base sm:text-lg">The Village Burger</p>
                <p className="text-gray-400 text-xs sm:text-sm">Richmond, BC</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
              <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
              <Link href="/cart" className="hover:text-white transition-colors">Cart</Link>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <Link href="/admin/login" className="hover:text-white transition-colors">Staff Login</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-5 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} The Village Burger. All rights reserved. Pickup only.
          </div>
        </div>
      </footer>
    </div>
  );
}
