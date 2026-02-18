import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const SWITCHER_ITEMS = [
  {
    href: "/monash/prototype/hifi",
    label: "High-Fidelity UI",
    description: "Polished Interface",
    matchPath: "/monash/prototype/hifi",
    matchExact: false,
  },
  {
    href: "/monash/prototype",
    label: "Low-Fidelity Wireframe",
    description: "Structure & Layout",
    matchPath: "/monash/prototype",
    matchExact: true,
  },
  {
    href: "/monash/prototype/docs",
    label: "Information Architecture",
    description: "Documentation",
    matchPath: "/monash/prototype/docs",
    matchExact: false,
  },
] as const;

export function MonashSwitcher() {
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ bottom: 0, right: 0 });

  useEffect(() => {
    if (!switcherOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setSwitcherOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [switcherOpen]);

  useEffect(() => {
    if (switcherOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        bottom: window.innerHeight - rect.top + 30,
        right: window.innerWidth - rect.right,
      });
    }
  }, [switcherOpen]);

  const isActive = (item: typeof SWITCHER_ITEMS[number]) => {
    if (item.matchExact) {
      return window.location.pathname === item.matchPath || window.location.pathname === item.matchPath + '/';
    }
    return window.location.pathname.includes(item.matchPath);
  };

  return (
    <div ref={ref} className="pointer-events-auto relative">
      <button
        ref={buttonRef}
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

      {createPortal(
        <AnimatePresence>
          {switcherOpen && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="defriction-brand-scope fixed w-72 p-2 rounded-xl glass-dark border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] z-[150]"
              style={{ bottom: dropdownPos.bottom, right: dropdownPos.right }}
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-xl" />

              <div className="space-y-1 relative z-10">
                {SWITCHER_ITEMS.map((item) => {
                  const active = isActive(item);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "flex flex-col px-4 py-3 rounded-lg transition-all duration-200 group text-left relative overflow-hidden",
                        active
                          ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)_inset]"
                          : "hover:bg-white/5 hover:backdrop-blur-sm hover:border-white/10 border border-transparent"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "font-medium text-sm transition-colors flex items-center gap-2 font-sans",
                          active ? "text-white" : "text-white/70 group-hover:text-white"
                        )}>
                          {item.label}
                        </span>
                        {active && (
                          <motion.div layoutId="active-check" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <span className={cn(
                        "text-xs mt-0.5 transition-colors font-sans",
                        active ? "text-white/70" : "text-gray-500 group-hover:text-gray-400"
                      )}>
                        {item.description}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
