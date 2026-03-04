import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "Discovery", description: "Understanding project goals, business needs, and design direction." },
  { number: "02", title: "Design", description: "Developing visual identity, layout systems, and creative direction." },
  { number: "03", title: "Build", description: "Producing final design assets and building websites when required." },
  { number: "04", title: "Launch", description: "Delivering final work and assisting with deployment if needed." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 dark-section">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-12">
            Design<br />Process
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="group">
                <span className="block font-display text-5xl font-extrabold text-secondary/30 mb-3 group-hover:text-secondary/60 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:tracking-wider transition-all duration-500">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
