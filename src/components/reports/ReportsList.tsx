
import { Button } from "@/components/ui/button";
import { 
  DownloadIcon, 
  EyeIcon, 
  FileTextIcon, 
  MoreHorizontalIcon, 
  BarChart2Icon,
  LineChartIcon,
  LayersIcon
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: "report-1",
    name: "Monthly Revenue Summary",
    type: "Revenue",
    date: "May 12, 2023",
    icon: <BarChart2Icon className="h-4 w-4" />,
    iconColor: "text-primary",
  },
  {
    id: "report-2",
    name: "Quarterly Leakage Analysis",
    type: "Leakage",
    date: "Apr 1, 2023",
    icon: <LayersIcon className="h-4 w-4" />,
    iconColor: "text-destructive",
  },
  {
    id: "report-3",
    name: "Customer Journey Insights",
    type: "Journey",
    date: "Mar 15, 2023",
    icon: <LineChartIcon className="h-4 w-4" />,
    iconColor: "text-success",
  },
  {
    id: "report-4",
    name: "Yearly Performance Review",
    type: "Analytics",
    date: "Jan 5, 2023",
    icon: <BarChart2Icon className="h-4 w-4" />,
    iconColor: "text-primary",
  },
];

export function ReportsList() {
  return (
    <div className="space-y-2">
      {reports.map((report) => (
        <div 
          key={report.id}
          className="p-4 rounded-lg bg-card/50 border border-border/30 hover:bg-accent/10 transition-all duration-200 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-full bg-accent/50", report.iconColor)}>
              {report.icon}
            </div>
            <div>
              <h4 className="text-sm font-medium">{report.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-1.5 py-0.5 bg-accent/50 rounded">{report.type}</span>
                <span className="text-xs text-muted-foreground">{report.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <EyeIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <DownloadIcon className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Share Report</DropdownMenuItem>
                <DropdownMenuItem>Schedule</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}
