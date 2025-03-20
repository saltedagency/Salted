
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

// Sample data - would be fetched from API in a real app
const revenueData = [
  { date: "Jan", current: 2400, previous: 2000, potential: 2800 },
  { date: "Feb", current: 1800, previous: 1700, potential: 2600 },
  { date: "Mar", current: 2800, previous: 2200, potential: 3400 },
  { date: "Apr", current: 2600, previous: 2300, potential: 3200 },
  { date: "May", current: 3000, previous: 2500, potential: 3600 },
  { date: "Jun", current: 2900, previous: 2700, potential: 3500 },
  { date: "Jul", current: 3200, previous: 2800, potential: 3800 },
  { date: "Aug", current: 3400, previous: 3000, potential: 4100 },
  { date: "Sep", current: 3500, previous: 3200, potential: 4400 },
  { date: "Oct", current: 3700, previous: 3500, potential: 4600 },
  { date: "Nov", current: 3900, previous: 3600, potential: 4800 },
  { date: "Dec", current: 4100, previous: 3800, potential: 5000 },
];

interface ChartProps {
  className?: string;
  showPotential?: boolean;
  showPrevious?: boolean;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg shadow-sm border border-border/50">
        <p className="text-sm font-medium mb-1">{label}</p>
        <div className="space-y-1">
          {payload[0] && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <p className="text-xs text-foreground">
                Current: ${payload[0].value?.toLocaleString()}
              </p>
            </div>
          )}
          {payload[1] && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/50 mr-2"></div>
              <p className="text-xs text-foreground">
                Previous: ${payload[1].value?.toLocaleString()}
              </p>
            </div>
          )}
          {payload[2] && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary/20 mr-2"></div>
              <p className="text-xs text-foreground">
                Potential: ${payload[2].value?.toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export function RevenueChart({
  className,
  showPotential = true,
  showPrevious = true,
}: ChartProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering the chart
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "glass-card p-5 rounded-xl w-full h-[350px] animate-pulse",
          className
        )}
      ></div>
    );
  }

  const getColors = () => {
    return {
      current: theme === "dark" ? "#60a5fa" : "#3b82f6",
      previous: theme === "dark" ? "#6b7280" : "#9ca3af",
      potential: theme === "dark" ? "#93c5fd" : "#bfdbfe",
      grid: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
      text: theme === "dark" ? "#f3f4f6" : "#1f2937",
    };
  };

  const colors = getColors();

  return (
    <div
      className={cn(
        "glass-card p-5 rounded-xl w-full h-[350px] animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Revenue Trend</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-xs text-muted-foreground">Current</span>
          </div>
          {showPrevious && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/50 mr-2"></div>
              <span className="text-xs text-muted-foreground">Previous</span>
            </div>
          )}
          {showPotential && (
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary/20 mr-2"></div>
              <span className="text-xs text-muted-foreground">Potential</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.current} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.current} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="previousGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.previous} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.previous} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="potentialGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.potential} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.potential} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: colors.text }}
              tickLine={false}
              axisLine={{ stroke: colors.grid }}
            />
            <YAxis
              tickFormatter={(value) => `$${value/1000}k`}
              tick={{ fontSize: 12, fill: colors.text }}
              tickLine={false}
              axisLine={false}
              width={50}
            />
            <Tooltip content={<CustomTooltip />} />
            {showPrevious && (
              <Area
                type="monotone"
                dataKey="previous"
                stroke={colors.previous}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#previousGradient)"
              />
            )}
            <Area
              type="monotone"
              dataKey="current"
              stroke={colors.current}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#currentGradient)"
            />
            {showPotential && (
              <Area
                type="monotone"
                dataKey="potential"
                stroke={colors.potential}
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={1}
                fill="url(#potentialGradient)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
