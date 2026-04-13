import { useParams, useNavigate } from 'react-router-dom';
import { COURSES, COURSE_MODULES } from '@/lib/mockData';
import { ChevronLeft, Play, Clock, Star, Users, CheckCircle2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);
  const modules = COURSE_MODULES[id || ''] || [];

  if (!course) return <div className="p-8 text-center text-foreground">Course not found</div>;

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      {/* Header */}
      <div className="relative h-64">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 bg-background/10 backdrop-blur-md rounded-full text-foreground hover:bg-background/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="absolute bottom-6 left-6 right-6 text-foreground">
          <Badge className="mb-3 bg-guide-gold text-white border-none">{course.category}</Badge>
          <h1 className="text-2xl font-black leading-tight mb-2 text-foreground">{course.title}</h1>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-guide-gold text-guide-gold" />
              <span className="font-bold text-foreground">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="w-full bg-muted p-1 rounded-xl mb-8">
            <TabsTrigger 
              value="about" 
              className="flex-1 rounded-lg transition-all data-[state=active]:bg-academy-blue data-[state=active]:text-guide-gold text-muted-foreground font-bold"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="curriculum" 
              className="flex-1 rounded-lg transition-all data-[state=active]:bg-academy-blue data-[state=active]:text-guide-gold text-muted-foreground font-bold"
            >
              Curriculum
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="flex-1 rounded-lg transition-all data-[state=active]:bg-academy-blue data-[state=active]:text-guide-gold text-muted-foreground font-bold"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-0 focus-visible:outline-none">
            <h2 className="text-lg font-black text-foreground mb-4">Course Description</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {course.description}
            </p>
            <h2 className="text-lg font-black text-foreground mb-4">What you'll learn</h2>
            <div className="grid gap-3">
              {[
                'Build professional websites from scratch',
                'Master modern frontend frameworks',
                'Understand backend architecture',
                'Deploy applications to the cloud'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-guide-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="mt-0 focus-visible:outline-none">
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.id}>
                  <h3 className="font-bold text-foreground mb-4 flex items-center justify-between">
                    <span>{module.title}</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{module.lessons.length} Lessons</span>
                  </h3>
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id}
                        onClick={() => {
                          if (lesson.type === 'quiz') navigate(`/quiz/${lesson.quizId}`);
                          else if (lesson.type === 'reading' || lesson.type === 'video') navigate(`/course/${id}/material/${lesson.id}`);
                        }}
                        className="flex items-center justify-between p-4 bg-muted rounded-2xl group hover:bg-academy-blue transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lesson.isCompleted ? 'bg-guide-gold/10 text-guide-gold' : 'bg-background text-muted-foreground'}`}>
                            {lesson.isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-foreground group-hover:text-white transition-colors">{lesson.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-muted-foreground font-medium group-hover:text-white/60">{lesson.duration}</span>
                              <span className="w-1 h-1 bg-border rounded-full group-hover:bg-white/20"></span>
                              <span className="text-[10px] text-guide-gold font-bold uppercase tracking-wider group-hover:text-white">{lesson.type}</span>
                            </div>
                          </div>
                        </div>
                        {!lesson.isCompleted && lesson.type === 'video' && <Lock className="w-4 h-4 text-muted-foreground group-hover:text-white/40" />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-0 focus-visible:outline-none">
            <div className="space-y-6">
              {[
                { name: 'Ahmad S.', rating: 5, comment: 'Sangat membantu untuk memahami operasional di lapangan. Materinya padat dan jelas.' },
                { name: 'Budi R.', rating: 4, comment: 'Bagus sekali, videonya jernih dan mudah diikuti. Quiznya juga menantang.' },
                { name: 'Siti A.', rating: 5, comment: 'Materi TOS sangat detail. Terima kasih Gacoan Academy!' }
              ].map((review, i) => (
                <div key={i} className="p-4 bg-muted rounded-2xl border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-foreground">{review.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-guide-gold text-guide-gold" />
                      <span className="text-xs font-bold text-foreground">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border z-50">
        <Button className="w-full h-14 rounded-2xl bg-academy-blue hover:bg-academy-blue/90 text-white font-bold text-base shadow-xl shadow-academy-blue/20">
          {course.progress !== undefined ? 'Continue Learning' : 'Request Access'}
        </Button>
      </div>
    </div>
  );
}
