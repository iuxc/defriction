import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-deep-basalt/90 backdrop-blur-md border-volt-lime/20 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter hover:text-volt-lime transition-colors">
            DEFRICTION<span className="text-volt-lime">.</span>
        </Link>

        <div className="flex gap-1 md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 font-mono text-sm uppercase tracking-wider hover:text-volt-lime transition-colors border border-transparent hover:border-volt-lime/50 text-white"
            >
              [{item.name}]
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
