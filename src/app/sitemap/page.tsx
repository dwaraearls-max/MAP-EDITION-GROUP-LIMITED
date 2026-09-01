import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui/Container";
import { getAbsoluteUrl, getSiteUrl, getSitemapSections, sitemapEntries } from "@/lib/sitemap";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Complete sitemap of MAP Edition Group Limited — browse all pages across our seven business sectors, technology solutions, and company information.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  const sections = getSitemapSections();

  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        description="A complete index of every public page on the MAP Edition Group Limited website."
      />
      <section className="section-pad border-t border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {sections.map(({ section, entries }) => (
              <div key={section} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{section}</h2>
                <ul className="mt-4 space-y-3">
                  {entries.map((entry) => (
                    <li key={entry.path}>
                      <Link href={entry.path} className="group block">
                        <span className="font-medium text-navy transition-colors group-hover:text-cyan">
                          {entry.label}
                        </span>
                        {entry.description && (
                          <span className="mt-1 block text-sm leading-relaxed text-subtext">
                            {entry.description}
                          </span>
                        )}
                        <span className="mt-1 block text-xs text-subtext/70">{entry.path}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-subtext">
            XML sitemap for search engines:{" "}
            <a href="/sitemap.xml" className="font-medium text-cyan hover:underline">
              {getAbsoluteUrl("/sitemap.xml")}
            </a>
            <br />
            <span className="mt-2 inline-block text-xs text-subtext/70">
              {sitemapEntries.length} pages indexed for {getSiteUrl().replace("https://", "")}
            </span>
          </p>
        </Container>
      </section>
    </>
  );
}
