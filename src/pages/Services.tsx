import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Identity Design",
    description: "Brand identity systems including logos, visual guidelines, and brand applications.",
    items: [
      "Logo design and visual identity marks",
      "Complete brand identity systems",
      "Brand guidelines and standards documentation",
      "Business card and stationery design",
      "Brand application across print and digital",
    ],
    deliverables: ["Logo files (SVG, PNG, PDF)", "Brand guidelines document", "Stationery design templates"],
  },
  {
    title: "Website Design",
    description: "Corporate, portfolio, and business websites designed for clarity and usability.",
    items: [
      "Corporate and business website design",
      "Portfolio and personal brand websites",
      "Professional service industry websites",
      "Responsive layout and mobile optimization",
      "UI design systems and component libraries",
    ],
    deliverables: ["Full website design (desktop + mobile)", "Interactive prototype", "Design system assets"],
  },
  {
    title: "Ecommerce Websites",
    description: "Online stores built using Shopify or WooCommerce platforms.",
    items: [
      "Shopify store design and development",
      "WooCommerce website setup and design",
      "Product page layout and optimization",
      "Online store branding and visual identity",
      "Ecommerce UX and checkout flow design",
    ],
    deliverables: ["Fully designed store theme", "Product page templates", "Checkout flow design"],
  },
  {
    title: "Marketing Graphics",
    description: "Marketing materials including posters, brochures, flyers, and social media graphics.",
    items: [
      "Poster and flyer design for print",
      "Brochure and booklet layout design",
      "Social media graphics and templates",
      "Advertising and promotional materials",
      "Digital and print campaign assets",
    ],
    deliverables: ["Print-ready files (PDF, AI)", "Social media template set", "Campaign asset package"],
  },
];

const Services = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Diagonal accent */}
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.03]" style={{
            background: `repeating-linear-gradient(-45deg, hsl(var(--secondary)), hsl(var(--secondary)) 1px, transparent 1px, transparent 20px)`
          }} />

          <div className="container-wide relative">
            <ScrollReveal>
              <h1 className="heading-hero mb-12">Services</h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <motion.div
                    className="group bg-muted p-6 md:p-8 border border-border transition-all duration-500 h-full flex flex-col tilt-card service-card-hover"
                    whileHover={{ y: -4 }}
                  >
                    <h2 className="heading-subsection mb-3 group-hover:tracking-wider transition-all duration-500">{service.title}</h2>
                    <p className="text-body text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {service.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Deliverables</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((d) => (
                          <li key={d} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <span className="text-secondary">→</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
