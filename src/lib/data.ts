export const siteConfig = {
  name: "MAP Edition Group Limited",
  shortName: "MAP Edition Group",
  tagline: "SERVICE WITH PASSION!",
  description:
    "MAP Edition Group Limited delivers quality products, professional services and reliable solutions across technology, transportation, agriculture, equipment, supplies and business support in Ghana.",
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
  { href: "/car-rentals", label: "Car Rental & Fleet" },
  { href: "/agriculture", label: "Agriculture" },
  { href: "/construction", label: "Construction" },
  { href: "/projects", label: "Projects & Capabilities" },
  { href: "/partners", label: "Partners" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "car-rentals",
    number: "01",
    title: "Car Rental & Fleet Management",
    tagline: "Moving People. Managing Fleets. Delivering Reliability.",
    description:
      "A Ghanaian-owned company providing reliable, professional, and cost-effective car rental and fleet management solutions for individuals, businesses, corporate organizations, development institutions, and government agencies across Ghana.",
    features: [
      "Daily, weekly and monthly rentals",
      "Long-term corporate vehicle rentals",
      "Self-drive and chauffeur-driven vehicles",
      "Airport transfers and corporate transportation",
      "Fleet tracking, maintenance and fuel management",
      "Driver, licensing, insurance and cost optimization",
    ],
    href: "/services/car-rentals",
    icon: "car",
    image: "/services/car-rentals.jpg",
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
    slug: "construction",
    number: "05",
    title: "Construction",
    tagline: "Quality. Safety. Integrity. Timely Delivery.",
    description:
      "MAP Edition Group Limited provides reliable, professional, and cost-effective construction solutions across Ghana. We deliver projects with a strong focus on quality, safety, durability, timely completion, and value for money.",
    features: [
      "Road construction and rehabilitation",
      "Building and civil engineering works",
      "Infrastructure development",
      "Property development",
      "Renovation and maintenance",
      "Construction materials and equipment supply",
    ],
    href: "/construction",
    icon: "hard-hat",
    image: "/services/construction-building.jpg",
  },
  {
    slug: "general-supplies",
    number: "06",
    title: "General Supplies",
    tagline: "Supplying Quality. Delivering Reliability.",
    description:
      "MAP Edition Group Limited provides comprehensive general supply and procurement solutions to businesses, government institutions, schools, hospitals, NGOs, construction companies and other organizations across Ghana.",
    features: [
      "Office supplies and stationery",
      "Educational materials",
      "IT and electronics",
      "Industrial and technical supplies",
      "Construction and building materials",
      "Bulk and customized procurement",
    ],
    href: "/general-supplies",
    icon: "package",
    image: "/services/general-supplies-office.png",
  },
  {
    slug: "agriculture",
    number: "07",
    title: "Agriculture & Agribusiness",
    tagline: "From Land to Market — Building the Future of Ghanaian Agriculture.",
    description:
      "MAP Edition Group Limited develops and manages sustainable, commercially viable agricultural enterprises across Ghana, operating across crop production, livestock farming, agro-processing, agricultural supply, farm management and related agribusiness services.",
    features: [
      "Crop production",
      "Livestock farming",
      "Aquaculture",
      "Farm mechanisation",
      "Agro-processing and value addition",
      "Farm management and agribusiness partnerships",
    ],
    href: "/agriculture",
    icon: "sprout",
    image: "/services/agriculture-crop-field.png",
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

export const carRentalFleet = {
  intro:
    "We combine quality vehicles, professional service, operational efficiency, and responsive customer support to provide dependable transportation solutions tailored to each client's needs.",
  photos: [
    {
      src: "/services/car-rentals.jpg",
      alt: "Chauffeur-driven luxury sedan fleet ready for corporate and executive transport in Ghana",
    },
    {
      src: "/services/car-rentals-suvs.png",
      alt: "MAP Edition Group SUV fleet parked in Ghana, including Hyundai and Mitsubishi vehicles",
    },
    {
      src: "/services/car-rentals-land-cruiser.png",
      alt: "Black Toyota Land Cruiser available for rental and fleet use in Ghana",
    },
    {
      src: "/services/car-rentals-land-cruiser-views.jpg",
      alt: "Toyota Land Cruiser GX.R V8 exterior and interior views for executive rental",
    },
    {
      src: "/services/car-rentals-hiace.jpg",
      alt: "White Toyota Hiace passenger van for group and staff transportation in Ghana",
    },
    {
      src: "/services/car-rentals-hiace-front.png",
      alt: "White Toyota Hiace commuter van front view, Ghana registration",
    },
  ],
  rental: {
    title: "Our Car Rental Services",
    description:
      "Whether you need a vehicle for a day, a week, several months, or a long-term corporate assignment, we provide flexible rental solutions designed around your requirements.",
    items: [
      "Daily, weekly and monthly car rentals",
      "Long-term corporate vehicle rentals",
      "Self-drive and chauffeur-driven vehicles",
      "Airport transfers and corporate transportation",
      "Executive and business-class vehicles",
      "SUVs, saloon cars and commercial vehicles",
      "Event and project transportation",
      "Staff transportation solutions",
    ],
  },
  fleet: {
    title: "Fleet Management Services",
    description:
      "Our fleet management division helps organizations manage their vehicles efficiently while reducing operational costs and improving vehicle availability and performance.",
    items: [
      "Vehicle procurement and replacement planning",
      "Fleet deployment and allocation",
      "Preventive and corrective maintenance",
      "Vehicle tracking and monitoring",
      "Fuel management",
      "Driver management and supervision",
      "Vehicle licensing and documentation",
      "Insurance and accident coordination",
      "Repair and maintenance management",
      "Fleet utilization monitoring",
      "Vehicle inspection and reporting",
      "Fleet cost analysis and optimization",
    ],
  },
  why: {
    title: "Why Choose MAP Edition Group Limited?",
    description:
      "We understand that transportation is more than simply providing a vehicle. It is about reliability, safety, efficiency and continuity of operations.",
    pillars: [
      {
        title: "Reliability",
        description: "Well-maintained vehicles and dependable service.",
      },
      {
        title: "Flexibility",
        description: "Rental and fleet solutions designed around the specific needs of each client.",
      },
      {
        title: "Professionalism",
        description: "Responsive customer service and structured fleet operations.",
      },
      {
        title: "Cost Efficiency",
        description: "Solutions designed to help clients control transportation and fleet-related expenses.",
      },
      {
        title: "Safety",
        description: "Emphasis on vehicle maintenance, inspections and responsible operations.",
      },
    ],
  },
  clientTypes: [
    "Corporate organizations",
    "NGOs and development organizations",
    "Government institutions",
    "Mining and construction companies",
    "Hotels and hospitality businesses",
    "Schools and educational institutions",
    "Project-based organizations",
    "Individuals and families",
    "International visitors and business travelers",
  ],
  commitment: [
    "At MAP Edition Group Limited, our goal is to become a trusted transportation partner in Ghana by delivering safe, dependable and professionally managed mobility solutions.",
    "Whether you require a single vehicle for a short-term rental or complete fleet management for a large organization, we provide the expertise and operational support needed to keep you moving.",
  ],
  tagline: "MAP Edition Group Limited — Moving People. Managing Fleets. Delivering Reliability.",
} as const;

export const agribusiness = {
  intro:
    "Our goal is to contribute to Ghana's food security and economic development by combining modern farming practices, technology, efficient farm management and responsible use of natural resources to produce quality agricultural products for local and regional markets.",
  photos: [
    {
      src: "/services/agriculture-crop-field.png",
      alt: "Irrigated crop field in Ghana supporting commercial food and cash crop production",
    },
    {
      src: "/services/agriculture-livestock-farm.jpg",
      alt: "Commercial poultry and livestock farm facilities in Ghana",
    },
    {
      src: "/services/agriculture-harvesters.png",
      alt: "Modern combine harvesters supporting farm mechanisation and crop harvesting",
    },
    {
      src: "/services/agriculture-tractor.jpg",
      alt: "Modern tractor operating in a maize field with sustainable farm technology",
    },
    {
      src: "/services/agriculture-tractor-operator.jpg",
      alt: "Professional farm operator driving a John Deere tractor in Ghana",
    },
    {
      src: "/services/agriculture-farm-operator.jpg",
      alt: "Agricultural professional with John Deere tractor on a commercial farm in Ghana",
    },
    {
      src: "/services/agriculture-farm-team.jpg",
      alt: "MAP Edition Group agricultural team in safety gear at a farm operation in Ghana",
      wide: true,
    },
    {
      src: "/services/agriculture-farm-professional.jpg",
      alt: "Agricultural professional in safety coveralls supporting farm management operations",
    },
  ],
  operations: [
    {
      title: "Crop Farming",
      description:
        "We cultivate a range of food and cash crops suited to Ghana's different agricultural zones. We employ improved seeds, appropriate mechanisation, irrigation, soil management and modern agronomic practices to improve productivity and farm profitability.",
      items: [
        "Maize",
        "Rice",
        "Soybean",
        "Cassava",
        "Yam",
        "Plantain",
        "Vegetables",
        "Fruits",
        "Other commercially viable crops",
      ],
    },
    {
      title: "Animal & Livestock Farming",
      description:
        "Our livestock operations focus on efficient and sustainable animal production, with strong emphasis on animal welfare, proper housing, nutrition, biosecurity, disease prevention and efficient farm management.",
      items: [
        "Poultry farming",
        "Pig farming",
        "Goat farming",
        "Sheep farming",
        "Cattle production",
        "Egg and meat production",
        "Animal feed production and management",
      ],
    },
    {
      title: "Aquaculture",
      description:
        "Where commercially viable, we develop and support fish farming operations using modern production systems. Our objective is to increase domestic fish production while creating sustainable employment and income opportunities.",
      items: [],
    },
    {
      title: "Farm Mechanisation & Equipment",
      description:
        "We support modern agricultural production through the use of appropriate machinery and equipment, including tractors, ploughs, planters, harvesters, irrigation systems, feed-processing equipment and other agricultural machinery. Mechanisation helps us improve efficiency, reduce production losses and increase the scale of agricultural operations.",
      items: [
        "Tractors",
        "Ploughs",
        "Planters",
        "Harvesters",
        "Irrigation systems",
        "Feed-processing equipment",
      ],
    },
    {
      title: "Agro-Processing & Value Addition",
      description:
        "We believe agriculture should go beyond primary production. We therefore seek opportunities to process and add value to agricultural products before they reach the market.",
      items: [
        "Grain processing",
        "Animal feed production",
        "Fruit and vegetable processing",
        "Packaging",
        "Storage and warehousing",
        "Cold-chain solutions",
        "Agricultural product distribution",
      ],
    },
  ],
  approach: {
    title: "Our Approach",
    description:
      "We combine commercial farming, technology, innovation and sound agricultural management to create productive and sustainable farming enterprises.",
    pillars: [
      {
        title: "Productivity",
        description: "Increasing yields and improving farm performance.",
      },
      {
        title: "Technology",
        description: "Adopting modern agricultural technologies and data-driven farm management.",
      },
      {
        title: "Sustainability",
        description: "Promoting responsible land, water and resource management.",
      },
      {
        title: "Value Addition",
        description: "Creating additional economic value through processing, storage and distribution.",
      },
      {
        title: "Market Access",
        description:
          "Developing reliable supply chains and connecting farmers and agricultural enterprises to local and regional markets.",
      },
      {
        title: "Job Creation",
        description: "Creating meaningful employment opportunities, particularly for young people in Ghana.",
      },
    ],
  },
  womenEmpowerment: {
    title: "Women Empowerment Through Agricultural Mechanisation",
    paragraphs: [
      "MAP Edition Group Limited is committed to empowering women in Ghana by providing access to modern agricultural machinery, mechanised farming services, training, financing opportunities, and market linkages.",
      "Our initiative aims to reduce the burden of manual farming, increase productivity and incomes, create employment, and promote women-owned agribusinesses.",
      "We seek to partner with government, investors, financial institutions, development organisations, and agricultural equipment suppliers to expand mechanised agriculture and create sustainable economic opportunities for women across Ghana.",
    ],
    supports: [
      "Modern agricultural machinery",
      "Mechanised farming services",
      "Training",
      "Financing opportunities",
      "Market linkages",
    ],
    partners: [
      "Government",
      "Investors",
      "Financial institutions",
      "Development organisations",
      "Agricultural equipment suppliers",
    ],
  },
  vision:
    "To become a leading Ghanaian agribusiness enterprise recognised for commercially successful, sustainable and technology-driven agricultural production.",
  mission:
    "To produce quality agricultural products efficiently and sustainably while creating employment, supporting local communities and contributing to Ghana's food security and economic growth.",
  commitment: [
    "Ghana has significant agricultural potential, and we believe that modern commercial agriculture can play a major role in transforming the country's economy.",
    "We are committed to building agricultural enterprises that create value throughout the supply chain — from the farm to processing, distribution and the final consumer.",
    "Through strategic partnerships with farmers, investors, financial institutions, technology providers, off-takers and other stakeholders, we aim to develop scalable agricultural projects capable of delivering long-term economic and social impact.",
  ],
  partners: [
    "Agricultural investors",
    "Financial institutions",
    "Development finance institutions",
    "Government agencies",
    "International development organisations",
    "Agricultural technology companies",
    "Equipment suppliers",
    "Farmers and farmer cooperatives",
    "Food processors",
    "Institutional buyers and off-takers",
  ],
  partnershipClose:
    "Together, we can build profitable agricultural businesses while contributing to food security, employment creation and sustainable economic development in Ghana.",
  tagline: "From Land to Market — Building the Future of Ghanaian Agriculture.",
} as const;

export const constructionServices = {
  intro:
    "Our capabilities cover road construction, building construction, civil engineering, infrastructure development, rehabilitation, and general construction works. We work with private developers, businesses, institutions, government agencies, and other organizations to deliver projects that meet professional standards and client requirements.",
  photos: [
    {
      src: "/services/construction-building.jpg",
      alt: "Multi-storey building under construction with stone and concrete works in Ghana",
    },
    {
      src: "/services/construction-road.jpg",
      alt: "Road construction and drainage works on a community road in Ghana",
    },
    {
      src: "/services/construction-road-grading.jpg",
      alt: "Motor grader levelling a road during construction and rehabilitation works",
    },
    {
      src: "/services/construction-road-works.png",
      alt: "Active road construction site with grading equipment and project vehicles in Ghana",
    },
  ],
  coreServices: [
    {
      title: "Road Construction & Rehabilitation",
      description:
        "Construction, upgrading, resurfacing, maintenance, drainage and related road infrastructure.",
    },
    {
      title: "Building Construction",
      description:
        "Residential, commercial, institutional and industrial buildings.",
    },
    {
      title: "Civil Engineering Works",
      description:
        "Earthworks, foundations, concrete works, drainage systems, culverts and structural works.",
    },
    {
      title: "Infrastructure Development",
      description:
        "Schools, offices, accommodation facilities, community infrastructure and other public/private developments.",
    },
    {
      title: "Property Development",
      description:
        "Development of residential and commercial properties from concept through construction.",
    },
    {
      title: "Renovation & Maintenance",
      description:
        "Refurbishment, remodeling, structural repairs and general building maintenance.",
    },
    {
      title: "General Construction & Supply",
      description:
        "Sourcing and supply of construction materials, equipment and related services.",
    },
  ],
  approach: {
    title: "Our Approach",
    paragraphs: [
      "At MAP Edition Group Limited, we believe successful construction goes beyond simply completing a project. We combine technical expertise, effective project management, quality materials, modern construction practices and strong attention to detail to deliver infrastructure that is built to last.",
      "We maintain a professional approach throughout every stage of a project—from planning and site preparation to construction, supervision, quality control and final completion.",
    ],
  },
  commitment: [
    { title: "Quality", description: "Delivering workmanship and materials that meet professional standards." },
    { title: "Safety", description: "Protecting people, property and project sites at every stage." },
    { title: "Integrity", description: "Transparent, accountable and dependable project delivery." },
    { title: "Professionalism", description: "Structured supervision, communication and client service." },
    { title: "Timely Delivery", description: "Completing projects efficiently without compromising quality." },
  ],
} as const;

export const generalSupplies = {
  intro:
    "Our General Supplies division is focused on delivering quality products, competitive pricing, dependable sourcing and timely delivery. We work with a network of manufacturers, wholesalers and trusted suppliers to meet both routine and specialized procurement requirements.",
  photos: [
    {
      src: "/services/general-supplies-office.png",
      alt: "Office supplies and stationery including files, pens, staplers and workplace essentials",
      wide: true,
    },
    {
      src: "/services/general-supplies-it-equipment.png",
      alt: "IT and electronics supply including computers, components, peripherals and networking equipment",
    },
    {
      src: "/services/general-supplies-calculators-boxes.png",
      alt: "Casio scientific calculators supplied for schools and institutions",
    },
    {
      src: "/services/general-supplies-calculators.png",
      alt: "Casio FX-991ES PLUS scientific calculators for educational procurement",
    },
    {
      src: "/services/general-supplies-school-shoes.jpg",
      alt: "School shoes and footwear supplied in multiple colours for institutional orders",
    },
    {
      src: "/services/general-supplies-flats.jpg",
      alt: "Ballet flat school shoes available in multiple colours and sizes",
    },
    {
      src: "/services/general-supplies-sneakers.png",
      alt: "Children's school sneakers supplied in bulk for institutional procurement",
    },
    {
      src: "/services/general-supplies-backpack-01.png",
      alt: "Professional black backpack for office, school and institutional supply",
    },
    {
      src: "/services/general-supplies-backpack-02.png",
      alt: "Multi-compartment laptop backpack for corporate and educational procurement",
    },
    {
      src: "/services/general-supplies-backpack-03.png",
      alt: "Minimalist black backpack for office and travel supply orders",
    },
    {
      src: "/services/general-supplies-backpack-04.png",
      alt: "Business backpack with side handle and USB port for institutional supply",
    },
    {
      src: "/services/general-supplies-backpack-05.png",
      alt: "Anti-theft laptop backpack with USB charging port for office supply",
    },
    {
      src: "/services/general-supplies-backpack-06.png",
      alt: "Structured black backpack with side pockets for school and office supply",
    },
    {
      src: "/services/general-supplies-backpack-07.png",
      alt: "Professional dual-compartment backpack for bulk institutional procurement",
    },
  ],
  supplies: [
    {
      title: "Office Supplies & Stationery",
      description:
        "Printing paper, writing materials, files, office accessories, printers and related consumables.",
    },
    {
      title: "Educational Materials",
      description:
        "Exercise books, school bags, school shoes, calculators, teaching and learning materials, uniforms and other educational supplies.",
    },
    {
      title: "IT & Electronics",
      description:
        "Computers, laptops, printers, accessories, networking equipment and other technology products.",
    },
    {
      title: "Industrial & Technical Supplies",
      description: "Tools, equipment, safety items, machinery and technical materials.",
    },
    {
      title: "Construction & Building Materials",
      description: "Selected building materials, fittings, hardware and project-related supplies.",
    },
    {
      title: "Furniture & Institutional Equipment",
      description:
        "Office furniture, school furniture, accommodation equipment and institutional fittings.",
    },
    {
      title: "Agricultural Supplies & Equipment",
      description:
        "Farm machinery, irrigation equipment, tools, livestock equipment and other agricultural inputs.",
    },
    {
      title: "Household & General Consumer Products",
      description: "A wide range of products sourced according to client specifications.",
    },
    {
      title: "Customized & Bulk Procurement",
      description:
        "Specialized sourcing and bulk orders based on technical specifications, budgets and delivery requirements.",
    },
  ],
  approach: {
    title: "Our Approach",
    paragraphs: [
      "We understand that effective procurement goes beyond simply supplying products. Our approach combines product sourcing, quality verification, competitive procurement, logistics coordination and reliable delivery to provide clients with a seamless supply experience.",
      "Whether you require a single product, recurring supplies or a complete procurement package, our team works closely with clients to understand their requirements and deliver solutions that meet their specifications.",
    ],
  },
  whyChoose: [
    {
      title: "Quality Assurance",
      description: "We prioritize reliable products and reputable sources.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Our sourcing network enables us to pursue competitive prices for both small and large-volume orders.",
    },
    {
      title: "Reliable Delivery",
      description:
        "We coordinate procurement and logistics to ensure supplies reach clients within agreed timelines.",
    },
    {
      title: "Bulk & Institutional Supply",
      description:
        "We have the capacity to handle large procurement requirements for institutions, organizations and corporate clients.",
    },
    {
      title: "Customized Solutions",
      description:
        "We source products according to specific brands, specifications, quantities and budgets.",
    },
  ],
  commitment:
    "At MAP Edition Group Limited, our goal is to become a trusted procurement and supply partner for organizations that value quality, reliability and efficiency. We are committed to building long-term relationships with our clients by consistently delivering the right products, at the right quality, at the right price and at the right time.",
  tagline: "MAP Edition Group Limited — Supplying Quality. Delivering Reliability.",
} as const;

export const quoteServiceOptions = [
  "Car Rental / Fleet Management",
  "Agriculture / Agribusiness",
  "Lenovo / Technology",
  "Electronics",
  "Stationery",
  "Home & Office Appliances",
  "Construction",
  "General Supplies",
  "Enterprise Deployment",
  "Other",
] as const;

export const projectCategories = [
  "Technology Deployment",
  "Corporate Transportation",
  "Equipment Supply",
  "Construction",
  "Agribusiness",
  "Enterprise Procurement",
  "General Supplies",
  "Institutional Projects",
] as const;

export const seoKeywords = [
  "MAP Edition Group Ghana",
  "Car rental Ghana",
  "Fleet management Ghana",
  "Corporate car rental Accra",
  "Corporate fleet management Accra",
  "Lenovo distributor Ghana",
  "Technology supplier Ghana",
  "Laptop supplier Ghana",
  "IT deployment Ghana",
  "Construction equipment Ghana",
  "Construction company Ghana",
  "Road construction Ghana",
  "Building construction Accra",
  "Office supplies Ghana",
  "General supplies Ghana",
  "Corporate procurement Ghana",
  "Institutional procurement Ghana",
  "Bulk supply Ghana",
  "Agribusiness Ghana",
  "Commercial farming Ghana",
  "Agro-processing Ghana",
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
  { title: "Car Rental & Fleet Management", description: "Car rental and fleet solutions across Ghana", href: "/car-rentals", type: "Page" },
  { title: "Agriculture & Agribusiness", description: "Sustainable commercial farming and agribusiness in Ghana", href: "/agriculture", type: "Page" },
  { title: "Construction", description: "Road, building and infrastructure construction across Ghana", href: "/construction", type: "Page" },
  { title: "General Supplies", description: "Procurement and supply solutions for businesses and institutions", href: "/general-supplies", type: "Page" },
  { title: "Request a Quote", description: "Corporate quote enquiry", href: "/quote", type: "Page" },
  { title: "Contact", description: "Location and contact details", href: "/contact", type: "Page" },
  { title: "Partners", description: "Technology and supply partners", href: "/partners", type: "Page" },
  { title: "Clients", description: "Trusted organizations", href: "/clients", type: "Page" },
  { title: "Projects", description: "Capabilities showcase", href: "/projects", type: "Page" },
];
