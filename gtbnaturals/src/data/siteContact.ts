/** Placeholder clinic details — update for production */
export const siteContact = {
  phone: '(403) 555-0123',
  phoneTel: '4035550123',
  email: 'care@drjahluwalia.example',
  emailBook: 'bookings@drjahluwalia.example',
  address: 'Calgary, AB — Clinic',
  hours: [
    { label: 'Mon – Fri', value: '9:00 a.m. – 5:00 p.m.' },
    { label: 'Saturday', value: 'By appointment' },
    { label: 'Sunday', value: 'Closed' },
  ] as const,
  bookingMeta: [
    { label: 'Response time', value: 'Within 1–2 business days' },
    { label: 'Consultation', value: 'Scheduled individually' },
    { label: 'Payment', value: 'Discussed at booking' },
  ] as const,
  tagline: 'Holistic natural medicine · Calgary, AB',
} as const