import { Startup } from '@/types/startup';
import { StartupCard } from '@/components/StartupCard';

interface StartupListProps {
  startups: Startup[];
  selectedCategory: string | null;
  onUpvote: (id: string) => void;
  hasUpvoted: (id: string) => boolean;
}

export function StartupList({ 
  startups, 
  selectedCategory,
  onUpvote,
  hasUpvoted
}: StartupListProps) {
  const filteredStartups = selectedCategory
    ? startups.filter((startup) => startup.category === selectedCategory)
    : startups;

  return (
    <div className="space-y-4">
      {filteredStartups.map((startup) => (
        <StartupCard 
          key={startup.id} 
          startup={startup}
          onUpvote={onUpvote}
          hasUpvoted={hasUpvoted}
        />
      ))}
    </div>
  );
}