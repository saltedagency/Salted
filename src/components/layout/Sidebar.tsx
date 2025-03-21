
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BarChart2, Home, LineChart, PieChart, Settings, Users, ChevronLeft, ChevronRight, LayoutDashboard, FileText, Layers, CreditCard, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const sidebarLinks = [{
  title: "Dashboard",
  icon: <LayoutDashboard className="h-5 w-5" />,
  href: "/dashboard"
}, {
  title: "Revenue Leaks",
  icon: <AlertTriangle className="h-5 w-5" />,
  href: "/leaks"
}, {
  title: "Customer Journey",
  icon: <Layers className="h-5 w-5" />,
  href: "/journey"
}, {
  title: "Analytics",
  icon: <BarChart2 className="h-5 w-5" />,
  href: "/analytics"
}, {
  title: "Reports",
  icon: <FileText className="h-5 w-5" />,
  href: "/reports"
}, {
  title: "Integrations",
  icon: <CreditCard className="h-5 w-5" />,
  href: "/integrations"
}, {
  title: "Settings",
  icon: <Settings className="h-5 w-5" />,
  href: "/settings"
}];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn(
      "bg-sidebar border-r border-border flex flex-col h-screen sticky top-0 z-30 transition-all duration-300 ease-in-out",
      collapsed ? "w-[70px]" : "w-[240px]"
    )}>
      <div className="flex items-center p-4 border-b border-border h-[60px]">
        {!collapsed && (
          <span className="font-semibold text-lg text-sidebar-foreground animate-fade-in bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Sal+ed
          </span>
        )}
        <div className={cn(!collapsed && "ml-auto")}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-full hover:bg-sidebar-accent text-primary"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex-grow py-4 overflow-y-auto scrollbar-thin">
        <nav className="space-y-1 px-2">
          {sidebarLinks.map(link => (
            <TooltipProvider key={link.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.href 
                        ? "bg-sidebar-accent text-primary shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                      collapsed && "justify-center"
                    )}
                  >
                    <span className={cn("text-primary", collapsed ? "m-0" : "mr-3")}>{link.icon}</span>
                    {!collapsed && <span className="animate-fade-in">{link.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    <p>{link.title}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-border">
        <div className={cn("flex items-center", collapsed ? "justify-center" : "justify-start")}>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            AD
          </div>
          {!collapsed && (
            <div className="ml-3 animate-fade-in">
              <p className="text-sm font-medium text-sidebar-foreground">
                Admin
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
