
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { LeakageIndicator } from "@/components/dashboard/LeakageIndicator";

interface RevenueLeakageSectionProps {
  showRevenueTrends: boolean;
  showLeakage: boolean;
}

export function RevenueLeakageSection({ 
  showRevenueTrends, 
  showLeakage
}: RevenueLeakageSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {showRevenueTrends && (
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-medium">Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <RevenueChart />
          </CardContent>
        </Card>
      )}
      {showLeakage && (
        <div>
          <LeakageIndicator
            totalLoss="$133,000"
            highPriorityLeaks={2}
            mediumPriorityLeaks={3}
            lowPriorityLeaks={1}
          />
        </div>
      )}
    </section>
  );
}
