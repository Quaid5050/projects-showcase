export const serviceDetailRoutes = [
  { path: '/natural-medicine', label: 'Natural Medicine' },
  { path: '/herbal-wellness', label: 'Herbal Wellness' },
  { path: '/manual-osteopathy', label: 'Manual Osteopathy' },
  { path: '/hypnotherapy', label: 'Hypnotherapy' },
  { path: '/massage-therapy', label: 'Massage Therapy' },
] as const

export const mainNav = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services', hasDropdown: true },
  { path: '/conditions', label: 'Conditions' },
  { path: '/credentials', label: 'Credentials' },
  { path: '/faq', label: 'FAQ' },
  { path: '/booking', label: 'Contact' },
] as const
