
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Layout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main
          className={cn(
            "flex-1 overflow-auto p-4 sm:p-6 transition-opacity duration-500",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="container mx-auto h-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
