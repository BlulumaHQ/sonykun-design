import { Phone, Eye, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-devices-mockup.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const trustBullets = isZh
    ? ["網站起價 $375", "超過 20 年經驗，自 2005 年起", "付款前即時預覽", "免費託管"]
    : ["Websites starting at $375", "20+ years experience since 2005", "Live preview before payment", "Free hosting available"];

  const headline = isZh ? "專業網站設計" : "Professional Website Design";
  const headlineWords = headline.split(isZh ? "" : " ").filter(Boolean);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-background pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground mb-3">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {isZh ? "起價 $375" : "Starting at $375"}
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {isZh ? (
                <>付款前即可獲得即時網站預覽。<br />無需月費。<br />免費託管。</>
              ) : (
                <>Live website preview before you pay.<br />No monthly fee required.<br />Free hosting included.</>
              )}
            </motion.p>

            <motion.ul
              className="space-y-3 mb-10"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } },
              }}
            >
              {trustBullets.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-13 px-8 text-base font-semibold btn-cta btn-fill rounded-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                {isZh ? "獲取免費網站預覽" : "Get Your Free Website Preview"}
              </Button>
              <a href="tel:7786535353">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {isZh ? "聯絡 Sony" : "Call / Text Sony"}
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, rotate: -3, y: 20 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroMockup}
              alt="Professional website design shown on laptop and mobile devices"
              className="w-full max-w-xl rounded-xl shadow-lg"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
