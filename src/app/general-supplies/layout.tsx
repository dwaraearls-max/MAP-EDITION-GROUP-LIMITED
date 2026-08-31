import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Supplies",
  description:
    "Comprehensive general supply and procurement solutions for businesses, institutions and government across Ghana — office, educational, IT, industrial and bulk procurement.",
};

export default function GeneralSuppliesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
