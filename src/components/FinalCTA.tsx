import { Eye, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
          {isZh ? "準備好升級您的網站了嗎？" : "Ready to Upgrade Your Website?"}
        </h2>
        <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
          {isZh
            ? "付款前即可獲得即時網站預覽。先看設計，再做決定。"
            : "Get a live website preview before making any payment. See the design first, then decide."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="h-13 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary-hover rounded-xl"
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
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
