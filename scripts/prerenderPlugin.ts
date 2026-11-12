// Build-time SEO: after `vite build`, write a static HTML file per indexable route
// (home, services, pricing, contact, case studies, portfolio projects and
// categories from the central CMS) with its own title, description, canonical and
// structured data, plus a complete sitemap.xml. The SPA still boots on top.
import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import { NOINDEX, ROUTE_META, SITE } from "../src/lib/seoRoutes";
import { pageMeta, pageMetaZh } from "../src/i18n/pageContent";
import { HREFLANG, localizePath, type UrlLang as Lang } from "../src/lib/locale";

const CMS_URL = "https://uzdjwpkgldzhnoxjeyrw.supabase.co";
const CMS_KEY = "sb_publishable_ifsg2zxajGqu19GsJ2X4RQ_KHBHGIvi"; // public, read-only (RLS)
const DEFAULT_IMAGE = `${SITE}/og/sonykun-og.jpg`;

interface Page {
  path: string; // language-neutral
  lang: Lang;
  enOnly?: boolean; // English-only content: canonical to EN, no zh alternate
  title: string;
  description: string;
  image?: string;
  priority: number;
  lastmod?: string;
  jsonLd?: object[];
  body?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p: string, lang: Lang = "en") => `${SITE}${localizePath(p, lang)}`;
const catSlug = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const crumbs = (lang: Lang, items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path, lang) })),
});

const setTag = (html: string, re: RegExp, tag: string) =>
  re.test(html) ? html.replace(re, tag) : html.replace("</head>", `  ${tag}\n</head>`);

function render(template: string, p: Page) {
  const t = esc(p.title);
  const d = esc(p.description);
  const img = esc(p.image ?? DEFAULT_IMAGE);
  const canonical = abs(p.path, p.enOnly ? "en" : p.lang);
  let html = template.replace(/<html lang="[^"]*">/, `<html lang="${p.lang === "zh" ? "zh-Hant" : "en"}">`);
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${d}">`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}">`);
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}">`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}">`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}">`);
  html = setTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${img}">`);
  html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${img}">`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}">`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`);
  const alternates = [
    `<link rel="alternate" hreflang="${HREFLANG.en}" href="${abs(p.path, "en")}">`,
    ...(p.enOnly ? [] : [`<link rel="alternate" hreflang="${HREFLANG.zh}" href="${abs(p.path, "zh")}">`]),
    `<link rel="alternate" hreflang="x-default" href="${abs(p.path, "en")}">`,
    `<meta property="og:locale" content="${p.lang === "zh" ? "zh_TW" : "en_CA"}">`,
  ].join("\n  ");
  html = html.replace("</head>", `  ${alternates}\n</head>`);
  if (p.jsonLd?.length) {
    const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": p.jsonLd }).replace(/</g, "\\u003c");
    html = html.replace("</head>", `  <script type="application/ld+json">${ld}</script>\n</head>`);
  }
  if (p.body) html = html.replace('<div id="root"></div>', `<div id="root">${p.body}</div>`);
  return html;
}

