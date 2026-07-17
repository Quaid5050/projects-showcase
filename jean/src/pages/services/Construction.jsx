import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg    from '../../assets/images/hero-construction.jpg';
import cleanupImg from '../../assets/images/construction-cleanup.jpg';

export default function ConstructionDebris() {
  useEffect(() => {
    document.title = 'Construction Debris Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Construction debris removal in South Florida. Drywall, wood, tile, renovation waste hauled away fast. Serving homeowners and contractors.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Construction"
      title="Construction Debris Removal"
      subtitle="Renovation waste, drywall, wood, tile, and materials cleared fast for homeowners and contractors."
      tag="Construction"
      headline="Post-Renovation"
      headlineAccent="Cleared Fast"
      bodyText="Renovations leave a mess. We specialize in cleaning up after construction and remodeling projects — quickly, safely, and without disrupting your timeline. We serve homeowners, general contractors, and property managers."
      benefits={['Drywall & plaster','Wood & lumber','Tile & flooring','Metal scraps','Roofing materials','Post-construction sweep']}
      img2={cleanupImg}
      img2Alt="Construction site cleanup crew"
      cards={[
        { icon:'🏠', title:'Homeowners',     desc:'Post-renovation cleanouts so you can enjoy your new space immediately.' },
        { icon:'🔨', title:'Contractors',    desc:'We keep your job site clean during and after every project phase.' },
        { icon:'🔑', title:'Prop. Managers', desc:'Fast debris removal between tenants or during rental renovations.' },
      ]}
      cardsLabel="Who We Help"
      cardsTitle="Built for <span style='color:var(--yellow)'>Builders &amp; Owners</span>"
      cardsSubtitle="We work alongside homeowners, contractors, and property managers."
      estimateTitle="Get Your Site"
      estimateAccent="Cleared Today"
      preselected="Construction Debris"
      ctaTitle="Construction Debris? We Handle It."
      ctaText="Fast, professional debris removal for any size project."
    />
  );
}
