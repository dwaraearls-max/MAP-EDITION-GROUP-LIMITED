import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rentals",
  description:
    "Reliable car rentals for business and leisure in Ghana. Short-term and long-term vehicle rental enquiries.",
};

export default function CarRentalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
