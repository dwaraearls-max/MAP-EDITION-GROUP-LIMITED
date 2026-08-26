import type { Metadata } from "next";
import { DeploymentTimeline } from "@/components/sections/HomeSections";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Implementation & Deployment",
  description:
    "14-day enterprise deployment lifecycle — planning, configuration, deployment, testing, training and support.",
};

export default function DeploymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Deployment"
        title="Implementation & Deployment"
        description="A structured 14-day deployment process capable of reaching organizations across 38 operational districts."
      />
      <DeploymentTimeline />
      <section className="section-pad">
        <Container className="text-center">
          <p className="mx-auto max-w-xl text-subtext">
            The company profile describes deployment capabilities that can reach CAMFED Ghana&apos;s
            38 operational districts within approximately 10–14 days.
          </p>
          <Button href="/quote" size="lg" className="mt-8">
            Request Deployment Quote
          </Button>
        </Container>
      </section>
    </>
  );
}
