import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: unknown;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown) {
    console.error("[ErrorBoundary caught]", error);
  }

  private handleReload = async () => {
    try {
      if ("serviceWorker" in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) {
          await reg.update();
        }
      }
    } catch {}
    window.location.reload();
  };

  private handleClearAndReload = async () => {
    try {
      if ("serviceWorker" in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) {
          await reg.unregister();
        }
      }
      if ("caches" in window) {
        const names = await caches.keys();
        for (const name of names) {
          await caches.delete(name);
        }
      }
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      console.error("[ErrorBoundary] Erro ao limpar cache:", e);
    } finally {
      window.location.href = window.location.origin + window.location.pathname + "?t=" + Date.now();
    }
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const message =
      this.state.error instanceof Error
        ? this.state.error.message
        : "Ocorreu um erro inesperado.";

    return (
      <main className="min-h-screen w-full p-6">
        <Card className="mx-auto max-w-xl p-6">
          <h1 className="text-xl font-semibold">Algo deu errado</h1>
          <p className="mt-2 text-sm text-muted-foreground">{message}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button onClick={this.handleReload}>Recarregar</Button>
            <Button variant="outline" onClick={this.handleClearAndReload}>
              Limpar dados e recarregar
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Se o problema persistir, pode ser cache do navegador. Faça um hard
            reload (Ctrl+Shift+R / Cmd+Shift+R).
          </p>
        </Card>
      </main>
    );
  }
}
