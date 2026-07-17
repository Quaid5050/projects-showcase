import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg from '../../assets/images/hero-property.jpg';
import afterImg from '../../assets/images/property-after.jpg';

export default function PropertyCleanup() {
  useEffect(() => {
    document.title = 'Property Cleanups | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Full property cleanouts in South Florida. Garage cleanouts, move-out cleanups, estate cleanouts. Junk Pro Service handles it all.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Cleanout"
      title="Property Cleanups"
      subtitle="Garage cleanouts, move-outs, estate cleanups — total property clearing done right."
      tag="Cleanout"
      headline="Total Property"
      headlineAccent="Cleared Out"
      bodyText="From overstuffed garages to full estate cleanouts, Junk Pro Service clears any property quickly and professionally. We handle the entire process — you just unlock the door."
      benefits={['Garage & basement cleanouts','Move-out & move-in cleanups','Estate cleanouts','Rental property turnover','Foreclosure cleanouts','Hoarding cleanup support']}
      img2={afterImg}
      img2Alt="Clean property after full cleanout"
      cards={[
        { icon:'🏡', title:'Home Cleanouts',   desc:'Whole-home, garage, basement, or attic — fully cleared in one visit.' },
        { icon:'🔑', title:'Rental Turnover',  desc:'Fast move-out cleanups between tenants to get your unit market-ready.' },
        { icon:'⚖️', title:'Estate Cleanouts', desc:'Compassionate, respectful clearing of estates after loss or downsizing.' },
      ]}
      cardsLabel="Cleanout Types"
      cardsTitle="Every Property <span style='color:var(--yellow)'>We Cover</span>"
      cardsSubtitle="Residential, rental, estate, or commercial — we clean it all out."
      estimateTitle="Ready to"
      estimateAccent="Clear Out?"
      preselected="Property Cleanup"
      ctaTitle="Property Cleanouts Done Right"
      ctaText="Full-service cleanouts with honest pricing. Call us or book online."
    />
  );
}
