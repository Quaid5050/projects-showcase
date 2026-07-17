import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const posts = [
  {
    slug: "hvac-maintenance-tips",
    title: "10 HVAC Maintenance Tips Every Ontario Homeowner Should Know",
    excerpt: "Regular HVAC maintenance keeps your system running efficiently, extends its lifespan, and prevents costly breakdowns. Here are the top tips from our technicians.",
    date: "June 5, 2026",
    category: "Maintenance",
    image: "/Air-Conditioner-Maintenance-1-1.webp",
    readTime: "5 min read",
  },
  {
    slug: "furnace-vs-heat-pump",
    title: "Furnace vs Heat Pump: Which Is Right for Your Ontario Home?",
    excerpt: "Choosing between a furnace and a heat pump can be confusing. We break down the pros, cons, and costs so you can make the best decision for your home and budget.",
    date: "May 28, 2026",
    category: "Buying Guide",
    image: "/Heat-Pump3-2.webp",
    readTime: "7 min read",
  },
  {
    slug: "signs-ac-needs-repair",
    title: "6 Warning Signs Your Air Conditioner Needs Repair Before Summer",
    excerpt: "Don't wait until the hottest day of summer to find out your AC is failing. Learn the early warning signs and what to do about them.",
    date: "May 15, 2026",
    category: "AC Repair",
    image: "/Close-up-of-Air-Conditioning-Repair-1.webp",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader title="HVAC" highlight="Blog" subtitle="Tips, guides, and expert advice from the JP Home Comfort team." />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-red transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-brand-cyan font-semibold text-sm flex items-center gap-1">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}