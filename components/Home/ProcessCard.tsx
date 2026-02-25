"use client";

import Image from "next/image";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  featured?: boolean;
}

export default function ProcessCard({
  title,
  description,
  icon,
  imageUrl,
  featured = false,
}: ProcessCardProps) {
  return (
    <div
      className={`group flex flex-col gap-5 bg-white dark:bg-[#382d22] p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${
        featured ? "border-t-4 border-primary" : ""
      }`}
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            {icon}
          </span>
          <p className="text-[#181411] dark:text-white text-xl font-bold">
            {title}
          </p>
        </div>
        <p className="text-[#635548] dark:text-[#a8998a] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}