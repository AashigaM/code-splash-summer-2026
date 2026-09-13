'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'code_splash_progress_2026';

export interface UserProgress {
  completedDays: number[];
  completedChallenges: string[];
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>({
    completedDays: [],
    completedChallenges: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to parse progress', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const completeDay = (day: number) => {
    setProgress((prev) => {
      if (prev.completedDays.includes(day)) return prev;
      const updated = { ...prev, completedDays: [...prev.completedDays, day] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isDayComplete = (day: number) => progress.completedDays.includes(day);

  return { progress, isLoaded, completeDay, isDayComplete };
}
