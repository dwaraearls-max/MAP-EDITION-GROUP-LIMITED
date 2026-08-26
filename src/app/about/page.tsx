import type { Metadata } from "next";
import {
  AboutPreview,
  Capabilities,
  MissionVision,
} from "@/components/sections/HomeSections";
import { PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MAP Edition Group Limited — a dynamic diversified Ghanaian company built on service, excellence and multi-sector capability.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on Service. Driven by Excellence."
        description="A trusted multi-sector business partner serving individuals, businesses, institutions and corporate organizations across Ghana."
      />
      <AboutPreview />
      <Capabilities />
      <MissionVision />
    </>
  );
}
