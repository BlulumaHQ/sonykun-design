import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import oneParkHero from "@/assets/casestudies/one-park-home-hero.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const DarkFeature = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <section className="charcoal-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28"
        >
          <span className="eyebrow !text-white/50 !mb-5">
            {isZh ? "精選案例" : "Featured Case Study"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6">
            {isZh ? "One Park Home" : "One Park Home"}
          </h2>
          <p className="text-base md:text-lg text-white/65 leading-[1.7] max-w-md mb-8">
            {isZh
              ? "為現代住宅開發品牌打造的數位形象，傳遞信任、優雅與建築美學。重視留白、結構與細節層次。"
              : "A digital presence for a modern residential development brand that communicates trust, elegance, and architectural sophistication through generous whitespace and refined hierarchy."}
          </p>
          <Link
            to="/work/one-park-home"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium uppercase tracking-[0.18em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            {isZh ? "查看案例" : "View Case Study"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Right: full-bleed image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[320px] lg:min-h-full overflow-hidden"
        >
          <img
            src={oneParkHero}
            alt="One Park Home corporate website case study"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DarkFeature;
