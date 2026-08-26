import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MAP Edition Group's six business sectors — car rentals, technology, stationery, appliances, construction equipment and general supplies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Business Solutions"
        title="Six Sectors. One Trusted Partner."
        description="Quality products, professional services and reliable solutions across multiple industries."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="glass card-hover group overflow-hidden rounded-2xl"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-cyan shadow-sm">
                    {service.number}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-2 text-cyan">{service.tagline}</p>
                  <p className="mt-3 text-sm text-subtext">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/quote" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
