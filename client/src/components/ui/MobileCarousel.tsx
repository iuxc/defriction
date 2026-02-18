import { cn } from "@/lib/utils";
import React from "react";

interface MobileCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function MobileCarousel<T>({ items, renderItem, className }: MobileCarouselProps<T>) {
  return (
    <div className={cn("md:hidden flex-1 flex flex-col justify-center min-h-0", className)}>
      <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide touch-pan-x">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {renderItem(item, index)}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>
    </div>
  );
}
