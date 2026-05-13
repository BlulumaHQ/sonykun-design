// Bilingual content for the rebuilt Home, Services, and Pricing pages.
// Kept separate from translations.ts to avoid bloating the main file.

import type { Lang } from "./translations";

type Bi = { en: string; zh: string };
type BiList = { en: readonly string[]; zh: readonly string[] };

export interface ServiceCard {
  title: Bi;
  body: Bi;
  price: Bi;
  link: Bi;
  href: string;
  badge?: Bi;
}
export interface BundleCard {
  title: Bi;
  price: string;
  save: Bi;
  items: BiList;
  badge?: Bi;
}
export interface PricingTierCard {
  title: Bi;
  price: string;
  features: BiList;
  badge?: Bi;
  note?: Bi;
}
export type { Lang };

export const homeContent = {
  hero: {
    eyebrow: { en: "Vancouver Web Designer", zh: "溫哥華網站設計師" },
    headline: {
      en: "Get a Professional Website\nin 3 Business Days.",
      zh: "3 個工作天內\n獲得專業網站。",
    },
    subhead: {
      en: "You see your website preview before you pay — then we launch it. Websites starting at $349 CAD. No surprises, no hidden fees.",
      zh: "付款前先看到網站預覽，確認後我們上線。網站起價 $349 加幣。沒有意外、沒有隱藏費用。",
    },
    ctaPrimary: { en: "See Website Packages", zh: "查看網站方案" },
    ctaSecondary: { en: "View Our Work", zh: "查看作品集" },
    trust: {
      en: "500+ websites built · Since 2005 · Based in Vancouver, BC · 3-day delivery",
      zh: "500+ 網站完成 · 自 2005 年起 · 位於溫哥華 BC · 3 天交付",
    },
  },
  process: {
    eyebrow: { en: "The Process", zh: "工作流程" },
    title: { en: "Simple. Fast. No Technical Headaches.", zh: "簡單、快速、零技術負擔。" },
    subtext: {
      en: "You focus on your business. We handle everything.",
      zh: "您專注於業務，其他都交給我們。",
    },
    steps: [
      {
        title: { en: "Tell Us About Your Business", zh: "告訴我們您的業務" },
        body: {
          en: "Fill out a short form with your business info, style preferences, and goals. Takes under 5 minutes.",
          zh: "填寫一份簡短表單，提供業務資訊、風格偏好與目標。不到 5 分鐘。",
        },
      },
      {
        title: { en: "Review Your Free Preview", zh: "查看免費預覽" },
        body: {
          en: "We build a real, working preview of your website. You see it before you pay a single dollar.",
          zh: "我們會打造一個真實、可運作的網站預覽。您在付款前就能看到成果。",
        },
      },
      {
        title: { en: "Launch in 3 Business Days", zh: "3 個工作天內上線" },
        body: {
          en: "Once you approve and pay, we finalize everything and get your site live. We handle domain setup, hosting transfer, and all technical details.",
          zh: "確認並付款後，我們會完成所有細節並讓網站上線。網域設定、主機轉移與所有技術環節都由我們處理。",
        },
      },
    ],
  },
  services: {
    eyebrow: { en: "What We Do", zh: "服務內容" },
    title: { en: "Everything Your Business Needs Online", zh: "您的業務上線所需的一切" },
    cards: [
      {
        title: { en: "Website Design", zh: "網站設計" },
        body: {
          en: "Professional, mobile-friendly websites built for small businesses. From single-page sites to full multi-page builds.",
          zh: "為小型企業打造的專業、手機友善網站。從單頁網站到完整多頁建置。",
        },
        price: { en: "From $349 CAD", zh: "起價 $349 加幣" },
        link: { en: "See website packages →", zh: "查看網站方案 →" },
        href: "/pricing",
      },
      {
        title: { en: "Logo & Brand Identity", zh: "Logo 與品牌識別" },
        body: {
          en: "Logos, colour palettes, typography systems, and brand guidelines that make your business look established and trustworthy.",
          zh: "Logo、配色、字體系統與品牌規範，讓您的業務看起來專業且值得信賴。",
        },
        price: { en: "From $375 CAD", zh: "起價 $375 加幣" },
        link: { en: "See logo packages →", zh: "查看 Logo 方案 →" },
        href: "/pricing",
      },
      {
        title: { en: "Website + Brand Bundle", zh: "網站 + 品牌套裝" },
        body: {
          en: "Get your website and logo designed together and save. Our most popular option for businesses launching from scratch.",
          zh: "網站與 Logo 一起設計，更划算。從零開始的客戶最常選擇的方案。",
        },
        price: { en: "From $599 CAD — save $125", zh: "起價 $599 加幣 — 省 $125" },
        link: { en: "See bundle packages →", zh: "查看套裝方案 →" },
        href: "/pricing",
        badge: { en: "Best Value", zh: "最佳價值" },
      },
      {
        title: { en: "Hosting & Maintenance", zh: "主機與維護" },
        body: {
          en: "We handle all technical details — hosting, domain setup, transfers, and ongoing maintenance. You don't touch a thing.",
          zh: "主機、網域、轉移與維護所有技術細節由我們處理。您完全不需要動手。",
        },
        price: { en: "Free hosting available · Managed from $15/mo", zh: "提供免費主機 · 代管自 $15/月起" },
        link: { en: "Learn more →", zh: "了解更多 →" },
        href: "/pricing",
      },
    ],
  },
  portfolio: {
    eyebrow: { en: "Recent Work", zh: "近期作品" },
    title: { en: "Built for Real Businesses", zh: "為真實企業打造" },
    cta: { en: "See All Projects", zh: "查看所有專案" },
  },
  bundle: {
    eyebrow: { en: "Most Popular Package", zh: "最受歡迎方案" },
    title: { en: "Business Bundle — $899 CAD", zh: "商業套裝 — $899 加幣" },
    body: {
      en: "Business Website (up to 7 pages) + Logo Growth package. Normally $1,149 — save $250. Everything you need to launch your business professionally.",
      zh: "商業網站（最多 7 頁）+ Logo Growth 方案。原價 $1,149 — 省 $250。專業上線所需的一切。",
    },
    checklist: {
      en: [
        "Up to 7-page responsive website",
        "Logo design with colour palette and typography",
        "SEO-friendly structure",
        "Free hosting included",
      ],
      zh: ["最多 7 頁響應式網站", "Logo 設計含配色與字體", "SEO 友善結構", "包含免費主機"],
    },
    cta: { en: "Get This Bundle", zh: "選擇此套裝" },
  },
  reviews: {
    eyebrow: { en: "Client Reviews", zh: "客戶評價" },
    title: { en: "What Our Clients Say", zh: "客戶怎麼說" },
  },
  faq: {
    eyebrow: { en: "FAQ", zh: "常見問題" },
    title: { en: "Common Questions", zh: "常見問題" },
    items: [
      {
        q: { en: "How does the website preview work?", zh: "網站預覽是怎麼運作的？" },
        a: {
          en: "Before you pay anything, we build a real working preview of your website based on your brief. You review it, request any direction changes, and once you're happy with where it's going, you pay and we finalize it. You always see what you're getting before committing.",
          zh: "付款前，我們會根據您提供的需求打造一個真實可運作的網站預覽。您審閱後可提出方向調整，滿意後再付款，我們完成最終版本。您永遠在確定方案前就能看到成果。",
        },
      },
      {
        q: { en: "I already have hosting — do I need to change it?", zh: "我已經有主機 — 需要更換嗎？" },
        a: {
          en: "Not necessarily. If you prefer to keep your current hosting, we can work with it. If you'd like to move to our hosting platform, we handle the entire transfer for you — domain setup, DNS configuration, everything. You just provide your login credentials and we do the rest. Most transfers take less than 24 hours.",
          zh: "不一定。若您想保留現有主機，我們可以配合。若您希望轉到我們的平台，整個轉移流程由我們處理 — 網域設定、DNS 設定，全部包辦。您只需提供登入資訊，其餘交給我們。多數轉移在 24 小時內完成。",
        },
      },
      {
        q: { en: "How long does it take to build a website?", zh: "建一個網站需要多久？" },
        a: {
          en: "We typically deliver the completed website within 3 business days of receiving your content and payment. Complex or larger projects may take slightly longer — we'll always let you know upfront.",
          zh: "收到內容與付款後，通常 3 個工作天內完成網站。較大或較複雜的專案可能稍微長一些 — 我們會事先告知。",
        },
      },
      {
        q: { en: "What do I need to provide?", zh: "我需要準備什麼？" },
        a: {
          en: "Your business name, logo (if you have one), any text content you want on the site, and any photos or images. If you don't have copy or photos, we offer copywriting as an add-on and can source free stock photography that fits your brand.",
          zh: "業務名稱、Logo（如果有）、想放在網站上的文字內容，以及任何照片或圖片。若沒有文案或照片，我們提供文案撰寫加購服務，並能挑選符合品牌的免費圖庫照片。",
        },
      },
      {
        q: { en: "How many revisions are included?", zh: "包含多少次修改？" },
        a: {
          en: "Every project includes two rounds of revisions at no extra cost. Additional revision rounds are $25 each. Most clients are happy well within the two rounds.",
          zh: "每個專案包含兩輪免費修改。額外修改每輪 $25。多數客戶在兩輪內就很滿意。",
        },
      },
      {
        q: { en: "Will my website work on phones?", zh: "我的網站在手機上能正常顯示嗎？" },
        a: {
          en: "Yes. Every website we build is fully responsive and tested on mobile, tablet, and desktop before delivery.",
          zh: "可以。我們建的每個網站都完全響應式，交付前會在手機、平板與桌面測試。",
        },
      },
      {
        q: { en: "Is the website mine after it's done?", zh: "完成後網站是我的嗎？" },
        a: {
          en: "Absolutely. Once you pay, the website belongs entirely to you. We can continue hosting it for you, or hand over all the files if you prefer to manage it yourself.",
          zh: "當然是。付款後網站完全歸您所有。我們可以繼續代管，或將所有檔案交給您自行管理。",
        },
      },
    ],
  },
  finalCta: {
    title: { en: "Ready to Get Started?", zh: "準備好開始了嗎？" },
    body: {
      en: "Tell us about your business and we'll build you a free preview.",
      zh: "告訴我們您的業務，我們會為您打造免費預覽。",
    },
    cta: { en: "Get Your Free Preview", zh: "獲取免費預覽" },
  },
} as const;

