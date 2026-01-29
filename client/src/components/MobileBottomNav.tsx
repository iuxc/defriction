import { Home, Briefcase, Zap, User, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

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
    window.addEventListener("scroll", handleScroll);
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
        ? "bg-white/95 border-gray-200" 
        : "bg-deep-basalt/95 border-white/10"
    )}>
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 min-w-[60px]",
                isActive 
                  ? theme === "light" ? "text-electric-violet" : "text-volt-lime"
                  : theme === "light" ? "text-gray-400 active:text-gray-900" : "text-gray-500 active:text-white"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-transform",
                isActive && "scale-110"
              )} />
              <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
            </button>
          );
        })}
        
        <button
          onClick={(e) => handleNavClick(e, "#contact")}
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 min-w-[60px]",
            activeSection === "contact"
              ? "text-orange-500"
              : "text-orange-400/70 active:text-orange-500"
          )}
        >
          <Mail className={cn(
            "w-5 h-5 transition-transform",
            activeSection === "contact" && "scale-110"
          )} />
          <span className="text-[10px] font-medium tracking-wide">Contact</span>
        </button>
      </div>
    </nav>
  );
}
