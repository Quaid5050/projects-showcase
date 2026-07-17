import ServiceDetailPage from '../components/ServiceDetailPage';

export default function PatioDeckCleaning() {
  return (
    <ServiceDetailPage
      title="Patio & Deck Cleaning"
      subtitle="Make your outdoor spaces guest-ready. Remove dirt, moss, weather stains, and restore the look of your patio and deck."
      heroImage="/images/patio-hero.jpg"
      icon="🪴"
      included={[
        { title: 'Full Patio Surface Cleaning', desc: 'Complete wash of all patio and deck surfaces.' },
        { title: 'Moss & Algae Treatment', desc: 'Effective removal of biological growth that makes surfaces slippery.' },
        { title: 'Stain Removal', desc: 'Treatment for weather stains, tannin marks, and general discolouration.' },
        { title: 'Safe for All Materials', desc: 'Appropriate technique for wood decks, concrete patios, stone, and pavers.' },
        { title: 'Furniture Area Cleaning', desc: 'We clean around and under outdoor furniture areas.' },
      ]}
      benefits={[
        { icon: '🌿', title: 'Guest-Ready Space', desc: 'Entertain confidently with a clean, welcoming outdoor living area.' },
        { icon: '🦺', title: 'Slip Prevention', desc: 'Remove moss and algae that create hazardous slippery conditions.' },
        { icon: '🪵', title: 'Protect Your Surfaces', desc: 'Regular cleaning extends the life of wood, stone, and concrete surfaces.' },
        { icon: '✨', title: 'Like-New Appearance', desc: 'Restore the original look of your outdoor space without costly replacements.' },
        { icon: '🏡', title: 'Enhance Enjoyment', desc: 'Enjoy your outdoor space more when it looks and feels clean.' },
        { icon: '💰', title: 'Property Value', desc: 'Well-maintained outdoor areas add appeal and value to your home.' },
      ]}
      signs={[
        'Green or black moss and algae growth on patio surfaces',
        'Slippery deck or patio when it rains',
        'Visible dirt, grime, and weather staining',
        'Dark tannin stains on wood or stone surfaces',
        'You\'re planning to entertain guests or list the home for sale',
        'The patio hasn\'t been cleaned in a full season or more',
      ]}
      process={[
        { title: 'Surface Check', desc: 'Assess the material, condition, and type of buildup before starting.' },
        { title: 'Clear the Area', desc: 'We work around and move lightweight furniture to ensure full coverage.' },
        { title: 'Treatment Application', desc: 'Apply appropriate eco-safe cleaning solution to loosen buildup.' },
        { title: 'Pressure Cleaning', desc: 'Thorough clean using the right pressure for your specific surface material.' },
        { title: 'Rinse & Review', desc: 'Final rinse and a walkthrough to ensure you\'re completely satisfied.' },
      ]}
    />
  );
}
