import { Startup } from '@/types/startup';

export const startups: Startup[] = [
  {
    id: '1',
    name: 'MarketMaster',
    description: 'AI-powered marketing automation platform for small businesses',
    category: 'marketing',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=150&fit=crop',
    website: 'https://marketmaster.example.com',
    tags: ['Marketing Automation', 'AI', 'Analytics'],
    mrr: 25000,
    createdAt: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'SalesForce Pro',
    description: 'Complete sales management and CRM solution',
    category: 'sales',
    askingPrice: 2500000,
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=150&fit=crop',
    website: 'https://salesforcepro.example.com',
    tags: ['CRM', 'Sales Management', 'Analytics'],
    mrr: 75000,
    createdAt: '2024-03-10T15:30:00Z'
  },
  {
    id: '3',
    name: 'BusinessFlow',
    description: 'Streamline your business operations with our integrated solution',
    category: 'business',
    logo: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=150&h=150&fit=crop',
    website: 'https://businessflow.example.com',
    tags: ['Operations', 'Workflow', 'Management'],
    mrr: 50000,
    createdAt: '2024-03-01T08:45:00Z'
  },
  {
    id: '4',
    name: 'AnalyticsPro',
    description: 'Advanced analytics and reporting for modern businesses',
    category: 'business',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop',
    website: 'https://analyticspro.example.com',
    tags: ['Analytics', 'Business Intelligence', 'Reporting'],
    mrr: 100000,
    createdAt: '2024-02-28T14:20:00Z'
  }
];