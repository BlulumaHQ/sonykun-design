import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/work" },
    { label: "Contact", href: "/contact" },
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
              Affordable, professional website design for small businesses since 2005.
            </p>
            <p className="text-sm text-muted-foreground">Vancouver, Canada</p>
            <p className="text-sm text-muted-foreground mt-1">
              Phone:{" "}
              <a href="tel:7786535353" className="text-foreground hover:text-secondary transition-colors">
                (778) 653-5353
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email:{" "}
              <a href="mailto:support@sonykundesign.com" className="text-foreground hover:text-secondary transition-colors">
                support@sonykundesign.com
              </a>
            </p>
          </div>

          <nav className="flex gap-8">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sonykun Design | Web Design by{" "}
            <a
              href="https://www.bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-secondary transition-colors"
            >
              Bluluma.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
