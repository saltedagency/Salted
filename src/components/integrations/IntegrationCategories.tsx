
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
    <div className="flex overflow-x-auto gap-2 pb-2 mb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          className={cn(
            "text-xs whitespace-nowrap",
            currentCategory === category.id && "bg-accent/50 border-accent"
          )}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
