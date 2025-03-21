
import { Card, CardContent } from "@/components/ui/card";
import { JourneyMap } from "@/components/dashboard/JourneyMap";

export function CustomerJourneySection() {
  return (
    <section>
      <div className="mb-2">
        <h2 className="text-xl font-medium mb-1">Customer Journey</h2>
        <p className="text-sm text-muted-foreground">Visualize your customer's path and identify drop-off points</p>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <JourneyMap />
        </CardContent>
      </Card>
    </section>
  );
}
