import type { Metadata } from "next";
import { DeploymentTimeline, TechnologyPreview } from "@/components/sections/HomeSections";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Technology & Enterprise Solutions",
  description:
    "Enterprise IT solutions, hardware installation, deployment services and authorized Lenovo distribution in Ghana.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise"
        title="Technology & Enterprise Solutions"
        description="Hardware installation, enterprise procurement and professional deployment services for organizations across Ghana."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Hardware Installation",
                description:
                  "Physical installation of computer and networking hardware, helping organizations focus on higher priorities and maintain efficient deployment.",
              },
              {
                title: "Deployment Services",
                description:
                  "Complete deployment lifecycle: Configuration → Integration → Validation → Training → Documentation → Support.",
              },
              {
                title: "Enterprise Procurement",
                description:
                  "Laptops, desktops, servers, networking hardware, accessories and enterprise technology from authorized distributors.",
              },
            ].map((item) => (
              <div key={item.title} className="glass card-hover rounded-2xl p-6">
                <h2 className="text-xl font-bold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-subtext">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/technology/lenovo">Lenovo Solutions</Button>
            <Button href="/technology/deployment" variant="secondary">
              Deployment Process
            </Button>
            <Button href="/quote" variant="secondary">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
      <TechnologyPreview />
      <DeploymentTimeline />
    </>
  );
}
