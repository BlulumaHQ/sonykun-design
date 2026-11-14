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
import type { CaseStudy as CaseStudyData } from "@/data/caseStudies";

const VersionCard = ({ v, letter, chosen }: { v: CaseStudyData["versions"]["a"]; letter: "A" | "B"; chosen?: boolean }) => {
  const shots = useProjectShots(v.cmsSlug);
  return (
    <div className={`rounded-2xl border bg-background overflow-hidden ${chosen ? "border-foreground ring-1 ring-foreground" : "border-border"}`}>
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{v.label}</p>
          <p className="font-display font-semibold text-foreground">{v.direction}</p>
        </div>
        {chosen && <span className="rounded-full bg-foreground text-background text-xs font-semibold px-3 py-1">Launched</span>}
      </div>
      {shots.full ? (
        <ScrollablePreview src={shots.full} alt={`${v.label} — ${v.direction}`} shape="wide" />
      ) : (
        <div className="portfolio-preview-box portfolio-preview-box--wide animate-pulse bg-muted" />
      )}
      <div className="px-5 py-4">
        <a href={v.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-secondary hover:border-foreground">
          Open {chosen ? "live site" : `Version ${letter} preview`} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;
  const shots = useProjectShots(study?.cmsSlug);

  useEffect(() => {
    if (!study) return;
    const title = `${study.name} Case Study | Sonykun Design`;
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

        {/* Two versions */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h2 className="heading-subsection mb-4">Two Versions, Side by Side</h2>
              <p className="text-body text-lg mb-10">{study.comparison.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <VersionCard v={study.versions.a} letter="A" chosen={study.decision?.chosen === "A"} />
              <VersionCard v={study.versions.b} letter="B" chosen={study.decision?.chosen === "B"} />
            </div>

            <div className="mt-14 max-w-5xl">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">What's Different</h3>
              <div className="overflow-x-auto rounded-xl border border-border bg-background">
                <table className="w-full text-left text-base">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 w-[18%] text-sm font-semibold text-muted-foreground"> </th>
                      <th className="p-4 text-sm font-semibold text-foreground">Version A · {study.versions.a.direction}</th>
                      <th className="p-4 text-sm font-semibold text-foreground">Version B · {study.versions.b.direction}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.comparison.rows.map((r) => (
                      <tr key={r.aspect} className="border-b border-border last:border-0 align-top">
                        <th scope="row" className="p-4 text-sm font-semibold text-foreground">{r.aspect}</th>
                        <td className="p-4 text-body">{r.a}</td>
                        <td className="p-4 text-body">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Version A works best for</p>
                  <p className="text-body">{study.comparison.aBestFor}</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Version B works best for</p>
                  <p className="text-body">{study.comparison.bBestFor}</p>
                </div>
              </div>
              {study.decision && (
                <div className="mt-10 rounded-2xl bg-foreground text-background p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70 mb-3">The decision · Version {study.decision.chosen}</p>
                  <h3 className="text-2xl font-display font-semibold mb-4" style={{ color: "inherit" }}>{study.decision.heading}</h3>
                  {study.decision.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg opacity-90 mb-3 last:mb-0">{p}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Brand package */}
        {study.brand && (
          <section className="py-16 md:py-24">
            <div className="container-wide">
              <div className="max-w-4xl">
                <h2 className="heading-subsection mb-4">Brand Identity Package</h2>
                <p className="text-body text-lg mb-8">{study.brand.intro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-12">
                  {study.brand.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-body"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />{d}</li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {study.brand.mockups.map((m, i) => (
                  <figure key={m.src} className={i === 0 ? "md:col-span-2" : ""}>
                    <img src={m.src} alt={m.alt} width={1600} height={1000} loading="lazy" className="w-full h-auto rounded-2xl border border-border" />
                    <figcaption className="mt-3 text-sm text-muted-foreground">{m.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Result */}
        <section className={`py-16 md:py-24 ${study.brand ? "bg-secondary/5" : "border-t border-border"}`}>
          <div className="container-wide max-w-4xl">
            <ScrollReveal>
              <h2 className="heading-subsection mb-6">Result</h2>
              <p className="text-body text-lg mb-10">{study.result}</p>
              {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="h-14 px-10 text-base font-medium gap-2">
                  Visit Live Website <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              )}
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
