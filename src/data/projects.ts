import oneParkHome from "@/assets/projects/one-park-home.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import helenLam from "@/assets/projects/helen-lam.jpg";
import presotea from "@/assets/projects/presotea.jpg";
import littleMountainDental from "@/assets/projects/little-mountain-dental.jpg";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import yangHealth from "@/assets/projects/yang-health.jpg";
import unityTattoo from "@/assets/projects/unity-tattoo.jpg";
import nueraNutra from "@/assets/projects/nuera-nutra.jpg";
import vitaEnvironmental from "@/assets/projects/vita-environmental.jpg";
import vancouverWineSchool from "@/assets/projects/vancouver-wine-school.jpg";
import calinClub from "@/assets/projects/calin-club.jpg";

export type ProjectCategory = "Web Design" | "Branding" | "Ecommerce" | "AI Automation";

export type PortfolioCategory =
  | "Dental"
  | "Realtor"
  | "Restaurant"
  | "Construction"
  | "Beauty"
  | "Medical"
  | "Local Business"
  | "E-Commerce"
  | "Professional Services"
  | "Other";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Dental",
  "Realtor",
  "Restaurant",
  "Construction",
  "Beauty",
  "Medical",
  "Local Business",
  "E-Commerce",
  "Professional Services",
  "Other",
];

export const portfolioCategoryZh: Record<PortfolioCategory | "All", string> = {
  All: "全部",
  Dental: "牙科",
  Realtor: "房地產",
  Restaurant: "餐飲",
  Construction: "建築",
  Beauty: "美容",
  Medical: "醫療",
  "Local Business": "本地商家",
  "E-Commerce": "電子商務",
  "Professional Services": "專業服務",
  Other: "其他",
};

export type ServiceCategory =
  | "Website Design"
  | "Corporate Website"
  | "Marketing Design"
  | "Branding Design"
  | "Logo Design"
  | "Social Media Design"
  | "E-Commerce"
  | "Landing Page"
  | "SEO Setup"
  | "AI Automation";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Website Design",
  "Corporate Website",
  "Marketing Design",
  "Branding Design",
  "Logo Design",
  "Social Media Design",
  "E-Commerce",
  "Landing Page",
  "SEO Setup",
  "AI Automation",
];

export const serviceCategoryZh: Record<ServiceCategory | "All", string> = {
  All: "全部",
  "Website Design": "網站設計",
  "Corporate Website": "企業網站",
  "Marketing Design": "行銷設計",
  "Branding Design": "品牌設計",
  "Logo Design": "Logo 設計",
  "Social Media Design": "社群媒體設計",
  "E-Commerce": "電商網站",
  "Landing Page": "Landing Page",
  "SEO Setup": "SEO 設定",
  "AI Automation": "AI 自動化",
};

