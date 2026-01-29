import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function WorkGrid() {
  const projects = [
    // ...
  ];

  const projectsData = [
    {
      id: "monash",
      title: "Monash University",
      subtitle: "Unifying the admissions journey for 40,000+ applicants.",
      tags: ["Strategy", "IA", "Education"],
      link: "/work/monash",
      gradient: "from-electric-violet/20 to-transparent",
      colSpan: "md:col-span-2",
      browserVariant: "landing" as const,
      browserPosition: "right"
    },
    {
      id: "bom",
      title: "BOM",
      subtitle: "Designing for daily delight.",
      tags: ["Brand", "Data", "Government"],
      link: "#",
      gradient: "from-flux-orange/20 to-transparent",
      colSpan: "md:col-span-1",
      browserVariant: "data" as const,
      browserPosition: "bottom"
    },
    {
       id: "internal",
       title: "Internal Tools",
       subtitle: "Stealth mode products.",
       tags: ["SaaS", "Engineering"],
       link: "#",
       gradient: "from-cyan-400/20 to-transparent",
       colSpan: "md:col-span-3",
       browserVariant: "dashboard" as const,
       browserPosition: "right"
    }
  ];

  return (
    <section id="work" className="min-h-screen md:min-h-screen h-screen md:h-auto py-16 md:py-32 bg-deep-basalt relative flex flex-col justify-center snap-start md:snap-align-none overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col h-full md:h-auto justify-center">
        {/* Header - Compact on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/10 bg-white/5 mb-3 md:mb-6 backdrop-blur-md cursor-default">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
               </span>
               <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
                 01. The Work
               </span>
             </div>
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-2 md:mb-6 text-white">
               Selected <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
             </h2>
             <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed hidden md:block">
               Selected design solutions for complex ecosystems. From friction to flow.
             </p>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden flex-1 flex flex-col justify-center min-h-0">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {projectsData.map((project, index) => (
              <Link key={project.id} href={project.link}>
                <a className="snap-center shrink-0 w-[85vw] max-w-[320px]">
                  <motion.div 
                    className="h-full glass-card rounded-2xl overflow-hidden relative min-h-[280px] flex flex-col"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    
                    <div className="relative p-5 flex flex-col h-full z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-white/5 text-gray-400 border-white/10 backdrop-blur-sm rounded-md px-2 py-0.5 font-mono text-[10px] font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 ml-2">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-display font-bold text-white">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 font-light text-sm leading-snug">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="mt-4 -mb-5 -mx-5">
                          <AbstractBrowser 
                            variant={project.browserVariant} 
                            className="w-full shadow-xl opacity-80"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {projectsData.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Link key={project.id} href={project.link}>
              <a className={`group block h-full ${project.colSpan}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full glass-card rounded-2xl overflow-hidden relative min-h-[400px] flex flex-col"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="relative p-8 flex flex-col h-full z-10">
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-400 border-white/10 backdrop-blur-sm rounded-md px-3 py-1 font-mono font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shrink-0 ml-4">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Content & Browser Layout */}
                    <div className={`flex flex-col flex-1 ${project.browserPosition === 'right' ? 'md:flex-row md:items-end gap-8' : 'justify-between gap-8'}`}>
                      
                      {/* Text Content */}
                      <div className={`space-y-3 ${project.browserPosition === 'right' ? 'md:max-w-[40%] pb-4' : ''}`}>
                        <h3 className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 font-light text-lg leading-snug">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Abstract Browser Visual */}
                      <div className={`relative ${
                        project.browserPosition === 'right' 
                          ? 'w-full md:w-[60%] -mb-8 -mr-8 translate-y-4 group-hover:translate-y-2 transition-transform duration-500' 
                          : 'w-full -mb-12 mx-auto scale-95 group-hover:scale-100 transition-transform duration-500'
                      }`}>
                         <AbstractBrowser 
                            variant={project.browserVariant} 
                            className="w-full shadow-2xl shadow-black/50 origin-top"
                         />
                      </div>

                    </div>
                  </div>
                </motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <NextSectionArrow targetId="method" />
    </section>
  );
}
