import { describe, expect, it, vi } from "vitest";

const query = vi.hoisted(() => ({
  select: vi.fn(), contains: vi.fn(), order: vi.fn(),
}));
vi.mock("@/lib/cms", () => ({ cms: { from: vi.fn(() => query) } }));
import { fetchFeed, feedCategories, paginatePortfolio, resolvePortfolioPath, type FeedItem } from "./portfolioFeed";

const item = (slug: string, category: string | null = null) => ({ id: slug, slug, title: slug, category } as FeedItem);

describe("SonyKun portfolio rules", () => {
  it("reads only rows shown on sonykun with the specified ordering", async () => {
    query.select.mockReturnValue(query);
    query.contains.mockReturnValue(query);
    query.order.mockReturnValueOnce(query).mockResolvedValueOnce({ data: [], error: null });
    await fetchFeed();
    expect(query.contains).toHaveBeenCalledWith("show_on", ["sonykun"]);
    expect(query.order).toHaveBeenNthCalledWith(1, "sort_order", { ascending: true, nullsFirst: false });
    expect(query.order).toHaveBeenNthCalledWith(2, "publish_date", { ascending: false, nullsFirst: false });
  });
  it("caches the feed promise", () => {
    expect(fetchFeed()).toBe(fetchFeed());
  });
  it("paginates at exactly 20 projects", () => {
    const items = Array.from({ length: 41 }, (_, i) => item(String(i)));
    expect(paginatePortfolio(items).items).toHaveLength(20);
    expect(paginatePortfolio(items, "2").items.map((entry) => entry.slug)).toEqual(Array.from({ length: 20 }, (_, i) => String(i + 20)));
    expect(paginatePortfolio(items, "3").items.map((entry) => entry.slug)).toEqual(["40"]);
    expect(paginatePortfolio(items, "0").valid).toBe(false);
    expect(paginatePortfolio(items, "4").valid).toBe(false);
  });
  it("resolves a category before a project with the same slug", () => {
    const items = [item("dental", "Dental"), item("clinic", "Dental")];
    expect(resolvePortfolioPath(items, "dental")).toEqual({ kind: "list", category: { name: "Dental", slug: "dental", count: 2 } });
    expect(resolvePortfolioPath(items, "clinic")).toEqual({ kind: "detail", item: items[1] });
    expect(resolvePortfolioPath(items, "missing").kind).toBe("not-found");
  });
  it("counts distinct non-null categories sorted by name", () => {
    expect(feedCategories([item("a", "Realtor"), item("b", "Beauty & Spa"), item("c", "Realtor"), item("d")])).toEqual([
      { name: "Beauty & Spa", slug: "beauty-and-spa", count: 1 },
      { name: "Realtor", slug: "realtor", count: 2 },
    ]);
  });
});