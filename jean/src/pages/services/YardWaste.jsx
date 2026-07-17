import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg  from '../../assets/images/hero-yard.jpg';
import cleanImg from '../../assets/images/yard-clean.jpg';

export default function YardWaste() {
  useEffect(() => {
    document.title = 'Yard Waste Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Yard waste removal in South Florida. Branches, leaves, garden debris, storm cleanup. Fast and affordable by Junk Pro Service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Outdoor"
      title="Yard Waste Removal"
      subtitle="Branches, leaves, garden debris, and storm cleanup — we clear your outdoor space fast."
      tag="Outdoor"
      headline="Restore Your"
      headlineAccent="Outdoor Space"
      bodyText="Whether it's after a storm, a big landscaping project, or years of buildup — Junk Pro Service clears all types of yard waste quickly and thoroughly. We haul it all away so you don't have to make multiple trips."
      benefits={['Tree branches & limbs','Leaves & grass clippings','Old fencing & lumber','Dirt & soil removal','Garden debris & mulch','Storm damage cleanup']}
      img2={cleanImg}
      img2Alt="Clean yard after waste removal"
      cards={[
        { icon:'🌪️', title:'Storm Debris',    desc:'Fallen trees, branches, and scattered debris cleared quickly after storms.' },
        { icon:'🌿', title:'Overgrown Yards', desc:'Years of buildup, dead plants, and overgrown hedges removed in one visit.' },
        { icon:'🏡', title:'Property Prep',   desc:'Yard cleared before landscaping, selling, or new outdoor projects.' },
      ]}
      cardsLabel="We Also Handle"
      cardsTitle="Storm &amp; <span style='color:var(--yellow)'>Emergency Cleanup</span>"
      cardsSubtitle="After heavy storms, we move fast to help you restore your property."
      estimateTitle="Clear Your Yard"
      estimateAccent="Today"
      preselected="Yard Waste Removal"
      ctaTitle="Your Yard Deserves a Fresh Start"
      ctaText="Fast yard waste removal with honest pricing. Call or book online today."
    />
  );
}
