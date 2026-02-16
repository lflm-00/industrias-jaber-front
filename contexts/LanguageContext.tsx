"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { Language, getSystemLanguage, translations } from "@/lib/i18n";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isReady: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Proveedor por defecto para evitar errores en SSR
const defaultValue: LanguageContextType = {
  language: "es",
  setLanguage: () => {},
  t: (key: string) => key,
  isReady: false,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [isReady, setIsReady] = useState(false);

  // Inicializar con idioma del sistema
  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("selectedLanguage") as Language | null;
      const initialLang = storedLang || getSystemLanguage();
      setLanguageState(initialLang);
      document.documentElement.lang = initialLang;
    } catch (error) {
      console.error("Error inicializando idioma:", error);
    }
    setIsReady(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("selectedLanguage", lang);
      document.documentElement.lang = lang;
    } catch (error) {
      console.error("Error guardando idioma:", error);
    }
  }, []);

  // Función para obtener traducciones
  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let current: any = translations[language];

      for (const k of keys) {
        if (current && typeof current === "object") {
          current = current[k];
        } else {
          return key;
        }
      }

      return typeof current === "string" ? current : key;
    },
    [language]
  );

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isReady,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
