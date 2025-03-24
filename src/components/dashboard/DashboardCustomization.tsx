
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Settings2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardSection {
  id: string;
  name: string;
  visible: boolean;
}

export function DashboardCustomization() {
  const { toast } = useToast();
  const [sections, setSections] = useState<DashboardSection[]>([
    { id: "income-tracker", name: "Income Tracker", visible: true },
    { id: "recent-projects", name: "Recent Projects", visible: true },
    { id: "connect", name: "Let's Connect", visible: true },
    { id: "premium", name: "Premium Features", visible: true },
    { id: "proposals", name: "Proposal Progress", visible: true },
  ]);
  
  const toggleSection = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, visible: !section.visible } : section
      )
    );
  };

  const handleSave = () => {
    // In a real app, we would save this to user preferences in a database
    // For now, we'll just toast the success
    toast({
      title: "Dashboard customized",
      description: "Your dashboard layout has been updated",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-gray-50 border-gray-200 text-gray-700">
          <Settings2 className="h-4 w-4" />
          Customize
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Customize Your Dashboard</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Select which sections to display on your dashboard:
          </p>
          {sections.map((section) => (
            <div key={section.id} className="flex items-center space-x-2">
              <Checkbox 
                id={section.id}
                checked={section.visible}
                onCheckedChange={() => toggleSection(section.id)}
              />
              <Label htmlFor={section.id}>{section.name}</Label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
