import { CarRentalFleet } from "@/components/sections/CarRentalFleet";
import { CarRentalGallery } from "@/components/sections/CarRentalGallery";
import { VehicleCatalogue } from "@/components/sections/VehicleCatalogue";
import { PageHero } from "@/components/ui/Container";

export default function CarRentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ghana"
        title="Car Rental & Fleet Management"
        description="MAP Edition Group Limited is a Ghanaian-owned company providing reliable, professional, and cost-effective car rental and fleet management solutions for individuals, businesses, corporate organizations, development institutions, and government agencies across Ghana."
      />
      <CarRentalGallery />
      <CarRentalFleet catalogueHref="#catalogue" />
      <VehicleCatalogue />
    </>
  );
}
