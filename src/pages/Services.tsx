import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Services = () => {
  const { lang } = useLanguage();

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.03]" style={{
            background: `repeating-linear-gradient(-45deg, hsl(var(--secondary)), hsl(var(--secondary)) 1px, transparent 1px, transparent 20px)`
          }} />

          <div className="container-wide relative">
            <ScrollReveal>
              <h1 className="heading-hero mb-12">{t(translations.services.title, lang)}</h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {translations.services.items.map((service, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div
                    className="group bg-muted p-6 md:p-8 border border-border transition-all duration-500 h-full flex flex-col tilt-card service-card-hover"
                    whileHover={{ y: -4 }}
                  >
                    <h2 className="heading-subsection mb-3 group-hover:tracking-wider transition-all duration-500">
                      {t(service.title, lang)}
                    </h2>
                    <p className="text-body text-sm mb-4">{t(service.description, lang)}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {service.items[lang].map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {lang === "en" ? "Deliverables" : "交付項目"}
                      </h4>
                      <ul className="space-y-1">
                        {service.deliverables[lang].map((d, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <span className="text-secondary">→</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
