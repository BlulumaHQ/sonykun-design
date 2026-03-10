import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  const { lang } = useLanguage();
  const words = translations.hero.words[lang];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-36 overflow-hidden">
      {/* Background mockup image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMockup}
          alt="Sonykun Design website displayed on laptop and smartphone in a modern studio environment"
          className="w-full h-full object-cover object-center md:object-right"
          loading="eager"
        />
        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          <h1 className="heading-hero mb-6" style={{ color: "hsl(0 0% 100%)" }}>
            {words.map((word, i) => (
              <motion.span
                key={`${lang}-${i}`}
                className={`block ${i === 2 ? "text-secondary" : ""}`}
                style={i === 2 ? { color: "hsl(var(--secondary))" } : undefined}
                initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 1.9 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.div
            className="w-16 h-1 mb-6"
            style={{ backgroundColor: "hsl(var(--secondary))" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
          />

          <motion.p
            className="text-subtitle max-w-xl mb-10"
            style={{ color: "hsl(0 0% 80%)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            {t(translations.hero.subtitle, lang)}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
