"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

export default function MachineryHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-coffee-cream dark:bg-[#2d241b] py-16 lg:py-20 border-b border-[#e8e4e0] dark:border-[#3a2f24]">
      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto text-center">
        <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full mx-auto mb-4 inline-block">
          {t("machinery.hero.tag")}
        </span>
        <h1 className="text-[#181411] dark:text-white text-4xl lg:text-5xl font-black mb-4">
          {t("machinery.hero.title")}
        </h1>
        <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg font-normal leading-relaxed max-w-[700px] mx-auto">
          {t("machinery.hero.description")}
        </p>
      </div>
    </section>
  );
}
