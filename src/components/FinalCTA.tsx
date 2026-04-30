import { Eye, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const heading = isZh ? "準備好升級您的網站了嗎？" : "Interested in working together?";

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="charcoal-section section-padding">
      <div className="container-wide">
        <div className="max-w-3xl">
          <motion.span
            className="eyebrow !text-white/50"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            {isZh ? "聯絡我" : "Let's Talk"}
          </motion.span>

          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {heading}
          </motion.h2>

          <motion.p
            className="text-lg text-white/65 mb-10 max-w-xl leading-[1.7]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {isZh
              ? "付款前即可獲得即時網站預覽。先看設計，再做決定。"
              : "Get a live website preview before making any payment. See the design first, then decide."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-12 px-7 text-sm font-medium tracking-wide bg-white text-foreground hover:bg-white/90 rounded-full"
            >
              <Eye className="w-4 h-4 mr-2" />
              {isZh ? "獲取免費網站預覽" : "Get a Free Preview"}
            </Button>
            <a href="tel:6042621168">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-sm font-medium tracking-wide bg-transparent border-white/25 text-white hover:bg-white hover:text-foreground rounded-full w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                {isZh ? "致電 Sony" : "Call Sony"}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
