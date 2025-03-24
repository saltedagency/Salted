
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
    <div className="flex h-screen w-full bg-gray-200/50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main
          className={cn(
            "flex-1 overflow-auto p-6 transition-opacity duration-500",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="container mx-auto h-full max-w-7xl bg-white/40 backdrop-blur-sm p-8 rounded-3xl shadow-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
