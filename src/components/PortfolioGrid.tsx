import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import littleMountainDental from "@/assets/projects/little-mountain-dental.jpg";
import oneParkHome from "@/assets/projects/one-park-home.jpg";

const portfolioItems = {
  en: [
    { name: "Friendly Dental", description: "Modern dental clinic website with online booking", image: friendlyDental, url: "https://friendlydental.ca/" },
    { name: "BTN Real Estate Services", description: "Professional real estate services website", image: btnRealEstate, url: "https://btn.bluluma.com/" },
    { name: "KChen Construction Management", description: "Construction management company website", image: oneParkHome, url: "https://one-park-home.bluluma.com/" },
    { name: "Little Mountain Dental", description: "Family dental practice website", image: littleMountainDental, url: "http://littlemountain.bluluma.com/" },
  ],
  zh: [
    { name: "Friendly Dental", description: "現代牙科診所網站，含線上預約功能", image: friendlyDental, url: "https://friendlydental.ca/" },
    { name: "BTN Real Estate Services", description: "專業房地產服務網站", image: btnRealEstate, url: "https://btn.bluluma.com/" },
    { name: "KChen Construction Management", description: "建築管理公司網站", image: oneParkHome, url: "https://one-park-home.bluluma.com/" },
    { name: "Little Mountain Dental", description: "家庭牙科診所網站", image: littleMountainDental, url: "http://littlemountain.bluluma.com/" },
  ],
};

const PortfolioGrid = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const items = portfolioItems[lang];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.h2
          className="heading-section mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {isZh ? "近期網站專案" : "Recent Website Projects"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {items.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group block overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.name} website design`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider px-4 py-2 border border-primary-foreground/40 rounded-full">
                    {isZh ? "查看網站" : "View Project"}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <Button size="sm" className="rounded-lg gap-2 pointer-events-none btn-cta">
                  {isZh ? "查看網站" : "Visit Website"}
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
