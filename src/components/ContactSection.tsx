import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

interface ContactSectionProps {
  source?: string;
}

const ContactSection = ({ source = "sonykun.ca home form" }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { lang } = useLanguage();
  const ct = translations.contact;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("project_type", formData.projectType);
      body.append("message", formData.message);
      body.append("source", source);
      await fetch("https://formspree.io/f/mdawoadr", {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      navigate("/thank-you");
    } catch {
      setSubmitting(false);
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-transparent border border-secondary/20 rounded-xl px-4 py-3 text-base transition-all duration-300 outline-none ${
      focused === field
        ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]"
        : "hover:border-secondary/40"
    }`;

  return (
    <section className="py-14 md:py-20">
      <div className="container-wide">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <h2 className="heading-section mb-4">
              {t(ct.title, lang).split("\n").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-body mb-8">
              {t(ct.body, lang)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                    animate={{ color: focused === "name" ? "hsl(var(--primary))" : undefined }}
                  >
                    {t(ct.name, lang)}
                  </motion.label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("name")}
                  />
                </div>
                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                    animate={{ color: focused === "email" ? "hsl(var(--primary))" : undefined }}
                  >
                    {t(ct.email, lang)}
                  </motion.label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("email")}
                  />
                </div>
              </div>

              <div>
                <motion.label
                  htmlFor="projectType"
                  className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                  animate={{ color: focused === "projectType" ? "hsl(var(--primary))" : undefined }}
                >
                  {t(ct.projectType, lang)}
                </motion.label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  onFocus={() => setFocused("projectType")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClasses("projectType")} appearance-none`}
                >
                  <option value="">{t(ct.selectProject, lang)}</option>
                  <option value="branding">{t(ct.optBranding, lang)}</option>
                  <option value="website">{t(ct.optWebsite, lang)}</option>
                  <option value="ecommerce">{t(ct.optEcommerce, lang)}</option>
                  <option value="marketing">{t(ct.optMarketing, lang)}</option>
                  <option value="other">{t(ct.optOther, lang)}</option>
                </select>
              </div>

              <div>
                <motion.label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                  animate={{ color: focused === "message" ? "hsl(var(--primary))" : undefined }}
                >
                  {t(ct.message, lang)}
                </motion.label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClasses("message")} resize-none`}
                  style={{ minHeight: "120px", maxHeight: "150px" }}
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-1">
                <p className="text-xs text-muted-foreground order-2 md:order-1">
                  {t(ct.responseTime, lang)}
                </p>
                <Button type="submit" size="lg" className="h-12 px-10 text-base font-medium w-full md:w-auto magnetic-btn order-1 md:order-2 rounded-xl">
                  {t(ct.submit, lang)}
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
