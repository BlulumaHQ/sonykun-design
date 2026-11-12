// Build-time SEO: after `vite build`, write a static HTML file per indexable route
// (home, services, pricing, contact, case studies, portfolio projects and
// categories from the central CMS) with its own title, description, canonical and
// structured data, plus a complete sitemap.xml. The SPA still boots on top.
import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import { NOINDEX, ROUTE_META, SITE } from "../src/lib/seoRoutes";
import { pageMeta } from "../src/i18n/pageContent";

const CMS_URL = "https://uzdjwpkgldzhnoxjeyrw.supabase.co";
const CMS_KEY = "sb_publishable_ifsg2zxajGqu19GsJ2X4RQ_KHBHGIvi"; // public, read-only (RLS)
const DEFAULT_IMAGE = `${SITE}/og/sonykun-og.jpg`;

interface Page {
  path: string;
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
const abs = (p: string) => `${SITE}${p === "/" ? "/" : p}`;
const catSlug = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const crumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

const setTag = (html: string, re: RegExp, tag: string) =>
  re.test(html) ? html.replace(re, tag) : html.replace("</head>", `  ${tag}\n</head>`);

function render(template: string, p: Page) {
  const t = esc(p.title);
  const d = esc(p.description);
  const img = esc(p.image ?? DEFAULT_IMAGE);
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${d}">`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}">`);
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}">`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}">`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}">`);
  html = setTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${img}">`);
  html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${img}">`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${abs(p.path)}">`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${abs(p.path)}">`);
  if (p.jsonLd?.length) {
    const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": p.jsonLd }).replace(/</g, "\\u003c");
    html = html.replace("</head>", `  <script type="application/ld+json">${ld}</script>\n</head>`);
  }
  if (p.body) html = html.replace('<div id="root"></div>', `<div id="root">${p.body}</div>`);
  return html;
}

function staticPages(root: string): Page[] {
  const pages: Page[] = [
    { path: "/", ...pageMeta.home, priority: 1 },
    { path: "/services", ...pageMeta.services, priority: 0.8 },
    { path: "/pricing", ...pageMeta.pricing, priority: 0.8 },
    {
      path: "/portfolio",
      title: "Website Design Portfolio | Sonykun Design Vancouver",
      description: "Browse small business websites designed and built by Sonykun Design in Vancouver, BC.",
      priority: 0.9,
    },
  ];
  for (const [p, m] of Object.entries(ROUTE_META)) {
    if (!NOINDEX.has(p)) pages.push({ path: p, ...m, priority: p === "/contact" ? 0.8 : 0.4 });
  }
  // Case studies: read slug/name/subtitle/overview from the data file (it imports images, so parse it).
  const src = fs.readFileSync(path.join(root, "src/data/caseStudies.ts"), "utf8");
  const re = /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)",[\s\S]*?overview:\s*\n?\s*"([^"]+)"/g;
  for (const m of src.matchAll(re)) {
    const [, slug, name, subtitle, raw] = m;
    const overview = raw.replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
    const description = overview.length > 160 ? `${overview.slice(0, 157).trimEnd()}…` : overview;
    pages.push({
      path: `/case-study/${slug}`,
      title: `${name} Case Study — ${subtitle} | Sonykun Design`,
      description,
      priority: 0.7,
      jsonLd: [crumbs([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-study" }, { name, path: `/case-study/${slug}` }])],
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
  category: string | null;
  publish_date: string | null;
}

async function fetchPortfolio(): Promise<FeedRow[]> {
  const file = process.env.PRERENDER_PORTFOLIO_FILE; // local testing hook
  if (file) return JSON.parse(fs.readFileSync(file, "utf8")) as FeedRow[];
  const cols = "title,slug,excerpt,featured_image_url,homepage_full_url,services,categories,category,publish_date";
  const url = `${CMS_URL}/rest/v1/portfolio_feed?select=${cols}&show_on=cs.%7Bsonykun%7D&order=sort_order.asc.nullslast,publish_date.desc.nullslast`;
  const res = await fetch(url, { headers: { apikey: CMS_KEY, Authorization: `Bearer ${CMS_KEY}` }, signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`portfolio_feed ${res.status}`);
  return (await res.json()) as FeedRow[];
}

function portfolioPages(rows: FeedRow[]): Page[] {
  const pages: Page[] = [];
  const cats = new Map<string, { name: string; items: FeedRow[] }>();
  for (const r of rows) {
    const names = r.categories?.length ? [...new Set(r.categories)] : r.category ? [r.category] : [];
    for (const name of names) {
      const slug = catSlug(name);
      const c = cats.get(slug) ?? { name, items: [] };
      c.items.push(r);
      cats.set(slug, c);
    }
    if (!r.slug) continue;
    const cat = names[0];
    const services = (r.services ?? []).filter(Boolean).join(", ") || "Website Design";
    const description =
      r.excerpt?.trim() || `${r.title} website designed and built by Sonykun Design${cat ? ` (${cat})` : ""}. Services: ${services}.`;
    const p = `/portfolio/${r.slug}`;
    const image = r.featured_image_url ?? r.homepage_full_url ?? undefined;
    pages.push({
      path: p,
      title: `${r.title} — Website Design | Sonykun Design Portfolio`,
      description,
      image,
      priority: 0.5,
      lastmod: r.publish_date?.slice(0, 10),
      body: `<main><h1>${esc(r.title)}</h1><p>${esc(description)}</p></main>`,
      jsonLd: [
        { "@type": "CreativeWork", name: r.title, description, url: abs(p), ...(image ? { image } : {}), creator: { "@type": "Organization", name: "Sonykun Design", url: SITE } },
        crumbs([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }, { name: r.title, path: p }]),
      ],
    });
  }
  for (const [slug, c] of cats) {
    const p = `/portfolio/${slug}`;
    const links = c.items.map((r) => `<li><a href="/portfolio/${r.slug}">${esc(r.title)}</a></li>`).join("");
    pages.push({
      path: p,
      title: `${c.name} Website Design Portfolio | Sonykun Design`,
      description: `Browse ${c.items.length} ${c.name} websites designed and built by Sonykun Design in Vancouver.`,
      priority: 0.6,
      body: `<main><h1>${esc(c.name)} Website Design Portfolio</h1><ul>${links}</ul></main>`,
      jsonLd: [crumbs([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }, { name: c.name, path: p }])],
    });
  }
  return pages;
}

function sitemap(pages: Page[]) {
  const urls = pages.map((p) =>
    ["  <url>", `    <loc>${abs(p.path)}</loc>`, p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : "", `    <priority>${p.priority.toFixed(1)}</priority>`, "  </url>"]
      .filter(Boolean)
      .join("\n"),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
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
        const file = p.path === "/" ? indexFile : path.join(outDir, `${p.path.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(template, p));
      }
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap(pages));
      config.logger.info(`sonykun-prerender: wrote ${pages.length} pages + sitemap.xml`);
    },
  };
}
