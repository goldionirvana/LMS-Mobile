import { CATEGORIES, COURSES, LEARNING_STATS, KMS_DATA } from '@/lib/mockData';
import CourseCard from '@/components/CourseCard';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, BookOpen, ChevronRight, LayoutDashboard, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const navigate = useNavigate();

  const filteredCourses = activeCategory === 'Semua' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  const myCourses = COURSES.filter(c => c.progress !== undefined);

  return (
    <div className="pb-32 bg-mesh min-h-screen text-foreground">
      {/* Welcome & Identity Section */}
      <section className="px-6 pt-10 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 bg-guide-gold"></div>
              <p className="text-[10px] font-black text-guide-gold uppercase tracking-[0.3em]">Guiding your learning journey</p>
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-black text-display text-academy-blue leading-tight"
            >
              Selamat Datang, Goldio <span className="animate-pulse">👋</span>
            </motion.h1>
            <p className="text-xs font-bold text-muted-foreground/60 max-w-[200px]">
              Siap tingkatkan keahlian operasional Anda hari ini?
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-[2rem] bg-academy-blue flex items-center justify-center shadow-2xl shadow-academy-blue/20 overflow-hidden border-2 border-white"
          >
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-academy-blue text-white text-xs font-black">GA</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[180px]">
          <div className="col-span-3 row-span-2 bg-academy-blue rounded-[2.5rem] p-6 text-white relative overflow-hidden group shadow-xl shadow-academy-blue/20">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xl">
                <LayoutDashboard className="w-5 h-5 text-guide-gold" />
              </div>
              <div>
                <div className="text-4xl font-black text-mono text-guide-gold mb-1">{LEARNING_STATS.totalHours}</div>
                <div className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Total Jam Belajar</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <BookOpen className="w-20 h-20" />
            </div>
          </div>
          <div className="col-span-3 row-span-1 bg-white rounded-[2.5rem] p-5 border border-slate-100 flex items-center justify-between shadow-sm group hover:shadow-md transition-all">
            <div>
              <div className="text-2xl font-black text-mono text-academy-blue mb-0.5">{LEARNING_STATS.completed}</div>
              <div className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Kursus Selesai</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:rotate-12 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="col-span-3 row-span-1 bg-white rounded-[2.5rem] p-5 border border-slate-100 flex items-center justify-between shadow-sm group hover:shadow-md transition-all">
            <div>
              <div className="text-2xl font-black text-mono text-academy-blue mb-0.5">{LEARNING_STATS.inProgress}</div>
              <div className="text-[8px] font-black text-muted-foreground uppercase tracking-[0.2em]">Sedang Dipelajari</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:rotate-12 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Center Slider - Editorial */}
      <section className="py-10">
        <div className="px-6 flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-display text-academy-blue lowercase tracking-tighter">Knowledge Center</h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Berbagi Wawasan & Praktik Terbaik</p>
          </div>
          <button 
            onClick={() => navigate('/kms')} 
            className="flex items-center gap-2 text-[10px] font-black text-guide-gold uppercase tracking-[0.2em] border-b border-guide-gold/30 pb-0.5"
          >
            Lihat Jurnal <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap overflow-visible">
          <div className="flex gap-6 px-6 pb-16 pt-4">
            {KMS_DATA.map((item) => (
              <div 
                key={item.id} 
                className="w-[280px] group cursor-pointer"
                onClick={() => navigate('/kms')}
              >
                <div className="relative min-h-[160px] bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(0,31,75,0.1)] group-hover:-translate-y-2 transition-all duration-500 whitespace-normal flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black text-guide-gold uppercase tracking-[0.2em]">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">{item.updatedAt}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-display text-academy-blue leading-tight group-hover:text-guide-gold transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-black text-guide-gold uppercase tracking-[0.2em] pt-2">
                       Baca Selengkapnya <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </section>

      {/* Recommended Courses - Visual Grid */}
      <section className="px-6 py-6 transition-all">
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-display text-academy-blue lowercase tracking-tighter">Rekomendasi Belajar</h2>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Dipilih Khusus Untukmu</p>
          </div>
        </div>
        
        {/* Course Filter Pills */}
        <ScrollArea className="w-full whitespace-nowrap mb-10">
          <div className="flex gap-3 pb-2">
            {['Semua', ...CATEGORIES.filter(c => c !== 'Semua')].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border",
                  activeCategory === cat 
                    ? "bg-academy-blue text-white shadow-xl shadow-academy-blue/20 border-academy-blue scale-105" 
                    : "bg-white text-muted-foreground border-slate-100/50 hover:border-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>

        <div className="grid grid-cols-1 gap-10">
          {filteredCourses.slice(0, 4).map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
        
        <button 
          onClick={() => navigate('/courses')}
          className="w-full mt-12 py-5 rounded-[2rem] border-2 border-dashed border-slate-200 text-muted-foreground font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-50 hover:border-academy-blue/20 transition-all flex items-center justify-center gap-3 group"
        >
          Lihat Katalog Lengkap <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* Floating Action Hint */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-28 left-0 right-0 flex justify-center pointer-events-none"
      >
        <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl shadow-black/5 pointer-events-auto border border-white/50 translate-z-0">
          <div className="w-1.5 h-1.5 bg-guide-gold rounded-full animate-pulse"></div>
          <span className="text-[9px] font-black text-academy-blue uppercase tracking-widest">Modul pelatihan baru telah tersedia</span>
        </div>
      </motion.div>
    </div>
  );
}
