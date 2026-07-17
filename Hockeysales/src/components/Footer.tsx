import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d9dadb] border-t border-[#c5c6cd]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-20 py-12 max-w-[1280px] mx-auto">
        <div className="space-y-4">
          <span className="font-montserrat text-xl font-bold text-black">Strides Hockey Sales</span>
          <p className="font-inter text-base text-[#44474d] mt-2">
            Your premier destination for professional-grade hockey equipment. Quality, performance, and expertise in every stride.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-inter text-sm font-semibold text-black uppercase tracking-widest">Connect</h4>
          <a href="#" className="font-inter text-base text-[#44474d] hover:text-black transition-colors">Instagram</a>
          <a href="#" className="font-inter text-base text-[#44474d] hover:text-black transition-colors">Facebook</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-inter text-sm font-semibold text-black uppercase tracking-widest">Quick Links</h4>
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "About Us", href: "/about" },
            { label: "Reviews", href: "/reviews" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="font-inter text-base text-[#44474d] hover:text-black transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="px-20 py-4 border-t border-[#c5c6cd]/30 text-center max-w-[1280px] mx-auto">
        <p className="font-inter text-xs text-[#44474d]">
          © 2024 Strides Hockey Sales. All Rights Reserved. Prices include tax and shipping.
        </p>
      </div>
    </footer>
  );
}
