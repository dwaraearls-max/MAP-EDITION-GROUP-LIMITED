import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-blue to-cyan-dim text-white shadow-lg shadow-blue/15 hover:shadow-blue/25 hover:brightness-105",
  secondary:
    "border border-border bg-white text-text hover:border-blue/25 hover:bg-bg-secondary shadow-sm",
  ghost: "text-subtext hover:text-text hover:bg-bg-muted",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm font-medium",
  lg: "h-12 px-8 text-base font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  onClick,
  external,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
