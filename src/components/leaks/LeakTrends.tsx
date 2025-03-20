
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", leakage: 12000, benchmark: 9000 },
  { month: "Feb", leakage: 15000, benchmark: 9200 },
  { month: "Mar", leakage: 11000, benchmark: 9300 },
  { month: "Apr", leakage: 18000, benchmark: 9500 },
  { month: "May", leakage: 14000, benchmark: 9700 },
  { month: "Jun", leakage: 16000, benchmark: 9800 },
];

export function LeakTrends() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
          <XAxis 
            dataKey="month" 
            fontSize={12} 
            tickLine={false}
            axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
          />
          <YAxis 
            fontSize={12} 
            tickFormatter={(value) => `$${value / 1000}k`}
            tickLine={false}
            axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="leakage"
            name="Revenue Leakage"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="benchmark"
            name="Industry Benchmark"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
