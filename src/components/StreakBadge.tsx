import { cn } from '@/lib/utils';

interface StreakBadgeProps {
  streak: number;
  compact?: boolean;
  className?: string;
}

function getStreakTier(streak: number) {
  if (streak >= 100) return { emoji: '💎', label: 'Lendário', color: 'text-violet-500', bg: 'bg-violet-500/15', ring: 'ring-violet-500/30' };
  if (streak >= 60)  return { emoji: '🏆', label: 'Épico', color: 'text-amber-500', bg: 'bg-amber-500/15', ring: 'ring-amber-500/30' };
  if (streak >= 30)  return { emoji: '⚡', label: 'Incrível', color: 'text-blue-500', bg: 'bg-blue-500/15', ring: 'ring-blue-500/30' };
  if (streak >= 7)   return { emoji: '🔥', label: 'Em chamas', color: 'text-orange-500', bg: 'bg-orange-500/15', ring: 'ring-orange-500/30' };
  return { emoji: '🔥', label: '', color: 'text-orange-500', bg: 'bg-orange-500/10', ring: '' };
}

export function StreakBadge({ streak, compact = false, className }: StreakBadgeProps) {
  if (streak <= 0) return null;

  const tier = getStreakTier(streak);

  if (compact) {
    return (
      <span className={cn('flex items-center gap-0.5 text-sm font-semibold flex-shrink-0', tier.color, className)}>
        {tier.emoji} {streak}
      </span>
    );
  }

  return (
    <div className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-bold transition-all',
      tier.bg, tier.color,
      streak >= 7 && `ring-1 ${tier.ring}`,
      className,
    )}>
      <span className="text-base leading-none">{tier.emoji}</span>
      <span>{streak} {streak === 1 ? 'dia' : 'dias'}</span>
      {tier.label && streak >= 7 && (
        <span className="text-[10px] font-medium opacity-70 ml-0.5">{tier.label}</span>
      )}
    </div>
  );
}
