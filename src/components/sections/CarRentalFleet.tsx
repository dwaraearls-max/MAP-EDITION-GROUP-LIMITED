import { Check, ShieldCheck, Sparkles, ClipboardCheck, Wallet, Gauge, Users } from "lucide-react";
import { carRentalFleet } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

const whyIcons = [ShieldCheck, Sparkles, ClipboardCheck, Wallet, Gauge];

export function CarRentalFleet({
  catalogueHref = "/car-rentals",
}: {
  catalogueHref?: string;
}) {
  const content = carRentalFleet;

  return (
    <>
      <section className="border-b border-border py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-subtext">
            {content.intro}
          </p>
        </Container>
      </section>

      <section className="section-pad bg-bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Car Rentals"
            title={content.rental.title}
            description={content.rental.description}
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.rental.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            eyebrow="Fleet Operations"
            title={content.fleet.title}
            description={content.fleet.description}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.fleet.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-pad bg-bg-muted">
        <Container>
          <SectionHeading title={content.why.title} description={content.why.description} />
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-subtext">
            Our approach is built around:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {content.why.pillars.map((pillar, i) => {
              const Icon = whyIcons[i] ?? ShieldCheck;
              return (
                <div key={pillar.title} className="glass card-hover rounded-2xl p-6">
                  <Icon className="mb-4 h-8 w-8 text-cyan" />
                  <h3 className="font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            title="Our Clients"
            description="We provide transportation and fleet solutions for:"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {content.clientTypes.map((client) => (
              <span
                key={client}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-subtext shadow-sm"
              >
                <Users className="h-3.5 w-3.5 text-cyan" />
                {client}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-t border-border bg-bg-secondary">
        <Container>
          <SectionHeading title="Our Commitment" />
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-subtext">
            {content.commitment.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xl font-semibold text-navy">
            {content.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/quote" size="lg">
              Request a Quote
            </Button>
            <Button href={catalogueHref} variant="secondary" size="lg">
              View Vehicle Catalogue
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
