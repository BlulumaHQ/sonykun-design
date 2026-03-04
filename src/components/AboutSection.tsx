import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const AboutSection = () => {
  const { lang } = useLanguage();
  const titleParts = translations.about.title[lang].split("\n");

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="heading-section mb-8">
            {titleParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < titleParts.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-subtitle">
                {t(translations.about.subtitle, lang)}
              </p>
              <p className="text-body">
                {t(translations.about.p1, lang)}
              </p>
              <p className="text-body">
                {t(translations.about.p2, lang)}
              </p>
              <p className="text-body">
                {t(translations.about.p3, lang)}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-muted p-6 md:p-8 border border-border">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {t(translations.about.highlightsTitle, lang)}
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {translations.about.highlights[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
