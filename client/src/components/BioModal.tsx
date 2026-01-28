import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BioModal({ open, onOpenChange }: BioModalProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-screen h-screen md:h-auto md:w-full bg-deep-basalt border-0 md:border md:border-white/10 text-white p-0 overflow-hidden md:rounded-3xl max-h-screen md:max-h-[90vh] overflow-y-auto m-0 rounded-none duration-200 animate-in fade-in-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:right-8 md:top-8">
          <X className="h-6 w-6 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <motion.div 
          className="relative min-h-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-volt-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="p-8 md:p-12 relative z-10 flex flex-col justify-center min-h-full">
            {/* Header */}
            <motion.div variants={item}>
              <DialogHeader className="mb-8 md:mb-12 text-left">
                <DialogTitle className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  The Executive Who <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Designs</span>.
                </DialogTitle>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                  I bridge the gap between boardroom strategy and pixel-perfect execution.
                </p>
                <p className="mt-6 text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                  Hi, I’m Brian. By day, I lead Digital Strategy for the University of Oregon, managing enterprise-scale ecosystems and large teams. But I’m not just an administrator—I’m a builder at heart. <strong className="text-white">defriction</strong> is my outlet to get back to the craft I love: solving high-stakes design problems with the speed of a freelancer and the precision of an executive.
                </p>
              </DialogHeader>
            </motion.div>

            {/* Body Grid */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#C4B5FD] uppercase tracking-widest mb-2 border-b border-[#C4B5FD]/20 pb-2 inline-block">The Scale</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Led teams of <strong className="text-white">75+</strong> across multiple timezones and managed enterprise-scale digital portfolios.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#C4B5FD] uppercase tracking-widest mb-2 border-b border-[#C4B5FD]/20 pb-2 inline-block">The Wins</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Merged <strong className="text-white">8 university websites</strong> into 1 unified gateway. Founded the office that hit <strong className="text-white">#1 Accessibility Ranking</strong> in the Big Ten.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#C4B5FD] uppercase tracking-widest mb-2 border-b border-[#C4B5FD]/20 pb-2 inline-block">The System</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Pioneered the <strong className="text-white">'Rivet' Design System</strong> for Higher Ed. Scaled Rume Health ops to 20 states with <strong className="text-white">&lt;3% turnover</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <Separator className="bg-white/10 mb-8 md:mb-12" />
            </motion.div>

            {/* The Value */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-12">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative group">
                <div className="absolute -top-3 -left-3 bg-deep-basalt border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400">
                  To Leaders
                </div>
                <p className="text-lg md:text-xl font-light text-gray-300 relative z-10">
                  I navigate the bureaucracy and align stakeholders to ensure design survives to production.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative group">
                <div className="absolute -top-3 -left-3 bg-deep-basalt border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400">
                  To Makers
                </div>
                <p className="text-lg md:text-xl font-light text-gray-300 relative z-10">
                  I speak Figma, Code, and Brand. I know that speed matters and details build trust.
                </p>
              </div>
            </motion.div>

            {/* Personality Footer */}
            <motion.div variants={item} className="flex flex-col md:flex-row justify-between gap-6 pt-4 border-t border-white/5 text-sm">
              {[
                { label: "Runner", title: "Discipline", desc: "I don't miss deadlines." },
                { label: "Flutist", title: "Precision", desc: "I obsess over the details." },
                { label: "Gamer", title: "Systems", desc: "I see the mechanics behind the fun." }
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col gap-1 group cursor-default text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">// {item.title}</span>
                  </div>
                  <span className="text-gray-300 font-light">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
