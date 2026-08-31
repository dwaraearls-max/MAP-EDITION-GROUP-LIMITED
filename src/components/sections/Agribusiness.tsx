import {
  Cpu,
  Factory,
  Fish,
  Handshake,
  HeartHandshake,
  Leaf,
  Sprout,
  Tractor,
  TrendingUp,
  Users,
  Warehouse,
  Wheat,
} from "lucide-react";
import { agribusiness } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";

const operationIcons = [Wheat, Sprout, Fish, Tractor, Factory];
const approachIcons = [TrendingUp, Cpu, Leaf, Warehouse, Handshake, Users];

export function Agribusiness() {
  const content = agribusiness;

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
            title="Our Areas of Operation"
            description="Crop production, livestock farming, aquaculture, farm mechanisation, agro-processing and related agribusiness services."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {content.operations.map((operation, i) => {
              const Icon = operationIcons[i] ?? Sprout;
              return (
                <div
                  key={operation.title}
                  className={`glass rounded-2xl p-6 sm:p-8 ${
                    operation.items.length === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{operation.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{operation.description}</p>
                  {operation.items.length > 0 && (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {operation.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm text-text"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading title={content.approach.title} description={content.approach.description} />
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-subtext">
            Our approach focuses on:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.approach.pillars.map((pillar, i) => {
              const Icon = approachIcons[i] ?? Leaf;
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

      <section className="section-pad border-t border-border bg-bg-secondary">
        <Container>
          <SectionHeading
            eyebrow="Social Impact"
            title={content.womenEmpowerment.title}
          />
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-subtext">
            {content.womenEmpowerment.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.womenEmpowerment.supports.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text shadow-sm"
              >
                <HeartHandshake className="h-4 w-4 shrink-0 text-cyan" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-subtext">
              Partnership opportunities with:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {content.womenEmpowerment.partners.map((partner) => (
                <span
                  key={partner}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-subtext shadow-sm"
                >
                  <Handshake className="h-3.5 w-3.5 text-cyan" />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad border-t border-border bg-bg-muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass rounded-3xl p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Our Vision</p>
              <p className="mt-4 text-xl leading-relaxed text-navy">{content.vision}</p>
            </div>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Our Mission</p>
              <p className="mt-4 text-xl leading-relaxed text-navy">{content.mission}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <SectionHeading
            title="Our Commitment to Ghana"
            description="Building agricultural enterprises that create value from the farm to the final consumer."
          />
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-subtext">
            {content.commitment.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-t border-border bg-bg-secondary">
        <Container>
          <SectionHeading
            title="Investment & Partnerships"
            description="We welcome partnerships with:"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {content.partners.map((partner) => (
              <span
                key={partner}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-subtext shadow-sm"
              >
                <Handshake className="h-3.5 w-3.5 text-cyan" />
                {partner}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-subtext">
            {content.partnershipClose}
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
