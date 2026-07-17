export const safeSolutionRoutes = {
  newProducts: '/products/new-products',
  detail: '/products/new-products/safe-solution-floor-safety-system',
  distributor: '/partnerships/distributors-wanted',
  floorAssessment: '/contact?inquiry=floor-assessment&product=safe-solution#inquiry-form',
  distributorContact: '/contact?inquiry=distributor&product=safe-solution#inquiry-form',
};

export const safeSolutionSummary = {
  eyebrow: 'New Product',
  title: 'Safe Solution® Floor Safety System',
  subtitle: 'Invisible anti-slip treatment, low-residue cleaning, and scheduled rejuvenation for commercial and industrial hard surfaces.',
  description:
    'A complete commercial and industrial floor-safety system combining invisible anti-slip treatment, low-residue cleaning, scheduled inspection, and traction rejuvenation.',
};

export type EvidenceStatus = 'verified' | 'pending' | 'disabled';

export interface ProductClaim {
  label: string;
  value?: string;
  description: string;
  status: EvidenceStatus;
  sourceDocument?: string;
  evidenceRequired?: string;
}

export const productClaims: ProductClaim[] = [
  {
    label: 'Traction coefficient range',
    value: '0.6–0.8+',
    description: 'Reported coefficient range under applicable conditions.',
    status: 'pending',
    evidenceRequired: 'Complete test report including method, wet/dry condition, surface, instrument, lab, date, and limitations.',
  },
  {
    label: 'Potential protection interval',
    value: 'Up to 3 years',
    description: 'Commercial protection or assessment interval.',
    status: 'pending',
    evidenceRequired: 'Manufacturer-approved technical/commercial documentation defining use cases, exclusions, and maintenance requirements.',
  },
  {
    label: 'Rejuvenation interval',
    value: '1–3 years',
    description: 'Typical period between rejuvenation assessments.',
    status: 'pending',
    evidenceRequired: 'Manufacturer maintenance guide or program documentation with limitations.',
  },
  {
    label: 'Insurance-premium reduction',
    value: 'Up to 10%',
    description: 'Potential insurance-premium reduction.',
    status: 'pending',
    evidenceRequired: 'Insurer documentation, jurisdiction, program conditions, and approved wording.',
  },
  {
    label: 'Claim deductible example',
    value: '$5,000',
    description: 'Average claim deductible example.',
    status: 'disabled',
    evidenceRequired: 'Client-approved financial basis and exact allowed wording.',
  },
  {
    label: 'Five-year price guarantee',
    description: 'Commercial price guarantee.',
    status: 'pending',
    evidenceRequired: 'Approved commercial terms, eligibility, exclusions, renewal conditions, territory restrictions, and customer responsibilities.',
  },
  {
    label: 'UL-related wording',
    description: 'UL certification or testing language.',
    status: 'disabled',
    evidenceRequired: 'Valid UL certificate or report and approved wording.',
  },
  {
    label: 'ASTM-related wording',
    description: 'ASTM certification or testing language.',
    status: 'disabled',
    evidenceRequired: 'Complete ASTM test report and approved wording.',
  },
  {
    label: 'Sanitizing',
    description: 'Sanitizing product-property claim.',
    status: 'pending',
    evidenceRequired: 'Technical Data Sheet, Safety Data Sheet, regulatory registration if applicable, and manufacturer-approved marketing material.',
  },
  {
    label: 'Antibacterial',
    description: 'Antibacterial product-property claim.',
    status: 'disabled',
    evidenceRequired: 'Regulatory registration and manufacturer-approved wording.',
  },
  {
    label: 'Biodegradable',
    description: 'Biodegradable product-property claim.',
    status: 'disabled',
    evidenceRequired: 'Testing or regulatory documentation and approved wording.',
  },
  {
    label: 'Non-hazardous',
    description: 'Non-hazardous product-property claim.',
    status: 'disabled',
    evidenceRequired: 'Current SDS and jurisdiction-specific regulatory confirmation.',
  },
  {
    label: 'pH-neutral',
    description: 'pH-neutral product-property claim.',
    status: 'pending',
    evidenceRequired: 'Current Technical Data Sheet or SDS confirming pH range and wording.',
  },
  {
    label: 'Heavy-duty',
    description: 'Heavy-duty product-positioning claim.',
    status: 'pending',
    evidenceRequired: 'Manufacturer-approved marketing material or technical sheet.',
  },
  {
    label: 'WCB-rate reductions',
    description: 'Workers compensation rate-reduction claim.',
    status: 'disabled',
    evidenceRequired: 'Jurisdiction-specific WCB documentation and approved wording.',
  },
  {
    label: 'Certification language',
    description: 'Any certified, approved, or independently verified claim.',
    status: 'disabled',
    evidenceRequired: 'Valid certificate/report and exact approved public wording.',
  },
];

