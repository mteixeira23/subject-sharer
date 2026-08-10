import {
  LayoutDashboard, MessageCircle, Target, CheckSquare,
  BookOpen, Wallet, Heart, Dumbbell, Sparkles, Timer,
  HelpCircle, Repeat, CreditCard, Receipt, BarChart3
} from "lucide-react";

interface MindMapNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  children?: { id: string; label: string }[];
}

const nodes: MindMapNode[] = [
  {
    id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />,
    color: "hsl(var(--primary))",
    children: [
      { id: "dashboard", label: "Cards de Resumo" },
      { id: "dashboard", label: "Agenda Unificada" },
    ],
  },
  {
    id: "chat", label: "Chat IA", icon: <MessageCircle className="h-4 w-4" />,
    color: "hsl(200, 80%, 50%)",
    children: [
      { id: "chat", label: "Voz" },
      { id: "chat", label: "Histórico" },
    ],
  },
  {
    id: "metas", label: "Metas", icon: <Target className="h-4 w-4" />,
    color: "hsl(280, 70%, 55%)",
  },
  {
    id: "tarefas", label: "Tarefas", icon: <CheckSquare className="h-4 w-4" />,
    color: "hsl(38, 92%, 50%)",
    children: [
      { id: "tarefas", label: "Prioridades" },
      { id: "tarefas", label: "Recorrência" },
    ],
  },
  {
    id: "estudos", label: "Estudos", icon: <BookOpen className="h-4 w-4" />,
    color: "hsl(210, 80%, 55%)",
    children: [
      { id: "estudos", label: "Disciplinas / Aulas" },
      { id: "estudos", label: "Questões" },
      { id: "estudos", label: "Pomodoro" },
    ],
  },
  {
    id: "financas", label: "Finanças", icon: <Wallet className="h-4 w-4" />,
    color: "hsl(142, 71%, 45%)",
    children: [
      { id: "financas", label: "Contas / Transações" },
      { id: "financas", label: "Contas a Pagar" },
    ],
  },
  {
    id: "saude", label: "Saúde", icon: <Heart className="h-4 w-4" />,
    color: "hsl(0, 84%, 60%)",
    children: [
      { id: "saude-habitos", label: "Hábitos" },
      { id: "saude-atividade", label: "Atividade Física" },
    ],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(`section-${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MindMap() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex flex-col items-center gap-2 min-w-[600px]">
        {/* Central node */}
        <button
          className="px-6 py-3 rounded-xl font-bold text-lg shadow-lg border-2 border-primary bg-primary text-primary-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          HABITUS
        </button>

        {/* Connector line */}
        <div className="w-px h-4 bg-border" />

        {/* Branches */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {nodes.map((node) => (
            <div key={node.id} className="flex flex-col items-center gap-1">
              <button
                onClick={() => scrollToSection(node.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm shadow-md border transition-transform hover:scale-105"
                style={{
                  borderColor: node.color,
                  color: node.color,
                  backgroundColor: `${node.color}15`,
                }}
              >
                {node.icon}
                {node.label}
              </button>

              {node.children && (
                <>
                  <div className="w-px h-2" style={{ backgroundColor: node.color }} />
                  <div className="flex flex-col gap-1 items-center">
                    {node.children.map((child, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSection(child.id)}
                        className="text-xs px-3 py-1 rounded-md border transition-colors hover:opacity-80"
                        style={{
                          borderColor: `${node.color}60`,
                          color: node.color,
                        }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
