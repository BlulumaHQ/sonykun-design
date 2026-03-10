import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  const footerLinks = [
    { label: t(translations.nav.work, lang), href: "/work" },
    { label: t(translations.nav.services, lang), href: "/services" },
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
              {t(translations.footer.tagline, lang)}
            </p>
            <p className="text-sm text-muted-foreground">Vancouver, Canada</p>
            <p className="text-sm text-muted-foreground mt-1">
              Phone:{" "}
              <a href="tel:7786535353" className="hover:text-foreground transition-colors">
                (778) 653-5353
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email:{" "}
              <a href="mailto:support@sonykundesign.com" className="hover:text-foreground transition-colors">
                support@sonykundesign.com
              </a>
            </p>
          </div>

          <nav className="flex gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link nav-link-animated"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {t(translations.footer.copyright, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
