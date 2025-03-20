
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { LeakageIndicator } from "@/components/dashboard/LeakageIndicator";
import { JourneyMap } from "@/components/dashboard/JourneyMap";
import { LeakAnalysis } from "@/components/dashboard/LeakAnalysis";
import { BarChart2, CreditCard, DollarSign, LineChart, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Monthly Revenue"
          value="$127,432"
          change={8.5}
          trend="up"
          icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
          description="Total subscription revenue for the current month"
          loading={isLoading}
        />
        <MetricCard
          title="Active Subscribers"
          value="2,845"
          change={5.3}
          trend="up"
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
          description="Number of paying subscribers in the current period"
          loading={isLoading}
        />
        <MetricCard
          title="Average Order Value"
          value="$89.32"
          change={-2.1}
          trend="down"
          icon={<ShoppingBag className="h-5 w-5 text-muted-foreground" />}
          description="Average transaction value per customer"
          loading={isLoading}
        />
        <MetricCard
          title="Churn Rate"
          value="8.7%"
          change={1.2}
          trend="down"
          icon={<CreditCard className="h-5 w-5 text-muted-foreground" />}
          description="Percentage of customers who cancelled this month"
          loading={isLoading}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <LeakageIndicator
            totalLoss="$133,000"
            highPriorityLeaks={2}
            mediumPriorityLeaks={3}
            lowPriorityLeaks={1}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <JourneyMap />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <LeakAnalysis />
      </div>
    </div>
  );
};

export default Dashboard;
