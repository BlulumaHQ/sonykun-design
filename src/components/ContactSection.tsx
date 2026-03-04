import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <h2 className="heading-section mb-4">
              Start a<br />Project
            </h2>
            <p className="text-body mb-8">
              If you are interested in working together or discussing a project,
              please get in touch.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 text-base focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border py-2.5 text-base focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-1.5">
                  Project Type
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-2.5 text-base focus:outline-none focus:border-foreground transition-colors appearance-none"
                >
                  <option value="">Select a project type</option>
                  <option value="branding">Brand Identity Design</option>
                  <option value="website">Website Design</option>
                  <option value="ecommerce">Ecommerce Website</option>
                  <option value="marketing">Marketing Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-2.5 text-base focus:outline-none focus:border-foreground transition-colors resize-none"
                  style={{ minHeight: "120px", maxHeight: "160px" }}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="h-12 px-10 text-base font-medium w-full md:w-auto magnetic-btn">
                  Send Message
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
