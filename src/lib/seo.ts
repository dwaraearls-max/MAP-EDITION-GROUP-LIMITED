import { siteConfig } from "./data";
import { getAbsoluteUrl } from "./sitemap";

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    areaServed: "Ghana",
    sameAs: [],
  };
}

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getAbsoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en-GH",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: getAbsoluteUrl("/"),
    },
  };
}

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phones[0],
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "GH",
    },
  };
}
