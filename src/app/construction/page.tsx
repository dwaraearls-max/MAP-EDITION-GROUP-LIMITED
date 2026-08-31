import { ConstructionGallery } from "@/components/sections/ConstructionGallery";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import { PageHero } from "@/components/ui/Container";

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Ghana"
        title="Construction"
        description="MAP Edition Group Limited provides reliable, professional, and cost-effective construction solutions across Ghana. We deliver projects with a strong focus on quality, safety, durability, timely completion, and value for money."
      />
      <ConstructionGallery />
      <ConstructionSection />
    </>
  );
}
