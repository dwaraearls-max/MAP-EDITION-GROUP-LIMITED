import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a corporate quote from MAP Edition Group for car rentals, technology, equipment, supplies and enterprise deployment.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Enquiry"
        title="Request a Quote"
        description="Tell us what you need and a MAP Edition Group representative will review your request and contact you."
      />
      <section className="section-pad">
        <Container className="max-w-3xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
