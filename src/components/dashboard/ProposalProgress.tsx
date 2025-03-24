
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

export function ProposalProgress() {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(currentDate);
  
  // Statistics data
  const statistics = [
    {
      title: "Proposals sent",
      value: 64,
      barColor: "bg-gray-300"
    },
    {
      title: "Interviews",
      value: 12,
      barColor: "bg-red-500"
    },
    {
      title: "Hires",
      value: 10,
      barColor: "bg-gray-800"
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/95 border-0 shadow-sm h-full">
      <CardHeader className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Proposal Progress</CardTitle>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <CalendarIcon className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {statistics.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stat.title}</span>
                <span className="text-xl font-bold">{stat.value}</span>
              </div>
              <div className="h-6 w-full bg-gray-100 rounded-md overflow-hidden">
                <div 
                  className={`h-full ${stat.barColor}`}
                  style={{ 
                    width: `${Math.min(100, (stat.value / 100) * 100)}%`,
                    // Use a repeating pattern for the bars
                    backgroundImage: index === 1 
                      ? 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)'
                      : index === 2 
                        ? 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)'
                        : ''
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
