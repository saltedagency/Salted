
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/leaks":
      return "Revenue Leaks";
    case "/journey":
      return "Customer Journey";
    case "/analytics":
      return "Analytics";
    case "/reports":
      return "Reports";
    case "/integrations":
      return "Integrations";
    case "/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
};

export function Header() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="h-[60px] border-b border-border px-4 sm:px-6 flex items-center justify-between bg-background/95 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-foreground">{pageTitle}</h1>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-9 h-9 rounded-full bg-accent/50 border-accent"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-accent"
        >
          <Bell className="h-5 w-5 text-foreground" />
        </Button>
        <ThemeToggle />
        <div className="hidden md:flex items-center space-x-1 ml-2 pl-2 border-l border-border">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            AD
          </div>
          <Button
            variant="ghost"
            className="flex items-center space-x-1 hover:bg-accent rounded-full h-8 px-2"
          >
            <span className="text-sm font-medium">Admin</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
