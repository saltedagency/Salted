
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "payments", name: "Payments" },
  { id: "analytics", name: "Analytics" },
  { id: "marketing", name: "Marketing" },
  { id: "crm", name: "CRM" },
];

export function IntegrationCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex overflow-x-auto gap-2 pb-2 mb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          className={cn(
            "text-xs whitespace-nowrap",
            activeCategory === category.id && "bg-accent/50 border-accent"
          )}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
