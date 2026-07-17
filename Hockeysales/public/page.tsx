import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Strides Hockey Sales",
  description: "Shop elite hockey sticks, skates, CCM, and Knapper gear.",
};

const sticks = [
  { name: "Pro Series Carbon Stick", price: "$299 – $349", desc: "Mid-kick point for maximum power transfer and accuracy.", badge: "New Arrival", badgeColor: "bg-black", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXBcf0jlrHu_uGRKgeVBdDnxaASMXdD4AxKdRaxb2i93Vz7n2XmPWLiqNu8ED3pNhS0CXzET6EW1o9eamaf33QcNXuuWVY4TYD1jnS5HFfwmIG7tSQi6KU46Vah_pfW09xQWa6EKiOwzr3Ov-QDTTWaguIaxK6PCmRhSxcvVwEYqkySnjzOBL8Wz-gHEr8oKbMDm1lScwrEZP1msKz_YD3PX6kJdVi98GayYb797uVr-_CxGnA9Eygmh69bSDoj2a7HIcwc6udEA" },
  { name: "Elite Flex 85 Stick", price: "$250 – $280", desc: "Low-kick profile designed for rapid release and quick snaps.", badge: null, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrsrlHqExpajn_L1EJuGbgRvKZoUvbH1sZyRk3VNCx3w1ZOVCVTK2Ns6P88eOP45YLR859WGEFrV0aQoTYBkANTGj3u_sRRxBTCQ7XbqbT3ZBCthTG2StZyro-M8AF7Wk4dHglqKOnpbYkw-sIj8Ejnc-ZGEDaLtFv0NriR8idIPVOrco4P2y_Zldzp80x-yyFrRwCgIqyM67Nky7LLjr7tR9CQSGDiK2oaUDDhj-ZnUJhEKs-3r-ZR4jsvutfkLh8RQxmPVxGwQ" },
  { name: "Shadow Team Stick", price: "$180 – $210", desc: "Lightweight design optimised for team performance and durability.", badge: null, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP-rxJ8uuCaw1ucxlpgnZB4Gok8SIkHepTYZbmRPEtPatp84DwBhB8HvWqhPmmFI2xKO0LQ32FwnWjaF_-6yZn3YIrTIrdXIIYXJaBNmchCjH-0ft9152rx6uUjUfRobcR7HY7nNGQv70oh1i-n8TBhBWYyAOzmBfn04dcn6n3dsGBGn64eqn7PKf-XP8_vxFaxN9czSw-lfYS7kPkUHqWAWFuXKupF2Qz3j2Di_jU0k_ofJ5h9jkSlrHcnjsKyxNV5quEzDbqKw" },
  { name: "Youth Core Stick", price: "$85 – $110", desc: "Scaled for future stars, focusing on flex and puck control basics.", badge: "Sale", badgeColor: "bg-[#ed4a14]", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOfPSYU-xVliaNvEpKUt2AIjQ0MQiJSkP5E8PaisLYWm0iQyBqocJXjBELovubERfmGsGT4WiozomnQqoYdmHHoJvCWlsnzM7ThTXhqPY87f4-yFec-pH7BTYlfO-VtXdx3fARGMkLl2SZkelvgUuZVj2m_r8Rg3Zl0IVRgG_63fzmmKCLDCOu1VkfMJeYarWQe6rjy6qy7Liu0vmGR5WxwYDCOWCzAbnvqd6YF49M_ajz5I0sPpN2Svtib-RQO75KTcFEsMpnDw" },
];

const skates = [
  { name: "Bauer Vapor FlyLite Skates", price: "Coming in July", desc: "Next-generation Vapor fit with FlyLite technology for explosive speed and agility.", status: "Coming Soon", statusClass: "text-[#ed4a14] bg-[#ed4a14]/10 border border-[#ed4a14]", img: "/bauer-vapor-flylite.png" },
  { name: "Bauer Supreme Skates", price: "$650", desc: "Available in most sizes. Reach out for details.", status: "In Stock", statusClass: "text-[#006399] bg-[#67bafd]/20 border border-[#67bafd]", img: "/bauer-supreme-skate.jpg" },
];

const accessories = [
  { name: "Premium Stick Tape", desc: "Bulk packs available", price: "$5 – $45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdArJ8pI-915LEBqltSyGk775lyB4XXfX_Z6biMZPisF2pYx0mFK42SjC8YIawR8g5n7zVG0ab8a7pMksAdGLjG-xFRjC5UVdJA71tEeevkZukeUsW5a_odjqIJPz5A_FY1E1rxlsgT66Whb7Ydr2iTlnFJrQUN-9AenualjP4wIpMhe8VBPY105KNLTlZAOieYhPlV6wuq9WGH7EPVt0pT_1xiGTr8wjFe_F5cDzjmYoehoD3Sb3YoS40hfO9_tWVFmgauGkeTg" },
  { name: "Elite Gear Bags", desc: "Waterproof ventilating", price: "$80 – $150", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD22Kmj_6a7T5GrV3Eyf3MbCgcBT2qWdZykWEcewwfO_EXrxQNLXuHYD8eab5co-yRxdGmmH0TNMHlT6n8Md78-GJtSDW_1SayuiL32wt_uriJcESL3XKaSbQwNSGHtZ73vT3oQa2J-q4UugXe5f4YXxAMr99qiODLfpeU73369VjuhcSupGSYhRMHFh3YjyUY7i3c2vcJYVNaY30aQ5PqRNJ7I6K_kAA_zFlntukzK4eFMc-Y-zCftB1MnKG53AixNZR26JjaLgg" },
  { name: "Game Pucks (12-Pack)", desc: "Standard 6oz weight", price: "$25 – $35", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYCBQWMErtXonHiqDYcvIzhklUZ8b5sPBAjf0yftk15DgxUayVICeaTyzb0Qa9JgalLNPMIlriTeo2d3BDpUQCdC3OG_1EQiG51l_YGDTQSkBHYb_R6pmTNR1R5lVuxgAMUexS1zIsgju9Tdt5NX_PwPQwVREO2CfVAmkVXB-uxUroAhVQLtBy0mcpLvf6RU3HZ5k9mXsHcz32Hc4UIuYNG6I64rOo7LpwI-O3VNQ1oRby38dHZ1zyFQ3moG7qB8ZxEznYH0Zxeg" },
  { name: "Pro Skate Guards", desc: "Absorbent inner lining", price: "$15 – $25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_RejaOq5fNqclv3h2USr02PlOtGkagGIN5XZmf4MuBw4ai29Y1kYkfOhRgwQt-NTI8UAxbgYy5cM-FGQ-kpFqYrWFkrql3Ak-h5NsISe39XBSt-DyEOZGn8xeRjHrOcYElfZWJtXnYV3he0XDwoV6IJYd1G-S7dBbzp24IY9PkiUUbbwBIjNpgBwHxAsDeHzh6QfsUkW9rD2Clo9h8w0QLK9oXUuWQ-B_Ze8ICsgN6Mw8WPhW2FSrXAAfeuzHWkxlKBA8Bw0dKQ" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">

        {/* ── Page Hero ── */}
        <section className="mb-20 text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#67bafd]/20 text-[#006399] border border-[#006399]/30 font-inter font-semibold text-sm mb-6">
            <span className="material-symbols-outlined text-base mr-2">verified</span>
            PRO STOCK &amp; ELITE GEAR
          </div>
          <h1 className="font-montserrat text-[48px] font-extrabold text-black mb-6">Equip Your Performance</h1>
          <p className="font-inter text-lg text-[#44474d] max-w-2xl mx-auto mb-8">
            Discover our curated selection of elite hockey equipment — from precision-engineered sticks to professional-grade protective gear.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#e7e8e9] px-4 py-2 rounded-lg border border-[#c5c6cd]">
            <span className="material-symbols-outlined text-[#006399] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <span className="font-inter font-semibold text-sm text-black">All prices include applicable taxes and shipping.</span>
          </div>
        </section>

        {/* ── Bento category grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 h-auto md:h-[400px]">
          <div className="md:col-span-2 group relative overflow-hidden rounded-xl border border-[#c5c6cd] hover:border-[#006399] transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <Image src="/bauer-sticks.png" alt="Hockey Sticks" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="font-montserrat text-[32px] font-bold text-white mb-2">Hockey Sticks</h3>
              <p className="text-white/80 font-inter text-base mb-4">Ultimate feel. Unmatched power.</p>
              <a href="#sticks" className="inline-flex items-center text-[#cde5ff] font-inter font-semibold text-sm">
                View Collection <span className="material-symbols-outlined ml-1" style={{ fontSize: "18px" }}>arrow_forward</span>
              </a>
            </div>
          </div>
          {[
            { href: "#skates", label: "Elite Skates", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcNgkT3CngTAs9q82lEGcxuSUDcu0aywMAfwfMJ_a-KH_xXiS47QXRMyI8m2U8-nI6Srw-DktXzM_zk1GYIYygGrX_YiPYZxizekdylx8V81iAomZiU5Au8JDMw9mpZr9-sOU-0uX2mCuVuarG-xCbjW_lK6-uXUlMc57yAMn4eeo3NJMkXJRau7MgmqRbmvAHgRZW70Pbm6bGovJog-hU7uzKPI2jm5bVbKxA48gs0O_fTTHo4DHECt4nMRd4FjOJdfPzrxek_A" },
            { href: "#protective", label: "Protection", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATWMByiHnOwuJn6tesaB7wKlAnkaYJn5rtgXpxoS2QV0kMzEN93vg4j7y-USL6azwyJXHQx8Si4LCgkNu0bwUBbfOURZ7pBT6r0xfCk74tFq7kTr2-w4ZORt6IijjrevC5KRElaTrB3T82YPVtRcwMfJfAN8Gjt5wbOaLBQcEr_MmY1ndKtJOT1u-ty3d09m4XbG0QgyEdyf9gP1m4E6Uq8dHJz1uzF9Z13-tPIhFD02R_6ofmMP409-qgEsGS16dJMtjQVX9J4A" },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-xl border border-[#c5c6cd] hover:border-[#006399] transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="font-montserrat text-2xl font-bold text-white mb-1">{item.label}</h3>
                <a href={item.href} className="text-[#cde5ff] font-inter font-semibold text-sm flex items-center">
                  Explore <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Sticks ── */}
        <section className="mb-20" id="sticks">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-montserrat text-[32px] font-bold text-black">Hockey Sticks</h2>
              <p className="font-inter text-base text-[#44474d]">Precision-balanced tools for elite playmakers.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sticks.map((p) => (
              <div key={p.name} className="bg-white border border-[#c5c6cd] rounded p-4 product-card-hover flex flex-col h-full">
                <div className="aspect-square bg-[#f8f9fa] rounded-sm mb-4 overflow-hidden relative">
                  <Image src={p.img} alt={p.name} fill className="object-contain p-2" />
                  {p.badge && (
                    <span className={`absolute top-2 left-2 ${p.badgeColor} text-white text-[10px] font-inter font-semibold px-2 py-1 uppercase tracking-widest`}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-montserrat text-2xl font-bold text-black mb-1">{p.name}</h4>
                <p className="font-inter text-sm text-[#44474d] mb-4 flex-grow">{p.desc}</p>
                <div className="mt-auto">
                  <div className="font-montserrat text-2xl font-bold text-black mb-4">{p.price}</div>
                  <Link href="/contact" className="w-full bg-[#006399] text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#004972] transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                    Contact to Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CCM Highlight ── */}
        <section className="mb-20 bg-black text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="font-inter font-semibold text-sm text-[#cde5ff] mb-2 tracking-[0.2em] uppercase">Premium Partner</div>
              <h2 className="font-montserrat text-[48px] font-extrabold mb-4">CCM 2026 Skates Collection</h2>
              <p className="font-inter text-lg text-white/70 mb-8">
                We carry the full 2026 CCM skates lineup — from the all-new 2026 Elite to the Tacks XR and Jetspeed FT8 Pro series. Engineered for the fastest game on earth.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {["Official Retailer", "Full Warranty"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#cde5ff]">check_circle</span>
                    <span className="font-inter font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#ed4a14] text-white px-6 py-4 rounded mb-8 text-center">
                <span className="font-montserrat text-xl font-bold tracking-wide">CONTACT FOR PRICING AND AVAILABILITY</span>
              </div>
              <Link href="/contact" className="bg-white text-black px-10 py-4 rounded font-inter font-semibold text-sm w-fit hover:bg-[#cde5ff] transition-colors">
                Explore CCM Range
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[400px]">
              <Image
                src="/ccm-skates-catalog-cropped.png"
                alt="CCM 2026 Skates Collection"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ── Skates + Accessories ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          <div className="lg:col-span-2 space-y-8" id="skates">
            <div className="flex justify-between items-center">
              <h2 className="font-montserrat text-[32px] font-bold text-black">Skates &amp; Performance</h2>
              <div className="flex items-center gap-2 text-[#44474d] text-xs font-inter uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#006399] animate-pulse" />
                New Styles Added
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skates.map((s) => (
                <div key={s.name} className="bg-white border border-[#c5c6cd] rounded p-4 product-card-hover">
                  <div className="aspect-[4/3] bg-[#f8f9fa] rounded-sm mb-4 overflow-hidden relative">
                    <Image src={s.img} alt={s.name} fill className="object-contain p-2" />
                  </div>
                  <h4 className="font-montserrat text-2xl font-bold text-black mb-1">{s.name}</h4>
                  <p className="font-inter text-sm text-[#44474d] mb-4">{s.desc}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-montserrat text-2xl font-bold text-black">{s.price}</span>
                    <span className={`font-inter text-xs px-2 py-1 rounded ${s.statusClass}`}>{s.status}</span>
                  </div>
                  <Link href="/contact" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 hover:bg-[#006399] transition-colors">
                    Contact to Order
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <aside className="space-y-8">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Accessories</h2>
            <div className="bg-[#edeeef] rounded-xl p-6 border border-[#c5c6cd] max-h-[600px] overflow-y-auto custom-scrollbar space-y-4">
              {accessories.map((item) => (
                <div key={item.name} className="flex gap-4 p-3 bg-white rounded border border-transparent hover:border-[#006399] transition-colors cursor-pointer group">
                  <div className="w-20 h-20 bg-[#f8f9fa] rounded-sm overflow-hidden shrink-0 relative">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="font-inter font-semibold text-sm text-black group-hover:text-[#006399] transition-colors">{item.name}</h5>
                    <p className="font-inter text-xs text-[#44474d] mb-1">{item.desc}</p>
                    <span className="font-inter font-semibold text-sm text-black">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Protective + Knapper ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" id="protective">
          <div className="space-y-8">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Protective Equipment</h2>
            {[
              { name: "Pro Shoulder Pads", price: "$140 – $210", desc: "High-impact protection with breathable airflow technology.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3OcB23a7CT6GJykkpcmeTgSPO5SSWRLo_ffygXW9DXmc7SIjNrWdrLckAOrZmjn3PKvy06ejGAMXns5AvAfXfNX6DeHrnvzGxL1migiJmnTJmIO98mvz5hgVUxw46fCcYfcySgbFN1asQIjmoJayVxZe0xoCwos1camUvKbaRu6tsrj1eiiuZ52SeyTfdkQBpLm4SBrunj63rRJnTyp5VjnpbPvfLAtPtMCRQypJ1OSQ6Op3tmQH9BjaK0sYQlRO5Bmn7n7YolQ" },
              { name: "Elite Shin Guards", price: "$110 – $160", desc: "Extended knee coverage with moisture-wicking comfort liner.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfSaF4I4mMP_c_5K95jYL0a5TaYzWOJYxs4VGNY0dqUt3YWKbKdQKwNeDeK7bhU30J5XlVuXMQ57Lgs8vxpfbqy-F7Fso51ZfJF4PcIE4kna0XYGC_tP6u4psvkJjKa00LjpuJc4To4MuJITyjfOv1RzBVvIoyDRembg4KTLZKTkODxem8Sx-erxWPjBLgT3k5KtOAExHKbdv5k2IsMLz0IFxR9mFr06Cn9eN17UBUmU7Im-9t1400q5-iVTfEZlgBeyMrXhcJng" },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-[#c5c6cd] rounded p-4 product-card-hover flex items-center gap-6">
                <div className="w-32 h-32 bg-[#f8f9fa] rounded overflow-hidden shrink-0 relative">
                  <Image src={item.img} alt={item.name} fill className="object-contain p-2" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-montserrat text-2xl font-bold text-black">{item.name}</h4>
                  <p className="font-inter text-sm text-[#44474d] mb-2">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat text-2xl font-bold text-black">{item.price}</span>
                    <Link href="/contact" className="text-[#006399] font-inter font-semibold text-sm flex items-center">
                      Contact <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8" id="knapper">
            <h2 className="font-montserrat text-[32px] font-bold text-black">Knapper Products</h2>
            <div className="bg-[#67bafd]/10 border border-[#006399]/20 rounded-xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-[#006399]" style={{ fontSize: "48px" }}>sports_hockey</span>
                <div>
                  <h3 className="font-montserrat text-2xl font-bold text-black">Knapper Specialists</h3>
                  <p className="font-inter text-base text-[#44474d]">Ball hockey and dek hockey excellence.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Knapper Gloves", price: "$85 – $130" },
                  { name: "Knapper Pads", price: "$220 – $450" },
                ].map((item) => (
                  <div key={item.name} className="bg-white p-4 rounded border border-[#c5c6cd]">
                    <div className="font-inter font-semibold text-sm text-black mb-1">{item.name}</div>
                    <div className="font-montserrat text-2xl font-bold text-[#006399] mb-2">{item.price}</div>
                    <Link href="/contact" className="w-full border border-[#006399] text-[#006399] py-2 rounded font-inter text-xs font-semibold hover:bg-[#006399] hover:text-white transition-all block text-center">
                      Order
                    </Link>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-8 p-4 bg-black text-white rounded flex justify-between items-center">
                <span className="font-inter text-base">View Full Knapper Catalog</span>
                <span className="material-symbols-outlined">launch</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <section className="bg-[#e7e8e9] rounded-2xl p-20 text-center border border-[#c5c6cd]">
          <h2 className="font-montserrat text-[48px] font-extrabold text-black mb-6">Can&apos;t find what you need?</h2>
          <p className="font-inter text-lg text-[#44474d] max-w-xl mx-auto mb-12">
            Our inventory is updated daily. Contact us for specific models, custom team orders, or professional fitting advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+19025788000" className="bg-black text-white px-10 py-4 rounded font-inter font-semibold text-sm flex items-center gap-2 hover:bg-[#0d1c32] transition-colors shadow-lg">
              <span className="material-symbols-outlined">call</span>
              +1 (902) 578-8000
            </a>
            <Link href="/contact" className="bg-white text-black border border-black px-10 py-4 rounded font-inter font-semibold text-sm hover:bg-[#f8f9fa] transition-colors">
              Email Our Team
            </Link>
          </div>
          <div className="mt-8 font-inter text-xs text-[#75777e] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-base">verified_user</span>
            Full manufacturer warranty on all sales
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
