import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "Reliable, professional construction solutions across Ghana — road works, building construction, civil engineering, infrastructure development and property projects.",
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
