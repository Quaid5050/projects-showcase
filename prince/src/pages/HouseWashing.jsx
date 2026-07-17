import ServiceDetailPage from '../components/ServiceDetailPage';

export default function HouseWashing() {
  return (
    <ServiceDetailPage
      title="House Washing"
      subtitle="Remove dirt, algae, mildew, and exterior buildup while helping your home look fresh, clean, and well cared for."
      heroImage="/images/house-washing-hero.jpg"
      icon="🏠"
      price="$389"
      included={[
        { title: 'Full Exterior Wash', desc: 'Complete cleaning of all exterior walls, eaves, and fascia.' },
        { title: 'Algae & Mildew Removal', desc: 'Effective treatment that removes biological growth from surfaces.' },
        { title: 'Window Frames & Sills', desc: 'Cleaning around windows to prevent buildup and staining.' },
        { title: 'Eavestroughs Exterior', desc: 'Clean the outside of gutters for a complete finish.' },
        { title: 'Safe Technique Selection', desc: 'Pressure or soft wash chosen based on your specific siding type.' },
      ]}
      benefits={[
        { icon: '✨', title: 'Restored Curb Appeal', desc: 'Your home will look refreshed and well-maintained from the street.' },
        { icon: '🛡️', title: 'Surface Protection', desc: 'Removing algae and mildew prevents long-term surface damage.' },
        { icon: '🏡', title: 'Increased Property Value', desc: 'A clean exterior can make a real difference in perceived property value.' },
        { icon: '🌿', title: 'Healthier Environment', desc: 'Reduce mold and allergen buildup around your home\'s exterior.' },
        { icon: '💰', title: 'Cost Effective', desc: 'Regular cleaning is far cheaper than repainting or repairs from neglect.' },
        { icon: '⚡', title: 'Fast Results', desc: 'See a dramatic transformation in just one service visit.' },
      ]}
      signs={[
        'Green or black stains on your siding, walls, or trim',
        'Visible dirt, dust, or cobweb buildup on the exterior',
        'Siding looks dull or faded compared to when it was new',
        'Neighbours have cleaner-looking homes on your street',
        'You haven\'t had an exterior clean in over a year',
        'You\'re thinking about selling or repainting your home',
      ]}
      process={[
        { title: 'Property Assessment', desc: 'We walk your property, identify the right technique, and confirm the service plan.' },
        { title: 'Preparation', desc: 'We protect your landscaping, windows, and outdoor items before starting.' },
        { title: 'Cleaning', desc: 'Using the appropriate pressure and safe cleaning agents for your siding type.' },
        { title: 'Rinse & Inspect', desc: 'A thorough rinse followed by a detailed walkthrough with you.' },
        { title: 'You\'re Done', desc: 'Enjoy your freshly cleaned home. We\'ll confirm you\'re satisfied before leaving.' },
      ]}
    />
  );
}
