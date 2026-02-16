import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage debe ser usado dentro de LanguageProvider");
  }

  return context;
}

export function useLanguageSafe() {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      language: "es" as const,
      setLanguage: () => {},
      t: (key: string) => key,
      isReady: false,
    };
  }

  return context;
}
