
import { ReactNode } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme, ThemeType } from "@/context/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeDropdownProps {
  children: ReactNode;
}

export function ThemeDropdown({ children }: ThemeDropdownProps) {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
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
  );
}
