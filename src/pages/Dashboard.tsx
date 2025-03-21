
import { useEffect, useState } from "react";
import { BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KeyMetricsSection } from "@/components/dashboard/KeyMetricsSection";
import { RevenueLeakageSection } from "@/components/dashboard/RevenueLeakageSection";
import { CustomerJourneySection } from "@/components/dashboard/CustomerJourneySection";
import { RevenueLeaksSection } from "@/components/dashboard/RevenueLeaksSection";
import { QuickOptimizeButton } from "@/components/dashboard/QuickOptimizeButton";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [visibleSections, setVisibleSections] = useState({
    keyMetrics: true,
    revenueTrends: true,
    leakage: true,
    customerJourney: true,
    revenueLeaks: true
  });

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dashboard updated",
        description: "Latest data has been loaded successfully",
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="space-y-8 pb-10">
      <DashboardHeader />
      
      {visibleSections.keyMetrics && (
        <KeyMetricsSection isLoading={isLoading} />
      )}

      {(visibleSections.revenueTrends || visibleSections.leakage) && (
        <RevenueLeakageSection 
          showRevenueTrends={visibleSections.revenueTrends} 
          showLeakage={visibleSections.leakage}
        />
      )}

      {visibleSections.customerJourney && (
        <CustomerJourneySection />
      )}

      {visibleSections.revenueLeaks && (
        <RevenueLeaksSection />
      )}

      <QuickOptimizeButton />
    </div>
  );
};

export default Dashboard;
