"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { Language } from "@/lib/i18n";

const languages: { code: Language; labelKey: string }[] = [
  { code: "es", labelKey: "common.spanish" },
  { code: "en", labelKey: "common.english" },
];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-[#3a2f24] transition"
      >
        <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
          language
        </span>
      </button>

      {open && (
        <div
          className="
            absolute 
            top-full 
            mt-2 
            min-w-[150px] 
            max-w-[90vw]
            left-1/2 
            -translate-x-1/2 
            sm:left-auto 
            sm:translate-x-0 
            sm:right-0
            bg-white 
            dark:bg-[#2d241b] 
            border 
            border-gray-200 
            dark:border-[#4a3f35] 
            rounded-xl 
            shadow-lg 
            overflow-hidden 
            z-50
          "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-[#3a2f24] ${
                language === lang.code
                  ? "font-semibold text-primary"
                  : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {t(lang.labelKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
