export interface Startup {
  id: string;
  name: string;
  description: string;
  category: 'marketing' | 'business' | 'sales';
  logo: string;
  price?: number;
  website: string;
  tags: string[];
  upvotes: number;
  createdAt: string; // ISO date string
}