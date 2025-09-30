import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl",
        hover && "hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
