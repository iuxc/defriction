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
      <div className="flex-1 overflow-auto relative prototype-theme">
        <Router base="/monash/prototype">
          <style>{`
            .prototype-theme {
              --background: 0 0% 100%;
              --foreground: 222.2 84% 4.9%;
              --card: 0 0% 100%;
              --card-foreground: 222.2 84% 4.9%;
              --popover: 0 0% 100%;
              --popover-foreground: 222.2 84% 4.9%;
              --primary: 222.2 47.4% 11.2%;
              --primary-foreground: 210 40% 98%;
              --secondary: 210 40% 96.1%;
              --secondary-foreground: 222.2 47.4% 11.2%;
              --muted: 210 40% 96.1%;
              --muted-foreground: 215.4 16.3% 46.9%;
              --accent: 210 40% 96.1%;
              --accent-foreground: 222.2 47.4% 11.2%;
              --destructive: 0 84.2% 60.2%;
              --destructive-foreground: 210 40% 98%;
              --border: 214.3 31.8% 91.4%;
              --input: 214.3 31.8% 91.4%;
              --ring: 222.2 84% 4.9%;
              --radius: 0.5rem;
            }
          `}</style>
          <MonashApp />
        </Router>
      </div>
    </div>
  );
}
