import { cn } from "@/lib/utils";

const sections = [
  { id: "dashboard", label: "1. Dashboard" },
  { id: "chat", label: "2. Assistente (Chat)" },
  { id: "metas", label: "3. Metas" },
  { id: "tarefas", label: "4. Tarefas" },
  { id: "estudos", label: "5. Estudos" },
  { id: "financas", label: "6. Finanças" },
  { id: "saude", label: "7. Saúde" },
  { id: "config", label: "8. Configurações" },
];

export default function ManualSidebar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden lg:block sticky top-20 w-48 shrink-0 space-y-1 self-start">
      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Índice</p>
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="block w-full text-left text-sm px-3 py-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
