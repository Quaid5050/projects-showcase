import { catalogServices } from './servicesCatalog'

export const serviceDetailRoutes = catalogServices
  .filter((s): s is (typeof catalogServices)[number] & { detailPath: string } => s.detailPath != null)
  .map((s) => ({ path: s.detailPath, label: s.title }))

export const mainNav = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services', hasDropdown: true },
  { path: '/conditions', label: 'Conditions' },
  { path: '/credentials', label: 'Credentials' },
  { path: '/faq', label: 'FAQ' },
  { path: '/booking', label: 'Contact' },
] as const
