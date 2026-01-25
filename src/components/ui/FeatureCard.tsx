import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "outlined" | "filled";
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className,
  variant = "default" 
}: FeatureCardProps) {
  const variantClasses = {
    default: "bg-card shadow-card hover:shadow-card-hover",
    outlined: "bg-transparent border-2 border-border hover:border-accent/50",
    filled: "bg-muted hover:bg-muted/80",
  };

  return (
    <div 
      className={cn(
        "p-6 lg:p-8 rounded-xl transition-all duration-300",
        variantClasses[variant],
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-accent" />
        </div>
      )}
      <h3 className="font-display font-semibold text-lg lg:text-xl mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
