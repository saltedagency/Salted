
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon, ArrowRightIcon, DollarSignIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

  // Calculate total leaks for progress percentage
  const totalLeaks = highPriorityLeaks + mediumPriorityLeaks + lowPriorityLeaks;
  const optimizationProgress = 23; // This would come from a real calculation in a production app

  return (
    <Card
      className={cn(
        "h-full",
        className
      )}
    >
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <AlertTriangleIcon className="h-5 w-5 text-destructive" />
          <span>Revenue Leakage</span>
        </CardTitle>
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
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <DollarSignIcon className="h-5 w-5 text-foreground mr-1" />
              <h2 className="text-3xl font-bold text-gradient">{formattedLoss}</h2>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Estimated annual revenue loss
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/80 border border-border/50 hover:bg-accent/20 transition-all cursor-help">
                    <div className="w-4 h-4 rounded-full bg-leak-high mb-2 animate-pulse-gentle"></div>
                    <p className="text-sm font-semibold">{highPriorityLeaks}</p>
                    <p className="text-xs text-muted-foreground">High</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">High priority revenue leaks requiring immediate attention</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/80 border border-border/50 hover:bg-accent/20 transition-all cursor-help">
                    <div className="w-4 h-4 rounded-full bg-leak-medium mb-2"></div>
                    <p className="text-sm font-semibold">{mediumPriorityLeaks}</p>
                    <p className="text-xs text-muted-foreground">Medium</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">Medium priority issues that should be addressed soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-card/80 border border-border/50 hover:bg-accent/20 transition-all cursor-help">
                    <div className="w-4 h-4 rounded-full bg-leak-low mb-2"></div>
                    <p className="text-sm font-semibold">{lowPriorityLeaks}</p>
                    <p className="text-xs text-muted-foreground">Low</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">Low priority issues that can be addressed over time</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="bg-card/80 rounded-lg p-4 border border-border/50 mt-2">
            <div className="flex justify-between mb-2">
              <span className="text-xs text-muted-foreground">Optimization progress</span>
              <span className="text-xs font-medium">{optimizationProgress}%</span>
            </div>
            <Progress value={optimizationProgress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {totalLeaks} issues identified, {Math.round(totalLeaks * optimizationProgress / 100)} resolved
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
