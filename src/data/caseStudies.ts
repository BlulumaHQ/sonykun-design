export interface CaseStudySection {
  title: string;
  content: string;
  /** Which CMS screenshot to show with this section. */
  image?: "mobile" | "page";
  imageAlt?: string;
}

export interface CaseStudyVersion {
  /** Portfolio slug in the central CMS (screenshots come from there). */
  cmsSlug: string;
  label: string;
  direction: string;
  url: string;
}

export interface CaseStudyComparison {
  intro: string;
  rows: { aspect: string; a: string; b: string }[];
  aBestFor: string;
  bBestFor: string;
}

export interface CaseStudyDecision {
  chosen: "A" | "B";
  heading: string;
  paragraphs: string[];
}

export interface CaseStudyBrand {
  intro: string;
  deliverables: string[];
  mockups: { src: string; alt: string; caption: string }[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  subtitle: string;
  /** Portfolio slug in the central CMS; hero screenshots come from there. */
  cmsSlug: string;
  heroAlt: string;
  /** Production site. Omitted for concepts that were not launched. */
  liveUrl?: string;
  overview: string;
  sections: CaseStudySection[];
  versions: { a: CaseStudyVersion; b: CaseStudyVersion };
  comparison: CaseStudyComparison;
  /** Only for projects where the client chose and launched one version. */
  decision?: CaseStudyDecision;
  brand?: CaseStudyBrand;
  result: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "one-park-home": {
    slug: "one-park-home",
    name: "One Park Home",
    subtitle: "Residential Sales Website — Two Design Concepts",
    cmsSlug: "one-park-home-a",
    heroAlt: "One Park residential sales website concept displayed on a laptop",
    overview:
      "One Park is a community of three terraced towers around a private park in Central Richmond, with move-in-ready 1, 2 and 3 bedroom homes. We designed two complete website concepts for its sales launch, each taking a different route to the same goal: getting qualified buyers to register.\n\nVersion A leads with mood and lifestyle imagery. Version B leads with information and the registration form. Comparing them side by side shows how the same content can be shaped for different kinds of buyers.",
    sections: [
      {
        title: "Architectural Visual Language",
        content:
          "Real estate buyers respond strongly to visual presentation. Both concepts use large photography, generous white space and a structured grid that reflects modern architecture and premium living.",
        image: "mobile",
        imageAlt: "One Park responsive website concept on mobile",
      },
      {
        title: "Built Around Registration",
        content:
          "Every section ends in the same action: register for more information. The two concepts differ in how much they ask the buyer to read before that moment.",
      },
    ],
    versions: {
      a: {
        cmsSlug: "one-park-home-a",
        label: "Version A",
        direction: "Editorial & image-led",
        url: "https://one-park-home.bluluma.com/",
      },
      b: {
        cmsSlug: "one-park-home-b",
        label: "Version B",
        direction: "Information-rich & conversion-led",
        url: "https://oneparkhome-b.netlify.app/",
      },
    },
    comparison: {
      intro:
        "Both concepts share the same headline, “You Will Flourish Here”, and the same brand palette. Where they part ways is in how much the page explains before asking for a registration.",
      rows: [
        {
          aspect: "First impression",
          a: "A full-bleed hero with a serif headline and a single Register Now button, followed by four image tiles (luxury living, location, amenities, views).",
          b: "The same hero, with a location label, a one-line summary of the towers and homes, and two actions: Register Now and Explore.",
        },
        {
          aspect: "Content depth",
          a: "Short teasers for Location, Interiors and Amenities, each linking to its own section page.",
          b: "Everything on one page: specific finishes, the Wellness Wing, the private park and travel times to Richmond Centre, the Canada Line, YVR and downtown.",
        },
        {
          aspect: "Registration",
          a: "Register Now buttons repeat through the page and lead to a separate contact step.",
          b: "The full registration form — with unit type — is built into the page, beside the presentation centre address, hours and phone numbers.",
        },
        {
          aspect: "Credibility",
          a: "A “Designed and Built by” band credits the developer, architect, builder and engineer.",
          b: "Credibility comes from detail: concrete specs, distances and an open-daily presentation centre.",
        },
        {
          aspect: "Tone",
          a: "Quiet, gallery-like and aspirational.",
          b: "Practical and reassuring — answers the questions a buyer would ask in person.",
        },
      ],
      aBestFor:
        "Brand-led launches where the goal is to make an emotional first impression and let the sales team handle the details.",
      bBestFor:
        "Move-in-ready inventory, where buyers are comparing options right now and want facts, locations and an easy way to register in one visit.",
    },
    result:
      "Two fully built directions gave the team a clear, side-by-side choice between an emotional, image-led launch and a practical, information-first sales page — both on brand, both mobile-ready.",
  },
  presotea: {
    slug: "presotea",
    name: "Presotea",
    subtitle: "Brand Website — Two Design Concepts",
    cmsSlug: "presotea-a",
    heroAlt: "Presotea bubble tea brand website concept displayed on a laptop",
    overview:
      "Presotea is an international bubble tea brand, founded in Taiwan in 2006, known for brewing every cup fresh with its espresso-style tea extraction. We designed two complete website concepts for its BC presence, each telling the Presotea story in a different way.\n\nVersion A is a bright, brand-forward showcase built around the menu and the app. Version B is a persuasive, education-led page that explains why fresh-brewed tea is different and recruits new franchisees.",
    sections: [
      {
        title: "Brand Driven Visual Identity",
        content:
          "Both concepts extend Presotea's in-store brand into the digital space through its colours, product photography and energetic layouts.",
        image: "mobile",
        imageAlt: "Presotea mobile website concept",
      },
      {
        title: "Product Centered Experience",
        content:
          "Drinks are the hero in both directions. The difference is whether the page sells the menu first or the brewing method first.",
      },
    ],
    versions: {
      a: {
        cmsSlug: "presotea-a",
        label: "Version A",
        direction: "Brand showcase & menu-first",
        url: "https://presotea.bluluma.com/",
      },
      b: {
        cmsSlug: "presotea-b",
        label: "Version B",
        direction: "Story-led & franchise-focused",
        url: "https://presotea-b.netlify.app/",
      },
    },
    comparison: {
      intro:
        "The same brand, the same drinks and the same promise — fresh tea, freshly made. The two concepts differ in who they speak to first and what they ask that visitor to do.",
      rows: [
        {
          aspect: "Opening message",
          a: "“Fresh Tea, Fresh Made!” with two clear actions: View Our Menu and Find a Store.",
          b: "“Fresh Bubble Tea Brewed with Premium Taiwan Tea Leaves”, followed straight away by a problem: “Tired of bubble tea that tastes like sugar water?”",
        },
        {
          aspect: "Storytelling",
          a: "Three quick reasons to believe — fresh ingredients, Teapresso technology and a five-generation tea heritage — plus brand stats.",
          b: "A problem-and-solution narrative contrasting powder-based drinks with real tea leaves, then a guide to five tea types.",
        },
        {
          aspect: "Menu",
          a: "Today's picks plus six menu categories with starting prices.",
          b: "Four feature drinks, with links out to the full menu.",
        },
        {
          aspect: "Main conversion",
          a: "Customers: order ahead with the Presotea app, find a store, get in touch.",
          b: "Customers and partners: visit a store, email the team, and a dedicated Join Our Franchise section.",
        },
        {
          aspect: "Tone",
          a: "Light, playful and visual — feels like stepping into the store.",
          b: "Confident and explanatory — builds the case for quality before asking for anything.",
        },
      ],
      aBestFor:
        "Driving everyday customer visits and app orders, where speed to the menu and the nearest store matters most.",
      bBestFor:
        "Brand building and franchise growth, where the audience needs to understand what makes Presotea different before they commit.",
    },
    result:
      "Two complete directions showed how one brand can be presented as a quick, joyful customer experience or as a persuasive story that also supports franchise expansion.",
  },
  "btn-real-estate": {
    slug: "btn-real-estate",
    name: "BTN Real Estate Services",
    subtitle: "Brand Identity + Logo + Website + Marketing Design",
    cmsSlug: "btn-a",
    heroAlt: "BTN hotel development advisory website displayed on a laptop",
    liveUrl: "https://btnpro.ca/",
    overview:
      "BTN is a Vancouver hospitality-focused real estate consultancy. It helps landowners find the highest-value hotel outcome for a site, validate it through the proforma, plan the rezoning and permit pathway, and line up the right brand and delivery team.\n\nWe created BTN's complete brand package — logo, colour palette, typography and marketing materials — and then designed and built its website in two directions before the team chose the one that launched at btnpro.ca.",
    sections: [
      {
        title: "Professional Brand Identity",
        content:
          "The logo and identity system were designed to communicate stability and trust, essential qualities in the real estate advisory sector.",
        image: "page",
        imageAlt: "BTN website inner page",
      },
      {
        title: "Corporate Website Structure",
        content:
          "The website explains BTN's services, projects, process and partner ecosystem through a clear, professional layout built for owners and investors.",
      },
    ],
    versions: {
      a: {
        cmsSlug: "btn-a",
        label: "Version A",
        direction: "Consultative & solution-first",
        url: "https://btnpro.ca/",
      },
      b: {
        cmsSlug: "btn-b",
        label: "Version B",
        direction: "Problem-led & conversion-focused",
        url: "https://btn-b.netlify.app/",
      },
    },
    comparison: {
      intro:
        "Both versions open with the same promise — “Proforma-Driven Hotel Development Advisory for the Lower Mainland” — over the same architectural photography. The difference is in how they lead an owner from that first line to a conversation.",
      rows: [
        {
          aspect: "Header",
          a: "A solid white navigation bar with the full-colour logo and a quiet “Start a Conversation” button.",
          b: "A transparent bar over the hero with a white logo and a bolder “Evaluate Your Site” button.",
        },
        {
          aspect: "Page structure",
          a: "Solution-first: straight into “We Convert Underutilised Property Into Hospitality Value”, where BTN sits in the market and its core differentiators.",
          b: "Problem-first: “Sound familiar?” lists four costly mistakes owners make, then presents BTN as the solution.",
        },
        {
          aspect: "Calls to action",
          a: "Evaluate Your Site, View Projects and Start a Conversation — invitations to talk.",
          b: "Evaluate Your Site, See Results and Get a Proforma-First Assessment — repeated prompts to act.",
        },
        {
          aspect: "Layout",
          a: "Left-aligned, two-column sections that read like a consultancy profile.",
          b: "Centred, high-contrast sections with numbered pain points — closer to a sales landing page.",
        },
        {
          aspect: "Tone",
          a: "Calm, expert and advisory.",
          b: "Urgent and persuasive.",
        },
      ],
      aBestFor:
        "Relationship-driven, high-value advisory work, where trust and credibility matter more than a fast click.",
      bBestFor:
        "Campaign traffic and lead generation, where visitors need a strong reason to act on their first visit.",
    },
    decision: {
      chosen: "A",
      heading: "Why Version A was the right fit",
      paragraphs: [
        "BTN's clients are landowners and real estate owners weighing major investment decisions. They don't buy hotel development advice from a hard sell — they look for a partner who sounds measured, credible and in control.",
        "Version A speaks that language. It leads with what BTN does rather than what is going wrong, keeps the calls to action consultative, and uses a clean white header that puts the new full-colour logo front and centre. Version B was the stronger lead-generation page, but its urgency suited a campaign better than a long-term advisory brand.",
      ],
    },
    brand: {
      intro:
        "We designed BTN's brand identity so that every touchpoint — from the website to a proposal on a client's desk — looks like it comes from the same firm. The mockups below show the identity applied across typical brand touchpoints.",
      deliverables: [
        "Logo design — primary lockup and standalone triangle mark",
        "Brand colour palette — deep navy and blues with a bronze accent",
        "Typography system built on Inter",
        "Marketing materials",
        "Website design and development",
        "On-page SEO",
      ],
      mockups: [
        { src: "/images/case-study/btn/btn-system.webp", alt: "BTN logo, triangle mark, colour palette and typography", caption: "Logo, mark, palette and typography" },
        { src: "/images/case-study/btn/btn-cards.webp", alt: "BTN business card front and back", caption: "Business cards" },
        { src: "/images/case-study/btn/btn-stationery.webp", alt: "BTN letterhead and envelope", caption: "Letterhead and envelope" },
        { src: "/images/case-study/btn/btn-proposal.webp", alt: "BTN advisory proposal cover and summary page", caption: "Proposal template" },
        { src: "/images/case-study/btn/btn-signage.webp", alt: "BTN logo on office wall signage", caption: "Office signage" },
      ],
    },
    result:
      "BTN now has a complete, consistent brand and a live website at btnpro.ca that positions it as a credible advisory partner for complex hospitality and real estate projects.",
  },
};
