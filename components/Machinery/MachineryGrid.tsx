import MachineryCard from "./MachineryCard";

const machineryProducts = [
  {
    category: "Roasting Systems",
    title: "Titan-X Industrial Roaster",
    description:
      "High-capacity drum roaster with integrated PLC control and automated profile replication. Capacity: 120kg per batch.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE",
  },
  {
    category: "Industrial Grinding",
    title: "Precision Grind G-500",
    description:
      "Ultra-uniform particle distribution for industrial scale. Water-cooled discs to preserve aroma during high-volume production.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8iOyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
  },
  {
    category: "Cleaning & Sorting",
    title: "AeroClean Sorter",
    description:
      "Multi-stage air density separator combined with optical color sorting for defect-free green coffee preparation.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsSHOpYrMA8Pgi65v7lOBBf4lqNnRJjusN8u6qA5yJEzNYgOaehZPMd-w64HxSpqQtf3ROtdt2wfAIajpDp4O7vj5HLDWE-PReDDIyVmcVwNhoff5SyFNo2cmpkYa7QDqUp9Q4YM26nrfqn-eVuIoWLLebGFyItY2iAplRjc9iaZ9CEwq4OXTF7jn3oFlsaTvU4l_Jl7miEeG2rqxo6FbdO1Saw1yrI83KhHbWWFA2rohFoBdaTPDjVbRCqFNUQxSeoUYKBi3jS-Y",
  },
  {
    category: "Processing",
    title: "Solis Dryer Pro",
    description:
      "Horizontal rotary dryer with controlled humidity sensors to ensure perfect moisture content (10-12%) for export.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKO_sn8Cgf3ARTF-oHtpdQOn8tupfNYY3uvHvh_9EpoNTMXOXyq_hMykdtv-74qFHoQC2EPdCAOu_serT1LD1PQi-u42OGKCkxsRGhItNydsKQiMiSpixqSgMZNDHPAPoaU-dJyBPlx0oBK5NwXY-LGnRCX56sLxIRDI78yJ2KZSlEr1eXRlgKGG-qCdAAYHbv08YZE597fgK1laGdtHQnI9Gwd3AaQ2KukEbK01rSJ-hU-ZYzI1oMrfT2FSuq_jnbyZxx2utai0",
  },
  {
    category: "Roasting Systems",
    title: "MicroBatch Lab Roaster",
    description:
      "Specialized 5kg roaster for quality control laboratories and specialty coffee micro-lots. Professional control in a compact size.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE",
  },
  {
    category: "Industrial Grinding",
    title: "Multi-Mill Series 300",
    description:
      "Versatile modular grinding system designed for instant coffee production and high-volume espresso grinds.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8iOyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
  },
];

export default function MachineryGrid() {
  return (
    <section className="px-4 lg:px-40 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryProducts.map((product, index) => (
            <MachineryCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
