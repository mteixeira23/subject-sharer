export type Shift = 'allday' | 'morning' | 'afternoon' | 'evening';

export const SHIFT_CONFIG = {
  allday:    { label: 'Dia Inteiro', icon: '📅', order: 0 },
  morning:   { label: 'Manhã',      icon: '☀️',  order: 1 },
  afternoon: { label: 'Tarde',      icon: '🌤️', order: 2 },
  evening:   { label: 'Noite',      icon: '🌙',  order: 3 },
} as const;

export const SHIFT_ORDER: Shift[] = ['allday', 'morning', 'afternoon', 'evening'];
