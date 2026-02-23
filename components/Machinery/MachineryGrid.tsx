"use client";

import { useState, useMemo } from "react";
import MachineryCard from "./MachineryCard";
import { ProductModal } from "@/components";
import { getAllMachinery } from "@/lib/data/machinery";

interface MachineryGridProps {
  activeCategory?: string;
}

export default function MachinerySection({ activeCategory = "All" }: MachineryGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const allProducts = getAllMachinery();

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return allProducts;
    }
    return allProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory, allProducts]);

  return (
    <>
      <section className="px-4 lg:px-40 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <MachineryCard
                key={product.id}
                category={product.category}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                onView={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

