import { Home, Briefcase, Zap, User, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export function MobileBottomNav() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

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
    <nav className={cn(
      "md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t safe-area-bottom transition-colors duration-300",
      theme === "light" 
        ? "bg-white/90 border-gray-200" 
        : "bg-deep-basalt/90 border-white/10"
    )}>
      <div className="flex justify-around items-center h-16 px-2">
        {/* Home button - outside glass */}
        <button
          onClick={(e) => handleNavClick(e, "#hero")}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 min-w-[50px]",
            activeSection === "hero"
              ? theme === "light" ? "text-electric-violet" : "text-volt-lime"
              : theme === "light" ? "text-gray-400" : "text-gray-500"
          )}
        >
          <Home className={cn(
            "w-5 h-5 transition-transform",
            activeSection === "hero" && "scale-110"
          )} />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {/* Center 3 items with Liquid Glass effect */}
        <div className={cn(
          "flex gap-1 p-1 rounded-full border backdrop-blur-md relative",
          theme === "light"
            ? "bg-gray-100/80 border-gray-200/50"
            : "bg-white/5 border-white/10"
        )}>
          {navItems.filter(item => centerItems.includes(item.id)).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-0.5 py-2 px-4 rounded-full transition-colors duration-200 min-w-[55px] z-10",
                  isActive 
                    ? "text-white"
                    : theme === "light" ? "text-gray-500" : "text-gray-400"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-pill"
                    className={cn(
                      "absolute inset-0 rounded-full border shadow-lg",
                      theme === "light"
                        ? "bg-gradient-to-r from-electric-violet/90 to-purple-600/90 border-purple-400/30"
                        : "bg-gradient-to-r from-volt-lime/20 via-ion-cyan/20 to-electric-violet/20 border-white/20"
                    )}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <Icon className="w-4 h-4" />
                <span className="text-[9px] font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Contact button - outside glass with orange accent */}
        <button
          onClick={(e) => handleNavClick(e, "#contact")}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 min-w-[50px]",
            activeSection === "contact"
              ? "text-orange-500"
              : "text-orange-400/70"
          )}
        >
          <Mail className={cn(
            "w-5 h-5 transition-transform",
            activeSection === "contact" && "scale-110"
          )} />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
      </div>
    </nav>
  );
}
