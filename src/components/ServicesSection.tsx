import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Brand Identity Design",
    items: ["Logo design", "Brand identity systems", "Brand guidelines", "Business card and stationery design"],
  },
  {
    title: "Website Design",
    items: ["Corporate websites", "Business websites", "Portfolio websites", "Professional service websites"],
  },
  {
    title: "Ecommerce Websites",
    items: ["Shopify websites", "WooCommerce websites", "Product websites"],
  },
  {
    title: "Marketing Graphics",
    items: ["Posters", "Flyers", "Brochures", "Social media graphics", "Advertising materials"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="heading-section mb-10">Services</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="group bg-background p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(215_47%_18%/0.15)]">
                <h3 className="heading-subsection mb-4 group-hover:tracking-wider transition-all duration-500">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
