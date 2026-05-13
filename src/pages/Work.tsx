import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const CURRENT_YEAR = 2026;

const industryLabelZh: Record<string, string> = {
  "All": "全部",
  "Real Estate & Construction": "房地產 / 建築",
  "Food & Retail": "餐飲 / 零售",
  "Medical & Healthcare": "醫療 / 健康",
  "Biotechnology & Environmental": "生技 / 環保",
  "Education": "教育",
  "Lifestyle": "生活風格",
};

const Work = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const [activeIndustry, setActiveIndustry] = useState<string>("All");

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured && p.caseStudy),
    []
  );

  const clientProjects = useMemo(
    () =>
      [...projects]
        .filter((p) => p.type === "client")
        .sort((a, b) => b.year - a.year),
    []
  );

  const wordpressProjects = useMemo(
    () => projects.filter((p) => p.type === "wordpress"),
    []
  );

  const industries = useMemo(() => {
    const set = new Set<string>();
    [...clientProjects, ...wordpressProjects].forEach((p) => set.add(p.industry));
    return ["All", ...Array.from(set)];
  }, [clientProjects, wordpressProjects]);

  const filteredProjects = useMemo(
    () =>
      activeIndustry === "All"
        ? clientProjects
        : clientProjects.filter((p) => p.industry === activeIndustry),
    [activeIndustry, clientProjects]
  );

  const filteredWordpress = useMemo(
    () =>
      activeIndustry === "All"
        ? wordpressProjects
        : wordpressProjects.filter((p) => p.industry === activeIndustry),
    [activeIndustry, wordpressProjects]
  );

  const labelFor = (key: string) =>
    isZh ? industryLabelZh[key] ?? key : key;

  const renderProjectCard = (project: typeof projects[0], i: number, showBadge = true) => (
    <ScrollReveal key={project.slug} delay={i * 0.06}>
      <PortfolioCard
        name={project.name}
        industry={project.industry}
        description={project.description}
        services={project.services}
        liveUrl={project.liveUrl}
        caseStudySlug={project.caseStudy ? project.slug : undefined}
        fallbackImage={project.image}
        isNew={showBadge && project.year >= CURRENT_YEAR}
      />
    </ScrollReveal>
  );

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          {/* Asymmetrical layout shell: edge sidebar + centered content */}
          <div className="portfolio-layout-shell relative">
            {/* LEFT EDGE SIDEBAR — only on very wide screens */}
            <aside
              className="portfolio-edge-sidebar hidden"
              aria-label={isZh ? "產業分類" : "Industry filter"}
            >
              <div className="portfolio-edge-sidebar-inner">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {isZh ? "產業分類" : "Industries"}
                </p>
                <nav className="flex flex-col gap-1">
                  {industries.map((ind) => {
                    const active = activeIndustry === ind;
                    return (
                      <button
                        key={ind}
                        onClick={() => setActiveIndustry(ind)}
                        className={`text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                          active
                            ? "bg-primary/5 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        }`}
                      >
                        {labelFor(ind)}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* CENTERED MAIN CONTENT */}
            <div className="container-wide portfolio-centered-content">
              <ScrollReveal>
                <span className="eyebrow">{isZh ? "作品集" : "Selected Work"}</span>
                <h1 className="heading-hero mb-6">{t(translations.work.title, lang)}</h1>
                <p className="text-body mb-16 max-w-2xl">
                  {isZh
                    ? "以下為精選的設計與網站專案作品。"
                    : "A curated selection of selected design and web projects."}
                </p>
              </ScrollReveal>

              {/* Featured */}
              <ScrollReveal>
                <h2 className="text-lg font-display font-semibold mb-6 text-foreground">
                  {isZh ? "精選案例" : "Featured Case Studies"}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {featuredProjects.map((project, i) => renderProjectCard(project, i))}
              </div>

              {/* Tablet/medium-desktop industry navigation (hidden when edge sidebar shows) */}
              <div className="portfolio-inline-filters mb-8">
                <ScrollReveal>
                  <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 md:flex-wrap md:overflow-visible">
                    {industries.map((ind) => {
                      const active = activeIndustry === ind;
                      return (
                        <button
                          key={ind}
                          onClick={() => setActiveIndustry(ind)}
                          className={`shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                            active
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/10 text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                          }`}
                        >
                          {labelFor(ind)}
                        </button>
                      );
                    })}
                  </div>
                </ScrollReveal>
              </div>

              {/* Main grid (true 3-column on desktop) */}
              <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, i) => renderProjectCard(project, i))}
              </div>

              {filteredProjects.length === 0 && (
                <p className="text-muted-foreground text-sm py-12 text-center">
                  {isZh ? "此分類目前沒有作品。" : "No projects in this category yet."}
                </p>
              )}

              {/* WordPress */}
              {filteredWordpress.length > 0 && (
                <>
                  <ScrollReveal>
                    <h2 className="text-lg font-display font-semibold mt-16 mb-6 text-foreground">
                      {isZh ? "WordPress 專案" : "WordPress Projects"}
                    </h2>
                  </ScrollReveal>
                  <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredWordpress.map((project, i) => renderProjectCard(project, i, false))}
                  </div>
                </>
              )}
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
