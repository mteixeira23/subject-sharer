import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Trash2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { useChatAssistant, ChatMessage } from '@/hooks/useChatAssistant';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex w-full mb-3', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-md'
            : 'bg-muted text-foreground rounded-bl-md',
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default function Conversa() {
  const isMobile = useIsMobile();
  const { messages, isLoading, sendMessage, clearMessages, dailyCount, dailyLimit, limitReached } = useChatAssistant();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoice = (text: string) => {
    setInput(prev => (prev ? prev + ' ' + text : text));
  };

  return (
    <div className="flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3 border-b bg-background/95 backdrop-blur-lg shrink-0">
        {!isMobile && <SidebarTrigger />}
        <MessageCircle className="h-5 w-5 text-primary" />
        <h1 className="text-lg font-semibold flex-1">Chat</h1>
        {messages.length > 0 && (
          <Button variant="ghost" size="icon" onClick={clearMessages} title="Limpar conversa">
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
        <ThemeToggle />
      </header>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-lg">Olá! Como posso ajudar?</p>
              <p className="text-sm mt-1 max-w-md">
                Posso criar tarefas, registrar despesas, gerenciar hábitos, metas e muito mais.
                Experimente dizer algo como:
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center max-w-md">
              {[
                'Criar tarefa para estudar amanhã',
                'Qual meu saldo?',
                'Adicionar despesa de R$ 50 alimentação',
                'Quais meus hábitos de hoje?',
              ].map(suggestion => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && <TypingIndicator />}
          </>
        )}
      </div>

      {/* Input area */}
      <div className={cn('border-t bg-background px-4 py-3 shrink-0', isMobile && 'pb-20')}>
        <div className="flex items-end gap-2 max-w-3xl mx-auto">
          <VoiceInputButton onTranscript={handleVoice} className="mb-1" />
          <div className="flex-1 flex flex-col gap-1">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={limitReached ? 'Limite diário atingido' : 'Digite ou fale sua mensagem...'}
              disabled={limitReached}
              className="min-h-[40px] max-h-[120px] resize-none flex-1 text-sm"
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 120) + 'px';
              }}
            />
            <span className={cn('text-[11px]', limitReached ? 'text-destructive font-medium' : 'text-muted-foreground')}>
              {dailyCount}/{dailyLimit} mensagens hoje
            </span>
          </div>
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || isLoading || limitReached}
            className="mb-1 shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
