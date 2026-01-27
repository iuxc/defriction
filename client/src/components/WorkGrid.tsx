import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function WorkGrid() {
  const projects = [
    {
      id: "monash",
      title: "Monash University",
      subtitle: "Unifying 40,000+ pathways.",
      tags: ["Strategy", "IA", "Education"],
      link: "/work/monash",
      gradient: "from-electric-violet/20 to-transparent",
      colSpan: "md:col-span-2"
    },
    {
      id: "aesop",
      title: "Aesop",
      subtitle: "Decoding the product filter.",
      tags: ["UX", "Commerce"],
      link: "#",
      gradient: "from-ion-cyan/20 to-transparent",
      colSpan: "md:col-span-1"
    },
    {
      id: "bom",
      title: "BOM",
      subtitle: "Designing for disaster visibility.",
      tags: ["Brand", "Data", "Government"],
      link: "#",
      gradient: "from-flux-orange/20 to-transparent",
      colSpan: "md:col-span-1"
    },
    {
       id: "internal",
       title: "Internal Tools",
       subtitle: "Stealth mode products.",
       tags: ["SaaS", "Engineering"],
       link: "#",
       gradient: "from-volt-lime/20 to-transparent",
       colSpan: "md:col-span-2"
    }
  ];

  return (
    <section id="work" className="min-h-screen py-32 bg-deep-basalt relative flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
               Selected <span className="text-gray-500">Work</span>
             </h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               A collection of strategic interventions and digital products built for scale.
             </p>
          </div>
          <div className="hidden md:block pb-2">
            <span className="font-mono text-xs text-volt-lime uppercase tracking-widest animate-pulse">
              ● System Status: Operational
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link}>
              <a className={`group block h-full ${project.colSpan}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full glass-card rounded-2xl overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="relative p-8 h-full flex flex-col justify-between min-h-[300px]">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/5 backdrop-blur-sm rounded-full px-3 py-1 font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-volt-lime group-hover:text-black transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 font-light text-lg">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
