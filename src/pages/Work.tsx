import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import {
  projects,
  PORTFOLIO_CATEGORIES,
  portfolioCategoryZh,
  type PortfolioCategory,
} from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const CURRENT_YEAR = 2026;

type FilterValue = "All" | PortfolioCategory;

const Work = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const [active, setActive] = useState<FilterValue>("All");

  const allClients = useMemo(
    () => [...projects].filter((p) => p.type === "client").sort((a, b) => b.year - a.year),
    []
  );
  const allWordpress = useMemo(() => projects.filter((p) => p.type === "wordpress"), []);

  const filterFn = (p: typeof projects[0]) =>
    active === "All" ? true : p.portfolioCategory === active;

  const filteredClients = allClients.filter(filterFn);
  const filteredWordpress = allWordpress.filter(filterFn);

  const filters: FilterValue[] = ["All", ...PORTFOLIO_CATEGORIES];
  const labelFor = (key: FilterValue) =>
    isZh ? portfolioCategoryZh[key] : key;

  const renderCard = (project: typeof projects[0], i: number, showBadge = true) => (
    <PortfolioCard
      key={project.slug}
      name={project.name}
      industry={project.industry}
      description={project.description}
      services={project.services}
      liveUrl={project.liveUrl}
      caseStudySlug={project.caseStudy ? project.slug : undefined}
      fallbackImage={project.image}
      isNew={showBadge && project.year >= CURRENT_YEAR}
    />
  );

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 md:px-12 lg:px-16">
            <ScrollReveal>
              <span className="eyebrow">{isZh ? "作品集" : "Selected Work"}</span>
              <h1 className="heading-hero mb-6">{t(translations.work.title, lang)}</h1>
              <p className="text-body mb-12 max-w-2xl">
                {isZh
                  ? "以下為精選的設計與網站專案作品。"
                  : "A curated selection of selected design and web projects."}
              </p>
            </ScrollReveal>

            {/* Mobile / tablet horizontal filter */}
            <div className="lg:hidden mb-8 -mx-2">
              <div className="flex gap-2 overflow-x-auto pb-2 px-2">
                {filters.map((f) => {
                  const isActive = active === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setActive(f)}
                      className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/10 text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                      }`}
                    >
                      {labelFor(f)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop sidebar + grid */}
            <div className="lg:flex lg:gap-12 xl:gap-16">
              <aside
                className="hidden lg:block lg:w-[200px] lg:shrink-0"
                aria-label={isZh ? "產業分類" : "Industry filter"}
              >
                <div className="sticky top-28">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    {isZh ? "產業分類" : "Industries"}
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {filters.map((f) => {
                      const isActive = active === f;
                      return (
                        <button
                          key={f}
                          onClick={() => setActive(f)}
                          className={`text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                            isActive
                              ? "bg-primary/5 text-primary font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                          }`}
                        >
                          {labelFor(f)}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  {filteredClients.map((p, i) => renderCard(p, i))}
                </div>

                {filteredClients.length === 0 && filteredWordpress.length === 0 && (
                  <p className="text-muted-foreground text-sm py-12 text-center">
                    {isZh ? "此分類目前沒有作品。" : "No projects in this category yet."}
                  </p>
                )}

                {filteredWordpress.length > 0 && (
                  <>
                    <h2 className="text-lg font-display font-semibold mt-16 mb-6 text-foreground">
                      {isZh ? "WordPress 專案" : "WordPress Projects"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                      {filteredWordpress.map((p, i) => renderCard(p, i, false))}
                    </div>
                  </>
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
