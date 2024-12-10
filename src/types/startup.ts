export interface Startup {
  id: string;
  name: string;
  description: string;
  category: 'marketing' | 'business' | 'sales';
  logo: string;
  askingPrice?: number;
  website: string;
  tags: string[];
  mrr: number;
}