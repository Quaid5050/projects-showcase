export interface Church {
  id: string
  name: string
  pastor: string
  location: string
  city: string
  state: string
  image: string
  website?: string
  phone?: string
  email?: string
  ministries: string[]
  resources?: string[]
  needs?: string[]
  description: string
}

export const churches: Church[] = [
  {
    id: '1',
    name: 'First Baptist Church of Powder Springs',
    pastor: 'Pastor John Smith',
    location: 'Powder Springs, GA',
    city: 'Powder Springs',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1503894350471-9c149975b46d?w=500&h=400&fit=crop',
    website: 'www.fbcpowdersprings.org',
    phone: '(770) 555-0101',
    email: 'info@fbcpowdersprings.org',
    ministries: ['Worship', 'Youth', 'Outreach'],
    resources: ['Event Space Available', 'Volunteer Team'],
    needs: ['Volunteers for Family Food Drive'],
    description: 'A vibrant community church dedicated to connecting churches and serving our community.',
  },
  {
    id: '2',
    name: 'Vision for Souls Church',
    pastor: 'Pastor Ricky Mims',
    location: 'Austell, GA',
    city: 'Austell',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
    website: 'www.visionforssouls.org',
    phone: '(770) 555-0102',
    email: 'info@visionforsouls.org',
    ministries: ['Discipleship', 'Community', 'Prayer'],
    resources: ['Training & Workshops'],
    needs: [],
    description: 'Focused on building meaningful relationships and strengthening church leadership.',
  },
  {
    id: '3',
    name: 'Count Me In Group',
    pastor: 'Pastor Ricky Mims',
    location: 'Marietta, GA',
    city: 'Marietta',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop',
    website: 'www.cmig.org',
    phone: '(770) 555-0103',
    email: 'info@cmig.org',
    ministries: ['Leadership', 'Mentorship', 'Unity'],
    resources: ['Youth Mentorship Program'],
    needs: [],
    description: 'Dedicated to youth mentorship and leadership development across our county.',
  },
  {
    id: '4',
    name: 'New Hope Community Church',
    pastor: 'Pastor Michael Thompson',
    location: 'Kennesaw, GA',
    city: 'Kennesaw',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500&h=400&fit=crop',
    website: 'www.newhopecommunity.org',
    phone: '(770) 555-0104',
    email: 'info@newhopecommunity.org',
    ministries: ['Worship', 'Families', 'Serve'],
    resources: [],
    needs: ['Hygiene Items for Families in Need'],
    description: 'Bringing churches and families together to serve and make a difference.',
  },
  {
    id: '5',
    name: 'Bridge of Faith Church',
    pastor: 'Pastor David Williams',
    location: 'Smyrna, GA',
    city: 'Smyrna',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1479142506955-5fef2eae5198?w=500&h=400&fit=crop',
    website: 'www.bridgeoffaith.org',
    phone: '(770) 555-0105',
    email: 'info@bridgeoffaith.org',
    ministries: ['Faith', 'Community', 'Outreach'],
    resources: [],
    needs: ['Backpacks for Students'],
    description: 'Building faith-filled bridges between churches for community transformation.',
  },
  {
    id: '6',
    name: 'Living Word Church',
    pastor: 'Pastor James Walker',
    location: 'Acworth, GA',
    city: 'Acworth',
    state: 'GA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop',
    website: 'www.livingwordchurch.org',
    phone: '(770) 555-0106',
    email: 'info@livingwordchurch.org',
    ministries: ['Teaching', 'Youth', 'Missions'],
    resources: [],
    needs: [],
    description: 'Proclaiming God\'s Word and making an impact through coordinated outreach.',
  },
]
