export type MarketStatus = 'existing' | 'target' | 'distributor-open' | 'under-evaluation';

export interface MarketEntry {
  name: string;
  status: MarketStatus;
  note: string;
}

export const company = {
  displayName: 'Yuvaan International',
  brandName: 'YUVAAN INTERNATIONAL',
  businessName: 'Yuvaan International',
  publicEmail: 'pacifictrade2010@gmail.com',
  publicPhoneDisplay: '+1 778 828 3610',
  publicPhoneTel: '+17788283610',
  province: 'British Columbia',
  country: 'Canada',
  locationDisplay: 'British Columbia, Canada',
  tagline: 'Canada-based international trade, sourcing, products, and partnership development.',
  trademarkNotice: 'Product names and trademarks remain the property of their respective owners.',
  routes: {
    home: '/',
    about: '/about',
    products: '/products',
    newProducts: '/products/new-products',
    safeSolution: '/products/new-products/safe-solution-floor-safety-system',
    industries: '/industries',
    globalMarkets: '/global-markets',
    partnerships: '/partnerships',
    distributorsWanted: '/partnerships/distributors-wanted',
    investments: '/investments',
    resources: '/resources',
    contact: '/contact',
    privacy: '/privacy-policy',
    terms: '/terms-of-use',
  },
  businessCategories: [
    'International product sourcing',
    'Commercial distribution',
    'Industrial solutions',
    'Market development',
    'Strategic partnerships',
    'Project collaboration',
  ],
};

export const markets: MarketEntry[] = [
  { name: 'Canada', status: 'existing', note: 'Company base and primary public contact market.' },
  { name: 'United States', status: 'target', note: 'Target market for product, sourcing, and distribution discussions.' },
  { name: 'Europe', status: 'target', note: 'Target market for product and partnership development.' },
  { name: 'Middle East', status: 'target', note: 'Target market for regional partnership opportunities.' },
  { name: 'India', status: 'target', note: 'Target market for sourcing, product, and partnership discussions.' },
  { name: 'China', status: 'target', note: 'Target market for sourcing and supplier-development evaluation.' },
  { name: 'Japan', status: 'target', note: 'Target market for technology and product-development evaluation.' },
  { name: 'Southeast Asia', status: 'target', note: 'Target region for distributor and trade inquiries.' },
  { name: 'Australia', status: 'target', note: 'Target market for distributor and product opportunities.' },
  { name: 'Nepal', status: 'under-evaluation', note: 'Market opportunity under evaluation.' },
];

export const distributorOpenMarkets = [
  'North America',
  'Europe',
  'Middle East',
  'South Asia',
  'Southeast Asia',
  'Australia and New Zealand',
];

export const targetMarketCountLabel = `${markets.filter((market) => market.status !== 'existing').length}+ target markets`;
