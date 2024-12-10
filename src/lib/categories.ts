import { BarChart3, LineChart, ShoppingCart } from 'lucide-react';

export const categories = [
  {
    id: 'marketing',
    label: 'Marketing',
    icon: LineChart,
    description: 'Tools for growth and audience engagement',
  },
  {
    id: 'business',
    label: 'Business',
    icon: BarChart3,
    description: 'Solutions for operations and management',
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: ShoppingCart,
    description: 'CRM and revenue optimization tools',
  },
] as const;

export type CategoryId = typeof categories[number]['id'];