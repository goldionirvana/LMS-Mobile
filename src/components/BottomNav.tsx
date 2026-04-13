import { Home, BookOpen, GraduationCap, User, Library } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: Library, label: 'KMS', path: '/kms' },
  { icon: GraduationCap, label: 'Learning', path: '/my-learning' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pointer-events-none">
      <nav className="max-w-md mx-auto bg-academy-blue/95 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-[2.5rem] flex items-center justify-between shadow-2xl shadow-academy-blue/40 pointer-events-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 transition-all duration-500 relative group",
                isActive ? "text-guide-gold" : "text-white/40 hover:text-white"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-6 h-6 transition-transform duration-500", isActive && "scale-110")} />
                <span className={cn("text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-500", isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1")}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -top-1 w-1 h-1 bg-guide-gold rounded-full"
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
