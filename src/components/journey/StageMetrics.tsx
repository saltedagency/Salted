
import { cn } from "@/lib/utils";
import { AlertTriangleIcon, CheckCircleIcon } from "lucide-react";

const stages = [
  {
    name: "Website Visit",
    current: "100%",
    benchmark: "100%",
    status: "success"
  },
  {
    name: "Product View",
    current: "42%",
    benchmark: "52%",
    status: "warning"
  },
  {
    name: "Add to Cart",
    current: "21%",
    benchmark: "34%",
    status: "critical"
  },
  {
    name: "Checkout",
    current: "18%",
    benchmark: "25%",
    status: "warning"
  },
  {
    name: "Purchase",
    current: "12%",
    benchmark: "15%",
    status: "warning"
  },
  {
    name: "Retention",
    current: "6.8%",
    benchmark: "10%",
    status: "critical"
  }
];

export function StageMetrics() {
  return (
    <div className="glass-card p-5 rounded-xl animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Stage Performance</h3>
      <div className="space-y-3">
        {stages.map((stage) => (
          <div 
            key={stage.name} 
            className="p-3 rounded-lg bg-card/50 border border-border/30 hover:bg-accent/10 transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {stage.status === "success" ? (
                  <CheckCircleIcon className="h-4 w-4 text-success" />
                ) : stage.status === "critical" ? (
                  <AlertTriangleIcon className="h-4 w-4 text-leak-high" />
                ) : (
                  <AlertTriangleIcon className="h-4 w-4 text-leak-medium" />
                )}
                <span className="text-sm font-medium">{stage.name}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">{stage.current}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">Target: </span>
                  <span className="text-xs font-medium">{stage.benchmark}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
