import { Star, Users, Clock, User, ChevronRight } from 'lucide-react';
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
        <Card className="overflow-hidden border-none bg-muted/50 hover:bg-muted transition-all duration-500 group rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-lg font-black text-display text-foreground line-clamp-1 mb-1 group-hover:text-academy-blue transition-colors">{course.title}</h3>
            <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{course.instructor}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                <span>Progress</span>
                <span className="text-academy-blue">{course.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-guide-gold"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden border-none bg-white hover:bg-slate-50 transition-all duration-500 group h-full flex flex-col rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-academy-blue border-none shadow-lg font-bold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest">
            {course.category}
          </Badge>
        </div>
        <CardContent className="p-6 flex-1">
          <div className="flex items-center gap-2 text-guide-gold mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-slate-200'}`} />
              ))}
            </div>
            <span className="text-xs font-black text-foreground">{course.rating}</span>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">({course.students.toLocaleString()})</span>
          </div>
          <h3 className="text-xl font-black text-display text-foreground line-clamp-2 mb-3 leading-tight group-hover:text-academy-blue transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground">{course.instructor}</span>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center">
                <Users className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">All levels</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <div className="w-full h-px bg-border mb-6"></div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-black text-academy-blue uppercase tracking-widest">Free Access</span>
            <div className="w-10 h-10 rounded-full bg-academy-blue text-white flex items-center justify-center shadow-lg shadow-academy-blue/20 group-hover:scale-110 transition-transform">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
