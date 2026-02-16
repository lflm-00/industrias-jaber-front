import { getAllMachinery } from "@/lib/data";
import MachineryCard from "./MachineryCard";

const machineryProducts = getAllMachinery();

export default function MachineryGrid() {
  return (
    <section className="px-4 lg:px-40 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryProducts.map((product) => (
            <MachineryCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
