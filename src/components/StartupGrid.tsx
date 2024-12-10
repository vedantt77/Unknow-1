import { Startup } from '@/types/startup';
import { StartupCard } from '@/components/StartupCard';

interface StartupGridProps {
  startups: Startup[];
  selectedCategory: string | null;
}

export function StartupGrid({ startups, selectedCategory }: StartupGridProps) {
  const filteredStartups = selectedCategory
    ? startups.filter((startup) => startup.category === selectedCategory)
    : startups;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredStartups.map((startup) => (
        <StartupCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
}