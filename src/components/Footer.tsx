import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();

  const footerLinks = [
    { label: t(translations.nav.home, lang), href: "/" },
    { label: t(translations.nav.workCaseStudy, lang), href: "/case-study" },
    { label: t(translations.nav.workPortfolio, lang), href: "/portfolio" },
    { label: t(translations.nav.services, lang), href: "/services" },
    { label: t(translations.nav.pricing, lang), href: "/pricing" },
    { label: t(translations.nav.contact, lang), href: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-background text-foreground border-t border-border"
    >
      <div className="container-wide py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Sonykun Design" className="h-12 md:h-14 mb-4" />
            </Link>
            <p className="text-sm text-muted-foreground leading-[1.7] mb-4">
              {lang === "zh"
                ? "自 2005 年起，為小型企業提供平價且專業的網站設計服務。"
                : "Affordable, professional website design for small businesses since 2005."}
            </p>
            <p className="text-sm text-muted-foreground">Vancouver, BC, Canada</p>
            <p className="text-sm text-muted-foreground mt-1">
              {lang === "zh" ? "電話：" : "Phone: "}
              <a href="tel:6042621168" className="text-foreground hover:text-primary transition-colors">
                (604) 262-1168
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email:{" "}
              <a
                href="mailto:support@sonykundesign.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                support@sonykundesign.com
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 h-fit">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                style={{ letterSpacing: "0.04em" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sonykun Design.{" "}
            {lang === "zh" ? "版權所有。" : "All Rights Reserved."}
          </p>
          <div className="flex items-center gap-3 text-xs">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(translations.nav.privacy, lang)}
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(translations.nav.terms, lang)}
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
