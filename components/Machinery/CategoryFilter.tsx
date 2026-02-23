"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useLanguage();

  const categoryKeys = ["roasting", "grinding", "processing", "cleaning"];

  const getCategoryLabel = (key: string) => {
    if (key === "All") return "All";
    return t(`machinery.categories.${key}`);
  };

  return (
    <section className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark border-b border-[#e8e4e0] dark:border-[#3a2f24] py-4 px-4 lg:px-40">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <button
          key="All"
          onClick={() => onCategoryChange("All")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            activeCategory === "All"
              ? "bg-buttons text-white font-bold"
              : "bg-white dark:bg-[#382d22] text-[#181411] dark:text-white border border-[#e8e4e0] dark:border-[#3a2f24] hover:bg-primary/10 hover:border-primary"
          }`}
        >
          All
        </button>
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === key
                ? "bg-buttons text-white font-bold"
                : "bg-white dark:bg-[#382d22] text-[#181411] dark:text-white border border-[#e8e4e0] dark:border-[#3a2f24] hover:bg-primary/10 hover:border-primary"
            }`}
          >
            {getCategoryLabel(key)}
          </button>
        ))}
      </div>
    </section>
  );
}
