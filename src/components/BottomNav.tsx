import { Home, BookOpen, GraduationCap, User, Library } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: Library, label: 'KMS', path: '/kms' },
  { icon: GraduationCap, label: 'Learning', path: '/my-learning' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border px-6 py-3 pb-6 flex items-center justify-between">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1 transition-all duration-300",
              isActive ? "text-academy-blue scale-110" : "text-muted-foreground hover:text-academy-blue"
            )
          }
        >
          <item.icon className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
