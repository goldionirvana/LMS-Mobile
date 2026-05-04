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
        <Card className="overflow-hidden border-none bg-white hover:bg-slate-50/80 transition-all duration-500 group rounded-[2.5rem] shadow-[0_4px_20px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,31,75,0.1)]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20 text-[8px] font-black uppercase tracking-widest px-3 py-1">
                Aktif
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-base font-black text-display text-academy-blue line-clamp-1 mb-1.5 group-hover:translate-x-1 transition-transform">{course.title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{course.instructor}</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] items-center">
                <span className="font-bold text-muted-foreground uppercase tracking-[0.2em]">Progres Modul</span>
                <span className="text-mono font-black text-guide-gold bg-guide-gold/5 px-2 py-0.5 rounded-full">{course.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-guide-gold rounded-full shadow-[0_0_10px_rgba(197,160,63,0.3)]"
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
      <Card className="overflow-hidden border-none bg-white hover:bg-slate-50 transition-all duration-700 group h-full flex flex-col rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(0,31,75,0.12)]">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-academy-blue/20 to-transparent"></div>
          <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-academy-blue border-none shadow-xl font-black text-[9px] px-4 py-2 rounded-2xl uppercase tracking-[0.2em]">
            {course.category}
          </Badge>
        </div>
        <CardContent className="p-7 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'fill-guide-gold text-guide-gold' : 'text-slate-200'}`} />
              ))}
            </div>
            <span className="text-[10px] font-black text-academy-blue bg-academy-blue/5 px-2 py-0.5 rounded-lg text-mono">{course.rating}</span>
            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest ml-auto">{course.students.toLocaleString()} peserta</span>
          </div>
          
          <h3 className="text-xl font-black text-display text-academy-blue line-clamp-2 mb-4 leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm bg-muted flex items-center justify-center overflow-hidden">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground/80">{course.instructor}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
              <Clock className="w-4 h-4 text-guide-gold" />
              <span className="text-[10px] font-black uppercase tracking-widest text-academy-blue/70 leading-none">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
              <Users className="w-4 h-4 text-guide-gold" />
              <span className="text-[10px] font-black uppercase tracking-widest text-academy-blue/70 leading-none">Semua level</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-7 pb-7 pt-0 mt-auto">
          <div className="flex items-center justify-between w-full p-4 bg-academy-blue rounded-3xl group-hover:scale-[1.02] transition-transform duration-500 shadow-lg shadow-academy-blue/20">
            <span className="text-xs font-black text-white uppercase tracking-[0.2em] ml-2">Mulai Belajar</span>
            <div className="w-8 h-8 rounded-full bg-white text-academy-blue flex items-center justify-center shadow-md">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
