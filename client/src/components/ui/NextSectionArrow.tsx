import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NextSectionArrowProps {
  targetId: string;
}

export const NextSectionArrow = ({ targetId }: NextSectionArrowProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.button
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-volt-lime transition-colors p-4 z-[40] cursor-pointer hidden md:block focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep-basalt rounded-full"
      )}
      animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
      transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-8 h-8" aria-hidden="true" />
    </motion.button>
  );
};
