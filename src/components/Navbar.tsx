import { Search, Bell, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-border/40 px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center p-1.5 rounded-xl bg-white shadow-sm border border-border/50">
          <img 
            src="/logo-academy.png" 
            className="h-8 w-auto object-contain" 
            alt="Gacoan Academy" 
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-black text-display text-academy-blue leading-none mb-0.5">Gacoan Academy</h1>
          <p className="text-[9px] font-bold text-guide-gold uppercase tracking-[0.2em] opacity-80">Learning Center</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-2xl bg-white border border-border/50 flex items-center justify-center text-muted-foreground hover:text-academy-blue transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95 group">
          <Search className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
        </button>
        <button className="w-10 h-10 rounded-2xl bg-white border border-border/50 flex items-center justify-center text-muted-foreground hover:text-academy-blue transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95 relative group">
          <Bell className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-guide-gold rounded-full border-2 border-white"></span>
        </button>
        <Avatar className="w-10 h-10 border border-border/50 rounded-2xl shadow-sm">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-academy-blue text-white text-[10px] font-black tracking-widest">GA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
