import { Startup } from '@/types/startup';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ExternalLink, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
        <CardHeader className="flex flex-row items-center gap-4 p-6">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden">
            <img
              src={startup.logo}
              alt={`${startup.name} logo`}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <h3 className="text-xl font-semibold truncate">{startup.name}</h3>
              </div>
              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground line-clamp-2">{startup.description}</p>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {startup.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-primary/5">
                MRR: {formatCurrency(startup.mrr)}
              </Badge>
              {startup.category === 'sales' && startup.askingPrice && (
                <Badge variant="outline" className="bg-secondary/5">
                  Asking Price: {formatCurrency(startup.askingPrice)}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}