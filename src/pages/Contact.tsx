import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-8 md:py-12">
          <div className="container-wide">
            <div className="max-w-[680px] mx-auto">
              <ScrollReveal>
                <div className="flex flex-col gap-3 mb-8 p-6 rounded-xl border border-border bg-muted/30">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {lang === "zh" ? "電話" : "Phone"}
                    </p>
                    <a href="tel:7786535353" className="text-sm text-foreground hover:text-primary transition-colors">
                      (778) 653-5353
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {lang === "zh" ? "電子郵件" : "Email"}
                    </p>
                    <a href="mailto:support@sonykundesign.com" className="text-sm text-foreground hover:text-primary transition-colors">
                      support@sonykundesign.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {lang === "zh" ? "地點" : "Location"}
                    </p>
                    <p className="text-sm text-foreground">Vancouver, Canada</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <ContactSection source="sonykun.ca contact page form" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