export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  /** Standardised filterable service tags (every project must have ≥1). */
  serviceCategories: ServiceCategory[];
  image: string;
  alt: string;
  type: "client" | "wordpress";
  description?: string;
  category: ProjectCategory[];
  portfolioCategory: PortfolioCategory;
  year: number;
  featured?: boolean;
  caseStudy?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  // ── Featured Case Studies ──
  {
    slug: "one-park-home",
    portfolioCategory: "Construction",
    name: "One Park Home",
    industry: "Real Estate & Construction",
    services: ["Corporate Website", "Marketing Design"],
    serviceCategories: ["Corporate Website", "Marketing Design"],
    image: oneParkHome,
    alt: "Corporate website design for One Park Home real estate development",
    type: "client",
    description: "A digital presence that communicates trust, elegance, and architectural sophistication for a modern residential development brand.",
    category: ["Web Design"],
    year: 2026,
    featured: true,
    caseStudy: true,
    liveUrl: "https://one-park-home.bluluma.com/",
  },
  {
    slug: "presotea",
    portfolioCategory: "Restaurant",
    name: "Presotea",
    industry: "Food & Retail",
    services: ["Corporate Website", "Marketing Design"],
    serviceCategories: ["Corporate Website", "Marketing Design"],
    image: presotea,
    alt: "Corporate website and marketing design for Presotea bubble tea brand",
    type: "client",
    description: "A vibrant digital platform reflecting the brand's youthful energy with strong visual consistency across marketing materials.",
    category: ["Web Design"],
    year: 2026,
    featured: true,
    caseStudy: true,
    liveUrl: "https://presotea.bluluma.com/",
  },
  {
    slug: "btn-real-estate",
    portfolioCategory: "Realtor",
    name: "BTN Real Estate",
    industry: "Real Estate & Construction",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
    serviceCategories: ["Logo Design", "Corporate Website", "Marketing Design", "Branding Design"],
    image: btnRealEstate,
    alt: "Brand identity and corporate website design for BTN Real Estate",
    type: "client",
    description: "Complete brand identity system with a corporate website reflecting professionalism, expertise, and industry credibility.",
    category: ["Web Design", "Branding"],
    year: 2026,
    featured: true,
    caseStudy: true,
    liveUrl: "https://btn.bluluma.com/",
  },
  // ── Standard Projects ──
  {
    slug: "helen-lam-real-estate",
    portfolioCategory: "Realtor",
    name: "Helen Lam Real Estate",
    industry: "Real Estate & Construction",
    services: ["Corporate Website", "Marketing Design"],
    serviceCategories: ["Corporate Website", "Marketing Design"],
    image: helenLam,
    alt: "Corporate website and marketing design for Helen Lam Real Estate",
    type: "client",
    category: ["Web Design"],
    year: 2025,
    liveUrl: "https://helenlam.ca/",
  },
  {
    slug: "little-mountain-dental",
    portfolioCategory: "Dental",
    name: "Little Mountain Dental",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
    serviceCategories: ["Logo Design", "Corporate Website", "Marketing Design", "Branding Design"],
    image: littleMountainDental,
    alt: "Brand logo and website design for Little Mountain Dental clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "http://littlemountain.bluluma.com/",
  },
  {
    slug: "friendly-dental",
    portfolioCategory: "Dental",
    name: "Friendly Dental",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
    serviceCategories: ["Logo Design", "Corporate Website", "Marketing Design", "Branding Design"],
    image: friendlyDental,
    alt: "Brand identity and website design for Friendly Dental clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "https://friendlydental.ca/",
  },
  {
    slug: "yang-health",
    portfolioCategory: "Medical",
    name: "Yang Health Therapeutic Clinic",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website"],
    serviceCategories: ["Logo Design", "Corporate Website", "Branding Design"],
    image: yangHealth,
    alt: "Brand logo and corporate website for Yang Health Therapeutic Clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "https://yang-health-therapeutic.bluluma.com/",
  },
  {
    slug: "unity-tattoo",
    portfolioCategory: "Beauty",
    name: "Unity Tattoo",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website"],
    serviceCategories: ["Logo Design", "Corporate Website", "Branding Design"],
    image: unityTattoo,
    alt: "Brand logo and corporate website for Unity Tattoo studio",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2024,
    liveUrl: "https://unity-tattoo.bluluma.com/",
  },
  {
    slug: "nuera-nutra",
    portfolioCategory: "Medical",
    name: "NuEra Nutra",
    industry: "Biotechnology & Environmental",
    services: ["Corporate Website"],
    serviceCategories: ["Corporate Website"],
    image: nueraNutra,
    alt: "Corporate website design for NuEra Nutra biotechnology company",
    type: "client",
    category: ["Web Design"],
    year: 2024,
    liveUrl: "https://nueranutra.bluluma.com/",
  },
  {
    slug: "vita-environmental",
    portfolioCategory: "Professional Services",
    name: "Vita Environmental",
    industry: "Biotechnology & Environmental",
    services: ["Corporate Website"],
    serviceCategories: ["Corporate Website"],
    image: vitaEnvironmental,
    alt: "Corporate website design for Vita Environmental services",
    type: "client",
    category: ["Web Design"],
    year: 2024,
    liveUrl: "https://vitaenv.com/",
  },
  // ── WordPress Projects (bottom of Work page only) ──
  {
    slug: "vancouver-wine-school",
    portfolioCategory: "Local Business",
    name: "Vancouver Wine School",
    industry: "Education",
    services: ["Website Design"],
    serviceCategories: ["Website Design"],
    image: vancouverWineSchool,
    alt: "WordPress website design for Vancouver Wine School",
    type: "wordpress",
    category: ["Web Design"],
    year: 2023,
    liveUrl: "https://vancouverwineschool.ca/",
  },
  {
    slug: "calin-club",
    portfolioCategory: "Local Business",
    name: "Calin Club",
    industry: "Lifestyle",
    services: ["Website Design"],
    serviceCategories: ["Website Design"],
    image: calinClub,
    alt: "WordPress website design for Calin Club",
    type: "wordpress",
    category: ["Web Design"],
    year: 2023,
    liveUrl: "http://calinclub.ca/",
  },
];

export const projectCategories: ProjectCategory[] = ["Web Design", "Branding", "Ecommerce", "AI Automation"];
