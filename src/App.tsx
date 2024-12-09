import { useState } from 'react';
import { Rocket } from 'lucide-react';
import { startups as initialStartups } from '@/data/startups';
import { StartupList } from '@/components/StartupList';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SearchBar } from '@/components/SearchBar';
import { RecentStartups } from '@/components/RecentStartups';
import { useUpvotes } from '@/hooks/useUpvotes';
import { Startup } from '@/types/startup';
import { motion } from 'framer-motion';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [startups, setStartups] = useState<Startup[]>(() => 
    [...initialStartups].sort((a, b) => b.upvotes - a.upvotes)
  );
  const { hasUpvoted, toggleUpvote } = useUpvotes();

  const handleUpvote = (startupId: string) => {
    if (!hasUpvoted(startupId)) {
      setStartups(prevStartups =>
        [...prevStartups]
          .map(s =>
            s.id === startupId
              ? { ...s, upvotes: s.upvotes + 1 }
              : s
          )
          .sort((a, b) => b.upvotes - a.upvotes)
      );
      toggleUpvote(startupId);
    }
  };

  const shouldShowStartups = selectedCategory !== null || searchQuery.trim() !== '';

  const filteredStartups = shouldShowStartups
    ? startups.filter(s => {
        const matchesCategory = !selectedCategory || s.category === selectedCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = !searchQuery || 
          s.name.toLowerCase().includes(searchLower) ||
          s.description.toLowerCase().includes(searchLower) ||
          s.tags.some(tag => tag.toLowerCase().includes(searchLower));
        return matchesCategory && matchesSearch;
      })
    : [];

  const recentStartups = !shouldShowStartups
    ? startups.slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Rocket className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">StartupDirectory</h1>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">
                Discover Amazing Startups
              </h2>
              <p className="text-xl text-muted-foreground">
                Find the perfect tools and services for your business needs
              </p>
            </div>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </motion.div>

          {!shouldShowStartups && (
            <RecentStartups
              startups={recentStartups}
              onUpvote={handleUpvote}
              hasUpvoted={hasUpvoted}
            />
          )}

          {shouldShowStartups && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <StartupList
                startups={filteredStartups}
                selectedCategory={selectedCategory}
                onUpvote={handleUpvote}
                hasUpvoted={hasUpvoted}
              />
            </motion.div>
          )}

          {shouldShowStartups && filteredStartups.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No startups found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;