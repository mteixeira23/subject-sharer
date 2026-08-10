import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavLink } from '@/components/NavLink';
import {
  LayoutDashboard,
  MessageCircle,
  Target,
  CheckSquare,
  GraduationCap,
  Wallet,
  Heart,
  Crown,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', icon: LayoutDashboard, label: 'Hub', end: true },
  { to: '/conversa', icon: MessageCircle, label: 'Chat' },
  { to: '/metas', icon: Target, label: 'Metas' },
  { to: '/tarefas', icon: CheckSquare, label: 'Tarefas' },
  { to: '/estudos', icon: GraduationCap, label: 'Estudos' },
  { to: '/financas', icon: Wallet, label: 'Finanças' },
  { to: '/saude', icon: Heart, label: 'Saúde' },
  { to: '/assinatura', icon: Crown, label: 'Premium' },
];

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-14 px-1">
        {NAV_ITEMS.map(item => {
          const isActive = item.end
            ? location.pathname === item.to
            : location.pathname.startsWith(item.to);

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={cn(
                'flex flex-col items-center gap-0.5 px-1 py-1 rounded-lg transition-colors min-w-0',
                'text-muted-foreground hover:text-foreground',
              )}
              activeClassName="text-primary"
            >
              <item.icon className="h-4 w-4" />
              <span className="text-[9px] font-medium leading-tight">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
