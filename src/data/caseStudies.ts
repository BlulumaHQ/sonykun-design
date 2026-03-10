import oneParkHero from "@/assets/casestudies/one-park-home-hero.jpg";
import oneParkMobile from "@/assets/casestudies/one-park-home-mobile.jpg";
import presoteaHero from "@/assets/casestudies/presotea-hero.jpg";
import presoteaMobile from "@/assets/casestudies/presotea-mobile.jpg";
import btnHero from "@/assets/casestudies/btn-hero.jpg";
import btnBrand from "@/assets/casestudies/btn-brand.jpg";

export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  liveUrl: string;
  overview: string;
  sections: CaseStudySection[];
  result: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "one-park-home": {
    slug: "one-park-home",
    name: "One Park Home",
    subtitle: "Corporate Website + Marketing Design",
    heroImage: oneParkHero,
    heroAlt: "One Park Home real estate website displayed on laptop in modern architectural office",
    liveUrl: "https://one-park-home.bluluma.com/",
    overview:
      "One Park Home is a real estate development brand focused on modern residential living. The objective of this project was to create a digital presence that communicates trust, elegance, and architectural sophistication while presenting the brand in a clean and contemporary way.\n\nThe website needed to appeal to both property buyers and investors, emphasizing visual storytelling and clarity of information.",
    sections: [
      {
        title: "Architectural Visual Language",
        content:
          "Real estate buyers respond strongly to visual presentation. The layout uses large photography, generous white space, and a structured grid system to reflect the feeling of modern architecture and premium living environments.",
        image: oneParkMobile,
        imageAlt: "One Park Home responsive website design on mobile and tablet devices",
      },
      {
        title: "Clear Information Hierarchy",
        content:
          "Property development websites often contain complex information. The structure of the site was designed to guide visitors through the story of the project from introduction to development details and contact.",
      },
      {
        title: "Elegant and Timeless Design",
        content:
          "Rather than relying on short-term design trends, the interface was built with refined typography, balanced spacing, and a neutral color palette to create a timeless corporate appearance.",
      },
    ],
    result:
      "The final website presents One Park Home as a polished and credible development brand that communicates confidence and modern architectural values.",
  },
  presotea: {
    slug: "presotea",
    name: "Presotea",
    subtitle: "Corporate Website + Marketing Design",
    heroImage: presoteaHero,
    heroAlt: "Presotea bubble tea brand website displayed on laptop in modern cafe environment",
    liveUrl: "https://presotea.bluluma.com/",
    overview:
      "Presotea is an international bubble tea brand known for its fresh tea brewing technology and modern retail experience.\n\nThe goal of the website design was to create a vibrant digital platform that reflects the brand's youthful energy while maintaining strong visual consistency across marketing materials.",
    sections: [
      {
        title: "Brand Driven Visual Identity",
        content:
          "The design extends Presotea's physical brand environment into the digital space through bold colors, dynamic photography, and energetic layouts.",
        image: presoteaMobile,
        imageAlt: "Presotea brand marketing materials and mobile website design",
      },
      {
        title: "Product Centered Experience",
        content:
          "The website emphasizes drinks and menu presentation using large product imagery and clean sections to make the browsing experience engaging.",
      },
      {
        title: "Marketing Integration",
        content:
          "The site also functions as a marketing platform supporting promotions, brand storytelling, and franchise expansion.",
      },
    ],
    result:
      "The final website captures the brand's youthful and modern personality while maintaining a clear and structured user experience.",
  },
  "btn-real-estate": {
    slug: "btn-real-estate",
    name: "BTN Real Estate",
    subtitle: "Brand Identity + Corporate Website + Marketing Design",
    heroImage: btnHero,
    heroAlt: "BTN Real Estate corporate website displayed on laptop in luxury office",
    liveUrl: "https://btn.bluluma.com/",
    overview:
      "BTN Real Estate provides consulting and advisory services for hospitality and real estate development projects.\n\nThe project involved developing a complete brand identity system along with a corporate website that reflects professionalism, expertise, and industry credibility.",
    sections: [
      {
        title: "Professional Brand Identity",
        content:
          "The logo and identity system were designed to communicate stability and trust, essential qualities in the real estate advisory sector.",
        image: btnBrand,
        imageAlt: "BTN Real Estate brand identity system including business cards and stationery",
      },
      {
        title: "Corporate Website Structure",
        content:
          "The website emphasizes company profile, project expertise, and industry insight through a structured and professional layout.",
      },
      {
        title: "Integrated Marketing Materials",
        content:
          "The brand identity was designed to extend beyond the website into presentations and marketing materials to maintain consistent corporate branding.",
      },
    ],
    result:
      "The final brand and website position BTN Real Estate as a professional advisory firm capable of handling complex hospitality and real estate development projects.",
  },
};
