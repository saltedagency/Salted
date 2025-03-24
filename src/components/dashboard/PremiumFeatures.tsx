
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function PremiumFeatures() {
  return (
    <Card className="overflow-hidden border-0 shadow-sm h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">Unlock Premium Features</h3>
        <p className="text-sm text-gray-300 mb-8">
          Get access to exclusive benefits and expand your freelancing opportunities
        </p>
        
        <Button 
          variant="outline" 
          className="w-full justify-between bg-white/10 hover:bg-white/20 border-white/20 text-white"
        >
          <span>Upgrade now</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
