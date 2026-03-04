import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic TBD
  };

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl">
          <h2 className="heading-section mb-6">
            Start a<br />Project
          </h2>
          <p className="text-body text-lg mb-12">
            If you are interested in working together or discussing a project,
            please get in touch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors appearance-none"
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
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="h-14 px-12 text-base font-medium">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
