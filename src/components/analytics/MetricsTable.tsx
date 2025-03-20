
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const metrics = [
  {
    name: "Monthly Revenue",
    current: "$127,432",
    previous: "$118,543",
    change: 7.5,
    trend: "up",
  },
  {
    name: "Average Order Value",
    current: "$89.32",
    previous: "$91.24",
    change: 2.1,
    trend: "down",
  },
  {
    name: "Conversion Rate",
    current: "3.2%",
    previous: "2.9%",
    change: 10.3,
    trend: "up",
  },
  {
    name: "Churn Rate",
    current: "8.7%",
    previous: "8.6%",
    change: 1.2,
    trend: "down",
  },
  {
    name: "Customer Acquisition Cost",
    current: "$42.18",
    previous: "$45.67",
    change: 7.6,
    trend: "up",
  },
  {
    name: "Customer Lifetime Value",
    current: "$437",
    previous: "$412",
    change: 6.1,
    trend: "up",
  },
];

export function MetricsTable() {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead className="text-right">Current Period</TableHead>
            <TableHead className="text-right">Previous Period</TableHead>
            <TableHead className="text-right">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.name}>
              <TableCell className="font-medium">{metric.name}</TableCell>
              <TableCell className="text-right font-medium">{metric.current}</TableCell>
              <TableCell className="text-right text-muted-foreground">{metric.previous}</TableCell>
              <TableCell className="text-right">
                <div 
                  className={cn(
                    "flex items-center justify-end text-xs font-medium px-1.5 py-0.5 rounded",
                    (metric.trend === "up" && metric.name === "Churn Rate") || (metric.trend === "down" && metric.name !== "Churn Rate") 
                      ? "text-destructive bg-destructive/10"
                      : "text-success bg-success/10"
                  )}
                >
                  {(metric.trend === "up" && metric.name !== "Churn Rate") || (metric.trend === "down" && metric.name === "Churn Rate") ? (
                    <ArrowUpIcon className="h-3 w-3 mr-0.5" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 mr-0.5" />
                  )}
                  {metric.change}%
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
