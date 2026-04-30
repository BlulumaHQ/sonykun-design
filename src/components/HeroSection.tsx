import { Phone, Eye, ArrowDown, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const headline = isZh
    ? "Sony Lin｜以平實的價格，為小型企業打造專業網站。"
    : "I'm Sony Lin, a Vancouver designer building affordable, professional websites for small businesses since 2005.";

  const intro = isZh
    ? "起價 $375。付款前即可看到網站預覽。免費託管，無強制月費。"
    : "Websites starting at $375. See a live preview before you pay. Free hosting available, no mandatory monthly fee.";

  const headlineWords = headline.split(isZh ? "" : " ").filter(Boolean);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <section className="relative bg-background pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          {/* Avatar mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-muted border border-border flex items-center justify-center mb-10"
            aria-hidden="true"
          >
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">SL</span>
          </motion.div>

          {/* Headline (word stagger) */}
          <h1 className="heading-hero mb-8 max-w-4xl">
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          {/* Intro */}
          <motion.p
            className="text-subtitle max-w-2xl mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55 }}
          >
            {intro}
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-14"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.45 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-12 px-7 text-sm font-medium tracking-wide btn-cta btn-fill rounded-full"
            >
              <Eye className="w-4 h-4 mr-2" />
              {isZh ? "獲取免費網站預覽" : "Get a Free Website Preview"}
            </Button>
            <a href="tel:6042621168">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm font-medium tracking-wide border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                {isZh ? "致電 Sony" : "Call Sony"}
              </Button>
            </a>
            <a href="sms:6042621168">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm font-medium tracking-wide border-foreground/20 text-foreground hover:bg-foreground hover:text-background rounded-full w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {isZh ? "傳簡訊給 Sony" : "Text Sony"}
              </Button>
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            <span>{isZh ? "起價 $375" : "From $375"}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>{isZh ? "20+ 年經驗" : "20+ Years Since 2005"}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>{isZh ? "付款前預覽" : "Preview Before You Pay"}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>{isZh ? "免費託管" : "Free Hosting"}</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollDown}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="hidden md:flex absolute right-0 bottom-0 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>{isZh ? "向下捲動" : "Scroll"}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
