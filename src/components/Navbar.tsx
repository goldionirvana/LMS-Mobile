import { Search, Bell, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-academy-blue rounded-2xl flex items-center justify-center shadow-xl shadow-academy-blue/20">
          <GraduationCap className="w-6 h-6 text-guide-gold" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-black text-display text-academy-blue leading-none mb-1">Gacoan Academy</h1>
          <span className="text-[10px] font-bold text-guide-gold uppercase tracking-widest">Learning Center</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground hover:text-academy-blue transition-all hover:scale-105 active:scale-95">
          <Search className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground hover:text-academy-blue transition-all hover:scale-105 active:scale-95 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-guide-gold rounded-full border-2 border-muted"></span>
        </button>
        <Avatar className="w-10 h-10 border-2 border-guide-gold/30 rounded-2xl">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
