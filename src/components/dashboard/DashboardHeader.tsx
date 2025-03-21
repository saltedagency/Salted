
import { Button } from "@/components/ui/button";
import { DashboardCustomization } from "./DashboardCustomization";

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Track your key metrics and revenue performance</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="text-xs h-8">
          Last 30 Days
        </Button>
        <DashboardCustomization />
      </div>
    </div>
  );
}
