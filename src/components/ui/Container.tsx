import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-dim">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base font-medium leading-relaxed text-text sm:text-lg sm:font-normal sm:text-subtext">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-secondary section-pad page-pad-top">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 hero-glow" />
      <Container className="relative">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-dim">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-text sm:text-lg sm:font-normal sm:text-subtext">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
