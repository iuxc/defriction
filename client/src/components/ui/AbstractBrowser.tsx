import { motion } from "framer-motion";

interface AbstractBrowserProps {
  variant?: "dashboard" | "landing" | "mobile" | "data";
  className?: string;
}

export function AbstractBrowser({ variant = "landing", className = "" }: AbstractBrowserProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm ${className}`}>
      {/* Browser Chrome */}
      <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
        <div className="flex-1 ml-2">
          <div className="h-4 bg-white/5 rounded-full w-2/3 max-w-[200px]" />
        </div>
      </div>

      {/* Viewport Content */}
      <div className="p-4 relative min-h-[160px] bg-gradient-to-br from-white/[0.02] to-transparent">
        <Content variant={variant} />
      </div>
    </div>
  );
}

function Content({ variant }: { variant: AbstractBrowserProps["variant"] }) {
  const lineClass = "bg-white/10 rounded-full";
  const blockClass = "bg-white/5 rounded border border-white/5";

  switch (variant) {
    case "dashboard":
      return (
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className={`w-16 h-16 ${blockClass}`} />
            <div className="flex-1 space-y-2">
              <div className={`h-4 w-1/3 ${lineClass}`} />
              <div className={`h-24 ${blockClass}`} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className={`h-20 ${blockClass}`} />
            <div className={`h-20 ${blockClass}`} />
            <div className={`h-20 ${blockClass}`} />
          </div>
        </div>
      );
    
    case "data":
      return (
        <div className="space-y-3">
          <div className={`h-32 ${blockClass} relative overflow-hidden`}>
             <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 40" preserveAspectRatio="none">
               <path d="M0,40 L10,35 L20,38 L30,30 L40,32 L50,20 L60,25 L70,15 L80,20 L90,10 L100,5 V40 H0 Z" fill="currentColor" />
             </svg>
          </div>
          <div className="space-y-2">
             <div className={`h-2 w-full ${lineClass}`} />
             <div className={`h-2 w-5/6 ${lineClass}`} />
             <div className={`h-2 w-4/6 ${lineClass}`} />
          </div>
        </div>
      );

    case "mobile":
       return (
         <div className="flex justify-center">
            <div className={`w-24 h-40 ${blockClass} border-x-2 border-white/10 flex flex-col items-center pt-2 gap-2`}>
               <div className={`w-8 h-1 ${lineClass}`} />
               <div className={`w-20 h-20 ${blockClass} rounded-sm`} />
               <div className="space-y-1 w-16">
                 <div className={`h-1 w-full ${lineClass}`} />
                 <div className={`h-1 w-2/3 ${lineClass}`} />
               </div>
            </div>
         </div>
       );

    default: // landing
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className={`h-4 w-8 ${blockClass}`} />
            <div className="flex gap-2">
              <div className={`h-2 w-8 ${lineClass}`} />
              <div className={`h-2 w-8 ${lineClass}`} />
            </div>
          </div>
          <div className="space-y-2 py-4 flex flex-col items-center">
            <div className={`h-6 w-3/4 ${lineClass}`} />
            <div className={`h-3 w-1/2 ${lineClass} opacity-60`} />
            <div className={`mt-2 h-8 w-24 ${blockClass}`} />
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className={`h-20 ${blockClass}`} />
             <div className={`h-20 ${blockClass}`} />
          </div>
        </div>
      );
  }
}
