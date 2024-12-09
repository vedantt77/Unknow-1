import { useState, useEffect } from 'react';

export function useUpvotes() {
  const [upvotedStartups, setUpvotedStartups] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('upvotedStartups');
    return new Set(saved ? JSON.parse(saved) : []);
  });

  useEffect(() => {
    localStorage.setItem('upvotedStartups', JSON.stringify([...upvotedStartups]));
  }, [upvotedStartups]);

  const hasUpvoted = (startupId: string) => upvotedStartups.has(startupId);

  const toggleUpvote = (startupId: string) => {
    setUpvotedStartups((prev) => {
      const next = new Set(prev);
      if (next.has(startupId)) {
        next.delete(startupId);
      } else {
        next.add(startupId);
      }
      return next;
    });
  };

  return { hasUpvoted, toggleUpvote };
}