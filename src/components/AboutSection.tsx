import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="heading-section mb-8">
            About<br />Sony Lin
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-subtitle">
                Sony Lin is a Vancouver-based designer specializing in branding,
                website design, and marketing graphics.
              </p>
              <p className="text-body">
                He graduated from Emily Carr University in 2002 and has been
                working in design for over twenty years.
              </p>
              <p className="text-body">
                Throughout his career, Sony has worked with businesses across a
                wide range of industries including healthcare, real estate,
                retail, hospitality, and professional services.
              </p>
              <p className="text-body">
                His work focuses on creating clear brand identities,
                well-structured websites, and marketing materials that help
                businesses present themselves professionally and consistently.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-muted p-6 md:p-8 border border-border">
              <h3 className="font-display text-lg font-semibold text-primary mb-4">Highlights</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                  20+ years of design experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                  Emily Carr University graduate (2002)
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                  Vancouver-based
                </li>
                <li className="flex items-start gap-2">
                  <span className="block w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                  Branding, Web & Marketing
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
