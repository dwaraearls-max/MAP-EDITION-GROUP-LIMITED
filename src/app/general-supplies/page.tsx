import { GeneralSuppliesGallery } from "@/components/sections/GeneralSuppliesGallery";
import { GeneralSuppliesSection } from "@/components/sections/GeneralSuppliesSection";
import { PageHero } from "@/components/ui/Container";

export default function GeneralSuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ghana"
        title="Reliable Supply Solutions for Businesses, Institutions and Government"
        description="MAP Edition Group Limited provides comprehensive general supply and procurement solutions to businesses, government institutions, schools, hospitals, NGOs, construction companies and other organizations across Ghana."
      />
      <GeneralSuppliesGallery />
      <GeneralSuppliesSection />
    </>
  );
}
