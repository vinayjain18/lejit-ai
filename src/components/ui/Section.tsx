import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  size?: "sm" | "md" | "lg";
}

export function Section({ 
  children, 
  className, 
  variant = "default",
  size = "md" 
}: SectionProps) {
  const sizeClasses = {
    sm: "py-12 lg:py-16",
    md: "py-16 lg:py-24",
    lg: "py-20 lg:py-32",
  };

  const variantClasses = {
    default: "bg-background",
    muted: "bg-muted",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section 
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
}
