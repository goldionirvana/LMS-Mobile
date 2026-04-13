import { COURSES } from '@/lib/mockData';
import CourseCard from '@/components/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MyLearning() {
  const enrolledCourses = COURSES.filter(c => c.progress !== undefined);

  return (
    <div className="pb-24 px-4 py-6 bg-background min-h-screen text-foreground">
      <h1 className="text-2xl font-black text-foreground mb-6">My Learning</h1>
      
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="w-full bg-muted p-1 rounded-xl mb-6">
          <TabsTrigger 
            value="ongoing" 
            className="flex-1 rounded-lg transition-all data-[state=active]:bg-academy-blue data-[state=active]:text-white text-muted-foreground font-bold"
          >
            Ongoing
          </TabsTrigger>
          <TabsTrigger 
            value="completed" 
            className="flex-1 rounded-lg transition-all data-[state=active]:bg-academy-blue data-[state=active]:text-white text-muted-foreground font-bold"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ongoing" className="mt-0">
          {enrolledCourses.length > 0 ? (
            <div className="grid gap-6">
              {enrolledCourses.filter(c => (c.progress || 0) < 100).map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} variant="progress" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">You haven't started any courses yet.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">No completed courses yet.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
