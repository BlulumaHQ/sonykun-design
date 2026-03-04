import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <img src={logo} alt="Sonykun Design" className="h-10 mb-4" />
            <p className="text-body">
              Personal design portfolio of Sony Lin.
            </p>
          </div>

          <nav className="flex gap-10">
            {[
              { label: "Work", href: "/work" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.label} to={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Sonykun Design. Copyright © 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
