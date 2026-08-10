import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Metric {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface HubCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  metrics: Metric[];
  accentClass: string; // border/text accent color class
  iconBgClass: string;
  iconTextClass: string;
  badge?: React.ReactNode;
}

export function HubCard({
  title,
  icon: Icon,
  href,
  metrics,
  accentClass,
  iconBgClass,
  iconTextClass,
  badge,
}: HubCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className={cn(
        'border-l-4 cursor-pointer transition-shadow hover:shadow-md dark:hover:shadow-[0_0_20px_-4px_hsl(174_80%_50%/0.18)]',
        accentClass,
      )}
      onClick={() => navigate(href)}
    >
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg', iconBgClass)}>
              <Icon className={cn('h-4 w-4', iconTextClass)} />
            </div>
            <span className="font-semibold text-sm">{title}</span>
          </div>
          {badge}
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="space-y-1">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">{m.label}</span>
              <span className={cn('font-semibold text-sm', m.highlight ? iconTextClass : 'text-foreground')}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="mt-3 w-full h-7 text-xs"
          onClick={e => { e.stopPropagation(); navigate(href); }}
        >
          Ver tudo →
        </Button>
      </CardContent>
    </Card>
  );
}
