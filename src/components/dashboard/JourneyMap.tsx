
import { cn } from "@/lib/utils";
import {
  CircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

type JourneyStage = {
  id: string;
  name: string;
  conversionRate: number;
  benchmark: number;
  leakSeverity?: "low" | "medium" | "high" | null;
  lossAmount?: string;
};

const journeyStages: JourneyStage[] = [
  {
    id: "stage-1",
    name: "Website Visit",
    conversionRate: 100,
    benchmark: 100,
    leakSeverity: null,
    lossAmount: "$0",
  },
  {
    id: "stage-2",
    name: "Product View",
    conversionRate: 42,
    benchmark: 52,
    leakSeverity: "medium",
    lossAmount: "$15,400",
  },
  {
    id: "stage-3",
    name: "Add to Cart",
    conversionRate: 21,
    benchmark: 34,
    leakSeverity: "high",
    lossAmount: "$38,200",
  },
  {
    id: "stage-4",
    name: "Checkout",
    conversionRate: 18,
    benchmark: 25,
    leakSeverity: "low",
    lossAmount: "$9,100",
  },
  {
    id: "stage-5",
    name: "Purchase",
    conversionRate: 12,
    benchmark: 15,
    leakSeverity: "medium",
    lossAmount: "$17,800",
  },
  {
    id: "stage-6",
    name: "Retention",
    conversionRate: 6.8,
    benchmark: 10,
    leakSeverity: "high",
    lossAmount: "$52,500",
  },
];

interface JourneyMapProps {
  className?: string;
}

export function JourneyMap({ className }: JourneyMapProps) {
  const [showBenchmark, setShowBenchmark] = useState(true);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const handleStageClick = (stageId: string) => {
    setSelectedStage(selectedStage === stageId ? null : stageId);
  };

  return (
    <div
      className={cn(
        "glass-card p-5 rounded-xl w-full animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Customer Journey Map</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBenchmark(!showBenchmark)}
            className={cn(
              "text-xs h-8",
              showBenchmark && "bg-accent/50 border-accent"
            )}
          >
            {showBenchmark ? "Hide Benchmark" : "Show Benchmark"}
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">
                  This visualization shows the customer journey with conversion rates at each stage.
                  Colored indicators show potential revenue leaks compared to industry benchmarks.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-2">
        <div className="flex items-center justify-between min-w-[700px]">
          {journeyStages.map((stage, index) => (
            <div
              key={stage.id}
              className="flex flex-col items-center relative"
            >
              <div
                className={cn(
                  "cursor-pointer transition-all duration-300 transform",
                  selectedStage === stage.id ? "scale-110" : "hover:scale-105"
                )}
                onClick={() => handleStageClick(stage.id)}
              >
                {stage.leakSeverity ? (
                  <div
                    className={cn(
                      "rounded-full w-10 h-10 flex items-center justify-center border-2",
                      stage.leakSeverity === "high"
                        ? "border-leak-high text-leak-high"
                        : stage.leakSeverity === "medium"
                        ? "border-leak-medium text-leak-medium"
                        : "border-leak-low text-leak-low"
                    )}
                  >
                    <AlertTriangleIcon className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="rounded-full w-10 h-10 flex items-center justify-center border-2 border-success text-success">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                )}
              </div>

              <p className="text-xs font-medium mt-2 text-center">{stage.name}</p>
              <p className="text-xs text-muted-foreground text-center">
                {stage.conversionRate}%
              </p>

              {showBenchmark && (
                <div className="mt-1 flex items-center">
                  <div
                    className={cn(
                      "h-1 w-1 rounded-full mr-1",
                      stage.conversionRate < stage.benchmark
                        ? "bg-leak-high"
                        : "bg-success"
                    )}
                  ></div>
                  <p className="text-xs text-muted-foreground">
                    Benchmark: {stage.benchmark}%
                  </p>
                </div>
              )}

              {index < journeyStages.length - 1 && (
                <div className="absolute top-5 left-[calc(100%_-_5px)] w-[calc(100%_+_10px)] h-[2px] bg-border"></div>
              )}
              
              {selectedStage === stage.id && stage.leakSeverity && (
                <div className="absolute top-full mt-2 z-10 w-44 glass-card rounded-lg p-3 border border-border/50 animate-slide-up">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-medium">Revenue Loss</h4>
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        stage.leakSeverity === "high"
                          ? "bg-leak-high"
                          : stage.leakSeverity === "medium"
                          ? "bg-leak-medium"
                          : "bg-leak-low"
                      )}
                    ></div>
                  </div>
                  <p className="text-sm font-semibold">{stage.lossAmount}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stage.conversionRate}% vs {stage.benchmark}% benchmark
                  </p>
                  <Button className="w-full mt-2 h-7 text-xs" variant="outline">View Details</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
