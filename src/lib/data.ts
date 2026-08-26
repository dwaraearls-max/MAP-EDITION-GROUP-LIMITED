export const siteConfig = {
  name: "MAP Edition Group Limited",
  shortName: "MAP Edition Group",
  tagline: "SERVICE WITH PASSION!",
  description:
    "MAP Edition Group Limited delivers quality products, professional services and reliable solutions across technology, transportation, equipment, supplies and business support in Ghana.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mapeditiongroup.com",
  email: "mapeditiongh@gmail.com",
  phones: ["+233 050-188-6853", "+233 059-742-6370"],
  whatsapp: "+2330501886853",
  address: "Accra Central, Adabraka, Kojo Thompson Road",
  ghanaPostGps: "GA-074-0126",
  mapsUrl: "https://maps.google.com/?q=Accra+Central+Adabraka+Kojo+Thompson+Road",
  heroVideo: "/hero-video.mp4",
  heroPoster: "/hero-poster.jpg",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology Solutions" },
  { href: "/car-rentals", label: "Car Rentals" },
  { href: "/projects", label: "Projects & Capabilities" },
  { href: "/partners", label: "Partners" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "car-rentals",
    number: "01",
    title: "Car Rentals",
    tagline: "Reliable mobility for business and leisure.",
    description:
      "Well-maintained vehicles for short- and long-term rental requirements including business transportation, leisure travel, compact and luxury options.",
    features: [
      "Short-term rentals",
      "Long-term rentals",
      "Business transportation",
      "Leisure travel",
      "Compact & luxury vehicles",
      "Flexible rental terms",
    ],
    href: "/services/car-rentals",
    icon: "car",
    image: "/services/car-rentals.png",
  },
  {
    slug: "technology",
    number: "02",
    title: "Technology & Electronics",
    tagline: "Authorized Lenovo Distributor.",
    description:
      "Enterprise technology procurement including laptops, desktops, servers, smartphones, tablets and accessories with professional deployment support.",
    features: [
      "Authorized Lenovo Distributor",
      "Laptops & desktops",
      "Servers & networking",
      "Smartphones & tablets",
      "Enterprise accessories",
      "Hardware installation",
    ],
    href: "/services/technology",
    icon: "laptop",
    image: "/services/technology.png",
  },
  {
    slug: "stationery",
    number: "03",
    title: "Stationery & Business Supplies",
    tagline: "Everything your office needs.",
    description:
      "Premium office and educational supplies for businesses, institutions and administrative environments.",
    features: [
      "Pens & paper",
      "Office organizers",
      "Educational supplies",
      "Administrative materials",
      "Creative supplies",
    ],
    href: "/services/stationery",
    icon: "pen",
    image: "/services/stationery.png",
  },
  {
    slug: "appliances",
    number: "04",
    title: "Home & Office Appliances",
    tagline: "Productivity for every space.",
    description:
      "Quality appliances for home and office environments including refrigeration, climate control and productivity equipment.",
    features: [
      "Refrigerators",
      "Washing machines",
      "Air conditioners",
      "Office equipment",
      "Productivity appliances",
    ],
    href: "/services/appliances",
    icon: "home",
    image: "/services/appliances.png",
  },
  {
    slug: "construction-equipment",
    number: "05",
    title: "Construction Equipment",
    tagline: "Equipment built for demanding work.",
    description:
      "Industrial-grade construction machinery, professional tools and site equipment built for durability and performance.",
    features: [
      "Construction machinery",
      "Professional tools",
      "Industrial equipment",
      "Site equipment",
      "Industry-standard quality",
    ],
    href: "/services/construction-equipment",
    icon: "hard-hat",
    image: "/services/construction-equipment.png",
  },
  {
    slug: "general-supplies",
    number: "06",
    title: "General Supplies",
    tagline: "Operational essentials delivered.",
    description:
      "Cleaning materials, packaging solutions and everyday business essentials for smooth operations.",
    features: [
      "Cleaning materials",
      "Packaging solutions",
      "Business essentials",
      "Operational supplies",
    ],
    href: "/services/general-supplies",
    icon: "package",
    image: "/services/general-supplies.png",
  },
] as const;

