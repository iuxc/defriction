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
      
      <footer className="py-8 bg-black text-center border-t border-white/10">
        <p className="font-mono text-xs text-gray-600">
          hello@defriction.design
        </p>
        <p className="font-mono text-xs text-gray-600 mt-2">
          © 2026 defriction design. MELBOURNE / EUGENE.
        </p>
      </footer>
    </div>
  );
}
