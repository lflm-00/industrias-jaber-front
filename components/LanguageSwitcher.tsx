"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import { Language } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-lg text-gray-600 dark:text-gray-300">
        language
      </span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="px-3 py-2 bg-white dark:bg-[#2d241b] border border-gray-300 dark:border-[#4a3f35] rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#3a2f24] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="es">{t("common.spanish")}</option>
        <option value="en">{t("common.english")}</option>
      </select>
    </div>
  );
}
