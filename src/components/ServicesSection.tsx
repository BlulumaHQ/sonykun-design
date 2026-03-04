import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Identity Design",
    items: [
      "Logo design and visual marks",
      "Brand identity systems",
      "Brand guidelines and standards",
      "Business card and stationery",
      "Brand application design",
    ],
  },
  {
    title: "Website Design",
    items: [
      "Corporate websites",
      "Business websites",
      "Portfolio websites",
      "Professional service websites",
      "Responsive layout design",
    ],
  },
  {
    title: "Ecommerce Websites",
    items: [
      "Shopify store design",
      "WooCommerce websites",
      "Product page design",
      "Online store setup",
      "Ecommerce branding",
    ],
  },
  {
    title: "Marketing Graphics",
    items: [
      "Posters and flyers",
      "Brochures and booklets",
      "Social media graphics",
      "Advertising materials",
      "Promotional design assets",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04]" style={{
        background: `repeating-linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--secondary)) 1px, transparent 1px, transparent 16px)`
      }} />
      
      <div className="container-wide relative">
        <ScrollReveal>
          <h2 className="heading-section mb-10">Services</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                className="group bg-background p-6 md:p-8 border border-border transition-all duration-500 h-full tilt-card service-card-hover"
                whileHover={{ y: -4 }}
              >
                <h3 className="heading-subsection mb-4 group-hover:tracking-wider transition-all duration-500">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
