import { Lightbulb } from "lucide-react";

export default function TipBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20 my-4 not-prose">
      <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <div className="text-sm text-foreground">{children}</div>
    </div>
  );
}
