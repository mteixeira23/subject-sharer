import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const systemPrompt = `Você é um parser de extratos bancários brasileiros. Dado o texto de um extrato bancário em PDF, extraia TODAS as transações encontradas.

Para cada transação, retorne:
- date: data no formato YYYY-MM-DD
- description: descrição/histórico da transação
- amount: valor absoluto (sempre positivo)
- type: "income" para créditos/entradas, "expense" para débitos/saídas

REGRAS IMPORTANTES:
- Identifique o formato de data usado (DD/MM/YYYY, DD/MM/YY, etc) e converta para YYYY-MM-DD
- Valores negativos ou com sinal de débito (D, -, débito) são "expense"
- Valores positivos ou com sinal de crédito (C, +, crédito) são "income"
- Ignore saldos, totais, cabeçalhos e rodapés
- Retorne APENAS as transações individuais
- Se não conseguir extrair transações, retorne um array vazio
- NÃO inclua "Saldo do dia", "SALDO", "Saldo anterior", "Saldo Final", "Total Aplicações", "S A L D O" como transações. Estes são saldos, NÃO transações.
- Se o PDF tiver páginas duplicadas com as mesmas transações repetidas, extraia cada transação APENAS UMA VEZ. Não duplique.
- Considere apenas movimentações reais: Pix, TED, DOC, compras, pagamentos, transferências, depósitos, saques, tarifas.
- "Pix - Rejeitado", "Pix devolvido", "Estorno" e devoluções similares marcadas com sinal positivo (+) ou crédito (C) são transações do tipo "income" (o dinheiro voltou para a conta). Respeite SEMPRE o sinal indicado no extrato — (+) ou crédito = "income", (-) ou débito = "expense".
- Se o extrato apresentar "Rendimento líquido", "Rendimentos", "Juros" ou valores similares no resumo/cabeçalho, inclua-os como uma transação com a descrição original (ex: "Rendimento líquido"). Use a data do último dia do período do extrato como data da transação. Se o valor for positivo, use type "income"; se o valor for negativo (prejuízo/desvalorização), use type "expense". O amount deve ser sempre o valor absoluto.`;

const tools = [
  {
    type: "function",
    function: {
      name: "extract_transactions",
      description: "Retorna as transações extraídas do extrato bancário",
      parameters: {
        type: "object",
        properties: {
          transactions: {
            type: "array",
            items: {
              type: "object",
              properties: {
                date: { type: "string", description: "Data no formato YYYY-MM-DD" },
                description: { type: "string", description: "Descrição da transação" },
                amount: { type: "number", description: "Valor absoluto da transação" },
                type: { type: "string", enum: ["income", "expense"], description: "Tipo: income ou expense" },
              },
              required: ["date", "description", "amount", "type"],
              additionalProperties: false,
            },
          },
        },
        required: ["transactions"],
        additionalProperties: false,
      },
    },
  },
];

const toolChoice = { type: "function", function: { name: "extract_transactions" } };

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { text, pdfBase64 } = await req.json();

    const hasText = text && typeof text === "string" && text.trim().length >= 50;
    const hasPdf = pdfBase64 && typeof pdfBase64 === "string";

    if (!hasText && !hasPdf) {
      return new Response(JSON.stringify({ error: "Campo 'text' ou 'pdfBase64' é obrigatório" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Build messages based on input type
    let messages: any[];
    if (hasText) {
      messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Extraia as transações do seguinte extrato bancário:\n\n${text}` },
      ];
    } else {
      // Multimodal: send PDF as inline data for vision
      messages = [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: [
            { type: "text", text: "Extraia as transações deste extrato bancário em PDF." },
            {
              type: "image_url",
              image_url: {
                url: `data:application/pdf;base64,${pdfBase64}`,
              },
            },
          ],
        },
      ];
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages,
        tools,
        tool_choice: toolChoice,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes para processar o extrato." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro ao processar extrato com IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = await response.json();

    const toolCall = result.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      return new Response(JSON.stringify({ error: "IA não retornou dados estruturados", transactions: [] }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const parsed = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ transactions: parsed.transactions || [] }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("parse-bank-statement error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
