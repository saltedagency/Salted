
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  BarChart2, 
  RefreshCw,
  Plus
} from "lucide-react";
import { ReportsList } from "@/components/reports/ReportsList";
import { ReportSchedule } from "@/components/reports/ReportSchedule";

const Reports = () => {
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
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <h2 className="text-2xl font-medium flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span>Reports</span>
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1 text-xs"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Refresh</span>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="h-9 gap-1 text-xs"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Create Report</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Available Reports</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 hover:bg-accent flex items-center gap-1"
                >
                  <Filter className="h-3.5 w-3.5 mr-1" />
                  <span>Filter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8 hover:bg-accent flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5 mr-1" />
                  <span>Export All</span>
                </Button>
              </div>
            </div>
            <ReportsList />
          </div>
        </div>
        <div>
          <div className="glass-card p-5 rounded-xl w-full animate-fade-in">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Scheduled Reports</h3>
            </div>
            <ReportSchedule />
          </div>
          <div className="mt-6 glass-card p-5 rounded-xl w-full animate-fade-in">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Report Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Reports Generated</span>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Exported Reports</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Scheduled Reports</span>
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
