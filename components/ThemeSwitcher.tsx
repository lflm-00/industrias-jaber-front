"use client";

import { useTheme } from "@/lib/hooks/useTheme";

export function ThemeSwitcher() {
  const { theme, toggleTheme, isReady } = useTheme();

  if (!isReady) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center size-10 rounded-lg bg-white dark:bg-[#382d22] border border-[#e8e4e0] dark:border-[#4a3f35] hover:bg-[#f5f3f0] dark:hover:bg-[#48372a] transition-all duration-200 hover:border-primary dark:hover:border-primary/60 cursor-pointer group"
      title={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <span className="material-symbols-outlined text-lg text-[#635548]  group-hover:text-primary transition-colors">
          dark_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-lg text-[#a8998a] group-hover:text-primary transition-colors">
          light_mode
        </span>
      )}
    </button>
  );
}
