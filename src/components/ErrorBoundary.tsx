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

  private handleReload = () => {
    window.location.reload();
  };

  private handleClearAndReload = () => {
    try {
      localStorage.removeItem("study-management-data");
    } finally {
      window.location.reload();
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
