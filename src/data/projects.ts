import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import liveAtHeadwater from "@/assets/projects/live-at-headwater.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import nueranutra from "@/assets/projects/nuera-nutra.jpg";
import vitaEnvironmental from "@/assets/projects/vita-environmental.jpg";
import spaAlita from "@/assets/projects/spa-alita.jpg";
import architectureStudio from "@/assets/projects/architecture-studio.jpg";
import fashionBrand from "@/assets/projects/fashion-brand.jpg";
import coffeeBrand from "@/assets/projects/coffee-brand.jpg";
import restaurantIdentity from "@/assets/projects/restaurant-identity.jpg";
import lawFirm from "@/assets/projects/law-firm.jpg";
import creativeAgency from "@/assets/projects/creative-agency.jpg";

export type ProjectCategory = "Web Design" | "Branding" | "Ecommerce" | "AI Automation";

export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  image: string;
  alt: string;
  type: "client" | "concept";
  description?: string;
  category: ProjectCategory[];
  year: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "friendly-dental",
    name: "Friendly Dental",
    industry: "Healthcare",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: friendlyDental,
    alt: "Brand identity and website design for Friendly Dental clinic",
    type: "client",
    description: "Complete brand identity and digital presence for a modern dental clinic.",
    category: ["Web Design", "Branding"],
    year: 2026,
    featured: true,
  },
  {
    slug: "live-at-headwater",
    name: "Live at Headwater",
    industry: "Real Estate",
    services: ["Brand Identity", "Marketing Graphics"],
    image: liveAtHeadwater,
    alt: "Brand identity and marketing design for Live at Headwater residential development",
    type: "client",
    description: "Premium residential development branding and marketing materials.",
    category: ["Branding"],
    year: 2026,
    featured: true,
  },
  {
    slug: "btn-real-estate",
    name: "BTN Real Estate",
    industry: "Real Estate",
    services: ["Brand Identity", "Website Design"],
    image: btnRealEstate,
    alt: "Corporate website and brand identity for BTN Real Estate",
    type: "client",
    description: "Professional real estate brand identity and corporate website.",
    category: ["Web Design", "Branding"],
    year: 2025,
  },
  {
    slug: "nuera-nutra",
    name: "NuEra Nutra",
    industry: "Health & Wellness",
    services: ["Brand Identity", "Packaging", "Website Design"],
    image: nueranutra,
    alt: "Ecommerce website and packaging design for NuEra Nutra supplements",
    type: "client",
    description: "Health supplement brand identity, packaging design, and e-commerce platform.",
    category: ["Ecommerce", "Branding"],
    year: 2025,
    featured: true,
  },
  {
    slug: "vita-environmental",
    name: "Vita Environmental",
    industry: "Environmental",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: vitaEnvironmental,
    alt: "Website design and brand identity for Vita Environmental services",
    type: "client",
    description: "Environmental services company branding and digital presence.",
    category: ["Web Design", "Branding"],
    year: 2025,
  },
  {
    slug: "spa-alita",
    name: "Spa Alita",
    industry: "Hospitality",
    services: ["Brand Identity", "Marketing Graphics"],
    image: spaAlita,
    alt: "Luxury spa brand identity and marketing collateral for Spa Alita",
    type: "client",
    description: "Luxury spa brand identity and marketing collateral.",
    category: ["Branding"],
    year: 2024,
  },
  {
    slug: "architecture-studio",
    name: "Architecture Studio",
    industry: "Architecture",
    services: ["Brand Identity", "Website Design"],
    image: architectureStudio,
    alt: "Minimalist brand identity concept for an architecture firm",
    type: "concept",
    description: "Minimalist brand identity concept for an architecture firm.",
    category: ["Web Design", "Branding"],
    year: 2024,
  },
  {
    slug: "fashion-brand",
    name: "Fashion Brand",
    industry: "Fashion",
    services: ["Brand Identity", "Packaging"],
    image: fashionBrand,
    alt: "High-end fashion brand identity and packaging design concept",
    type: "concept",
    description: "High-end fashion brand identity and packaging concept.",
    category: ["Branding"],
    year: 2024,
  },
  {
    slug: "coffee-brand",
    name: "Coffee Brand",
    industry: "Food & Beverage",
    services: ["Brand Identity", "Packaging"],
    image: coffeeBrand,
    alt: "Artisan coffee brand identity and packaging design",
    type: "concept",
    description: "Artisan coffee brand identity and packaging design concept.",
    category: ["Branding"],
    year: 2023,
  },
  {
    slug: "restaurant-identity",
    name: "Restaurant Identity",
    industry: "Food & Beverage",
    services: ["Brand Identity", "Marketing Graphics"],
    image: restaurantIdentity,
    alt: "Upscale restaurant brand identity and collateral design",
    type: "concept",
    description: "Upscale restaurant brand identity and collateral concept.",
    category: ["Branding"],
    year: 2023,
  },
  {
    slug: "law-firm-branding",
    name: "Law Firm Branding",
    industry: "Legal",
    services: ["Brand Identity", "Website Design"],
    image: lawFirm,
    alt: "Professional law firm brand identity and website concept",
    type: "concept",
    description: "Professional law firm brand identity concept.",
    category: ["Web Design", "Branding"],
    year: 2023,
  },
  {
    slug: "creative-agency-identity",
    name: "Creative Agency Identity",
    industry: "Creative",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: creativeAgency,
    alt: "Bold creative agency brand identity and website concept",
    type: "concept",
    description: "Bold creative agency brand identity concept.",
    category: ["Web Design", "Branding"],
    year: 2023,
  },
];

export const projectCategories: ProjectCategory[] = ["Web Design", "Branding", "Ecommerce", "AI Automation"];
