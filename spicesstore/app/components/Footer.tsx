import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="18" fill="#E8A020"/>
                <path d="M19 7C19 7 10 14 10 21C10 25.9 14.1 30 19 30C23.9 30 28 25.9 28 21C28 14 19 7 19 7Z" fill="#2C1810"/>
                <path d="M19 13C19 13 13 18 13 22C13 25 15.7 27.5 19 27.5C22.3 27.5 25 25 25 22C25 18 19 13 19 13Z" fill="#E8A020"/>
                <circle cx="19" cy="22" r="3.5" fill="#2C1810"/>
              </svg>
              <div>
                <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.3rem",fontWeight:700,color:"#FDF6EC",display:"block",lineHeight:1}}>Spice</span>
                <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.3rem",fontStyle:"italic",color:"#E8A020",display:"block",lineHeight:1}}>Route</span>
              </div>
            </div>
            <p className="footer-brand-desc">Authentic Indian spicess sourced directly from farms across India. Delivered to your door across Canada.</p>
            <div className="footer-contact-links">
              <a href="tel:+14372437862" className="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +1 437 243 7862
              </a>
              <a href="mailto:akshayprashar6@gmail.com" className="footer-contact-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                akshayprashar6@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/shop" className="footer-link">Shop All Spices</Link>
            <Link href="/about" className="footer-link">Our Story</Link>
            <Link href="/contact" className="footer-link">Contact Us</Link>
          </div>
          <div>
            <h4>How to Order</h4>
            {["Browse & select spices","Fill the order form","We confirm via email","Shipped to your door"].map((s,i)=>(
              <div key={i} className="footer-step"><span className="footer-step-n">{i+1}.</span><span>{s}</span></div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Spice Route. All rights reserved.</p>
          <p>Shipping across Canada</p>
        </div>
      </div>
    </footer>
  );
}
