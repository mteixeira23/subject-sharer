import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useVoiceInput } from '@/hooks/useVoiceInput';
import { toast } from 'sonner';

interface VoiceInputButtonProps {
  onTranscript: (text: string) => void;
  className?: string;
}

export function VoiceInputButton({ onTranscript, className }: VoiceInputButtonProps) {
  const { isListening, isSupported, toggle } = useVoiceInput({
    onResult: (transcript) => {
      onTranscript(transcript);
    },
  });

  const handleClick = () => {
    if (!isSupported) {
      toast.error('Reconhecimento de voz não suportado neste navegador. Tente no Chrome ou Edge.');
      return;
    }
    toggle();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'flex-shrink-0 p-1.5 rounded-md transition-all',
        isListening
          ? 'text-destructive bg-destructive/10 animate-pulse'
          : 'text-primary/70 hover:text-primary hover:bg-primary/10',
        className,
      )}
      title={isListening ? 'Parar gravação' : 'Falar'}
      aria-label={isListening ? 'Parar gravação de voz' : 'Iniciar gravação de voz'}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
    </button>
  );
}
