
import { cn } from "@/lib/utils";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const schedules = [
  {
    id: "schedule-1",
    name: "Weekly Revenue Summary",
    frequency: "Every Monday at 9:00 AM",
    recipients: "3 recipients",
    nextDate: "Jun 12, 2023",
  },
  {
    id: "schedule-2",
    name: "Monthly Leakage Report",
    frequency: "1st of every month",
    recipients: "5 recipients",
    nextDate: "Jul 1, 2023",
  },
  {
    id: "schedule-3",
    name: "Quarterly Performance",
    frequency: "Every 3 months",
    recipients: "2 recipients",
    nextDate: "Sep 30, 2023",
  },
];

export function ReportSchedule() {
  return (
    <div className="space-y-3">
      {schedules.map((schedule) => (
        <div
          key={schedule.id}
          className="p-3 rounded-lg bg-card/50 border border-border/30 hover:bg-accent/10 transition-all duration-200"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">{schedule.name}</h4>
            <div className="flex items-center gap-1 text-xs px-1.5 py-0.5 bg-success/10 text-success rounded">
              <CheckCircle2Icon className="h-3 w-3" />
              <span>Active</span>
            </div>
          </div>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Frequency:</span>
              <span className="text-xs">{schedule.frequency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Recipients:</span>
              <span className="text-xs">{schedule.recipients}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Next Run:</span>
              <span className="text-xs">{schedule.nextDate}</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3 text-xs h-7"
          >
            Edit Schedule
          </Button>
        </div>
      ))}
      <Button
        variant="default"
        size="sm"
        className="w-full text-xs"
      >
        Create New Schedule
      </Button>
    </div>
  );
}
