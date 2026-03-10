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

export interface Project {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  image: string;
  alt: string;
  type: "client" | "wordpress";
  description?: string;
  category: ProjectCategory[];
  year: number;
  featured?: boolean;
  caseStudy?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  // ── Featured Case Studies ──
  {
    slug: "one-park-home",
    name: "One Park Home",
    industry: "Real Estate & Construction",
    services: ["Corporate Website", "Marketing Design"],
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
    name: "Presotea",
    industry: "Food & Retail",
    services: ["Corporate Website", "Marketing Design"],
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
    name: "BTN Real Estate",
    industry: "Real Estate & Construction",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
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
    name: "Helen Lam Real Estate",
    industry: "Real Estate & Construction",
    services: ["Corporate Website", "Marketing Design"],
    image: helenLam,
    alt: "Corporate website and marketing design for Helen Lam Real Estate",
    type: "client",
    category: ["Web Design"],
    year: 2025,
    liveUrl: "https://helenlam.ca/",
  },
  {
    slug: "little-mountain-dental",
    name: "Little Mountain Dental",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
    image: littleMountainDental,
    alt: "Brand logo and website design for Little Mountain Dental clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "http://littlemountain.bluluma.com/",
  },
  {
    slug: "friendly-dental",
    name: "Friendly Dental",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website", "Marketing Design"],
    image: friendlyDental,
    alt: "Brand identity and website design for Friendly Dental clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "https://friendlydental.ca/",
  },
  {
    slug: "yang-health",
    name: "Yang Health Therapeutic Clinic",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website"],
    image: yangHealth,
    alt: "Brand logo and corporate website for Yang Health Therapeutic Clinic",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2025,
    liveUrl: "https://yang-health-therapeutic.bluluma.com/",
  },
  {
    slug: "unity-tattoo",
    name: "Unity Tattoo",
    industry: "Medical & Healthcare",
    services: ["Brand Logo", "Corporate Website"],
    image: unityTattoo,
    alt: "Brand logo and corporate website for Unity Tattoo studio",
    type: "client",
    category: ["Web Design", "Branding"],
    year: 2024,
    liveUrl: "https://unity-tattoo.bluluma.com/",
  },
  {
    slug: "nuera-nutra",
    name: "NuEra Nutra",
    industry: "Biotechnology & Environmental",
    services: ["Corporate Website"],
    image: nueraNutra,
    alt: "Corporate website design for NuEra Nutra biotechnology company",
    type: "client",
    category: ["Web Design"],
    year: 2024,
    liveUrl: "https://nueranutra.bluluma.com/",
  },
  {
    slug: "vita-environmental",
    name: "Vita Environmental",
    industry: "Biotechnology & Environmental",
    services: ["Corporate Website"],
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
    name: "Vancouver Wine School",
    industry: "Education",
    services: ["WordPress Website"],
    image: vancouverWineSchool,
    alt: "WordPress website design for Vancouver Wine School",
    type: "wordpress",
    category: ["Web Design"],
    year: 2023,
    liveUrl: "https://vancouverwineschool.ca/",
  },
  {
    slug: "calin-club",
    name: "Calin Club",
    industry: "Lifestyle",
    services: ["WordPress Website"],
    image: calinClub,
    alt: "WordPress website design for Calin Club",
    type: "wordpress",
    category: ["Web Design"],
    year: 2023,
    liveUrl: "http://calinclub.ca/",
  },
];

export const projectCategories: ProjectCategory[] = ["Web Design", "Branding", "Ecommerce", "AI Automation"];
