import { useEffect, useState } from "react";
import { cms } from "@/lib/cms";

export interface GalleryItem {
  url: string;
  type: string;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface FeedItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  is_featured: boolean | null;
  sort_order: number | null;
  show_on: string[] | null;
  publish_date: string | null;
  live_url: string | null;
  services: string[] | null;
  project_year: string | null;
  category: string | null;
  categories: string[] | null;
  categories_zh?: string[] | null;
  homepage_full_url: string | null;
  gallery: GalleryItem[] | null;
}

export const categorySlug = (name: string) => name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const COLS = "id,title,slug,excerpt,featured_image_url,is_featured,sort_order,show_on,publish_date,live_url,services,project_year,category,categories,categories_zh,homepage_full_url,gallery";
export const PORTFOLIO_PAGE_SIZE = 20;
let feedPromise: Promise<FeedItem[]> | undefined;

export function fetchFeed(): Promise<FeedItem[]> {
  if (!feedPromise) {
    feedPromise = (async () => {
      const { data, error } = await cms.from("portfolio_feed")
        .select(COLS)
        .contains("show_on", ["sonykun"])
        .order("sort_order", { ascending: true, nullsFirst: false })
        .order("publish_date", { ascending: false, nullsFirst: false });
      if (error) throw error;
      return (data ?? []) as FeedItem[];
    })().catch((error: unknown) => {
      feedPromise = undefined;
      throw error;
    });
  }
  return feedPromise;
}

export function usePortfolioFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    fetchFeed().then((data) => {
      if (active) { setItems(data); setLoading(false); }
    }).catch((reason: unknown) => {
      if (active) {
        setError(reason instanceof Error ? reason.message : "Unable to load portfolio");
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);
  return { items, loading, error };
}

export function feedItemCategories(item: FeedItem): string[] {
  return item.categories?.length ? [...new Set(item.categories)] : item.category ? [item.category] : [];
}

export function feedCategories(items: FeedItem[]) {
  const counts = new Map<string, number>();
  items.forEach((item) => {
    feedItemCategories(item).forEach((name) => counts.set(name, (counts.get(name) ?? 0) + 1));
  });
  return [...counts].map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function resolvePortfolioPath(items: FeedItem[], segment?: string) {
  if (!segment) return { kind: "list" as const, category: null };
  const category = feedCategories(items).find((entry) => entry.slug === segment);
  if (category) return { kind: "list" as const, category };
  const item = items.find((entry) => entry.slug === segment);
  return item ? { kind: "detail" as const, item } : { kind: "not-found" as const };
}

export function paginatePortfolio(items: FeedItem[], pageParam?: string) {
  const page = pageParam === undefined ? 1 : Number(pageParam);
  const totalPages = Math.max(1, Math.ceil(items.length / PORTFOLIO_PAGE_SIZE));
  const valid = Number.isInteger(page) && page >= 1 && page <= totalPages;
  return { page, totalPages, valid, items: valid ? items.slice((page - 1) * PORTFOLIO_PAGE_SIZE, page * PORTFOLIO_PAGE_SIZE) : [] };
}
/** Screenshots for one CMS project (used by the case studies, which have no images of their own). */
export function useProjectShots(slug: string | undefined) {
  const { items, loading } = usePortfolioFeed();
  const item = slug ? items.find((entry) => entry.slug === slug) : undefined;
  const gallery = item?.gallery ?? [];
  return {
    loading,
    item,
    full: item?.homepage_full_url || item?.featured_image_url || null,
    desktop: item?.featured_image_url || item?.homepage_full_url || null,
    mobile: gallery.find((g) => g.type === "mobile_screenshot")?.url ?? null,
    page: gallery.find((g) => g.type === "page_screenshot")?.url ?? null,
  };
}
