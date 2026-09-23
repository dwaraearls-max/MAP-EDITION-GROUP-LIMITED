"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo priority variant="navbar" />

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-cyan"
                  : "text-subtext hover:text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-subtext transition-colors hover:bg-bg-muted hover:text-navy"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Button href="/contact" variant="ghost" size="sm">
            Talk to Us
          </Button>
          <Button href="/quote" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-3 text-base",
                  pathname === link.href ? "bg-bg-muted text-cyan" : "text-subtext",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button href="/search" variant="secondary" className="w-full" onClick={closeMenu}>
                Search
              </Button>
              <Button href="/contact" variant="secondary" className="w-full" onClick={closeMenu}>
                Talk to Us
              </Button>
              <Button href="/quote" className="w-full" onClick={closeMenu}>
                Request a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}

      <div className="hidden border-t border-border bg-bg-secondary py-1 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-navy sm:block">
        {siteConfig.tagline}
      </div>
    </header>
  );
}
