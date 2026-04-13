export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  price: number;
  rating: number;
  students: number;
  duration: string;
  category: string;
  description: string;
  progress?: number;
}

export type LessonType = 'video' | 'reading' | 'quiz';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  type: LessonType;
  content?: string;
  quizId?: string;
  videoUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface KMSEntry {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  updatedAt: string;
}
