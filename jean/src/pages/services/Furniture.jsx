import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg  from '../../assets/images/hero-furniture.jpg';
import teamImg  from '../../assets/images/furniture-team.jpg';
import afterImg from '../../assets/images/furniture-after.jpg';

export default function FurnitureRemoval() {
  useEffect(() => {
    document.title = 'Furniture Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Professional furniture removal in South Florida. Sofas, beds, tables, cabinets and more. Fast, affordable, same-day service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Residential"
      title="Furniture Removal"
      subtitle="We remove sofas, chairs, tables, mattresses, cabinets and more — fast, professional, and affordable."
      tag="Residential"
      headline="Haul Away Any"
      headlineAccent="Furniture"
      bodyText="Whether you're moving, redecorating, or simply clearing out, Junk Pro Service makes furniture removal effortless. Our crew arrives on time, lifts everything out, and leaves your space clean — no hassle, no hidden fees."
      benefits={['Sofas & sectionals','Beds & mattresses','Dining sets & tables','Cabinets & dressers','Office furniture','Outdoor furniture']}
      img2={teamImg}
      img2Alt="Furniture removal team at work"
      img3={afterImg}
      img3Alt="Clean room after furniture removal"
      cards={[
        { icon:'📋', title:'Book Online or Call',   desc:'Tell us what you need removed and where. We respond fast with an upfront price.' },
        { icon:'🚛', title:'We Arrive On Time',      desc:'Our crew shows up at the scheduled time, ready to work — no delays.' },
        { icon:'✨', title:'We Haul & Clean Up',     desc:'We load everything and sweep the area before we leave. Space ready to use.' },
      ]}
      cardsLabel="How It Works"
      cardsTitle="Simple as <span style='color:var(--yellow)'>1, 2, 3</span>"
      cardsSubtitle="Getting rid of furniture has never been easier."
      estimateTitle="Ready to Clear"
      estimateAccent="Your Space?"
      preselected="Furniture Removal"
      ctaTitle="Furniture Removal Made Easy"
      ctaText="Same-day and next-day pickups available. Honest pricing. Professional crew."
    />
  );
}
