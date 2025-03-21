
import { BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function QuickOptimizeButton() {
  const { toast } = useToast();
  
  const handleOptimizeClick = () => {
    toast({
      title: "Optimization Started",
      description: "We're analyzing your data for quick wins",
    });
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center"
        onClick={handleOptimizeClick}
      >
        <BarChart2 className="h-6 w-6" />
      </Button>
    </div>
  );
}
