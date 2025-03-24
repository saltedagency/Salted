
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, LayoutDashboard } from "lucide-react";

interface IncomeTrackerProps {
  isLoading?: boolean;
}

// Sample data for the chart
const incomeData = [
  { day: "S", value: 1000 },
  { day: "M", value: 1300 },
  { day: "T", value: 2000 },
  { day: "W", value: 1200 },
  { day: "T", value: 1400 },
  { day: "F", value: 1800 },
  { day: "S", value: 1100 },
];

export function IncomeTracker({ isLoading = false }: IncomeTrackerProps) {
  const currentIncome = "$2,567";
  const percentageChange = "+20%";

  return (
    <Card className="overflow-hidden bg-white/95 border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-md">
              <LayoutDashboard className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Income Tracker</h2>
              <p className="text-sm text-gray-500 mt-1">
                Track changes in income over time and access detailed data on each project and payments received
              </p>
            </div>
          </div>
          <Select defaultValue="week">
            <SelectTrigger className="w-24 h-9 bg-white border border-gray-200 text-sm">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-8 relative">
          <div className="absolute top-1/2 left-5 -translate-y-1/2">
            <div className="text-4xl font-bold">{percentageChange}</div>
            <p className="text-sm text-gray-500 mt-1">
              This week's income is higher than last week's
            </p>
          </div>

          <div className="text-center bg-blue-900 text-white rounded-full px-3 py-1 text-sm inline-block absolute right-1/2 top-0">
            {currentIncome}
          </div>

          <div className="h-[250px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeData} margin={{ top: 50, right: 0, left: 0, bottom: 20 }}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ 
                    fill: '#9ca3af', 
                    fontSize: 12, 
                    fontWeight: 500,
                    dy: 10
                  }}
                />
                <Tooltip 
                  cursor={false}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 shadow-md rounded-md border border-gray-100">
                          <p className="text-sm font-medium">${payload[0].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#eaeaf5" 
                  radius={[10, 10, 10, 10]} 
                  barSize={30}
                  minPointSize={3}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between px-4 mt-2">
            {incomeData.map((item, index) => (
              <div 
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  item.day === 'T' && index === 2 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {item.day}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
