
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Visit", current: 100, benchmark: 100 },
  { name: "View", current: 42, benchmark: 52 },
  { name: "Cart", current: 21, benchmark: 34 },
  { name: "Checkout", current: 18, benchmark: 25 },
  { name: "Purchase", current: 12, benchmark: 15 },
  { name: "Retention", current: 6.8, benchmark: 10 }
];

export function JourneyComparison() {
  return (
    <div className="glass-card p-5 rounded-xl animate-fade-in">
      <h3 className="text-lg font-medium mb-4">Benchmark Comparison</h3>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <XAxis 
              dataKey="name" 
              fontSize={12} 
              tickLine={false}
              axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              formatter={(value: number) => [`${value}%`, 'Conversion Rate']}
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            />
            <Legend />
            <Bar 
              dataKey="current" 
              name="Your Rate" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="benchmark" 
              name="Industry Average" 
              fill="hsl(var(--muted-foreground))" 
              radius={[4, 4, 0, 0]}
              fillOpacity={0.6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
