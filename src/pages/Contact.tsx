import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeUp, inViewProps, staggerContainer } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const details = [
    {
      label: isZh ? "電話" : "Phone",
      value: "(604) 262-1168",
      href: "tel:6042621168",
    },
    {
      label: isZh ? "電子郵件" : "Email",
      value: "support@sonykundesign.com",
      href: "mailto:support@sonykundesign.com",
    },
    {
      label: isZh ? "地點" : "Location",
      value: "Vancouver, BC, Canada",
    },
    {
      label: isZh ? "回覆時間" : "Response Time",
      value: isZh ? "1–2 個工作天" : "1–2 business days",
    },
  ];

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-32 md:pt-40">
        {/* HERO */}
        <section className="pb-12 md:pb-20">
          <div className="container-wide max-w-5xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              {isZh ? "聯絡我們" : "Get In Touch"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-6"
            >
              {isZh ? "開始一個專案。" : "Start a Project."}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-subtitle max-w-xl"
            >
              {isZh
                ? "告訴我們您的業務與需求。我們會在 1–2 個工作天內回覆。"
                : "Tell us about your business and what you're looking for. We'll get back to you within 1–2 business days."}
            </motion.p>
          </div>
        </section>

        {/* TWO-COLUMN: details + form */}
        <section className="pb-20 md:pb-32">
          <div className="container-wide max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
              {/* Left: details */}
              <motion.div
                variants={staggerContainer}
                {...inViewProps}
                className="flex flex-col gap-8"
              >
                {details.map((d) => (
                  <motion.div key={d.label} variants={fadeUp}>
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[hsl(0_0%_53%)] mb-2">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-base text-foreground hover:opacity-60 transition-opacity"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-base text-foreground">{d.value}</p>
                    )}
                  </motion.div>
                ))}
                <motion.p
                  variants={fadeUp}
                  className="text-sm text-[hsl(0_0%_33%)] leading-[1.75] max-w-xs pt-4 border-t border-border"
                >
                  {isZh
                    ? "自 2005 年起，我們為小型企業打造網站。每個專案都從免費預覽開始 — 您在付款前就能看到網站。"
                    : "We've been building websites for small businesses since 2005. Every project starts with a free preview — you see your website before you pay anything."}
                </motion.p>
              </motion.div>

              {/* Right: form (existing logic preserved) */}
              <div id="contact-form">
                <ContactSection source="sonykun.ca contact page form" />
              </div>
            </div>
          </div>
        </section>

        {/* DARK BOTTOM CTA */}
        <section className="bg-charcoal py-20 md:py-32">
          <div className="container-wide text-center">
            <motion.h2 {...fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-white">
              {isZh ? "準備好看到您的網站了嗎？" : "Ready to see your website?"}
            </motion.h2>
            <motion.p {...fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-base md:text-lg text-white/65 mb-9 max-w-xl mx-auto">
              {isZh
                ? "填寫上方表單，我們會為您打造免費預覽。"
                : "Fill out the form above and we'll build you a free preview."}
            </motion.p>
            <Button
              onClick={() =>
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              size="lg"
              className="h-12 px-8 text-sm font-medium bg-white text-foreground hover:bg-white/90 rounded"
            >
              {isZh ? "獲取免費預覽" : "Get Your Free Preview"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
