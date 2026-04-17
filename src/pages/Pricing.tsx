import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pricingContent, pageMeta } from "@/i18n/pageContent";
import { usePageMeta } from "@/hooks/usePageMeta";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

interface CardShellProps {
  highlighted?: boolean;
  badge?: string;
  children: React.ReactNode;
  delay?: number;
}

const CardShell = ({ highlighted, badge, children, delay = 0 }: CardShellProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
    className={`relative rounded-2xl p-7 border flex flex-col h-full ${
      highlighted ? "border-primary/40 bg-primary/[0.03] shadow-md" : "border-border bg-background"
    }`}
  >
    {badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
        {badge}
      </span>
    )}
    {children}
  </motion.div>
);

const Pricing = () => {
  const { lang } = useLanguage();
  const c = pricingContent;
  usePageMeta({
    title: pageMeta.pricing.title,
    description: pageMeta.pricing.description,
    canonical: "https://sonykundesign.com/pricing",
  });

  return (
    <>
      <Header />
      <main>
        {/* HEADER */}
        <section className="bg-background pt-36 pb-14 md:pt-44 md:pb-20">
          <div className="container-wide text-center max-w-3xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="eyebrow">
              {c.header.eyebrow[lang]}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-hero mb-6"
            >
              {c.header.title[lang]}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-subtitle"
            >
              {c.header.subtext[lang]}
            </motion.p>
          </div>
        </section>

        {/* WEBSITE DESIGN */}
        <section className="pb-16 md:pb-24">
          <div className="container-wide">
            <motion.h2 {...fadeUp} className="heading-section text-center mb-12">
              {c.website.title[lang]}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {c.website.cards.map((card, i) => (
                <CardShell key={i} delay={i * 0.08} highlighted={!!card.badge} badge={card.badge?.[lang]}>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title[lang]}</h3>
                  <p className="font-display text-4xl font-bold text-foreground mb-1">{card.price}</p>
                  {card.note && <p className="text-xs text-muted-foreground mb-4 leading-snug">{card.note[lang]}</p>}
                  {!card.note && <div className="mb-4" />}
                  <ul className="space-y-2.5 flex-1">
                    {card.features[lang].map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardShell>
              ))}
            </div>
          </div>
        </section>

        {/* BUNDLES */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-section mb-4">{c.bundles.title[lang]}</h2>
              <p className="text-body">{c.bundles.body[lang]}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {c.bundles.cards.map((card, i) => (
                <CardShell key={i} delay={i * 0.1} highlighted={!!card.badge} badge={card.badge?.[lang]}>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title[lang]}</h3>
                  <p className="font-display text-3xl font-bold text-foreground mb-1">{card.price}</p>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-5">{card.save[lang]}</p>
                  <ul className="space-y-2.5 flex-1">
                    {card.items[lang].map((it, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </CardShell>
              ))}
            </div>
          </div>
        </section>

        {/* LOGO */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.h2 {...fadeUp} className="heading-section text-center mb-12">
              {c.logo.title[lang]}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {c.logo.cards.map((card, i) => (
                <CardShell key={i} delay={i * 0.08} highlighted={!!card.badge} badge={card.badge?.[lang]}>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title[lang]}</h3>
                  <p className="font-display text-4xl font-bold text-foreground mb-5">{card.price}</p>
                  <ul className="space-y-2.5 flex-1">
                    {card.features[lang].map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardShell>
              ))}
            </div>
          </div>
        </section>

        {/* HOSTING */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <motion.h2 {...fadeUp} className="heading-section text-center mb-12">
              {c.hosting.title[lang]}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <CardShell>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.hosting.free.title[lang]}</h3>
                <p className="font-display text-4xl font-bold text-foreground mb-4">{c.hosting.free.price}</p>
                <p className="text-sm text-muted-foreground leading-[1.7] flex-1">{c.hosting.free.body[lang]}</p>
              </CardShell>
              <CardShell highlighted delay={0.1}>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.hosting.managed.title[lang]}</h3>
                <p className="font-display text-2xl font-bold text-foreground mb-4">{c.hosting.managed.price[lang]}</p>
                <ul className="space-y-2.5 mb-4 flex-1">
                  {c.hosting.managed.features[lang].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider">{c.hosting.managed.note[lang]}</p>
              </CardShell>
            </div>
          </div>
        </section>

        {/* ADD-ONS */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.h2 {...fadeUp} className="heading-section text-center mb-12">
              {c.addons.title[lang]}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {c.addons.cards.map((card, i) => (
                <CardShell key={i} delay={i * 0.1}>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title[lang]}</h3>
                  <p className="font-display text-3xl font-bold text-foreground mb-4">
                    {typeof card.price === "string" ? card.price : card.price[lang]}
                  </p>
                  <p className="text-sm text-muted-foreground leading-[1.7] flex-1">{card.body[lang]}</p>
                </CardShell>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted">
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

export default Pricing;
