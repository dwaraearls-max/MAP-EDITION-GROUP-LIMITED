import { Hero, ServicesGrid, TrustBar } from "@/components/sections/Hero";
import {
  AboutPreview,
  Capabilities,
  ContactPreview,
  DeploymentTimeline,
  MissionVision,
  PartnersClients,
  QuoteCTA,
  TechnologyPreview,
  WhyChooseUs,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid />
      <TechnologyPreview />
      <DeploymentTimeline />
      <WhyChooseUs />
      <Capabilities />
      <PartnersClients />
      <MissionVision />
      <QuoteCTA />
      <ContactPreview />
    </>
  );
}
