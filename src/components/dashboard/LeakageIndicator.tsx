
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, ArrowRightIcon, DollarSignIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LeakageIndicatorProps {
  totalLoss: string | number;
  highPriorityLeaks: number;
  mediumPriorityLeaks: number;
  lowPriorityLeaks: number;
  className?: string;
}

export function LeakageIndicator({
  totalLoss,
  highPriorityLeaks,
  mediumPriorityLeaks,
  lowPriorityLeaks,
  className,
}: LeakageIndicatorProps) {
  // If totalLoss is a string that starts with $, remove the $ since we're adding one with the icon
  const formattedLoss = typeof totalLoss === 'string' && totalLoss.startsWith('$') 
    ? totalLoss.substring(1) 
    : totalLoss;

  return (
    <div
      className={cn(
        "glass-card p-5 rounded-xl w-full animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <AlertTriangleIcon className="h-5 w-5 text-destructive" />
          <span>Revenue Leakage</span>
        </h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs h-8 hover:bg-accent flex items-center gap-1"
          asChild
        >
          <Link to="/leaks">
            <span>View all</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <DollarSignIcon className="h-5 w-5 text-foreground mr-1" />
            <h2 className="text-3xl font-bold text-gradient">{formattedLoss}</h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Estimated annual revenue loss
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 border border-border/30">
            <div className="w-4 h-4 rounded-full bg-leak-high mb-1 animate-pulse-gentle"></div>
            <p className="text-sm font-semibold">{highPriorityLeaks}</p>
            <p className="text-xs text-muted-foreground">High Priority</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 border border-border/30">
            <div className="w-4 h-4 rounded-full bg-leak-medium mb-1"></div>
            <p className="text-sm font-semibold">{mediumPriorityLeaks}</p>
            <p className="text-xs text-muted-foreground">Medium</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 border border-border/30">
            <div className="w-4 h-4 rounded-full bg-leak-low mb-1"></div>
            <p className="text-sm font-semibold">{lowPriorityLeaks}</p>
            <p className="text-xs text-muted-foreground">Low</p>
          </div>
        </div>

        <div className="w-full bg-card/50 rounded-lg p-3 border border-border/30 mt-2">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-muted-foreground">Optimization progress</span>
            <span className="text-xs font-medium">23%</span>
          </div>
          <div className="w-full bg-background rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "23%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
