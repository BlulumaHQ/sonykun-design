import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const stepsData = {
  en: [
    { number: "01", title: "Discovery", description: "Understanding project goals, business needs, and design direction." },
    { number: "02", title: "Design", description: "Developing visual identity, layout systems, and creative direction." },
    { number: "03", title: "Build", description: "Producing final design assets and building websites when required." },
    { number: "04", title: "Launch", description: "Delivering final work and assisting with deployment if needed." },
  ],
  zh: [
    { number: "01", title: "釐清目標與內容架構", description: "先了解你的業務、客戶與需求，整理網站結構與內容層級。" },
    { number: "02", title: "視覺方向與設計系統", description: "建立一致的品牌視覺與排版規則，確保整體乾淨且可延伸。" },
    { number: "03", title: "網站建置與調整", description: "完成響應式網站並針對細節修整，確保手機與桌面體驗一致。" },
    { number: "04", title: "上線與交付", description: "完成上線、測試與交付，並提供後續維護與更新的建議方式。" },
  ],
};

const ProcessSection = () => {
  const { lang } = useLanguage();
  const steps = stepsData[lang];

  return (
    <section id="process" className="py-16 md:py-24 dark-section">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-12">
            {lang === "en" ? <>Design<br />Process</> : <>工作<br />流程</>}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="group">
                <span className="block font-display text-5xl font-extrabold text-secondary/30 mb-3 group-hover:text-secondary/60 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:tracking-wider transition-all duration-500">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
