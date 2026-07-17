import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg from '../../assets/images/hero-commercial.jpg';
import teamImg from '../../assets/images/commercial-team.jpg';

export default function Commercial() {
  useEffect(() => {
    document.title = 'Commercial Junk Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Commercial junk removal in South Florida. Offices, retail, warehouses cleared with minimal disruption. Junk Pro Service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Commercial"
      title="Commercial Junk Removal"
      subtitle="Offices, retail stores, warehouses, and commercial spaces cleared with minimal disruption to your business."
      tag="Commercial"
      headline="Business Junk,"
      headlineAccent="Gone Fast"
      bodyText="We understand businesses can't afford long downtime. Our team works efficiently and around your schedule — early morning, evenings, or weekends — to keep your operations running without disruption."
      benefits={['Office furniture & equipment','Retail store cleanouts','Storage unit cleanup','Warehouse debris removal','Restaurant equipment','Commercial renovations']}
      img2={teamImg}
      img2Alt="Commercial junk removal team"
      cards={[
        { icon:'🏢', title:'Offices',       desc:'Furniture, equipment, and general office junk removed cleanly and quickly.' },
        { icon:'🛍️', title:'Retail Stores', desc:'Fixture removal, old inventory, and full store cleanouts handled with care.' },
        { icon:'🏭', title:'Warehouses',    desc:'Large-scale debris, pallets, and heavy equipment cleared efficiently.' },
      ]}
      cardsLabel="Industries We Serve"
      cardsTitle="Any Business, <span style='color:var(--yellow)'>Any Size</span>"
      cardsSubtitle="From single-office cleanouts to full commercial facility hauls."
      estimateTitle="Keep Your Business"
      estimateAccent="Clean"
      preselected="Commercial Junk Removal"
      ctaTitle="Commercial Cleanup, Done Right"
      ctaText="Flexible scheduling, honest pricing, zero disruption to your business."
    />
  );
}
