import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { ExternalLink } from "lucide-react";
import ScrollablePreview from "@/components/ScrollablePreview";
import PortfolioScreenshotViewport from "@/components/PortfolioScreenshotViewport";
import { useProjectShots } from "@/lib/portfolioFeed";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;
  const shots = useProjectShots(study?.cmsSlug);

  useEffect(() => {
    if (!study) return;
    const title = `${study.name} Case Study — ${study.subtitle} | Sonykun Design`;
    const overview = study.overview.replace(/\s+/g, " ").trim();
    const description = overview.length > 160 ? `${overview.slice(0, 157).trimEnd()}…` : overview;
    document.title = title;
    document.head.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.head.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.head.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [study]);

  if (!study) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section mb-4">Project Not Found</h1>
            <Link to="/case-study" className="nav-link border-b border-secondary pb-1">
              Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-8 pb-4">
          <div className="container-wide">
            <h1 className="heading-hero mb-2">{study.name}</h1>
            <p className="text-lg text-muted-foreground mb-8">{study.subtitle}</p>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border shadow-sm">
              {shots.full ? (
                <ScrollablePreview src={shots.full} alt={study.heroAlt} shape="wide" className="rounded-2xl" />
              ) : (
                <div className="portfolio-preview-box portfolio-preview-box--wide animate-pulse bg-muted" />
              )}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-subsection mb-6">Project Overview</h2>
              {study.overview.split("\n\n").map((p, i) => (
                <p key={i} className="text-body text-lg mb-4">
                  {p}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Design Strategy */}
        <section className="pb-16 md:pb-24">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-subsection mb-10">Design Strategy</h2>
            </ScrollReveal>

            <div className="space-y-16">
              {study.sections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <p className="text-body text-lg mb-6">{section.content}</p>
                    {section.image === "mobile" && shots.mobile && (
                      <div className="mx-auto max-w-[320px]">
                        <PortfolioScreenshotViewport src={shots.mobile} alt={section.imageAlt || ""} variant="phone" />
                      </div>
                    )}
                    {section.image === "page" && shots.page && (
                      <div className="rounded-lg overflow-hidden border border-border">
                        <ScrollablePreview src={shots.page} alt={section.imageAlt || ""} shape="wide" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-subsection mb-6">Result</h2>
              <p className="text-body text-lg mb-10">{study.result}</p>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-10 text-base font-medium gap-2">
                  Visit Live Website <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Back */}
        <section className="py-12">
          <div className="container-wide">
            <Link
              to="/case-study"
              className="nav-link text-base border-b border-secondary pb-1 hover:border-foreground hover:text-foreground transition-colors"
            >
              ← Back to Case Studies
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CaseStudy;
