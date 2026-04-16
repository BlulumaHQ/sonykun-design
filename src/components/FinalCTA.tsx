import { Eye, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const heading = isZh ? "準備好升級您的網站了嗎？" : "Ready to Upgrade Your Website?";
  // Char-by-char reveal (works for CJK and Latin)
  const chars = Array.from(heading);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-[hsl(215,47%,12%)]">
      <div className="container-wide text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025 } } }}
          aria-label={heading}
        >
          {chars.map((c, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-lg text-white/70 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {isZh
            ? "付款前即可獲得即時網站預覽。先看設計，再做決定。"
            : "Get a live website preview before making any payment. See the design first, then decide."}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="h-13 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary-hover btn-fill rounded-xl"
          >
            <Eye className="w-5 h-5 mr-2" />
            {isZh ? "獲取免費網站預覽" : "Get Free Preview"}
          </Button>
          <a href="tel:7786535353">
            <Button
              size="lg"
              className="h-13 px-8 text-base font-semibold bg-background text-foreground hover:bg-muted rounded-xl w-full sm:w-auto border border-border"
            >
              <Phone className="w-5 h-5 mr-2" />
              {isZh ? "聯絡 Sony" : "Call / Text Sony"}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
