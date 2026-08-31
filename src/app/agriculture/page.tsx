import { Agribusiness } from "@/components/sections/Agribusiness";
import { AgribusinessGallery } from "@/components/sections/AgribusinessGallery";
import { PageHero } from "@/components/ui/Container";

export default function AgriculturePage() {
  return (
    <>
      <PageHero
        eyebrow="Ghana"
        title="Agriculture & Agribusiness"
        description="MAP Edition Group Limited develops and manages sustainable, commercially viable agricultural enterprises across Ghana. We operate across crop production, livestock farming, agro-processing, agricultural supply, farm management and related agribusiness services."
      />
      <AgribusinessGallery />
      <Agribusiness />
    </>
  );
}
