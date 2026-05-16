export interface CrisisNeed {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  urgencyLevel: 'urgent' | 'moderate' | 'low';
  needs: string[];
  hostedBy: string;
  image?: string;
}

export const crisisNeeds: CrisisNeed[] = [
  {
    id: '1',
    title: 'Family in Need - House Fire',
    description: 'Family displaced by house fire - family of 4 needing temporary housing',
    location: 'Powder Springs, GA',
    category: 'Emergency Housing',
    urgencyLevel: 'urgent',
    needs: ['Temporary housing', 'Clothing', 'Food support'],
    hostedBy: 'First Baptist Church',
    image: '/images/crisis-response.jpg'
  },
  {
    id: '2',
    title: 'Elderly Support Needed',
    description: 'Elderly woman without family support needs assistance with daily living',
    location: 'Marietta, GA',
    category: 'Elder Care',
    urgencyLevel: 'urgent',
    needs: ['Meals', 'Transportation', 'Wellness check-ins'],
    hostedBy: 'New Hope Community Church'
  },
  {
    id: '3',
    title: 'Flood Relief Effort',
    description: 'Multiple families affected by flooding in the community',
    location: 'Smyrna, GA',
    category: 'Disaster Relief',
    urgencyLevel: 'urgent',
    needs: ['Cleaning supplies', 'Clothing', 'Volunteers'],
    hostedBy: 'Vision for Souls Church'
  },
  {
    id: '4',
    title: 'Food Assistance Program',
    description: 'Families in need of weekly food assistance',
    location: 'Cobb County',
    category: 'Food Assistance',
    urgencyLevel: 'moderate',
    needs: ['Non-perishable food', 'Volunteers', 'Donations'],
    hostedBy: 'Count Me In Group'
  }
];
