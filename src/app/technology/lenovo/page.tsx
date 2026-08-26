import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Authorized Lenovo Distributor",
  description:
    "Genuine Lenovo technology — business laptops, desktops, servers and accessories with professional deployment and support.",
};

const productCategories = [
  "Business Laptops",
  "Desktops",
  "Servers",
  "Accessories",
];

export default function LenovoPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Authorized Lenovo Distributor"
        description="Genuine Technology. Professional Deployment. Reliable Support."
      />
      <section className="section-pad">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-lg text-subtext">
            MAP Edition Group is an authorized Lenovo distributor providing genuine business
            computing products with official warranty and professional support. Product details
            and pricing are managed through our catalogue — request a quote for current availability.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div key={category} className="glass card-hover rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-2xl font-bold text-cyan">
                  L
                </div>
                <h2 className="font-semibold text-navy">{category}</h2>
                <p className="mt-2 text-sm text-subtext">CMS-managed catalogue</p>
                <Button href="/quote" variant="secondary" size="sm" className="mt-4">
                  Request Quote
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
