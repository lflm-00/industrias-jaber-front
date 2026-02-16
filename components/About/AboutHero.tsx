"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="px-4 lg:px-40 pt-16 pb-8 text-center">
      <div className="max-w-[800px] mx-auto">
        <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">
          {t("about.hero.tag")}
        </span>
        <h1 className="text-[#181411] dark:text-white text-4xl lg:text-6xl font-black mt-6 leading-tight">
          {t("about.hero.title")}
        </h1>
        <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg mt-6 leading-relaxed">
          {t("about.hero.description")}
        </p>
      </div>
    </section>
  );
}
