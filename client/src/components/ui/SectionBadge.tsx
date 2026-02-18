import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  icon?: React.ReactNode;
  ping?: boolean;
  className?: string;
}

export function SectionBadge({ label, icon, ping = true, className }: SectionBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-md border border-white/10 bg-white/5 backdrop-blur-md cursor-default", className)}>
      {icon || (ping && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400" />
        </span>
      ))}
      <span className="font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
        {label}
      </span>
    </div>
  );
}
