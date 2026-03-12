import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, toggle } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.home, lang), href: "/" },
    { label: t(translations.nav.work, lang), href: "/work" },
    { label: t(translations.nav.services, lang), href: "/services" },
    { label: t(translations.nav.pricing, lang), href: "/pricing" },
    { label: t(translations.nav.contact, lang), href: "/contact" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(href);
      setTimeout(() => window.scrollTo({ top: 0 }), 50);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between h-24 md:h-28">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sonykun Design" className="h-14 md:h-[75px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link nav-link-animated ${
                location.pathname === link.href ? "!text-foreground" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggle}
            className="ml-2 text-sm font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-medium px-2.5 py-1 border border-border rounded-md hover:bg-muted transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="container-wide py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav-link text-lg text-left"
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
