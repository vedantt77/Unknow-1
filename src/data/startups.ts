import { Startup } from '@/types/startup';
import { subDays } from 'date-fns';

// Helper to generate ISO dates for the last few days
const getRecentDate = (daysAgo: number) => 
  subDays(new Date(), daysAgo).toISOString();

export const startups: Startup[] = [
  {
    id: '1',
    name: 'MarketMaster',
    description: 'AI-powered marketing automation platform for small businesses',
    category: 'marketing',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=150&fit=crop',
    website: 'https://marketmaster.example.com',
    tags: ['Marketing Automation', 'AI', 'Analytics'],
    upvotes: 42,
    createdAt: getRecentDate(2) // Added 2 days ago
  },
  {
    id: '2',
    name: 'SalesForce Pro',
    description: 'Complete sales management and CRM solution',
    category: 'sales',
    price: 49.99,
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop',
    website: 'https://salesforcepro.example.com',
    tags: ['CRM', 'Sales Management', 'Analytics'],
    upvotes: 38,
    createdAt: getRecentDate(5) // Added 5 days ago
  },
  {
    id: '3',
    name: 'BusinessFlow',
    description: 'Streamline your business operations with our integrated solution',
    category: 'business',
    logo: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=150&h=150&fit=crop',
    website: 'https://businessflow.example.com',
    tags: ['Operations', 'Workflow', 'Management'],
    upvotes: 27,
    createdAt: getRecentDate(8) // Added 8 days ago
  },
  {
    id: '4',
    name: 'AnalyticsPro',
    description: 'Advanced analytics and reporting for modern businesses',
    category: 'business',
    price: 79.99,
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop',
    website: 'https://analyticspro.example.com',
    tags: ['Analytics', 'Business Intelligence', 'Reporting'],
    upvotes: 15,
    createdAt: getRecentDate(1) // Added yesterday
  }
];