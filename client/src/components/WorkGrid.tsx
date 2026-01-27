import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export function WorkGrid() {
  const projects = [
    {
      id: "monash",
      title: "Monash University",
      subtitle: "Unifying 40,000+ pathways",
      tags: ["Strategy", "IA"],
      link: "/work/monash",
      color: "border-l-volt-lime",
    },
    {
      id: "aesop",
      title: "Aesop",
      subtitle: "Decoding the product filter",
      tags: ["UX", "Commerce"],
      link: "#",
      color: "border-l-ion-cyan",
    },
    {
      id: "bom",
      title: "BOM",
      subtitle: "Designing for disaster visibility",
      tags: ["Brand", "Data"],
      link: "#",
      color: "border-l-flux-orange",
    },
  ];

  return (
    <section id="work" className="py-24 bg-deep-basalt border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-white/20 flex-1" />
          <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Selected Work</h2>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm ${index === 0 ? "via-volt-lime/50" : index === 1 ? "via-ion-cyan/50" : "via-flux-orange/50"}`} />
              <Card className={`relative h-full bg-deep-basalt border border-white/10 rounded-none hover:border-white/30 transition-all duration-300 flex flex-col ${project.color} border-l-4`}>
                <CardHeader className="pb-4">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-mono text-xs rounded-none border-white/20 text-gray-400 bg-transparent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 font-light text-lg">{project.subtitle}</p>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between rounded-none border border-white/10 hover:bg-white/5 hover:text-white group-hover:border-white/30"
                  >
                    <Link href={project.link}>
                      <span className="font-mono uppercase tracking-wider">
                        {project.link === "#" ? "Coming Soon" : "[ View Case Study ]"}
                      </span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
