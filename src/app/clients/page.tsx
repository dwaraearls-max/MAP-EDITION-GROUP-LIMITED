import type { Metadata } from "next";
import { clients } from "@/lib/data";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Clients",
  description: "Organizations that trust MAP Edition Group including banks, NGOs, hospitals and government institutions.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Trusted Across Industries"
        description="Verified client organizations. Private reference contact details are not published on this website."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client}
                className="glass card-hover rounded-2xl p-6 text-center"
              >
                <span className="font-medium text-navy">{client}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-subtext">
            Corporate references available upon request.
          </p>
        </Container>
      </section>
    </>
  );
}
