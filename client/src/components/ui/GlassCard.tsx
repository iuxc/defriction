import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  gradient?: string;
  glowColor?: string;
  children: React.ReactNode;
  innerClassName?: string;
  compact?: boolean;
}

export function GlassCard({
  gradient = "from-ion-cyan/20 to-transparent",
  glowColor = "212, 255, 0",
  children,
  className,
  innerClassName,
  compact = false,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-1 rounded-2xl relative overflow-hidden group flex flex-col h-full",
        className
      )}
      style={{ "--glass-border-color": glowColor } as React.CSSProperties}
      {...motionProps}
    >
      <div
        className={cn(
          "absolute top-0 right-0 bg-gradient-to-bl rounded-full blur-3xl transition-opacity group-hover:opacity-40",
          compact
            ? "w-40 h-40 opacity-20 -mr-10 -mt-10"
            : "w-64 h-64 opacity-20 -mr-16 -mt-16",
          gradient
        )}
      />
      <div className={cn(
        "relative z-10 flex flex-col h-full",
        compact ? "p-5 min-h-[260px]" : "p-8",
        innerClassName
      )}>
        {children}
      </div>
    </motion.div>
  );
}
