import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[hsl(0_0%_7%)] text-white"
    >
      <div className="container-wide py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <img src={logo} alt="Sonykun Design" className="h-12 md:h-14 mb-4 brightness-0 invert" />
            <p className="text-sm text-white/55 leading-[1.7] mb-4">
              {lang === "zh"
                ? "自 2005 年起，為小型企業提供平價且專業的網站設計服務。"
                : "Affordable, professional website design for small businesses since 2005."}
            </p>
            <p className="text-sm text-white/65">Vancouver, BC, Canada</p>
            <p className="text-sm text-white/65 mt-1">
              {lang === "zh" ? "電話：" : "Phone: "}
              <a href="tel:7786535353" className="text-white hover:text-white/80 transition-colors">
                (778) 653-5353
              </a>
            </p>
            <p className="text-sm text-white/65 mt-1">
              Email:{" "}
              <a
                href="mailto:support@sonykundesign.com"
                className="text-white hover:text-white/80 transition-colors"
              >
                support@sonykundesign.com
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                style={{ letterSpacing: "0.04em" }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-[hsl(0_0%_13%)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sonykun Design.{" "}
            {lang === "zh" ? "版權所有。" : "All Rights Reserved."}
          </p>
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => handleNav("/privacy")}
              className="text-white/40 hover:text-white transition-colors"
            >
              {t(translations.nav.privacy, lang)}
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => handleNav("/terms")}
              className="text-white/40 hover:text-white transition-colors"
            >
              {t(translations.nav.terms, lang)}
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
