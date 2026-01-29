import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-deep-basalt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
            <Quote className="w-5 h-5 text-gray-500" />
          </div>
          
          <blockquote className="text-xl md:text-3xl font-display text-white font-light leading-relaxed mb-8">
            "Brian delivered a complete prototype overnight that would have taken our team a week. 
            No hand-holding, no endless questions—just exceptional work that was ready to present to stakeholders."
          </blockquote>
          
          <div className="text-gray-400">
            <span className="block font-medium text-white">— Sarah Chen</span>
            <span className="text-sm">Director of Product, Agency Partner</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
