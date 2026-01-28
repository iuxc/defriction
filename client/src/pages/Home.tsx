import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { Method } from "@/components/Method";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-basalt text-white selection:bg-volt-lime selection:text-black">
      <Navigation />
      <Hero />
      <WorkGrid />
      <Method />
      <About />
      <Contact />
      
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-left">
          <p className="font-mono text-xs text-gray-600">
            <a href="mailto:brian@defriction.design" className="hover:text-volt-lime transition-colors">
              brian@defriction.design
            </a>
          </p>
          <p className="font-mono text-xs text-gray-600 mt-2">
            © 2026 defriction design. MELBOURNE / EUGENE.
          </p>
        </div>
      </footer>
    </div>
  );
}
