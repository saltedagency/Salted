
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, LineChart, ArrowRightIcon, Download } from "lucide-react";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AnalyticsFilters } from "@/components/analytics/AnalyticsFilters";
import { MetricsTable } from "@/components/analytics/MetricsTable";

const Analytics = () => {
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
      <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-primary" />
            <span>Performance Analytics</span>
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs h-8 hover:bg-accent flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5 mr-1" />
              <span>Export Data</span>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="text-xs h-8 flex items-center gap-1"
            >
              <span>Schedule Reports</span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
        
        <AnalyticsFilters />
        
        <Tabs defaultValue="revenue" className="w-full mt-4">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="mt-0">
            <RevenueChart />
          </TabsContent>
          <TabsContent value="conversion" className="mt-0">
            <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">Conversion analytics coming soon</p>
            </div>
          </TabsContent>
          <TabsContent value="engagement" className="mt-0">
            <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">Engagement metrics coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" />
              <span>Key Metrics</span>
            </h3>
          </div>
          <MetricsTable />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
