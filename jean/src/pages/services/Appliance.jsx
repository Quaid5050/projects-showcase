import { useEffect } from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import heroImg from '../../assets/images/hero-appliance.jpg';
import teamImg from '../../assets/images/appliance-team.jpg';

export default function ApplianceRemoval() {
  useEffect(() => {
    document.title = 'Appliance Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Safe appliance removal in South Florida. Refrigerators, washers, dryers, stoves and more. Junk Pro Service hauls it all.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <ServiceDetailLayout
      heroImg={heroImg}
      label="Residential"
      title="Appliance Removal"
      subtitle="Old refrigerators, washers, dryers, stoves — we remove any appliance safely and on schedule."
      tag="Residential"
      headline="Heavy Lifting?"
      headlineAccent="We've Got It."
      bodyText="Old appliances are heavy, awkward, and hard to dispose of properly. We handle the entire removal process — disconnecting, hauling out, and responsible disposal. No scratched floors, no stress."
      benefits={['Refrigerators & freezers','Washers & dryers','Stoves & ovens','Dishwashers','Microwaves','HVAC units & water heaters']}
      img2={teamImg}
      img2Alt="Appliance removal crew at work"
      cards={[
        { icon:'🔒', title:'Safe Disconnection', desc:'We safely disconnect appliances from electrical, gas, or water lines before moving.' },
        { icon:'♻️', title:'Eco-Responsible',    desc:'We recycle and donate working appliances whenever possible.' },
        { icon:'⚡', title:'Fast & Efficient',   desc:'One crew, one trip. We get in, get it done, and get out.' },
      ]}
      cardsLabel="Why Choose Us"
      cardsTitle="Appliance Removal <span style='color:var(--yellow)'>Done Right</span>"
      cardsSubtitle="Professional, safe, and eco-responsible appliance hauling."
      estimateTitle="Book Your"
      estimateAccent="Appliance Pickup"
      preselected="Appliance Removal"
      ctaTitle="Appliance Removal Made Easy"
      ctaText="Professional crew, honest pricing, same-day service available."
    />
  );
}
