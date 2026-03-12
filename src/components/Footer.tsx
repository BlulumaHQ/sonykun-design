import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  const footerLinks = [
    { label: t(translations.nav.home, lang), href: "/" },
    { label: t(translations.nav.work, lang), href: "/work" },
    { label: t(translations.nav.services, lang), href: "/services" },
    { label: t(translations.nav.pricing, lang), href: "/pricing" },
    { label: t(translations.nav.contact, lang), href: "/contact" },
  ];

  const handleNav = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(href);
      setTimeout(() => window.scrollTo({ top: 0 }), 50);
    }
  };

  return (
    <footer className="border-t border-border">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <img src={logo} alt="Sonykun Design" className="h-14 md:h-[75px] mb-3" />
            <p className="text-body text-sm mb-3">
              {lang === "zh"
                ? "自 2005 年起，為小型企業提供平價且專業的網站設計服務。"
                : "Affordable, professional website design for small businesses since 2005."}
            </p>
            <p className="text-sm text-muted-foreground">Vancouver, Canada</p>
            <p className="text-sm text-muted-foreground mt-1">
              {lang === "zh" ? "電話：" : "Phone: "}
              <a href="tel:7786535353" className="text-foreground hover:text-primary transition-colors">
                (778) 653-5353
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email:{" "}
              <a href="mailto:support@sonykundesign.com" className="text-foreground hover:text-primary transition-colors">
                support@sonykundesign.com
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sonykun Design. {lang === "zh" ? "版權所有。" : "All Rights Reserved."}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <button
              onClick={() => handleNav("/privacy")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(translations.nav.privacy, lang)}
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={() => handleNav("/terms")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(translations.nav.terms, lang)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
