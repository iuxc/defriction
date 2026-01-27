import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface BioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BioModal({ open, onOpenChange }: BioModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-deep-basalt border-white/10 text-white p-0 overflow-hidden sm:rounded-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-volt-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="p-8 md:p-12 relative z-10">
            {/* Header */}
            <DialogHeader className="mb-12 text-left">
              <div className="flex items-center gap-3 mb-6">
                 <Badge variant="outline" className="border-volt-lime/30 text-volt-lime bg-volt-lime/5 rounded-md px-3 py-1 font-mono tracking-widest uppercase">
                   Confidential
                 </Badge>
                 <span className="text-gray-500 font-mono text-sm">// EXECUTIVE PROFILE</span>
              </div>
              
              <DialogTitle className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                The Executive who <span className="text-gray-500">Designs</span>.
              </DialogTitle>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                I bridge the gap between Boardroom strategy and Pixel-perfect execution.
              </p>
            </DialogHeader>

            {/* Body Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-ion-cyan uppercase tracking-widest mb-2 border-b border-ion-cyan/20 pb-2 inline-block">The Scale</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Led teams of <strong className="text-white">75+</strong> across multiple timezones and managed enterprise-scale digital portfolios.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-electric-violet uppercase tracking-widest mb-2 border-b border-electric-violet/20 pb-2 inline-block">The Wins</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Merged <strong className="text-white">8 university websites</strong> into 1 unified gateway. Founded the office that hit <strong className="text-white">#1 Accessibility Ranking</strong> in the Big Ten.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-xs text-volt-lime uppercase tracking-widest mb-2 border-b border-volt-lime/20 pb-2 inline-block">The System</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Pioneered the <strong className="text-white">'Rivet' Design System</strong> for Higher Ed. Scaled Rume Health ops to 20 states with <strong className="text-white">&lt;3% turnover</strong>.
                </p>
              </div>
            </div>

            <Separator className="bg-white/10 mb-12" />

            {/* The Value */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative group">
                <div className="absolute -top-3 -left-3 bg-deep-basalt border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400">
                  To Leaders
                </div>
                <blockquote className="text-lg md:text-xl font-light italic text-gray-300 relative z-10">
                  "I won't build tech debt. I build systems that scale, survive governance, and pass security audits."
                </blockquote>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative group">
                <div className="absolute -top-3 -left-3 bg-deep-basalt border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400">
                  To Makers
                </div>
                <blockquote className="text-lg md:text-xl font-light italic text-gray-300 relative z-10">
                  "I speak Figma, Code, and Brand. I know that speed matters and details build trust."
                </blockquote>
              </div>
            </div>

            {/* Personality Footer */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 border-t border-white/5">
              {[
                { label: "Runner", desc: "Discipline" },
                { label: "Flautist", desc: "Precision" },
                { label: "Gamer", desc: "Systems" }
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 group cursor-default">
                  <span className="text-white font-medium group-hover:text-volt-lime transition-colors">{item.label}</span>
                  <span className="text-gray-600 text-sm">({item.desc})</span>
                  {i < 2 && <span className="text-gray-700 mx-2 hidden md:inline">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
