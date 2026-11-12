import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";
import { langFromPath, localizePath } from "@/lib/locale";

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
  // Language comes from the URL (/zh/... = Chinese); switching navigates to the counterpart URL.
  const [lang] = useState<Lang>(() =>
    typeof window !== "undefined" ? langFromPath(window.location.pathname) : "en",
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    const { pathname, search, hash } = window.location;
    window.location.assign(localizePath(pathname, l) + search + hash);
  };
  const toggle = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};
