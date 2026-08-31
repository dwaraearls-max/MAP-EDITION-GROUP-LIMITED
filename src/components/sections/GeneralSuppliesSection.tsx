import {
  BookOpen,
  Cpu,
  Hammer,
  Package,
  PenLine,
  ShieldCheck,
  ShoppingCart,
  Sofa,
  Sprout,
  Timer,
  Truck,
  Wallet,
} from "lucide-react";
import { generalSupplies } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

const supplyIcons = [PenLine, BookOpen, Cpu, Hammer, Package, Sofa, Sprout, ShoppingCart, Package];
const whyIcons = [ShieldCheck, Wallet, Truck, Package, PenLine];

export function GeneralSuppliesSection() {
  const content = generalSupplies;

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
            eyebrow="Ghana"
            title="What We Supply"
            description="Our product portfolio includes, but is not limited to:"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {content.supplies.map((item, i) => {
              const Icon = supplyIcons[i] ?? Package;
              return (
                <div key={item.title} className="glass rounded-2xl p-6 sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading title={content.approach.title} />
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-subtext">
            {content.approach.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-t border-border bg-bg-muted">
        <Container>
          <SectionHeading title="Why Choose Us?" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {content.whyChoose.map((item, i) => {
              const Icon = whyIcons[i] ?? Timer;
              return (
                <div key={item.title} className="glass card-hover rounded-2xl p-6">
                  <Icon className="mb-4 h-8 w-8 text-cyan" />
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad border-t border-border bg-bg-secondary">
        <Container>
          <SectionHeading title="Our Commitment" />
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-subtext">
            {content.commitment}
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xl font-semibold text-navy">
            {content.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/quote" size="lg">
              Request a Quote
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
