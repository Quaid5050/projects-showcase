import ServiceDetailPage from '../components/ServiceDetailPage';

export default function ExteriorSurfaceCleaning() {
  return (
    <ServiceDetailPage
      title="Exterior Surface Cleaning"
      subtitle="Custom cleaning for all exterior surfaces around your home. We assess, plan, and deliver professional results every time."
      heroImage="/images/exterior-hero.jpg"
      icon="✨"
      included={[
        { title: 'Custom Surface Assessment', desc: 'We evaluate the surface type and choose the right cleaning method.' },
        { title: 'Retaining Walls', desc: 'Cleaning of retaining walls and garden borders.' },
        { title: 'Steps & Stairs', desc: 'Interior and exterior steps and stair surfaces.' },
        { title: 'Fences & Gates', desc: 'Wood, vinyl, and metal fence cleaning.' },
        { title: 'Garage Floors', desc: 'Exterior garage floor areas and aprons.' },
        { title: 'General Exterior Surfaces', desc: 'Any additional exterior surfaces that need attention.' },
      ]}
      benefits={[
        { icon: '✨', title: 'Custom Approach', desc: 'Every surface is different. We choose the right method for safe, effective results.' },
        { icon: '🏡', title: 'Complete Property Care', desc: 'Don\'t overlook the small surfaces that affect your overall property appearance.' },
        { icon: '🛡️', title: 'Prevent Damage', desc: 'Buildup on surfaces over time can lead to permanent staining or deterioration.' },
        { icon: '💰', title: 'Flexible Service', desc: 'We can combine this with other services for a complete exterior clean.' },
      ]}
      signs={[
        'Fences, walls, or steps showing staining or moss growth',
        'Garage floor areas with oil, dirt, or weather buildup',
        'Retaining walls darkened by moss or algae',
        'Stairways with slippery or discoloured surfaces',
        'You want a complete property clean beyond just the main driveway or house',
      ]}
      process={[
        { title: 'Full Property Walkthrough', desc: 'We identify all the surfaces that need attention and confirm your priorities.' },
        { title: 'Custom Plan', desc: 'We create a cleaning plan matched to each surface type and condition.' },
        { title: 'Surface-by-Surface Cleaning', desc: 'Systematic cleaning of each area using appropriate techniques.' },
        { title: 'Quality Check', desc: 'We review each surface as we complete it to ensure thorough results.' },
        { title: 'Client Walkthrough', desc: 'A final walkthrough with you to confirm complete satisfaction.' },
      ]}
    />
  );
}
