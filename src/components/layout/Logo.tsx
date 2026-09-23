import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
  priority?: boolean;
  variant?: "navbar" | "footer" | "plain";
};

export function Logo({
  className,
  imageClassName,
  showWordmark = false,
  priority = false,
  variant = "plain",
}: LogoProps) {
  return (
    <Link href="/" className={cn("group flex shrink-0 items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex items-center justify-center",
          variant === "navbar" &&
            "rounded-xl bg-[#0a1628] px-3 py-2 shadow-md shadow-navy/20 ring-1 ring-white/10",
          variant === "footer" && "rounded-xl bg-[#0a1628] px-3 py-2",
        )}
      >
        <Image
          src="/logo.png"
          alt="MAP Edition Group Limited logo"
          width={200}
          height={80}
          priority={priority}
          unoptimized
          className={cn(
            "h-10 w-auto object-contain sm:h-11",
            variant !== "plain" && "drop-shadow-sm",
            imageClassName,
          )}
        />
      </span>
      {(showWordmark || variant === "navbar") && (
        <div className={cn("flex flex-col", variant === "navbar" ? "hidden sm:flex" : "flex")}>
          <span className="text-xs font-bold tracking-wider text-navy">MAP EDITION</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/80">
            Group Limited
          </span>
        </div>
      )}
    </Link>
  );
}
