"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import { leadershipData } from "@/lib/data/leadership";
import Image from "next/image";

export default function AboutLeadershipSection() {
    const { t } = useLanguage();

    const leaders = leadershipData.map((leader) => ({
        name: t(leader.nameKey),
        role: t(leader.roleKey),
        description: t(leader.descriptionKey),
        imageUrl: leader.imageUrl,
    }));

    return (
        <section className="px-4 lg:px-40 py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-[600px]">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{t("about.leadership.tag")}</h2>
                        <h3 className="text-[#181411] dark:text-white text-4xl font-black">{t("about.leadership.title")}</h3>
                    </div>
                    <p className="text-[#635548] dark:text-[#a8998a] max-w-[400px]">
                        {t("about.leadership.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, idx) => (
                        <div key={idx} className="group">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Image
                                    src={leader.imageUrl}
                                    alt={leader.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-[#181411] dark:text-white">{leader.name}</h4>
                            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{leader.role}</p>
                            <p className="text-sm text-[#635548] dark:text-[#a8998a]">{leader.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
