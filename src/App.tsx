import { useState } from 'react';
import { Rocket } from 'lucide-react';
import { startups } from '@/data/startups';
import { StartupGrid } from '@/components/StartupGrid';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SearchBar } from '@/components/SearchBar';
import { motion } from 'framer-motion';
import { filterStartups } from '@/lib/filters';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStartups = filterStartups(startups, selectedCategory, searchQuery);

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
        <div className="max-w-7xl mx-auto space-y-12">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <StartupGrid
              startups={filteredStartups}
              selectedCategory={selectedCategory}
            />
          </motion.div>

          {filteredStartups.length === 0 && (
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