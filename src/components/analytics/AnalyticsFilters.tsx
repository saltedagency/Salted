
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Filter } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

export function AnalyticsFilters() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[220px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            size="sm"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : "Filter by date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger className="w-[180px] h-9">
          <SelectValue placeholder="Data Source" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sources</SelectItem>
          <SelectItem value="shopify">Shopify</SelectItem>
          <SelectItem value="stripe">Stripe</SelectItem>
          <SelectItem value="google">Google Analytics</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px] h-9">
          <SelectValue placeholder="Metrics" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="revenue">Revenue</SelectItem>
          <SelectItem value="orders">Orders</SelectItem>
          <SelectItem value="aov">AOV</SelectItem>
          <SelectItem value="churn">Churn Rate</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" className="gap-1">
        <Filter className="h-4 w-4" />
        <span>More Filters</span>
      </Button>

      <Button variant="default" size="sm">
        Apply Filters
      </Button>
    </div>
  );
}
