import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

export function Method() {
  const methods = [
    {
      title: "Timezone Arbitrage",
      desc: "My afternoon is your morning. Brief at 5 PM AEST -> Mocks by 9 AM AEST.",
      gradient: "from-volt-lime/20 to-transparent",
      border: "hover:border-volt-lime/50",
      browserVariant: "kanban" as const
    },
    {
      title: "Dual-Track Brain",
      desc: "I speak 'Academic Senate' but ship like a Startup. Governance meets Velocity.",
      gradient: "from-ion-cyan/20 to-transparent",
      border: "hover:border-ion-cyan/50",
      browserVariant: "code-split" as const
    },
    {
      title: "Zero Overhead",
      desc: "W-8BEN. No Super. No Payroll. Just a clean Wise invoice.",
      gradient: "from-electric-violet/20 to-transparent",
      border: "hover:border-electric-violet/50",
      browserVariant: "invoice" as const
    }
  ];

  return (
    <section id="method" className="min-h-screen py-32 relative overflow-hidden flex flex-col justify-center bg-black/20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-basalt via-transparent to-deep-basalt z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
            The Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Built for <span className="text-gradient-purple">Velocity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div 
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-1 rounded-2xl relative overflow-hidden group ${method.border} flex flex-col h-full`}
            >
               {/* Inner Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${method.gradient} opacity-20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-40`} />
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="font-mono text-xs text-gray-500 mb-6">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {method.desc}
                </p>

                <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <AbstractBrowser 
                    variant={method.browserVariant} 
                    className="w-full shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
