import type { MetadataRoute } from 'next';
import { productCategories } from '@/lib/data/products';
import { industries } from '@/lib/data/industries';

const baseUrl = 'https://yuvaan-international.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/products/new-products',
    '/products/new-products/safe-solution-floor-safety-system',
    '/industries',
    '/partnerships',
    '/partnerships/distributors-wanted',
    '/global-markets',
    '/investments',
    '/contact',
    '/resources',
    '/privacy-policy',
    '/terms-of-use',
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...productCategories.map((product) => ({ url: `${baseUrl}/products/${product.slug}` })),
    ...industries.map((industry) => ({ url: `${baseUrl}/industries/${industry.slug}` })),
  ];
}
