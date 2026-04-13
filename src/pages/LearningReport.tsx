import { LEARNING_STATS } from '@/lib/mockData';
import { ChevronLeft, GraduationCap, Clock, Award, Calendar as CalendarIcon, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function LearningReport() {
  const navigate = useNavigate();

  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      <div className="px-6 py-8 bg-academy-blue text-white rounded-b-[40px] mb-8 shadow-xl">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-white/60 mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-black mb-2">Learning Report</h1>
        <p className="text-white/60 text-sm">Detailed summary of your academic performance.</p>
      </div>

      <div className="px-6 space-y-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-none bg-muted">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-guide-gold mx-auto mb-2" />
              <div className="text-2xl font-black text-academy-blue">{LEARNING_STATS.completed}</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Completed</div>
            </CardContent>
          </Card>
          <Card className="border-none bg-muted">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-guide-gold mx-auto mb-2" />
              <div className="text-2xl font-black text-academy-blue">{LEARNING_STATS.totalHours}h</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Learning Hours</div>
            </CardContent>
          </Card>
        </div>

        {/* KHS Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-guide-gold" />
            <h2 className="text-lg font-black text-foreground">Kartu Hasil Studi (KHS)</h2>
          </div>
          <div className="space-y-3">
            {LEARNING_STATS.khs.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-2xl shadow-sm">
                <div>
                  <h3 className="font-bold text-foreground text-sm">{item.subject}</h3>
                  <span className="text-[10px] text-muted-foreground font-medium">{item.date}</span>
                </div>
                <Badge className="bg-academy-blue text-white font-black px-3 py-1 rounded-lg border-none">
                  {item.grade}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Learning Calendar Placeholder */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="w-5 h-5 text-guide-gold" />
            <h2 className="text-lg font-black text-foreground">Learning Calendar</h2>
          </div>
          <Card className="border-dashed border-2 border-border bg-muted">
            <CardContent className="p-8 text-center">
              <CalendarIcon className="w-10 h-10 text-muted-foreground/20 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-medium">No upcoming training sessions scheduled for this week.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
