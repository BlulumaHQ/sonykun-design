import type { FeedItem } from "./portfolioFeed";

// Portfolio service tags come from the CMS in English; "SEO" stays as-is.
const SERVICE_ZH: Record<string, string> = {
  "Website Design": "網站設計",
  "Logo Design": "Logo 設計",
  Branding: "品牌設計",
  "Marketing Materials": "行銷物料",
};
export const serviceLabel = (s: string, lang: "en" | "zh") => (lang === "zh" ? SERVICE_ZH[s.trim()] ?? s : s);

/** Chinese name for an English category, read from the CMS (categories.name_zh via portfolio_feed.categories_zh). */
export const categoryZhLookup = (items: FeedItem[]) => {
  const map = new Map<string, string>();
  for (const it of items) {
    (it.categories ?? []).forEach((name, i) => {
      const zh = it.categories_zh?.[i];
      if (zh && !map.has(name)) map.set(name, zh);
    });
  }
  return (name: string, lang: "en" | "zh") => (lang === "zh" ? map.get(name) ?? name : name);
};
