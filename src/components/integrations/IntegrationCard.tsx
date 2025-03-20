
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

interface IntegrationCardProps {
  title: string;
  description: string;
  status: "connected" | "disconnected";
  logo: string;
}

export function IntegrationCard({
  title,
  description,
  status,
  logo,
}: IntegrationCardProps) {
  return (
    <div className="glass-card p-5 rounded-xl animate-fade-in hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center overflow-hidden">
          <img src={logo} alt={title} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">{title}</h3>
            <div
              className={cn(
                "text-xs px-2 py-0.5 rounded-full flex items-center gap-1",
                status === "connected"
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive"
              )}
            >
              {status === "connected" ? (
                <>
                  <CheckCircle2Icon className="h-3 w-3" />
                  <span>Connected</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="h-3 w-3" />
                  <span>Disconnected</span>
                </>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          <div className="mt-4">
            <Button
              variant={status === "connected" ? "outline" : "default"}
              size="sm"
              className="w-full text-xs"
            >
              {status === "connected" ? "Manage Connection" : "Connect"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
