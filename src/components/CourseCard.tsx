import { Star, Users, Clock, User } from 'lucide-react';
import { Course } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  variant?: 'default' | 'compact' | 'progress';
}

export default function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  if (variant === 'progress') {
    return (
      <Link to={`/course/${course.id}`}>
        <Card className="overflow-hidden border-border bg-card hover:bg-muted/50 transition-all duration-300 group">
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-foreground line-clamp-1 mb-1">{course.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{course.instructor}</p>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-1.5 bg-muted" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden border-border bg-card hover:bg-muted/50 transition-all duration-300 group h-full flex flex-col shadow-xl shadow-slate-200">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <Badge className="absolute top-3 right-3 bg-academy-blue/80 backdrop-blur-md text-white border-none shadow-sm">
            {course.category}
          </Badge>
        </div>
        <CardContent className="p-4 flex-1">
          <div className="flex items-center gap-1 text-guide-gold mb-2">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">{course.rating}</span>
            <span className="text-[10px] text-muted-foreground font-normal">({course.students.toLocaleString()})</span>
          </div>
          <h3 className="font-bold text-foreground line-clamp-2 mb-2 leading-tight group-hover:text-academy-blue transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full bg-guide-gold/20 flex items-center justify-center">
              <User className="w-3 h-3 text-guide-gold" />
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="text-[10px] font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span className="text-[10px] font-medium">All levels</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t border-border mt-auto">
          <div className="flex items-center justify-between w-full pt-3">
            <span className="text-xs font-bold text-academy-blue">Free Course</span>
            <button className="text-xs font-bold text-muted-foreground group-hover:text-academy-blue transition-colors">View Details</button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
