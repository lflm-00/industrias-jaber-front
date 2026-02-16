"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

interface MachineryCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function MachineryCard({
  category,
  title,
  description,
  imageUrl,
}: MachineryCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group bg-white dark:bg-[#382d22] rounded-2xl shadow-sm border border-[#e8e4e0] dark:border-[#3a2f24] overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-bold text-primary uppercase tracking-tighter mb-2">
          {category}
        </span>
        <h3 className="text-[#181411] dark:text-white text-xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-[#635548] dark:text-[#a8998a] text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <button className="w-full py-3 px-4 bg-background-light dark:bg-background-dark border border-[#e8e4e0] dark:border-[#3a2f24] rounded-xl text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2">
          <span>{t("machinery.card.viewButton")}</span>
          <span className="material-symbols-outlined text-lg">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
