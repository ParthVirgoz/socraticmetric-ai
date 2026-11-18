import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#E79636] text-white hover:scale-[1.02] hover:bg-[#C27B2E] border border-white/10 cursor-pointer",
    secondary: "bg-white text-[#163460] hover:bg-[#F8F6F0] border border-[#F5F1E8]",
    outline: "border border-[#F5F1E8] bg-transparent hover:bg-[#F8F6F0] text-[#163460]",
    ghost: "hover:bg-[#E79636]/10 text-[#163460] hover:text-[#A5662C]",
    link: "text-[#A5662C] underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
