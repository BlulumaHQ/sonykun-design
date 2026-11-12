import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NOINDEX, ROUTE_META, SITE } from "@/lib/seoRoutes";

const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};
const meta = (attr: "name" | "property", key: string, value: string) =>
  upsert(
    `meta[${attr}="${key}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(attr, key);
      return m;
    },
    "content",
    value,
  );

/** Canonical, og:url and robots for every route on the production domain. */
export default function SiteHead() {
  const { pathname } = useLocation();
  useEffect(() => {
    const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const url = `${SITE}${clean === "/" ? "/" : clean}`;
    upsert('link[rel="canonical"]', () => { const l = document.createElement("link"); l.setAttribute("rel", "canonical"); return l; }, "href", url);
    meta("property", "og:url", url);
    meta("name", "robots", NOINDEX.has(clean) ? "noindex, follow" : "index, follow, max-image-preview:large");
    const m = ROUTE_META[clean];
    if (m) {
      document.title = m.title;
      meta("name", "description", m.description);
      meta("property", "og:title", m.title);
      meta("property", "og:description", m.description);
      meta("name", "twitter:title", m.title);
      meta("name", "twitter:description", m.description);
    }
  }, [pathname]);
  return null;
}
