import { Phone, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-devices-mockup.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const trustBullets = isZh
    ? ["網站起價 $375", "超過 20 年經驗，自 2005 年起", "付款前即時預覽", "免費託管"]
    : ["Websites starting at $375", "20+ years experience since 2005", "Live preview before payment", "Free hosting available"];

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
              {isZh ? "專業網站設計" : "Professional Website Design"}
            </h1>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6">
              {isZh ? "起價 $375" : "Starting at $375"}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {isZh ? (
                <>付款前即可獲得即時網站預覽。<br />無需月費。<br />免費託管。</>
              ) : (
                <>Live website preview before you pay.<br />No monthly fee required.<br />Free hosting included.</>
              )}
            </p>

            <ul className="space-y-3 mb-10">
              {trustBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-13 px-8 text-base font-semibold btn-cta rounded-xl"
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
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroMockup}
              alt="Professional website design shown on laptop and mobile devices"
              className="w-full max-w-xl rounded-xl shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