export const clients = [
  "Société Générale Ghana",
  "Zenith Bank Ghana",
  "CAMFED Ghana",
  "CARE Ghana",
  "Regional Hospital, Bolgatanga",
  "Daffiama Bussie Issa District Assembly",
  "Public Procurement Authority",
  "Nextdoor Technology Systems",
] as const;

export const partners = [
  "Lenovo",
  "Dell Technologies",
  "Casio",
  "PZ Cussons",
  "Vector Digital Systems",
] as const;

export const deploymentPhases = [
  { phase: "01", title: "Planning & Stocking", description: "Requirements analysis, procurement and inventory preparation." },
  { phase: "02", title: "Configuration", description: "System setup, imaging and network configuration." },
  { phase: "03", title: "Deployment", description: "On-site installation across operational districts." },
  { phase: "04", title: "Testing", description: "Validation, integration testing and quality assurance." },
  { phase: "05", title: "Training & Support", description: "User training, documentation and ongoing support." },
] as const;

export const whyChooseUs = [
  { title: "Quality & Reliability", description: "High-quality products and dependable services." },
  { title: "Customer-Centric Service", description: "Solutions tailored to individual and corporate needs." },
  { title: "Competitive Value", description: "Competitive pricing without compromising quality." },
  { title: "Multi-Sector Capability", description: "A broad portfolio capable of serving different industries." },
] as const;

export const capabilities = [
  { title: "Leadership & Teamwork", description: "Collaborative leadership driving coordinated delivery across sectors." },
  { title: "Customer Focus & Service", description: "Dedicated service culture built around client success." },
  { title: "Business Decision-Making", description: "Strategic decisions aligned with operational excellence." },
  { title: "Adaptability to Change", description: "Agile response to evolving business and market requirements." },
] as const;

export const quoteServiceOptions = [
  "Car Rental",
  "Lenovo / Technology",
  "Electronics",
  "Stationery",
  "Home & Office Appliances",
  "Construction Equipment",
  "General Supplies",
  "Enterprise Deployment",
  "Other",
] as const;

export const projectCategories = [
  "Technology Deployment",
  "Corporate Transportation",
  "Equipment Supply",
  "Enterprise Procurement",
  "General Supplies",
  "Institutional Projects",
] as const;

export const seoKeywords = [
  "MAP Edition Group Ghana",
  "Car rental Ghana",
  "Corporate car rental Accra",
  "Lenovo distributor Ghana",
  "Technology supplier Ghana",
  "Laptop supplier Ghana",
  "IT deployment Ghana",
  "Construction equipment Ghana",
  "Office supplies Ghana",
  "General supplies Ghana",
  "Corporate procurement Ghana",
] as const;

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: "Service" | "Page" | "Technology";
};

export const searchIndex: SearchItem[] = [
  ...services.map((s) => ({
    title: s.title,
    description: s.tagline,
    href: s.href,
    type: "Service" as const,
  })),
  { title: "About MAP Edition Group", description: "Company overview and mission", href: "/about", type: "Page" },
  { title: "Technology & Enterprise Solutions", description: "Enterprise IT and deployment", href: "/technology", type: "Technology" },
  { title: "Authorized Lenovo Distributor", description: "Genuine Lenovo technology", href: "/technology/lenovo", type: "Technology" },
  { title: "Implementation & Deployment", description: "14-day deployment lifecycle", href: "/technology/deployment", type: "Technology" },
  { title: "Car Rentals", description: "Vehicle catalogue and booking", href: "/car-rentals", type: "Page" },
  { title: "Request a Quote", description: "Corporate quote enquiry", href: "/quote", type: "Page" },
  { title: "Contact", description: "Location and contact details", href: "/contact", type: "Page" },
  { title: "Partners", description: "Technology and supply partners", href: "/partners", type: "Page" },
  { title: "Clients", description: "Trusted organizations", href: "/clients", type: "Page" },
  { title: "Projects", description: "Capabilities showcase", href: "/projects", type: "Page" },
];
