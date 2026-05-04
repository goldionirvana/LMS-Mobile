import { useState } from 'react';
import { COURSES, CATEGORIES } from '@/lib/mockData';
import CourseCard from '@/components/CourseCard';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      {/* Header - Premium Academic Style */}
      <div className="px-6 py-12 bg-academy-blue text-white rounded-b-[3.5rem] mb-10 shadow-2xl shadow-academy-blue/20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10">
              <BookOpen className="w-6 h-6 text-guide-gold" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-display leading-none mb-1">Katalog Kursus</h1>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Keunggulan melalui pengetahuan</p>
            </div>
          </div>
          
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <Input 
              placeholder="Cari kurikulum..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-guide-gold h-14 rounded-2xl backdrop-blur-md"
            />
          </div>
        </div>
        
        {/* Decorative mask */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-guide-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      </div>

      <div className="px-6">
        {/* Categories - Editorial Filter */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-guide-gold" />
              <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Kategori Pelatihan</h2>
            </div>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300",
                    activeCategory === cat 
                      ? "bg-academy-blue text-white shadow-xl shadow-academy-blue/20" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

        {/* Course Grid - Staggered */}
        <div className="grid grid-cols-1 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground/20" />
              </div>
              <p className="text-muted-foreground font-medium">Tidak ada kursus yang sesuai dengan kriteria Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
