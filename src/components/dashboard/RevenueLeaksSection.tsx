
import { LeakAnalysis } from "@/components/dashboard/LeakAnalysis";

export function RevenueLeaksSection() {
  return (
    <section>
      <div className="mb-2">
        <h2 className="text-xl font-medium mb-1">Top Revenue Leaks</h2>
        <p className="text-sm text-muted-foreground">Address these high-impact issues to recover lost revenue</p>
      </div>
      <LeakAnalysis />
    </section>
  );
}
