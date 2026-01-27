import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function About() {
  const skills = ["Digital Strategy", "Brand Architecture", "React & Node", "Stakeholder Management"];

  return (
    <section id="about" className="py-32 bg-black/20 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            {/* Abstract Profile Image Representation */}
            <div className="relative aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime via-ion-cyan to-electric-violet rounded-3xl opacity-20 blur-2xl rotate-6 animate-pulse-slow" />
               <div className="absolute inset-0 border border-white/10 rounded-3xl bg-deep-basalt/80 backdrop-blur-xl flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                     <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-full mx-auto flex items-center justify-center border border-white/10 shadow-2xl">
                        <span className="text-4xl">👋</span>
                     </div>
                     <div className="space-y-2">
                        <div className="text-white font-bold font-display text-xl">The Strategist</div>
                        <div className="text-gray-500 font-mono text-sm">US-Based • Australian Focus</div>
                     </div>
                  </div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 glass-panel px-4 py-2 rounded-lg text-sm font-mono text-volt-lime border-volt-lime/30 animate-float" style={{ animationDelay: "1s" }}>
                 15+ Years Exp
               </div>
               <div className="absolute -bottom-6 -left-6 glass-panel px-4 py-2 rounded-lg text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "2s" }}>
                 Avid Runner 🏃
               </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
              Bridging the gap between <br/>
              <span className="text-gray-500">Academic Senate</span> & <span className="text-white">Startup Velocity</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-10">
              <p>
                I lead Digital Strategy for the University of Oregon by day. I Defriction by night. 
                Most agencies struggle to speak "University" while maintaining "Startup" speed. I do both native.
              </p>
              <p>
                My work is not just about making things look good (though they will). 
                It's about political navigation, technical feasibility, and shipping actual value.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>

            <Button variant="link" className="text-volt-lime p-0 hover:no-underline hover:text-white group">
              Read full bio <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
