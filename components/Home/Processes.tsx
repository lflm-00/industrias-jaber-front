"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import { processesData } from "@/lib/data/processes";
import ProcessCard from "./ProcessCard";

export default function Processes() {
  const { t } = useLanguage();

  const processes = processesData.map((p) => ({
    title: t(p.titleKey),
    description: t(p.descriptionKey),
    icon: p.icon,
    imageUrl: p.imageUrl,
    featured: p.featured,
  }));

  return (
    <section className="bg-coffee-cream dark:bg-[#2d241b] py-16">
      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
            {t("header.processes")}
          </h2>
          <h3 className="text-[#181411] dark:text-white text-3xl font-black lg:text-4xl">
            {t("home.processes.subtitle")}
          </h3>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process) => (
            <ProcessCard key={process.title} {...process} />
          ))}
        </div>
      </div>
    </section>
  );
}
