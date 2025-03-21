
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { ThemeToggleTooltip } from "@/components/theme/ThemeToggleTooltip";
import { ThemeDropdown } from "@/components/theme/ThemeDropdown";

export function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <ThemeToggleTooltip>
      <ThemeDropdown>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full transition-all duration-300 hover:bg-accent"
        >
          <ThemeIcon theme={theme} />
          <span className="sr-only">Change theme</span>
        </Button>
      </ThemeDropdown>
    </ThemeToggleTooltip>
  );
}

function ThemeIcon({ theme }: { theme: string }) {
  // Directly import icons instead of using require
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
}
