import { Startup } from '@/types/startup';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ExternalLink, Tag, Bookmark, Clock } from 'lucide-react';
import { UpvoteButton } from './UpvoteButton';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface StartupCardProps {
  startup: Startup;
  onUpvote: (id: string) => void;
  hasUpvoted: (id: string) => boolean;
  showCreatedAt?: boolean;
}

export function StartupCard({ startup, onUpvote, hasUpvoted, showCreatedAt = false }: StartupCardProps) {
  const timeAgo = formatDistanceToNow(new Date(startup.createdAt), { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20">
        <CardHeader className="flex flex-row items-center gap-6 p-6">
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
                <UpvoteButton
                  upvotes={startup.upvotes}
                  onUpvote={() => onUpvote(startup.id)}
                  hasUpvoted={hasUpvoted(startup.id)}
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground line-clamp-2">{startup.description}</p>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="flex flex-wrap items-center gap-4">
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
            <div className="flex items-center gap-4 ml-auto">
              {showCreatedAt && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{timeAgo}</span>
                </div>
              )}
              {startup.price && (
                <Badge variant="outline">
                  Starting from ${startup.price}/month
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}