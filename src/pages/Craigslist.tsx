import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { CheckCircle, Eye, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Craigslist = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const trustBullets = isZh
    ? ["起價 $375", "付款前即時預覽", "免費託管", "無月費", "20+ 年經驗，自 2005 年起"]
    : ["Starting at $375", "Live preview before payment", "Free hosting included", "No monthly fee required", "20+ years experience since 2005"];

  const pricingSummary = [
    {
      title: isZh ? "基本網站" : "Basic Website",
      price: "$375",
      features: isZh
        ? ["單頁網站", "手機友好", "聯絡表單"]
        : ["Single page", "Mobile friendly", "Contact form"],
    },
    {
      title: isZh ? "商業網站" : "Business Website",
      price: "$750",
      features: isZh
        ? ["最多 7 頁", "SEO 友好", "手機優化"]
        : ["Up to 7 pages", "SEO friendly", "Mobile optimized"],
    },
    {
      title: isZh ? "進階網站" : "Premium Website",
      price: "$1,250",
      features: isZh
        ? ["客製設計", "最多 10 頁"]
        : ["Custom design", "Up to 10 pages"],
    },
    {
      title: isZh ? "電商網站" : "Ecommerce",
      price: "$1,650",
      features: isZh
        ? ["線上商店", "付款整合"]
        : ["Online store", "Payment integration"],
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("craigslist-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground mb-3"
              >
                {isZh ? "小型企業的平價網站設計" : "Affordable Website Design for Small Businesses"}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-6"
              >
                {isZh ? "起價 $375" : "Starting at $375"}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg text-muted-foreground mb-8"
              >
                {isZh ? "付款前即時預覽。免費託管。" : "Live preview before you pay. Free hosting included."}
              </motion.p>

              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
                className="space-y-3 mb-10 max-w-md mx-auto text-left"
              >
                {trustBullets.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
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
          </div>
        </section>

        <PortfolioGrid />
        <TestimonialsSection />

        {/* Pricing Summary */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="heading-section mb-10 text-center">
              {isZh ? "清晰簡單的定價" : "Clear and Simple Pricing"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {pricingSummary.map((plan) => (
                <div key={plan.title} className="rounded-2xl p-7 border border-border bg-background flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{plan.title}</h3>
                  <p className="text-3xl font-bold text-foreground mb-5">{plan.price}</p>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              {isZh ? "準備好開始了嗎？" : "Ready to Get Started?"}
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              {isZh ? "付款前即可獲得即時網站預覽。" : "Get a live website preview before making any payment."}
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-13 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
            >
              <Eye className="w-5 h-5 mr-2" />
              {isZh ? "獲取免費網站預覽" : "Get Your Free Website Preview"}
            </Button>
          </div>
        </section>

        <div id="craigslist-contact">
          <ContactSection source="craigslist landing page" />
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Craigslist;
