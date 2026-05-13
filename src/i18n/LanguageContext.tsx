import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("sonykun-lang");
      if (stored === "zh" || stored === "en") return stored;
    } catch {}
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("sonykun-lang", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((prev) => (prev === "en" ? "zh" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};