function staticPages(root: string): Page[] {
  const pages: Page[] = [];
  for (const lang of ["en", "zh"] as Lang[]) {
    const pm = lang === "zh" ? pageMetaZh : pageMeta;
    pages.push(
      { path: "/", lang, ...pm.home, priority: 1 },
      { path: "/services", lang, ...pm.services, priority: 0.8 },
      { path: "/pricing", lang, ...pm.pricing, priority: 0.8 },
    );
    for (const [p, m] of Object.entries(ROUTE_META)) {
      if (NOINDEX.has(p)) continue;
      pages.push({ path: p, lang, ...m[lang], priority: p === "/portfolio" ? 0.9 : p === "/contact" ? 0.8 : 0.4 });
    }
  }
  // Case studies (English-only content): read slug/name/subtitle/overview from the data file.
  const src = fs.readFileSync(path.join(root, "src/data/caseStudies.ts"), "utf8");
  const re = /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)",[\s\S]*?overview:\s*\n?\s*"([^"]+)"/g;
  for (const m of src.matchAll(re)) {
    const [, slug, name, subtitle, raw] = m;
    const overview = raw.replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
    const description = overview.length > 160 ? `${overview.slice(0, 157).trimEnd()}…` : overview;
    const p = `/case-study/${slug}`;
    pages.push({
      path: p,
      lang: "en",
      enOnly: true,
      title: `${name} Case Study — ${subtitle} | Sonykun Design`,
      description,
      priority: 0.7,
      jsonLd: [crumbs("en", [{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-study" }, { name, path: p }])],
    });
  }
  return pages;
}

interface FeedRow {
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  homepage_full_url: string | null;
  services: string[] | null;
  categories: string[] | null;
  categories_zh: string[] | null;
  category: string | null;
  publish_date: string | null;
}

async function fetchPortfolio(): Promise<FeedRow[]> {
  const file = process.env.PRERENDER_PORTFOLIO_FILE; // local testing hook
  if (file) return JSON.parse(fs.readFileSync(file, "utf8")) as FeedRow[];
  const cols = "title,slug,excerpt,featured_image_url,homepage_full_url,services,categories,categories_zh,category,publish_date";
  const url = `${CMS_URL}/rest/v1/portfolio_feed?select=${cols}&show_on=cs.%7Bsonykun%7D&order=sort_order.asc.nullslast,publish_date.desc.nullslast`;
  const res = await fetch(url, { headers: { apikey: CMS_KEY, Authorization: `Bearer ${CMS_KEY}` }, signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`portfolio_feed ${res.status}`);
  return (await res.json()) as FeedRow[];
}

const SERVICE_ZH: Record<string, string> = {
  "Website Design": "網站設計",
  "Logo Design": "Logo 設計",
  Branding: "品牌設計",
  "Marketing Materials": "行銷物料",
};

function portfolioPages(rows: FeedRow[]): Page[] {
  const pages: Page[] = [];
  const cats = new Map<string, { name: string; zh: string; items: FeedRow[] }>();
  const names = (r: FeedRow) => (r.categories?.length ? [...new Set(r.categories)] : r.category ? [r.category] : []);
  for (const r of rows) {
    for (const name of names(r)) {
      const slug = catSlug(name);
      const i = r.categories?.indexOf(name) ?? -1;
      const c = cats.get(slug) ?? { name, zh: (i >= 0 && r.categories_zh?.[i]) || name, items: [] };
      c.items.push(r);
      cats.set(slug, c);
    }
  }
  for (const lang of ["en", "zh"] as Lang[]) {
    const zh = lang === "zh";
    for (const r of rows) {
      if (!r.slug) continue;
      const cat = zh ? r.categories_zh?.[0] ?? names(r)[0] : names(r)[0];
      const svc = (r.services ?? []).filter(Boolean).map((sv) => (zh ? SERVICE_ZH[sv] ?? sv : sv));
      // Keep in sync with src/pages/ProjectDetail.tsx.
      const title = zh ? `${r.title}｜網站設計作品｜Sonykun Design` : `${r.title} — Website Design | Sonykun Design Portfolio`;
      const description = zh
        ? `Sonykun Design 為 ${r.title} 打造的網站作品${cat ? `（${cat}）` : ""}。服務內容：${svc.join("、") || "網站設計"}。`
        : r.excerpt?.trim() || `${r.title} website designed and built by Sonykun Design${cat ? ` (${cat})` : ""}. Services: ${svc.join(", ") || "Website Design"}.`;
      const p = `/portfolio/${r.slug}`;
      const image = r.featured_image_url ?? r.homepage_full_url ?? undefined;
      pages.push({
        path: p,
        lang,
        title,
        description,
        image,
        priority: 0.5,
        lastmod: r.publish_date?.slice(0, 10),
        body: `<main><h1>${esc(r.title)}</h1><p>${esc(description)}</p></main>`,
        jsonLd: [
          { "@type": "CreativeWork", name: r.title, description, inLanguage: HREFLANG[lang], url: abs(p, lang), ...(image ? { image } : {}), creator: { "@type": "Organization", name: "Sonykun Design", url: SITE } },
          crumbs(lang, [{ name: zh ? "首頁" : "Home", path: "/" }, { name: zh ? "作品集" : "Portfolio", path: "/portfolio" }, { name: r.title, path: p }]),
        ],
      });
    }
    for (const [slug, c] of cats) {
      const p = `/portfolio/${slug}`;
      const name = zh ? c.zh : c.name;
      const links = c.items.map((r) => `<li><a href="${localizePath(`/portfolio/${r.slug}`, lang)}">${esc(r.title)}</a></li>`).join("");
      const title = zh ? `${name}網站設計作品｜Sonykun Design` : `${name} Website Design Portfolio | Sonykun Design`;
      pages.push({
        path: p,
        lang,
        title,
        description: zh
          ? `瀏覽 Sonykun Design 為${name}產業打造的 ${c.items.length} 個網站作品。`
          : `Browse ${c.items.length} ${name} websites designed and built by Sonykun Design in Vancouver.`,
        priority: 0.6,
        body: `<main><h1>${esc(title)}</h1><ul>${links}</ul></main>`,
        jsonLd: [crumbs(lang, [{ name: zh ? "首頁" : "Home", path: "/" }, { name: zh ? "作品集" : "Portfolio", path: "/portfolio" }, { name, path: p }])],
      });
    }
  }
  return pages;
}

function sitemap(pages: Page[]) {
  const urls = pages.map((p) =>
    [
      "  <url>",
      `    <loc>${abs(p.path, p.lang)}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="${HREFLANG.en}" href="${abs(p.path, "en")}"/>`,
      p.enOnly ? "" : `    <xhtml:link rel="alternate" hreflang="${HREFLANG.zh}" href="${abs(p.path, "zh")}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.path, "en")}"/>`,
      p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : "",
      `    <priority>${p.priority.toFixed(1)}</priority>`,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
}

export default function prerenderPlugin(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "sonykun-prerender",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    async closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const indexFile = path.join(outDir, "index.html");
      if (!fs.existsSync(indexFile)) return;
      const template = fs.readFileSync(indexFile, "utf8");
      const pages = staticPages(config.root);
      try {
        const rows = await fetchPortfolio();
        pages.push(...portfolioPages(rows));
        config.logger.info(`sonykun-prerender: ${rows.length} portfolio projects from CMS`);
      } catch (e) {
        config.logger.warn(`sonykun-prerender: portfolio skipped (${(e as Error).message})`);
      }
      for (const p of pages) {
        // /contact -> contact.html: served at /contact on Netlify and Cloudflare Pages without a trailing-slash redirect.
        const rel = localizePath(p.path, p.lang);
        const file = rel === "/" ? indexFile : path.join(outDir, `${rel.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(template, p));
      }
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap(pages));
      config.logger.info(`sonykun-prerender: wrote ${pages.length} pages + sitemap.xml`);
    },
  };
}
