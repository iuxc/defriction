import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "/#work" },
    { name: "Method", href: "/#method" },
    { name: "About", href: "/#about" },
  ];

  const Logo = () => (
    <Link href="/">
      <a className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-volt-lime to-ion-cyan flex items-center justify-center">
          <span className="font-bold text-black text-lg">D</span>
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">DEFRICTION</span>
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
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button 
            className="bg-volt-lime/10 text-volt-lime hover:bg-volt-lime hover:text-black border border-volt-lime/20 rounded-full px-6 transition-all duration-300"
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
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-300 hover:text-volt-lime transition-colors"
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
