export type LessonType = 'scratch' | 'code-org' | 'capstone';

export interface Activity {
  id: string;
  title: string;
  type: 'learn' | 'practice' | 'challenge';
  description: string;
  requirements?: string[];
}

export interface Lesson {
  day: number;
  title: string;
  subtitle: string;
  type: LessonType;
  description: string;
  skills: string[];
  objectives: string[];
  activities: Activity[];
  reflection: string;
}
