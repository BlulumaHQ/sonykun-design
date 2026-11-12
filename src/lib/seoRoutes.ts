// Route titles/descriptions shared by SiteHead (runtime) and the build-time
// pre-render (scripts/prerenderPlugin.ts). Keep free of "@/..." imports.
export const SITE = "https://sonykundesign.com";

/** Titles for routes whose pages don't set their own meta. */
export const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/contact": {
    title: "Contact Sonykun Design | Vancouver Web Designer",
    description: "Tell us about your business and get a free website preview before you pay. Call (604) 262-1168 or send a message.",
  },
  "/case-study": {
    title: "Case Studies | Sonykun Design",
    description: "How Sonykun Design rebuilt websites and brands for Vancouver small businesses: the problem, the approach and the result.",
  },
  "/privacy": { title: "Privacy Policy | Sonykun Design", description: "How Sonykun Design collects and uses personal information." },
  "/terms": { title: "Terms of Service | Sonykun Design", description: "Terms for Sonykun Design website, logo and hosting services." },
  "/thank-you": { title: "Thank You | Sonykun Design", description: "We received your message." },
  "/craigslist": {
    title: "Small Business Websites from $349 | Sonykun Design",
    description: "Website and logo design for Vancouver small businesses. See a live preview before you pay.",
  },
};

/** Pages that should stay out of search results. */
export const NOINDEX = new Set(["/thank-you", "/craigslist"]);

