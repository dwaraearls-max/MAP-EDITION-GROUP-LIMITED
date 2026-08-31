import {
  Building2,
  Check,
  HardHat,
  Landmark,
  Package,
  Road,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { constructionServices } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

const serviceIcons = [Road, Building2, Landmark, Building2, Building2, Wrench, Package];
const commitmentIcons = [Check, ShieldCheck, HardHat, Building2, Timer];

export function ConstructionSection() {
  const content = constructionServices;

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
            title="Our Core Construction Services"
            description="Road, building, civil engineering, infrastructure, property development, renovation and general construction supply."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {content.coreServices.map((service, i) => {
              const Icon = serviceIcons[i] ?? HardHat;
              return (
                <div key={service.title} className="glass rounded-2xl p-6 sm:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{service.description}</p>
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
          <SectionHeading title="Our Commitment" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {content.commitment.map((item, i) => {
              const Icon = commitmentIcons[i] ?? Check;
              return (
                <div key={item.title} className="glass card-hover rounded-2xl p-6 text-center">
                  <Icon className="mx-auto mb-4 h-8 w-8 text-cyan" />
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">{item.description}</p>
                </div>
              );
            })}
          </div>
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
