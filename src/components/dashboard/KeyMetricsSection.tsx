
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DollarSign, Users, ShoppingBag, CreditCard } from "lucide-react";

interface KeyMetricsSectionProps {
  isLoading: boolean;
}

export function KeyMetricsSection({ isLoading }: KeyMetricsSectionProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Key Metrics</h2>
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
  );
}
