import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function About() {
  const skills = ["Digital Strategy", "Brand Architecture", "React & Node", "Stakeholder Management"];

  return (
    <section id="about" className="min-h-screen py-32 bg-deep-basalt relative border-y border-white/5 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            {/* Profile Image */}
            <div className="relative aspect-square max-w-md mx-auto group">
               <div className="absolute inset-0 bg-gradient-to-tr from-volt-lime via-ion-cyan to-electric-violet rounded-3xl opacity-20 blur-2xl rotate-6 group-hover:opacity-40 transition-opacity duration-500" />
               <div className="absolute inset-0 border border-white/10 rounded-3xl bg-deep-basalt/80 backdrop-blur-xl overflow-hidden p-2">
                  <img 
                    src="/TheHuman.jpg" 
                    alt="The Human" 
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               
               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "1s" }}>
                 15+ Years Exp
               </div>
               <div className="absolute -top-4 -left-4 glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "1.5s" }}>
                 Multi-lingual 🌏
               </div>
               <div className="absolute top-1/2 -left-10 glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "2.5s" }}>
                 Flutist 🎵
               </div>
               <div className="absolute -bottom-6 -left-6 glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "2s" }}>
                 Cyclist 🚴
               </div>
               <div className="absolute -bottom-2 -right-2 glass-panel px-4 py-2 rounded-md text-sm font-mono text-ion-cyan border-ion-cyan/30 animate-float" style={{ animationDelay: "3s" }}>
                 Dog Lover 🐕
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
                I lead Digital Strategy for the University of Oregon by day. I defriction by night. 
                Most agencies struggle to speak "University" while maintaining "Startup" speed. I do both native.
              </p>
              <p>
                My work is not just about making things look good (though they will). 
                It's about political navigation, technical feasibility, and shipping actual value.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-md bg-ion-cyan/5 border border-ion-cyan/20 text-sm text-ion-cyan font-mono">
                  {skill}
                </span>
              ))}
            </div>

            <Button variant="outline" className="text-volt-lime border-volt-lime/20 hover:bg-volt-lime hover:text-black group rounded-full" asChild>
              <Link href="/bio">
                Read full bio <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
