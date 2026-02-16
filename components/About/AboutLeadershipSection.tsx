export default function AboutLeadershipSection() {
    const leaders = [
        {
            name: "Alejandro Jaber",
            role: "CEO & Founder",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKO_sn8Cgf3ARTF-oHtpdQOn8tupfNYY3uvHvh_9EpoNTMXOXyq_hMykdtv-74qFHoQC2EPdCAOu_serT1LD1PQi-u42OGKCkxsRGhItNydsKQiMiSpixqSgMZNDHPAPoaU-dJyBPlx0oBK5NwXY-LGnRCX56sLxIRDI78yJ2KZSlEr1eXRlgKGG-qCdAAYHbv08YZE597fgK1laGdtHQnI9Gwd3AaQ2KukEbK01rSJ-hU-ZYzI1oMrfT2FSuq_jnbyZxx2utai0",
            description: "A visionary engineer with 40 years of experience in thermal dynamics and coffee science.",
        },
        {
            name: "Elena Martinez",
            role: "Head of R&D",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsSHOpYrMA8Pgi65v7lOBBf4lqNnRJjusN8u6qA5yJEzNYgOaehZPMd-w64HxSpqQtf3ROtdt2wfAIajpDp4O7vj5HLDWE-PReDDIyVmcVwNhoff5SyFNo2cmpkYa7QDqUp9Q4YM26nrfqn-eVuIoWLLebGFyItY2iAplRjc9iaZ9CEwq4OXTF7jn3oFlsaTvU4l_Jl7miEeG2rqxo6FbdO1Saw1yrI83KhHbWWFA2rohFoBdaTPDjVbRCqFNUQxSeoUYKBi3jS-Y",
            description: "Leading the transition into IoT-enabled machinery and sustainable roasting technologies.",
        },
        {
            name: "Julian Rojas",
            role: "Chief Operations",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8Oyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
            description: "Ensuring that every client across 5 continents receives world-class support and installation.",
        },
        {
            name: "Sofia Gomez",
            role: "Lead Roast Master",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE",
            description: "Bridging the gap between engineering and the perfect cup, testing every prototype personally.",
        },
    ];

    return (
        <section className="px-4 lg:px-40 py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-[600px]">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Leadership</h2>
                        <h3 className="text-[#181411] dark:text-white text-4xl font-black">Meet the Experts</h3>
                    </div>
                    <p className="text-[#635548] dark:text-[#a8998a] max-w-[400px]">
                        Our team brings together mechanical engineers, roast masters, and agronomists to provide a 360° perspective on coffee technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, idx) => (
                        <div key={idx} className="group">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    alt={leader.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={leader.img}
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
