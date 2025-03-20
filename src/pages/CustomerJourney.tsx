
import { useEffect, useState } from "react";
import { JourneyMap } from "@/components/dashboard/JourneyMap";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, ArrowRightIcon, Users } from "lucide-react";
import { StageMetrics } from "@/components/journey/StageMetrics";
import { JourneyComparison } from "@/components/journey/JourneyComparison";

const CustomerJourney = () => {
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
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span>Customer Journey Analysis</span>
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs h-8 hover:bg-accent flex items-center gap-1"
          >
            <span>Customize View</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          This visualization maps your customer's path from first interaction to retention.
          Each stage shows conversion rates with industry benchmarks for comparison.
        </p>
        
        <Tabs defaultValue="funnel" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
            <TabsTrigger value="funnel">Funnel View</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
          </TabsList>
          <TabsContent value="funnel" className="mt-0">
            <JourneyMap />
          </TabsContent>
          <TabsContent value="timeline" className="mt-0">
            <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">Timeline view will be available soon</p>
            </div>
          </TabsContent>
          <TabsContent value="segments" className="mt-0">
            <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
              <p className="text-muted-foreground">Segment analysis will be available soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StageMetrics />
        <div className="col-span-2">
          <JourneyComparison />
        </div>
      </div>

      <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Customer Cohort Analysis</span>
          </h3>
        </div>
        <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
          <p className="text-muted-foreground">Cohort analysis chart coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
