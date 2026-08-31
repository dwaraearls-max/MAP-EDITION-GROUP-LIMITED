import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental & Fleet Management",
  description:
    "Reliable, professional car rental and fleet management solutions across Ghana — daily to long-term rentals, chauffeur services, and full fleet operations.",
};

export default function CarRentalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
