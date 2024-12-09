import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface UpvoteButtonProps {
  upvotes: number;
  onUpvote: () => void;
  hasUpvoted: boolean;
}

export function UpvoteButton({ upvotes, onUpvote, hasUpvoted }: UpvoteButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onUpvote}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        hasUpvoted ? 'border-primary bg-primary/10 text-primary' : 'hover:border-primary/50'
      )}
      disabled={hasUpvoted}
    >
      <motion.div
        className="flex items-center gap-2"
        whileTap={{ scale: 0.95 }}
      >
        <ThumbsUp
          className={cn(
            'h-4 w-4 transition-all duration-300',
            hasUpvoted && 'fill-primary text-primary'
          )}
        />
        <motion.span
          key={upvotes}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-medium"
        >
          {upvotes}
        </motion.span>
      </motion.div>
      {!hasUpvoted && (
        <motion.div
          className="absolute inset-0 bg-primary/5"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Button>
  );
}