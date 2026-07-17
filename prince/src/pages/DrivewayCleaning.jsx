import ServiceDetailPage from '../components/ServiceDetailPage';

export default function DrivewayCleaning() {
  return (
    <ServiceDetailPage
      title="Driveway Cleaning"
      subtitle="Remove stubborn stains, dirt, grime, and weather buildup. Restore your driveway's original look and improve curb appeal."
      heroImage="/images/driveway-hero.jpg"
      icon="🚗"
      included={[
        { title: 'Full Surface Cleaning', desc: 'Complete removal of dirt, moss, and general buildup from the driveway surface.' },
        { title: 'Stain Treatment', desc: 'Targeted treatment for oil stains, rust marks, and other stubborn staining.' },
        { title: 'Edge Cleaning', desc: 'Attention to edges and borders for a complete, polished result.' },
        { title: 'Safe for All Surfaces', desc: 'Appropriate pressure and technique for concrete, paving stones, and asphalt.' },
      ]}
      benefits={[
        { icon: '🚗', title: 'Curb Appeal', desc: 'A clean driveway is one of the first things visitors and buyers notice.' },
        { icon: '🦺', title: 'Safer Surface', desc: 'Remove moss and algae that make driveways slippery and hazardous.' },
        { icon: '💰', title: 'Protect Your Investment', desc: 'Clean driveways last longer. Buildup causes surface degradation over time.' },
        { icon: '✨', title: 'Fresh Look', desc: 'Restore that just-installed appearance without replacing the surface.' },
      ]}
      signs={[
        'Visible oil stains from vehicle leaks',
        'Green moss or algae growth on the surface',
        'General discolouration from weather and traffic',
        'Dark tire marks and grime buildup near edges',
        'Slippery surface when wet from moss or algae',
      ]}
      process={[
        { title: 'Surface Assessment', desc: 'We assess the surface material, stain type, and condition before starting.' },
        { title: 'Pre-Treatment', desc: 'Apply appropriate cleaning solution to loosen stubborn stains and buildup.' },
        { title: 'Pressure Washing', desc: 'Thorough pressure wash across the entire surface, including edges and borders.' },
        { title: 'Final Rinse', desc: 'Clean rinse to remove all cleaning agents and residue.' },
        { title: 'Walkthrough', desc: 'We walk the driveway with you to confirm you\'re satisfied with the results.' },
      ]}
    />
  );
}
