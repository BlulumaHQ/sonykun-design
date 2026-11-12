// URL-based language: English at /, Traditional Chinese under /zh.
// Kept free of "@/..." imports so the build-time pre-render can use it.
export type UrlLang = "en" | "zh";
export const ZH_PREFIX = "/zh";
export const HREFLANG: Record<UrlLang, string> = { en: "en", zh: "zh-Hant" };

export const langFromPath = (p: string): UrlLang =>
  p === ZH_PREFIX || p.startsWith(`${ZH_PREFIX}/`) ? "zh" : "en";

/** Strip the /zh prefix: "/zh/pricing" -> "/pricing", "/zh" -> "/". */
export const stripLang = (p: string) => (langFromPath(p) === "zh" ? p.slice(ZH_PREFIX.length) || "/" : p);

/** Language-neutral path -> path for the given language. */
export const localizePath = (p: string, lang: UrlLang) => {
  const base = stripLang(p);
  return lang === "zh" ? (base === "/" ? ZH_PREFIX : `${ZH_PREFIX}${base}`) : base;
};
