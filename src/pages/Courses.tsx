import { useState } from 'react';
import { COURSES, CATEGORIES } from '@/lib/mockData';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      {/* Header */}
      <div className="px-6 py-8 bg-academy-blue text-white rounded-b-[40px] mb-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-guide-gold" />
          </div>
          <h1 className="text-2xl font-black">Course Catalog</h1>
        </div>
        <p className="text-white/60 text-sm mb-6 font-medium">
          Explore our comprehensive curriculum designed for operational excellence.
        </p>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <Input 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-guide-gold h-12 rounded-2xl"
          />
        </div>
      </div>

      <div className="px-6">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-guide-gold" />
            <h2 className="text-sm font-black text-foreground uppercase tracking-widest">Categories</h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2 pb-2">
              {CATEGORIES.map((cat) => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? 'default' : 'outline'}
                  className={`px-5 py-2 rounded-full cursor-pointer transition-all duration-300 border-border ${
                    activeCategory === cat 
                      ? 'bg-guide-gold text-white border-guide-gold shadow-md shadow-guide-gold/10' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-6">
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
              <p className="text-muted-foreground font-medium">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
