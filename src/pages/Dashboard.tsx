
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { LeakageIndicator } from "@/components/dashboard/LeakageIndicator";
import { JourneyMap } from "@/components/dashboard/JourneyMap";
import { LeakAnalysis } from "@/components/dashboard/LeakAnalysis";
import { BarChart2, CreditCard, DollarSign, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome toast when dashboard loads
      toast({
        title: "Dashboard updated",
        description: "Latest data has been loaded successfully",
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="space-y-8 pb-10">
      {/* Section: Key Metrics */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Key Metrics</h2>
          <Button variant="outline" size="sm" className="text-xs h-8">
            Last 30 Days
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Monthly Revenue"
            value="$127,432"
            change={8.5}
            trend="up"
            icon={<DollarSign className="h-5 w-5" />}
            description="Total subscription revenue for the current month"
            loading={isLoading}
          />
          <MetricCard
            title="Active Subscribers"
            value="2,845"
            change={5.3}
            trend="up"
            icon={<Users className="h-5 w-5" />}
            description="Number of paying subscribers in the current period"
            loading={isLoading}
          />
          <MetricCard
            title="Average Order Value"
            value="$89.32"
            change={-2.1}
            trend="down"
            icon={<ShoppingBag className="h-5 w-5" />}
            description="Average transaction value per customer"
            loading={isLoading}
          />
          <MetricCard
            title="Churn Rate"
            value="8.7%"
            change={1.2}
            trend="down"
            icon={<CreditCard className="h-5 w-5" />}
            description="Percentage of customers who cancelled this month"
            loading={isLoading}
          />
        </div>
      </section>

      {/* Section: Revenue & Leakage */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-medium">Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <RevenueChart />
          </CardContent>
        </Card>
        <div>
          <LeakageIndicator
            totalLoss="$133,000"
            highPriorityLeaks={2}
            mediumPriorityLeaks={3}
            lowPriorityLeaks={1}
          />
        </div>
      </section>

      {/* Section: Customer Journey */}
      <section>
        <div className="mb-2">
          <h2 className="text-xl font-medium mb-1">Customer Journey</h2>
          <p className="text-sm text-muted-foreground">Visualize your customer's path and identify drop-off points</p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <JourneyMap />
          </CardContent>
        </Card>
      </section>

      {/* Section: Revenue Leaks */}
      <section>
        <div className="mb-2">
          <h2 className="text-xl font-medium mb-1">Top Revenue Leaks</h2>
          <p className="text-sm text-muted-foreground">Address these high-impact issues to recover lost revenue</p>
        </div>
        <LeakAnalysis />
      </section>

      {/* Floating Action Button for quick optimization */}
      <div className="fixed bottom-6 right-6 z-10">
        <Button 
          size="lg" 
          className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center"
          onClick={() => {
            toast({
              title: "Optimization Started",
              description: "We're analyzing your data for quick wins",
            });
          }}
        >
          <BarChart2 className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
