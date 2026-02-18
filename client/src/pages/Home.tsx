import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { WorkGrid } from "@/components/WorkGrid";
import { WhyMe } from "@/components/WhyMe";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-basalt text-white selection:bg-volt-lime selection:text-black overflow-y-auto pb-16 md:pb-0">
      <Navigation />
      <main id="main-content">
        <Hero />
        <TheProblem />
        <WorkGrid />
        <WhyMe />
        <About />
        <Contact />
      </main>
      
      <footer className="hidden md:block py-8 pb-8 bg-black border-t border-white/10">
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
      
      <MobileBottomNav />
    </div>
  );
}
