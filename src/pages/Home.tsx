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
      {/* KMS Update Slider */}
      <section className="py-6">
        <div className="px-4 flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-foreground">KMS Updates</h2>
          <button onClick={() => navigate('/kms')} className="text-xs font-bold text-guide-gold">View All</button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap px-4">
          <div className="flex gap-4 pb-4">
            {KMS_DATA.map((item) => (
              <Card key={item.id} className="w-[240px] border-border bg-muted shrink-0 cursor-pointer hover:bg-muted/80 transition-colors" onClick={() => navigate('/kms')}>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-guide-gold/10 text-guide-gold border-none text-[8px] uppercase">{item.category}</Badge>
                  <h3 className="text-sm font-bold text-foreground truncate mb-1">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground mb-3">Updated {item.updatedAt}</p>
                  <button className="text-[10px] font-bold text-guide-gold flex items-center gap-1">
                    Read Article <ChevronRight className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </section>

      {/* Continue Learning */}
      {myCourses.length > 0 && (
        <section className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-foreground">Continue Learning</h2>
            <button className="text-xs font-bold text-guide-gold">See All</button>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {myCourses.map((course) => (
                <div key={course.id} className="w-[280px]">
                  <CourseCard course={course} variant="progress" />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </section>
      )}

      {/* Learning Summary Dashboard */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-guide-gold" />
            <h2 className="text-lg font-black text-foreground">Learning Summary</h2>
          </div>
          <button 
            onClick={() => navigate('/learning-report')}
            className="text-xs font-bold text-guide-gold flex items-center gap-1"
          >
            View Details <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Card className="border-none bg-muted">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-black text-academy-blue">{LEARNING_STATS.completed}</div>
              <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Done</div>
            </CardContent>
          </Card>
          <Card className="border-none bg-muted">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-black text-academy-blue">{LEARNING_STATS.inProgress}</div>
              <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Progress</div>
            </CardContent>
          </Card>
          <Card className="border-none bg-muted">
            <CardContent className="p-3 text-center">
              <div className="text-xl font-black text-academy-blue">{LEARNING_STATS.totalHours}h</div>
              <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Hours</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="bg-academy-blue rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-academy-blue/20">
          <div className="relative z-10">
            <h1 className="text-2xl font-black mb-2 leading-tight">Master New Skills,<br />Anytime, Anywhere.</h1>
            <p className="text-white/80 text-sm mb-6 font-medium">Join over 1M+ students learning from the best instructors worldwide.</p>
            <button className="bg-guide-gold text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-guide-gold/20 active:scale-95 transition-transform">
              Explore Courses
            </button>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-guide-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4">
        <ScrollArea className="w-full whitespace-nowrap px-4">
          <div className="flex gap-2 pb-4">
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
      </section>

      {/* Popular Courses */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-foreground">Popular Courses</h2>
          <button className="text-xs font-bold text-guide-gold">See All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
