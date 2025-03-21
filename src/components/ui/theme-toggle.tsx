
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme, ThemeType } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: ThemeType; label: string; icon: JSX.Element }[] = [
    { 
      value: "light", 
      label: "Light", 
      icon: <Sun className="h-4 w-4 mr-2" /> 
    },
    { 
      value: "dark", 
      label: "Dark", 
      icon: <Moon className="h-4 w-4 mr-2" /> 
    },
    { 
      value: "purple", 
      label: "Purple", 
      icon: <Palette className="h-4 w-4 mr-2 text-purple-500" /> 
    },
    { 
      value: "blue", 
      label: "Blue", 
      icon: <Palette className="h-4 w-4 mr-2 text-blue-500" /> 
    }
  ];

  const currentThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5 text-foreground transition-all" />;
      case "dark":
        return <Moon className="h-5 w-5 text-foreground transition-all" />;
      case "purple":
        return <Palette className="h-5 w-5 text-foreground transition-all text-purple-500" />;
      case "blue":
        return <Palette className="h-5 w-5 text-foreground transition-all text-blue-500" />;
      default:
        return <Sun className="h-5 w-5 text-foreground transition-all" />;
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent"
              >
                {currentThemeIcon()}
                <span className="sr-only">Change theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <DropdownMenuContent align="end">
            {themeOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setTheme(option.value)}
                className="flex items-center cursor-pointer"
              >
                {option.icon}
                {option.label}
                {theme === option.value && (
                  <span className="ml-auto text-xs font-medium text-primary">Active</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent>
          <p>Change theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
