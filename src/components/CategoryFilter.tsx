import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BarChart3, LineChart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories = [
    {
      id: 'marketing',
      label: 'Marketing',
      icon: LineChart,
      description: 'Tools for growth and audience engagement',
    },
    {
      id: 'business',
      label: 'Business',
      icon: BarChart3,
      description: 'Solutions for operations and management',
    },
    {
      id: 'sales',
      label: 'Sales',
      icon: ShoppingCart,
      description: 'CRM and revenue optimization tools',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map(({ id, label, icon: Icon, description }) => (
        <motion.div
          key={id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => onCategoryChange(selectedCategory === id ? null : id)}
            className={cn(
              'w-full h-auto flex-col gap-2 p-4',
              selectedCategory === id && 'border-primary bg-primary/5 text-primary'
            )}
          >
            <Icon className={cn(
              'h-6 w-6 mb-2',
              selectedCategory === id ? 'text-primary' : 'text-muted-foreground'
            )} />
            <div className="space-y-1">
              <h3 className="font-semibold">{label}</h3>
              <p className="text-xs text-muted-foreground font-normal">
                {description}
              </p>
            </div>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}