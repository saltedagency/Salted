
import { useEffect, useState } from "react";
import { LeakAnalysis } from "@/components/dashboard/LeakAnalysis";
import { LeakageIndicator } from "@/components/dashboard/LeakageIndicator";
import { Button } from "@/components/ui/button";
import { BarChart2, ArrowRightIcon } from "lucide-react";
import { LeakTrends } from "@/components/leaks/LeakTrends";
import { LeakageByCategory } from "@/components/leaks/LeakageByCategory";
import { Link } from "react-router-dom";

const RevenueLeaks = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <span>Revenue Leakage Overview</span>
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-8 hover:bg-accent flex items-center gap-1"
                asChild
              >
                <Link to="/reports">
                  <span>Export Report</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Revenue leakage occurs when potential revenue is lost due to 
              inefficiencies in your customer journey or business processes. 
              The dashboard identifies where and why you're losing revenue.
            </p>
            <LeakTrends />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <LeakageIndicator
            totalLoss="$133,000"
            highPriorityLeaks={2}
            mediumPriorityLeaks={3}
            lowPriorityLeaks={1}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LeakageByCategory />
        <div className="glass-card p-5 rounded-xl animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Monthly Trend</h3>
          <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
            <p className="text-muted-foreground">Monthly leakage trend chart</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <LeakAnalysis />
      </div>
    </div>
  );
};

export default RevenueLeaks;
