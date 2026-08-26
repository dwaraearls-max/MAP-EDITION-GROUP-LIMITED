import type { Metadata } from "next";
import { projectCategories } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container, PageHero } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Projects & Capabilities",
  description: "Explore MAP Edition Group's project capabilities across technology, transportation, equipment and enterprise procurement.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="What We Deliver"
        description="Case studies and project capabilities managed through CMS. Placeholders shown until verified project data is added."
      />
      <section className="section-pad">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectCategories.map((category) => (
              <div key={category} className="glass card-hover rounded-2xl p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  Case Study Placeholder
                </span>
                <h2 className="mt-2 text-xl font-bold text-navy">{category}</h2>
                <p className="mt-3 text-sm text-subtext">
                  Project details, client industry, challenge, solution and results will be
                  populated through the admin CMS. No fabricated case studies displayed.
                </p>
                <Button href="/quote" variant="secondary" size="sm" className="mt-4">
                  Discuss a Project
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
