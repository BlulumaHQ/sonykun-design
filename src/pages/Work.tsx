import { useMemo } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import {
  projects,
  PORTFOLIO_CATEGORIES,
  portfolioCategoryZh,
  portfolioCategorySlug,
  portfolioCategoryFromSlug,
  type PortfolioCategory,
} from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";

const Work = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const { industry: industrySlug } = useParams<{ industry?: string }>();
  const navigate = useNavigate();

  const activeIndustry: PortfolioCategory | null = useMemo(
    () => portfolioCategoryFromSlug(industrySlug),
    [industrySlug]
  );

  const allProjects = useMemo(
    () => [...projects].sort((a, b) => b.year - a.year),
    []
  );

  const filtered = activeIndustry
    ? allProjects.filter((p) => p.portfolioCategory === activeIndustry)
    : allProjects;

  const labelI = (k: PortfolioCategory | "All") => (isZh ? portfolioCategoryZh[k] : k);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 md:px-12 lg:px-16">
            <ScrollReveal>
              <span className="eyebrow">{isZh ? "作品集" : "Portfolio"}</span>
              <h1 className="heading-hero mb-6">
                {activeIndustry
                  ? labelI(activeIndustry)
                  : isZh
                  ? "作品集"
                  : "Portfolio"}
              </h1>
              <p className="text-body mb-12 max-w-2xl">
                {isZh
                  ? "依產業瀏覽過去的客戶網站作品。每張卡片皆可在預覽窗內手動捲動完整網站。"
                  : "Browse client website projects by industry. Scroll the full live site inside each preview window."}
              </p>
            </ScrollReveal>

            {/* Mobile / tablet industry selector */}
            <div className="lg:hidden mb-8">
              <label className="block">
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {isZh ? "產業分類" : "Industry"}
                </span>
                <select
                  value={industrySlug ?? ""}
                  onChange={(e) => {
                    const v = e.target.value;
                    navigate(v ? `/portfolio/${v}` : "/portfolio");
                  }}
                  className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm"
                >
                  <option value="">{isZh ? "全部" : "All"}</option>
                  {PORTFOLIO_CATEGORIES.map((c) => (
                    <option key={c} value={portfolioCategorySlug[c]}>
                      {labelI(c)}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="lg:flex lg:gap-12 xl:gap-16">
              <aside
                className="hidden lg:block lg:w-[220px] lg:shrink-0"
                aria-label={isZh ? "產業分類" : "Industries"}
              >
                <div className="sticky top-28">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    {isZh ? "產業分類" : "Industries"}
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    <NavLink
                      to="/portfolio"
                      end
                      className={({ isActive }) =>
                        `text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary/5 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        }`
                      }
                    >
                      {labelI("All")}
                    </NavLink>
                    {PORTFOLIO_CATEGORIES.map((c) => (
                      <NavLink
                        key={c}
                        to={`/portfolio/${portfolioCategorySlug[c]}`}
                        className={({ isActive }) =>
                          `text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                            isActive
                              ? "bg-primary/5 text-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                          }`
                        }
                      >
                        {labelI(c)}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  {filtered.map((p) => (
                    <PortfolioCard
                      key={p.slug}
                      name={p.name}
                      services={p.services}
                      liveUrl={p.liveUrl}
                      fallbackImage={p.image}
                    />
                  ))}
                </div>

                {filtered.length === 0 && (
                  <p className="text-muted-foreground text-sm py-12 text-center">
                    {isZh ? "此分類目前沒有作品。" : "No projects in this category yet."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Work;
