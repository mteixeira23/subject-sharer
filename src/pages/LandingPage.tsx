import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  LayoutDashboard,
  Target,
  CheckSquare,
  BookOpen,
  Wallet,
  HeartPulse,
  Check,
  Zap,
} from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

const features = [
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'Visão geral unificada de todas as áreas da sua vida.' },
  { icon: Target, title: 'Metas', desc: 'Defina objetivos e acompanhe seu progresso em tempo real.' },
  { icon: CheckSquare, title: 'Tarefas', desc: 'Organize tarefas diárias, recorrentes e por prioridade.' },
  { icon: BookOpen, title: 'Estudos', desc: 'Gerencie matérias, aulas e sessões Pomodoro.' },
  { icon: Wallet, title: 'Finanças', desc: 'Controle receitas, despesas e contas bancárias.' },
  { icon: HeartPulse, title: 'Saúde', desc: 'Acompanhe treinos, hábitos e bem-estar.' },
];

const benefits = [
  'Acesso a todos os módulos',
  'Sincronização na nuvem',
  'Modo escuro futurista',
  'Relatórios e gráficos',
  'Suporte prioritário',
  'Atualizações contínuas',
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <BrandLogo size={40} />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
            Entrar
          </Button>
          <Button size="sm" onClick={() => navigate('/auth')}>
            Cadastrar
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 gap-6">
        <BrandLogo size={144} />
        <Badge variant="secondary" className="text-xs px-3 py-1">
          <Zap className="h-3 w-3 mr-1" /> Sua vida organizada em um só lugar
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
          Organize sua vida com o{' '}
          <span className="text-primary">Habitus</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
          App pessoal completo para metas, tarefas, estudos, finanças e saúde — tudo sincronizado na nuvem.
        </p>
        <div className="flex gap-3 mt-2">
          <Button size="lg" onClick={() => navigate('/auth')}>
            Comece Agora
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Preço
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Tudo que você precisa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="px-6 py-16 max-w-lg mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Plano simples, preço justo
        </h2>
        <Card className="border-2 border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <Badge className="rounded-none rounded-bl-lg text-xs">Popular</Badge>
          </div>
          <CardHeader className="text-center pt-8 pb-2">
            <CardTitle className="text-lg">Plano Completo</CardTitle>
            <div className="mt-4">
              <span className="text-5xl font-extrabold">R$9,90</span>
              <span className="text-muted-foreground text-lg">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="pb-8">
            <ul className="space-y-3 my-6">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button className="w-full" size="lg" onClick={() => navigate('/auth')}>
              Começar Agora
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Habitus. Todos os direitos reservados.</p>
        <button
          className="mt-2 text-primary hover:underline text-sm"
          onClick={() => navigate('/auth')}
        >
          Já tem uma conta? Entrar
        </button>
      </footer>
    </div>
  );
}
