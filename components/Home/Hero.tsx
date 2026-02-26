"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import { heroData } from "@/lib/data/hero";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="px-4 lg:px-40 py-12 lg:py-24">
      <div className="@container max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <div className="flex flex-col gap-8 flex-1 @[480px]:min-w-[400px]">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">
                {t(heroData.tagKey)}
              </span>
              <h1 className="text-[#181411] dark:text-white text-5xl font-black leading-[1.1] tracking-[-0.04em] lg:text-6xl">
                {t(heroData.titleKey)}
              </h1>
              <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg font-normal leading-relaxed max-w-[500px]">
                {t(heroData.subtitleKey)}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href={heroData.primaryButtonLink}>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-buttons text-white text-base font-bold transition-transform hover:scale-105">
                  {t(heroData.primaryButtonTextKey)}
                </button>
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 border-2 border-[#181411] dark:border-white text-[#181411] dark:text-white text-base font-bold hover:bg-[#181411] hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-all">
                {t(heroData.secondaryButtonTextKey)}
              </button>
            </div>
          </div>
          <div className="w-full flex-1 relative">
            <div className="w-full aspect-[4/3] relative rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={heroData.imageUrl}
                alt={heroData.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-coffee-green p-6 rounded-xl shadow-xl text-white hidden @[864px]:block">
              <p className="text-3xl font-black">{heroData.yearsExperience}+</p>
              <p className="text-xs font-medium uppercase tracking-tighter opacity-80">
                {t(heroData.yearsExperienceTextKey)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
