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
  const [focused, setFocused] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const ct = translations.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mdawoadr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        navigate("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-transparent border-0 border-b rounded-none px-0 py-3 text-base transition-colors duration-300 outline-none ${
      focused === field
        ? "border-b-secondary"
        : "border-b-border hover:border-b-secondary/50"
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
              <input type="hidden" name="source" value={source} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                    animate={{ color: focused === "name" ? "hsl(var(--secondary))" : undefined }}
                  >
                    {t(ct.name, lang)}
                  </motion.label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("name")}
                  />
                </div>
                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                    animate={{ color: focused === "email" ? "hsl(var(--secondary))" : undefined }}
                  >
                    {t(ct.email, lang)}
                  </motion.label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
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
                  animate={{ color: focused === "projectType" ? "hsl(var(--secondary))" : undefined }}
                >
                  {t(ct.projectType, lang)}
                </motion.label>
                <select
                  id="projectType"
                  name="project_type"
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
                  animate={{ color: focused === "message" ? "hsl(var(--secondary))" : undefined }}
                >
                  {t(ct.message, lang)}
                </motion.label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={3}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClasses("message")} resize-none`}
                  style={{ minHeight: "120px", maxHeight: "150px" }}
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-1">
                <p className="text-xs text-muted-foreground order-2 md:order-1">
                  {t(ct.responseTime, lang)}
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="h-12 px-10 text-base font-medium w-full md:w-auto btn-cta order-1 md:order-2 rounded-xl"
                >
                  {submitting ? "Sending..." : t(ct.submit, lang)}
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
