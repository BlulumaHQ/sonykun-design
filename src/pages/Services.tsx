import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { servicesContent, pageMeta } from "@/i18n/pageContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const Services = () => {
  const { lang } = useLanguage();
  const c = servicesContent;
  usePageMeta({
    title: pageMeta.services.title,
    description: pageMeta.services.description,
    canonical: "https://sonykundesign.com/services",
  });

  const ServiceBlock = ({
    block,
    reversed = false,
  }: {
    block: typeof c.website | typeof c.logo;
    reversed?: boolean;
  }) => (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-2xl mb-12">
          <h2 className="heading-section mb-5">{block.title[lang]}</h2>
          <p className="text-body">{block.body[lang]}</p>
        </motion.div>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <motion.div {...fadeUp}>
            <h3 className="eyebrow mb-5">{lang === "zh" ? "服務內容" : "What's included"}</h3>
            <ul className="space-y-3">
              {block.features[lang].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="leading-[1.7]">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="bg-muted rounded-2xl p-7 md:p-9">
            <h3 className="eyebrow mb-5">{lang === "zh" ? "交付項目" : "Deliverables"}</h3>
            <ul className="space-y-3 mb-7">
              {block.deliverables[lang].map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="text-primary flex-shrink-0 mt-1">→</span>
                  <span className="leading-[1.7]">{d}</span>
                </li>
              ))}
            </ul>
            <div className="pt-5 border-t border-border">
              <p className="font-display text-2xl font-bold text-foreground mb-2">{block.price[lang]}</p>
              <Link to="/pricing" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1.5">
                {block.link[lang]}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="container-wide max-w-4xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="eyebrow">
              {c.hero.eyebrow[lang]}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-hero mb-6"
            >
              {c.hero.title[lang]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-subtitle max-w-2xl"
            >
              {c.hero.subtext[lang]}
            </motion.p>
          </div>
        </section>

        <ServiceBlock block={c.website} />
        <ServiceBlock block={c.logo} reversed />

        {/* MID CTA */}
        <section className="bg-muted py-16 md:py-20">
          <div className="container-wide text-center max-w-2xl">
            <motion.h2 {...fadeUp} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              {c.midCta.title[lang]}
            </motion.h2>
            <motion.p {...fadeUp} className="text-muted-foreground mb-7">
              {c.midCta.body[lang]}
            </motion.p>
            <motion.div {...fadeUp}>
              <Link to="/contact">
                <Button size="lg" className="h-12 px-7 text-sm font-medium tracking-wide btn-cta btn-fill rounded-full">
                  {c.midCta.cta[lang]}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* BUNDLES */}
        <section className="section-padding border-t border-border">
          <div className="container-wide">
            <motion.div {...fadeUp} className="max-w-2xl mb-12">
              <h2 className="heading-section mb-5">{c.bundles.title[lang]}</h2>
              <p className="text-body">{c.bundles.body[lang]}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {c.bundles.cards.map((card, i) => {
                const highlighted = !!card.badge;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative rounded-2xl p-7 border flex flex-col ${
                      highlighted ? "border-primary/40 bg-primary/[0.03] shadow-md" : "border-border bg-background"
                    }`}
                  >
                    {card.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                        {card.badge[lang]}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title[lang]}</h3>
                    <p className="font-display text-3xl font-bold text-foreground mb-1">{card.price}</p>
                    <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-5">{card.save[lang]}</p>
                    <ul className="space-y-2.5 flex-1">
                      {card.items[lang].map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOSTING */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <motion.div {...fadeUp} className="max-w-2xl mb-12">
              <h2 className="heading-section mb-5">{c.hosting.title[lang]}</h2>
              <p className="text-body">{c.hosting.body[lang]}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div {...fadeUp}>
                <h3 className="eyebrow mb-5">{c.hosting.handle.title[lang]}</h3>
                <ul className="space-y-3">
                  {c.hosting.handle.items[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-[1.7]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp} className="space-y-5">
                <h3 className="eyebrow">{c.hosting.options.title[lang]}</h3>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">{c.hosting.options.free.title[lang]}</h4>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{c.hosting.options.free.body[lang]}</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-primary/30 shadow-sm">
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">{c.hosting.options.managed.title[lang]}</h4>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{c.hosting.options.managed.body[lang]}</p>
                </div>
              </motion.div>
            </div>
            <motion.p {...fadeUp} className="text-sm text-muted-foreground italic mt-8 max-w-3xl leading-[1.7]">
              {c.hosting.note[lang]}
            </motion.p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="heading-section">{c.faq.title[lang]}</h2>
            </motion.div>
            <FaqAccordion items={c.faq.items.map((item) => ({ q: item.q[lang], a: item.a[lang] }))} />
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="charcoal-section section-padding">
          <div className="container-wide text-center">
            <motion.h2 {...fadeUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
              {c.bottomCta.title[lang]}
            </motion.h2>
            <motion.p {...fadeUp} className="text-lg text-white/65 mb-9 max-w-xl mx-auto">
              {c.bottomCta.body[lang]}
            </motion.p>
            <motion.div {...fadeUp}>
              <Link to="/contact">
                <Button size="lg" className="h-13 px-10 text-base font-semibold bg-white text-foreground hover:bg-white/90 rounded-full">
                  {c.bottomCta.cta[lang]}
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

export default Services;
