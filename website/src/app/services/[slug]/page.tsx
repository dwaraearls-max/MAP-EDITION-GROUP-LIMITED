import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        description={service.tagline}
      />
      <section className="section-pad">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative mb-10 h-56 overflow-hidden rounded-3xl sm:h-72 lg:h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-subtext">{service.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/quote" size="lg">
                Request a Quote
              </Button>
              {service.slug === "car-rentals" && (
                <Button href="/car-rentals" variant="secondary" size="lg">
                  View Vehicle Catalogue
                </Button>
              )}
              {service.slug === "technology" && (
                <Button href="/technology" variant="secondary" size="lg">
                  Enterprise Solutions
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
