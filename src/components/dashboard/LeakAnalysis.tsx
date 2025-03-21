
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BarChart2Icon,
  Clock3Icon,
  DollarSignIcon,
  LightbulbIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  
  const handleFixNow = (leakTitle: string) => {
    toast({
      title: "Optimization started",
      description: `Working on fixing: ${leakTitle}`,
    });
  };

  return (
    <Card
      className={cn(
        className
      )}
    >
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <AlertTriangleIcon className="h-5 w-5 text-destructive" />
          <span>Top Revenue Leaks</span>
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
        <div className="space-y-4">
          {leakItems.map((leak) => (
            <Card
              key={leak.id}
              className="p-4 hover:shadow-md transition-all duration-200 border-l-4 overflow-hidden"
              style={{
                borderLeftColor: leak.impact === "high" 
                  ? "hsl(var(--leak-high))" 
                  : leak.impact === "medium" 
                  ? "hsl(var(--leak-medium))" 
                  : "hsl(var(--leak-low))"
              }}
            >
              <div className="flex justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">{leak.title}</h4>
                    <Badge 
                      variant={
                        leak.impact === "high" 
                          ? "destructive" 
                          : leak.impact === "medium" 
                          ? "default" 
                          : "outline"
                      }
                      className="text-[10px] py-0 h-4"
                    >
                      {leak.impact}
                    </Badge>
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

              <div className="mt-3 p-3 bg-accent/20 rounded-lg text-xs border border-accent/30">
                <div className="flex items-start gap-2">
                  <LightbulbIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p>{leak.description}</p>
                </div>
              </div>

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
                  size="sm"
                  className="h-8 text-xs px-3"
                  onClick={() => handleFixNow(leak.title)}
                >
                  Fix Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
