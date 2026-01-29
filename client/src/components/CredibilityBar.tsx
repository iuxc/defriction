import { motion } from "framer-motion";

export function CredibilityBar() {
  const stats = [
    { value: "20+ years", label: "experience" },
    { value: "Prototypes, not PDFs", label: "deliverables" },
    { value: "2-3 partners", label: "at a time" },
    { value: "Booking for March", label: "availability" }
  ];

  return (
    <section className="py-8 md:py-12 bg-deep-basalt border-y border-white/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <span className="block text-white font-medium text-sm md:text-base">
                {stat.value}
              </span>
              <span className="block text-gray-500 text-xs font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
