"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { searchIndex } from "@/lib/data";
import { Container, PageHero } from "@/components/ui/Container";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [query]);

  return (
    <Container className="max-w-3xl">
      {!query && (
        <p className="text-subtext">Enter a search term to find services, pages and technology solutions.</p>
      )}
      {query && results.length === 0 && (
        <p className="text-subtext">No results found for &ldquo;{query}&rdquo;.</p>
      )}
      {results.length > 0 && (
        <ul className="space-y-3">
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="glass card-hover block rounded-2xl p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                  {item.type}
                </span>
                <h2 className="mt-1 font-bold text-navy">{item.title}</h2>
                <p className="mt-1 text-sm text-subtext">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default function SearchPage() {
  return (
    <>
      <PageHero eyebrow="Search" title="Find Services & Pages" />
      <section className="section-pad">
        <Container className="mb-8 max-w-3xl">
          <form action="/search" method="get">
            <input
              name="q"
              type="search"
              placeholder="Search services, technology, pages..."
              className="w-full rounded-2xl border border-border bg-white px-5 py-4 text-text shadow-sm placeholder:text-subtext/60"
            />
          </form>
        </Container>
        <Suspense fallback={<Container><p className="text-subtext">Searching...</p></Container>}>
          <SearchResults />
        </Suspense>
      </section>
    </>
  );
}
