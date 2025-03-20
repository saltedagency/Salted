
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const categories = [
  {
    name: "Checkout Process",
    amount: "$42,500",
    percentage: 32,
    change: 12,
    trend: "up"
  },
  {
    name: "Subscription Churn",
    amount: "$38,200",
    percentage: 29,
    change: -8,
    trend: "down"
  },
  {
    name: "Cart Abandonment",
    amount: "$27,300",
    percentage: 21,
    change: 5,
    trend: "up"
  },
  {
    name: "Failed Payments",
    amount: "$25,000",
    percentage: 18,
    change: -15,
    trend: "down"
  }
];

export function LeakageByCategory() {
  return (
    <div className="glass-card p-5 rounded-xl animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Leakage by Category</h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{category.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{category.amount}</span>
                <div 
                  className={cn(
                    "flex items-center text-xs font-medium px-1.5 py-0.5 rounded",
                    category.trend === "up" 
                      ? "text-destructive bg-destructive/10" 
                      : "text-success bg-success/10"
                  )}
                >
                  {category.trend === "up" ? (
                    <ArrowUpIcon className="h-3 w-3 mr-0.5" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 mr-0.5" />
                  )}
                  {Math.abs(category.change)}%
                </div>
              </div>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className={cn(
                  "h-2 rounded-full",
                  category.trend === "up" ? "bg-destructive" : "bg-success"
                )} 
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">
              {category.percentage}% of total leakage
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
