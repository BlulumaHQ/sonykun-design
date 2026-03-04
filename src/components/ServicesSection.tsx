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
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="heading-section mb-20">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="heading-subsection mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="text-body flex items-start gap-3">
                    <span className="block w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
