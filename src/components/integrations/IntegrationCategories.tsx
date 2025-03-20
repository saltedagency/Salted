
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

interface IntegrationCategoriesProps {
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export function IntegrationCategories({ 
  activeCategory = "all", 
  onCategoryChange
}: IntegrationCategoriesProps) {
  const [internalActiveCategory, setInternalActiveCategory] = useState(activeCategory);
  
  const handleCategoryChange = (categoryId: string) => {
    setInternalActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };
  
  // Use the passed activeCategory if provided, otherwise use internal state
  const currentCategory = activeCategory || internalActiveCategory;

  return (
    <div className="rounded-lg border border-border/50 bg-card/90 p-4 mb-4">
      <h3 className="text-sm font-medium mb-3 text-foreground">Integration Categories</h3>
      <div className="flex overflow-x-auto gap-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="sm"
            className={cn(
              "text-xs whitespace-nowrap transition-colors",
              currentCategory === category.id && "bg-accent/50 border-accent font-medium"
            )}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
