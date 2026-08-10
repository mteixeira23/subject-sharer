import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FUNCTION_DECLARATIONS = [
  {
    name: "create_task",
    description: "Cria uma nova tarefa para o usuário",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string", description: "Título da tarefa" },
        description: { type: "string", description: "Descrição opcional" },
        priority: { type: "string", enum: ["Alta", "Média", "Baixa"], description: "Prioridade" },
        dueDate: { type: "string", description: "Data no formato YYYY-MM-DD" },
        shift: { type: "string", enum: ["morning", "afternoon", "evening"], description: "Turno: morning (manhã), afternoon (tarde), evening (noite)" },
      },
      required: ["title"],
    },
  },
  {
    name: "create_transaction",
    description: "Cria uma transação financeira (receita ou despesa)",
    parameters: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["income", "expense"], description: "Tipo: receita ou despesa" },
        amount: { type: "number", description: "Valor da transação" },
        category: { type: "string", description: "Categoria da transação" },
        description: { type: "string", description: "Descrição da transação" },
        date: { type: "string", description: "Data no formato YYYY-MM-DD" },
        accountName: { type: "string", description: "Nome da conta financeira (opcional)" },
      },
      required: ["type", "amount", "description", "date"],
    },
  },
  {
    name: "create_habit",
    description: "Cria um novo hábito para acompanhamento diário",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "Nome do hábito" },
        icon: { type: "string", description: "Emoji do hábito" },
        recurrenceMode: { type: "string", enum: ["daily", "weekly"], description: "Frequência" },
        recurrenceDays: { type: "array", items: { type: "number" }, description: "Dias da semana (0=dom, 6=sáb) se weekly" },
      },
      required: ["name"],
    },
  },
  {
    name: "create_bill",
    description: "Cria uma conta a pagar ou a receber",
    parameters: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["payable", "receivable"], description: "Tipo: a pagar ou a receber" },
        description: { type: "string", description: "Descrição" },
        amount: { type: "number", description: "Valor" },
        dueDate: { type: "string", description: "Data de vencimento YYYY-MM-DD" },
        category: { type: "string", description: "Categoria" },
      },
      required: ["type", "description", "amount", "dueDate"],
    },
  },
  {
    name: "create_goal",
    description: "Cria uma nova meta",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string", description: "Título da meta" },
        category: { type: "string", enum: ["questions", "finance_save", "habits", "study_time", "tasks", "workout"], description: "Categoria da meta" },
        period: { type: "string", enum: ["weekly", "monthly", "yearly"], description: "Período da meta" },
        target: { type: "number", description: "Valor numérico da meta" },
      },
      required: ["title", "category", "period", "target"],
    },
  },
  {
    name: "query_info",
    description: "Consulta informações do usuário como saldo, tarefas pendentes, hábitos do dia, metas ativas, etc.",
    parameters: {
      type: "object",
      properties: {
        queryType: { type: "string", enum: ["balance", "pending_tasks", "today_habits", "active_goals", "study_progress", "general"], description: "Tipo de consulta" },
      },
      required: ["queryType"],
    },
  },
  {
    name: "delete_task",
    description: "Deleta uma tarefa pelo título",
    parameters: { type: "object", properties: { title: { type: "string", description: "Título da tarefa a deletar" } }, required: ["title"] },
  },
  {
    name: "delete_transaction",
    description: "Deleta uma transação financeira pela descrição",
    parameters: { type: "object", properties: { description: { type: "string", description: "Descrição da transação a deletar" } }, required: ["description"] },
  },
  {
    name: "delete_habit",
    description: "Deleta um hábito pelo nome",
    parameters: { type: "object", properties: { name: { type: "string", description: "Nome do hábito a deletar" } }, required: ["name"] },
  },
  {
    name: "delete_bill",
    description: "Deleta uma conta a pagar/receber pela descrição",
    parameters: { type: "object", properties: { description: { type: "string", description: "Descrição da conta a deletar" } }, required: ["description"] },
  },
  {
    name: "delete_goal",
    description: "Deleta uma meta pelo título",
    parameters: { type: "object", properties: { title: { type: "string", description: "Título da meta a deletar" } }, required: ["title"] },
  },
  {
    name: "create_schedule_event",
    description: "Agenda um evento de estudo (aula, revisão ou questões) para uma matéria",
    parameters: {
      type: "object",
      properties: {
        subjectName: { type: "string", description: "Nome da matéria" },
        lessonNumber: { type: "number", description: "Número da aula" },
        date: { type: "string", description: "Data no formato YYYY-MM-DD" },
        type: { type: "string", enum: ["theory", "review", "questions"], description: "Tipo do evento" },
        shift: { type: "string", enum: ["morning", "afternoon", "evening"], description: "Turno" },
        description: { type: "string", description: "Descrição opcional" },
      },
      required: ["subjectName", "lessonNumber", "date"],
    },
  },
  {
    name: "complete_lesson",
    description: "Marca uma aula como estudada (teoria) ou revisada",
    parameters: {
      type: "object",
      properties: {
        subjectName: { type: "string", description: "Nome da matéria" },
        lessonNumber: { type: "number", description: "Número da aula" },
        markType: { type: "string", enum: ["theory", "review"], description: "theory (estudou) ou review (revisou)" },
      },
      required: ["subjectName", "lessonNumber", "markType"],
    },
  },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, context } = await req.json();

    const GEMINI_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");
    if (!GEMINI_KEY) {
      return new Response(JSON.stringify({ error: "GOOGLE_GEMINI_API_KEY não configurada." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const today = new Date().toISOString().split("T")[0];
    const dayOfWeek = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"][new Date().getDay()];

    const systemPrompt = `Você é um assistente pessoal inteligente do Habitus, um aplicativo de organização de vida. Responda sempre em português brasileiro de forma amigável e concisa.

Data de hoje: ${today} (${dayOfWeek})

Contexto do usuário:
${context ? JSON.stringify(context) : "Nenhum contexto disponível"}

Suas capacidades:
- Criar tarefas com título, descrição, prioridade e data
- Criar transações financeiras (receitas e despesas)
- Criar hábitos para acompanhamento
- Criar contas a pagar/receber
- Criar metas pessoais
- Agendar eventos de estudo (aulas, revisões, questões) para as matérias cadastradas
- Deletar tarefas, transações, hábitos, contas e metas
- Consultar informações (saldo, tarefas, hábitos, metas, progresso de estudos)

Regras:
- Quando o usuário pedir para criar algo, use a tool call apropriada
- Quando o usuário pedir para deletar/remover/excluir algo, use a tool de delete apropriada
- Se houver ambiguidade sobre qual item deletar, liste as opções e peça confirmação
- Para datas relativas como "amanhã", "próxima segunda", calcule a data correta baseado em ${today}
- Se faltar informação essencial, pergunte ao usuário
- Para consultas, use query_info com o tipo adequado
- Formate respostas com markdown quando útil
- Seja proativo e sugira melhorias quando apropriado
- Categorias de despesa disponíveis: Alimentação, Transporte, Moradia, Saúde, Educação, Lazer, Vestuário, Outros
- Se o usuário não especificar prioridade para tarefas, use "Média"
- Se o usuário não especificar categoria para despesas, use "Outros"
- Quando o usuário mencionar turno/período do dia, mapeie: "manhã/de manhã" → morning, "tarde/à tarde" → afternoon, "noite/à noite" → evening
- Para agendar estudos, use create_schedule_event. O campo subjectName deve corresponder ao nome da matéria no contexto.
- Para marcar que o usuário ESTUDOU/FEZ/CONCLUIU uma aula (teoria), use complete_lesson com markType "theory"
- Para marcar que o usuário FEZ A REVISÃO/REVISOU uma aula, use complete_lesson com markType "review"`;

    // Convert messages from OpenAI format to Gemini format
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${GEMINI_KEY}`;
    const requestBody = JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents,
      tools: [{ functionDeclarations: FUNCTION_DECLARATIONS }],
    });

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    const buildSseFromGateway = (assistantMessage: any) => {
      const parts: Array<Record<string, unknown>> = [];

      const content = assistantMessage?.content;
      if (typeof content === "string" && content.trim()) {
        parts.push({ text: content });
      } else if (Array.isArray(content)) {
        const text = content
          .filter((c: any) => c?.type === "text" && typeof c?.text === "string")
          .map((c: any) => c.text)
          .join("\n");
        if (text.trim()) parts.push({ text });
      }

      const toolCalls = assistantMessage?.tool_calls ?? [];
      for (const tc of toolCalls) {
        const name = tc?.function?.name;
        if (!name) continue;

        let args: Record<string, unknown> = {};
        const rawArgs = tc?.function?.arguments;
        if (typeof rawArgs === "string" && rawArgs.trim()) {
          try {
            args = JSON.parse(rawArgs);
          } catch {
            args = {};
          }
        }

        parts.push({ functionCall: { name, args } });
      }

      if (parts.length === 0) {
        parts.push({ text: "Desculpe, não consegui processar sua mensagem agora." });
      }

      const payload = { candidates: [{ content: { parts } }] };
      const ssePayload = `data: ${JSON.stringify(payload)}\n\ndata: [DONE]\n\n`;

      return new Response(ssePayload, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    };

    // Retry logic for 429 errors with backoff
    const MAX_RETRIES = 3;
    let lastError = "";

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      if (response.ok) {
        return new Response(response.body, {
          headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
        });
      }

      const errorText = await response.text();
      console.error(`Gemini API error (attempt ${attempt + 1}):`, response.status, errorText);

      if (response.status === 429) {
        let parsed: any = null;
        try {
          parsed = JSON.parse(errorText);
        } catch {
          parsed = null;
        }

        const details = parsed?.error?.details || [];
        const quotaViolation = details.find((d: any) => d["@type"]?.includes("QuotaFailure"));
        const violations = quotaViolation?.violations || [];

        const isDailyExhausted = violations.some((v: any) =>
          String(v?.quotaId || "").includes("PerDay") || String(v?.quotaLimit || "") === "0"
        );

        // If daily Gemini quota is exhausted, fallback to Lovable AI Gateway
        if (isDailyExhausted) {
          if (!LOVABLE_API_KEY) {
            return new Response(JSON.stringify({ error: "Cota diária do Gemini esgotada. Tente novamente amanhã." }), {
              status: 429,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const fallbackResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [
                { role: "system", content: systemPrompt },
                ...messages,
              ],
              tools: FUNCTION_DECLARATIONS.map((fn) => ({ type: "function", function: fn })),
              tool_choice: "auto",
            }),
          });

          if (fallbackResponse.ok) {
            const fallbackResult = await fallbackResponse.json();
            const assistantMessage = fallbackResult?.choices?.[0]?.message;
            return buildSseFromGateway(assistantMessage);
          }

          const fallbackErrorText = await fallbackResponse.text();
          console.error("Lovable AI fallback error:", fallbackResponse.status, fallbackErrorText);

          return new Response(JSON.stringify({ error: "Chat temporariamente indisponível. Tente novamente em instantes." }), {
            status: 503,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        // Temporary rate limit - retry with backoff
        const retryInfo = details.find((d: any) => d["@type"]?.includes("RetryInfo"));
        let waitMs = (attempt + 1) * 5000 + Math.random() * 2000;
        if (retryInfo?.retryDelay) {
          const secs = parseInt(String(retryInfo.retryDelay), 10);
          if (!isNaN(secs)) waitMs = secs * 1000 + Math.random() * 1000;
        }

        if (attempt < MAX_RETRIES - 1) {
          console.log(`Rate limited, retrying in ${Math.round(waitMs)}ms...`);
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }

        lastError = "Limite de requisições atingido. Aguarde alguns segundos e tente novamente.";
      } else {
        lastError = "Erro no serviço de IA. Tente novamente mais tarde.";
        break; // Don't retry non-429 errors
      }
    }

    const statusCode = /limite|cota/i.test(lastError) ? 429 : 500;
    return new Response(JSON.stringify({ error: lastError || "Erro no serviço de IA." }), {
      status: statusCode,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat-assistant error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
