"use client";

const brands = [
  { name: "Lennox", logo: "/brand/brand1.png" },
  { name: "Carrier", logo: "/brand/brand2.png" },
  { name: "Trane", logo: "/brand/brand3.png" },
  { name: "Goodman", logo: "/brand/brand4.png" },
  { name: "Daikin", logo: "/brand/brand5.png" },
  { name: "Rheem", logo: "/brand/brand6.png" },
  { name: "Navien", logo: "/brand/brand7.png" },
  { name: "Bradford White", logo: "/brand/brand8.png" },
];

export default function BrandLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
      {brands.map(b => (
        <div key={b.name} className="flex items-center justify-center h-10 opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
          <img
            src={b.logo}
            alt={b.name}
            className="max-h-10 max-w-[110px] object-contain"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const span = document.createElement("span");
              span.className = "font-heading font-bold text-lg text-slate-400";
              span.textContent = b.name;
              target.parentElement?.appendChild(span);
            }}
          />
        </div>
      ))}
    </div>
  );
}