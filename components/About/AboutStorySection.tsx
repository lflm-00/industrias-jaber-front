"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

export default function AboutStorySection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 lg:px-40 py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-black text-[#181411] dark:text-white">{t("about.story.title")}</h2>
          <div className="w-16 h-1 bg-primary"></div>
          <p className="text-[#4a3f35] dark:text-[#cbbab0] leading-relaxed">
            {t("about.story.paragraph1")}
          </p>
          <p className="text-[#4a3f35] dark:text-[#cbbab0] leading-relaxed">
            {t("about.story.paragraph2")}
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-3xl font-black text-primary">1984</p>
              <p className="text-xs uppercase font-bold tracking-widest text-[#897561]">{t("about.story.founded")}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">45+</p>
              <p className="text-xs uppercase font-bold tracking-widest text-[#897561]">{t("about.story.countries")}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div
            className="w-full aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl sepia-filter"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE")',
            }}
          ></div>
          <div className="absolute -bottom-6 -right-6 bg-coffee-green p-6 rounded-xl shadow-xl text-white hidden lg:block">
            <p className="italic font-medium">{t("about.story.quote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
