import { ReactNode } from "react";

interface ButtonProps {
  variant: "dark" | "light";
  iconURL?: string;
  className?: string; 
  children?: ReactNode
}

function Button({ variant, iconURL , className , children}: ButtonProps) {
  
  return (
    <button
      className={`flex items-center px-2 py-1 rounded-full gap-2 ${
        variant === "dark" ? "bg-white/20 text-white" : "bg-white/90 text-black"
      } ${className || ""}`}
    >
      {children}
      {iconURL && <img src={iconURL} alt="icon" className="w-5 h-5" />}
      
    </button>
  );
}

export default Button;
