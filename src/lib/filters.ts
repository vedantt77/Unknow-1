import { Startup } from '@/types/startup';

export function filterStartups(
  startups: Startup[],
  selectedCategory: string | null,
  searchQuery: string
): Startup[] {
  return startups.filter(startup => {
    const matchesCategory = !selectedCategory || startup.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      startup.name.toLowerCase().includes(searchLower) ||
      startup.description.toLowerCase().includes(searchLower) ||
      startup.tags.some(tag => tag.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });
}