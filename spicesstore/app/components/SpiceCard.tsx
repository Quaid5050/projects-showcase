import Link from "next/link";
import Image from "next/image";
import { Spice } from "../data/spices";

export default function SpiceCard({ spice }: { spice: Spice }) {
  return (
    <div className="spice-card">
      {/* Image */}
      <div className="spice-card-img" style={{ backgroundColor: spice.bgColor, position: "relative" }}>
        <Image
          src={`/spices/${spice.id}.jpg`}
          alt={spice.name}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          sizes="(max-width: 768px) 100vw, 300px"
          className="spice-img"
        />
        {/* Gradient overlay for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(44,24,16,0.35) 0%, transparent 55%)"
        }}/>
        {/* Category badge */}
        <span className="spice-img-badge" style={{
          backgroundColor: "rgba(253,246,236,0.92)",
          color: spice.color,
          fontWeight: 700,
          position: "absolute", top: 12, left: 12, zIndex: 2
        }}>
          {spice.category}
        </span>
      </div>

      {/* Body */}
      <div className="spice-card-body">
        <div className="spice-card-header">
          <h3 className="spice-name">{spice.name}</h3>
          <span className="spice-price">${spice.price}</span>
        </div>
        <p className="spice-hindi">{spice.hindiName} · {spice.weight}</p>
        <p className="spice-desc">{spice.description}</p>
        <div className="spice-tags">
          {spice.benefits.slice(0, 2).map(b => (
            <span key={b} className="spice-tag">{b}</span>
          ))}
        </div>
        <Link href={`/shop?order=${spice.id}`} className="btn-order">Order This Spice</Link>
      </div>
    </div>
  );
}