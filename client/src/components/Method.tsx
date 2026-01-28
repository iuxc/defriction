import { motion } from "framer-motion";
import { AbstractBrowser } from "@/components/ui/AbstractBrowser";

import { NextSectionArrow } from "@/components/ui/NextSectionArrow";

export function Method() {
  const methods = [
    // ...
  ];
  
  const methodsData = [
    {
      title: "Timezone Arbitrage",
      desc: "Brief me during your Australian workday. I execute while you sleep. You wake up to finished designs the next morning.",
      gradient: "from-volt-lime/20 to-transparent",
      border: "hover:border-volt-lime/50",
      browserVariant: "timezone" as const
    },
    {
      title: "Dual-Track Brain",
      desc: "I speak the language of the Boardroom and the Figma file. I bridge the gap between executive goals and pixel-perfect execution.",
      gradient: "from-ion-cyan/20 to-transparent",
      border: "hover:border-ion-cyan/50",
      browserVariant: "brain" as const
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
        <div className="text-left mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 mb-6 backdrop-blur-md cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
            </span>
            <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
              02. The Method
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Built for <span className="bg-gradient-to-r from-volt-lime to-green-500 bg-clip-text text-transparent">Velocity</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-3xl">
            I don't just hand off a strategy deck and walk away. I leverage the US-Australia timezone overlap to deliver production-ready design during your off-hours, while bringing the executive wisdom to ensure it actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodsData.map((method, index) => (
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
      <NextSectionArrow targetId="about" />
    </section>
  );
}
