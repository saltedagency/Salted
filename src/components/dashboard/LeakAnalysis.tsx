
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BarChart2Icon,
  CheckCircleIcon,
  Clock3Icon,
  DollarSignIcon,
} from "lucide-react";

type LeakItem = {
  id: string;
  title: string;
  stage: string;
  impact: "high" | "medium" | "low";
  loss: string;
  effort: "high" | "medium" | "low";
  description: string;
};

const leakItems: LeakItem[] = [
  {
    id: "leak-1",
    title: "High Cart Abandonment Rate",
    stage: "Add to Cart",
    impact: "high",
    loss: "$38,200",
    effort: "low",
    description:
      "Your cart abandonment rate is 62% compared to the industry benchmark of 45%. Implementing 1-click checkout could reduce this by up to 28%.",
  },
  {
    id: "leak-2",
    title: "Low Email Capture Rate",
    stage: "Product View",
    impact: "medium",
    loss: "$15,400",
    effort: "low",
    description:
      "Only 12% of visitors provide their email compared to the benchmark of 25%. Adding an optimized popup with a discount incentive can improve this by 15%.",
  },
  {
    id: "leak-3",
    title: "High Subscription Churn",
    stage: "Retention",
    impact: "high",
    loss: "$52,500",
    effort: "medium",
    description:
      "Monthly subscription churn rate is 12.3% vs industry benchmark of 7.5%. Implementing targeted retention emails and offers before renewal could reduce churn by 30%.",
  },
];

interface LeakAnalysisProps {
  className?: string;
}

export function LeakAnalysis({ className }: LeakAnalysisProps) {
  return (
    <div
      className={cn(
        "glass-card p-5 rounded-xl w-full animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <AlertTriangleIcon className="h-5 w-5 text-destructive" />
          <span>Top Revenue Leaks</span>
        </h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs h-8 hover:bg-accent flex items-center gap-1"
        >
          <span>View all</span>
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="space-y-3">
        {leakItems.map((leak) => (
          <div
            key={leak.id}
            className="p-4 rounded-lg bg-card/50 border border-border/30 hover:bg-accent/10 transition-all duration-200"
          >
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      leak.impact === "high"
                        ? "bg-leak-high"
                        : leak.impact === "medium"
                        ? "bg-leak-medium"
                        : "bg-leak-low"
                    )}
                  ></div>
                  <h4 className="text-sm font-medium">{leak.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Stage: {leak.stage}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <DollarSignIcon className="h-3.5 w-3.5 text-foreground mr-0.5" />
                  <span className="text-sm font-semibold">{leak.loss}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Annual loss</p>
              </div>
            </div>

            <p className="text-xs mt-3 text-foreground">{leak.description}</p>

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <BarChart2Icon className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                  <span className="text-xs text-muted-foreground">
                    Impact: 
                    <span
                      className={cn(
                        "ml-1 font-medium",
                        leak.impact === "high"
                          ? "text-leak-high"
                          : leak.impact === "medium"
                          ? "text-leak-medium"
                          : "text-leak-low"
                      )}
                    >
                      {leak.impact}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock3Icon className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                  <span className="text-xs text-muted-foreground">
                    Effort: 
                    <span
                      className={cn(
                        "ml-1 font-medium",
                        leak.effort === "low"
                          ? "text-success"
                          : leak.effort === "medium"
                          ? "text-leak-medium"
                          : "text-leak-high"
                      )}
                    >
                      {leak.effort}
                    </span>
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs px-2.5"
              >
                Fix Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
