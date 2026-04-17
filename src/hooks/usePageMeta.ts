import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Update <head> tags client-side. Updates title, description, OG/Twitter mirrors,
 * canonical, and an optional JSON-LD block (id="page-jsonld").
 */
export function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  canonical,
  jsonLd,
}: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", ogTitle || title);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", ogTitle || title);
    setMeta('meta[property="og:description"]', "property", "og:description", ogDescription || description);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", ogDescription || description);

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let jsonLdEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdEl = document.createElement("script");
      jsonLdEl.type = "application/ld+json";
      jsonLdEl.id = "page-jsonld";
      jsonLdEl.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdEl);
    }

    return () => {
      document.title = prevTitle;
      if (jsonLdEl && jsonLdEl.parentNode) jsonLdEl.parentNode.removeChild(jsonLdEl);
    };
  }, [title, description, ogTitle, ogDescription, canonical, JSON.stringify(jsonLd)]);
}
