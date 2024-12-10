import { CategoryId } from '@/lib/categories';

export interface Startup {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  logo: string;
  askingPrice?: number;
  website: string;
  tags: string[];
  mrr: number;
  createdAt?: string;
}