import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, Home } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Work", href: "/#work", id: "work" },
    { name: "Method", href: "/#method", id: "method" },
    { name: "About", href: "/#about", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navItems.map(item => item.id);
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is near the viewing area (top third)
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <Link href="/#">
      <a className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>
      </a>
    </Link>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-4 bg-deep-basalt/80 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {/* Home Icon */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center transition-all duration-300 group px-2 hover:opacity-80"
          >
            <Home className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isBioPage = location === "/bio" && item.id === "about";
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 flex items-center gap-2",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                  onClick={() => setActiveSection(item.id)}
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
                  
                  {isBioPage && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono text-volt-lime tracking-tight"
                    >
                      The Human
                    </motion.span>
                  )}
                </a>
              );
            })}
          </div>
          <Button 
            className="bg-gradient-to-b from-volt-lime/20 to-volt-lime/5 text-volt-lime hover:from-volt-lime/30 hover:to-volt-lime/10 border border-volt-lime/20 rounded-full px-6 transition-all duration-300 shadow-[inset_0_1px_0_rgba(212,255,0,0.2)] hover:shadow-[0_0_20px_rgba(212,255,0,0.2)] backdrop-blur-md"
            asChild
          >
            <a href="#contact">Start Project</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-deep-basalt border-l border-white/10 w-[300px]">
              <div className="flex flex-col gap-8 mt-8">
                 <Logo />
                 <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => {
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-lg font-medium text-gray-300 hover:text-white text-left flex items-center gap-2"
                  >
                    <Home className="w-5 h-5" /> Home
                  </button>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        activeSection === item.id ? "text-volt-lime" : "text-gray-300 hover:text-white"
                      )}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a href="#contact" className="text-lg font-medium text-volt-lime">
                    Start Project
                  </a>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
