export type Lang = "en" | "zh";

export const translations = {
  nav: {
    home: { en: "Home", zh: "首頁" },
    pricing: { en: "Pricing", zh: "價格" },
    work: { en: "Work", zh: "作品集" },
    services: { en: "Services", zh: "服務內容" },
    contact: { en: "Contact", zh: "聯絡我" },
    privacy: { en: "Privacy", zh: "隱私政策" },
    terms: { en: "Terms", zh: "服務條款" },
  },
  hero: {
    words: {
      en: ["Branding", "Websites", "Marketing Design"],
      zh: ["品牌設計", "網站設計", "行銷視覺"],
    },
    subtitle: {
      en: "Personal portfolio of Sony Lin, a Vancouver-based designer specializing in branding, website design, and marketing materials.",
      zh: "我協助企業建立清晰一致的品牌形象，並打造現代化網站平台，讓你的服務看起來更專業、更可信，也更容易被客戶選擇。",
    },
    cta1: { en: "View Work", zh: "查看作品" },
    cta2: { en: "Start a Project", zh: "索取報價" },
  },
  selectedWork: {
    title: { en: "Selected\nWork", zh: "精選\n作品" },
    viewAll: { en: "View All Projects", zh: "查看所有專案" },
  },
  services: {
    title: { en: "Services", zh: "服務內容" },
    items: [
      {
        title: { en: "Brand Identity Design", zh: "品牌識別系統" },
        description: {
          en: "Brand identity systems including logos, visual guidelines, and brand applications.",
          zh: "品牌識別系統，包含 Logo、視覺規範與品牌應用設計。",
        },
        items: {
          en: [
            "Logo design and visual marks",
            "Brand identity systems",
            "Brand guidelines and standards",
            "Business card and stationery",
            "Brand application design",
          ],
          zh: [
            "Logo 設計與視覺標誌",
            "品牌識別系統建立",
            "品牌規範與標準文件",
            "名片與文具設計",
            "品牌應用延伸設計",
          ],
        },
        deliverables: {
          en: ["Logo files (SVG, PNG, PDF)", "Brand guidelines document", "Stationery design templates"],
          zh: ["Logo 檔案（SVG、PNG、PDF）", "品牌規範文件", "文具設計模板"],
        },
      },
      {
        title: { en: "Website Design", zh: "網站設計與建置" },
        description: {
          en: "Corporate, portfolio, and business websites designed for clarity and usability.",
          zh: "企業、作品集與商業網站設計，注重清晰度與使用體驗。",
        },
        items: {
          en: [
            "Corporate websites",
            "Business websites",
            "Portfolio websites",
            "Professional service websites",
            "Responsive layout design",
          ],
          zh: [
            "企業形象網站",
            "商業網站設計",
            "作品集網站",
            "專業服務產業網站",
            "響應式版面設計",
          ],
        },
        deliverables: {
          en: ["Full website design (desktop + mobile)", "Interactive prototype", "Design system assets"],
          zh: ["完整網站設計（桌面＋手機）", "互動原型", "設計系統素材"],
        },
      },
      {
        title: { en: "Ecommerce Websites", zh: "電商網站" },
        description: {
          en: "Online stores built using Shopify or WooCommerce platforms.",
          zh: "使用 Shopify 或 WooCommerce 平台建置的線上商店。",
        },
        items: {
          en: [
            "Shopify store design",
            "WooCommerce websites",
            "Product page design",
            "Online store setup",
            "Ecommerce branding",
          ],
          zh: [
            "Shopify 商店設計",
            "WooCommerce 網站建置",
            "產品頁面設計",
            "線上商店架設",
            "電商品牌視覺",
          ],
        },
        deliverables: {
          en: ["Fully designed store theme", "Product page templates", "Checkout flow design"],
          zh: ["完整商店主題設計", "產品頁面模板", "結帳流程設計"],
        },
      },
      {
        title: { en: "Marketing Graphics", zh: "行銷視覺設計" },
        description: {
          en: "Marketing materials including posters, brochures, flyers, and social media graphics.",
          zh: "行銷素材，包含海報、手冊、傳單與社群媒體圖片。",
        },
        items: {
          en: [
            "Posters and flyers",
            "Brochures and booklets",
            "Social media graphics",
            "Advertising materials",
            "Promotional design assets",
          ],
          zh: [
            "海報與傳單設計",
            "手冊與小冊子排版",
            "社群媒體圖片",
            "廣告素材設計",
            "宣傳設計物製作",
          ],
        },
        deliverables: {
          en: ["Print-ready files (PDF, AI)", "Social media template set", "Campaign asset package"],
          zh: ["印刷檔案（PDF、AI）", "社群媒體模板組", "行銷素材包"],
        },
      },
    ],
  },
  about: {
    title: { en: "About\nSony Lin", zh: "關於\nSony Lin" },
    subtitle: {
      en: "Sony Lin is a Vancouver-based designer specializing in branding, website design, and marketing graphics.",
      zh: "我是 Sony Lin，長期從事品牌與網站設計。我的工作方式偏向系統化：先把結構與目標釐清，再用一致的視覺語言把成果做乾淨、做完整。",
    },
    p1: {
      en: "He graduated from Emily Carr University in 2002 and has been working in design for over twenty years.",
      zh: "我擅長把「舊網站」升級成現代、清晰、可信的品牌網站，也能從零開始建立品牌與網站系統。",
    },
    p2: {
      en: "Throughout his career, Sony has worked with businesses across a wide range of industries including healthcare, real estate, retail, hospitality, and professional services.",
      zh: "過去二十多年，我與不同產業的客戶合作，包括醫療、房地產、零售、餐飲與專業服務。",
    },
    p3: {
      en: "His work focuses on creating clear brand identities, well-structured websites, and marketing materials that help businesses present themselves professionally and consistently.",
      zh: "我的工作聚焦於打造清晰的品牌識別、結構良好的網站，以及幫助企業呈現專業一致形象的行銷素材。",
    },
    highlightsTitle: { en: "Highlights", zh: "重點" },
    highlights: {
      en: [
        "20+ years of design experience",
        "Emily Carr University graduate (2002)",
        "Vancouver-based",
        "Branding, Web & Marketing",
      ],
      zh: [
        "超過 20 年設計經驗",
        "Emily Carr University 畢業（2002）",
        "位於溫哥華",
        "品牌、網站與行銷設計",
      ],
    },
  },
  contact: {
    title: { en: "Start a\nProject", zh: "索取\n報價" },
    body: {
      en: "If you are interested in working together or discussing a project, please get in touch.",
      zh: "請簡單描述你的需求，我會盡快回覆並提供下一步建議。",
    },
    name: { en: "Name", zh: "姓名" },
    email: { en: "Email", zh: "Email" },
    projectType: { en: "Project Type", zh: "專案類型" },
    message: { en: "Message", zh: "訊息內容" },
    selectProject: { en: "Select a project type", zh: "選擇專案類型" },
    optBranding: { en: "Brand Identity Design", zh: "品牌識別設計" },
    optWebsite: { en: "Website Design", zh: "網站設計" },
    optEcommerce: { en: "Ecommerce Website", zh: "電商網站" },
    optMarketing: { en: "Marketing Graphics", zh: "行銷視覺設計" },
    optOther: { en: "Other", zh: "其他" },
    submit: { en: "Send Message", zh: "送出訊息" },
    responseTime: { en: "Typical response time: 1–2 business days", zh: "通常回覆時間：1–2 個工作天" },
  },
  work: {
    title: { en: "Work", zh: "作品集" },
    intro: {
      en: "A curated selection of selected design and web projects.",
      zh: "以下為部分專案展示。點擊可查看專案詳情。",
    },
  },
  footer: {
    tagline: {
      en: "Personal design portfolio of Sony Lin.",
      zh: "Sonykun Design｜品牌設計・網站設計・行銷視覺",
    },
    copyright: {
      en: "Sonykun Design. Copyright © 2026 All Rights Reserved.",
      zh: "Sonykun Design. Copyright © 2026 版權所有。",
    },
  },
  viewProject: { en: "View Project", zh: "查看專案" },
} as const;

export function t(obj: { en: string; zh: string }, lang: Lang): string {
  return obj[lang];
}
