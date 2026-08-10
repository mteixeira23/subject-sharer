import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, Share, MoreVertical, Plus, Check, Smartphone, Monitor } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) setPlatform("ios");
    else if (/android/i.test(ua)) setPlatform("android");
    else setPlatform("desktop");

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => setInstalled(true));

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferredPrompt(null);
  };

  if (installed) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>App instalado!</CardTitle>
            <CardDescription>Você já pode acessar pelo ícone na tela inicial.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center p-6 gap-6 max-w-lg mx-auto">
      <div className="text-center space-y-2">
        <Smartphone className="h-10 w-10 mx-auto text-primary" />
        <h1 className="text-2xl font-bold">Instalar o App</h1>
        <p className="text-muted-foreground text-sm">
          Instale gratuitamente no seu dispositivo — sem loja de apps.
        </p>
      </div>

      {deferredPrompt && (
        <Button size="lg" className="w-full gap-2" onClick={handleInstall}>
          <Download className="h-5 w-5" />
          Instalar agora
        </Button>
      )}

      {platform === "ios" && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">iPhone / iPad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <Step number={1} icon={<Share className="h-4 w-4" />}>
              Toque no ícone <strong>Compartilhar</strong> (quadrado com seta para cima) na barra do Safari.
            </Step>
            <Step number={2} icon={<Plus className="h-4 w-4" />}>
              Role e toque em <strong>"Adicionar à Tela de Início"</strong>.
            </Step>
            <Step number={3} icon={<Check className="h-4 w-4" />}>
              Confirme tocando em <strong>"Adicionar"</strong>.
            </Step>
          </CardContent>
        </Card>
      )}

      {platform === "android" && !deferredPrompt && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">Android</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <Step number={1} icon={<MoreVertical className="h-4 w-4" />}>
              Toque no menu <strong>⋮</strong> (três pontos) no canto superior do navegador.
            </Step>
            <Step number={2} icon={<Download className="h-4 w-4" />}>
              Toque em <strong>"Instalar app"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
            </Step>
            <Step number={3} icon={<Check className="h-4 w-4" />}>
              Confirme tocando em <strong>"Instalar"</strong>.
            </Step>
          </CardContent>
        </Card>
      )}

      {platform === "desktop" && !deferredPrompt && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Monitor className="h-5 w-5" /> Computador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <Step number={1} icon={<Download className="h-4 w-4" />}>
              No Chrome, clique no ícone de <strong>instalar</strong> (⊕) na barra de endereço.
            </Step>
            <Step number={2} icon={<Check className="h-4 w-4" />}>
              Confirme clicando em <strong>"Instalar"</strong>.
            </Step>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Step({ number, icon, children }: { number: number; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
        {number}
      </div>
      <div className="flex items-start gap-2 pt-0.5">
        <span className="flex-shrink-0 mt-0.5 text-muted-foreground">{icon}</span>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
