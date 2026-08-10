import { useState, useCallback, useRef, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTasks } from '@/contexts/TaskContext';
import { useFinance } from '@/contexts/FinanceContext';
import { useHealth } from '@/contexts/HealthContext';
import { useGoals } from '@/contexts/GoalsContext';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { format, addDays, getDay } from 'date-fns';

const DAILY_LIMIT = 10;

function getDailyKey() {
  return `chat_daily_count_${format(new Date(), 'yyyy-MM-dd')}`;
}

function getDailyCount(): number {
  try {
    return parseInt(localStorage.getItem(getDailyKey()) || '0', 10);
  } catch { return 0; }
}

function incrementDailyCount(): number {
  const key = getDailyKey();
  const count = getDailyCount() + 1;
  localStorage.setItem(key, String(count));
  return count;
}

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  actions?: ActionResult[];
};

type ActionResult = {
  type: string;
  success: boolean;
  message: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-assistant`;

export function useChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const isSendingRef = useRef(false);
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;

  const { user } = useAuth();
  const tasks = useTasks();
  const finance = useFinance();
  const health = useHealth();
  const goals = useGoals();
  const study = useStudy();

  const buildContext = useCallback(() => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const uniqueSubjects = Array.from(
      new Map(study.data.subjects.map(s => [s.name.toLowerCase(), s])).values(),
    ).slice(0, 25);

    return {
      today,
      accounts: finance.data.accounts.slice(0, 10).map(a => ({ id: a.id, name: a.name, type: a.type })),
      habits: health.data.habits.slice(0, 20).map(h => ({ id: h.id, name: h.name, icon: h.icon })),
      subjects: uniqueSubjects.map(s => ({ id: s.id, name: s.name, totalLessons: s.totalLessons })),
      pendingTasks: tasks.data.tasks.filter(t => !t.completed).slice(0, 30).map(t => ({ id: t.id, title: t.title })),
      activeGoals: goals.getActiveGoals().slice(0, 20).map(g => ({ id: g.id, title: g.title, category: g.category })),
      recentTransactions: finance.data.transactions.slice(0, 10).map(t => ({ id: t.id, description: t.description, amount: t.amount, type: t.type })),
      unpaidBills: finance.data.bills.filter(b => !b.paid).slice(0, 10).map(b => ({ id: b.id, description: b.description, amount: b.amount })),
    };
  }, [finance.data, health.data, study.data, tasks.data, goals]);

  const executeAction = useCallback(async (name: string, args: any): Promise<ActionResult> => {
    try {
      switch (name) {
        case 'create_task': {
          await tasks.addTask({
            title: args.title,
            description: args.description,
            priority: args.priority || 'Média',
            dueDate: args.dueDate,
            recurrenceMode: 'once',
            shift: args.shift,
          });
          return { type: 'create_task', success: true, message: `✅ Tarefa "${args.title}" criada!` };
        }
        case 'create_transaction': {
          const account = args.accountName
            ? finance.data.accounts.find(a => a.name.toLowerCase() === args.accountName.toLowerCase())
            : undefined;
          await finance.addTransaction({
            type: args.type,
            amount: args.amount,
            category: args.category || 'Outros',
            description: args.description,
            date: args.date,
            accountId: account?.id,
          });
          const label = args.type === 'income' ? 'Receita' : 'Despesa';
          return { type: 'create_transaction', success: true, message: `✅ ${label} de R$ ${args.amount.toFixed(2)} registrada!` };
        }
        case 'create_habit': {
          health.addHabit({
            name: args.name,
            icon: args.icon || '✅',
            recurrenceMode: args.recurrenceMode || 'daily',
            recurrenceDays: args.recurrenceDays,
          });
          return { type: 'create_habit', success: true, message: `✅ Hábito "${args.name}" criado!` };
        }
        case 'create_bill': {
          await finance.addBill({
            type: args.type,
            description: args.description,
            amount: args.amount,
            dueDate: args.dueDate,
            category: args.category || 'Outros',
            paid: false,
          });
          const label = args.type === 'payable' ? 'Conta a pagar' : 'Conta a receber';
          return { type: 'create_bill', success: true, message: `✅ ${label} "${args.description}" criada!` };
        }
        case 'create_goal': {
          const categoryMap: Record<string, string> = {
            'Estudos': 'questions', 'Financeiro': 'finance_save', 'Saúde': 'habits',
            'Saude': 'habits', 'Tarefas': 'tasks',
          };
          const periodMap: Record<string, string> = {
            'Diária': 'weekly', 'Diaria': 'weekly', 'Semanal': 'weekly',
            'Mensal': 'monthly', 'Anual': 'yearly',
          };
          const category = categoryMap[args.category] || args.category;
          const period = periodMap[args.period] || args.period;
          await goals.addGoal({
            title: args.title,
            category,
            period,
            target: args.target,
          });
          return { type: 'create_goal', success: true, message: `✅ Meta "${args.title}" criada!` };
        }
        case 'delete_task': {
          const task = tasks.data.tasks.find(t => t.title.toLowerCase() === args.title.toLowerCase());
          if (!task) return { type: 'delete_task', success: false, message: `❌ Tarefa "${args.title}" não encontrada.` };
          await tasks.deleteTask(task.id);
          return { type: 'delete_task', success: true, message: `🗑️ Tarefa "${args.title}" deletada!` };
        }
        case 'delete_transaction': {
          const tx = finance.data.transactions.find(t => t.description.toLowerCase() === args.description.toLowerCase());
          if (!tx) return { type: 'delete_transaction', success: false, message: `❌ Transação "${args.description}" não encontrada.` };
          await finance.deleteTransaction(tx.id);
          return { type: 'delete_transaction', success: true, message: `🗑️ Transação "${args.description}" deletada!` };
        }
        case 'delete_habit': {
          const habit = health.data.habits.find(h => h.name.toLowerCase() === args.name.toLowerCase());
          if (!habit) return { type: 'delete_habit', success: false, message: `❌ Hábito "${args.name}" não encontrado.` };
          health.deleteHabit(habit.id);
          return { type: 'delete_habit', success: true, message: `🗑️ Hábito "${args.name}" deletado!` };
        }
        case 'delete_bill': {
          const bill = finance.data.bills.find(b => b.description.toLowerCase() === args.description.toLowerCase());
          if (!bill) return { type: 'delete_bill', success: false, message: `❌ Conta "${args.description}" não encontrada.` };
          await finance.deleteBill(bill.id);
          return { type: 'delete_bill', success: true, message: `🗑️ Conta "${args.description}" deletada!` };
        }
        case 'delete_goal': {
          const goal = goals.data.goals.find(g => g.title.toLowerCase() === args.title.toLowerCase());
          if (!goal) return { type: 'delete_goal', success: false, message: `❌ Meta "${args.title}" não encontrada.` };
          await goals.deleteGoal(goal.id);
          return { type: 'delete_goal', success: true, message: `🗑️ Meta "${args.title}" deletada!` };
        }
        case 'create_schedule_event': {
          const subject = study.data.subjects.find(s =>
            s.name.toLowerCase().includes(args.subjectName.toLowerCase())
          );
          if (!subject) return { type: 'create_schedule_event', success: false, message: `❌ Matéria "${args.subjectName}" não encontrada.` };
          if (args.lessonNumber < 1 || args.lessonNumber > subject.totalLessons) {
            return { type: 'create_schedule_event', success: false, message: `❌ Aula ${args.lessonNumber} inválida. ${subject.name} tem ${subject.totalLessons} aulas.` };
          }
          await study.addScheduleEvent({
            id: crypto.randomUUID(),
            subjectId: subject.id,
            lessonNumber: args.lessonNumber,
            date: args.date,
            type: args.type || 'theory',
            completed: false,
            description: args.description,
            shift: args.shift,
          });
          const typeLabel = args.type === 'review' ? 'Revisão' : args.type === 'questions' ? 'Questões' : 'Aula';
          return { type: 'create_schedule_event', success: true, message: `✅ ${typeLabel} ${args.lessonNumber} de ${subject.name} agendada para ${args.date}!` };
        }
        case 'complete_lesson': {
          const subject = study.data.subjects.find(s =>
            s.name.toLowerCase().includes(args.subjectName.toLowerCase())
          );
          if (!subject) return { type: 'complete_lesson', success: false, message: `❌ Matéria "${args.subjectName}" não encontrada.` };
          const contest = study.data.contests.find(c => c.id === subject.contestId);
          const currentCycle = contest?.currentCycle ?? 1;
          const lesson = study.data.lessons.find(l => l.subjectId === subject.id && l.number === args.lessonNumber && l.cycle === currentCycle);
          if (!lesson) return { type: 'complete_lesson', success: false, message: `❌ Aula ${args.lessonNumber} de ${subject.name} não encontrada.` };
          const isTheory = args.markType === 'theory';
          if (isTheory && lesson.theoryCompleted) {
            return { type: 'complete_lesson', success: true, message: `ℹ️ Aula ${args.lessonNumber} de ${subject.name} já estava marcada como estudada.` };
          }
          if (!isTheory && lesson.reviewCompleted) {
            return { type: 'complete_lesson', success: true, message: `ℹ️ Revisão da aula ${args.lessonNumber} de ${subject.name} já estava marcada como concluída.` };
          }
          await study.updateLesson(lesson.id, isTheory ? { theoryCompleted: true } : { reviewCompleted: true });
          const label = isTheory ? '📖 Teoria' : '🔄 Revisão';
          return { type: 'complete_lesson', success: true, message: `✅ ${label} da aula ${args.lessonNumber} de ${subject.name} marcada como concluída!` };
        }
        case 'query_info': {
          return handleQuery(args.queryType);
        }
        default:
          return { type: name, success: false, message: `Ação desconhecida: ${name}` };
      }
    } catch (err) {
      console.error('Action error:', err);
      return { type: name, success: false, message: `❌ Erro ao executar: ${err instanceof Error ? err.message : 'erro desconhecido'}` };
    }
  }, [tasks, finance, health, goals, study]);

  const handleQuery = useCallback((queryType: string): ActionResult => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    switch (queryType) {
      case 'balance': {
        const consolidated = finance.getConsolidatedBalance(year, month);
        const accountDetails = finance.data.accounts.map(acc => {
          const bal = finance.getAccountBalance(acc.id, year, month);
          return `- ${acc.name}: R$ ${bal ? bal.currentBalance.toFixed(2) : 'sem saldo'}`;
        }).join('\n');
        return {
          type: 'query_info',
          success: true,
          message: `💰 **Saldo consolidado:** R$ ${consolidated !== null ? consolidated.toFixed(2) : 'não disponível'}\n\n${accountDetails}`,
        };
      }
      case 'pending_tasks': {
        const pending = tasks.getFilteredTasks('today');
        if (pending.length === 0) return { type: 'query_info', success: true, message: '✅ Nenhuma tarefa pendente para hoje!' };
        const list = pending.map(t => `- ${t.priority === 'Alta' ? '🔴' : t.priority === 'Média' ? '🟡' : '🟢'} ${t.title}`).join('\n');
        return { type: 'query_info', success: true, message: `📋 **Tarefas pendentes hoje (${pending.length}):**\n${list}` };
      }
      case 'today_habits': {
        const todayHabits = health.data.habits.filter(h => {
          const mode = h.recurrenceMode ?? 'daily';
          if (mode === 'daily') return true;
          if (mode === 'weekly') return (h.recurrenceDays ?? []).includes(getDay(now));
          return true;
        });
        const list = todayHabits.map(h => {
          const done = health.isHabitCompletedOn(h.id, today);
          return `- ${h.icon} ${h.name} ${done ? '✅' : '⬜'}`;
        }).join('\n');
        const doneCount = todayHabits.filter(h => health.isHabitCompletedOn(h.id, today)).length;
        return {
          type: 'query_info',
          success: true,
          message: `🎯 **Hábitos de hoje (${doneCount}/${todayHabits.length}):**\n${list}`,
        };
      }
      case 'active_goals': {
        const active = goals.getActiveGoals();
        if (active.length === 0) return { type: 'query_info', success: true, message: 'Nenhuma meta ativa no momento.' };
        const list = active.map(g => `- ${g.title} (${g.category}, ${g.period}): meta ${g.target}`).join('\n');
        return { type: 'query_info', success: true, message: `🎯 **Metas ativas (${active.length}):**\n${list}` };
      }
      case 'study_progress': {
        const subs = study.data.subjects;
        if (subs.length === 0) return { type: 'query_info', success: true, message: 'Nenhuma matéria cadastrada.' };
        const list = subs.slice(0, 10).map(s => {
          const subLessons = study.data.lessons.filter(l => l.subjectId === s.id);
          const done = subLessons.filter(l => l.theoryCompleted).length;
          return `- ${s.name}: ${done}/${subLessons.length} aulas`;
        }).join('\n');
        return { type: 'query_info', success: true, message: `📚 **Progresso de estudos:**\n${list}` };
      }
      default:
        return { type: 'query_info', success: true, message: 'Use uma consulta específica: saldo, tarefas, hábitos, metas ou estudos.' };
    }
  }, [finance, tasks, health, goals, study]);

  const [dailyCount, setDailyCount] = useState(getDailyCount);
  const dailyLimit = DAILY_LIMIT;
  const limitReached = dailyCount >= DAILY_LIMIT;

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim() || isSendingRef.current) return;

    if (getDailyCount() >= DAILY_LIMIT) {
      toast.error('Limite de 10 mensagens por dia atingido.');
      setDailyCount(getDailyCount());
      return;
    }

    isSendingRef.current = true;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    const apiMessages = [...messagesRef.current, userMsg].map(m => ({ role: m.role, content: m.content }));
    const context = buildContext();
    const assistantId = crypto.randomUUID();
    let assistantCreated = false;

    const upsertAssistant = (content: string) => {
      assistantCreated = true;
      setMessages(prev => {
        const existing = prev.find(m => m.id === assistantId);
        if (existing) {
          return prev.map(m => m.id === assistantId ? { ...m, content } : m);
        }
        return [...prev, { id: assistantId, role: 'assistant' as const, content }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: apiMessages, context }),
        signal: controller.signal,
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Erro desconhecido' }));
        throw new Error(err.error || `Erro ${resp.status}`);
      }

      // Only count after successful response
      const newCount = incrementDailyCount();
      setDailyCount(newCount);

      if (!resp.body) throw new Error('Sem resposta do servidor');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let assistantContent = '';
      let toolCalls: Array<{ id: string; name: string; arguments: string }> = [];

      const processSSELine = (jsonStr: string) => {
        const parsed = JSON.parse(jsonStr);
        const candidates = parsed.candidates;
        if (!candidates?.[0]?.content?.parts) return;

        for (const part of candidates[0].content.parts) {
          if (part.text) {
            assistantContent += part.text;
            upsertAssistant(assistantContent);
          }
          if (part.functionCall) {
            toolCalls.push({
              id: crypto.randomUUID(),
              name: part.functionCall.name,
              arguments: JSON.stringify(part.functionCall.args || {}),
            });
          }
        }
      };

      let streamDone = false;
      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') { streamDone = true; break; }

          try {
            processSSELine(jsonStr);
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      // Flush remaining buffer
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split('\n')) {
          if (!raw) continue;
          if (raw.endsWith('\r')) raw = raw.slice(0, -1);
          if (raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            processSSELine(jsonStr);
          } catch { /* ignore */ }
        }
      }

      // Ensure assistant message exists before processing tool calls
      if (toolCalls.length > 0 && !assistantCreated) {
        upsertAssistant('Processando...');
      }

      // Execute tool calls if any
      if (toolCalls.length > 0) {
        const actions: ActionResult[] = [];
        for (const tc of toolCalls) {
          if (!tc.name) continue;
          try {
            const args = JSON.parse(tc.arguments);
            const result = await executeAction(tc.name, args);
            actions.push(result);
          } catch (e) {
            actions.push({ type: tc.name, success: false, message: `❌ Erro ao processar ação` });
          }
        }

        const actionMessages = actions.map(a => a.message).join('\n\n');
        const finalContent = assistantContent
          ? `${assistantContent}\n\n---\n\n${actionMessages}`
          : actionMessages;

        setMessages(prev => {
          const existing = prev.find(m => m.id === assistantId);
          if (existing) {
            return prev.map(m => m.id === assistantId ? { ...m, content: finalContent, actions } : m);
          }
          return [...prev, { id: assistantId, role: 'assistant' as const, content: finalContent, actions }];
        });
      }

      if (!assistantContent && toolCalls.length === 0) {
        upsertAssistant('Desculpe, não consegui processar sua mensagem. Tente novamente.');
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      const errorMsg = err instanceof Error ? err.message : 'Erro desconhecido';
      const isExpectedQuotaError = /cota diária|limite de requisições|rate limit/i.test(errorMsg);

      if (!isExpectedQuotaError) {
        console.error('Chat error:', err);
      }

      toast.error(errorMsg);
      setMessages(prev => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', content: `❌ ${errorMsg}` },
      ]);
    } finally {
      setIsLoading(false);
      abortRef.current = null;
      isSendingRef.current = false;
    }
  }, [buildContext, executeAction]);

  const clearMessages = useCallback(() => setMessages([]), []);

  const cancelStream = useCallback(() => {
    abortRef.current?.abort();
    setIsLoading(false);
  }, []);

  return { messages, isLoading, sendMessage, clearMessages, cancelStream, dailyCount, dailyLimit, limitReached };
}
