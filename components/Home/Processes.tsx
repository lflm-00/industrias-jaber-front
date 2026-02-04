import ProcessCard from "./ProcessCard";

const processes = [
  {
    title: "Harvesting",
    description:
      "Our advanced sorting and cleaning technology ensures only the finest cherries move forward in your production line.",
    icon: "agriculture",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqKO_sn8Cgf3ARTF-oHtpdQOn8tupfNYY3uvHvh_9EpoNTMXOXyq_hMykdtv-74qFHoQC2EPdCAOu_serT1LD1PQi-u42OGKCkxsRGhItNydsKQiMiSpixqSgMZNDHPAPoaU-dJyBPlx0oBK5NwXY-LGnRCX56sLxIRDI78yJ2KZSlEr1eXRlgKGG-qCdAAYHbv08YZE597fgK1laGdtHQnI9Gwd3AaQ2KukEbK01rSJ-hU-ZYzI1oMrfT2FSuq_jnbyZxx2utai0",
    featured: false,
  },
  {
    title: "Roasting",
    description:
      "Precision temperature control and airflow management for achieving the perfect bean profile every single time.",
    icon: "local_fire_department",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsSHOpYrMA8Pgi65v7lOBBf4lqNnRJjusN8u6qA5yJEzNYgOaehZPMd-w64HxSpqQtf3ROtdt2wfAIajpDp4O7vj5HLDWE-PReDDIyVmcVwNhoff5SyFNo2cmpkYa7QDqUp9Q4YM26nrfqn-eVuIoWLLebGFyItY2iAplRjc9iaZ9CEwq4OXTF7jn3oFlsaTvU4l_Jl7miEeG2rqxo6FbdO1Saw1yrI83KhHbWWFA2rohFoBdaTPDjVbRCqFNUQxSeoUYKBi3jS-Y",
    featured: true,
  },
  {
    title: "Grinding",
    description:
      "Uniform particle size distribution for optimal extraction. Engineered for high-volume industrial environments.",
    icon: "blur_on",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK4fyH8f55RyJciOvAr60lsFO_sNXTzzE9tdym4IzAVT_6GSbzsMeKzZtiHNeXAfR2cSLuBiHsHEBp39dAOAybu5AWVKCdCOeh_2JqSWBFlAfxcd8xnC4FqlwKjYBNs9_smeOoMK8iOyc-mYOGNL001TSPc49vfIG8GmLdIvlAA7VnSsWTLHZIswF3sBpvgusiEhS0NcdPY7fAeExLjc7bwd6S5F67cU819vvogAUUl2ftuhu8a1diwbVqj-JR7JFy9BNURvj70Zw",
    featured: false,
  },
];

export default function Processes() {
  return (
    <section className="bg-coffee-cream dark:bg-[#2d241b] py-16">
      <div className="px-4 lg:px-40 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
            Our Workflow
          </h2>
          <h3 className="text-[#181411] dark:text-white text-3xl font-black lg:text-4xl">
            Integrated Processing Solutions
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
