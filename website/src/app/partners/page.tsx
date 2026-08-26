import type { Metadata } from "next";
import { partners } from "@/lib/data";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Partners",
  description: "Technology and supply partners including Lenovo, Dell Technologies, Casio, PZ Cussons and Vector Digital Systems.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Technology & Supply Partners"
        description="Verified partnerships from the company profile. No fabricated partnerships displayed."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="glass card-hover flex h-32 items-center justify-center rounded-2xl p-6"
              >
                <span className="text-lg font-semibold text-navy">{partner}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
