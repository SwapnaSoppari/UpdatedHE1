
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

const Logo = ({ className, variant = "full" }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/f8d70207-9064-4932-9d3b-e3b575f9142d.png" 
        alt="Hiscope Enterprises Logo" 
        className={cn(
          "h-auto",
          variant === "full" ? "w-40 md:w-48" : "w-10 md:w-12"
        )} 
      />
    </div>
  );
};

export default Logo;
