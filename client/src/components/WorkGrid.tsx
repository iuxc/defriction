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
       gradient: "from-volt-lime/20 to-transparent",
       colSpan: "md:col-span-3",
       browserVariant: "dashboard" as const,
       browserPosition: "right"
    }
  ];

  return (
    <section id="work" className="min-h-screen py-32 bg-deep-basalt relative flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* ... content ... */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-6 backdrop-blur-md cursor-default">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
               </span>
               <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                 01. The Work
               </span>
             </div>
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
               Selected <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Work</span>
             </h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               Selected design solutions for complex ecosystems. From friction to flow.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-volt-lime group-hover:text-black transition-all duration-300 shrink-0 ml-4">
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
