import { motion } from "framer-motion";

export function TheProblem() {
  return (
    <section className="py-16 md:py-24 bg-deep-basalt">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
            Your team's at capacity.{" "}
            <span className="text-gray-400">The deadline isn't moving.</span>
          </h2>
          
          <div className="space-y-4 text-gray-400 text-base md:text-lg font-light leading-relaxed">
            <p>
              You need senior UX work without the onboarding, the check-ins, or the hand-holding. 
              You need someone who gets the brief, gets to work, and gets it done.
            </p>
            <p className="text-white font-medium">
              That's what <span className="lowercase font-bold">defriction</span> is for.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
