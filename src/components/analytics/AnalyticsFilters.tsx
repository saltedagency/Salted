
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Filter, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FilterOption {
  id: string;
  name: string;
  value: string | number | [number, number] | boolean;
  type: 'select' | 'range' | 'date' | 'boolean';
  options?: {value: string, label: string}[];
}

export function AnalyticsFilters() {
  const [date, setDate] = useState<Date>();
  const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const { toast } = useToast();

  // Temporary state for the advanced filters dialog
  const [rangeValues, setRangeValues] = useState<[number, number]>([0, 100]);
  const [selectedChannel, setSelectedChannel] = useState<string>("all");
  const [selectedCustomerSegment, setSelectedCustomerSegment] = useState<string>("all");

  const addFilter = (filter: FilterOption) => {
    // Check if filter already exists
    if (!activeFilters.some(f => f.id === filter.id)) {
      setActiveFilters([...activeFilters, filter]);
    }
    setShowAdvancedFilters(false);
    
    toast({
      title: "Filter applied",
      description: `Added filter: ${filter.name}`,
    });
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(activeFilters.filter(filter => filter.id !== filterId));
  };

  const applyFilters = () => {
    toast({
      title: "Filters applied",
      description: `${activeFilters.length} filters applied to the data`,
    });
  };

  // Fancy method to display the filter value
  const getFilterDisplayValue = (filter: FilterOption) => {
    switch (filter.type) {
      case 'range':
        const [min, max] = filter.value as [number, number];
        return `${min} - ${max}`;
      case 'date':
        return format(new Date(filter.value as string), 'PP');
      case 'boolean':
        return filter.value ? 'Yes' : 'No';
      default:
        return String(filter.value);
    }
  };

  return (
    <div className="space-y-4">
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
              onSelect={(date) => {
                setDate(date);
                if (date) {
                  addFilter({
                    id: "date",
                    name: "Date",
                    value: date.toISOString(),
                    type: "date"
                  });
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Select onValueChange={(value) => {
          if (value !== "placeholder") {
            addFilter({
              id: "dataSource",
              name: "Data Source",
              value,
              type: "select"
            });
          }
        }}>
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

        <Select onValueChange={(value) => {
          if (value !== "placeholder") {
            addFilter({
              id: "metrics",
              name: "Metrics",
              value,
              type: "select"
            });
          }
        }}>
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

        <Dialog open={showAdvancedFilters} onOpenChange={setShowAdvancedFilters}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              <span>Advanced Filters</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Advanced Filters</DialogTitle>
            </DialogHeader>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="revenue-range">
                <AccordionTrigger>Revenue Range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>${rangeValues[0]}</span>
                      <span>${rangeValues[1]}</span>
                    </div>
                    <Slider 
                      defaultValue={[0, 100]} 
                      max={1000} 
                      step={10}
                      value={rangeValues}
                      onValueChange={(value) => setRangeValues(value as [number, number])} 
                    />
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => addFilter({
                        id: "revenueRange",
                        name: "Revenue Range",
                        value: rangeValues,
                        type: "range"
                      })}
                    >
                      Apply Revenue Range
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="channel">
                <AccordionTrigger>Sales Channel</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Select
                      value={selectedChannel}
                      onValueChange={setSelectedChannel}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Channels</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                        <SelectItem value="organic">Organic</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => addFilter({
                        id: "channel",
                        name: "Sales Channel",
                        value: selectedChannel,
                        type: "select"
                      })}
                    >
                      Apply Channel Filter
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="customer-segment">
                <AccordionTrigger>Customer Segment</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Select
                      value={selectedCustomerSegment}
                      onValueChange={setSelectedCustomerSegment}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select segment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Segments</SelectItem>
                        <SelectItem value="new">New Customers</SelectItem>
                        <SelectItem value="returning">Returning Customers</SelectItem>
                        <SelectItem value="vip">VIP Customers</SelectItem>
                        <SelectItem value="at-risk">At-Risk Customers</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => addFilter({
                        id: "customerSegment",
                        name: "Customer Segment",
                        value: selectedCustomerSegment,
                        type: "select"
                      })}
                    >
                      Apply Segment Filter
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="custom-filter">
                <AccordionTrigger>Custom Filter</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="filter-name">Filter Name</Label>
                        <Input id="filter-name" placeholder="E.g., Product Category" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="filter-value">Filter Value</Label>
                        <Input id="filter-value" placeholder="E.g., Electronics" />
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        const nameInput = document.getElementById('filter-name') as HTMLInputElement;
                        const valueInput = document.getElementById('filter-value') as HTMLInputElement;
                        
                        if (nameInput.value && valueInput.value) {
                          addFilter({
                            id: `custom-${Date.now()}`,
                            name: nameInput.value,
                            value: valueInput.value,
                            type: "select"
                          });
                          nameInput.value = '';
                          valueInput.value = '';
                        }
                      }}
                    >
                      Add Custom Filter
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAdvancedFilters(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button variant="default" size="sm" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
      
      {/* Active filters display */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.map(filter => (
            <Badge key={filter.id} variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              <span className="font-medium">{filter.name}:</span> 
              <span className="text-muted-foreground">{getFilterDisplayValue(filter)}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5 ml-1 hover:bg-transparent p-0"
                onClick={() => removeFilter(filter.id)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          
          {activeFilters.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 text-xs"
              onClick={() => setActiveFilters([])}
            >
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
