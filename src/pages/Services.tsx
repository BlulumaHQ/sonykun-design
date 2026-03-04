import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

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
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <ScrollReveal>
              <h1 className="heading-hero mb-12">Services</h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div className="group bg-muted p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(215_47%_18%/0.15)] h-full">
                    <h2 className="heading-subsection mb-3 group-hover:tracking-wider transition-all duration-500">{service.title}</h2>
                    <p className="text-body text-sm mb-4">{service.description}</p>
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
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
