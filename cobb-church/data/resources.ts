export interface StaticResource {
  id: string
  title: string
  description: string
  type: string
  church: string
  location: string
  available: boolean
  tags: string[]
  category?: string
  urgent?: boolean
}

export interface Need {
  id: string
  title: string
  description: string
  church: string
  location: string
  tags: string[]
  urgent: boolean
  details: string[]
}

export const resources: StaticResource[] = [
  {
    id: 'res-1',
    title: 'Event Space Available',
    description: 'Large indoor space available for community events, meetings, workshops and more.',
    type: 'Space',
    church: 'Vision for Souls Church',
    location: 'Austell, GA',
    available: true,
    tags: ['Space', 'Events', 'Facilities'],
  },
  {
    id: 'res-2',
    title: 'Volunteer Team Available',
    description: '20+ volunteers ready to help with outreach projects, events, and community needs.',
    type: 'Volunteers',
    church: 'First Baptist Church Powder Springs',
    location: 'Powder Springs, GA',
    available: true,
    tags: ['Volunteers', 'Outreach', 'Support'],
  },
  {
    id: 'res-3',
    title: 'Youth Mentorship Program',
    description: 'Weekly mentorship program for boys ages 10-17. Mentors and resources available.',
    type: 'Mentorship',
    church: 'Count Me In Group',
    location: 'Smyrna, GA',
    available: true,
    tags: ['Mentorship', 'Youth', 'Leadership'],
  },
]

export const needs: Need[] = [
  {
    id: 'need-1',
    title: 'Volunteers for Family Food Drive',
    description: 'Need 10-15 volunteers this Saturday from 9am-1pm to help with our community food drive.',
    church: 'First Baptist Church Power Springs',
    location: 'Powder Springs, GA',
    tags: ['Volunteers', 'Outreach', 'Urgent'],
    urgent: true,
    details: ['Temporary housing', 'Clothing', 'Food support'],
  },
  {
    id: 'need-2',
    title: 'Hygiene Items Needed',
    description: 'Collecting hygiene products for local families in need. Items needed by May 25.',
    church: 'New Hope Community Church',
    location: 'Austell, GA',
    tags: ['Essentials', 'Donations', 'Urgent'],
    urgent: true,
    details: ['Hygiene products', 'Donations', 'Community Support'],
  },
  {
    id: 'need-3',
    title: 'Backpacks for Students',
    description: 'We need 30 backpacks for our back to school event on July 20.',
    church: 'Bridge of Faith Church',
    location: 'Marietta, GA',
    tags: ['Students', 'School Support', 'Urgent'],
    urgent: true,
    details: ['Students', 'School Support', 'Donations'],
  },
]

export function getResourcesByType(type: string) {
  return resources.filter((resource) => resource.type === type)
}

export function getUrgentNeeds() {
  return needs.filter((need) => need.urgent)
}

export function getNeedsByTag(tag: string) {
  return needs.filter((need) => need.tags.includes(tag))
}
