import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function MonashSwitcher() {
  const [switcherOpen, setSwitcherOpen] = useState(false);

  return (
    <div className="pointer-events-auto relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSwitcherOpen(!switcherOpen);
        }}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
          "hover:bg-white/20 hover:scale-105 active:scale-95",
          switcherOpen ? "bg-white/20 rotate-180" : ""
        )}
      >
        <ChevronDown className="w-4 h-4 text-white" />
      </button>

      <AnimatePresence>
        {switcherOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-0 mb-6 w-72 p-2 rounded-xl bg-[#0B0F19] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[150] overflow-hidden"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="space-y-1 relative z-10">
              <a 
                href="/monash/prototype/hifi"
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group text-left"
              >
                <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  High-Fidelity UI
                  {window.location.pathname.includes('/hifi') && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </span>
                <span className="text-gray-500 text-xs mt-0.5">Polished Interface</span>
              </a>
              <a 
                href="/monash/prototype"
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group text-left"
              >
                <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  Low-Fidelity Wireframe
                  {(window.location.pathname === '/monash/prototype' || window.location.pathname === '/monash/prototype/') && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </span>
                <span className="text-gray-500 text-xs mt-0.5">Structure & Layout</span>
              </a>
              <a 
                href="/monash/prototype/docs"
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group text-left"
              >
                <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  Information Architecture
                  {window.location.pathname.includes('/docs') && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </span>
                <span className="text-gray-500 text-xs mt-0.5">Documentation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}