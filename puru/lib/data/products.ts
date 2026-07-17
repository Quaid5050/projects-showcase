import type { IconName } from './icons';

export interface ProductCategory {
  slug: string;
  title: string;
  tag?: string;
  category: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  audience: string[];
  keyPoints: string[];
  tradeTypes: string[];
  relatedIndustries: string[];
  faqs: Array<{ q: string; a: string }>;
  icon: IconName;
  image: string;
}

export const productCategories: ProductCategory[] = [
  // ── Featured Energy Solutions (from reference site) ──────────────────
  {
    slug: 'battery-energy-storage',
    title: 'Battery Energy Storage',
    tag: 'BESS',
    category: 'Energy Solutions',
    eyebrow: 'Energy Storage',
    shortDescription: 'Residential, commercial, industrial, microgrid, and utility-scale battery-energy-storage solutions, subject to supplier availability and project requirements.',
    fullDescription: 'YUVAAN INTERNATIONAL connects buyers, investors, and project developers with Battery Energy Storage System (BESS) suppliers and technology providers. We facilitate sourcing, technology transfer, and project-development discussions for residential, commercial, industrial, microgrid, and utility-scale battery-energy-storage solutions, subject to supplier availability and project requirements.',
    audience: ['Utilities', 'Industrial Operators', 'Real Estate Developers', 'Government Projects', 'Energy Investors'],
    keyPoints: [
      'Wide temperature BESS for diverse climate conditions',
      'Residential, commercial, industrial, microgrid, and utility-scale battery-energy-storage solutions',
      'Commercial and industrial energy storage solutions',
      'Microgrid and off-grid system configurations',
      'Technology transfer and investment facilitation',
    ],
    tradeTypes: ['Import', 'Project Supply', 'Technology Transfer', 'Investment'],
    relatedIndustries: ['Utilities', 'Manufacturing', 'Infrastructure'],
    faqs: [
      { q: 'What scale of BESS projects can YUVAAN support?', a: 'We connect buyers and investors with suppliers for residential, commercial, industrial, microgrid, and utility-scale battery-energy-storage solutions, subject to supplier availability and project requirements.' },
      { q: 'Do you facilitate BESS technology transfer?', a: 'Yes. We support technology transfer agreements and joint ventures for BESS commercialization in new markets.' },
    ],
    icon: 'Zap',
    image: '/images/products/bess.jpg',
  },
  {
    slug: 'ev-charging-infrastructure',
    title: 'EV Charging Infrastructure',
    tag: 'EV',
    category: 'Energy Solutions',
    eyebrow: 'Clean Transport',
    shortDescription: 'Fast charging networks, portable emergency EV charging systems, and comprehensive charging infrastructure deployment.',
    fullDescription: 'YUVAAN INTERNATIONAL supports the deployment of EV charging infrastructure across commercial, industrial, and public sectors. From fast-charging networks and portable emergency EV charging units to full-scale infrastructure rollouts, we connect project developers with leading EV technology suppliers and facilitate investment partnerships.',
    audience: ['Municipalities', 'Commercial Real Estate', 'Fleet Operators', 'Transportation Companies', 'Energy Developers'],
    keyPoints: [
      'Fast charging networks for commercial and public spaces',
      'Portable emergency EV charging systems',
      'Comprehensive infrastructure deployment support',
      'Multi-brand charging station sourcing',
      'Investment and project development facilitation',
    ],
    tradeTypes: ['Import', 'Project Supply', 'Technology Transfer', 'Infrastructure Development'],
    relatedIndustries: ['Transportation', 'Government', 'Commercial', 'Real Estate'],
    faqs: [
      { q: 'Can YUVAAN supply portable emergency EV chargers?', a: 'Yes. We connect buyers with suppliers of portable emergency EV charging systems suitable for emergency services and temporary deployments.' },
      { q: 'Do you support large-scale charging network rollouts?', a: 'Yes. We facilitate project development partnerships for commercial and municipal charging network deployments.' },
    ],
    icon: 'Car',
    image: '/images/products/ev-charging.jpg',
  },
  {
    slug: 'hydrogen-energy',
    title: 'Hydrogen Energy R&D',
    tag: 'Hydrogen',
    category: 'Energy Solutions',
    eyebrow: 'Clean Energy',
    shortDescription: 'Advancing hydrogen energy research, development, and commercialization for next-generation clean energy solutions.',
    fullDescription: 'YUVAAN INTERNATIONAL supports the development and commercialization of hydrogen energy technologies. We connect researchers, developers, and investors with partners in hydrogen production, storage, fuel cells, and distribution — facilitating technology transfer and joint ventures to accelerate the global hydrogen economy.',
    audience: ['Energy Companies', 'Research Institutions', 'Government Agencies', 'Industrial Processors', 'Investors'],
    keyPoints: [
      'Hydrogen production technology sourcing and partnerships',
      'Fuel cell system commercialization support',
      'Hydrogen storage and distribution solutions',
      'R&D collaboration and technology transfer',
      'Investment facilitation for hydrogen projects',
    ],
    tradeTypes: ['Technology Transfer', 'Investment', 'R&D Partnership', 'Project Development'],
    relatedIndustries: ['Utilities', 'Manufacturing', 'Government', 'Infrastructure'],
    faqs: [
      { q: 'Does YUVAAN connect to hydrogen technology providers?', a: 'Yes. We facilitate connections with leading hydrogen technology developers for production, storage, and fuel cell applications.' },
    ],
    icon: 'Flame',
    image: '/images/products/hydrogen.jpg',
  },
  {
    slug: 'smart-grid-power-management',
    title: 'Smart Grid & Power Management',
    tag: 'Smart Grid',
    category: 'Energy Solutions',
    eyebrow: 'Power Technology',
    shortDescription: 'Smart grid technologies, renewable energy integration, power management systems, and energy efficiency solutions.',
    fullDescription: 'YUVAAN INTERNATIONAL connects utilities, governments, and industrial operators with smart grid technology providers. We facilitate procurement, technology transfer, and project development for grid modernization, renewable energy integration, and advanced power management systems across international markets.',
    audience: ['Utilities', 'Government Agencies', 'Industrial Operators', 'Energy Developers', 'Smart City Projects'],
    keyPoints: [
      'Smart grid technology sourcing and deployment',
      'Renewable energy integration solutions',
      'Advanced metering and monitoring systems',
      'Power management and efficiency platforms',
      'Grid modernization project development',
    ],
    tradeTypes: ['Import', 'Project Supply', 'Technology Transfer', 'Infrastructure Development'],
    relatedIndustries: ['Utilities', 'Government', 'Infrastructure', 'Manufacturing'],
    faqs: [
      { q: 'Can YUVAAN support smart grid projects for municipalities?', a: 'Yes. We connect municipalities and utilities with smart grid technology providers and facilitate project development partnerships.' },
    ],
    icon: 'Grid',
    image: '/images/products/smart-grid.jpg',
  },
  // ── Core Trade Categories ─────────────────────────────────────────────
  {
    slug: 'global-trading',
    title: 'Global Trading',
    category: 'Trade & Sourcing',
    eyebrow: 'International Trade',
    shortDescription: 'International sourcing, import/export review, strategic procurement, and supply chain coordination across target markets.',
    fullDescription: 'YUVAAN INTERNATIONAL supports global trading inquiries by connecting buyers, sellers, manufacturers, and distributors across configured target markets. From strategic procurement and supply chain review to commercial distribution discussions and technology commercialization, we facilitate cross-border trade pathways with structured follow-up.',
    audience: ['Manufacturers', 'Importers', 'Exporters', 'Distributors', 'Trading Companies'],
    keyPoints: [
      'International sourcing across Asia, Europe, and North America',
      'Import and export coordination services',
      'Commercial distribution agreement review',
      'Strategic procurement and supply chain management',
      'Technology commercialization in new markets',
    ],
    tradeTypes: ['Import', 'Export', 'Wholesale Distribution', 'Distribution Review'],
    relatedIndustries: ['Manufacturing', 'Wholesale & Distribution', 'Import & Export Businesses'],
    faqs: [
      { q: 'What markets does YUVAAN review for trade opportunities?', a: 'Yuvaan International is Canada-based and evaluates opportunities across configured target markets in North America, Europe, the Middle East, and Asia.' },
    ],
    icon: 'Globe',
    image: '/images/products/global-trading.jpg',
  },
  {
    slug: 'strategic-business-development',
    title: 'Strategic Business Development',
    category: 'Business Development',
    eyebrow: 'Business Growth',
    shortDescription: 'Joint ventures, strategic alliances, business matchmaking, cross-border partnerships, technology transfer, and government relations.',
    fullDescription: 'YUVAAN INTERNATIONAL drives strategic business development for manufacturers, investors, and government agencies seeking to expand across international markets. We facilitate joint ventures, strategic alliances, and business matchmaking — connecting partners with the right relationships to accelerate global growth.',
    audience: ['Manufacturers', 'Investors', 'Government Agencies', 'Technology Companies', 'Growing Businesses'],
    keyPoints: [
      'Joint venture formation and facilitation',
      'Strategic alliance development',
      'Cross-border business matchmaking',
      'Technology transfer coordination',
      'Government relations and institutional connections',
    ],
    tradeTypes: ['Joint Venture', 'Strategic Alliance', 'Technology Transfer', 'Partnership'],
    relatedIndustries: ['Manufacturing', 'Government', 'Infrastructure', 'Import & Export Businesses'],
    faqs: [
      { q: 'Can YUVAAN help set up a joint venture in a new market?', a: 'Yes. We facilitate joint venture formation including partner identification, due diligence support, and coordination across borders.' },
    ],
    icon: 'Handshake',
    image: '/images/products/business-development.jpg',
  },
  {
    slug: 'infrastructure-project-development',
    title: 'International Project Development',
    category: 'Infrastructure',
    eyebrow: 'Project Development',
    shortDescription: 'Infrastructure projects, renewable energy, public-private partnerships, investment facilitation, project financing coordination, and engineering partnerships.',
    fullDescription: 'YUVAAN INTERNATIONAL supports the full lifecycle of international infrastructure and project development. From renewable energy installations and PPP structures to investment facilitation and engineering partnerships — we connect project developers, investors, and governments with the right partners to bring complex projects to reality.',
    audience: ['Government Agencies', 'Project Developers', 'Infrastructure Investors', 'Engineering Firms', 'Development Banks'],
    keyPoints: [
      'Infrastructure project development and coordination',
      'Renewable energy project facilitation',
      'Public-private partnership (PPP) structuring',
      'Investment facilitation and financing coordination',
      'Engineering partnership connections',
    ],
    tradeTypes: ['Project Development', 'Investment', 'PPP', 'Engineering Partnership'],
    relatedIndustries: ['Government', 'Infrastructure', 'Utilities', 'Real Estate'],
    faqs: [
      { q: 'Does YUVAAN support renewable energy project development?', a: 'Yes. We facilitate connections for solar, wind, hydrogen, and BESS projects including investment, technology supply, and engineering partnerships.' },
    ],
    icon: 'Building2',
    image: '/images/products/project-development.jpg',
  },
  {
    slug: 'industrial-machinery',
    title: 'Industrial Machinery',
    category: 'Industrial Machinery',
    eyebrow: 'Heavy Industry',
    shortDescription: 'Heavy-duty industrial machinery for manufacturing, processing, and production operations across various industries.',
    fullDescription: 'YUVAAN INTERNATIONAL facilitates the import, export, and sourcing of heavy-duty industrial machinery across international markets. From CNC machines and hydraulic presses to conveyors, compressors, and automated production lines — we connect buyers, suppliers, and distributors with reliable machinery trade opportunities.',
    audience: ['Manufacturers', 'Industrial Buyers', 'Equipment Distributors', 'Engineering Companies', 'Factory Operators'],
    keyPoints: [
      'CNC equipment, presses, and production machinery',
      'New and refurbished machinery trade',
      'Spare parts sourcing and distribution',
      'Buyer-supplier matching across international markets',
      'Support for bulk and single-unit orders',
    ],
    tradeTypes: ['Import', 'Export', 'Wholesale', 'Project Supply'],
    relatedIndustries: ['Manufacturing', 'Industrial Machinery', 'Infrastructure'],
    faqs: [
      { q: 'Can YUVAAN source specific industrial machinery models?', a: 'Yes. Submit an inquiry with your exact specifications and we will work to identify suitable supplier connections.' },
    ],
    icon: 'Settings',
    image: '/images/products/industrial-machinery.jpg',
  },
  {
    slug: 'wholesale-consumer-products',
    title: 'Wholesale Consumer Products',
    category: 'Wholesale Products',
    eyebrow: 'Wholesale & Retail',
    shortDescription: 'Bulk consumer goods for wholesale distribution across retail and commercial channels internationally.',
    fullDescription: 'YUVAAN INTERNATIONAL connects wholesalers, distributors, and retailers with bulk consumer product sources from international markets. Electronics, household goods, apparel, and general merchandise — we establish supply connections that support wholesale distribution operations at scale.',
    audience: ['Wholesalers', 'Distributors', 'Retailers', 'E-commerce Businesses', 'Trading Companies'],
    keyPoints: [
      'Consumer electronics and household goods sourcing',
      'Apparel and textile wholesale connections',
      'Large-volume import coordination',
      'Retail and commercial channel supply matching',
      'Commercial distribution agreement review',
    ],
    tradeTypes: ['Import', 'Wholesale Distribution', 'Distribution Review'],
    relatedIndustries: ['Wholesale & Distribution', 'Commercial', 'Import & Export Businesses'],
    faqs: [
      { q: 'What product categories are available for wholesale?', a: 'We cover consumer electronics, household goods, apparel, textiles, general merchandise, and specialty categories.' },
    ],
    icon: 'Package',
    image: '/images/products/wholesale.jpg',
  },
  {
    slug: 'agricultural-food-trade-products',
    title: 'Agricultural & Food Trade',
    category: 'Agriculture',
    eyebrow: 'Agri-Trade',
    shortDescription: 'Agricultural commodities, food products, and agri-trade goods for international market distribution.',
    fullDescription: 'YUVAAN INTERNATIONAL supports importers, exporters, and distributors in connecting across grains, pulses, spices, processed foods, and fresh produce — building reliable agri-trade channels between Canada and global markets.',
    audience: ['Importers', 'Exporters', 'Food Distributors', 'Grocery Chains', 'Agri-Business Companies'],
    keyPoints: [
      'Grains, pulses, and commodity trade connections',
      'Spice, herb, and specialty food sourcing',
      'Processed food and packaged goods trade',
      'Fresh produce import and export coordination',
      'Canada-focused agri-trade channels',
    ],
    tradeTypes: ['Import', 'Export', 'Wholesale Distribution'],
    relatedIndustries: ['Agriculture', 'Wholesale & Distribution'],
    faqs: [
      { q: 'Do you support certified organic food trade?', a: 'Yes. We can connect certified organic producers with importers and distributors in target markets.' },
    ],
    icon: 'Wheat',
    image: '/images/products/agriculture.jpg',
  },
  {
    slug: 'custom-product-sourcing',
    title: 'Custom Product Sourcing',
    category: 'Custom Sourcing',
    eyebrow: 'Bespoke Sourcing',
    shortDescription: 'Tailored product sourcing and supplier-buyer matching for specific trade requirements across any industry.',
    fullDescription: 'Not every trade requirement fits a standard category. YUVAAN INTERNATIONAL offers custom product sourcing support by reviewing your product, quantity, quality, and market requirements to identify relevant international supplier or buyer pathways.',
    audience: ['All Business Types', 'Project Partners', 'Entrepreneurs', 'Startups', 'Established Importers'],
    keyPoints: [
      'Bespoke sourcing for non-standard products',
      'Requirement analysis and supplier identification',
      'Cross-category trade coordination',
      'One-off and ongoing sourcing support',
      'Flexible for any industry or product type',
    ],
    tradeTypes: ['Import', 'Export', 'Sourcing', 'Supplier Matching'],
    relatedIndustries: ['Import & Export Businesses', 'Manufacturing'],
    faqs: [
      { q: 'What information do I need for a custom sourcing inquiry?', a: 'Product description, quantity, target quality level, destination market, and any certifications required.' },
    ],
    icon: 'Search',
    image: '/images/products/custom-sourcing.jpg',
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((p) => p.slug === slug);
}
