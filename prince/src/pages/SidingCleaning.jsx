import ServiceDetailPage from '../components/ServiceDetailPage';

export default function SidingCleaning() {
  return (
    <ServiceDetailPage
      title="Siding Cleaning"
      subtitle="Gentle but effective soft washing to remove algae, dust, and exterior buildup while protecting your home's appearance."
      heroImage="/images/siding-hero.jpg"
      icon="🏡"
      included={[
        { title: 'Soft Wash Technique', desc: 'Low-pressure soft wash that\'s safe for all siding types including vinyl, wood, and fiber cement.' },
        { title: 'Algae & Mildew Removal', desc: 'Complete removal of green and black biological growth.' },
        { title: 'Dust & Oxidation Cleaning', desc: 'Remove chalky residue and oxidation that dulls siding over time.' },
        { title: 'Window & Trim Cleaning', desc: 'Attention to trim, window frames, and sills as part of the service.' },
        { title: 'All Siding Types Covered', desc: 'Vinyl, wood, HardiePlank, stucco, and more.' },
      ]}
      benefits={[
        { icon: '🏡', title: 'Protected Appearance', desc: 'Keep your siding looking clean and well-maintained year-round.' },
        { icon: '🛡️', title: 'Surface Longevity', desc: 'Removing algae and oxidation extends the life of your siding significantly.' },
        { icon: '🌿', title: 'Healthier Home', desc: 'Reduce biological growth near windows and entry points.' },
        { icon: '✨', title: 'Colour Restoration', desc: 'Bring back the original vibrancy of your siding\'s colour.' },
        { icon: '💰', title: 'Avoid Costly Repairs', desc: 'Neglected siding can lead to damage that\'s far more expensive to fix.' },
      ]}
      signs={[
        'Green, black, or brown staining on siding panels',
        'Chalky, faded appearance compared to when siding was new',
        'Visible algae, mold, or mildew streaks',
        'Buildup near windows, eaves, or at the base of walls',
        'You\'re considering repainting — cleaning first is always the right step',
      ]}
      process={[
        { title: 'Siding Assessment', desc: 'Identify the siding material and cleaning requirements before starting.' },
        { title: 'Protect Surrounding Areas', desc: 'Cover plants, windows, and property items as needed.' },
        { title: 'Soft Wash Application', desc: 'Apply cleaning solution gently to eliminate biological growth and buildup.' },
        { title: 'Rinse', desc: 'Low-pressure rinse ensures all solution and debris is removed safely.' },
        { title: 'Final Inspection', desc: 'Walk the property with you to confirm the results before we leave.' },
      ]}
    />
  );
}
