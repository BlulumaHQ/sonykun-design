const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding project goals, business needs, and design direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "Developing visual identity, layout systems, and creative direction.",
  },
  {
    number: "03",
    title: "Build",
    description: "Producing final design assets and building websites when required.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Delivering final work and assisting with deployment if needed.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding dark-section">
      <div className="container-wide">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-20">
          Design<br />Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="block font-display text-6xl font-extrabold text-secondary/30 mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
