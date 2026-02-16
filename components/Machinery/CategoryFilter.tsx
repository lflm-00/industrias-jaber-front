"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";

export default function CategoryFilter() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    t("machinery.categories.roasting"),
    t("machinery.categories.grinding"),
    t("machinery.categories.processing"),
    t("machinery.categories.cleaning"),
  ];

  return (
    <section className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark border-b border-[#e8e4e0] dark:border-[#3a2f24] py-4 px-4 lg:px-40">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-buttons text-white font-bold"
                : "bg-white dark:bg-[#382d22] text-[#181411] dark:text-white border border-[#e8e4e0] dark:border-[#3a2f24] hover:bg-primary/10 hover:border-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
