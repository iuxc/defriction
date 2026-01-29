import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Home, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface NavigationProps {
  forcedActive?: string;
}

export function Navigation({ forcedActive }: NavigationProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(forcedActive || "");
  const { theme, toggleTheme, isMobile } = useTheme();

  const navItems = [
    { name: "Work", href: "/#work", id: "work" },
    { name: "Approach", href: "/#whyme", id: "whyme" },
    { name: "About", href: "/#about", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!forcedActive) {
        const sections = navItems.map(item => item.id);
        let current = "";
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forcedActive]);

  const Logo = ({ className, size = "default" }: { className?: string; size?: "default" | "large" }) => (
    <Link href="/#" className={cn(
      "font-display font-bold tracking-tight hover:opacity-80 transition-all duration-300 flex items-center gap-2",
      size === "large" ? "text-2xl" : "text-xl",
      className
    )} onClick={() => window.scrollTo(0, 0)}>
      <span className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        theme === "light" && isMobile ? "from-gray-900 to-gray-600" : "from-white to-gray-400"
      )}>defriction</span>
    </Link>
  );

  const handleNavClick = async (e: React.MouseEvent<HTMLElement>, target: string) => {
    e.preventDefault();
    if (location === "/") {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", target);
      }
    } else {
      window.location.href = `/${target}`;
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? cn(
              "py-5 md:py-4 backdrop-blur-xl border-b",
              theme === "light" && isMobile 
                ? "bg-white/90 border-gray-200" 
                : "bg-deep-basalt/80 border-white/5"
            )
          : "py-6 md:py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between md:justify-between items-center">
        {/* Mobile: Centered logo when scrolled, left-aligned when not */}
        <div className={cn(
          "md:hidden transition-all duration-300",
          scrolled ? "absolute left-1/2 -translate-x-1/2" : ""
        )}>
          <Logo size={scrolled ? "default" : "large"} />
        </div>
        
        {/* Mobile: Theme switch toggle - hidden for now, needs refinement */}
        
        {/* Desktop: Always left-aligned */}
        <div className="hidden md:block">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/"
            className="flex items-center justify-center transition-all duration-300 group px-2 hover:opacity-80"
            onClick={(e) => {
              if (location === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Home className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </Link>

          <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 flex items-center gap-2",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-volt-lime/10 via-ion-cyan/10 to-electric-violet/10 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>
          <Button 
            className="h-[44px] bg-gradient-to-b from-orange-400/20 to-orange-400/5 text-orange-400 hover:from-orange-400/30 hover:to-orange-400/10 border border-orange-400/20 rounded-full px-6 transition-all duration-300 shadow-[inset_0_1px_0_rgba(251,146,60,0.2)] hover:shadow-[0_0_20px_rgba(251,146,60,0.2)] backdrop-blur-md"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let's Talk
          </Button>
        </div>

        </div>
    </nav>
  );
}
