
import React, { createContext, useContext, useEffect, useState } from "react";

// Define available themes
export type ThemeType = "light" | "dark" | "purple" | "blue";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    if (savedTheme && ["light", "dark", "purple", "blue"].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Check user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    
    return "light";
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
    
    // Remove all theme classes first
    document.documentElement.classList.remove("dark", "theme-purple", "theme-blue");
    
    // Add the appropriate class based on the selected theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "purple") {
      document.documentElement.classList.add("theme-purple");
    } else if (theme === "blue") {
      document.documentElement.classList.add("theme-blue");
    }
  }, [theme]);

  // Toggle between light and dark modes only
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === "light") return "dark";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