export const servicesContent = {
  hero: {
    eyebrow: { en: "What We Offer", zh: "服務項目" },
    title: { en: "Services", zh: "服務內容" },
    subtext: {
      en: "Professional design services for small businesses — from first logo to full website launch.",
      zh: "為小型企業提供的專業設計服務 — 從第一個 Logo 到完整網站上線。",
    },
  },
  website: {
    title: { en: "Website Design", zh: "網站設計" },
    body: {
      en: "We design and build professional, mobile-friendly websites that represent your business well and work hard for you. Whether you need a simple 5-page site or a full multi-page business presence, we handle the entire build — design, development, copy guidance, and launch.",
      zh: "我們設計並建置專業、手機友善的網站，為您的業務認真服務。從簡單的 5 頁網站到完整的多頁企業形象，我們處理整個流程 — 設計、開發、文案建議與上線。",
    },
    features: {
      en: [
        "Corporate and business websites",
        "Portfolio and service websites",
        "Mobile-optimised, responsive layout",
        "SEO-friendly structure and page titles",
        "Contact forms and lead capture",
        "Google Maps and social media integration",
      ],
      zh: [
        "企業與商業網站",
        "作品集與服務型網站",
        "手機優化、響應式版面",
        "SEO 友善結構與頁面標題",
        "聯絡表單與名單收集",
        "Google 地圖與社群媒體整合",
      ],
    },
    deliverables: {
      en: [
        "Fully launched website (desktop + mobile)",
        "Contact form setup",
        "Basic SEO meta tags on all pages",
        "Free hosting on our platform",
        "Domain and DNS setup assistance",
      ],
      zh: [
        "完整上線網站（桌面 + 手機）",
        "聯絡表單設定",
        "所有頁面基本 SEO Meta 標籤",
        "我們平台的免費主機",
        "網域與 DNS 設定協助",
      ],
    },
    price: { en: "Starting at $349 CAD", zh: "起價 $349 加幣" },
    link: { en: "See full pricing →", zh: "查看完整價格 →" },
  },
  logo: {
    title: { en: "Logo & Brand Identity", zh: "Logo 與品牌識別" },
    body: {
      en: "A strong logo is the foundation of your brand. We create logos that are clean, versatile, and built to last — along with the full brand system your business needs to look consistent everywhere.",
      zh: "強而有力的 Logo 是品牌的基礎。我們設計乾淨、多用途、耐用的 Logo — 並提供完整品牌系統，讓您的業務在所有場合都保持一致。",
    },
    features: {
      en: [
        "Custom logo design and visual mark",
        "Brand identity systems",
        "Colour palette and typography selection",
        "Brand guidelines document",
        "Business card and stationery design",
        "Brand application across materials",
      ],
      zh: [
        "客製 Logo 設計與視覺標誌",
        "品牌識別系統",
        "配色與字體選擇",
        "品牌規範文件",
        "名片與文具設計",
        "品牌應用於各種素材",
      ],
    },
    deliverables: {
      en: [
        "Logo files in SVG, PNG, and PDF",
        "Colour palette with hex/CMYK codes",
        "Typography recommendation guide",
        "Brand guidelines document (Growth and Premium tiers)",
        "Stationery design templates (Premium tier)",
      ],
      zh: [
        "SVG、PNG 與 PDF 格式 Logo 檔案",
        "含 hex/CMYK 色碼的配色",
        "字體推薦指南",
        "品牌規範文件（Growth 與 Premium 方案）",
        "文具設計範本（Premium 方案）",
      ],
    },
    price: { en: "Starting at $375 CAD", zh: "起價 $375 加幣" },
    link: { en: "See full pricing →", zh: "查看完整價格 →" },
  },
  midCta: {
    title: { en: "Not sure which service you need?", zh: "不確定需要哪種服務？" },
    body: {
      en: "Send us a message and we'll recommend the right package for your budget and goals.",
      zh: "傳訊息給我們，我們會根據您的預算與目標推薦合適的方案。",
    },
    cta: { en: "Get in Touch", zh: "聯絡我們" },
  },
  bundles: {
    title: { en: "Website + Brand Bundles", zh: "網站 + 品牌套裝" },
    body: {
      en: "Get your website and logo designed together in one streamlined project. Bundles save you money and ensure your website and brand identity are designed to work together from the start.",
      zh: "在一個專案中同時設計網站與 Logo。套裝幫您省錢，並確保網站與品牌從一開始就完美搭配。",
    },
    cards: [
      {
        title: { en: "Starter Bundle", zh: "入門套裝" },
        price: "$599 CAD",
        save: { en: "Save $125 (normally $724)", zh: "省 $125（原價 $724）" },
        items: {
          en: [
            "Basic Website (up to 5 pages)",
            "Logo Basic (3 concepts, vector files)",
            "Mobile-friendly and contact form",
          ],
          zh: ["基本網站（最多 5 頁）", "Logo Basic（3 個概念、向量檔）", "手機友善與聯絡表單"],
        },
      },
      {
        title: { en: "Business Bundle", zh: "商業套裝" },
        price: "$899 CAD",
        save: { en: "Save $250 (normally $1,149)", zh: "省 $250（原價 $1,149）" },
        items: {
          en: [
            "Business Website (up to 7 pages)",
            "Logo Growth (logo + colour + typography + mini brand guide)",
            "SEO-friendly structure",
            "Free hosting included",
          ],
          zh: [
            "商業網站（最多 7 頁）",
            "Logo Growth（Logo + 配色 + 字體 + 迷你品牌指南）",
            "SEO 友善結構",
            "包含免費主機",
          ],
        },
        badge: { en: "Most Popular", zh: "最受歡迎" },
      },
      {
        title: { en: "Brand Launch Bundle", zh: "品牌啟動套裝" },
        price: "$1,699 CAD",
        save: { en: "Save $451 (normally $2,150)", zh: "省 $451（原價 $2,150）" },
        items: {
          en: [
            "Premium Website (up to 10 pages)",
            "Logo Premium (full brand identity system)",
            "Full brand guideline document",
            "Advanced layout and custom styling",
          ],
          zh: [
            "進階網站（最多 10 頁）",
            "Logo Premium（完整品牌識別系統）",
            "完整品牌規範文件",
            "進階版面與客製樣式",
          ],
        },
      },
    ],
  },
  hosting: {
    title: { en: "Hosting & Maintenance", zh: "主機與維護" },
    body: {
      en: "We take care of all the technical side so you don't have to think about it. Whether you're starting fresh or moving from an existing provider, we handle everything.",
      zh: "我們處理所有技術細節，您完全不用煩惱。不論是全新開始或從現有供應商轉移，我們都包辦。",
    },
    handle: {
      title: { en: "What we handle", zh: "我們處理的項目" },
      items: {
        en: [
          "Website hosting on our platform",
          "Domain registration and DNS setup",
          "Transfers from your existing hosting provider (we do all the work)",
          "Basic maintenance and uptime monitoring",
          "Small revision support (Managed Hosting plan)",
        ],
        zh: [
          "我們平台的網站主機",
          "網域註冊與 DNS 設定",
          "從現有主機商轉移（全部由我們處理）",
          "基本維護與可用性監控",
          "小幅修改支援（代管方案）",
        ],
      },
    },
    options: {
      title: { en: "Hosting options", zh: "主機方案" },
      free: {
        title: { en: "Free Hosting — $0", zh: "免費主機 — $0" },
        body: {
          en: "Your site hosted on our platform at no cost. You own the site. We keep it running.",
          zh: "免費將您的網站架在我們平台上。網站歸您所有，我們維持運作。",
        },
      },
      managed: {
        title: { en: "Managed Hosting — $15/month or $135/year", zh: "代管主機 — $15/月 或 $135/年" },
        body: {
          en: "Full hosting management, basic maintenance, and small revision support included.",
          zh: "完整主機管理、基本維護與小幅修改支援。",
        },
      },
    },
    note: {
      en: "Already have hosting with GoDaddy, Squarespace, Wix, or another provider? No problem — we'll transfer your domain and migrate your site for free as part of your project.",
      zh: "已經在 GoDaddy、Squarespace、Wix 或其他供應商有主機？沒問題 — 我們會在專案中免費為您轉移網域與網站。",
    },
  },
  faq: {
    title: { en: "Common Questions", zh: "常見問題" },
    items: [
      {
        q: { en: "Do you work with clients outside Vancouver?", zh: "您接溫哥華以外的客戶嗎？" },
        a: {
          en: "Yes. While we're based in Vancouver, BC, we work with small businesses across Canada entirely remotely. Everything is handled by email and online — no in-person meetings required.",
          zh: "可以。雖然我們位於溫哥華 BC，但全程遠端服務全加拿大的小型企業。所有溝通透過 Email 與線上完成，不需要面對面會議。",
        },
      },
      {
        q: { en: "Can I get just a logo without a website?", zh: "我可以只買 Logo 不要網站嗎？" },
        a: {
          en: "Absolutely. Logo and brand identity design is available as a standalone service. See our logo pricing on the Pricing page.",
          zh: "當然可以。Logo 與品牌識別可獨立購買。請見價格頁的 Logo 價格。",
        },
      },
      {
        q: { en: "What if I already have a logo — can you still build my website?", zh: "如果我已經有 Logo — 您還能幫我做網站嗎？" },
        a: {
          en: "Yes. If you have a logo, we'll use it as the foundation for your website design. If your logo is low-resolution or not in vector format, we offer a Vector Logo Fix for $100 to clean it up.",
          zh: "可以。我們會以您現有的 Logo 為網站設計的基礎。若 Logo 解析度低或非向量格式，我們提供 $100 的向量 Logo 修復服務。",
        },
      },
      {
        q: { en: "Do you offer ongoing support after the site launches?", zh: "上線後有持續支援嗎？" },
        a: {
          en: "Yes. Our Managed Hosting plan at $15/month includes basic maintenance and small revision support. For larger updates, we're always available to quote on a per-project basis.",
          zh: "有。代管主機方案每月 $15，包含基本維護與小幅修改。較大更新可依專案個別報價。",
        },
      },
      {
        q: { en: "What's the difference between the bundle packages and buying separately?", zh: "套裝與分開購買有什麼差別？" },
        a: {
          en: "The bundles are the same services — just discounted when purchased together. The Business Bundle, for example, saves you $250 versus buying the Business Website and Logo Growth packages separately. Plus, designing both together means the branding and website look cohesive from the start.",
          zh: "套裝就是相同服務 — 一起購買享折扣。例如商業套裝比分開買商業網站與 Logo Growth 省 $250。同時設計也讓品牌與網站從一開始就一致。",
        },
      },
    ],
  },
  bottomCta: {
    title: { en: "Ready to get started?", zh: "準備好開始了嗎？" },
    body: {
      en: "We'll build you a free preview so you can see your website before you commit.",
      zh: "我們會為您打造免費預覽，讓您在決定前先看到網站。",
    },
    cta: { en: "Get Your Free Preview", zh: "獲取免費預覽" },
  },
} as const;

