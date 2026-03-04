import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Brand Identity Design",
    description: "Brand identity systems including logos, visual guidelines, and brand applications.",
    items: ["Logo design", "Brand identity systems", "Brand guidelines", "Business card and stationery design"],
  },
  {
    title: "Website Design",
    description: "Corporate, portfolio, and business websites designed for clarity and usability.",
    items: ["Corporate websites", "Business websites", "Portfolio websites", "Professional service websites"],
  },
  {
    title: "Ecommerce Websites",
    description: "Online stores built using Shopify or WooCommerce platforms.",
    items: ["Shopify websites", "WooCommerce websites", "Product websites"],
  },
  {
    title: "Marketing Graphics",
    description: "Marketing materials including posters, brochures, flyers, and social media graphics.",
    items: ["Posters", "Flyers", "Brochures", "Social media graphics", "Advertising materials"],
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-hero mb-20">Services</h1>

            <div className="space-y-24">
              {services.map((service) => (
                <div key={service.title} className="max-w-3xl">
                  <h2 className="heading-subsection mb-4">{service.title}</h2>
                  <p className="text-subtitle mb-8">{service.description}</p>
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
      </main>
      <Footer />
    </>
  );
};

export default Services;
