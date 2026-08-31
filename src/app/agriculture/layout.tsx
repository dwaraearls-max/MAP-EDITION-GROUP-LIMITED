import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture & Agribusiness",
  description:
    "MAP Edition Group develops and manages sustainable, commercially viable agricultural enterprises across Ghana — crop production, livestock, aquaculture, mechanisation and agro-processing.",
};

export default function AgricultureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
