import { Home, Briefcase, Zap, User, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";

export function MobileBottomNav() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const navItems = [
    { name: "Home", icon: Home, href: "#hero", id: "hero" },
    { name: "Work", icon: Briefcase, href: "#work", id: "work" },
    { name: "Method", icon: Zap, href: "#method", id: "method" },
    { name: "About", icon: User, href: "#about", id: "about" },
  ];

  const centerItems = ["work", "method", "about"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "method", "about", "contact"];
      let current = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t safe-area-bottom transition-colors duration-300",
        theme === "light" 
          ? "bg-white/90 border-gray-200" 
          : "bg-deep-basalt/90 border-white/10"
      )}
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center h-16 px-2 pt-1">
        {/* Home button - outside glass */}
        <button
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Navigate to Home section"
          aria-current={activeSection === "hero" ? "true" : undefined}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 min-w-[50px] focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-lime",
            activeSection === "hero"
              ? theme === "light" ? "text-electric-violet" : "text-volt-lime"
              : theme === "light" ? "text-gray-400" : "text-gray-500"
          )}
        >
          <Home className={cn(
            "w-5 h-5 transition-transform",
            activeSection === "hero" && !prefersReducedMotion && "scale-110"
          )} aria-hidden="true" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {/* Center 3 items with Liquid Glass effect */}
        <div className={cn(
          "flex gap-0.5 p-1 rounded-full border backdrop-blur-xl relative shadow-lg",
          theme === "light"
            ? "bg-white/60 border-gray-300/50 shadow-black/5"
            : "bg-white/5 border-white/10"
        )}>
          {navItems.filter(item => centerItems.includes(item.id)).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-label={`Navigate to ${item.name} section`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-0.5 py-2 px-4 rounded-full transition-colors duration-200 min-w-[55px] z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-lime",
                  isActive 
                    ? theme === "light" ? "text-electric-violet font-bold" : "text-white font-semibold"
                    : theme === "light" ? "text-gray-600" : "text-gray-400"
                )}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.div
                    layoutId="mobile-active-pill"
                    className={cn(
                      "absolute inset-0 rounded-full border shadow-lg backdrop-blur-xl",
                      theme === "light"
                        ? "bg-white/80 border-electric-violet/40 shadow-electric-violet/20"
                        : "bg-gradient-to-r from-volt-lime/20 via-ion-cyan/20 to-electric-violet/20 border-white/20"
                    )}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span className="text-[9px] font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Contact button - outside glass with orange accent */}
        <button
          onClick={(e) => handleNavClick(e, "#contact")}
          aria-label="Navigate to Contact section"
          aria-current={activeSection === "contact" ? "true" : undefined}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 min-w-[50px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400",
            activeSection === "contact"
              ? "text-orange-500"
              : "text-orange-400/70"
          )}
        >
          <Mail className={cn(
            "w-5 h-5 transition-transform",
            activeSection === "contact" && !prefersReducedMotion && "scale-110"
          )} aria-hidden="true" />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
      </div>
    </nav>
  );
}
