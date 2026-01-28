import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function MonashSwitcher() {
  const [switcherOpen, setSwitcherOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/monash/prototype') {
       return window.location.pathname === '/monash/prototype' || window.location.pathname === '/monash/prototype/';
    }
    return window.location.pathname.includes(path);
  };

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
          switcherOpen ? "bg-white/20 rotate-0" : "rotate-180"
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
            className="absolute bottom-full right-0 mb-6 w-72 p-2 rounded-xl bg-[#0B0F19] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-[150] overflow-hidden"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="space-y-1 relative z-10">
              <a 
                href="/monash/prototype/hifi"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "flex flex-col px-4 py-3 rounded-lg transition-all duration-200 group text-left relative overflow-hidden",
                  isActive('/monash/prototype/hifi') 
                    ? "bg-blue-500/10 border border-blue-500/20" 
                    : "hover:bg-white/5 border border-transparent"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-medium text-sm transition-colors flex items-center gap-2",
                    isActive('/monash/prototype/hifi') ? "text-blue-400" : "text-white group-hover:text-blue-400"
                  )}>
                    High-Fidelity UI
                  </span>
                  {isActive('/monash/prototype/hifi') && (
                    <motion.div layoutId="active-check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                      <Check className="w-4 h-4 text-blue-400" />
                    </motion.div>
                  )}
                </div>
                <span className={cn(
                  "text-xs mt-0.5 transition-colors",
                  isActive('/monash/prototype/hifi') ? "text-blue-400/70" : "text-gray-500 group-hover:text-gray-400"
                )}>
                  Polished Interface
                </span>
                {isActive('/monash/prototype/hifi') && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                )}
              </a>

              <a 
                href="/monash/prototype"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "flex flex-col px-4 py-3 rounded-lg transition-all duration-200 group text-left relative overflow-hidden",
                  isActive('/monash/prototype') 
                    ? "bg-blue-500/10 border border-blue-500/20" 
                    : "hover:bg-white/5 border border-transparent"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-medium text-sm transition-colors flex items-center gap-2",
                    isActive('/monash/prototype') ? "text-blue-400" : "text-white group-hover:text-blue-400"
                  )}>
                    Low-Fidelity Wireframe
                  </span>
                  {isActive('/monash/prototype') && (
                    <motion.div layoutId="active-check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                      <Check className="w-4 h-4 text-blue-400" />
                    </motion.div>
                  )}
                </div>
                <span className={cn(
                  "text-xs mt-0.5 transition-colors",
                  isActive('/monash/prototype') ? "text-blue-400/70" : "text-gray-500 group-hover:text-gray-400"
                )}>
                  Structure & Layout
                </span>
                {isActive('/monash/prototype') && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                )}
              </a>

              <a 
                href="/monash/prototype/docs"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "flex flex-col px-4 py-3 rounded-lg transition-all duration-200 group text-left relative overflow-hidden",
                  isActive('/monash/prototype/docs') 
                    ? "bg-blue-500/10 border border-blue-500/20" 
                    : "hover:bg-white/5 border border-transparent"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-medium text-sm transition-colors flex items-center gap-2",
                    isActive('/monash/prototype/docs') ? "text-blue-400" : "text-white group-hover:text-blue-400"
                  )}>
                    Information Architecture
                  </span>
                  {isActive('/monash/prototype/docs') && (
                    <motion.div layoutId="active-check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                      <Check className="w-4 h-4 text-blue-400" />
                    </motion.div>
                  )}
                </div>
                <span className={cn(
                  "text-xs mt-0.5 transition-colors",
                  isActive('/monash/prototype/docs') ? "text-blue-400/70" : "text-gray-500 group-hover:text-gray-400"
                )}>
                  Documentation
                </span>
                {isActive('/monash/prototype/docs') && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                )}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}