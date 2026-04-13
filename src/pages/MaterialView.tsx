import { useParams, useNavigate } from 'react-router-dom';
import { COURSE_MODULES } from '@/lib/mockData';
import { ChevronLeft, BookOpen, CheckCircle2, ArrowRight, ArrowLeft, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function MaterialView() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const modules = COURSE_MODULES[courseId || ''] || [];
  let lesson = null;
  for (const m of modules) {
    const found = m.lessons.find(l => l.id === lessonId);
    if (found) {
      lesson = found;
      break;
    }
  }

  if (!lesson) return <div className="p-10 text-center text-foreground">Material not found</div>;

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground">
      <div className="px-6 py-4 flex items-center justify-between border-b border-border sticky top-0 bg-background z-10">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-muted-foreground">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-sm font-black text-foreground truncate px-4">{lesson.title}</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <ScrollArea className="h-[calc(100vh-140px)]">
        <div className="px-6 py-8">
          {lesson.type === 'video' ? (
            <div className="mb-8">
              <div className="aspect-video w-full bg-black rounded-3xl overflow-hidden relative group shadow-lg">
                {lesson.videoUrl ? (
                  <video 
                    src={lesson.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    poster="https://picsum.photos/seed/video/800/450"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
                    <PlayCircle className="w-16 h-16 mb-2" />
                    <span className="text-sm font-bold">Video not available</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="w-12 h-12 rounded-2xl bg-guide-gold/10 flex items-center justify-center text-guide-gold mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
          )}
          
          <h2 className="text-2xl font-black text-foreground leading-tight mb-6">
            {lesson.title}
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg whitespace-pre-wrap">
              {lesson.content || 'In this lesson, we will explore the core concepts and practical applications of this topic. Please follow along with the provided materials.'}
            </p>
            
            <div className="bg-muted rounded-[32px] p-8 border border-border mb-8">
              <h3 className="text-lg font-black text-foreground mb-4">Key Takeaways</h3>
              <ul className="space-y-4">
                {[
                  'Understanding the core concepts of this topic',
                  'Practical application in real-world scenarios',
                  'Best practices and common pitfalls to avoid'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-guide-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border flex items-center gap-4 z-10">
        <Button 
          variant="outline"
          onClick={() => navigate(-1)}
          className="flex-1 h-14 rounded-2xl border-border text-muted-foreground font-bold flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button 
          onClick={() => navigate(-1)}
          className="flex-1 h-14 rounded-2xl bg-academy-blue text-white font-bold text-base shadow-xl shadow-academy-blue/20 flex items-center justify-center gap-2"
        >
          Complete
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
