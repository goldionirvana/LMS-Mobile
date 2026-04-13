import { Search, Bell, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-academy-blue rounded-xl flex items-center justify-center shadow-lg shadow-academy-blue/20">
          <GraduationCap className="w-6 h-6 text-guide-gold" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-black text-academy-blue leading-none mb-1">Gacoan Academy</h1>
          <span className="text-[10px] font-bold text-guide-gold uppercase tracking-widest">Learning Center</span>
        </div>
      </div>
      <div className="flex-1 max-w-[200px] relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search..." 
          className="pl-10 bg-muted border-none focus-visible:ring-1 focus-visible:ring-guide-gold h-10 rounded-full text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-muted-foreground hover:text-academy-blue transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-guide-gold rounded-full border-2 border-background"></span>
        </button>
        <Avatar className="w-9 h-9 border-2 border-guide-gold/30">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
