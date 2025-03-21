
import { cn } from "@/lib/utils";
import {
  InfoIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  description?: string;
  className?: string;
  loading?: boolean;
  prefix?: string;
  suffix?: string;
}

export function MetricCard({
  title,
  value,
  change,
  trend = "neutral",
  icon,
  description,
  className,
  loading = false,
  prefix = "",
  suffix = "",
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "p-5 rounded-xl transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]",
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <span>{title}</span>
        </h3>
        
        {description && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="h-3.5 w-3.5 text-muted-foreground cursor-help hover:text-primary transition-colors" />
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs bg-popover">
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      <div className="flex items-baseline mt-1">
        {loading ? (
          <div className="h-8 w-24 bg-accent animate-pulse rounded"></div>
        ) : (
          <h2 className="text-2xl font-semibold text-foreground">
            {prefix}{value}{suffix}
          </h2>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center mt-3 bg-card/80 p-2 rounded-lg border border-border/10">
          {trend === "up" ? (
            <TrendingUpIcon className="h-4 w-4 text-success mr-1.5" />
          ) : trend === "down" ? (
            <TrendingDownIcon className="h-4 w-4 text-destructive mr-1.5" />
          ) : null}
          <span
            className={cn(
              "text-xs font-medium",
              trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </span>
          <span className="text-xs text-muted-foreground ml-1.5">vs. previous period</span>
        </div>
      )}
    </Card>
  );
}
