import { User, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const menuItems = [
  { icon: User, label: 'Edit Profile' },
  { icon: Bell, label: 'Notifications' },
  { icon: CreditCard, label: 'Payment Methods' },
  { icon: Shield, label: 'Security' },
  { icon: Settings, label: 'Settings' },
];

export default function Profile() {
  return (
    <div className="pb-24 bg-background min-h-screen text-foreground">
      <div className="px-6 py-10 bg-academy-blue text-white rounded-b-[40px] text-center mb-8 shadow-xl">
        <Avatar className="w-24 h-24 border-4 border-guide-gold/20 mx-auto mb-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-black">John Doe</h1>
        <p className="text-white/60 text-sm">john.doe@example.com</p>
      </div>

      <div className="px-6 space-y-2">
        {menuItems.map((item, i) => (
          <div key={i}>
            <button className="w-full flex items-center justify-between py-4 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-academy-blue/10 group-hover:text-academy-blue transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-foreground/80">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground/20" />
            </button>
            {i < menuItems.length - 1 && <Separator className="bg-border" />}
          </div>
        ))}
        
        <Separator className="my-4 bg-border" />
        
        <button className="w-full flex items-center justify-between py-4 text-red-500 group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-bold">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}
