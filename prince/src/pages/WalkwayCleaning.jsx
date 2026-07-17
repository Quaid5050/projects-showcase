import ServiceDetailPage from '../components/ServiceDetailPage';

export default function WalkwayCleaning() {
  return (
    <ServiceDetailPage
      title="Walkway Cleaning"
      subtitle="Safer, cleaner walkways that make great first impressions. Remove grime, weather buildup, and biological growth."
      heroImage="/images/walkway-hero.jpg"
      icon="🚶"
      included={[
        { title: 'Full Walkway Surface Cleaning', desc: 'Thorough cleaning of all walkway and pathway surfaces.' },
        { title: 'Moss & Weed Removal', desc: 'Effective removal of moss, algae, and growth between pavers.' },
        { title: 'Joint Cleaning', desc: 'Attention to joints and gaps where buildup accumulates.' },
        { title: 'Edge & Border Detail', desc: 'Clean edges for a complete, polished finish.' },
      ]}
      benefits={[
        { icon: '🚶', title: 'First Impressions', desc: 'A clean walkway sets the tone for the rest of your property.' },
        { icon: '🦺', title: 'Safety', desc: 'Remove slippery moss and algae to keep walkways safe for family and guests.' },
        { icon: '✨', title: 'Restored Appearance', desc: 'Bring back the original look of your walkway surfaces.' },
        { icon: '💰', title: 'Long-Term Protection', desc: 'Regular cleaning prevents buildup that can damage paving over time.' },
      ]}
      signs={[
        'Slippery walkways when wet, especially near shaded areas',
        'Visible green moss or algae between pavers',
        'General darkening or discolouration of the walking surface',
        'Buildup along the edges and borders of the walkway',
        'Guests or family have slipped or struggled to walk safely',
      ]}
      process={[
        { title: 'Surface Inspection', desc: 'Assess the material type, level of buildup, and the best approach.' },
        { title: 'Treatment Application', desc: 'Apply the right solution to break down moss, algae, and buildup.' },
        { title: 'Pressure Cleaning', desc: 'Thorough wash of the entire walkway surface and surrounding areas.' },
        { title: 'Detail Work', desc: 'Attention to joints, edges, and areas with heavier accumulation.' },
        { title: 'Rinse & Done', desc: 'Final rinse and a walkthrough to ensure you\'re satisfied.' },
      ]}
    />
  );
}
