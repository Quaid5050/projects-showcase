export interface StaticPastorStory {
  id: string
  name: string
  role: string
  church: string
  image: string
  videoUrl?: string
  story: string
  quote: string
  focus: string[]
}

export const pastorStories: StaticPastorStory[] = [
  {
    id: 'pastor-1',
    name: 'Pastor Marcus D.',
    role: 'Lead Pastor',
    church: 'New Hope Community Church',
    image: '/images/pastoral-leadership.jpg',
    story: 'Pastor Marcus shares how unity in the network has transformed his church\'s approach to community ministry.',
    quote: 'Power of Partnership',
    focus: ['Partnership', 'Growth', 'Community Impact'],
  },
  {
    id: 'pastor-2',
    name: 'Pastor Marie S.',
    role: 'Executive Pastor',
    church: 'Vision for Souls Church',
    image: '/images/pastoral-leadership.jpg',
    story: 'Marie discusses the importance of collaboration and how the network has strengthened her church community.',
    quote: 'Stronger Together',
    focus: ['Collaboration', 'Support', 'Leadership'],
  },
  {
    id: 'pastor-3',
    name: 'Pastor James L.',
    role: 'Lead Pastor',
    church: 'First Baptist Church',
    image: '/images/pastoral-leadership.jpg',
    story: 'James shares his journey of impacting the community through unity and coordinated outreach efforts.',
    quote: 'Impacting Our Community',
    focus: ['Impact', 'Outreach', 'Community'],
  },
]

export function getStoryById(id: string) {
  return pastorStories.find((story) => story.id === id)
}
