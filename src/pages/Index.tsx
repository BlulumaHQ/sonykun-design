import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqAccordion from "@/components/FaqAccordion";
import ImageMarquee from "@/components/ImageMarquee";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Diamond, Package, Server } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { homeContent, pageMeta, localBusinessJsonLd } from "@/i18n/pageContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const Index = () => {
  const { lang } = useLanguage();
  usePageMeta({
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    canonical: "https://sonykundesign.com/",
    jsonLd: localBusinessJsonLd,
  });

  const c = homeContent;
  const serviceIcons = [Globe, Diamond, Package, Server];

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-background pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="eyebrow"
              >
                {c.hero.eyebrow[lang]}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="heading-hero mb-6"
              >
                {c.hero.headline[lang]}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-subtitle max-w-2xl mb-10"
              >
                {c.hero.subhead[lang]}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Link to="/pricing">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-sm font-medium tracking-wide btn-cta btn-fill rounded-full w-full sm:w-auto"
                  >
                    {c.hero.ctaPrimary[lang]}
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 text-sm font-medium tracking-wide border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full w-full sm:w-auto"
                  >
                    {c.hero.ctaSecondary[lang]}
                  </Button>
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="text-sm text-muted-foreground"
              >
                {c.hero.trust[lang]}
              </motion.p>
            </div>
          </div>
        </section>

        {/* IMAGE MARQUEE STRIP */}
        <ImageMarquee />

        {/* HOW IT WORKS */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <span className="eyebrow">{c.process.eyebrow[lang]}</span>
              <h2 className="heading-section mb-4">{c.process.title[lang]}</h2>
              <p className="text-body">{c.process.subtext[lang]}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {c.process.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="font-display text-5xl md:text-6xl font-bold text-primary/20 block mb-3 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title[lang]}</h3>
                  <p className="text-muted-foreground leading-[1.7]">{step.body[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div {...fadeUp} className="max-w-2xl mb-14">
              <span className="eyebrow">{c.services.eyebrow[lang]}</span>
              <h2 className="heading-section">{c.services.title[lang]}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.services.cards.map((rawCard, i) => {
                const card = rawCard as typeof rawCard & { badge?: { en: string; zh: string } };
                const Icon = serviceIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative rounded-2xl border border-border bg-background p-7 flex flex-col h-full hover:shadow-md transition-shadow"
                  >
                    {card.badge && (
                      <span className="absolute -top-3 left-7 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        {card.badge[lang]}
                      </span>
                    )}
                    <Icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground leading-[1.7] mb-5 flex-1">{card.body[lang]}</p>
                    <p className="text-sm font-semibold text-foreground mb-3">{card.price[lang]}</p>
                    <Link
                      to={card.href}
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      {card.link[lang]}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section className="border-t border-border">
          <div className="container-wide pt-16 md:pt-20">
            <motion.div {...fadeUp} className="text-center mb-2">
              <span className="eyebrow">{c.portfolio.eyebrow[lang]}</span>
              <h2 className="heading-section">{c.portfolio.title[lang]}</h2>
            </motion.div>
          </div>
          <PortfolioGrid />
          <div className="container-wide pb-16 md:pb-20 -mt-6 text-center">
            <Link to="/work">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm font-medium tracking-wide border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full"
              >
                {c.portfolio.cta[lang]}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* BUNDLE BANNER (DARK) */}
        <section className="charcoal-section section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <motion.div {...fadeUp}>
                <span className="eyebrow !text-white/55">{c.bundle.eyebrow[lang]}</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-6">
                  {c.bundle.title[lang]}
                </h2>
                <p className="text-base md:text-lg text-white/65 leading-[1.7] mb-7 max-w-xl">{c.bundle.body[lang]}</p>
                <ul className="space-y-3 max-w-xl">
                  {c.bundle.checklist[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/85">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp} className="lg:text-right">
                <Link to="/pricing">
                  <Button
                    size="lg"
                    className="h-12 px-7 text-sm font-medium tracking-wide bg-white text-foreground hover:bg-white/90 rounded-full"
                  >
                    {c.bundle.cta[lang]}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="eyebrow">{c.faq.eyebrow[lang]}</span>
              <h2 className="heading-section">{c.faq.title[lang]}</h2>
            </motion.div>
            <FaqAccordion
              items={c.faq.items.map((item) => ({ q: item.q[lang], a: item.a[lang] }))}
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="charcoal-section section-padding">
          <div className="container-wide text-center">
            <motion.h2 {...fadeUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
              {c.finalCta.title[lang]}
            </motion.h2>
            <motion.p {...fadeUp} className="text-lg text-white/65 mb-9 max-w-xl mx-auto">
              {c.finalCta.body[lang]}
            </motion.p>
            <motion.div {...fadeUp}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-13 px-10 text-base font-semibold bg-white text-foreground hover:bg-white/90 rounded-full"
                >
                  {c.finalCta.cta[lang]}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Index;
