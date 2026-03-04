import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ServicesSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04]" style={{
        background: `repeating-linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--secondary)) 1px, transparent 1px, transparent 16px)`
      }} />
      
      <div className="container-wide relative">
        <ScrollReveal>
          <h2 className="heading-section mb-10">{t(translations.services.title, lang)}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {translations.services.items.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="group bg-background p-6 md:p-8 border border-border transition-all duration-500 h-full tilt-card service-card-hover"
                whileHover={{ y: -4 }}
              >
                <h3 className="heading-subsection mb-4 group-hover:tracking-wider transition-all duration-500">
                  {t(service.title, lang)}
                </h3>
                <ul className="space-y-2">
                  {service.items[lang].map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
