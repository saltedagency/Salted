
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  InfoIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <div
      className={cn(
        "glass-card p-5 rounded-xl animate-scale-in",
        className
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon}
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
        <div className="flex items-center mt-2">
          {trend === "up" ? (
            <TrendingUpIcon className="h-4 w-4 text-success mr-1" />
          ) : trend === "down" ? (
            <TrendingDownIcon className="h-4 w-4 text-destructive mr-1" />
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
          <span className="text-xs text-muted-foreground ml-1">vs. previous period</span>
          
          {description && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-3.5 w-3.5 text-muted-foreground ml-1 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-xs">{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      )}
    </div>
  );
}
