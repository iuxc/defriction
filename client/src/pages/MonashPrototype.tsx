import { Router } from "wouter";
import MonashApp from "../monash-app/App";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import "../monash-app/index.css"; // Import prototype styles

export default function MonashPrototypeWrapper() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Navigation Bar */}
      <div className="flex-none h-14 border-b bg-white dark:bg-zinc-950 flex items-center px-4 z-50 shadow-sm relative">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => window.location.href = "/work/monash"} // Force hard reload/navigation to clear potential style conflicts
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Study
        </Button>
        <div className="ml-4 h-6 w-px bg-border" />
        <span className="ml-4 text-sm font-medium text-muted-foreground">
          Monash Pathways Prototype
        </span>
      </div>

      {/* Prototype Container */}
      <div className="flex-1 overflow-auto relative">
        <Router base="/monash/prototype">
          <MonashApp />
        </Router>
      </div>
    </div>
  );
}
