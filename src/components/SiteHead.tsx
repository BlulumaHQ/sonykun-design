import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NOINDEX, ROUTE_META, SITE } from "@/lib/seoRoutes";
import { HREFLANG, localizePath } from "@/lib/locale";
import { useLanguage } from "@/i18n/LanguageContext";

const upsert = (selector: string, create: () => HTMLElement, attrs: Record<string, string>) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
};
const meta = (attr: "name" | "property", key: string, value: string) =>
  upsert(
    `meta[${attr}="${key}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(attr, key);
      return m;
    },
    { content: value },
  );
const link = (selector: string, attrs: Record<string, string>) =>
  upsert(selector, () => document.createElement("link"), attrs);

/** English-only content (case studies): the /zh URL points its canonical at English. */
const isEnglishOnly = (p: string) => p.startsWith("/case-study/");

/** Canonical, hreflang, og:url/locale and robots for every route, in both languages. */
export default function SiteHead() {
  const { pathname } = useLocation(); // basename (/zh) already stripped
  const { lang } = useLanguage();
  useEffect(() => {
    const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const url = (l: "en" | "zh") => `${SITE}${localizePath(clean, l)}`;
    const enOnly = isEnglishOnly(clean);
    link('link[rel="canonical"]', { rel: "canonical", href: url(enOnly ? "en" : lang) });
    link('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: HREFLANG.en, href: url("en") });
    if (enOnly) document.head.querySelector(`link[rel="alternate"][hreflang="${HREFLANG.zh}"]`)?.remove();
    else link(`link[rel="alternate"][hreflang="${HREFLANG.zh}"]`, { rel: "alternate", hreflang: HREFLANG.zh, href: url("zh") });
    link('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: url("en") });
    meta("property", "og:url", url(lang));
    meta("property", "og:locale", lang === "zh" ? "zh_TW" : "en_CA");
    meta("name", "robots", NOINDEX.has(clean) ? "noindex, follow" : "index, follow, max-image-preview:large");
    const m = ROUTE_META[clean]?.[lang];
    if (m) {
      document.title = m.title;
      meta("name", "description", m.description);
      meta("property", "og:title", m.title);
      meta("property", "og:description", m.description);
      meta("name", "twitter:title", m.title);
      meta("name", "twitter:description", m.description);
    }
  }, [pathname, lang]);
  return null;
}
