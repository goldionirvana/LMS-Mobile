import { CATEGORIES, COURSES, LEARNING_STATS, KMS_DATA } from '@/lib/mockData';
import CourseCard from '@/components/CourseCard';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, BookOpen, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  const myCourses = COURSES.filter(c => c.progress !== undefined);

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      {/* KMS Update Slider - Editorial Style */}
      <section className="py-8">
        <div className="px-6 flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-display text-foreground">KMS Updates</h2>
            <p className="text-xs font-medium text-muted-foreground">Latest knowledge from the field</p>
          </div>
          <button 
            onClick={() => navigate('/kms')} 
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-academy-blue hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap px-6">
          <div className="flex gap-5 pb-6">
            {KMS_DATA.map((item) => (
              <Card 
                key={item.id} 
                className="w-[280px] border-none bg-muted/50 shrink-0 cursor-pointer hover:bg-muted transition-all duration-300 group rounded-[2.5rem] overflow-hidden" 
                onClick={() => navigate('/kms')}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-academy-blue text-white border-none text-[10px] px-3 py-1 rounded-full font-bold">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-black text-display text-foreground leading-tight mb-2 group-hover:text-academy-blue transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <span>{item.author}</span>
                    <span className="w-1 h-1 bg-guide-gold rounded-full"></span>
                    <span>{item.updatedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </section>

      {/* Continue Learning - Glass Morphism Style */}
      {myCourses.length > 0 && (
        <section className="px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-display text-foreground">Continue Learning</h2>
            <button className="text-xs font-bold text-guide-gold hover:underline">See All</button>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-5 pb-6">
              {myCourses.map((course) => (
                <div key={course.id} className="w-[300px]">
                  <CourseCard course={course} variant="progress" />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </section>
      )}

      {/* Learning Summary Dashboard - Technical Style */}
      <section className="px-6 py-8">
        <div className="bg-academy-blue rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-academy-blue/30">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <LayoutDashboard className="w-5 h-5 text-guide-gold" />
                </div>
                <h2 className="text-lg font-black text-display">Learning Summary</h2>
              </div>
              <button 
                onClick={() => navigate('/learning-report')}
                className="text-[10px] font-bold text-guide-gold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                Full Report
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-3xl font-black text-mono text-guide-gold">{LEARNING_STATS.completed}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Completed</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-mono text-guide-gold">{LEARNING_STATS.inProgress}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">In Progress</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-mono text-guide-gold">{LEARNING_STATS.totalHours}h</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Time</div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-guide-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Hero Section - Minimalist */}
      <section className="px-6 py-6">
        <div className="border-2 border-academy-blue/5 rounded-[2.5rem] p-8 bg-muted/30 relative overflow-hidden">
          <h1 className="text-3xl font-black text-display text-foreground leading-tight mb-4">
            Elevate Your<br />Operational Mastery.
          </h1>
          <p className="text-muted-foreground text-sm mb-8 font-medium max-w-[240px] leading-relaxed">
            Access world-class training modules designed for Gacoan Academy professionals.
          </p>
          <button className="bg-academy-blue text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-xl shadow-academy-blue/20 active:scale-95 transition-all hover:bg-academy-blue/90">
            Browse Catalog
          </button>
        </div>
      </section>

      {/* Categories - Pill Style */}
      <section className="py-6">
        <ScrollArea className="w-full whitespace-nowrap px-6">
          <div className="flex gap-3 pb-4">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`px-6 py-2.5 rounded-2xl cursor-pointer transition-all duration-300 border-border text-xs font-bold ${
                  activeCategory === cat 
                    ? 'bg-academy-blue text-white border-academy-blue shadow-lg shadow-academy-blue/20' 
                    : 'bg-white text-muted-foreground hover:bg-muted hover:text-foreground shadow-sm'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </section>

      {/* Popular Courses - Grid */}
      <section className="px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-display text-foreground">Popular Courses</h2>
          <button className="text-xs font-bold text-guide-gold hover:underline">See All</button>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
