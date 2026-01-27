import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface NextSectionArrowProps {
  targetId: string;
}

export const NextSectionArrow = ({ targetId }: NextSectionArrowProps) => (
  <motion.button
    onClick={() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-volt-lime transition-colors p-4 z-20 cursor-pointer"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-8 h-8" />
  </motion.button>
);
