import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = "center",
  className 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 lg:mt-6 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
