import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function PrototypeNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <a href="/" className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">defriction</span>
    </a>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-4 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center gap-4">
           <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
             <a href="/#work" className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors">Work</a>
             <a href="/#method" className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors">Method</a>
             <a href="/#about" className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
           </div>

          <Button 
            className="bg-gradient-to-b from-blue-400/20 to-blue-400/5 text-blue-400 hover:from-blue-400/30 hover:to-blue-400/10 border border-blue-400/20 rounded-full px-6 transition-all duration-300 shadow-[inset_0_1px_0_rgba(96,165,250,0.2)] hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] backdrop-blur-md"
            onClick={() => window.location.href = "/#contact"}
          >
            Start Project
          </Button>
        </div>
      </div>
    </nav>
  );
}
