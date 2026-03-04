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

export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  image: string;
  type: "client" | "concept";
  description?: string;
}

export const projects: Project[] = [
  {
    slug: "friendly-dental",
    name: "Friendly Dental",
    industry: "Healthcare",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: friendlyDental,
    type: "client",
    description: "Complete brand identity and digital presence for a modern dental clinic.",
  },
  {
    slug: "live-at-headwater",
    name: "Live at Headwater",
    industry: "Real Estate",
    services: ["Brand Identity", "Marketing Graphics"],
    image: liveAtHeadwater,
    type: "client",
    description: "Premium residential development branding and marketing materials.",
  },
  {
    slug: "btn-real-estate",
    name: "BTN Real Estate",
    industry: "Real Estate",
    services: ["Brand Identity", "Website Design"],
    image: btnRealEstate,
    type: "client",
    description: "Professional real estate brand identity and corporate website.",
  },
  {
    slug: "nuera-nutra",
    name: "NuEra Nutra",
    industry: "Health & Wellness",
    services: ["Brand Identity", "Packaging", "Website Design"],
    image: nueranutra,
    type: "client",
    description: "Health supplement brand identity, packaging design, and e-commerce platform.",
  },
  {
    slug: "vita-environmental",
    name: "Vita Environmental",
    industry: "Environmental",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: vitaEnvironmental,
    type: "client",
    description: "Environmental services company branding and digital presence.",
  },
  {
    slug: "spa-alita",
    name: "Spa Alita",
    industry: "Hospitality",
    services: ["Brand Identity", "Marketing Graphics"],
    image: spaAlita,
    type: "client",
    description: "Luxury spa brand identity and marketing collateral.",
  },
  {
    slug: "architecture-studio",
    name: "Architecture Studio",
    industry: "Architecture",
    services: ["Brand Identity", "Website Design"],
    image: architectureStudio,
    type: "concept",
    description: "Minimalist brand identity concept for an architecture firm.",
  },
  {
    slug: "fashion-brand",
    name: "Fashion Brand",
    industry: "Fashion",
    services: ["Brand Identity", "Packaging"],
    image: fashionBrand,
    type: "concept",
    description: "High-end fashion brand identity and packaging concept.",
  },
  {
    slug: "coffee-brand",
    name: "Coffee Brand",
    industry: "Food & Beverage",
    services: ["Brand Identity", "Packaging"],
    image: coffeeBrand,
    type: "concept",
    description: "Artisan coffee brand identity and packaging design concept.",
  },
  {
    slug: "restaurant-identity",
    name: "Restaurant Identity",
    industry: "Food & Beverage",
    services: ["Brand Identity", "Marketing Graphics"],
    image: restaurantIdentity,
    type: "concept",
    description: "Upscale restaurant brand identity and collateral concept.",
  },
  {
    slug: "law-firm-branding",
    name: "Law Firm Branding",
    industry: "Legal",
    services: ["Brand Identity", "Website Design"],
    image: lawFirm,
    type: "concept",
    description: "Professional law firm brand identity concept.",
  },
  {
    slug: "creative-agency-identity",
    name: "Creative Agency Identity",
    industry: "Creative",
    services: ["Brand Identity", "Website Design", "Marketing Graphics"],
    image: creativeAgency,
    type: "concept",
    description: "Bold creative agency brand identity concept.",
  },
];
