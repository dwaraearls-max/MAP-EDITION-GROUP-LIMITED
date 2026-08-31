import { services, siteConfig } from "@/lib/data";

export type SitemapEntry = {
  path: string;
  label: string;
  description?: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  section: SitemapSection;
};

export type SitemapSection =
  | "Core Pages"
  | "Business Sectors"
  | "Service Pages"
  | "Technology"
  | "Company";

const staticRoutes: SitemapEntry[] = [
  {
    path: "/",
    label: "Home",
    description: "MAP Edition Group Limited corporate homepage",
    changeFrequency: "weekly",
    priority: 1,
    section: "Core Pages",
  },
  {
    path: "/about",
    label: "About Us",
    description: "Company overview, mission and capabilities",
    changeFrequency: "monthly",
    priority: 0.8,
    section: "Company",
  },
  {
    path: "/services",
    label: "Services",
    description: "Overview of all seven business sectors",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Core Pages",
  },
  {
    path: "/contact",
    label: "Contact",
    description: "Office location, phone, email and WhatsApp",
    changeFrequency: "monthly",
    priority: 0.8,
    section: "Core Pages",
  },
  {
    path: "/quote",
    label: "Request a Quote",
    description: "Corporate quote enquiry form",
    changeFrequency: "monthly",
    priority: 0.8,
    section: "Core Pages",
  },
  {
    path: "/car-rentals",
    label: "Car Rental & Fleet Management",
    description: "Vehicle rental and fleet solutions across Ghana",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Business Sectors",
  },
  {
    path: "/agriculture",
    label: "Agriculture & Agribusiness",
    description: "Commercial farming and agribusiness in Ghana",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Business Sectors",
  },
  {
    path: "/construction",
    label: "Construction",
    description: "Road, building and infrastructure construction",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Business Sectors",
  },
  {
    path: "/general-supplies",
    label: "General Supplies",
    description: "Procurement and supply solutions for institutions",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Business Sectors",
  },
  {
    path: "/technology",
    label: "Technology Solutions",
    description: "Enterprise IT procurement and deployment",
    changeFrequency: "weekly",
    priority: 0.9,
    section: "Technology",
  },
  {
    path: "/technology/lenovo",
    label: "Authorized Lenovo Distributor",
    description: "Genuine Lenovo laptops, desktops and servers",
    changeFrequency: "monthly",
    priority: 0.8,
    section: "Technology",
  },
  {
    path: "/technology/deployment",
    label: "Implementation & Deployment",
    description: "14-day enterprise deployment lifecycle",
    changeFrequency: "monthly",
    priority: 0.8,
    section: "Technology",
  },
  {
    path: "/projects",
    label: "Projects & Capabilities",
    description: "Capabilities showcase and project experience",
    changeFrequency: "monthly",
    priority: 0.7,
    section: "Company",
  },
  {
    path: "/partners",
    label: "Partners",
    description: "Technology and supply chain partners",
    changeFrequency: "monthly",
    priority: 0.6,
    section: "Company",
  },
  {
    path: "/clients",
    label: "Clients",
    description: "Trusted organizations and institutions",
    changeFrequency: "monthly",
    priority: 0.6,
    section: "Company",
  },
  {
    path: "/sitemap",
    label: "Sitemap",
    description: "Complete list of pages on this website",
    changeFrequency: "monthly",
    priority: 0.3,
    section: "Core Pages",
  },
];

const serviceRoutes: SitemapEntry[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  label: service.title,
  description: service.tagline,
  changeFrequency: "weekly" as const,
  priority: 0.85,
  section: "Service Pages" as const,
}));

export const sitemapEntries: SitemapEntry[] = [...staticRoutes, ...serviceRoutes];

export function getSiteUrl() {
  return siteConfig.url.replace(/\/$/, "");
}

export function getAbsoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function getSitemapSections() {
  const order: SitemapSection[] = [
    "Core Pages",
    "Business Sectors",
    "Service Pages",
    "Technology",
    "Company",
  ];

  return order
    .map((section) => ({
      section,
      entries: sitemapEntries.filter((entry) => entry.section === section),
    }))
    .filter((group) => group.entries.length > 0);
}