export const pricingContent = {
  header: {
    eyebrow: { en: "Transparent Pricing", zh: "透明定價" },
    title: { en: "Full Pricing", zh: "完整價格" },
    subtext: {
      en: "All prices in CAD. No hidden fees, no surprises. You see a preview of your website before you pay.",
      zh: "所有價格以加幣計算。沒有隱藏費用、沒有意外。付款前先看到網站預覽。",
    },
  },
  website: {
    title: { en: "Website Design", zh: "網站設計" },
    cards: [
      {
        title: { en: "Basic Website", zh: "基本網站" },
        price: "$349",
        description: {
          en: "A simple and clean website to establish your online presence and make your business look professional.",
          zh: "簡潔乾淨的網站，建立您的線上形象，讓業務看起來專業可靠。",
        },
        features: {
          en: ["Up to 5 pages", "Mobile-friendly design", "Contact form", "Free hosting available", "Basic brand setup (logo + colours if needed)"],
          zh: ["最多 5 頁", "手機友善設計", "聯絡表單", "提供免費主機", "基本品牌設定（如需要含 Logo 與配色）"],
        },
      },
      {
        title: { en: "Business Website", zh: "商業網站" },
        price: "$499",
        description: {
          en: "A complete business website designed to clearly present your services and help customers contact you.",
          zh: "完整的商業網站，清楚呈現您的服務，讓客戶輕鬆聯絡您。",
        },
        features: {
          en: ["Up to 7 pages", "Mobile-optimised layout", "SEO-friendly structure", "Contact form", "Free hosting available", "Basic branding integration (logo, colours, consistency)"],
          zh: ["最多 7 頁", "手機優化版面", "SEO 友善結構", "聯絡表單", "提供免費主機", "基本品牌整合（Logo、配色、一致性）"],
        },
        badge: { en: "Most Popular", zh: "最受歡迎" },
      },
      {
        title: { en: "Premium Website", zh: "進階網站" },
        price: "$875",
        description: {
          en: "A more refined website experience for businesses that want stronger presentation, better structure, and higher perceived value.",
          zh: "更精緻的網站體驗，適合追求更強呈現、更佳結構與更高品牌價值的業務。",
        },
        features: {
          en: ["Up to 10 pages", "Advanced layout design", "Custom styling", "SEO-optimised structure", "Contact form", "Enhanced brand presentation"],
          zh: ["最多 10 頁", "進階版面設計", "客製樣式", "SEO 優化結構", "聯絡表單", "強化品牌呈現"],
        },
      },
      {
        title: { en: "E-commerce Basic", zh: "電商基本版" },
        price: "$1,299+",
        note: {
          en: "Pricing varies based on number of products and features",
          zh: "價格依產品數量與功能而定",
        },
        description: {
          en: "Start selling online with a clean, simple e-commerce setup designed for small businesses.",
          zh: "為小型企業打造的乾淨、簡單電商方案，輕鬆開始線上銷售。",
        },
        features: {
          en: ["Online store setup", "Payment integration", "Up to 10 products", "Mobile-friendly checkout", "Basic store branding"],
          zh: ["線上商店建置", "金流整合", "最多 10 件商品", "手機友善結帳", "基本商店品牌設計"],
        },
      },
    ],
  },
  branding: {
    title: { en: "Logo & Branding", zh: "Logo 與品牌" },
    body: {
      en: "Logo design today is faster and more accessible than ever. What matters is how your brand looks and works together with your website. Basic brand setup is included with website packages if you don't already have one.",
      zh: "現在的 Logo 設計比以往更快、更容易取得。真正重要的是品牌與網站如何整體搭配。若您尚未擁有 Logo，網站方案已包含基本品牌設定。",
    },
    addonsLabel: { en: "Optional add-ons", zh: "可選加購" },
    cards: [
      {
        title: { en: "Quick Logo", zh: "快速 Logo" },
        price: "$49",
        body: {
          en: "Simple AI-assisted logo, clean and ready to use.",
          zh: "AI 輔助的簡潔 Logo，乾淨即用。",
        },
      },
      {
        title: { en: "Business Logo", zh: "商業 Logo" },
        price: "$129",
        body: {
          en: "Refined logo with better layout, colour and balance.",
          zh: "更精緻的 Logo，具備更佳的版面、配色與平衡。",
        },
      },
      {
        title: { en: "Brand Upgrade", zh: "品牌升級" },
        price: "$249",
        body: {
          en: "Multiple logo variations, brand direction, and visual consistency.",
          zh: "多種 Logo 變體、品牌方向與視覺一致性。",
        },
      },
    ],
    closingLine: {
      en: "You don't just need a website. You need something that helps your business look real, trustworthy, and easy to contact.",
      zh: "您需要的不只是一個網站，而是能讓您的業務看起來真實、值得信任、容易聯絡的存在。",
    },
  },
  bundles: {
    title: { en: "Website + Brand Bundles", zh: "網站 + 品牌套裝" },
    body: { en: "Save when you combine a website and logo into one project.", zh: "網站與 Logo 一起購買享優惠。" },
    cards: [
      {
        title: { en: "Starter Bundle", zh: "入門套裝" },
        price: "$599 CAD",
        save: { en: "Save $125", zh: "省 $125" },
        items: {
          en: ["Basic Website (up to 5 pages)", "Logo Basic (3 concepts, vector files)"],
          zh: ["基本網站（最多 5 頁）", "Logo Basic（3 個概念、向量檔）"],
        },
      },
      {
        title: { en: "Business Bundle", zh: "商業套裝" },
        price: "$899 CAD",
        save: { en: "Save $250", zh: "省 $250" },
        items: {
          en: [
            "Business Website (up to 7 pages)",
            "Logo Growth (logo + colour palette + typography + mini brand guide)",
            "SEO-friendly structure",
            "Free hosting included",
          ],
          zh: [
            "商業網站（最多 7 頁）",
            "Logo Growth（Logo + 配色 + 字體 + 迷你品牌指南）",
            "SEO 友善結構",
            "包含免費主機",
          ],
        },
        badge: { en: "Best Value", zh: "最佳價值" },
      },
      {
        title: { en: "Brand Launch Bundle", zh: "品牌啟動套裝" },
        price: "$1,699 CAD",
        save: { en: "Save $451", zh: "省 $451" },
        items: {
          en: [
            "Premium Website (up to 10 pages)",
            "Logo Premium (full brand identity system)",
            "Brand guidelines document",
          ],
          zh: ["進階網站（最多 10 頁）", "Logo Premium（完整品牌識別系統）", "品牌規範文件"],
        },
      },
    ],
  },
  logo: {
    title: { en: "Logo & Brand Identity", zh: "Logo 與品牌識別" },
    cards: [
      {
        title: { en: "Logo Basic", zh: "Logo Basic" },
        price: "$375",
        features: {
          en: ["3 logo concepts", "3 revision rounds", "Vector files (SVG, PNG, PDF)"],
          zh: ["3 個 Logo 概念", "3 輪修改", "向量檔（SVG、PNG、PDF）"],
        },
      },
      {
        title: { en: "Logo Growth", zh: "Logo Growth" },
        price: "$650",
        features: {
          en: ["Logo design", "Colour palette", "Typography recommendation", "Mini brand guide"],
          zh: ["Logo 設計", "配色", "字體推薦", "迷你品牌指南"],
        },
        badge: { en: "Most Popular", zh: "最受歡迎" },
      },
      {
        title: { en: "Logo Premium", zh: "Logo Premium" },
        price: "$1,275",
        features: {
          en: [
            "Full brand identity system",
            "Logo suite (primary + variations)",
            "Colour system",
            "Typography system",
            "Brand guidelines document",
          ],
          zh: ["完整品牌識別系統", "Logo 套組（主視覺 + 變體）", "配色系統", "字體系統", "品牌規範文件"],
        },
      },
    ],
  },
  hosting: {
    title: { en: "Hosting", zh: "主機" },
    free: {
      title: { en: "Free Hosting", zh: "免費主機" },
      price: "$0",
      body: {
        en: "Your website hosted on our platform at no cost. Fully managed by us.",
        zh: "免費將您的網站架在我們平台上，全程由我們管理。",
      },
    },
    managed: {
      title: { en: "Managed Hosting", zh: "代管主機" },
      price: { en: "$15/month or $135/year", zh: "$15/月 或 $135/年" },
      features: {
        en: ["Hosting management", "Basic maintenance", "Small revision support"],
        zh: ["主機管理", "基本維護", "小幅修改支援"],
      },
      note: { en: "Save $45 with annual billing", zh: "年繳省 $45" },
    },
  },
  addons: {
    title: { en: "Add-ons", zh: "加購服務" },
    cards: [
      {
        title: { en: "Website Copywriting", zh: "網站文案撰寫" },
        price: { en: "$149 / website", zh: "$149 / 網站" },
        body: {
          en: "Professional copy rewrite for your entire website. (Blog posts not included.)",
          zh: "為您整個網站重新撰寫專業文案。（不含部落格文章。）",
        },
      },
      {
        title: { en: "Vector Logo Fix", zh: "向量 Logo 修復" },
        price: "$100",
        body: {
          en: "Convert your existing low-resolution logo to a clean, high-quality vector file.",
          zh: "將您現有的低解析度 Logo 轉換為乾淨、高品質的向量檔。",
        },
      },
    ],
  },
  faq: {
    title: { en: "Common Questions", zh: "常見問題" },
    items: [
      {
        q: { en: "Do I pay upfront or after the website is done?", zh: "我是先付款還是完成後付款？" },
        a: {
          en: "Neither. Here's how it works: after you fill out our brief, we build a real working preview of your website. You review the preview first — once you're happy with the direction, you pay and we finalize the site and launch it. You never pay for something you haven't seen.",
          zh: "都不是。流程是：填寫需求後，我們先打造真實可運作的網站預覽。您先檢視預覽 — 滿意方向後再付款，我們完成最終版本並上線。您絕不會為沒看過的東西付款。",
        },
      },
      {
        q: { en: "Are there any ongoing fees?", zh: "有任何持續費用嗎？" },
        a: {
          en: "Free hosting is truly free — no monthly charges. Managed Hosting is $15/month or $135/year if you want us to handle maintenance and minor updates. There are no other mandatory recurring fees.",
          zh: "免費主機是真的免費 — 沒有月費。若需要我們處理維護與小幅更新，可選擇代管主機 $15/月 或 $135/年。沒有其他強制性的持續費用。",
        },
      },
      {
        q: { en: "What's included in the 'free hosting'?", zh: "「免費主機」包含什麼？" },
        a: {
          en: "Your website is hosted on our platform at no cost to you. It stays live as long as you want. If you ever want to move it to your own hosting provider, we'll help with the migration.",
          zh: "您的網站免費架在我們平台上，想保持上線多久都可以。若日後想搬到自己的主機商，我們會協助轉移。",
        },
      },
      {
        q: { en: "Do bundle prices include revisions?", zh: "套裝價格包含修改嗎？" },
        a: {
          en: "Yes. All packages — including bundles — include two rounds of revisions at no extra cost. Additional revision rounds are $25 each.",
          zh: "是的。所有方案 — 包含套裝 — 都包含兩輪免費修改。額外修改每輪 $25。",
        },
      },
      {
        q: { en: "Can I upgrade my package later?", zh: "之後可以升級方案嗎？" },
        a: {
          en: "Yes. If you start with a Basic Website and later want to add more pages or upgrade features, we can quote the difference. It's always easier to plan ahead, but upgrading later is possible.",
          zh: "可以。若先從基本網站開始，之後想加頁數或升級功能，我們會報差價。事先規劃當然更輕鬆，但之後升級也沒問題。",
        },
      },
      {
        q: { en: "Do you charge extra for domain setup or hosting transfers?", zh: "網域設定或主機轉移會額外收費嗎？" },
        a: {
          en: "No. Domain and DNS setup, as well as transfers from your existing hosting provider, are included in your project at no extra cost.",
          zh: "不會。網域與 DNS 設定，以及從現有主機商轉移，全部包含在專案中，不額外收費。",
        },
      },
    ],
  },
  bottomCta: {
    title: { en: "See Your Website Before You Pay", zh: "付款前先看到網站" },
    body: {
      en: "Fill out a short brief and we'll build you a free preview. No commitment required.",
      zh: "填寫簡短需求，我們會打造免費預覽。完全沒有任何承諾。",
    },
    cta: { en: "Get Your Free Preview", zh: "獲取免費預覽" },
  },
} as const;

export const pageMeta = {
  home: {
    title: "Vancouver Web Designer for Small Businesses | Sonykun Design",
    description:
      "Professional website and logo design starting at $349 CAD. See your website preview before you pay. Based in Vancouver, serving BC small businesses since 2005.",
  },
  services: {
    title: "Web Design & Brand Identity Services | Sonykun Design Vancouver",
    description:
      "Website design, logo design, brand identity, and bundle packages for small businesses. Transparent pricing from $349 CAD. Free preview before you pay.",
  },
  pricing: {
    title: "Web Design Pricing Vancouver | Sonykun Design",
    description:
      "Transparent web design and logo pricing in CAD. Websites from $349, logos from $375, bundles from $599. No hidden fees. Free preview before you pay.",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sonykun Design",
  description: "Professional website and logo design for small businesses in Vancouver, BC",
  url: "https://sonykundesign.com",
  telephone: "(604) 262-1168",
  email: "support@sonykundesign.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  priceRange: "$$",
  foundingDate: "2005",
};
