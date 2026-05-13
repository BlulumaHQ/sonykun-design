import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudyIndex = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  // Pull case studies in the same display order as projects.ts
  const orderedSlugs = projects
    .filter((p) => p.caseStudy && caseStudies[p.slug])
    .map((p) => p.slug);

  const cards = orderedSlugs.map((slug) => {
    const project = projects.find((p) => p.slug === slug)!;
    const study = caseStudies[slug];
    return { project, study };
  });

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">{isZh ? "案例研究" : "Case Studies"}</span>
              <h1 className="heading-hero mb-6">
                {isZh ? "深入了解每個專案的設計決策" : "Inside the work, decision by decision"}
              </h1>
              <p className="text-body text-lg max-w-2xl">
                {isZh
                  ? "精選案例展示完整的設計思考：商業挑戰、視覺策略、改版方向，以及最終成果。每個案例都聚焦於設計如何解決真實的商業問題。"
                  : "Selected projects with a closer look at the business problem, the design thinking behind the redesign direction, the visual strategy, and the final result."}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-20 md:pb-28">
          <div className="container-wide max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {cards.map(({ project, study }, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.06}>
                  <article className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <Link
                      to={`/case-study/${project.slug}`}
                      className="block bg-muted/40 overflow-hidden"
                      aria-label={`${isZh ? "查看案例" : "View case study"}: ${project.name}`}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={study.heroImage}
                          alt={study.heroAlt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                        {project.industry}
                      </p>
                      <h2 className="font-display text-2xl md:text-[26px] font-semibold leading-tight mb-3">
                        {project.name}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {project.description ?? study.subtitle}
                      </p>

                      <div className="mt-auto pt-2">
                        <Button asChild size="sm" className="rounded-lg gap-1.5">
                          <Link to={`/case-study/${project.slug}`}>
                            {isZh ? "查看案例" : "View Case Study"}
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-16 md:mt-20 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {isZh
                    ? "想瀏覽完整客戶作品？"
                    : "Looking for the full client portfolio?"}
                </p>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="h-12 px-10 text-base font-medium rounded-xl">
                    {isZh ? "瀏覽作品集" : "Browse Portfolio"}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CaseStudyIndex;
