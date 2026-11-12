// Route titles/descriptions shared by SiteHead (runtime) and the build-time
// pre-render (scripts/prerenderPlugin.ts). Keep free of "@/..." imports.
export const SITE = "https://sonykundesign.com";

type Meta = { title: string; description: string };

/** Titles for routes whose pages don't set their own meta (home/services/pricing use pageMeta). */
export const ROUTE_META: Record<string, { en: Meta; zh: Meta }> = {
  "/portfolio": {
    en: {
      title: "Website Design Portfolio | Sonykun Design Vancouver",
      description: "Browse small business websites designed and built by Sonykun Design in Vancouver, BC.",
    },
    zh: {
      title: "網站設計作品集｜Sonykun Design 溫哥華",
      description: "瀏覽 Sonykun Design 在溫哥華為中小企業設計並建置的網站作品。",
    },
  },
  "/contact": {
    en: {
      title: "Contact Sonykun Design | Vancouver Web Designer",
      description: "Tell us about your business and get a free website preview before you pay. Call (604) 262-1168 or send a message.",
    },
    zh: {
      title: "聯絡我們｜Sonykun Design 溫哥華網站設計",
      description: "告訴我們你的事業，付款前先取得免費網站預覽。歡迎來電 (604) 262-1168 或留言給我們。",
    },
  },
  "/case-study": {
    en: {
      title: "Case Studies | Sonykun Design",
      description: "How Sonykun Design rebuilt websites and brands for Vancouver small businesses: the problem, the approach and the result.",
    },
    zh: {
      title: "案例研究｜Sonykun Design",
      description: "Sonykun Design 如何為溫哥華中小企業重新打造網站與品牌：問題、做法與成果。",
    },
  },
  "/privacy": {
    en: { title: "Privacy Policy | Sonykun Design", description: "How Sonykun Design collects and uses personal information." },
    zh: { title: "隱私權政策｜Sonykun Design", description: "Sonykun Design 如何蒐集與使用個人資料。" },
  },
  "/terms": {
    en: { title: "Terms of Service | Sonykun Design", description: "Terms for Sonykun Design website, logo and hosting services." },
    zh: { title: "服務條款｜Sonykun Design", description: "Sonykun Design 網站、Logo 與主機服務的條款。" },
  },
  "/thank-you": {
    en: { title: "Thank You | Sonykun Design", description: "We received your message." },
    zh: { title: "謝謝你｜Sonykun Design", description: "我們已收到你的訊息。" },
  },
  "/craigslist": {
    en: {
      title: "Small Business Websites from $349 | Sonykun Design",
      description: "Website and logo design for Vancouver small businesses. See a live preview before you pay.",
    },
    zh: {
      title: "中小企業網站 $349 起｜Sonykun Design",
      description: "為溫哥華中小企業提供網站與 Logo 設計，付款前先看即時預覽。",
    },
  },
};

/** Pages that should stay out of search results. */
export const NOINDEX = new Set(["/thank-you", "/craigslist"]);
