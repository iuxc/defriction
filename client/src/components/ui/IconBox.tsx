import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  color?: string;
  size?: "sm" | "md";
  className?: string;
}

export function IconBox({ icon: Icon, color = "text-volt-lime", size = "md", className }: IconBoxProps) {
  return (
    <div className={cn(
      "rounded-xl bg-white/5 border border-white/10 flex items-center justify-center",
      size === "md" ? "w-12 h-12" : "w-10 h-10",
      className
    )}>
      <Icon className={cn(
        color,
        size === "md" ? "w-6 h-6" : "w-5 h-5"
      )} />
    </div>
  );
}
