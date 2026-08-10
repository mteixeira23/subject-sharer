import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import habitusIcon from "@/assets/habitus-icon.png";
import habitusLogo from "@/assets/habitus-logo.png";

async function forceDownload(src: string, filename: string) {
  const res = await fetch(src);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function DownloadLogo() {
  const assets = [
    { src: habitusLogo, label: "Logo completa", filename: "habitus-logo.png" },
    { src: habitusIcon, label: "Ícone", filename: "habitus-icon.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 bg-background">
      <h1 className="text-2xl font-bold text-foreground">Download da Logo</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {assets.map((a) => (
          <div key={a.filename} className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card">
            <img src={a.src} alt={a.label} className="w-48 h-48 object-contain" />
            <p className="text-sm text-muted-foreground">{a.label}</p>
            <Button onClick={() => forceDownload(a.src, a.filename)}>
              <Download className="mr-2 h-4 w-4" /> Baixar PNG
            </Button>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">SVG não disponível no momento. Envie o arquivo vetorial original para adicioná-lo.</p>
    </div>
  );
}