export const productSystem = [
  {
    name: 'Safe Solution®',
    subtitle: 'Anti-Slip Treatment System',
    shortLabel: 'Invisible Anti-Slip Treatment',
    points: [
      'Invisible, non-coating micro-etch application for suitable hard mineral surfaces',
      'Creates microscopic channels that help disperse oils and water from underfoot',
      'Designed to improve continuous contact between footwear and the treated surface',
      'Suitable surfaces may include ceramic tile, cement, and steel-enameled bathtubs, subject to a test-area assessment',
      'Commercial performance depends on the surface, traffic, contamination, and maintenance',
      'A test area must be completed before full treatment',
    ],
  },
  {
    name: 'CRS™',
    subtitle: 'Cleaning & Rejuvenation System',
    shortLabel: 'Cleaning & Rejuvenation System',
    points: [
      'Removes film, residue, and buildup left by cleaning products',
      'Helps restore traction when anti-slip performance diminishes',
      'Recommended as part of a scheduled Floor Care Safety Program',
      'Helps floors operate at maximum effectiveness between treatments',
      'Rejuvenation timing depends on traffic, contamination, surface type, and maintenance',
      'May include written inspection and compliance documentation where applicable',
    ],
  },
  {
    name: 'Clean Step™',
    subtitle: 'Multi-Purpose Cleaner',
    shortLabel: 'Multi-Purpose Cleaner',
    points: [
      'Cleaner and degreaser for commercial floor-maintenance programs',
      'Super low-residue formulation',
      'Designed to maintain Safe Solution® treated surfaces',
      'Product properties should be confirmed against the current technical documentation',
      'Intended as an alternative to stocking multiple specialized cleaners',
      'Supports ongoing floor appearance, cleanliness, and safety',
      'Commercial pricing may be available without requiring excessive purchase volume',
    ],
  },
];

export const safetyBenefits = [
  'Invisible, non-coating treatment',
  'Suitable for selected hard mineral surfaces',
  'Ongoing cleaning and maintenance system',
  'Scheduled inspection and documentation',
  'Potential reduction in slip-and-fall exposure',
  'Long-term commercial floor-care program',
  'Distributor opportunities in open territories',
];

export const performanceMetrics = [
  { value: 'Assessment', label: 'A site and test-area review is required before full treatment.' },
  { value: 'Program', label: 'Treatment, cleaning, inspection, and rejuvenation work together as a maintenance program.' },
  { value: 'Documentation', label: 'Technical information is available to qualified customers and distribution partners upon request.' },
];

export const suitableSurfaces = [
  'Ceramic tile',
  'Cement or concrete surfaces where appropriate',
  'Steel-enameled bathtubs',
  'Other compatible mineral surfaces following testing',
];

export const floorCareProcess = [
  'Initial surface assessment',
  'Test-area application',
  'Safe Solution® treatment',
  'Daily or routine Clean Step™ maintenance',
  'Scheduled written inspection',
  'CRS™ rejuvenation when required',
];

export const targetIndustries = [
  { title: 'Hospitality and food service', href: '/industries/hospitality-food-service' },
  { title: 'Healthcare and senior care', href: '/industries/healthcare' },
  { title: 'Education', href: '/industries/education' },
  { title: 'Retail', href: '/industries/commercial' },
  { title: 'Commercial property', href: '/industries/commercial' },
  { title: 'Manufacturing', href: '/industries/manufacturing' },
  { title: 'Warehousing and logistics', href: '/industries/warehousing-logistics' },
  { title: 'Government facilities', href: '/industries/government' },
  { title: 'Recreation and public buildings', href: '/industries/government' },
  { title: 'Facilities management', href: '/industries/facilities-management' },
  { title: 'Commercial cleaning companies', href: safeSolutionRoutes.distributor },
];

export const technicalDocuments = [
  { title: 'Product brochure', status: 'Available on request' },
  { title: 'Technical data sheet', status: 'Available on request' },
  { title: 'Safety Data Sheet', status: 'Available on request' },
  { title: 'Test report', status: 'Available on request' },
  { title: 'Surface compatibility guide', status: 'Available on request' },
  { title: 'Maintenance guide', status: 'Available on request' },
  { title: 'Floor Care Safety Program brochure', status: 'Available on request' },
  { title: 'Distributor brochure', status: 'Available on request' },
];

export const distributorBenefits = [
  'Differentiated commercial floor-safety system',
  'Three-part product and maintenance program',
  'Potential for recurring product and service revenue',
  'Commercial and industrial customer applications',
  'Product and application training',
  'Technical and sales support',
  'Marketing materials',
  'Territory opportunities subject to review',
  'Access to Safe Solution®, CRS™, and Clean Step™',
];

export const distributorApplicantTypes = [
  'Commercial cleaning companies',
  'Flooring contractors',
  'Facilities-management companies',
  'Safety-product distributors',
  'Janitorial and sanitation suppliers',
  'Hospitality and healthcare suppliers',
  'Industrial suppliers',
  'Established importers and B2B distributors',
  'Businesses with technical or service capabilities',
];

export const distributorProcess = [
  'Submit company profile',
  'Territory and capability review',
  'Product and technical discussion',
  'Commercial terms and due diligence',
  'Training and market-launch preparation',
];

export const productClaimFootnote =
  'Product suitability, appearance, traction performance, maintenance intervals, insurance outcomes, and commercial terms depend on the surface, application, site conditions, maintenance, jurisdiction, and supporting documentation. A test-area assessment is required before full application.';
