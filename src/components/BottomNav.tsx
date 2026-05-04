import { Home, BookOpen, GraduationCap, User, Library } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Beranda', path: '/' },
  { icon: BookOpen, label: 'Kursus', path: '/courses' },
  { icon: Library, label: 'Wawasan', path: '/kms' },
  { icon: GraduationCap, label: 'Belajar', path: '/my-learning' },
  { icon: User, label: 'Profil', path: '/profile' },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-10 pointer-events-none">
      <nav className="max-w-md mx-auto glass-dark px-10 py-5 rounded-full flex items-center justify-between shadow-[0_20px_50px_rgba(0,31,75,0.4)] pointer-events-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1.5 transition-all duration-500 relative group",
                isActive ? "text-guide-gold" : "text-white/40 hover:text-white"
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className={cn(
                  "p-2 rounded-2xl transition-all duration-500",
                  isActive ? "bg-white/10 shadow-inner" : "group-hover:bg-white/5"
                )}>
                  <item.icon className={cn("w-5 h-5 transition-transform duration-500", isActive && "scale-110")} />
                </div>
                <span className={cn(
                  "text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute -bottom-3 w-1.5 h-1.5 bg-guide-gold rounded-full shadow-[0_0_10px_rgba(197,160,63,0.8)]"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
