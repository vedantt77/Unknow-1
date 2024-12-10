import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Startup } from '@/types/startup';
import { StartupCard } from './StartupCard';
import { differenceInDays } from 'date-fns';

interface RecentStartupsProps {
  startups: Startup[];
  onUpvote: (id: string) => void;
  hasUpvoted: (id: string) => boolean;
}

export function RecentStartups({ startups, onUpvote, hasUpvoted }: RecentStartupsProps) {
  const recentStartups = startups
    .filter(startup => {
      if (!startup.createdAt) return false;
      const daysSinceCreation = differenceInDays(
        new Date(),
        new Date(startup.createdAt)
      );
      return daysSinceCreation <= 7;
    })
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  if (recentStartups.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">Recently Added</h2>
        </div>
        <p className="text-muted-foreground">
          List of startups which were added in last 7 days
        </p>
      </motion.div>
      
      <div className="space-y-4">
        {recentStartups.map(startup => (
          <StartupCard
            key={startup.id}
            startup={startup}
            onUpvote={onUpvote}
            hasUpvoted={hasUpvoted}
            showCreatedAt={true}
          />
        ))}
      </div>
    </section>
  );
}