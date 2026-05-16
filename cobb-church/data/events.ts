/** Static sample events for UI demos — not the Prisma `Event` model */
export interface StaticEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  hostedBy: string
  image: string
  type: string[]
  isFeatured?: boolean
  isPastEvent?: boolean
}

export const events: StaticEvent[] = [
  {
    id: 'event-1',
    title: 'Cobb Community Coed Basketball Tournament',
    date: 'Saturday, July 19',
    time: '2:30 PM',
    location: 'First Baptist Church, Powder Springs',
    description: 'A community-wide event bringing churches, families, and organizations together under one mission.',
    hostedBy: 'Cobb Community Network',
    image: '/images/event-gathering.jpg',
    type: ['Community', 'Sports', 'Youth'],
    isFeatured: true,
  },
  {
    id: 'event-2',
    title: 'Community Food Distribution',
    date: 'Saturday, May 24',
    time: '10:00 AM',
    location: 'Vision for Souls Church, Austell',
    description: 'Join us in serving families in need through our community food distribution initiative.',
    hostedBy: 'Vision for Souls Church',
    image: '/images/resource-sharing.jpg',
    type: ['Outreach', 'Community', 'Service'],
  },
  {
    id: 'event-3',
    title: 'Cobb County Wide Prayer Gathering',
    date: 'Saturday, June 7',
    time: '7:00 PM',
    location: 'New Hope Community Church, Kennesaw',
    description: 'A unified prayer gathering bringing pastors and church members together.',
    hostedBy: 'New Hope Community Church',
    image: '/images/community-worship.jpg',
    type: ['Prayer', 'Worship', 'Unity'],
  },
  {
    id: 'event-4',
    title: 'Community Clean-Up Day',
    date: 'Saturday, June 14',
    time: '8:00 AM',
    location: 'Various parks in Cobb County',
    description: 'Serve our community by helping with beautification and clean-up efforts.',
    hostedBy: 'Cobb Community Network',
    image: '/images/community-service.jpg',
    type: ['Serve', 'Outreach', 'Community'],
  },
  {
    id: 'event-5',
    title: 'Fishing Rodeo - Sweetwater State Park',
    date: 'Friday, May 16',
    time: '9:00 AM',
    location: 'Sweetwater State Park, Lithia Springs, GA',
    description: 'A fun family fishing event for all ages hosted by Count Me In Group.',
    hostedBy: 'Count Me In Group',
    image: '/images/event-gathering.jpg',
    type: ['Youth', 'Outreach', 'Family'],
    isPastEvent: true,
  },
  {
    id: 'event-6',
    title: 'Easter Outreach Initiative',
    date: 'Sunday, April 20',
    time: 'All day',
    location: 'Multiple churches across Cobb County',
    description: 'Multi-church Easter outreach and celebration event.',
    hostedBy: 'Cobb Community Churches',
    image: '/images/event-gathering.jpg',
    type: ['Outreach', 'Prayer', 'Worship'],
    isPastEvent: true,
  },
  {
    id: 'event-7',
    title: 'Unity Worship Night',
    date: 'Friday, March 28',
    time: '7:00 PM',
    location: 'Multiple churches',
    image: '/images/community-worship.jpg',
    description: 'A night of worship bringing churches together in unity.',
    hostedBy: 'Cobb Community Network',
    type: ['Worship', 'Unity', 'Prayer'],
    isPastEvent: true,
  },
]

export function getUpcomingEvents() {
  return events.filter((event: StaticEvent) => !event.isPastEvent)
}

export function getPastEvents() {
  return events.filter((event) => event.isPastEvent)
}

export function getFeaturedEvents() {
  return events.filter((event) => event.isFeatured)
}

export function getEventsByType(type: string) {
  return events.filter((event) => event.type.includes(type))
}
