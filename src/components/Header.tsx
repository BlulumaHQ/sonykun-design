import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

type WorkChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; children: WorkChild[] };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLanguage();
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setWorkOpen(false);
    setMobileWorkOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  // Close desktop dropdown on outside click / Escape
  useEffect(() => {
    if (!workOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setWorkOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [workOpen]);

  const workChildren: WorkChild[] = [
    { label: t(translations.nav.workCaseStudy, lang), href: "/case-study" },
    { label: t(translations.nav.workPortfolio, lang), href: "/portfolio" },
  ];

  const navLinks: NavItem[] = [
    { label: t(translations.nav.home, lang), href: "/" },
    { label: t(translations.nav.work, lang), href: "/portfolio", children: workChildren },
    { label: t(translations.nav.services, lang), href: "/services" },
    { label: t(translations.nav.pricing, lang), href: "/pricing" },
    { label: t(translations.nav.contact, lang), href: "/contact" },
  ];

  const isWorkActive =
    location.pathname.startsWith("/work") ||
    location.pathname.startsWith("/portfolio") ||
    location.pathname.startsWith("/case-study");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-background/95 backdrop-blur-sm border-transparent"
      }`}
    >
      <div
        className={`container-wide flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-16 md:h-20" : "h-24 md:h-28"
        }`}
      >
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="Sonykun Design"
            className={`transition-[height] duration-300 ${scrolled ? "h-10 md:h-12" : "h-14 md:h-[75px]"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, i) => {
            if (link.children) {
              const isActive = isWorkActive;
              return (
                <motion.div
                  key={link.href}
                  ref={workRef}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  className="relative"
                  onMouseEnter={() => setWorkOpen(true)}
                  onMouseLeave={() => setWorkOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setWorkOpen((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={workOpen}
                    className={`group relative inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                      isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span
                        className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] bg-primary transition-transform duration-300 ease-out origin-left w-full ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        workOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {workOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-48 z-50"
                        role="menu"
                      >
                        <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden py-1.5">
                          {link.children.map((c) => {
                            const childActive = location.pathname.startsWith(c.href);
                            return (
                              <Link
                                key={c.href}
                                to={c.href}
                                role="menuitem"
                                onClick={() => setWorkOpen(false)}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  childActive
                                    ? "text-foreground bg-muted/60 font-medium"
                                    : "text-foreground/75 hover:text-foreground hover:bg-muted/40"
                                }`}
                              >
                                {c.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            const isActive = location.pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              >
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={`group relative inline-block text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <span className="relative inline-block">
                    {link.label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] bg-primary transition-transform duration-300 ease-out origin-left w-full ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </span>
                </NavLink>
              </motion.div>
            );
          })}
          <motion.button
            onClick={toggle}
            className="ml-2 text-sm font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {lang === "en" ? "中文" : "EN"}
          </motion.button>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container-wide py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileWorkOpen((v) => !v)}
                        aria-expanded={mobileWorkOpen}
                        className="w-full flex items-center justify-between py-2 text-lg font-medium text-foreground"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileWorkOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileWorkOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-border ml-1 mt-1">
                              {link.children.map((c) => (
                                <Link
                                  key={c.href}
                                  to={c.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-2 text-base text-foreground/80 hover:text-primary transition-colors"
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
