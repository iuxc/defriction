import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NextSectionArrowProps {
  targetId: string;
  offset?: boolean;
}

export const NextSectionArrow = ({ targetId, offset = false }: NextSectionArrowProps) => (
  <motion.button
    onClick={() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }}
    className={cn(
      "absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-volt-lime transition-colors p-4 z-[90] cursor-pointer",
      offset && "md:left-[calc(50%-32rem)] md:translate-x-0"
    )}
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
    aria-label="Scroll to next section"
  >
    <ChevronDown className="w-8 h-8" />
  </motion.button>
);
