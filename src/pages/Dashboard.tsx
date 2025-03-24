
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { IncomeTracker } from "@/components/dashboard/IncomeTracker";
import { RecentProjects } from "@/components/dashboard/RecentProjects";
import { ConnectSection } from "@/components/dashboard/ConnectSection";
import { PremiumFeatures } from "@/components/dashboard/PremiumFeatures";
import { ProposalProgress } from "@/components/dashboard/ProposalProgress";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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
    <div className="space-y-6 pb-10">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IncomeTracker isLoading={isLoading} />
        </div>
        <div>
          <RecentProjects isLoading={isLoading} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <ConnectSection />
        </div>
        <div>
          <PremiumFeatures />
        </div>
        <div>
          <ProposalProgress />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
